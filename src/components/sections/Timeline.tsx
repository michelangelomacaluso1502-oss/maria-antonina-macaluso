import { TIMELINE } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";

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

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-gold/50 via-gold/25 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <div className="space-y-10">
            {list.map((ev, i) => {
              const flip = i % 2 === 1;
              return (
                <Reveal key={ev.year + ev.title} className="relative pl-10 md:pl-0">
                  <span className="absolute left-[5px] top-1.5 h-3 w-3 rounded-full border border-gold bg-noir md:left-1/2 md:-translate-x-1/2">
                    <span className="absolute inset-0.5 rounded-full bg-gold" />
                  </span>
                  <div className={`md:grid md:grid-cols-2 md:gap-8 ${flip ? "md:[direction:rtl]" : ""}`}>
                    <div className={`md:[direction:ltr] ${flip ? "md:order-2 md:pl-8" : "md:pr-8 md:text-right"}`}>
                      <p className="font-display text-4xl text-gradient-gold">{ev.year}</p>
                      <h3 className="mt-1 font-display text-xl text-cream">{ev.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-cream/65">{ev.description}</p>
                    </div>
                    <div className="hidden md:block" />
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
