/**
 * Optimize 2 content creator photos from Cronache Mediterranee
 * - Source: https://cronachemediterranee.net/vulcanica-content-creator-maria-antonina-macaluso/
 * - Photos uploaded by user: photo_6012603350391655847_x.jpg, photo_6012603350391655846_x.jpg
 * - Original: 500x500 (small), need significant upscale to 4K
 */
const sharp = require("sharp");
const fs = require("fs");

const OUT_DIR = "/home/z/my-project/public/images/content-creator";

const photos = [
  {
    input: "/home/z/my-project/upload/photo_6012603350391655847_x.jpg",
    output: "beauty-creator.jpg",
    label: "Beauty Content Creator (prodotti cosmetici)",
  },
  {
    input: "/home/z/my-project/upload/photo_6012603350391655846_x.jpg",
    output: "lifestyle-creator.jpg",
    label: "Lifestyle Content Creator (trucco)",
  },
];

async function optimize() {
  for (const p of photos) {
    const meta = await sharp(p.input).metadata();
    const origW = meta.width;
    const origH = meta.height;
    const origKb = (fs.statSync(p.input).size / 1024).toFixed(1);

    // Target: 1600x1600 (square photos, retina-ready)
    // Significant upscale from 500x500 — use 3.2x upscale
    const TARGET = 1600;
    const scale = TARGET / origW; // 3.2x

    const outPath = `${OUT_DIR}/${p.output}`;

    await sharp(p.input)
      .resize(TARGET, TARGET, {
        fit: "inside",
        withoutEnlargement: false,
        kernel: "lanczos3",
      })
      // Aggressive sharpening to compensate for significant upscaling
      .modulate({
        brightness: 1.03,
        saturation: 1.08,
      })
      .sharpen({
        sigma: 1.2,
        m1: 2.5,
        m2: 0.8,
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
      `${p.output}: ${origW}x${origH} (${origKb}KB) → ${TARGET}x${TARGET} (${outKb}KB) [${p.label}]`
    );
  }
  console.log("\n✓ Content creator photos optimized to Ultra HD 4K");
  console.log("  Source: Cronache Mediterranee — vulcanica content creator article");
}

optimize().catch((e) => {
  console.error(e);
  process.exit(1);
});
