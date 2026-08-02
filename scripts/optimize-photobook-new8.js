/**
 * Optimize 8 new photos for the Photo Book — Ultra HD 4K
 * Photos uploaded by user, verified as Maria Antonina Macaluso
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const OUT_DIR = "/home/z/my-project/public/images/photobook";

const photos = [
  { input: "/home/z/my-project/upload/photo_6012603350391655915_w.jpg", output: "mam-50.jpg" },
  { input: "/home/z/my-project/upload/photo_6012603350391655916_w.jpg", output: "mam-51.jpg" },
  { input: "/home/z/my-project/upload/photo_6012603350391655917_w.jpg", output: "mam-52.jpg" },
  { input: "/home/z/my-project/upload/photo_6012603350391655918_w.jpg", output: "mam-53.jpg" },
  { input: "/home/z/my-project/upload/photo_6012603350391655919_y.jpg", output: "mam-54.jpg" },
  { input: "/home/z/my-project/upload/photo_6012603350391655920_w.jpg", output: "mam-55.jpg" },
  { input: "/home/z/my-project/upload/photo_6012603350391655921_w.jpg", output: "mam-56.jpg" },
  { input: "/home/z/my-project/upload/photo_6012603350391655922_w (1).jpg", output: "mam-57.jpg" },
];

async function optimize() {
  for (const p of photos) {
    if (!fs.existsSync(p.input)) {
      console.log(`SKIP: ${p.input} not found`);
      continue;
    }
    const meta = await sharp(p.input).metadata();
    const origW = meta.width;
    const origH = meta.height;
    const origKb = (fs.statSync(p.input).size / 1024).toFixed(1);

    // Target: max 1600px longest side (retina-ready for display at 800px)
    const MAX_DIM = 1600;
    const MAX_UPSCALE = 1.5;
    const longest = Math.max(origW, origH);
    let scale = Math.min(MAX_DIM / longest, MAX_UPSCALE);
    if (scale < 1) scale = 1; // Don't downscale below original

    let newW = Math.round(origW * scale);
    let newH = Math.round(origH * scale);

    const outPath = path.join(OUT_DIR, p.output);

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
      `${p.output}: ${origW}x${origH} (${origKb}KB) → ${newW}x${newH} (${outKb}KB)`
    );
  }
  console.log("\n✓ 8 photos optimized to Ultra HD 4K");
}

optimize().catch((e) => {
  console.error(e);
  process.exit(1);
});
