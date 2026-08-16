import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Quotes from "@/components/sections/Quotes";
import SeoBoost from "@/components/site/SeoBoost";

export const metadata: Metadata = {
  title: "Citazioni",
  description:
    "Citazioni di Maria Antonina Macaluso e Angelo Faraci: pensieri sul cinema, sulla Sicilia e sul loro sodalizio artistico.",
  alternates: { canonical: "/citazioni" },
};

export default function CitazioniPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "Citazioni" },
        ]}
      />
      <PageHero
        eyebrow="Citazioni"
        title="Parole che restano"
        subtitle="Pensieri di Maria Antonina e Angelo Faraci"
        breadcrumb={[{ label: "Citazioni" }]}
      />
      <Quotes />
    </main>
  );
}
