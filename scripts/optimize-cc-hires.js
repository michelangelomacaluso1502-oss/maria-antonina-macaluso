/**
 * Optimize 2 high-res content creator photos from Cronache Mediterranee
 * - Photo 1: 1200x1599 (portrait) → Maria Antonina sul pontile mare notte
 * - Photo 2: 1126x1591 (portrait) → Maria Antonina in studio TV/radio
 * Target: 1600px width (retina-ready), portrait aspect 4/5
 */
const sharp = require("sharp");
const fs = require("fs");

const OUT_DIR = "/home/z/my-project/public/images/content-creator";

const photos = [
  {
    input: "/tmp/cc-hi-1.jpg",
    output: "beauty-creator.jpg",
    label: "Maria Antonina — Lifestyle notte mare",
  },
  {
    input: "/tmp/cc-hi-2.jpg",
    output: "lifestyle-creator.jpg",
    label: "Maria Antonina — Studio TV/radio",
  },
];

async function optimize() {
  for (const p of photos) {
    const meta = await sharp(p.input).metadata();
    const origW = meta.width;
    const origH = meta.height;
    const origKb = (fs.statSync(p.input).size / 1024).toFixed(1);

    // Target: 1600px width (retina-ready), keep aspect ratio
    const TARGET_W = 1600;
    const MAX_UPSCALE = 1.5;
    const scale = Math.min(TARGET_W / origW, MAX_UPSCALE);
    let newW = Math.round(origW * scale);
    let newH = Math.round(origH * scale);

    const outPath = `${OUT_DIR}/${p.output}`;

    await sharp(p.input)
      .resize(newW, newH, {
        fit: "inside",
        withoutEnlargement: scale < 1,
        kernel: "lanczos3",
      })
      .modulate({
        brightness: 1.02,
        saturation: 1.05,
      })
      .sharpen({
        sigma: 0.6,
        m1: 1.0,
        m2: 0.4,
      })
      .jpeg({
        quality: 95,
        mozjpeg: true,
        chromaSubsampling: "4:4:4",
        trellisQuantisation: true,
        overshootDeringing: true,
        optimizeScans: true,
      })
      .toFile(outPath);

    const outKb = (fs.statSync(outPath).size / 1024).toFixed(1);
    console.log(
      `${p.output}: ${origW}x${origH} (${origKb}KB) → ${newW}x${newH} (${outKb}KB) [${p.label}]`
    );
  }
  console.log("\n✓ Content creator photos optimized to Ultra HD 4K");
}

optimize().catch((e) => {
  console.error(e);
  process.exit(1);
});
