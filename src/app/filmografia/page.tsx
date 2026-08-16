import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Filmography from "@/components/sections/Filmography";
import SeoBoost from "@/components/site/SeoBoost";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Filmografia",
  description:
    "Filmografia completa di Maria Antonina Macaluso: sei film diretti da Angelo Faraci, da Provvidenza (2021) a Pochi Attimi (2026).",
  alternates: { canonical: "/filmografia" },
};

const collectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Filmografia di Maria Antonina Macaluso",
  description:
    "Filmografia completa di Maria Antonina Macaluso: dieci produzioni cinematografiche e televisive dal 2019 al 2026, dirette da Angelo Faraci.",
  url: `${SITE.url}/filmografia`,
  inLanguage: "it-IT",
  isPartOf: {
    "@type": "WebSite",
    name: "Maria Antonina Macaluso — Enciclopedia Digitale",
    url: SITE.url,
  },
  about: {
    "@type": "Person",
    name: "Maria Antonina Macaluso",
  },
  hasPart: [
    { "@type": "Movie", name: "Ciò che non ti ho detto", datePublished: "2019" },
    { "@type": "Movie", name: "Don't Be Silent", datePublished: "2020" },
    { "@type": "Movie", name: "Provvidenza", datePublished: "2021" },
    { "@type": "Movie", name: "Pietrazita", datePublished: "2023" },
    { "@type": "Movie", name: "Separati Mai", datePublished: "2023" },
    { "@type": "Movie", name: "Sabbie Nere", datePublished: "2023" },
    { "@type": "Movie", name: "Vanina", datePublished: "2024" },
    { "@type": "Movie", name: "Il Mistero di Spartivento", datePublished: "2024" },
    { "@type": "Movie", name: "Pochi Attimi", datePublished: "2026" },
  ],
};

export default function FilmografiaPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "Filmografia" },
        ]}
        additionalJsonLd={[collectionJsonLd]}
      />
      <PageHero
        eyebrow="Filmografia"
        title="Dieci produzioni, una visione"
        subtitle="Dal debutto Ciò che non ti ho detto (2019) a Pochi Attimi (2026) — tutti diretti da Angelo Faraci"
        breadcrumb={[{ label: "Filmografia" }]}
      />
      <Filmography />
    </main>
  );
}
