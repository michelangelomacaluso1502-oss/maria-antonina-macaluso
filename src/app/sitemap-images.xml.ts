import type { MetadataRoute } from "next";
import { SITE, PHOTOBOOK_FULL } from "@/lib/data";

export default function sitemapImages(): MetadataRoute.Sitemap {
  const base = SITE.url;
  const now = new Date();

  const entries: MetadataRoute.Sitemap = [];

  // Foto hero principale
  entries.push({
    url: `${base}/images/hero-maria-antonina.jpg`,
    lastModified: now,
    changeFrequency: "yearly" as const,
    priority: 1,
  });

  // 7 foto Venezia evento
  for (let i = 1; i <= 7; i++) {
    const num = String(i).padStart(2, "0");
    entries.push({
      url: `${base}/images/venezia/venezia-${num}.jpg`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.9,
    });
  }

  // 90 foto photobook
  PHOTOBOOK_FULL.forEach((p) => {
    entries.push({
      url: `${base}${p.src}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    });
  });

  // Locandine film
  const filmPosters = [
    "/images/films/cio-che-non-ti-ho-detto.jpg",
    "/images/films/dont-be-silent.jpg",
    "/images/films/dont-be-silent-v2.jpg",
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
    entries.push({
      url: `${base}${poster}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.8,
    });
  });

  // Foto biografia
  const bioImages = [
    "/images/biografia/maria-antonina-bimba.jpg",
    "/images/biografia/pochi-attimi.jpg",
  ];
  bioImages.forEach((img) => {
    entries.push({
      url: `${base}${img}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.7,
    });
  });

  return entries;
}
