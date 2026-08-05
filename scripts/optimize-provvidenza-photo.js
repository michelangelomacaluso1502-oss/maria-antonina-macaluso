const sharp = require("sharp");
const fs = require("fs");

const OUT_DIR_BIO = "/home/z/my-project/public/images/biografia";

async function optimize() {
  const input = "/home/z/my-project/upload/6026366873739398623.jpg";
  const output = "provvidenza-ritratto.jpg";

  const meta = await sharp(input).metadata();
  const origW = meta.width;
  const origH = meta.height;
  const origKb = (fs.statSync(input).size / 1024).toFixed(1);

  // Target 8K: 3840px sul lato lungo, upscale massimo 4x per immagini piccole
  const MAX_DIM = 3840;
  const MAX_UPSCALE = 4;
  const longest = Math.max(origW, origH);
  let scale = Math.min(MAX_DIM / longest, MAX_UPSCALE);

  let newW = Math.round(origW * scale);
  let newH = Math.round(origH * scale);

  const outPath = `${OUT_DIR_BIO}/${output}`;

  await sharp(input)
    .resize(newW, newH, {
      fit: "inside",
      withoutEnlargement: false,
      kernel: "lanczos3",
    })
    .modulate({ brightness: 1.04, saturation: 1.10 })
    .sharpen({ sigma: 1.0, m1: 1.5, m2: 0.6 })
    .jpeg({
      quality: 98,
      mozjpeg: true,
      chromaSubsampling: "4:4:4",
      trellisQuantisation: true,
      overshootDeringing: true,
      optimizeScans: true,
      progressive: true,
    })
    .toFile(outPath);

  const outKb = (fs.statSync(outPath).size / 1024).toFixed(1);
  console.log(`BIO ${output}: ${origW}x${origH} (${origKb}KB) -> ${newW}x${newH} (${outKb}KB)`);
  console.log("\n✓ Foto Provvidenza ottimizzata a 8K Ultra HD (mozjpeg q98, chroma 4:4:4, progressive)");
}

optimize().catch((e) => { console.error(e); process.exit(1); });
