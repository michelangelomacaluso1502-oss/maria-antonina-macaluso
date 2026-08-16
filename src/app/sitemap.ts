import type { MetadataRoute } from "next";
import { SITE, ALL_PAGES, FILMS, PHOTOBOOK, ALTRE_PRODUZIONI } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticRoutes = [
    { path: "", priority: 1, freq: "weekly" as const },
    { path: "/biografia", priority: 0.9, freq: "monthly" as const },
    { path: "/filmografia", priority: 0.9, freq: "monthly" as const },
    { path: "/collaborazioni", priority: 0.8, freq: "monthly" as const },
    { path: "/timeline", priority: 0.8, freq: "monthly" as const },
    { path: "/premi", priority: 0.8, freq: "monthly" as const },
    { path: "/festival", priority: 0.8, freq: "monthly" as const },
    { path: "/articoli", priority: 0.7, freq: "monthly" as const },
    { path: "/citazioni", priority: 0.7, freq: "monthly" as const },
    { path: "/faq", priority: 0.8, freq: "weekly" as const },
    { path: "/contatti", priority: 0.7, freq: "monthly" as const },
    { path: "/photobook", priority: 0.9, freq: "weekly" as const },
    { path: "/collegamenti-esteri", priority: 0.6, freq: "yearly" as const },
    { path: "/multimedia", priority: 0.8, freq: "monthly" as const },
    { path: "/angelo-faraci", priority: 0.9, freq: "monthly" as const },
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${base}${r.path}`,
    lastModified: now,
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  // Film pages
  FILMS.forEach((f) => {
    entries.push({
      url: `${base}/film/${f.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.8,
      images: f.poster ? [`${base}${f.poster}`] : undefined,
    });
  });

  // Altre produzioni
  ALTRE_PRODUZIONI.forEach((p) => {
    entries.push({
      url: `${base}/altre-produzioni/${p.slug}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
      images: p.poster ? [`${base}${p.poster}`] : undefined,
    });
  });

  // Photo book pages — TUTTI gli scatti (per raggiungere 122+ URL)
  PHOTOBOOK.forEach((p) => {
    entries.push({
      url: `${base}/photo/${p.id}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.5,
      images: [`${base}${p.src}`],
    });
  });

  return entries;
}
