import { ANGELO_FARACI } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";
import { ExternalLink, Heart, Clapperboard, Calendar } from "lucide-react";

export default function AngeloFaraci() {
  const af = ANGELO_FARACI;
  return (
    <section id="angelo-faraci" className="relative overflow-hidden bg-cinema-radial py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]" aria-hidden>
        <div className="absolute -right-20 top-10 h-96 w-96 rounded-full bg-gold blur-[120px]" />
        <div className="absolute -left-20 bottom-10 h-80 w-80 rounded-full bg-rose blur-[120px]" />
      </div>

      <div className="cinematic-container relative">
        <SectionHeading
          eyebrow="Angelo Faraci"
          title="Regista, Attore, Produttore"
          subtitle="Il sodalizio artistico e di vita che ha generato sette film"
        />

        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1.2fr_1fr] md:items-start">
          <Reveal>
            <div className="space-y-5">
              {af.bio.map((p, i) => (
                <p key={i} className="text-pretty text-base leading-relaxed text-cream/75 sm:text-lg">
                  {p}
                </p>
              ))}
              <div className="glass-card mt-6 border-l-2 border-gold p-5">
                <p className="font-italic text-xl leading-relaxed text-rose-soft sm:text-2xl">
                  “{af.quote}”
                </p>
                <p className="mt-3 text-xs uppercase tracking-cinema text-gold/70">— {af.name}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="glass-luxury space-y-5 p-6">
              <div>
                <p className="text-[11px] uppercase tracking-cinema text-gold/70">Profilo</p>
                <p className="mt-1 font-display text-2xl text-cream">{af.name}</p>
                <p className="text-sm text-cream/60">{af.role}</p>
              </div>

              <div className="divider-cinema" />

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-cream/75">
                    Nato a <strong className="text-cream">{af.birthPlace}</strong> il{" "}
                    <strong className="text-cream">13 agosto 1989</strong>
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Heart className="mt-0.5 h-4 w-4 shrink-0 text-rose" />
                  <span className="text-cream/75">
                    Incontro con Maria Antonina il{" "}
                    <strong className="text-cream">14 agosto 2019</strong> a Palermo
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clapperboard className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-cream/75">
                    Regista di <strong className="text-cream">{af.sharedFilms} film</strong> con Maria Antonina
                  </span>
                </li>
              </ul>

              <div className="divider-cinema" />

              <div className="flex flex-col gap-2">
                <a
                  href={af.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cinema btn-cinema-solid w-full justify-center"
                >
                  Sito ufficiale Angelo Faraci
                  <ExternalLink className="h-4 w-4" />
                </a>
                <a
                  href={`https://www.imdb.com/name/${af.imdb}/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-cinema w-full justify-center"
                >
                  IMDb — {af.imdb}
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
