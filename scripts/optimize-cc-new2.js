/**
 * Optimize 2 new content creator photos — Ultra HD 4K
 * Replace current beauty-creator.jpg and lifestyle-creator.jpg
 */
const sharp = require("sharp");
const fs = require("fs");

const OUT_DIR = "/home/z/my-project/public/images/content-creator";

const photos = [
  {
    input: "/home/z/my-project/upload/photo_6012603350391655924_w.jpg",
    output: "beauty-creator.jpg",
    label: "Beauty — Flamingo Vibes",
  },
  {
    input: "/home/z/my-project/upload/photo_6012603350391655925_w.jpg",
    output: "lifestyle-creator.jpg",
    label: "Lifestyle — Content Creator",
  },
];

async function optimize() {
  for (const p of photos) {
    const meta = await sharp(p.input).metadata();
    const origW = meta.width;
    const origH = meta.height;
    const origKb = (fs.statSync(p.input).size / 1024).toFixed(1);

    // Target: 1600px width (retina-ready), max upscale 1.5x
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
