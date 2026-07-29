import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FILMS } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import PageHero from "@/components/sections/PageHero";
import { ArrowLeft, Clapperboard, User, Calendar, Building2, Tag } from "lucide-react";

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
    genre: film.type,
    director: { "@type": "Person", name: film.director },
    actor: { "@type": "Person", name: "Maria Antonina Macaluso" },
    description: film.longDescription,
    productionCompany: { "@type": "Organization", name: film.production },
  };

  const details = [
    { icon: Calendar, label: "Anno", value: film.year },
    { icon: Tag, label: "Tipo", value: film.type },
    { icon: User, label: "Regia", value: film.director },
    { icon: Clapperboard, label: "Ruolo", value: film.role },
    { icon: Building2, label: "Produzione", value: film.production },
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
          <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[1fr_1.4fr] md:items-start">
            <Reveal>
              <div className="glass-card flex aspect-[3/4] w-full max-w-[300px] items-center justify-center bg-gradient-to-br from-smoke-light to-noir">
                <Clapperboard className="h-20 w-20 text-gold/25" />
              </div>
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

          <Reveal className="mx-auto mt-14 max-w-3xl">
            <h2 className="font-display text-3xl text-gradient-gold sm:text-4xl">La storia</h2>
            <div className="divider-cinema mt-6 max-w-xs" />
            <p className="mt-6 text-pretty text-lg leading-relaxed text-cream/80">
              {film.longDescription}
            </p>
          </Reveal>

          <Reveal className="mt-16">
            <Link href="/filmografia" className="btn-cinema">
              <ArrowLeft className="h-4 w-4" /> Torna alla filmografia
            </Link>
          </Reveal>

          {others.length > 0 && (
            <div className="mt-20">
              <h2 className="mb-6 font-display text-2xl text-cream">Altri film</h2>
              <div className="grid gap-5 sm:grid-cols-3">
                {others.map((f) => (
                  <Link
                    key={f.slug}
                    href={`/film/${f.slug}`}
                    className="glass-card group card-lift-premium p-5"
                  >
                    <span className="text-xs uppercase tracking-wide-sm text-gold/70">{f.year}</span>
                    <h3 className="mt-1 font-display text-xl text-cream group-hover:text-gold">{f.title}</h3>
                    <p className="mt-1 text-sm text-cream/55">{f.role}</p>
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
