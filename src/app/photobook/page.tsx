import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import PhotoBook from "@/components/sections/PhotoBook";
import SeoBoost from "@/components/site/SeoBoost";

export const metadata: Metadata = {
  title: "Photo Book",
  description:
    "Photo Book di Maria Antonina Macaluso: 83 scatti dell'attrice siciliana. Un archivio visivo del suo percorso.",
  alternates: { canonical: "/photobook" },
};

export default function PhotoBookPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "Photo Book" },
        ]}
      />
      <PageHero
        eyebrow="Photo Book"
        title="Ottantatré scatti"
        subtitle="Un archivio visivo dell'attrice siciliana"
        breadcrumb={[{ label: "Photo Book" }]}
      />
      <PhotoBook />
    </main>
  );
}
