/**
 * Optimize new content creator photo (selfie in beauty office)
 * Replace red-carpet-taormina.jpg with lifestyle-creator.jpg
 */
const sharp = require("sharp");
const fs = require("fs");

const INPUT = "/tmp/cc-ae1.jpg";
const OUTPUT = "/home/z/my-project/public/images/content-creator/lifestyle-creator.jpg";

async function process() {
  const meta = await sharp(INPUT).metadata();
  const origW = meta.width;
  const origH = meta.height;
  const origKb = (fs.statSync(INPUT).size / 1024).toFixed(1);

  // Target: 1600px width (retina-ready), max upscale 1.5x
  const TARGET_W = 1600;
  const MAX_UPSCALE = 1.5;
  const scale = Math.min(TARGET_W / origW, MAX_UPSCALE);
  let newW = Math.round(origW * scale);
  let newH = Math.round(origH * scale);

  await sharp(INPUT)
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
    .toFile(OUTPUT);

  const outKb = (fs.statSync(OUTPUT).size / 1024).toFixed(1);
  console.log(`lifestyle-creator.jpg: ${origW}x${origH} (${origKb}KB) → ${newW}x${newH} (${outKb}KB) [Ultra HD 4K]`);
}

process().catch((e) => {
  console.error(e);
  process.exit(1);
});
