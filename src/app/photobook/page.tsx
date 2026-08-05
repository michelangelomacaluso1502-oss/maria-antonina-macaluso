import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import PhotoBook from "@/components/sections/PhotoBook";

export const metadata: Metadata = {
  title: "Photo Book",
  description:
    "Photo Book di Maria Antonina Macaluso: 69 scatti dell'attrice siciliana. Un archivio visivo del suo percorso.",
  alternates: { canonical: "/photobook" },
};

export default function PhotoBookPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Photo Book"
        title="Sessantanove scatti"
        subtitle="Un archivio visivo dell'attrice siciliana"
        breadcrumb={[{ label: "Photo Book" }]}
      />
      <PhotoBook />
    </main>
  );
}
