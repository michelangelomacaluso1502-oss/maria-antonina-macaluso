import { BIO_CHAPTERS } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/cn";

export default function Biography() {
  return (
    <section id="biografia" className="bg-section-alt py-24 md:py-32">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow="Biografia"
          title="Sette capitoli di vita e di cinema"
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
                      "md:grid md:grid-cols-2 md:items-center md:gap-10",
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
                                    {para}
                                  </p>
                                ))}
                              </div>
                              {/* Foto per-sottosezione (mobile + tablet) */}
                              {sec.image && (
                                <figure className="glass-card group mt-4 overflow-hidden p-2 md:hidden">
                                  {/* eslint-disable-next-line @next/next/no-img-element */}
                                  <img
                                    src={sec.image}
                                    alt={sec.imageAlt ?? sec.heading}
                                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
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

                    {/* Colonna immagini: chapter.image OPPURE griglia di immagini per-sottosezione (desktop) */}
                    {ch.image ? (
                      <div className={cn("mt-6 md:mt-0 md:[direction:ltr]", flip ? "md:order-1" : "")}>
                        <figure className="glass-card group mx-auto max-w-[400px] overflow-hidden p-2">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={ch.image}
                            alt={ch.imageAlt ?? `Maria Antonina Macaluso — ${ch.title}`}
                            className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            loading="lazy"
                          />
                          <figcaption className="px-2 py-2 text-center text-[11px] uppercase tracking-wide-sm text-cream/50">
                            {ch.title}
                          </figcaption>
                        </figure>
                      </div>
                    ) : ch.sections && ch.sections.some((s) => s.image) ? (
                      <div className={cn("mt-6 md:mt-0 md:[direction:ltr]", flip ? "md:order-1" : "")}>
                        <div className="mx-auto grid max-w-[400px] gap-4">
                          {ch.sections
                            .filter((s) => s.image)
                            .map((sec, k) => (
                              <figure key={k} className="glass-card group overflow-hidden p-2">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                  src={sec.image}
                                  alt={sec.imageAlt ?? sec.heading}
                                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                  loading="lazy"
                                />
                                <figcaption className="px-2 py-2 text-center text-[11px] uppercase tracking-wide-sm text-cream/50">
                                  {sec.heading}
                                </figcaption>
                              </figure>
                            ))}
                        </div>
                      </div>
                    ) : null}
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
