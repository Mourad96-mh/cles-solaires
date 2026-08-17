import { PDFDocument } from "pdf-lib";
import { writeFileSync, readdirSync, statSync } from "node:fs";
import { dirname, basename } from "node:path";
import sharp from "sharp";

// Usage: node make-pdf.mjs [sourceDirOrPng] [outputPdf] [--a4]
//
// Default mode gives one PDF page per screenshot, however tall that is — fine on
// a desktop, where you scroll the page. Pass --a4 to cut each capture into
// A4-proportioned slices instead: a phone PDF viewer fits a page to the screen,
// so a single 1440x6030 page shrinks until the text is unreadable. Send the --a4
// build to anyone reading on a phone (e.g. over WhatsApp, which would wreck the
// PNGs outright — it downscales images to ~1600px and recompresses them).
const args = process.argv.slice(2);
const A4 = args.includes("--a4");
const positional = args.filter((a) => !a.startsWith("--"));

// The source is a directory of captures, or a single .png — one PDF per site
// page, to send the client just the page he asked about.
const SRC = positional[0] || "client-screenshots";
const single = statSync(SRC).isFile();
const DIR = single ? dirname(SRC) : SRC;
const OUTPUT =
  positional[1] || (A4 ? "Les-Cles-Solaires-maquette-A4.pdf" : "Les-Cles-Solaires-maquette.pdf");

// Downscale 2x-retina shots to ~1440px wide and encode as JPEG to keep the PDF
// email-friendly. 1440 is the capture's CSS width, so text lands at native size.
const MAX_W = 1440;
const A4_RATIO = 1.414; // A4 portrait, height / width
const OVERLAP = 70; // repeat a sliver across the cut so no line is lost on it

const files = single
  ? [basename(SRC)]
  : readdirSync(DIR)
      .filter((f) => f.endsWith(".png"))
      .sort();

const pdf = await PDFDocument.create();
let pageCount = 0;

/** Embed a JPEG buffer as its own page, sized to the image. */
async function addPage(jpg) {
  const img = await pdf.embedJpg(jpg);
  const page = pdf.addPage([img.width, img.height]);
  page.drawImage(img, { x: 0, y: 0, width: img.width, height: img.height });
  pageCount++;
}

for (const f of files) {
  const resized = sharp(`${DIR}/${f}`).resize({ width: MAX_W, withoutEnlargement: true });

  if (!A4) {
    await addPage(await resized.jpeg({ quality: 80, mozjpeg: true }).toBuffer());
    continue;
  }

  // Resize once into a lossless buffer, then slice that — re-reading the source
  // per slice would redo the downscale every time.
  const buf = await resized.png().toBuffer();
  const { width, height } = await sharp(buf).metadata();
  // Derive the cut from the image's own width: a mobile capture stays ~780px
  // wide, so a slice height fixed to MAX_W's A4 would give pages far taller
  // than A4 — exactly the unreadable fit-to-screen this mode exists to avoid.
  const SLICE_H = Math.round(width * A4_RATIO);
  const step = SLICE_H - OVERLAP;
  let slices = 0;

  for (let top = 0; top < height; top += step) {
    const h = Math.min(SLICE_H, height - top);
    // Skip a trailing sliver the previous slice's overlap already showed.
    if (h < OVERLAP && top > 0) break;
    const jpg = await sharp(buf)
      .extract({ left: 0, top, width, height: h })
      .jpeg({ quality: 82, mozjpeg: true })
      .toBuffer();
    await addPage(jpg);
    slices++;
  }
  console.log(`${f} -> ${slices} slice(s)`);
}

const bytes = await pdf.save();
writeFileSync(OUTPUT, bytes);
console.log(
  `${A4 ? "A4 " : ""}PDF created: ${OUTPUT} (${pageCount} pages, ${(bytes.length / 1e6).toFixed(1)} MB)`,
);
