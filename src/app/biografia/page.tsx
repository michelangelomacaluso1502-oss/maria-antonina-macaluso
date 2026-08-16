import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Biography from "@/components/sections/Biography";
import SeoBoost from "@/components/site/SeoBoost";

export const metadata: Metadata = {
  title: "Biografia",
  description:
    "Biografia di Maria Antonina Macaluso — nata a Bologna il 9 novembre 2001, cresciuta a Camporeale (PA). Otto capitoli di vita e di cinema, dall'incontro con Angelo Faraci a Pochi Attimi (2026).",
  alternates: { canonical: "/biografia" },
};

export default function BiografiaPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "Biografia" },
        ]}
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
