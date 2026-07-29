import { ARTICLES } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";
import { ExternalLink, Newspaper } from "lucide-react";

export default function Articles({ compact = false }: { compact?: boolean }) {
  const list = compact ? ARTICLES.slice(0, 3) : ARTICLES;
  return (
    <section id="stampa" className="bg-section-alt py-24 md:py-32">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow="Articoli"
          title="La stampa racconta"
          subtitle="Sei articoli verificati da fonti pubbliche"
        />
        <div className="grid gap-5 md:grid-cols-2">
          {list.map((a, i) => (
            <Reveal key={a.title} delay={(i % 2) * 100}>
              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card group flex h-full items-start gap-4 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-gold/40"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold">
                  <Newspaper className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-wide-sm text-gold/70">
                    <span>{a.source}</span>
                    <span className="text-cream/30">•</span>
                    <time dateTime={a.date}>
                      {new Date(a.date).toLocaleDateString("it-IT", { year: "numeric", month: "long", day: "numeric" })}
                    </time>
                  </div>
                  <h3 className="mt-1.5 font-display text-lg leading-snug text-cream group-hover:text-gold">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-cream/65 line-clamp-2">{a.excerpt}</p>
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-cream/30 transition-colors group-hover:text-gold" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
