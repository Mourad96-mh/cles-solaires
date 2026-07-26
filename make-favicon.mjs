/* Build the favicons from the real logo mark (the sun emblem above the wordmark).
   Source: public/media/logo-light.png — its pale glyph reads on the navy plate. */
import sharp from "sharp";
import { writeFileSync } from "node:fs";

const SRC = "public/media/logo-light.png";
const NAVY = "#0e2a3b";
// Emblem bounding boxes measured on the source (the wordmark starts at y=566).
const CROP = { left: 110, top: 0, width: 617, height: 556 };
// Sun only, without the two pile legs (y >= 498): they turn to mush under 48px.
const CROP_SUN = { left: 110, top: 0, width: 617, height: 497 };

/* Square canvas: navy rounded plate + emblem centred at ~76% of the side. */
async function icon(size, { rounded = true, pad = 0.12, small = false } = {}) {
  const inner = Math.round(size * (1 - pad * 2));
  let em = sharp(SRC)
    .extract(small ? CROP_SUN : CROP)
    .resize(inner, inner, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } });
  // Thin amber strokes wash out against the navy at icon sizes.
  if (small) em = em.modulate({ saturation: 1.3 }).sharpen();
  const emblem = await em.toBuffer();

  const r = rounded ? Math.round(size * 0.22) : 0;
  const plate = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}">
       <rect width="${size}" height="${size}" rx="${r}" ry="${r}" fill="${NAVY}"/>
     </svg>`
  );

  return sharp(plate)
    .composite([{ input: emblem, gravity: "center" }])
    .png()
    .toBuffer();
}

/* ICO container: 16/32/48 PNG frames, for legacy browsers and Windows pins. */
function ico(frames) {
  const head = Buffer.alloc(6 + 16 * frames.length);
  head.writeUInt16LE(0, 0);
  head.writeUInt16LE(1, 2);
  head.writeUInt16LE(frames.length, 4);
  let offset = head.length;
  frames.forEach(({ size, png }, i) => {
    const e = 6 + 16 * i;
    head.writeUInt8(size >= 256 ? 0 : size, e);
    head.writeUInt8(size >= 256 ? 0 : size, e + 1);
    head.writeUInt8(0, e + 2);
    head.writeUInt8(0, e + 3);
    head.writeUInt16LE(1, e + 4);
    head.writeUInt16LE(32, e + 6);
    head.writeUInt32LE(png.length, e + 8);
    head.writeUInt32LE(offset, e + 12);
    offset += png.length;
  });
  return Buffer.concat([head, ...frames.map((f) => f.png)]);
}

const out = [
  ["public/favicon-32.png", await icon(32, { pad: 0.05, small: true })],
  ["public/favicon-192.png", await icon(192)],
  ["public/favicon-512.png", await icon(512)],
  // Apple crops its own corners, so ship a full-bleed square.
  ["public/apple-touch-icon.png", await icon(180, { rounded: false })],
];
out.forEach(([p, buf]) => writeFileSync(p, buf));

const frames = await Promise.all(
  [16, 32, 48].map(async (size) => ({ size, png: await icon(size, { pad: 0.05, small: true }) }))
);
writeFileSync("public/favicon.ico", ico(frames));

console.log(out.map(([p]) => p).join("\n") + "\npublic/favicon.ico");
