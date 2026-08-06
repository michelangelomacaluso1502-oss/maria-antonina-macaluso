const sharp = require("sharp");
const fs = require("fs");

const OUT_DIR_PB = "/home/z/my-project/public/images/photobook";

const photos = [
  { input: "/home/z/my-project/upload/6026366873739398639.jpg", output: "mam-80" },
  { input: "/home/z/my-project/upload/6026366873739398640.jpg", output: "mam-81" },
  { input: "/home/z/my-project/upload/6026366873739398641.jpg", output: "mam-82" },
  { input: "/home/z/my-project/upload/6026366873739398671.jpg", output: "mam-83" },
];

async function optimize() {
  for (const p of photos) {
    const meta = await sharp(p.input).metadata();
    const origW = meta.width;
    const origH = meta.height;
    const origKb = (fs.statSync(p.input).size / 1024).toFixed(1);

    const MAX_DIM = 3840;
    const longest = Math.max(origW, origH);
    let scale = MAX_DIM / longest;
    if (scale < 1) scale = 1;

    let newW = Math.round(origW * scale);
    let newH = Math.round(origH * scale);

    const outPath = `${OUT_DIR_PB}/${p.output}.jpg`;

    await sharp(p.input)
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
      .toFile(outPath);

    const outKb = (fs.statSync(outPath).size / 1024).toFixed(1);
    console.log(`${p.output}.jpg: ${origW}x${origH} (${origKb}KB) -> ${newW}x${newH} (${outKb}KB)`);
  }
  console.log("\n✓ 4 foto ottimizzate a 8K Ultra HD");
}

optimize().catch((e) => { console.error(e); process.exit(1); });
