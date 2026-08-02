/**
 * Re-optimize Don't Be Silent poster with CONTAIN fit
 * Shows the ENTIRE landscape image inside a 2:3 portrait frame
 * with black background (letterbox style)
 */
const sharp = require("sharp");
const fs = require("fs");

const INPUT = "/home/z/my-project/upload/received_398949841360771.jpeg";
const OUTPUT = "/home/z/my-project/public/images/films/dont-be-silent-v2.jpg";

async function process() {
  const meta = await sharp(INPUT).metadata();
  const origW = meta.width;
  const origH = meta.height;

  // Target: 1600x2400 (2:3 portrait) with the landscape image fit inside
  const TARGET_W = 1600;
  const TARGET_H = 2400;

  // Calculate scale to fit the landscape image inside the portrait frame
  const scale = Math.min(TARGET_W / origW, TARGET_H / origH);
  const newW = Math.round(origW * scale);
  const newH = Math.round(origH * scale);

  // Create a black background canvas and composite the image centered
  await sharp({
    create: {
      width: TARGET_W,
      height: TARGET_H,
      channels: 3,
      background: { r: 8, g: 7, b: 10 }, // noir color (#08070a)
    },
  })
    .composite([
      {
        input: await sharp(INPUT)
          .resize(newW, newH, { fit: "inside", kernel: "lanczos3" })
          .modulate({ brightness: 1.03, saturation: 1.08 })
          .sharpen({ sigma: 0.8, m1: 1.5, m2: 0.5 })
          .jpeg({ quality: 95, mozjpeg: true, chromaSubsampling: "4:4:4" })
          .toBuffer(),
        gravity: "center",
      },
    ])
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
  console.log(`dont-be-silent-v2.jpg: ${origW}x${origH} → ${TARGET_W}x${TARGET_H} (${outKb}KB) [contain fit, full image visible]`);
}

process().catch((e) => { console.error(e); process.exit(1); });
