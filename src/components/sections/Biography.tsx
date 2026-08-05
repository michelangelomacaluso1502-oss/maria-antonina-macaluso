import { BIO_CHAPTERS } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/cn";
import Image from "next/image";
import React from "react";
import FacebookEmbed from "@/components/cinematic/FacebookEmbed";

// Mappa aspect-ratio → dimensioni intrinseche (per evitare layout shift)
const ASPECT_DIMS: Record<string, { w: number; h: number }> = {
  "3/4": { w: 1200, h: 1600 },
  "4/5": { w: 1200, h: 1500 },
  "4/3": { w: 1600, h: 1200 },
  "16/9": { w: 1920, h: 1080 },
  "1/1": { w: 1200, h: 1200 },
};

// Classi Tailwind statiche (per evitare purge) per ogni aspect-ratio
const ASPECT_CLASS: Record<string, string> = {
  "3/4": "aspect-[3/4]",
  "4/5": "aspect-[4/5]",
  "4/3": "aspect-[4/3]",
  "16/9": "aspect-[16/9]",
  "1/1": "aspect-square",
};

// Renderizza testo con link blu cliccabili incorporati
function renderTextWithLinks(text: string, links?: { text: string; url: string }[]): React.ReactNode {
  if (!links || links.length === 0) return text;

  const parts: React.ReactNode[] = [];
  let remaining = text;
  let keyCounter = 0;

  // Ordina i link per lunghezza decrescente (per matchare prima i più lunghi)
  const sortedLinks = [...links].sort((a, b) => b.text.length - a.text.length);

  while (remaining.length > 0) {
    let earliestIdx = -1;
    let earliestLink: { text: string; url: string } | null = null;

    for (const link of sortedLinks) {
      const idx = remaining.indexOf(link.text);
      if (idx > -1 && (earliestIdx === -1 || idx < earliestIdx)) {
        earliestIdx = idx;
        earliestLink = link;
      }
    }

    if (earliestIdx === -1 || !earliestLink) {
      parts.push(remaining);
      break;
    }

    // Aggiungi testo prima del link
    if (earliestIdx > 0) {
      parts.push(remaining.substring(0, earliestIdx));
    }

    // Aggiungi il link
    parts.push(
      React.createElement(
        "a",
        {
          key: `link-${keyCounter++}`,
          href: earliestLink.url,
          target: earliestLink.url.startsWith("mailto:") ? undefined : "_blank",
          rel: earliestLink.url.startsWith("mailto:") ? undefined : "noopener noreferrer",
          className: "link-source",
        },
        earliestLink.text,
      ),
    );

    remaining = remaining.substring(earliestIdx + earliestLink.text.length);
  }

  return React.createElement(React.Fragment, null, ...parts);
}

export default function Biography() {
  return (
    <section id="biografia" className="bg-section-alt py-24 md:py-32">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow="Biografia"
          title="Otto capitoli di vita e di cinema"
          subtitle="Da Bologna a Camporeale, dall'incontro con Angelo Faraci a Pochi Attimi (2026)"
        />

        <div className="relative mx-auto max-w-4xl">
          {/* vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent md:left-1/2" />

          <div className="space-y-12 md:space-y-20">
            {BIO_CHAPTERS.map((ch, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={ch.num} className="relative pl-12 md:pl-0">
                  {/* node */}
                  <span className="absolute left-[9px] top-2 flex h-4 w-4 items-center justify-center rounded-full border border-gold bg-noir md:left-1/2 md:-translate-x-1/2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  </span>

                  <div
                    className={cn(
                      "md:grid md:grid-cols-2 md:items-start md:gap-10",
                      flip && "md:[direction:rtl]",
                    )}
                  >
                    <div className={cn("md:[direction:ltr]", flip ? "md:order-2 md:pl-10" : "md:pr-10 md:text-right")}>
                      <span className="font-display text-5xl text-gold/30">{ch.num}</span>
                      <h3 className="mt-1 font-display text-2xl text-cream sm:text-3xl">{ch.title}</h3>

                      {/* Se ci sono sottosezioni, renderizza quelle; altrimenti i paragrafi normali */}
                      {ch.sections && ch.sections.length > 0 ? (
                        <div className="mt-4 space-y-8">
                          {ch.sections.map((sec, k) => (
                            <div key={k}>
                              <h4 className="font-display text-base font-semibold uppercase tracking-wide-sm text-gold/80 sm:text-lg">
                                {sec.heading}
                              </h4>
                              <div className="mt-2 space-y-3">
                                {sec.body.map((para, j) => (
                                  <p key={j} className="text-pretty text-sm leading-relaxed text-cream/70 sm:text-base">
                                    {renderTextWithLinks(para, sec.links)}
                                  </p>
                                ))}
                              </div>
                              {/* Facebook embed per link facebook.com */}
                              {sec.links?.some(l => l.url.includes("facebook.com")) && (
                                <FacebookEmbed
                                  url={sec.links.find(l => l.url.includes("facebook.com"))!.url}
                                  fallbackText="Condivisione video Provvidenza su Facebook"
                                />
                              )}
                              {/* Foto per-sottosezione: visibile su TUTTI i device, subito sotto il testo */}
                              {sec.image && (
                                <figure className="glass-card group mt-5 overflow-hidden p-2">
                                  <Image
                                    src={sec.image}
                                    alt={sec.imageAlt ?? sec.heading}
                                    width={ASPECT_DIMS[sec.aspect ?? "4/5"].w}
                                    height={ASPECT_DIMS[sec.aspect ?? "4/5"].h}
                                    quality={95}
                                    sizes="(min-width: 768px) 50vw, 100vw"
                                    className={cn(
                                      "w-full object-cover transition-transform duration-700 group-hover:scale-105",
                                      ASPECT_CLASS[sec.aspect ?? "4/5"],
                                    )}
                                    loading="lazy"
                                  />
                                  <figcaption className="px-2 py-2 text-center text-[11px] uppercase tracking-wide-sm text-cream/50">
                                    {sec.heading}
                                  </figcaption>
                                </figure>
                              )}
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="mt-4 space-y-3">
                          {ch.body.map((para, j) => (
                            <p key={j} className="text-pretty text-sm leading-relaxed text-cream/70 sm:text-base">
                              {para}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Colonna immagini: solo se chapter.image (foto chapter-level, NON per-sottosezione) */}
                    {ch.image && (
                      <div className={cn("mt-6 md:mt-0 md:[direction:ltr]", flip ? "md:order-1" : "")}>
                        <figure className="glass-card group mx-auto max-w-[400px] overflow-hidden p-2">
                          <Image
                            src={ch.image}
                            alt={ch.imageAlt ?? `Maria Antonina Macaluso — ${ch.title}`}
                            width={1200}
                            height={1600}
                            quality={95}
                            sizes="(min-width: 768px) 400px, 100vw"
                            className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                          <figcaption className="px-2 py-2 text-center text-[11px] uppercase tracking-wide-sm text-cream/50">
                            {ch.title}
                          </figcaption>
                        </figure>
                      </div>
                    )}
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
