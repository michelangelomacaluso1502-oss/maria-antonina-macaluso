import { PHOTOBOOK } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function PhotoBook({ compact = false }: { compact?: boolean }) {
  const list = compact ? PHOTOBOOK.slice(0, 12) : PHOTOBOOK;
  return (
    <section id="photobook" className="bg-section-alt py-24 md:py-32">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow="Photo Book"
          title="Cinquantasette scatti"
          subtitle="Un archivio visivo dell'attrice siciliana"
        />
        <div className="masonry-grid">
          {list.map((p, i) => (
            <Reveal key={p.id} delay={(i % 5) * 60} className="masonry-item">
              <Link
                href={`/photo/${p.id}`}
                className="group block overflow-hidden bg-smoke"
                aria-label={p.alt}
              >
                <figure className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.src}
                    alt={p.alt}
                    loading="lazy"
                    className="w-full max-w-[250px] object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                  />
                  <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-noir/80 via-transparent to-transparent p-3 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="text-xs uppercase tracking-wide-sm text-cream/90">{p.title}</span>
                  </figcaption>
                </figure>
              </Link>
            </Reveal>
          ))}
        </div>

        {compact && (
          <Reveal className="mt-10 text-center">
            <Link href="/photobook" className="btn-cinema">
              Guarda tutti i 57 scatti <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        )}
      </div>
    </section>
  );
}
