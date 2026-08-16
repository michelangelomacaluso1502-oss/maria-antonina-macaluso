import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Awards from "@/components/sections/Awards";
import SeoBoost from "@/components/site/SeoBoost";

export const metadata: Metadata = {
  title: "Premi",
  description:
    "I premi e i riconoscimenti ricevuti da Maria Antonina Macaluso: da Taormina a Fiuggi, dal Mediterranean Film Festival al Sicilian Excellence Awards.",
  alternates: { canonical: "/premi" },
};

export default function PremiPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "Premi" },
        ]}
      />
      <PageHero
        eyebrow="Premi"
        title="Sette riconoscimenti"
        subtitle="Dalla Sicilia al Mediterraneo, il lavoro premiato della critica"
        breadcrumb={[{ label: "Premi" }]}
      />
      <Awards />
    </main>
  );
}
