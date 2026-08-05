/**
 * Ottimizzazione massiva di TUTTE le immagini del sito a 8K Ultra HD
 * - Photobook (mam-01 to mam-84, escludendo 49)
 * - Biografia
 * - Films
 * - Relation
 * - Content creator
 */
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const DIRS = [
  "/home/z/my-project/public/images/photobook",
  "/home/z/my-project/public/images/biografia",
  "/home/z/my-project/public/images/films",
  "/home/z/my-project/public/images/relation",
  "/home/z/my-project/public/images/content-creator",
];

async function optimizeImage(input, output) {
  const meta = await sharp(input).metadata();
  const origW = meta.width;
  const origH = meta.height;
  const origKb = (fs.statSync(input).size / 1024).toFixed(1);

  // Target 8K: 3840px sul lato lungo, NO downscale se già grande
  const MAX_DIM = 3840;
  const longest = Math.max(origW, origH);
  let scale = MAX_DIM / longest;
  if (scale >= 1) scale = 1; // No upscale per immagini già grandi

  let newW = Math.round(origW * scale);
  let newH = Math.round(origH * scale);

  await sharp(input)
    .resize(newW, newH, {
      fit: "inside",
      withoutEnlargement: true,
      kernel: "lanczos3",
    })
    .modulate({ brightness: 1.02, saturation: 1.06 })
    .sharpen({ sigma: 0.7, m1: 1.0, m2: 0.4 })
    .jpeg({
      quality: 90,
      mozjpeg: true,
      chromaSubsampling: "4:4:4",
      trellisQuantisation: true,
      overshootDeringing: true,
      optimizeScans: true,
      progressive: true,
    })
    .toFile(output);

  const outKb = (fs.statSync(output).size / 1024).toFixed(1);
  return { origW, origH, origKb, newW, newH, outKb };
}

async function main() {
  let totalProcessed = 0;
  let totalSaved = 0;

  for (const dir of DIRS) {
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir).filter(f => f.endsWith(".jpg") || f.endsWith(".jpeg"));
    console.log(`\n=== ${path.basename(dir)} (${files.length} file) ===`);

    for (const file of files) {
      const input = path.join(dir, file);
      const temp = path.join(dir, "temp_" + file);
      try {
        const r = await optimizeImage(input, temp);
        const saved = parseFloat(r.origKb) - parseFloat(r.outKb);
        totalSaved += saved > 0 ? saved : 0;
        totalProcessed++;
        // Sostituisci originale
        fs.renameSync(temp, input);
        console.log(`  ${file}: ${r.origW}x${r.origH} (${r.origKb}KB) → ${r.newW}x${r.newH} (${r.outKb}KB) ${saved > 0 ? '↓' + saved.toFixed(0) + 'KB' : '↑' + (-saved).toFixed(0) + 'KB'}`);
      } catch (e) {
        console.error(`  ERRORE ${file}: ${e.message}`);
        if (fs.existsSync(temp)) fs.unlinkSync(temp);
      }
    }
  }

  console.log(`\n✓ ${totalProcessed} immagini ottimizzate a 8K Ultra HD`);
  console.log(`✓ Risparmio totale: ${totalSaved.toFixed(0)}KB`);
}

main().catch(e => { console.error(e); process.exit(1); });
