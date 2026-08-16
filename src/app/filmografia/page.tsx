import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Filmography from "@/components/sections/Filmography";
import SeoBoost from "@/components/site/SeoBoost";

export const metadata: Metadata = {
  title: "Filmografia",
  description:
    "Filmografia completa di Maria Antonina Macaluso: sei film diretti da Angelo Faraci, da Provvidenza (2021) a Pochi Attimi (2026).",
  alternates: { canonical: "/filmografia" },
};

export default function FilmografiaPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "Filmografia" },
        ]}
      />
      <PageHero
        eyebrow="Filmografia"
        title="Dieci produzioni, una visione"
        subtitle="Dal debutto Provvidenza (2021) a Pochi Attimi (2026) — tutti diretti da Angelo Faraci"
        breadcrumb={[{ label: "Filmografia" }]}
      />
      <Filmography />
    </main>
  );
}
