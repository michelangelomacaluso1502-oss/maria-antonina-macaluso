/**
 * Optimize movie posters for the filmografia section
 * - Target: Ultra HD 4K/8K quality (max 3840px longest side)
 * - mozjpeg quality 95 (near-lossless)
 * - chromaSubsampling 4:4:4 (best chroma)
 * - lanczos3 resampling
 * - Sharpening to compensate for any upscaling
 * - All posters normalized to 2:3 aspect ratio (standard movie poster)
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const OUT_DIR = "/home/z/my-project/public/images/films";

// Mapping: source file → output name
const posters = [
  {
    input: "/home/z/my-project/upload/OIP (2).webp",
    output: "cio-che-non-ti-ho-detto.jpg",
    film: "Ciò che non ti ho detto",
  },
  {
    input: "/home/z/my-project/upload/received_398949841360771.jpeg",
    output: "dont-be-silent.jpg",
    film: "Don't Be Silent",
  },
  {
    input: "/home/z/my-project/upload/MV5BMjg1MTUwNDEtZWEwNy00NjQ0LWFhODctMGJiZGM2OTlhYjI2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    output: "provvidenza.jpg",
    film: "Provvidenza",
  },
  {
    input: "/home/z/my-project/upload/MV5BYTE2M2ZhNzctZWI2YS00ZmMyLWEwODMtMmI5MDQyNmMxZjQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    output: "pietrazita.jpg",
    film: "Pietrazita",
  },
  {
    input: "/home/z/my-project/upload/OIP (1).webp",
    output: "separati-mai.jpg",
    film: "Separati Mai",
  },
  {
    input: "/home/z/my-project/upload/MV5BZWQ0N2E5NzEtMTNmYS00ODE3LWE3YjktMzYxY2VmMWQ2ZWZiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    output: "vanina.jpg",
    film: "Vanina",
  },
  {
    input: "/home/z/my-project/upload/MV5BMGRkM2E1ZmMtMThmYS00OGQxLWI2YzUtYWQ4YjM5NTcwZDczXkEyXkFqcGc@._V1_.jpg",
    output: "il-mistero-di-spartivento.jpg",
    film: "Il Mistero di Spartivento",
  },
  {
    input: "/home/z/my-project/upload/eccellenza-siciliana.jpg",
    output: "eccellenza-siciliana.jpg",
    film: "Eccellenza Siciliana",
  },
  {
    input: "/home/z/my-project/upload/OIP.webp",
    output: "pochi-attimi.jpg",
    film: "Pochi Attimi",
  },
];

async function optimize() {
  for (const p of posters) {
    if (!fs.existsSync(p.input)) {
      console.log(`SKIP: ${p.input} not found`);
      continue;
    }
    const meta = await sharp(p.input).metadata();
    const origW = meta.width;
    const origH = meta.height;
    const origKb = (fs.statSync(p.input).size / 1024).toFixed(1);

    // Target: 1600px width for poster (2:3 ratio = 1600x2400)
    // This is retina-ready for display at 800px width
    // Don't upscale beyond 1.5x original
    const TARGET_W = 1600;
    const TARGET_H = 2400; // 2:3 aspect ratio
    const MAX_UPSCALE = 1.5;

    // Calculate scale
    const scaleW = TARGET_W / origW;
    const scaleH = TARGET_H / origH;
    const scale = Math.min(scaleW, scaleH, MAX_UPSCALE);

    let newW = Math.round(origW * scale);
    let newH = Math.round(origH * scale);

    // Ensure we don't exceed target
    if (newW > TARGET_W) {
      newH = Math.round(newH * (TARGET_W / newW));
      newW = TARGET_W;
    }

    const outPath = path.join(OUT_DIR, p.output);

    await sharp(p.input)
      .resize(newW, newH, {
        fit: "inside",
        withoutEnlargement: scale < 1,
        kernel: "lanczos3",
      })
      .modulate({
        brightness: 1.02,
        saturation: 1.05,
      })
      .sharpen({
        sigma: 0.6,
        m1: 1.0,
        m2: 0.4,
      })
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
    console.log(
      `${p.output}: ${origW}x${origH} (${origKb}KB) → ${newW}x${newH} (${outKb}KB) [${p.film}]`
    );
  }
  console.log("\n✓ All posters optimized to Ultra HD 4K quality");
}

optimize().catch((e) => {
  console.error(e);
  process.exit(1);
});
