import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Filmography from "@/components/sections/Filmography";

export const metadata: Metadata = {
  title: "Filmografia",
  description:
    "Filmografia completa di Maria Antonina Macaluso: sei film diretti da Angelo Faraci, da Provvidenza (2021) a Pochi Attimi (2026).",
  alternates: { canonical: "/filmografia" },
};

export default function FilmografiaPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Filmografia"
        title="Sei film, una visione"
        subtitle="Dal debutto Provvidenza (2021) a Pochi Attimi (2026) — tutti diretti da Angelo Faraci"
        breadcrumb={[{ label: "Filmografia" }]}
      />
      <Filmography />
    </main>
  );
}
