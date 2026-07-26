import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";

const EDGE = "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe";
const BASE = "http://localhost:4178";

const pages = [
  ["01-accueil", "/"],
  ["02-produits", "/produits"],
  ["03-chevrons", "/chevrons"],
  ["04-structures", "/structures"],
  ["05-pieux", "/pieux"],
  ["06-references", "/references"],
  ["07-contact", "/contact"],
  ["08-devis", "/devis"],
  ["09-mentions-legales", "/mentions-legales"],
  ["10-confidentialite", "/confidentialite"],
];

// Capture either desktop, mobile, or both via CLI arg: `node shoot.mjs mobile`
const which = (process.argv[2] || "both").toLowerCase();
const profiles = [
  { id: "desktop", dir: "client-screenshots", width: 1440, height: 900, dsf: 2, mobile: false },
  { id: "mobile", dir: "client-screenshots-mobile", width: 390, height: 844, dsf: 2, mobile: true },
].filter((p) => which === "both" || which === p.id);

const browser = await puppeteer.launch({
  executablePath: EDGE,
  headless: "new",
  args: ["--hide-scrollbars"],
});

for (const p of profiles) {
  mkdirSync(p.dir, { recursive: true });
  const page = await browser.newPage();
  await page.setViewport({
    width: p.width,
    height: p.height,
    deviceScaleFactor: p.dsf,
    isMobile: p.mobile,
    hasTouch: p.mobile,
  });
  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);

  for (const [name, route] of pages) {
    await page.goto(BASE + route, { waitUntil: "networkidle0", timeout: 30000 });
    await page.evaluate(() => document.fonts && document.fonts.ready);
    // Force reveal sections visible, and pin the vh-based hero to a fixed px height
    // (same visual size at this viewport) so the full-page capture can't re-expand it.
    const heroPx = Math.round(0.86 * p.height);
    await page.addStyleTag({
      content:
        ".reveal{opacity:1!important;transform:none!important;transition:none!important;}" +
        `.hero__inner{min-height:${heroPx}px!important;}`,
    });
    // The clip capture doesn't scroll, so below-fold loading="lazy" images would
    // stay blank. Scroll through the whole page to trigger native lazy-loading,
    // return to top, then wait for every image to fully decode.
    await page.evaluate(async () => {
      await new Promise((res) => {
        let y = 0;
        const step = () => {
          window.scrollTo(0, y);
          y += window.innerHeight;
          if (y < document.body.scrollHeight) setTimeout(step, 50);
          else { window.scrollTo(0, 0); setTimeout(res, 200); }
        };
        step();
      });
      const imgs = [...document.querySelectorAll("img")];
      await Promise.all(
        imgs.map(async (i) => {
          if (!i.complete) await new Promise((r) => { i.onload = i.onerror = r; });
          try { await i.decode(); } catch {}
        })
      );
    });
    await new Promise((r) => setTimeout(r, 400));
    const file = `${p.dir}/${name}.png`;
    // Manual clip keeps the layout viewport fixed so vh-based heights (e.g. hero
    // min-height: 86vh) don't balloon — fullPage resizes the viewport and breaks them.
    const dims = await page.evaluate(() => ({
      w: document.documentElement.clientWidth,
      h: document.documentElement.scrollHeight,
    }));
    // Chromium's capture surface maxes out at 16384px per side. Cap the scale factor
    // so a tall page's device-pixel height stays under it (otherwise it wraps/duplicates).
    const MAX_PX = 16000;
    const safeDsf = Math.min(p.dsf, MAX_PX / dims.h);
    if (safeDsf < p.dsf) {
      await page.setViewport({
        width: p.width, height: p.height, deviceScaleFactor: safeDsf,
        isMobile: p.mobile, hasTouch: p.mobile,
      });
    }
    await page.screenshot({
      path: file,
      captureBeyondViewport: true,
      clip: { x: 0, y: 0, width: dims.w, height: dims.h },
    });
    // restore base scale for the next page
    if (safeDsf < p.dsf) {
      await page.setViewport({
        width: p.width, height: p.height, deviceScaleFactor: p.dsf,
        isMobile: p.mobile, hasTouch: p.mobile,
      });
    }
    console.log(`[${p.id}] ${name} -> ${file}  (h=${dims.h}px, ${safeDsf.toFixed(2)}x)`);
  }
  await page.close();
}

await browser.close();
console.log("DONE");
