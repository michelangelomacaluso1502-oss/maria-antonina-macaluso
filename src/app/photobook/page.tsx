import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import PhotoBook from "@/components/sections/PhotoBook";
import SeoBoost from "@/components/site/SeoBoost";

export const metadata: Metadata = {
  title: "Photo Book",
  description:
    "Photo Book di Maria Antonina Macaluso: 90 scatti dell'attrice siciliana (83 scatti classici + 7 scatti Venezia 83). Un archivio visivo del suo percorso cinematografico.",
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
        title="Novanta scatti"
        subtitle="Un archivio visivo dell'attrice siciliana — 83 scatti classici + 7 scatti Venezia 83"
        breadcrumb={[{ label: "Photo Book" }]}
      />
      <PhotoBook />
    </main>
  );
}
