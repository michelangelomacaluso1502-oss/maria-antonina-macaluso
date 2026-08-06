const sharp = require("sharp");
const fs = require("fs");

const OUT_DIR_PB = "/home/z/my-project/public/images/photobook";
const OUT_DIR_BIO = "/home/z/my-project/public/images/biografia";

// 8 foto dal set "Separati Mai" — iniziano da mam-63
// Le foto con ciak (611, 614, 616) + ritratto ponderato (618) vanno anche in biografia
const photos = [
  {
    input: "/home/z/my-project/upload/6026366873739398611.jpg",
    output: "mam-63",
    bio: true,
    bioName: "separati-mai-cavallo-ciak.jpg",
  },
  {
    input: "/home/z/my-project/upload/6026366873739398612.jpg",
    output: "mam-64",
    bio: false,
  },
  {
    input: "/home/z/my-project/upload/6026366873739398613.jpg",
    output: "mam-65",
    bio: false,
  },
  {
    input: "/home/z/my-project/upload/6026366873739398614.jpg",
    output: "mam-66",
    bio: false,
  },
  {
    input: "/home/z/my-project/upload/6026366873739398615.jpg",
    output: "mam-67",
    bio: false,
  },
  {
    input: "/home/z/my-project/upload/6026366873739398616.jpg",
    output: "mam-68",
    bio: true,
    bioName: "separati-mai-ciak-villa.jpg",
  },
  {
    input: "/home/z/my-project/upload/6026366873739398617.jpg",
    output: "mam-69",
    bio: false,
  },
  {
    input: "/home/z/my-project/upload/6026366873739398618.jpg",
    output: "mam-70",
    bio: true,
    bioName: "separati-mai-ritratto.jpg",
  },
];

async function optimize() {
  for (const p of photos) {
    const meta = await sharp(p.input).metadata();
    const origW = meta.width;
    const origH = meta.height;
    const origKb = (fs.statSync(p.input).size / 1024).toFixed(1);

    // Target 8K: 3840px sul lato lungo
    const MAX_DIM = 3840;
    const longest = Math.max(origW, origH);
    let scale = MAX_DIM / longest;
    if (scale < 1) scale = 1;

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
  console.log("\n✓ 8 foto ottimizzate a 8K Ultra HD (mozjpeg q98, chroma 4:4:4, progressive)");
  console.log("✓ 3 foto copiate anche in biografia (ciak/ritratto)");
}

optimize().catch((e) => { console.error(e); process.exit(1); });
