import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, rmSync, statSync } from "node:fs";
import sharp from "sharp";

// Usage: node ingest-media.mjs [sourceDir]
//
// Turns the client's raw phone captures into web assets under public/media.
// Photos become WebP; videos become mp4 + webm + a WebP poster, matching the
// convention already used by hero-process-*. Source files are named by capture
// timestamp, which says nothing about content — the manifest below is the only
// record of what each one actually shows, so keep it accurate.
//
// Captions here were written from looking at every file, not from the summary
// report of 06/08/2026: that report mislabels 20250523_095939 as a drilling
// operation when it shows the hollow jack being fitted. Nothing is asserted
// here that the image itself does not show.

const SRC = process.argv[2] || "C:/Users/MOURAD/Downloads";
const OUT = "public/media";
const HOLD = "media-en-attente"; // not shipped — see `hold: true` below

// These photos are gravel, grass and galvanised steel — high-entropy texture
// that WebP encodes expensively. 1280 is wider than any container that shows
// them (split__media tops out around 640 CSS px, doubled for retina).
const PHOTO_W = 1280;
const PHOTO_Q = 72;

/* Videos the client asked to see slowed down ("en la ralentissant").
   Both are under 3 s at source, unreadable at normal speed. */
const SLOW = 2.5;

const MANIFEST = [
  // ---- Photos -------------------------------------------------------------
  {
    src: "20250403_141423.jpg",
    out: "foreuse-attelage",
    kind: "photo",
    // Released by the client himself: he pasted this exact shot into his
    // corrections of 10/08/2026 as "photo 2" and asked for it whole, on the
    // pile page. Third-party branding ("AGIR Laboratoire", phone, e-mail) and
    // the licence plate FR-215-RT are still legible across the left of the
    // frame, and cropping them out would remove the van — which is the point of
    // the picture. He owns that call; it is flagged, not hidden.
    note: "AGIR Laboratoire branding + licence plate visible — client cleared it 10/08/2026",
    shows: "Machine de forage légère attelée à la boule de traction d'une camionnette",
  },
  {
    src: "20250418_102745.jpg",
    out: "foreuse-autonome",
    kind: "photo",
    shows: "Machine de forage autonome sur chenilles, mât dressé, avant forage",
  },
  {
    src: "20250418_103508.jpg",
    out: "foreuse-autonome-forage",
    kind: "photo",
    shows: "Machine de forage autonome en cours de forage, opérateur guidant le train de tiges",
  },
  {
    src: "20250523_094439.jpg",
    out: "pieu-entretoise",
    kind: "photo",
    shows: "Tête de pieu équipée de son entretoise de montage et de la tige d'allonge, avant mise en place du vérin",
  },
  {
    src: "20250523_094512.jpg",
    out: "pompe-verin",
    kind: "photo",
    shows: "Mise en pression à la pompe hydraulique manuelle, manomètre en ligne et vérin creux sur le pieu",
  },
  {
    src: "20250523_095939.jpg",
    out: "verin-creux-en-place",
    kind: "photo",
    // NOT a drilling operation, whatever the 06/08 report says.
    shows: "Vérin creux hydraulique en place sur l'entretoise, flexible raccordé, avant mise en traction",
  },

  // ---- Videos -------------------------------------------------------------
  // `width` is the width of the *displayed* frame. Both clips below report
  // 1920x1080 to ffprobe but carry a -90 rotation matrix, which ffmpeg applies
  // on decode — so they are portrait, and asking for 1280 wide yielded a
  // 1280x2276 monster. Treat them like any other phone portrait: 720.
  {
    src: "20251203_142543.mp4",
    out: "chevron-vis-blocage",
    kind: "video",
    width: 720,
    poster: 1.0,
    slow: SLOW,
    shows: "Détail de la vis de blocage traversant le chevron autobloquant galvanisé",
  },
  {
    src: "20251204_154535.mp4",
    out: "chevron-avant-blocage",
    kind: "video",
    width: 720,
    poster: 1.4,
    slow: SLOW,
    shows: "Chevron d'essai en appui sous les panneaux, avant blocage définitif",
  },
  {
    src: "20251204_154022_2.mp4",
    out: "pose-panneaux-glisses",
    kind: "video",
    width: 720, // portrait source
    poster: 7.0,
    shows: "Pose de panneaux glissés sur les chevrons d'une ombrière, nacelle en arrière-plan",
  },
  {
    // Sent over WhatsApp on 15/08/2026 for the "VIDÉO DU PIEU" slot the client
    // marked on the technical description (scan of 10/08/2026, p. 10).
    // WhatsApp had already re-encoded it down to 478x850, so `width` matches the
    // source: asking for more would only upscale a compressed picture.
    src: "WhatsApp Video 2026-08-15 at 20.09.35.mp4",
    out: "pieu-pelles-terrain",
    kind: "video",
    width: 478,
    poster: 5.0, // blades at full spread — the one frame that shows the mechanism
    // The pile is held in the hand, above ground, over an open pit: this is a
    // demonstration of the blade linkage, NOT a pile being installed. Any copy
    // using it has to say so, exactly as for the workshop prototype below.
    shows: "Démonstration à la main du déploiement des pelles en pied de pieu, hors sol, sur le chantier",
  },
  {
    src: "VID_20260104_180354.mp4",
    out: "pieu-essai-atelier",
    kind: "video",
    width: 900,
    poster: 5.5,
    // The client insisted this be labelled honestly: the part is raw steel and
    // the bolts are deliberately over-length. Any page using it must say so.
    disclaimer:
      "Prototype d'essai en atelier : pièce non galvanisée, boulons de longueur provisoire.",
    shows: "Prototype de pieu d'essai monté en atelier, acier brut et boulonnerie provisoire",
  },
];

function run(cmd, args) {
  const r = spawnSync(cmd, args, { stdio: ["ignore", "ignore", "pipe"] });
  if (r.status !== 0) throw new Error(`${cmd} failed:\n${r.stderr?.toString().slice(-800)}`);
}

const kb = (p) => `${(statSync(p).size / 1024).toFixed(0)} ko`;

mkdirSync(OUT, { recursive: true });
mkdirSync(HOLD, { recursive: true });

const missing = [];
for (const m of MANIFEST) {
  const src = `${SRC}/${m.src}`;
  if (!existsSync(src)) {
    missing.push(m.src);
    continue;
  }
  const dir = m.hold ? HOLD : OUT;

  if (m.kind === "photo") {
    const dest = `${dir}/${m.out}.webp`;
    // .rotate() with no argument applies the EXIF orientation — phone shots are
    // portrait only by metadata, and sharp drops that tag on resize.
    await sharp(src).rotate().resize({ width: PHOTO_W, withoutEnlargement: true })
      .webp({ quality: PHOTO_Q }).toFile(dest);
    console.log(`${m.out}.webp  ${kb(dest)}${m.hold ? "  [EN ATTENTE]" : ""}`);
    continue;
  }

  // Even dimensions are required by yuv420p; -2 keeps the aspect ratio.
  const scale = `scale=${m.width}:-2`;
  const vf = m.slow ? `setpts=${m.slow}*PTS,${scale}` : scale;
  const mp4 = `${dir}/${m.out}.mp4`;
  const webm = `${dir}/${m.out}.webm`;
  const poster = `${dir}/${m.out}-poster.webp`;

  // -an throughout: these autoplay muted, so the audio track is dead weight.
  run("ffmpeg", ["-v", "error", "-y", "-i", src, "-vf", vf, "-an",
    "-c:v", "libx264", "-crf", "31", "-preset", "slow",
    "-pix_fmt", "yuv420p", "-movflags", "+faststart", mp4]);
  run("ffmpeg", ["-v", "error", "-y", "-i", src, "-vf", vf, "-an",
    "-c:v", "libvpx-vp9", "-crf", "42", "-b:v", "0",
    "-row-mt", "1", "-cpu-used", "2", webm]);
  // Poster is seeked on the source, so its timestamp ignores any slowdown.
  run("ffmpeg", ["-v", "error", "-y", "-ss", String(m.poster), "-i", src,
    "-frames:v", "1", "-vf", scale, "-quality", "72", poster]);

  // VP9 does not always beat x264 on short handheld clips. A <source> list is
  // tried in order and the browser takes the first it can play, so a webm that
  // lost is a file every modern browser would download *instead of* the smaller
  // mp4. Drop it and let the markup fall through to mp4 alone.
  let keptWebm = true;
  if (statSync(webm).size >= statSync(mp4).size) {
    rmSync(webm);
    keptWebm = false;
  }

  console.log(
    `${m.out}  mp4 ${kb(mp4)}` +
    (keptWebm ? ` / webm ${kb(webm)}` : " / webm écarté (plus lourd)") +
    ` / poster ${kb(poster)}` +
    (m.slow ? `  [ralenti x${m.slow}]` : ""),
  );
}

if (missing.length) {
  console.log(`\nIntrouvable dans ${SRC} :`);
  for (const f of missing) console.log(`  - ${f}`);
}
