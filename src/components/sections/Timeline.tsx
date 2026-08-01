import { TIMELINE } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import YouTubeFacade from "@/components/cinematic/YouTubeFacade";
import SectionHeading from "./SectionHeading";
import { ExternalLink } from "lucide-react";

export default function Timeline({ compact = false }: { compact?: boolean }) {
  const list = compact ? TIMELINE.slice(-6) : TIMELINE;
  return (
    <section id="timeline" className="bg-cinema-radial py-24 md:py-32">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow="Timeline"
          title="2001 → 2026"
          subtitle="Venticinque anni di una vita che diventa cinema"
        />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-gold/50 via-gold/25 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-12">
            {list.map((ev, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={ev.year + ev.title} className="relative pl-10 md:pl-0">
                  <span className="absolute left-[5px] top-1.5 h-3 w-3 rounded-full border border-gold bg-noir md:left-1/2 md:-translate-x-1/2">
                    <span className="absolute inset-0.5 rounded-full bg-gold" />
                  </span>
                  <div
                    className={`md:grid md:grid-cols-2 md:gap-8 ${
                      ev.youtubeId ? "md:items-center" : "md:items-start"
                    } ${flip ? "md:[direction:rtl]" : ""}`}
                  >
                    {/* Testo evento */}
                    <div
                      className={`md:[direction:ltr] ${
                        flip ? "md:order-2 md:pl-8" : "md:pr-8 md:text-right"
                      }`}
                    >
                      <p className="font-display text-4xl text-gradient-gold">{ev.year}</p>
                      <h3 className="mt-1 font-display text-xl text-cream">{ev.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream/65">
                        {ev.description}
                      </p>
                      {/* Fonte verificata */}
                      {ev.sourceUrl && ev.sourceName && (
                        <a
                          href={ev.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`mt-3 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wide-sm text-gold/60 transition-colors hover:text-gold ${
                            flip ? "" : "md:flex-row-reverse"
                          }`}
                        >
                          <ExternalLink className="h-3 w-3" />
                          Fonte: {ev.sourceName}
                        </a>
                      )}
                    </div>
                    {/* YouTube embed (se presente) */}
                    <div
                      className={`mt-5 md:mt-0 md:[direction:ltr] ${
                        flip ? "md:order-1 md:pr-8" : "md:pl-8"
                      } ${ev.youtubeId ? "" : "hidden md:block"}`}
                    >
                      {ev.youtubeId && ev.youtubeTitle ? (
                        <YouTubeFacade
                          videoId={ev.youtubeId}
                          title={ev.youtubeTitle}
                          className="glass-card card-lift-premium overflow-hidden"
                        />
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
