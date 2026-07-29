import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import FAQ from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Domande frequenti su Maria Antonina Macaluso: nascita, Angelo Faraci, filmografia, cortometraggi Rai Cinema, festival, premi e social.",
  alternates: { canonical: "/faq" },
};

export default function FAQPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="FAQ"
        title="Domande frequenti"
        subtitle="Otto risposte sui dati verificati di Maria Antonina Macaluso"
        breadcrumb={[{ label: "FAQ" }]}
      />
      <FAQ />
    </main>
  );
}
