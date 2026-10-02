import type { MetadataRoute } from "next";
import { SITE } from "@/lib/data";

export default function sitemapNews(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  // Solo le pagine news (articoli originali)
  const newsArticles = [
    { path: "/news/pochi-attimi-venezia-83", title: "VENEZIA 83 — Pochi Attimi al Premio Leone Lungo", date: "2026-08-16" },
    { path: "/news/sodalizio-maria-antonina-angelo-faraci", title: "Sodalizio artistico Macaluso-Faraci — 10 film", date: "2026-09-25" },
    { path: "/news/cast-pochi-attimi", title: "Cast Pochi Attimi — scheda completa", date: "2026-09-28" },
    { path: "/news/catastrofi-ambientali-italiane", title: "Catastrofi ambientali italiane — il film Pochi Attimi", date: "2026-09-28" },
    { path: "/news/camporeale-radici-maria-antonina", title: "Camporeale — radici siciliane di Maria Antonina Macaluso", date: "2026-09-28" },
    { path: "/news/intervista-maria-antonina-macaluso", title: "Intervista a Maria Antonina Macaluso", date: "2026-09-28" },
    { path: "/news/ritratto-maria-antonina-24-anni", title: "Ritratto di Maria Antonina a 24 anni", date: "2026-09-28" },
    { path: "/news/percorso-artistico-cinema-sicilia", title: "Percorso artistico di Maria Antonina Macaluso nel cinema", date: "2026-09-28" },
  ];

  // Hub tematici (tag pages)
  const tagPages = [
    { path: "/tag/angelo-faraci", title: "Angelo Faraci — regista e attore", date: "2026-09-28" },
    { path: "/tag/venezia-83", title: "Venezia 83 — Premio Leone Lungo", date: "2026-09-28" },
    { path: "/tag/cinema-siciliano", title: "Cinema siciliano contemporaneo", date: "2026-09-28" },
  ];

  const allNews = [...newsArticles, ...tagPages];

  return allNews.map((n) => ({
    url: `${base}${n.path}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.9,
    // @ts-expect-error - news extension
    news: {
      title: n.title,
      publication_date: n.date,
      publication_language: "it-IT",
    },
  }));
}
