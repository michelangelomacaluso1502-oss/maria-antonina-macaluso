import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ALTRE_PRODUZIONI } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import BackToTop from "@/components/cinematic/BackToTop";
import { ArrowLeft, ExternalLink, Film, Calendar, User, Clapperboard, Tag } from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return ALTRE_PRODUZIONI.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const opera = ALTRE_PRODUZIONI.find((p) => p.slug === slug);
  if (!opera) return { title: "Opera non trovata" };
  return {
    title: `${opera.title} — Altra Produzione`,
    description: opera.description,
    alternates: { canonical: `/altre-produzioni/${opera.slug}` },
    openGraph: {
      title: `${opera.title} — Maria Antonina Macaluso`,
      description: opera.description,
      images: [{ url: opera.poster || "/images/films/placeholder.svg", alt: opera.title }],
    },
  };
}

export default async function AltraProduzionePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const opera = ALTRE_PRODUZIONI.find((p) => p.slug === slug);
  if (!opera) notFound();

  return (
    <main id="main" className="bg-noire min-h-screen pt-28">
      <div className="cinematic-container">
        {/* Breadcrumb */}
        <Reveal className="mb-6">
          <Link href="/#altre-produzioni" className="btn-ghost-cinema">
            <ArrowLeft className="h-4 w-4" /> Tutte le altre produzioni
          </Link>
        </Reveal>

        {/* Header con poster + info */}
        <div className="grid gap-10 md:grid-cols-[400px_1fr]">
          {/* Poster */}
          <Reveal>
            <figure className="glass-card overflow-hidden p-3">
              <div className="relative aspect-[2/3] overflow-hidden">
                <Image
                  src={opera.poster || "/images/films/placeholder.svg"}
                  alt={opera.title}
                  fill
                  sizes="(min-width: 768px) 400px, 100vw"
                  quality={95}
                  priority
                  className="object-cover"
                />
              </div>
              <figcaption className="px-2 py-3 text-center text-xs uppercase tracking-wide-sm text-cream/50">
                {opera.title} — {opera.year}
              </figcaption>
            </figure>
          </Reveal>

          {/* Info */}
          <div>
            <Reveal>
              <p className="text-[11px] uppercase tracking-cinema text-gold/70">
                {opera.type}
              </p>
              <h1 className="mt-2 font-display text-4xl text-cream md:text-5xl lg:text-6xl">
                {opera.title}
              </h1>
              <p className="mt-3 text-lg text-gold">{opera.role}</p>
            </Reveal>

            {/* Meta info grid */}
            <Reveal delay={100}>
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
                <div className="glass-card p-4">
                  <div className="flex items-center gap-2 text-gold">
                    <Calendar className="h-4 w-4" />
                    <span className="text-[10px] uppercase tracking-wide-sm">Anno</span>
                  </div>
                  <p className="mt-1 text-sm text-cream/85">{opera.year}</p>
                </div>
                <div className="glass-card p-4">
                  <div className="flex items-center gap-2 text-gold">
                    <Clapperboard className="h-4 w-4" />
                    <span className="text-[10px] uppercase tracking-wide-sm">Regia</span>
                  </div>
                  <p className="mt-1 text-sm text-cream/85">{opera.director}</p>
                </div>
                <div className="glass-card p-4">
                  <div className="flex items-center gap-2 text-gold">
                    <Tag className="h-4 w-4" />
                    <span className="text-[10px] uppercase tracking-wide-sm">Genere</span>
                  </div>
                  <p className="mt-1 text-sm text-cream/85">{opera.genre}</p>
                </div>
                <div className="glass-card p-4">
                  <div className="flex items-center gap-2 text-gold">
                    <Film className="h-4 w-4" />
                    <span className="text-[10px] uppercase tracking-wide-sm">Produzione</span>
                  </div>
                  <p className="mt-1 text-sm text-cream/85">{opera.production}</p>
                </div>
                <div className="glass-card p-4">
                  <div className="flex items-center gap-2 text-gold">
                    <User className="h-4 w-4" />
                    <span className="text-[10px] uppercase tracking-wide-sm">Durata</span>
                  </div>
                  <p className="mt-1 text-sm text-cream/85">{opera.duration}</p>
                </div>
              </div>
            </Reveal>

            {/* Long description */}
            <Reveal delay={150}>
              <div className="mt-8 glass-card p-6">
                <h2 className="font-display text-xl text-gold mb-3">L'opera</h2>
                <p className="text-sm leading-relaxed text-cream/80 sm:text-base">
                  {opera.longDescription}
                </p>
              </div>
            </Reveal>

            {/* Plot */}
            {opera.plot && (
              <Reveal delay={200}>
                <div className="mt-6 glass-card p-6">
                  <h2 className="font-display text-xl text-gold mb-3">Trama</h2>
                  <p className="text-sm leading-relaxed text-cream/80 sm:text-base">
                    {opera.plot}
                  </p>
                </div>
              </Reveal>
            )}
          </div>
        </div>

        {/* Cast */}
        {opera.cast && opera.cast.length > 0 && (
          <Reveal className="mt-12">
            <h2 className="font-display text-2xl text-gold mb-4">Cast &amp; Troupe</h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {opera.cast.map((member, i) => (
                <div key={i} className="glass-card p-4">
                  <p className="text-sm text-cream/85">{member}</p>
                </div>
              ))}
            </div>
          </Reveal>
        )}

        {/* Trivia */}
        {opera.trivia && opera.trivia.length > 0 && (
          <Reveal className="mt-12">
            <h2 className="font-display text-2xl text-gold mb-4">Curiosità</h2>
            <ul className="space-y-3">
              {opera.trivia.map((t, i) => (
                <li key={i} className="glass-card flex items-start gap-3 p-4">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  <span className="text-sm text-cream/80">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {/* Press / Fonti */}
        {opera.press && opera.press.length > 0 && (
          <Reveal className="mt-12">
            <h2 className="font-display text-2xl text-gold mb-4">Rassegna Stampa &amp; Fonti</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {opera.press.map((p, i) => (
                <a
                  key={i}
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card group block p-5 transition-colors hover:border-gold/40"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[10px] uppercase tracking-wide-sm text-gold/70">
                        {p.source}
                      </p>
                      <p className="mt-1 font-display text-base text-cream group-hover:text-gold">
                        {p.title}
                      </p>
                      {p.excerpt && (
                        <p className="mt-2 text-xs leading-relaxed text-cream/60">
                          {p.excerpt}
                        </p>
                      )}
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0 text-gold/50 transition-colors group-hover:text-gold" />
                  </div>
                </a>
              ))}
            </div>
          </Reveal>
        )}

        {/* IMDb link */}
        {opera.imdbUrl && (
          <Reveal className="mt-12 text-center">
            <a
              href={opera.imdbUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cinema inline-flex"
            >
              Vedi su IMDb <ExternalLink className="h-4 w-4" />
            </a>
          </Reveal>
        )}
      </div>
      <BackToTop />
    </main>
  );
}
