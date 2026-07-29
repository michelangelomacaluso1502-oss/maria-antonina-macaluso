import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { COLLEGAMENTI_ESTERI } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Collegamenti esteri",
  description:
    "Collegamenti esteri verificati: Angelo Faraci, IMDb, Rai Cinema, Taormina Film Fest, Fiuggi Film Festival, Sicilia Film Festival.",
  alternates: { canonical: "/collegamenti-esteri" },
};

export default function CollegamentiEsteriPage() {
  return (
    <main id="main">
      <PageHero
        eyebrow="Collegamenti esteri"
        title="Link verificati"
        subtitle="Fonti pubbliche e risorse esterne ufficiali"
        breadcrumb={[{ label: "Collegamenti esteri" }]}
      />
      <section className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          <div className="mx-auto grid max-w-4xl gap-5 sm:grid-cols-2">
            {COLLEGAMENTI_ESTERI.map((c, i) => (
              <Reveal key={c.url} delay={(i % 2) * 90}>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card group card-lift-premium flex h-full flex-col p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-xl leading-snug text-cream group-hover:text-gold">
                      {c.name}
                    </h3>
                    <ExternalLink className="h-4 w-4 shrink-0 text-cream/30 transition-colors group-hover:text-gold" />
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-cream/65">{c.note}</p>
                  <p className="mt-auto pt-4 break-all text-[11px] text-cream/40">{c.url}</p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
