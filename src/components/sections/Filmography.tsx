import Link from "next/link";
import Image from "next/image";
import { FILMS } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";
import { ArrowRight, Film as FilmIcon } from "lucide-react";

export default function Filmography({ compact = false }: { compact?: boolean }) {
  const list = compact ? FILMS.slice(0, 4) : FILMS;
  return (
    <section id="filmografia" className="bg-section-alt py-24 md:py-32">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow="Filmografia"
          title="Dieci produzioni, una visione"
          subtitle="Dal debutto Ciò che non ti ho detto (2018) a Pochi Attimi (2026) — tutti diretti da Angelo Faraci"
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((f, i) => (
            <Reveal key={f.slug} delay={(i % 3) * 100}>
              <Link
                href={`/film/${f.slug}`}
                className="glass-card group card-lift-premium flex h-full flex-col overflow-hidden p-4"
              >
                <div className="zoom-wrap relative mb-4 aspect-[2/3] w-full overflow-hidden bg-gradient-to-br from-smoke-light to-noir">
                  {f.poster ? (
                    <Image
                      src={f.poster}
                      alt={`Locandina ${f.title}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <FilmIcon className="h-16 w-16 text-gold/25" />
                    </div>
                  )}
                  <span className="absolute left-3 top-3 pill-cinema bg-noir/70 backdrop-blur">{f.year}</span>
                  <span className="absolute bottom-3 right-3 text-[10px] uppercase tracking-wide-sm text-cream/70 bg-noir/60 backdrop-blur px-2 py-0.5 rounded-sm">
                    {f.type}
                  </span>
                </div>
                <h3 className="font-display text-2xl leading-tight text-cream transition-colors group-hover:text-gold">
                  {f.title}
                </h3>
                <p className="mt-1 text-xs uppercase tracking-wide-sm text-gold/70">
                  {f.role}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-cream/65 line-clamp-3">
                  {f.description}
                </p>
                <div className="mt-auto flex items-center justify-between pt-4 text-xs text-cream/45">
                  <span>Regia: {f.director}</span>
                  <span className="flex items-center gap-1 text-gold/70 transition-colors group-hover:text-gold">
                    Scheda <ArrowRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {compact && (
          <Reveal className="mt-10 text-center">
            <Link href="/filmografia" className="btn-cinema">
              Vedi tutta la filmografia <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
