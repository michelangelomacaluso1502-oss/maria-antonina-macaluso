import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Biography from "@/components/sections/Biography";

export const metadata: Metadata = {
  title: "Biografia",
  description:
    "Biografia di Maria Antonina Macaluso — nata a Bologna il 9 novembre 2001, cresciuta a Camporeale (PA). Nove capitoli di vita e di cinema, dal debutto in TV a Pochi Attimi (2026).",
  alternates: { canonical: "/biografia" },
};

export default function BiografiaPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Biografia"
        title="Nove capitoli di vita e di cinema"
        subtitle="Da Bologna a Camporeale, dal debutto in TV a Pochi Attimi (2026)"
        breadcrumb={[{ label: "Biografia" }]}
      />
      <Biography />
    </main>
  );
}
