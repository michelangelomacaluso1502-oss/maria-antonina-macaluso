import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SeoBoost from "@/components/site/SeoBoost";
import { Reveal } from "@/components/cinematic/Reveal";
import { ArrowLeft, ExternalLink, Calendar, MapPin, Award, Film } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pochi Attimi al Premio Leone Lungo — Anteprima Venezia 83",
  description:
    "Il film 'Pochi Attimi' di Angelo Faraci riceverà il Premio Speciale 'Leone Lungo' il 6 settembre 2026 nell'ambito degli eventi collaterali della 83ª Mostra del Cinema di Venezia. Presentazione nazionale di esclusiva ore 18:00, Area Hospitality Maxafilm – Hotel Excelsior, Lido di Venezia.",
  alternates: { canonical: "/news/pochi-attimi-venezia-83" },
  openGraph: {
    title: "Pochi Attimi al Premio Leone Lungo — Anteprima Venezia 83",
    description:
      "Il film 'Pochi Attimi' di Angelo Faraci riceverà il Premio Speciale 'Leone Lungo' il 6 settembre 2026 alla 83ª Mostra del Cinema di Venezia.",
    images: [{ url: "/images/news/pochi-attimi-venezia-83.jpg", width: 896, height: 1200, alt: "Pochi Attimi — Premio Leone Lungo Venezia 83" }],
    type: "article",
    publishedTime: "2026-08-16T15:08:00Z",
    authors: ["Cinema Italiano"],
  },
};

const newsArticleJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "VENEZIA 83 — 'Pochi Attimi' riceverà il Premio Leone Lungo il 6 settembre 2026",
  description:
    "Il film 'Pochi Attimi' di Angelo Faraci riceverà il Premio Speciale 'Leone Lungo' il 6 settembre 2026 nell'ambito degli eventi collaterali della 83ª Mostra del Cinema di Venezia.",
  image: `${SITE.url}/images/news/pochi-attimi-venezia-83.jpg`,
  datePublished: "2026-08-16T15:08:00Z",
  dateModified: "2026-08-16T15:08:00Z",
  author: {
    "@type": "Organization",
    name: "Cinema Italiano",
    url: "https://www.cinemaitaliano.info",
  },
  publisher: {
    "@type": "Organization",
    name: "Cinema Italiano",
    url: "https://www.cinemaitaliano.info",
    logo: {
      "@type": "ImageObject",
      url: "https://www.cinemaitaliano.info/favicon.ico",
    },
  },
  url: `${SITE.url}/news/pochi-attimi-venezia-83`,
  mainEntityOfPage: {
    "@type": "WebPage",
    url: `${SITE.url}/news/pochi-attimi-venezia-83`,
  },
  about: {
    "@type": "Movie",
    name: "Pochi Attimi",
    director: { "@type": "Person", name: "Angelo Faraci" },
    datePublished: "2026",
  },
  articleBody:
    "Il film 'Pochi Attimi' per la regia di Angelo Faraci è il progetto prescelto e sarà premiato il 6 Settembre 2026 nell'ambito degli eventi collaterali della 83ª Mostra del Cinema di Venezia. La presentazione nazionale di esclusiva si terrà presso l'Area Hospitality Maxafilm, Hotel Excelsior, Lido di Venezia, alle ore 18:00. Il film, dedicato alle Catastrofi ambientali Italiane e al valore reale della vita, è stato selezionato per il Premio Speciale 'Leone Lungo', evento collaterale di prestigio ideato da Donato Pugliese (Presidente Maxa Film srl) con l'associazione di terzo settore Le Stelle del Sud.",
  isPartOf: {
    "@type": "WebSite",
    name: "Maria Antonina Macaluso — Enciclopedia Digitale",
    url: SITE.url,
  },
  inLanguage: "it-IT",
  citation: {
    "@type": "NewsArticle",
    url: "https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html",
    publisher: { "@type": "Organization", name: "Cinema Italiano" },
  },
};

export default function NewsPochiAttimiVenezia83() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "News", path: "/news" },
          { label: "Pochi Attimi — Venezia 83" },
        ]}
        additionalJsonLd={[newsArticleJsonLd]}
      />

      <PageHero
        eyebrow="News · 16 Agosto 2026 · Evento in programma"
        title="VENEZIA 83 — 'Pochi Attimi' riceverà il Premio Leone Lungo"
        subtitle="Il 6 settembre 2026 il film diretto da Angelo Faraci sarà premiato nell'ambito degli eventi collaterali della 83ª Mostra del Cinema di Venezia"
        breadcrumb={[{ label: "News", href: "/news" }, { label: "Pochi Attimi — Venezia 83" }]}
      />

      <section className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          <div className="mx-auto max-w-4xl">
            {/* Locandina evento */}
            <Reveal className="mb-12 flex justify-center">
              <figure className="glass-card overflow-hidden p-3 max-w-[360px]">
                <div className="relative aspect-[896/1200] w-full overflow-hidden bg-noir">
                  <Image
                    src="/images/news/pochi-attimi-venezia-83.jpg"
                    alt="Locandina ufficiale — Pochi Attimi Premio Leone Lungo Venezia 83"
                    fill
                    sizes="(min-width: 768px) 360px, 100vw"
                    quality={100}
                    className="object-contain"
                    priority
                  />
                </div>
                <figcaption className="px-3 py-3 text-center text-xs uppercase tracking-wide-sm text-cream/50">
                  Locandina ufficiale evento — Maxa Film · Le Stelle del Sud
                </figcaption>
              </figure>
            </Reveal>

            {/* Metadata evento */}
            <Reveal className="mb-12">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="glass-card p-5">
                  <Calendar className="mb-3 h-6 w-6 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Data evento</p>
                  <p className="mt-1 font-display text-lg text-cream">6 Settembre 2026</p>
                  <p className="text-sm text-cream/60">Ore 18:00</p>
                </div>
                <div className="glass-card p-5">
                  <MapPin className="mb-3 h-6 w-6 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Luogo</p>
                  <p className="mt-1 font-display text-lg text-cream">Hotel Excelsior</p>
                  <p className="text-sm text-cream/60">Lido di Venezia</p>
                </div>
                <div className="glass-card p-5">
                  <Award className="mb-3 h-6 w-6 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Premio</p>
                  <p className="mt-1 font-display text-lg text-cream">Leone Lungo</p>
                  <p className="text-sm text-cream/60">Premio Speciale</p>
                </div>
                <div className="glass-card p-5">
                  <Film className="mb-3 h-6 w-6 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Film</p>
                  <p className="mt-1 font-display text-lg text-cream">Pochi Attimi</p>
                  <p className="text-sm text-cream/60">Regia Angelo Faraci</p>
                </div>
              </div>
            </Reveal>

            {/* Avviso evento in programma */}
            <Reveal className="mb-12">
              <div className="rounded-lg border border-gold/40 bg-gold/5 p-5">
                <div className="flex items-start gap-3">
                  <Calendar className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <p className="font-display text-base text-gold">Evento in programma</p>
                    <p className="mt-1 text-sm text-cream/80">
                      La cerimonia di consegna del Premio Speciale &ldquo;Leone Lungo&rdquo; al film
                      Pochi Attimi si terrà il <strong className="text-cream">6 settembre 2026 alle ore 18:00</strong>{" "}
                      presso l'Area Hospitality Maxafilm, Hotel Excelsior, Lido di Venezia.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Corpo articolo */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-gradient-gold sm:text-4xl">L'evento</h2>
              <div className="divider-cinema mt-6 max-w-xs" />

              <p className="mt-6 text-pretty text-lg leading-relaxed text-cream/80">
                Il film <strong className="text-cream">Pochi Attimi</strong>, per la regia di{" "}
                <strong className="text-cream">Angelo Faraci</strong>, è il progetto prescelto e sarà premiato il{" "}
                <strong className="text-gold">6 Settembre 2026</strong> nell'ambito degli eventi
                collaterali della <strong className="text-cream">83ª Mostra del Cinema di Venezia</strong>.
                La presentazione nazionale di esclusiva si terrà presso l'Area Hospitality Maxa Film,
                Hotel Excelsior, Lido di Venezia, alle ore 18:00.
              </p>

              <p className="mt-6 text-pretty text-base leading-relaxed text-cream/70">
                Il lungometraggio, dedicato alle <strong className="text-cream/90">Catastrofi
                ambientali Italiane</strong> e al valore reale della vita, è stato selezionato per il{" "}
                <strong className="text-gold">Premio Speciale &ldquo;Leone Lungo&rdquo;</strong>,
                evento collaterale di prestigio ideato da Donato Pugliese (Presidente Maxa Film srl)
                con l'associazione di terzo settore Le Stelle del Sud, con sede in Puglia.
              </p>

              <blockquote className="mt-8 border-l-2 border-gold/50 pl-6 text-pretty text-base italic leading-relaxed text-cream/70">
                &ldquo;Il Premio Leone Lungo nasce e viene portato in una vetrina prestigiosa come
                Venezia, all'interno dei tanti eventi collaterali più risonanti della 83ª Mostra del
                Cinema di Venezia, per mettere in risalto il lungometraggio italiano che più si è
                distinto a livello nazionale come progetto storico-culturale per il mondo
                dell'audiovisivo.&rdquo;
                <footer className="mt-3 text-sm not-italic text-cream/50">
                  — Cinema Italiano, 16 Agosto 2026
                </footer>
              </blockquote>
            </Reveal>

            {/* Crediti evento */}
            <Reveal className="mb-12">
              <h2 className="font-display text-2xl text-cream sm:text-3xl">Crediti evento</h2>
              <div className="divider-cinema mt-4 max-w-xs" />
              <dl className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <dt className="text-[11px] uppercase tracking-wide-sm text-gold/70">Film premiato</dt>
                  <dd className="mt-1 text-cream">Pochi Attimi (2026)</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wide-sm text-gold/70">Regia</dt>
                  <dd className="mt-1 text-cream">Angelo Faraci</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wide-sm text-gold/70">Promotore evento</dt>
                  <dd className="mt-1 text-cream">Maxa Film srl · Presidente Donato Pugliese</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wide-sm text-gold/70">Direzione artistica</dt>
                  <dd className="mt-1 text-cream">Le Stelle del Sud</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wide-sm text-gold/70">Location</dt>
                  <dd className="mt-1 text-cream">Area Hospitality Maxa Film — Hotel Excelsior, Lido di Venezia</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wide-sm text-gold/70">Contesto</dt>
                  <dd className="mt-1 text-cream">83ª Mostra Internazionale d'Arte Cinematografica di Venezia — La Biennale di Venezia 2026</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wide-sm text-gold/70">Tema film</dt>
                  <dd className="mt-1 text-cream">Catastrofi ambientali italiane e valore reale della vita</dd>
                </div>
                <div>
                  <dt className="text-[11px] uppercase tracking-wide-sm text-gold/70">Data evento</dt>
                  <dd className="mt-1 text-cream">6 Settembre 2026, ore 18:00</dd>
                </div>
              </dl>
            </Reveal>

            {/* Fonte originale */}
            <Reveal className="mb-12">
              <a
                href="https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card card-lift-premium group flex items-center justify-between gap-4 p-5"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Fonte originale</p>
                  <h3 className="mt-1 font-display text-lg text-cream group-hover:text-gold">
                    Cinema Italiano — VENEZIA 83: a &ldquo;Pochi Attimi&rdquo; il Premio Leone Lungo
                  </h3>
                  <p className="mt-2 text-sm text-cream/60">
                    16 Agosto 2026 · cinemaitaliano.info
                  </p>
                </div>
                <ExternalLink className="h-5 w-5 shrink-0 text-gold/50 transition-colors group-hover:text-gold" />
              </a>
            </Reveal>

            {/* Link correlati */}
            <Reveal className="mb-12">
              <h2 className="font-display text-2xl text-cream sm:text-3xl">Approfondimenti</h2>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Link
                  href="/film/pochi-attimi"
                  className="glass-card card-lift-premium group block p-5"
                >
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Scheda film</p>
                  <h3 className="mt-1 font-display text-lg text-cream group-hover:text-gold">
                    Pochi Attimi (2026)
                  </h3>
                  <p className="mt-2 text-sm text-cream/60">
                    Lungometraggio diretto da Angelo Faraci, con Maria Antonina Macaluso come attrice protagonista femminile.
                  </p>
                </Link>
                <Link
                  href="/collaborazioni"
                  className="glass-card card-lift-premium group block p-5"
                >
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Sodalizio artistico</p>
                  <h3 className="mt-1 font-display text-lg text-cream group-hover:text-gold">
                    Maria Antonina e Angelo Faraci
                  </h3>
                  <p className="mt-2 text-sm text-cream/60">
                    Dieci produzioni condivise dal 2019 al 2026 — un percorso artistico che da Palermo raggiunge Venezia 83.
                  </p>
                </Link>
              </div>
            </Reveal>

            {/* Torna indietro */}
            <Reveal>
              <Link href="/" className="btn-cinema">
                <ArrowLeft className="h-4 w-4" /> Torna alla home
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
