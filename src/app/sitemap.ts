import type { MetadataRoute } from "next";
import { SITE, ALL_PAGES, FILMS, PHOTOBOOK } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const staticRoutes = [
    "",
    "/biografia",
    "/filmografia",
    "/collaborazioni",
    "/timeline",
    "/premi",
    "/festival",
    "/articoli",
    "/citazioni",
    "/faq",
    "/contatti",
    "/photobook",
    "/collegamenti-esteri",
    "/multimedia",
    "/angelo-faraci",
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));

  FILMS.forEach((f) => {
    entries.push({
      url: `${base}/film/${f.slug}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.6,
    });
  });

  PHOTOBOOK.forEach((p) => {
    entries.push({
      url: `${base}/photo/${p.id}`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.4,
    });
  });

  // Anchor sections on homepage.
  ALL_PAGES.forEach(() => {
    // already covered by static routes
  });

  return entries;
}
