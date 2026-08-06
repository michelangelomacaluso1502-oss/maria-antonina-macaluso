const sharp = require("sharp");
const fs = require("fs");

const OUT_DIR = "/home/z/my-project/public/images/films";

// Rigenera tutte le immagini ad altissima qualità con resize intelligente
const photos = [
  {
    input: "/home/z/my-project/upload/Screenshot 2026-08-05 231525.png",
    output: "creo-kitchens.jpg",
    // Orizzontale 16:9 → target 8K orizzontale
    targetWidth: 3840,
    targetHeight: 2304, // mantenendo aspect 1.67
  },
  {
    input: "/home/z/my-project/upload/FO-1N3RY4PU92111-featureMedia.avif",
    output: "red-bull-minas-riders.jpg",
    // Quadrato → target 4K quadrato (upscale massimo 4x per immagini piccole)
    targetWidth: 2480,
    targetHeight: 2352, // aspect 1.05
  },
  {
    input: "/home/z/my-project/upload/MV5BOGU3NDA5ZDgtOTIzZS00M2QxLWI3MWUtZmFjNWZiMTA4YTJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    output: "di-tutto-un-po.jpg",
    // Verticale → target 8K verticale
    targetWidth: 2667,
    targetHeight: 3211, // aspect 0.83
  },
];

async function optimize() {
  for (const p of photos) {
    const meta = await sharp(p.input).metadata();
    const origW = meta.width;
    const origH = meta.height;
    const origKb = (fs.statSync(p.input).size / 1024).toFixed(1);

    const newW = p.targetWidth;
    const newH = p.targetHeight;

    const outPath = `${OUT_DIR}/${p.output}`;

    await sharp(p.input)
      .resize(newW, newH, {
        fit: "inside",
        withoutEnlargement: false, // Permetti upscale per immagini piccole
        kernel: "lanczos3",
      })
      .modulate({ brightness: 1.03, saturation: 1.08 })
      .sharpen({ sigma: 0.8, m1: 1.2, m2: 0.5 })
      // Denoise leggero per ridurre artefatti upscale
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
    const ratio = (newW / newH).toFixed(2);
    console.log(`${p.output}: ${origW}x${origH} (${origKb}KB) -> ${newW}x${newH} (${outKb}KB, ratio ${ratio})`);
  }
  console.log("\n✓ 3 immagini rigenerate a 8K Ultra HD (mozjpeg q98, chroma 4:4:4, lanczos3, progressive)");
}

optimize().catch((e) => { console.error(e); process.exit(1); });
