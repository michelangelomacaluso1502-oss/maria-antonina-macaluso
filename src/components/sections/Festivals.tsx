import { FESTIVALS } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";
import { MapPin } from "lucide-react";

export default function Festivals({ compact = false }: { compact?: boolean }) {
  const list = compact ? FESTIVALS.slice(0, 5) : FESTIVALS;
  return (
    <section id="festival" className="bg-cinema-radial py-24 md:py-32">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow="Festival"
          title="Nove presenze nei festival"
          subtitle="Da Taormina a Venezia, i red carpet del percorso"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((f, i) => (
            <Reveal key={f.name + f.year} delay={(i % 3) * 80}>
              <article className="glass-card group h-full p-5 transition-all duration-500 hover:border-gold/40">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="font-display text-lg leading-tight text-cream group-hover:text-gold">
                    {f.name}
                  </h3>
                  <span className="shrink-0 font-display text-xl text-gold/50">{f.year}</span>
                </div>
                <p className="mt-2 flex items-center gap-1.5 text-xs uppercase tracking-wide-sm text-cream/55">
                  <MapPin className="h-3.5 w-3.5 text-gold/70" />
                  {f.location}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-cream/65">{f.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
