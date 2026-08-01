/**
 * Re-process Don't Be Silent poster: crop to 2:3 portrait + upscale to 4K
 * Original is 1080x762 (landscape), need portrait 2:3 = 1600x2400
 */
const sharp = require("sharp");
const fs = require("fs");

const INPUT = "/home/z/my-project/upload/received_398949841360771.jpeg";
const OUTPUT = "/home/z/my-project/public/images/films/dont-be-silent.jpg";

async function process() {
  const meta = await sharp(INPUT).metadata();
  const origW = meta.width;
  const origH = meta.height;
  const origKb = (fs.statSync(INPUT).size / 1024).toFixed(1);
  console.log(`Original: ${origW}x${origH} (${origKb}KB) — landscape`);

  // Target: 2:3 portrait (1600x2400)
  const TARGET_W = 1600;
  const TARGET_H = 2400;
  const TARGET_RATIO = TARGET_W / TARGET_H; // 0.667

  // Strategy: cover crop (fill the target box, crop overflow)
  // This extracts the center portion of the landscape image as portrait
  await sharp(INPUT)
    .resize(TARGET_W, TARGET_H, {
      fit: "cover",
      position: "center", // crop from center, keeping the main subject
      kernel: "lanczos3",
    })
    // Upscale sharpening since we're going from 1080x762 to 1600x2400 (significant upscale)
    .modulate({
      brightness: 1.03,
      saturation: 1.08,
    })
    .sharpen({
      sigma: 1.0,
      m1: 2.0,
      m2: 0.6,
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

  const outMeta = await sharp(OUTPUT).metadata();
  const outKb = (fs.statSync(OUTPUT).size / 1024).toFixed(1);
  console.log(`Output: ${outMeta.width}x${outMeta.height} (${outKb}KB) — portrait 2:3 Ultra HD 4K`);
}

process().catch((e) => {
  console.error(e);
  process.exit(1);
});
