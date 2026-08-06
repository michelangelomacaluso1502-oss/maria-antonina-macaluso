const sharp = require("sharp");
const fs = require("fs");

const OUT_DIR_PB = "/home/z/my-project/public/images/photobook";
const OUT_DIR_FILMS = "/home/z/my-project/public/images/films";

const photos = [
  // 674: Mary con ciak sulla scogliera al tramonto → photobook (Revolution)
  {
    input: "/home/z/my-project/upload/6026366873739398674.jpg",
    pbOutput: "mam-84",
    filmOutput: null,
  },
  // 622: Showroom Creo con logo TGS visibile (uomo+donna divano) → films/creo-kitchens-showroom-tgs.jpg
  {
    input: "/home/z/my-project/upload/6026366873739398622.jpg",
    pbOutput: null,
    filmOutput: "creo-kitchens-showroom-tgs.jpg",
  },
  // 621: Showroom Creo cucina moderna con banca → films/creo-kitchens-showroom-cucina.jpg
  {
    input: "/home/z/my-project/upload/6026366873739398621.jpg",
    pbOutput: null,
    filmOutput: "creo-kitchens-showroom-cucina.jpg",
  },
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

    const processSharp = (outPath) => sharp(p.input)
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

    if (p.pbOutput) {
      const outPath = `${OUT_DIR_PB}/${p.pbOutput}.jpg`;
      await processSharp(outPath);
      const outKb = (fs.statSync(outPath).size / 1024).toFixed(1);
      console.log(`PB ${p.pbOutput}.jpg: ${origW}x${origH} (${origKb}KB) -> ${newW}x${newH} (${outKb}KB)`);
    }
    if (p.filmOutput) {
      const outPath = `${OUT_DIR_FILMS}/${p.filmOutput}`;
      await processSharp(outPath);
      const outKb = (fs.statSync(outPath).size / 1024).toFixed(1);
      console.log(`FILM ${p.filmOutput}: ${origW}x${origH} (${origKb}KB) -> ${newW}x${newH} (${outKb}KB)`);
    }
  }
  console.log("\n✓ 3 foto ottimizzate a 8K Ultra HD");
}

optimize().catch((e) => { console.error(e); process.exit(1); });
