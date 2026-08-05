import { ALTRE_PRODUZIONI } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Film, Mic, Tv } from "lucide-react";

/**
 * AltreProduzioni — Sezione dedicata a opere distinte dalla filmografia principale
 * Include: Cortometraggi pubblicitari, Serie TV internazionali, Speciali TV
 */
export default function AltreProduzioni() {
  return (
    <section id="altre-produzioni" className="bg-noir py-24 md:py-32">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow="Altre Produzioni"
          title="Oltre il Cinema"
          subtitle="Cortometraggi, pubblicità, serie TV internazionali e speciali TV — un ventaglio di esperienze oltre la filmografia principale"
        />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ALTRE_PRODUZIONI.map((opera, i) => {
            // Icona in base al tipo
            const icon =
              opera.type.includes("Pubblicità") ? Film :
              opera.type.includes("Serie TV") ? Tv :
              Mic;

            const Icon = icon;

            return (
              <Reveal key={opera.slug} delay={i * 100}>
                <article className="glass-luxury card-lift-premium group h-full overflow-hidden">
                  {/* Poster */}
                  <div className="relative aspect-[2/3] overflow-hidden">
                    <Image
                      src={opera.poster || "/images/films/placeholder.svg"}
                      alt={opera.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      quality={95}
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Overlay leggibilità */}
                    <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/30 to-transparent" />
                    {/* Icona tipo opera */}
                    <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-gold/40 bg-noir/60 text-gold backdrop-blur-sm">
                      <Icon className="h-4 w-4" />
                    </div>
                    {/* Anno */}
                    <div className="absolute left-3 top-3 rounded-full border border-gold/40 bg-noir/60 px-3 py-1 text-[10px] uppercase tracking-wide-sm text-gold backdrop-blur-sm">
                      {opera.year}
                    </div>
                  </div>

                  {/* Contenuto */}
                  <div className="flex flex-col p-6">
                    <p className="text-[10px] uppercase tracking-cinema text-gold/70">
                      {opera.type}
                    </p>
                    <h3 className="mt-2 font-display text-xl text-cream md:text-2xl">
                      {opera.title}
                    </h3>
                    <p className="mt-1 text-xs uppercase tracking-wide-sm text-cream/50">
                      {opera.production}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-cream/70 line-clamp-3">
                      {opera.description}
                    </p>

                    {/* Ruolo */}
                    <div className="mt-4 inline-flex items-center gap-2 self-start rounded-full border border-gold/20 bg-gold/5 px-3 py-1">
                      <span className="text-[10px] uppercase tracking-wide-sm text-gold">
                        Ruolo: {opera.role}
                      </span>
                    </div>

                    {/* Link dettagli */}
                    <Link
                      href={`/altre-produzioni/${opera.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
                    >
                      Scopri di più
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
