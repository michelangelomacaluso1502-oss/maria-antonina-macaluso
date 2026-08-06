import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ALTRE_PRODUZIONI } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import BackToTop from "@/components/cinematic/BackToTop";
import { ArrowLeft, ExternalLink, Film, Calendar, User, Clapperboard, Tag } from "lucide-react";

export const dynamicParams = false;

/**
 * Mappa orientamento poster per ogni opera.
 * Permette di adattare l'aspect-ratio del contenitore all'immagine reale,
 * evitando tagli sgraditi (object-cover su aspect errato = immagine tagliata).
 */
const POSTER_ASPECT: Record<string, string> = {
  "eccellenza-siciliana": "aspect-[3/4]",       // verticale
  "creo-kitchens-cucine-italiane": "aspect-[16/10]", // orizzontale
  "red-bull-minas-riders": "aspect-square",     // quadrato
  "di-tutto-un-po": "aspect-[4/5]",             // verticale
};

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
          {/* Poster adattivo — aspect ratio basato sull'orientamento reale */}
          <Reveal>
            <figure className="glass-card overflow-hidden p-3">
              <div className={`relative ${POSTER_ASPECT[opera.slug] || "aspect-[2/3]"} w-full overflow-hidden bg-noir`}>
                <Image
                  src={opera.poster || "/images/films/placeholder.svg"}
                  alt={opera.title}
                  fill
                  sizes="(min-width: 768px) 400px, 100vw"
                  quality={100}
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

        {/* Gallery full-width 8K — mostra il poster a tutta larghezza in qualità Ultra HD */}
        <Reveal className="mt-12">
          <h2 className="font-display text-2xl text-gold mb-4">Gallery Ultra HD</h2>
          <figure className="glass-card overflow-hidden p-3">
            <div className={`relative ${POSTER_ASPECT[opera.slug] || "aspect-[2/3]"} w-full overflow-hidden bg-noir`}>
              <Image
                src={opera.poster || "/images/films/placeholder.svg"}
                alt={opera.title}
                fill
                sizes="100vw"
                quality={100}
                className="object-contain"
              />
            </div>
            <figcaption className="px-2 py-3 text-center text-xs uppercase tracking-wide-sm text-cream/50">
              {opera.title} — Copertina Ultra HD 8K
            </figcaption>
          </figure>
        </Reveal>

        {/* Galleria aggiuntiva specifica per Creo Kitchens — servizio TGS nello showroom */}
        {opera.slug === "creo-kitchens-cucine-italiane" && (
          <>
            <Reveal className="mt-12">
              <h2 className="font-display text-2xl text-gold mb-4">Showroom Creo — Servizio TGS</h2>
              <p className="mb-6 text-sm text-cream/70 leading-relaxed">
                Documentazione del servizio TGS (TeleGiornale di Sicilia) dedicato alla campagna pubblicitaria
                Creo Kitchens nello showroom di Altomonte (Palermo), con Angelo Faraci, Marika Saveria Faraci e
                Maria Antonina Macaluso.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <figure className="glass-card overflow-hidden p-3">
                  <div className="relative aspect-[9/16] w-full overflow-hidden bg-noir">
                    <Image
                      src="/images/films/creo-kitchens-showroom-tgs.jpg"
                      alt="Servizio TGS Creo Kitchens — Angelo Faraci e Maria Antonina Macaluso nello showroom con logo TGS visibile"
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      quality={100}
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="px-2 py-3 text-center text-xs uppercase tracking-wide-sm text-cream/50">
                    Showroom Creo — Servizio TGS (logo TGS visibile)
                  </figcaption>
                </figure>
                <figure className="glass-card overflow-hidden p-3">
                  <div className="relative aspect-[3/2] w-full overflow-hidden bg-noir">
                    <Image
                      src="/images/films/creo-kitchens-showroom-cucina.jpg"
                      alt="Showroom Creo Kitchens — isola centrale con cucina moderna, Maria Antonina e Angelo Faraci"
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      quality={100}
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="px-2 py-3 text-center text-xs uppercase tracking-wide-sm text-cream/50">
                    Showroom Creo — Cucina moderna esposta
                  </figcaption>
                </figure>
              </div>
            </Reveal>

            {/* Servizio TGS Creo Kitchens con Angelo, Maria Antonina e Marika Faraci */}
            <Reveal className="mt-12">
              <h2 className="font-display text-2xl text-gold mb-4">Servizio TGS — Pubblicità Creo Kitchens</h2>
              <p className="mb-6 text-sm text-cream/70 leading-relaxed">
                Il servizio del TGS (TeleGiornale di Sicilia) ha documentato la campagna pubblicitaria Creo Kitchens
                per Sky, con Angelo Faraci (attore protagonista e sceneggiatore), Maria Antonina Macaluso (voce) e
                Marika Saveria Faraci (voce). Lo spot è stato girato integralmente in Sicilia presso lo showroom
                Creo di Viale del Fante, 61 ad Altomonte (Palermo).
              </p>
              <div className="glass-card p-5">
                <p className="text-xs uppercase tracking-wide-sm text-gold/70 mb-2">TGS — TeleGiornale di Sicilia</p>
                <p className="text-sm text-cream/80 leading-relaxed">
                  Servizio TGS dedicato alla campagna pubblicitaria Creo Kitchens nello showroom di Altomonte (Palermo)
                  con Angelo Faraci, Marika Saveria Faraci e Maria Antonina Macaluso.
                </p>
                <a
                  href="https://www.dailymotion.com/video/xahuzu2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-blue-400 hover:text-blue-300 underline decoration-blue-400/40 underline-offset-2 transition-colors"
                >
                  Vedi il servizio TGS completo
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </Reveal>
          </>
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
