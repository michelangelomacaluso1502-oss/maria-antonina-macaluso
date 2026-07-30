import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import AngeloFaraci from "@/components/sections/AngeloFaraci";
import { Reveal } from "@/components/cinematic/Reveal";
import { FILMS, ANGELO_FARACI } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Collaborazioni",
  description:
    "Il sodalizio artistico tra Maria Antonina Macaluso e il regista Angelo Faraci: sei film condivisi dal 2021 al 2026.",
  alternates: { canonical: "/collaborazioni" },
};

export default function CollaborazioniPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Collaborazioni"
        title="Il sodalizio artistico"
        subtitle="Sette film, un incontro, una visione condivisa"
        breadcrumb={[{ label: "Collaborazioni" }]}
      />
      <AngeloFaraci />

      <section className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          <Reveal className="mx-auto mb-12 max-w-2xl text-center">
            <span className="pill-cinema mb-4">Film condivisi</span>
            <h2 className="font-display text-4xl text-gradient-gold sm:text-5xl">Sette film insieme</h2>
            <div className="divider-cinema mt-8 max-w-xs" />
          </Reveal>
          <div className="mx-auto max-w-3xl divide-y divide-gold/10 border-y border-gold/10">
            {FILMS.map((f) => (
              <Reveal key={f.slug} className="flex items-center gap-5 py-5">
                <span className="font-display text-2xl text-gold/50">{f.year}</span>
                <div className="flex-1">
                  <Link href={`/film/${f.slug}`} className="font-display text-xl text-cream hover:text-gold">
                    {f.title}
                  </Link>
                  <p className="text-sm text-cream/60">{f.role} · Regia {f.director}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-gold/50" />
              </Reveal>
            ))}
          </div>
          <Reveal className="mt-10 text-center">
            <a href={ANGELO_FARACI.site} target="_blank" rel="noopener noreferrer" className="btn-cinema btn-cinema-solid">
              Enciclopedia digitale — Angelo Faraci
            </a>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
