/**
 * Optimize photos for the biografia section
 * - Target: retina-ready (max 1600px longest side), mozjpeg quality 92
 * - Maintain aspect ratio (no forced crop, no upscale beyond 1.5x)
 * - "4K quality" interpreted as: high visual quality + retina-ready dimensions
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const OUT_DIR = "/home/z/my-project/public/images/biografia";

const photos = [
  {
    input: "/home/z/my-project/upload/6008229007805058862.jpg",
    output: "incontro-angelo.jpg",
  },
  {
    input: "/home/z/my-project/upload/6008229007805058866.jpg",
    output: "fidanzamento-angelo.jpg",
  },
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
    let targetLongest = Math.min(MAX_DIM, longest * MAX_UPSCALE);
    targetLongest = Math.round(targetLongest);

    const ratio = origW / origH;
    let newW, newH;
    if (origW >= origH) {
      newW = targetLongest;
      newH = Math.round(targetLongest / ratio);
    } else {
      newH = targetLongest;
      newW = Math.round(targetLongest * ratio);
    }

    const outPath = path.join(OUT_DIR, p.output);

    await sharp(p.input)
      .resize(newW, newH, {
        fit: "inside",
        withoutEnlargement: false,
        kernel: "lanczos3",
      })
      .jpeg({
        quality: 92,
        mozjpeg: true,
        chromaSubsampling: "4:4:4",
        trellisQuantisation: true,
        overshootDeringing: true,
        optimizeScans: true,
      })
      .toFile(outPath);

    const outKb = (fs.statSync(outPath).size / 1024).toFixed(1);
    console.log(
      `${p.output}: ${origW}x${origH} (${origKb}KB) -> ${newW}x${newH} (${outKb}KB)`
    );
  }
}

optimize().catch((e) => {
  console.error(e);
  process.exit(1);
});
