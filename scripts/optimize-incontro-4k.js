/**
 * Optimize photo to Ultra HD 4K quality
 * - Target: 3840px longest side (Ultra HD 4K)
 * - mozjpeg quality 95 (near-lossless)
 * - chromaSubsampling 4:4:4 (best chroma)
 * - lanczos3 resampling
 * - Allow upscaling to reach 4K (the photo is only 1080x796, so we upscale 3.56x)
 *   Note: upscaling a low-res photo will be soft, but we use lanczos3 + sharpening
 *   to maximize detail. We're trading file size for "4K resolution" as requested.
 */
const sharp = require("sharp");
const fs = require("fs");

const INPUT = "/home/z/my-project/upload/6008229007805058862.jpg";
const OUTPUT = "/home/z/my-project/public/images/biografia/incontro-angelo.jpg";

async function optimize() {
  const meta = await sharp(INPUT).metadata();
  const origW = meta.width;
  const origH = meta.height;
  const origKb = (fs.statSync(INPUT).size / 1024).toFixed(1);

  // Ultra HD 4K: 3840px on longest side
  const TARGET_LONGEST = 3840;
  const ratio = origW / origH;
  let newW, newH;
  if (origW >= origH) {
    newW = TARGET_LONGEST;
    newH = Math.round(TARGET_LONGEST / ratio);
  } else {
    newH = TARGET_LONGEST;
    newW = Math.round(TARGET_LONGEST * ratio);
  }

  await sharp(INPUT)
    .resize(newW, newH, {
      fit: "inside",
      withoutEnlargement: false, // allow upscaling to reach 4K
      kernel: "lanczos3",
    })
    // Mild sharpening to compensate for upscaling softness
    .modulate({
      brightness: 1.02,
      saturation: 1.05,
    })
    .sharpen({
      sigma: 0.8,
      m1: 1.5,
      m2: 0.5,
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
  console.log(
    `incontro-angelo.jpg: ${origW}x${origH} (${origKb}KB) -> ${newW}x${newH} (${outKb}KB) [Ultra HD 4K]`
  );
}

optimize().catch((e) => {
  console.error(e);
  process.exit(1);
});
