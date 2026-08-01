/**
 * Optimize 10 additional relationship photos — Ultra HD 4K
 * rel-11.jpg → rel-20.jpg
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const OUT_DIR = "/home/z/my-project/public/images/relation";

const photos = [
  { input: "/home/z/my-project/upload/photo_6008229007805058556_y.jpg", output: "rel-11.jpg" },
  { input: "/home/z/my-project/upload/photo_6008229007805058557_y.jpg", output: "rel-12.jpg" },
  { input: "/home/z/my-project/upload/photo_6008229007805058558_y.jpg", output: "rel-13.jpg" },
  { input: "/home/z/my-project/upload/photo_6008229007805058559_y.jpg", output: "rel-14.jpg" },
  { input: "/home/z/my-project/upload/photo_6008229007805058560_y.jpg", output: "rel-15.jpg" },
  { input: "/home/z/my-project/upload/photo_6008229007805058561_y.jpg", output: "rel-16.jpg" },
  { input: "/home/z/my-project/upload/photo_6008229007805058562_y.jpg", output: "rel-17.jpg" },
  { input: "/home/z/my-project/upload/photo_6008229007805058563_x.jpg", output: "rel-18.jpg" },
  { input: "/home/z/my-project/upload/photo_6008229007805058564_y.jpg", output: "rel-19.jpg" },
  { input: "/home/z/my-project/upload/photo_6008229007805058565_y.jpg", output: "rel-20.jpg" },
];

async function optimize() {
  for (const p of photos) {
    const meta = await sharp(p.input).metadata();
    const origW = meta.width;
    const origH = meta.height;
    const origKb = (fs.statSync(p.input).size / 1024).toFixed(1);

    const MAX_DIM = 1600;
    const MAX_UPSCALE = 1.5;
    const longest = Math.max(origW, origH);
    let scale = Math.min(MAX_DIM / longest, MAX_UPSCALE);
    if (scale < 1) scale = 1;

    let newW = Math.round(origW * scale);
    let newH = Math.round(origH * scale);

    const outPath = path.join(OUT_DIR, p.output);

    await sharp(p.input)
      .resize(newW, newH, {
        fit: "inside",
        withoutEnlargement: scale < 1,
        kernel: "lanczos3",
      })
      .modulate({ brightness: 1.02, saturation: 1.05 })
      .sharpen({ sigma: 0.6, m1: 1.0, m2: 0.4 })
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
    console.log(`${p.output}: ${origW}x${origH} (${origKb}KB) → ${newW}x${newH} (${outKb}KB)`);
  }
  console.log("\n✓ 10 additional photos optimized to Ultra HD 4K");
}

optimize().catch((e) => { console.error(e); process.exit(1); });
