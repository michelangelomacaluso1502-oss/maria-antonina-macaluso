import { SITE, PHOTOBOOK_FULL } from "@/lib/data";

export async function GET() {
  const base = SITE.url;
  const now = new Date().toISOString();

  const urls: string[] = [];

  // Foto hero principale
  urls.push(`  <url>
    <loc>${base}/images/hero-maria-antonina.jpg</loc>
    <lastmod>${now}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>1.0</priority>
  </url>`);

  // 7 foto Venezia
  for (let i = 1; i <= 7; i++) {
    const num = String(i).padStart(2, "0");
    urls.push(`  <url>
    <loc>${base}/images/venezia/venezia-${num}.jpg</loc>
    <lastmod>${now}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.9</priority>
  </url>`);
  }

  // 90 foto photobook
  PHOTOBOOK_FULL.forEach((p) => {
    urls.push(`  <url>
    <loc>${base}${p.src}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>`);
  });

  // Locandine film
  const filmPosters = [
    "/images/films/cio-che-non-ti-ho-detto.jpg",
    "/images/films/dont-be-silent.jpg",
    "/images/films/provvidenza.jpg",
    "/images/films/pietrazita.jpg",
    "/images/films/separati-mai.jpg",
    "/images/films/sabbie-nere.jpg",
    "/images/films/vanina.jpg",
    "/images/films/il-mistero-di-spartivento.jpg",
    "/images/films/pochi-attimi.jpg",
    "/images/films/eccellenza-siciliana.jpg",
    "/images/films/creo-kitchens.jpg",
    "/images/films/red-bull-minas-riders.jpg",
    "/images/films/di-tutto-un-po.jpg",
  ];

  filmPosters.forEach((poster) => {
    urls.push(`  <url>
    <loc>${base}${poster}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.8</priority>
  </url>`);
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/0.9">
${urls.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
