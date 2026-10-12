import { SITE } from "@/lib/data";

export async function GET() {
  const base = SITE.url;
  const now = new Date().toISOString();

  const newsArticles = [
    { path: "/news/pochi-attimi-venezia-83", title: "VENEZIA 83 — Pochi Attimi al Premio Leone Lungo", date: "2026-08-16" },
    { path: "/news/sodalizio-maria-antonina-angelo-faraci", title: "Sodalizio artistico Macaluso-Faraci — 10 film", date: "2026-09-25" },
    { path: "/news/cast-pochi-attimi", title: "Cast Pochi Attimi — scheda completa", date: "2026-09-28" },
    { path: "/news/catastrofi-ambientali-italiane", title: "Catastrofi ambientali italiane — il film Pochi Attimi", date: "2026-09-28" },
    { path: "/news/camporeale-radici-maria-antonina", title: "Camporeale — radici siciliane di Maria Antonina Macaluso", date: "2026-09-28" },
    { path: "/news/intervista-maria-antonina-macaluso", title: "Intervista a Maria Antonina Macaluso", date: "2026-09-28" },
    { path: "/news/ritratto-maria-antonina-24-anni", title: "Ritratto di Maria Antonina a 24 anni", date: "2026-09-28" },
    { path: "/news/percorso-artistico-cinema-sicilia", title: "Percorso artistico di Maria Antonina Macaluso nel cinema", date: "2026-09-28" },
    { path: "/news/angelo-faraci-regista-siciliano", title: "Angelo Faraci — regista siciliano biografia", date: "2026-09-28" },
    { path: "/news/premi-riconoscimenti-maria-antonina", title: "Premi e riconoscimenti di Maria Antonina Macaluso", date: "2026-09-28" },
    { path: "/news/valle-belice-1968-cinema-rinascita", title: "Valle del Belice — dal terremoto 1968 al cinema", date: "2026-09-28" },
    { path: "/news/domande-piu-cercate-maria-antonina", title: "10 domande frequenti su Maria Antonina Macaluso", date: "2026-09-29" },
    { path: "/news/curiosita-fatti-maria-antonina", title: "15 curiosità e fatti veritieri su Maria Antonina Macaluso", date: "2026-09-29" },
    { path: "/enciclopedia-maria-antonina", title: "Maria Antonina Macaluso — Enciclopedia (voce principale)", date: "2026-09-29" },
    { path: "/tag/angelo-faraci", title: "Angelo Faraci — regista e attore", date: "2026-09-28" },
    { path: "/tag/venezia-83", title: "Venezia 83 — Premio Leone Lungo", date: "2026-09-28" },
    { path: "/tag/cinema-siciliano", title: "Cinema siciliano contemporaneo", date: "2026-09-28" },
  ];

  const urls = newsArticles.map((n) => `  <url>
    <loc>${base}${n.path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <news:news>
      <news:publication>
        <news:name>Maria Antonina Macaluso — Enciclopedia digitale</news:name>
        <news:language>it-IT</news:language>
      </news:publication>
      <news:publication_date>${n.date}</news:publication_date>
      <news:title>${escapeXml(n.title)}</news:title>
    </news:news>
  </url>`).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}

function escapeXml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
