import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Festivals from "@/components/sections/Festivals";
import SeoBoost from "@/components/site/SeoBoost";

export const metadata: Metadata = {
  title: "Festival",
  description:
    "I festival cinematografici a cui ha partecipato Maria Antonina Macaluso: Taormina, Roma, Fiuggi, Venezia, Mediterranean e altri.",
  alternates: { canonical: "/festival" },
};

export default function FestivalPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "Festival" },
        ]}
      />
      <PageHero
        eyebrow="Festival"
        title="Nove presenze nei festival"
        subtitle="Da Taormina a Venezia, i red carpet del percorso"
        breadcrumb={[{ label: "Festival" }]}
      />
      <Festivals />
    </main>
  );
}
