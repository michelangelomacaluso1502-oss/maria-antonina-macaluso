import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Filmography from "@/components/sections/Filmography";

export const metadata: Metadata = {
  title: "Filmografia",
  description:
    "Filmografia completa di Maria Antonina Macaluso: sette film diretti da Angelo Faraci, da Regenerate (2020) a Pochi Attimi (2026).",
  alternates: { canonical: "/filmografia" },
};

export default function FilmografiaPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Filmografia"
        title="Sette film, una visione"
        subtitle="Dal debutto Regenerate (2020) a Pochi Attimi (2026) — tutti diretti da Angelo Faraci"
        breadcrumb={[{ label: "Filmografia" }]}
      />
      <Filmography />
    </main>
  );
}
