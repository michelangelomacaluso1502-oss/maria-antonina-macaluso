import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import AngeloFaraci from "@/components/sections/AngeloFaraci";
import { ANGELO_FARACI } from "@/lib/data";

export const metadata: Metadata = {
  title: "Angelo Faraci",
  description:
    "Angelo Faraci — regista, attore, produttore nato a Palermo il 13 agosto 1989. Regista di sette film con Maria Antonina Macaluso.",
  alternates: { canonical: "/angelo-faraci" },
};

export default function AngeloFaraciPage() {
  return (
    <main id="main">
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
