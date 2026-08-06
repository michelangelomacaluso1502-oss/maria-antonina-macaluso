const sharp = require("sharp");
const fs = require("fs");

const OUT_DIR = "/home/z/my-project/public/images/films";

const photos = [
  // 637KB screenshot → Creo Kitchens (showroom con 2 presentatori, logo CREO)
  { input: "/home/z/my-project/upload/Screenshot 2026-08-05 231525.png", output: "creo-kitchens.jpg", isPortrait: false },
  // 19.3KB AVIF → Red Bull Minas Riders (logo)
  { input: "/home/z/my-project/upload/FO-1N3RY4PU92111-featureMedia.avif", output: "red-bull-minas-riders.jpg", isPortrait: false },
  // 37.5KB JPG → Di Tutto un pò (logo istituzionale)
  { input: "/home/z/my-project/upload/MV5BOGU3NDA5ZDgtOTIzZS00M2QxLWI3MWUtZmFjNWZiMTA4YTJlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", output: "di-tutto-un-po.jpg", isPortrait: false },
];

async function optimize() {
  for (const p of photos) {
    const meta = await sharp(p.input).metadata();
    const origW = meta.width;
    const origH = meta.height;
    const origKb = (fs.statSync(p.input).size / 1024).toFixed(1);

    // Per screenshot/locandine: target 4K (3840px) mantenendo aspect ratio
    const MAX_DIM = 3840;
    const MAX_UPSCALE = 2; // Permetti upscale 2x per immagini piccole
    const longest = Math.max(origW, origH);
    let scale = Math.min(MAX_DIM / longest, MAX_UPSCALE);
    if (scale < 1) scale = 1;

    let newW = Math.round(origW * scale);
    let newH = Math.round(origH * scale);

    const outPath = `${OUT_DIR}/${p.output}`;

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
    console.log(`${p.output}: ${origW}x${origH} (${origKb}KB) -> ${newW}x${newH} (${outKb}KB)`);
  }
  console.log("\n✓ 3 immagini ottimizzate a 4K Ultra HD (mozjpeg q95, chroma 4:4:4, lanczos3)");
}

optimize().catch((e) => { console.error(e); process.exit(1); });
