import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SeoBoost from "@/components/site/SeoBoost";
import { Reveal } from "@/components/cinematic/Reveal";
import { Film, Users, Award, ExternalLink, ArrowRight } from "lucide-react";
import { SITE, FILMS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Angelo Faraci — regista e attore",
  description: "Tutti i film diretti da Angelo Faraci con Maria Antonina Macaluso: 10 produzioni dal 2019 al 2026, dal debutto con Ciò che non ti ho detto al Premio Leone Lungo a Venezia 83 con Pochi Attimi.",
  alternates: { canonical: "/tag/angelo-faraci" },
  openGraph: {
    title: "Angelo Faraci — regista e attore (10 film con Maria Antonina Macaluso)",
    description: "Tutti i film diretti da Angelo Faraci con Maria Antonina Macaluso: 10 produzioni dal 2019 al 2026.",
    images: [{ url: "/images/venezia/venezia-03.jpg", width: 1025, height: 1280, alt: "Angelo Faraci e Maria Antonina Macaluso all'evento Venezia 83" }],
    type: "article",
  },
};

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Angelo Faraci — filmografia completa con Maria Antonina Macaluso",
  description:
    "Collezione di tutti i film diretti da Angelo Faraci con Maria Antonina Macaluso come attrice protagonista femminile: 10 produzioni cinematografiche e televisive dal 2019 al 2026.",
  url: `${SITE.url}/tag/angelo-faraci`,
  inLanguage: "it-IT",
  isPartOf: {
    "@type": "WebSite",
    name: "Maria Antonina Macaluso — Enciclopedia digitale",
    url: SITE.url,
  },
  mainEntity: {
    "@type": "Person",
    name: "Angelo Faraci",
    url: "https://angelo-faraci.vercel.app",
    sameAs: "https://www.imdb.com/name/nm11444273/",
    jobTitle: "Regista, Attore, Produttore",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Tag", item: `${SITE.url}/tag` },
    { "@type": "ListItem", position: 3, name: "Angelo Faraci", item: `${SITE.url}/tag/angelo-faraci` },
  ],
};

const FILMS_ANGELO = FILMS.filter(f => f.director === "Angelo Faraci");

export default function AngeloFaraciHubPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "Tag", path: "/tag" },
          { label: "Angelo Faraci" },
        ]}
        additionalJsonLd={[collectionPageJsonLd, breadcrumbJsonLd]}
      />

      <PageHero
        eyebrow="Hub · Filmografia Angelo Faraci"
        title="Angelo Faraci — regista e attore"
        subtitle="Tutti i 10 film diretti da Angelo Faraci con Maria Antonina Macaluso come attrice, dal 2019 al 2026."
        breadcrumb={[{ label: "Tag", href: "/tag/angelo-faraci" }, { label: "Angelo Faraci" }]}
      />

      <section className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          <div className="mx-auto max-w-5xl">
            {/* Ritratto + bio */}
            <Reveal className="mb-12">
              <div className="grid gap-8 md:grid-cols-[300px_1fr] md:items-start">
                <figure className="glass-card overflow-hidden p-3">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-noir">
                    <Image
                      src="/images/venezia/venezia-03.jpg"
                      alt="Angelo Faraci e Maria Antonina Macaluso all'evento Venezia 83"
                      fill
                      sizes="(min-width: 768px) 300px, 100vw"
                      quality={95}
                      className="object-cover"
                      priority
                    />
                  </div>
                  <figcaption className="px-3 py-3 text-center text-xs uppercase tracking-wide-sm text-cream/50">
                    Angelo Faraci — regista, attore, produttore
                  </figcaption>
                </figure>

                <div>
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6 text-gold" />
                    <h2 className="font-display text-3xl text-cream sm:text-4xl">Profilo</h2>
                  </div>
                  <div className="divider-cinema mt-4 max-w-xs" />
                  <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                    <p>
                      Angelo Faraci è un regista, attore e produttore italiano nato a Palermo il 13
                      agosto 1989. Esordisce come attore protagonista nella fiction Sky «Ciò che non
                      ti ho detto» (2019), ideata da lui stesso. Da allora ha diretto e interpretato
                      dieci produzioni cinematografiche e televisive con Maria Antonina Macaluso come
                      attrice protagonista femminile.
                    </p>
                    <p>
                      Angelo Faraci è compagno artistico e di vita di Maria Antonina Macaluso dal 14
                      agosto 2019. Insieme hanno percorso otto anni di carriera che hanno portato il
                      cinema siciliano alla vetrina internazionale della 83ª Mostra del Cinema di
                      Venezia con il film «Pochi Attimi» (2026), che ha ricevuto il Premio Speciale
                      «Leone Lungo» il 6 settembre 2026.
                    </p>
                    <p>
                      <strong className="text-gold">Enciclopedia digitale Angelo Faraci</strong>:
                      <a
                        href="https://angelo-faraci.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 inline-flex items-center gap-1 text-gold/80 hover:text-gold"
                      >
                        angelo-faraci.vercel.app
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </p>
                    <p>
                      <strong className="text-gold">IMDb</strong>:
                      <a
                        href="https://www.imdb.com/name/nm11444273/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-2 inline-flex items-center gap-1 text-gold/80 hover:text-gold"
                      >
                        nm11444273
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Lista film */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <Film className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">10 film con Maria Antonina Macaluso</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {FILMS_ANGELO.map((film) => (
                  <Link
                    key={film.slug}
                    href={`/film/${film.slug}`}
                    className="glass-card group card-lift-premium overflow-hidden p-3"
                  >
                    <div className="relative mb-3 aspect-[2/3] w-full overflow-hidden bg-gradient-to-br from-smoke-light to-noir">
                      {film.poster ? (
                        <Image
                          src={film.poster}
                          alt={`Locandina ${film.title}`}
                          fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center">
                          <Film className="h-10 w-10 text-gold/25" />
                        </div>
                      )}
                    </div>
                    <span className="text-xs uppercase tracking-wide-sm text-gold/70">{film.year}</span>
                    <h3 className="mt-1 font-display text-base text-cream group-hover:text-gold">{film.title}</h3>
                    <p className="mt-1 text-xs text-cream/55">{film.role}</p>
                    <span className="mt-2 flex items-center gap-1 text-xs text-gold/60 group-hover:text-gold">
                      Scheda <ArrowRight className="h-3 w-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>

            {/* Premio */}
            <Reveal className="mb-12">
              <div className="rounded-lg border border-gold/40 bg-gold/5 p-6">
                <div className="flex items-start gap-3">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-display text-base text-gold">Premio Leone Lungo — Venezia 83</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/80">
                      Il 6 settembre 2026, il film «Pochi Attimi» di Angelo Faraci ha ricevuto il
                      Premio Speciale «Leone Lungo» alla 83ª Mostra del Cinema di Venezia, presso
                      l'Area Hospitality Maxafilm dell'Hotel Excelsior al Lido di Venezia. Maria
                      Antonina Macaluso è la protagonista femminile del film.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link href="/news/pochi-attimi-venezia-83" className="btn-cinema btn-cinema-solid">
                        Pagina evento
                      </Link>
                      <Link href="/news/sodalizio-maria-antonina-angelo-faraci" className="btn-ghost-cinema">
                        Sodalizio artistico
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal>
              <div className="flex flex-wrap gap-4">
                <Link href="/filmografia" className="btn-cinema">
                  Filmografia completa
                </Link>
                <Link href="/tag/cinema-siciliano" className="btn-ghost-cinema">
                  Cinema siciliano
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
