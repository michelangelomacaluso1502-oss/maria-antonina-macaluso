import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Timeline from "@/components/sections/Timeline";
import SeoBoost from "@/components/site/SeoBoost";

export const metadata: Metadata = {
  title: "Timeline",
  description:
    "Timeline della vita e della carriera di Maria Antonina Macaluso: dalla nascita a Bologna nel 2001 al film Pochi Attimi nel 2026.",
  alternates: { canonical: "/timeline" },
};

export default function TimelinePage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "Timeline" },
        ]}
      />
      <PageHero
        eyebrow="Timeline"
        title="2001 → 2026"
        subtitle="Venticinque anni di una vita che diventa cinema"
        breadcrumb={[{ label: "Timeline" }]}
      />
      <Timeline />
    </main>
  );
}
