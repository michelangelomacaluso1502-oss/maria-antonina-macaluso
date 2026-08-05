const sharp = require("sharp");
const fs = require("fs");

const OUT_DIR_PB = "/home/z/my-project/public/images/photobook";
const OUT_DIR_BIO = "/home/z/my-project/public/images/biografia";

// 5 foto uniche dal set "Il Mistero di Spartivento"
// 605 e 609 hanno il ciak → vanno anche in biografia
const photos = [
  {
    input: "/home/z/my-project/upload/6026366873739398605.jpg",
    output: "mam-58",
    // Mary con ciak in mano, tramonto, belvedere siciliano → photobook + biografia
    bio: true,
    bioName: "spartivento-ciak.jpg",
  },
  {
    input: "/home/z/my-project/upload/6026366873739398606.jpg",
    output: "mam-59",
    // Foto di gruppo cast & crew al tramonto, borgo siciliano → photobook
    bio: false,
  },
  {
    input: "/home/z/my-project/upload/6026366873739398607.jpg",
    output: "mam-60",
    // Mary sorridente con uomo sul set, piazza borgo → photobook
    bio: false,
  },
  {
    input: "/home/z/my-project/upload/6026366873739398608.jpg",
    output: "mam-61",
    // Mary su sedia a dondolo in interno rustico, BTS con boom mic → photobook
    bio: false,
  },
  {
    input: "/home/z/my-project/upload/6026366873739398609.jpg",
    output: "mam-62",
    // Mary con ciak, belvedere, golden hour → photobook + biografia
    bio: true,
    bioName: "spartivento-set.jpg",
  },
];

async function optimize() {
  for (const p of photos) {
    const meta = await sharp(p.input).metadata();
    const origW = meta.width;
    const origH = meta.height;
    const origKb = (fs.statSync(p.input).size / 1024).toFixed(1);

    // Target 8K: 3840px sul lato lungo, mantieni aspect ratio
    const MAX_DIM = 3840;
    const longest = Math.max(origW, origH);
    let scale = MAX_DIM / longest;
    if (scale < 1) scale = 1; // No downscale per immagini già grandi

    let newW = Math.round(origW * scale);
    let newH = Math.round(origH * scale);

    const outPathPb = `${OUT_DIR_PB}/${p.output}.jpg`;

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
      .toFile(outPathPb);

    const outKb = (fs.statSync(outPathPb).size / 1024).toFixed(1);
    console.log(`PB ${p.output}.jpg: ${origW}x${origH} (${origKb}KB) -> ${newW}x${newH} (${outKb}KB)`);

    // Se bio=true, copia anche in biografia con nome specifico
    if (p.bio && p.bioName) {
      const outPathBio = `${OUT_DIR_BIO}/${p.bioName}`;
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
        .toFile(outPathBio);
      const bioKb = (fs.statSync(outPathBio).size / 1024).toFixed(1);
      console.log(`BIO ${p.bioName}: ${newW}x${newH} (${bioKb}KB)`);
    }
  }
  console.log("\n✓ 5 foto ottimizzate a 8K Ultra HD (mozjpeg q98, chroma 4:4:4, progressive)");
  console.log("✓ 2 foto copiate anche in biografia (ciak in mano)");
}

optimize().catch((e) => { console.error(e); process.exit(1); });
