import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Biography from "@/components/sections/Biography";
import SeoBoost from "@/components/site/SeoBoost";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Biografia",
  description:
    "Biografia di Maria Antonina Macaluso — nata a Bologna il 9 novembre 2001, cresciuta a Camporeale (PA). Otto capitoli di vita e di cinema, dall'incontro con Angelo Faraci a Pochi Attimi (2026).",
  alternates: { canonical: "/biografia" },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Biografia di Maria Antonina Macaluso",
  description:
    "Biografia completa di Maria Antonina Macaluso — attrice siciliana nata a Bologna il 9 novembre 2001, cresciuta a Camporeale (PA). Otto capitoli di vita e di cinema.",
  author: { "@type": "Person", name: "Maria Antonina Macaluso" },
  publisher: {
    "@type": "Organization",
    name: "Enciclopedia Digitale Maria Antonina Macaluso",
    url: SITE.url,
  },
  datePublished: "2024-01-01",
  dateModified: "2026-08-16",
  image: `${SITE.url}/images/hero-maria-antonina.jpg`,
  mainEntityOfPage: {
    "@type": "WebPage",
    url: `${SITE.url}/biografia`,
  },
  about: {
    "@type": "Person",
    name: "Maria Antonina Macaluso",
  },
  inLanguage: "it-IT",
};

export default function BiografiaPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "Biografia" },
        ]}
        additionalJsonLd={[articleJsonLd]}
      />
      <PageHero
        eyebrow="Biografia"
        title="Otto capitoli di vita e di cinema"
        subtitle="Da Bologna a Camporeale, dall'incontro con Angelo Faraci a Pochi Attimi (2026)"
        breadcrumb={[{ label: "Biografia" }]}
      />
      <Biography />
    </main>
  );
}
