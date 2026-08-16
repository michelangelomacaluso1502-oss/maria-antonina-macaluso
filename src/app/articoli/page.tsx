import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import Articles from "@/components/sections/Articles";
import SeoBoost from "@/components/site/SeoBoost";

export const metadata: Metadata = {
  title: "Articoli",
  description:
    "Articoli di stampa su Maria Antonina Macaluso: Repubblica, Giornale di Sicilia, Cinecittà News, Rai News, Ciak Magazine, Movieplayer.",
  alternates: { canonical: "/articoli" },
};

export default function ArticoliPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "Articoli" },
        ]}
      />
      <PageHero
        eyebrow="Articoli"
        title="La stampa racconta"
        subtitle="Sei articoli verificati da fonti pubbliche"
        breadcrumb={[{ label: "Articoli" }]}
      />
      <Articles />
    </main>
  );
}
