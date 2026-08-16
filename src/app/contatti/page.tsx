import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Contact from "@/components/sections/Contact";
import SeoBoost from "@/components/site/SeoBoost";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatti ufficiali di Maria Antonina Macaluso: Instagram e Facebook @mary.macaluso.16, form per stampa e collaborazioni.",
  alternates: { canonical: "/contatti" },
};

const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contatti — Maria Antonina Macaluso",
  description:
    "Pagina contatti ufficiale di Maria Antonina Macaluso per richieste di stampa, collaborazioni e comunicazioni professionali.",
  url: `${SITE.url}/contatti`,
  inLanguage: "it-IT",
  mainEntity: {
    "@type": "Person",
    name: "Maria Antonina Macaluso",
    email: "mailto:mariantonina63@gmail.com",
    url: SITE.url,
    sameAs: [
      "https://www.instagram.com/mary.macaluso09",
      "https://www.facebook.com/mary.macaluso.16",
      "https://www.tiktok.com/@mary.macaluso",
      "https://www.imdb.com/name/nm14708762/",
    ],
  },
};

export default function ContattiPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "Contatti" },
        ]}
        additionalJsonLd={[contactPageJsonLd]}
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
