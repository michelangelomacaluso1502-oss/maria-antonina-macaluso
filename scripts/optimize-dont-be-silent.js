const sharp = require("sharp");
const fs = require("fs");

async function optimize() {
  const input = "/home/z/my-project/upload/IMG_20260806_172544_459.jpg";
  const output = "/home/z/my-project/public/images/films/dont-be-silent-set.jpg";

  const meta = await sharp(input).metadata();
  const origW = meta.width;
  const origH = meta.height;
  const origKb = (fs.statSync(input).size / 1024).toFixed(1);

  const MAX_DIM = 3840;
  const longest = Math.max(origW, origH);
  let scale = MAX_DIM / longest;
  if (scale < 1) scale = 1;

  let newW = Math.round(origW * scale);
  let newH = Math.round(origH * scale);

  await sharp(input)
    .resize(newW, newH, {
      fit: "inside",
      withoutEnlargement: scale < 1,
      kernel: "lanczos3",
    })
    .modulate({ brightness: 1.03, saturation: 1.08 })
    .sharpen({ sigma: 0.8, m1: 1.2, m2: 0.5 })
    .jpeg({
      quality: 98,
      mozjpeg: true,
      chromaSubsampling: "4:4:4",
      trellisQuantisation: true,
      overshootDeringing: true,
      optimizeScans: true,
      progressive: true,
    })
    .toFile(output);

  const outKb = (fs.statSync(output).size / 1024).toFixed(1);
  console.log(`dont-be-silent-set.jpg: ${origW}x${origH} (${origKb}KB) -> ${newW}x${newH} (${outKb}KB)`);
}

optimize().catch((e) => { console.error(e); process.exit(1); });
