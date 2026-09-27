import { PHOTOBOOK_FULL } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

/**
 * PhotoBook — Griglia asimmetrica a 2 colonne (stile portfolio/social)
 * Colonna sinistra più larga (60%), colonna destra più stretta (40%)
 * Foto object-cover, tutte uniformi, nessuna spezzatura
 */
export default function PhotoBook({ compact = false }: { compact?: boolean }) {
  const list = compact ? PHOTOBOOK_FULL.slice(0, 12) : PHOTOBOOK_FULL;

  // Dividi le foto in 2 colonne
  const leftCol = list.filter((_, i) => i % 2 === 0);
  const rightCol = list.filter((_, i) => i % 2 === 1);

  return (
    <section id="photobook" className="bg-section-alt py-24 md:py-32">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow="Photo Book"
          title="Novanta scatti"
          subtitle="Un archivio visivo dell'attrice siciliana"
        />
        {/* Griglia asimmetrica a 2 colonne */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          {/* Colonna sinistra (più larga) */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {leftCol.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 60}>
                <Link
                  href={`/photo/${p.id}`}
                  className="group block overflow-hidden bg-smoke rounded-lg"
                  aria-label={p.alt}
                >
                  <figure className="relative aspect-[3/4]">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1280px) 30vw, (min-width: 640px) 35vw, 50vw"
                      quality={95}
                      loading="lazy"
                      className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    />
                    <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-noir/80 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span className="text-xs uppercase tracking-wide-sm text-cream/90">{p.title}</span>
                    </figcaption>
                  </figure>
                </Link>
              </Reveal>
            ))}
          </div>
          {/* Colonna destra (più stretta) */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {rightCol.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 60}>
                <Link
                  href={`/photo/${p.id}`}
                  className="group block overflow-hidden bg-smoke rounded-lg"
                  aria-label={p.alt}
                >
                  <figure className="relative aspect-[3/4]">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 1280px) 20vw, (min-width: 640px) 30vw, 50vw"
                      quality={95}
                      loading="lazy"
                      className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                    />
                    <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-noir/80 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span className="text-xs uppercase tracking-wide-sm text-cream/90">{p.title}</span>
                    </figcaption>
                  </figure>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

        {compact && (
          <Reveal className="mt-10 text-center">
            <Link href="/photobook" className="btn-cinema">
              Guarda tutti i 90 scatti <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
