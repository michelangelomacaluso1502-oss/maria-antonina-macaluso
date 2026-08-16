import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Contact from "@/components/sections/Contact";
import SeoBoost from "@/components/site/SeoBoost";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatti ufficiali di Maria Antonina Macaluso: Instagram e Facebook @mary.macaluso.16, form per stampa e collaborazioni.",
  alternates: { canonical: "/contatti" },
};

export default function ContattiPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "Contatti" },
        ]}
      />
      <PageHero
        eyebrow="Contatti"
        title="Resta in contatto"
        subtitle="Per stampa, collaborazioni e richieste professionali"
        breadcrumb={[{ label: "Contatti" }]}
      />
      <Contact />
    </main>
  );
}
