import type { Metadata } from "next";
import { Suspense } from "react";
import PageHero from "@/components/sections/PageHero";
import SeoBoost from "@/components/site/SeoBoost";
import SearchClient from "./search-client";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cerca nel sito",
  description: "Cerca tra articoli, film, news e pagine del sito dedicato a Maria Antonina Macaluso, attrice siciliana.",
  alternates: { canonical: "/search" },
  robots: { index: false, follow: true },
};

const searchCollectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "SearchResultsPage",
  url: `${SITE.url}/search`,
  inLanguage: "it-IT",
  isPartOf: {
    "@type": "WebSite",
    name: "Maria Antonina Macaluso — Enciclopedia digitale",
    url: SITE.url,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Cerca", item: `${SITE.url}/search` },
  ],
};

export default function SearchPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "Cerca" },
        ]}
        additionalJsonLd={[searchCollectionJsonLd, breadcrumbJsonLd]}
      />
      <PageHero
        eyebrow="Ricerca interna"
        title="Cerca nel sito"
        subtitle="Trova articoli, film, news e pagine del sito dedicato a Maria Antonina Macaluso."
        breadcrumb={[{ label: "Cerca" }]}
      />
      <Suspense fallback={<div className="cinematic-container py-12 text-center text-cream/60">Caricamento...</div>}>
        <SearchClient />
      </Suspense>
    </main>
  );
}
