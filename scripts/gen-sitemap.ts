// Genera la sitemap completa riutilizzando la logica di src/app/sitemap.ts
// Output: /home/z/my-project/download/sitemap.xml (+ breakdown a console)
import sitemapFn from "../src/app/sitemap";
import { writeFileSync, copyFileSync } from "fs";

const entries = sitemapFn();
const iso = (d: Date) => d.toISOString().split("T")[0];

const lines: string[] = [];
lines.push('<?xml version="1.0" encoding="UTF-8"?>');
lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">');
for (const e of entries) {
  lines.push('  <url>');
  lines.push(`    <loc>${e.url}</loc>`);
  lines.push(`    <lastmod>${iso(e.lastModified)}</lastmod>`);
  lines.push(`    <changefreq>${e.changeFrequency}</changefreq>`);
  lines.push(`    <priority>${e.priority}</priority>`);
  if (e.images && e.images.length) {
    for (const i of e.images) {
      lines.push(`    <image:image><image:loc>${i}</image:loc></image:image>`);
    }
  }
  lines.push('  </url>');
}
lines.push('</urlset>');
const xml = lines.join("\n") + "\n";
writeFileSync("/home/z/my-project/download/sitemap.xml", xml);

// Copia anche la sitemap attualmente live (public/sitemap.xml) per confronto
try {
  copyFileSync("/home/z/my-project/public/sitemap.xml", "/home/z/my-project/download/sitemap-current.xml");
} catch {}

// Breakdown
const cats: Record<string, number> = { statiche: 0, film: 0, altre: 0, photo: 0 };
for (const e of entries) {
  const u = e.url;
  if (u.includes("/film/")) cats.film++;
  else if (u.includes("/altre-produzioni/")) cats.altre++;
  else if (u.includes("/photo/")) cats.photo++;
  else cats.statiche++;
}
console.log(`Totale URL sitemap completa: ${entries.length}`);
console.log(`  - pagine statiche / news / tag: ${cats.statiche}`);
console.log(`  - film (/film/[slug]): ${cats.film}`);
console.log(`  - altre-produzioni: ${cats.altre}`);
console.log(`  - photo (/photo/[id]): ${cats.photo}`);
console.log(`Dimensione: ${xml.length} bytes -> /home/z/my-project/download/sitemap.xml`);
