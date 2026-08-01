import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FILMS, MAM_IMDB_URL } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import PageHero from "@/components/sections/PageHero";
import {
  ArrowLeft,
  ArrowRight,
  Clapperboard,
  User,
  Calendar,
  Building2,
  Tag,
  Clock,
  Film as FilmIcon,
  ExternalLink,
  Sparkles,
  Users,
  Newspaper,
} from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return FILMS.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const film = FILMS.find((f) => f.slug === slug);
  if (!film) return { title: "Film non trovato" };
  return {
    title: `${film.title} (${film.year})`,
    description: film.longDescription,
    alternates: { canonical: `/film/${film.slug}` },
    openGraph: {
      title: `${film.title} (${film.year})`,
      description: film.longDescription,
      images: film.poster ? [{ url: film.poster }] : [],
    },
  };
}

export default async function FilmPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const film = FILMS.find((f) => f.slug === slug);
  if (!film) notFound();

  const others = FILMS.filter((f) => f.slug !== slug).slice(0, 3);

  const movieJsonLd = {
    "@context": "https://schema.org",
    "@type": "Movie",
    name: film.title,
    datePublished: film.year,
    genre: film.genre ?? film.type,
    director: { "@type": "Person", name: film.director },
    actor: { "@type": "Person", name: "Maria Antonina Macaluso" },
    description: film.longDescription,
    productionCompany: { "@type": "Organization", name: film.production },
    image: film.poster,
  };

  const details = [
    { icon: Calendar, label: "Anno", value: film.year },
    { icon: Tag, label: "Tipo", value: film.type },
    { icon: User, label: "Regia", value: film.director },
    { icon: Clapperboard, label: "Ruolo di Maria Antonina", value: film.role },
    { icon: Building2, label: "Produzione", value: film.production },
    ...(film.genre ? [{ icon: FilmIcon, label: "Genere", value: film.genre }] : []),
    ...(film.duration ? [{ icon: Clock, label: "Durata", value: film.duration }] : []),
  ];

  return (
    <main id="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(movieJsonLd) }}
      />
      <PageHero
        eyebrow={`Film · ${film.year}`}
        title={film.title}
        subtitle={film.description}
        breadcrumb={[{ label: "Filmografia", href: "/filmografia" }, { label: film.title }]}
      />

      <section className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          {/* === Locandina + Dettagli === */}
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
            <Reveal>
              <div className="zoom-wrap glass-card aspect-[2/3] w-full max-w-[300px] overflow-hidden">
                {film.poster ? (
                  <Image
                    src={film.poster}
                    alt={`Locandina ${film.title}`}
                    fill
                    sizes="(min-width: 768px) 300px, 100vw"
                    className="object-cover"
                    priority
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-smoke-light to-noir">
                    <Clapperboard className="h-20 w-20 text-gold/25" />
                  </div>
                )}
              </div>
              {/* IMDb link sotto la locandina */}
              {film.imdbUrl && (
                <a
                  href={film.imdbUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex w-full max-w-[300px] items-center justify-center gap-2 rounded-sm border border-gold/30 bg-noir/40 px-4 py-2.5 text-xs uppercase tracking-wide-sm text-gold/80 transition-colors hover:bg-gold hover:text-noir"
                >
                  <FilmIcon className="h-3.5 w-3.5" />
                  Scheda IMDb
                  <ExternalLink className="h-3 w-3" />
                </a>
              )}
            </Reveal>

            <Reveal delay={120}>
              <div>
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Dettagli</h2>
                <div className="divider-cinema mt-6 max-w-xs" />
                <dl className="mt-6 space-y-4">
                  {details.map((d) => (
                    <div key={d.label} className="flex items-start gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold">
                        <d.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <dt className="text-[11px] uppercase tracking-cinema text-gold/70">{d.label}</dt>
                        <dd className="text-cream">{d.value}</dd>
                      </div>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </div>

          {/* === La storia / Trama === */}
          <Reveal className="mx-auto mt-16 max-w-3xl">
            <h2 className="font-display text-3xl text-gradient-gold sm:text-4xl">L'opera</h2>
            <div className="divider-cinema mt-6 max-w-xs" />
            <p className="mt-6 text-pretty text-lg leading-relaxed text-cream/80">
              {film.longDescription}
            </p>
            {film.plot && (
              <div className="mt-8">
                <h3 className="font-display text-xl text-gold/90">Trama</h3>
                <p className="mt-3 text-pretty text-base leading-relaxed text-cream/70">
                  {film.plot}
                </p>
              </div>
            )}
          </Reveal>

          {/* === Cast === */}
          {film.cast && film.cast.length > 0 && (
            <Reveal className="mx-auto mt-16 max-w-3xl">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Cast</h2>
              </div>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 flex flex-wrap gap-3">
                {film.cast.map((member, i) => (
                  <span
                    key={i}
                    className="glass-card px-4 py-2 text-sm text-cream/80"
                  >
                    {member}
                  </span>
                ))}
              </div>
            </Reveal>
          )}

          {/* === Curiosità === */}
          {film.trivia && film.trivia.length > 0 && (
            <Reveal className="mx-auto mt-16 max-w-3xl">
              <div className="flex items-center gap-3">
                <Sparkles className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Curiosità</h2>
              </div>
              <div className="divider-cinema mt-6 max-w-xs" />
              <ul className="mt-6 space-y-4">
                {film.trivia.map((t, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-xs font-bold text-gold">
                      {i + 1}
                    </span>
                    <p className="text-pretty text-base leading-relaxed text-cream/70">{t}</p>
                  </li>
                ))}
              </ul>
            </Reveal>
          )}

          {/* === Rassegna Stampa con fonti === */}
          {film.press && film.press.length > 0 && (
            <Reveal className="mx-auto mt-16 max-w-3xl">
              <div className="flex items-center gap-3">
                <Newspaper className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Rassegna stampa</h2>
              </div>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4">
                {film.press.map((article, i) => (
                  <a
                    key={i}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card card-lift-premium group block p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">
                          {article.source}
                        </p>
                        <h3 className="mt-1 font-display text-lg text-cream group-hover:text-gold">
                          {article.title}
                        </h3>
                        {article.excerpt && (
                          <p className="mt-2 text-sm leading-relaxed text-cream/60">
                            {article.excerpt}
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

          {/* === Torna alla filmografia === */}
          <Reveal className="mt-16">
            <Link href="/filmografia" className="btn-cinema">
              <ArrowLeft className="h-4 w-4" /> Torna alla filmografia
            </Link>
          </Reveal>

          {/* === Altri film === */}
          {others.length > 0 && (
            <div className="mt-20">
              <h2 className="mb-6 font-display text-2xl text-cream">Altri film</h2>
              <div className="grid gap-5 sm:grid-cols-3">
                {others.map((f) => (
                  <Link
                    key={f.slug}
                    href={`/film/${f.slug}`}
                    className="glass-card group card-lift-premium overflow-hidden p-3"
                  >
                    <div className="relative mb-3 aspect-[2/3] w-full overflow-hidden bg-gradient-to-br from-smoke-light to-noir">
                      {f.poster ? (
                        <Image
                          src={f.poster}
                          alt={`Locandina ${f.title}`}
                          fill
                          sizes="(min-width: 640px) 33vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <Clapperboard className="h-10 w-10 text-gold/25" />
                        </div>
                      )}
                    </div>
                    <span className="text-xs uppercase tracking-wide-sm text-gold/70">{f.year}</span>
                    <h3 className="mt-1 font-display text-lg text-cream group-hover:text-gold">{f.title}</h3>
                    <p className="mt-1 text-xs text-cream/55">{f.role}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
