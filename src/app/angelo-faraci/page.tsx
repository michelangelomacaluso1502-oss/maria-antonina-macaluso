import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import AngeloFaraci from "@/components/sections/AngeloFaraci";
import { ANGELO_FARACI } from "@/lib/data";
import SeoBoost from "@/components/site/SeoBoost";

export const metadata: Metadata = {
  title: "Angelo Faraci",
  description:
    "Angelo Faraci — regista, attore, produttore nato a Palermo il 13 agosto 1989. Regista di sei film con Maria Antonina Macaluso.",
  alternates: { canonical: "/angelo-faraci" },
};

export default function AngeloFaraciPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "Angelo Faraci" },
        ]}
      />
      <PageHero
        eyebrow="Angelo Faraci"
        title="Regista, Attore, Produttore"
        subtitle={`Nato a Palermo il 13 agosto 1989 · Enciclopedia digitale: ${ANGELO_FARACI.site.replace("https://", "")}`}
        breadcrumb={[{ label: "Angelo Faraci" }]}
      />
      <AngeloFaraci />
    </main>
  );
}
