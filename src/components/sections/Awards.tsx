import { AWARDS } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";
import { Award as AwardIcon } from "lucide-react";

export default function Awards({ compact = false }: { compact?: boolean }) {
  const list = compact ? AWARDS.slice(0, 4) : AWARDS;
  return (
    <section id="premi" className="bg-section-alt py-24 md:py-32">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow="Premi"
          title="Sette riconoscimenti"
          subtitle="Dalla Sicilia al Mediterraneo, il lavoro premiato della critica"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((a, i) => (
            <Reveal key={a.title + a.year} delay={(i % 3) * 90}>
              <article className="glass-card group card-lift-premium h-full p-6">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold">
                    <AwardIcon className="h-5 w-5" />
                  </span>
                  <span className="font-display text-3xl text-gold/40">{a.year}</span>
                </div>
                <h3 className="mt-4 font-display text-xl leading-snug text-cream group-hover:text-gold">
                  {a.title}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wide-sm text-gold/70">{a.org}</p>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">{a.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
