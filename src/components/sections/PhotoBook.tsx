import { PHOTOBOOK_FULL } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * PhotoBook — Griglia uniforme responsive (stile Vercel, foto compatte)
 * Mobile: 3 colonne / Tablet: 4 / Desktop: 5 / XL: 6
 * Aspect ratio 3/4, object-cover, lazy loading aggressive.
 */
export default function PhotoBook({ compact = false }: { compact?: boolean }) {
  const list = compact ? PHOTOBOOK_FULL.slice(0, 12) : PHOTOBOOK_FULL;

  return (
    <section id="photobook" className="bg-section-alt py-20 md:py-28">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow="Photo Book"
          title="Novanta scatti"
          subtitle="Un archivio visivo dell'attrice siciliana"
        />
        {/* Griglia uniforme responsive — foto compatte su tutti i device */}
        <div className="grid grid-cols-3 gap-1.5 sm:grid-cols-4 sm:gap-2 md:grid-cols-5 md:gap-3 lg:gap-4 xl:grid-cols-6">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={(i % 6) * 40}>
              <Link
                href={`/photo/${p.id}`}
                className="group block overflow-hidden bg-smoke rounded-md md:rounded-lg"
                aria-label={p.alt}
              >
                <figure className="relative aspect-[3/4]">
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-noir/80 via-transparent to-transparent p-2 md:p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <span className="text-[10px] uppercase tracking-wide-sm text-cream/90 md:text-xs">{p.title}</span>
                  </figcaption>
                </figure>
              </Link>
            </Reveal>
          ))}
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
