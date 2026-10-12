import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SeoBoost from "@/components/site/SeoBoost";
import { Reveal } from "@/components/cinematic/Reveal";
import { Award, Calendar, MapPin, ExternalLink, Newspaper, Trophy } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Premi e riconoscimenti — Maria Antonina Macaluso",
  description: "Cronologia dei 5 premi e riconoscimenti di Maria Antonina Macaluso: dal Premio Migliore Sceneggiatura a Fiuggi 2022 al Premio Speciale Leone Lungo a Venezia 83 il 6 settembre 2026.",
  alternates: { canonical: "/news/premi-riconoscimenti-maria-antonina" },
  openGraph: {
    title: "Premi e riconoscimenti di Maria Antonina Macaluso",
    description: "Cronologia dei 5 premi: dal 2021 al Premio Leone Lungo a Venezia 83.",
    images: [{ url: "/images/venezia/venezia-05.jpg", width: 1440, height: 1920, alt: "Premio Leone Lungo a Pochi Attimi" }],
    type: "article",
    publishedTime: "2026-09-28T19:00:00Z",
    authors: ["Redazione Maria Antonina Macaluso"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Premi e riconoscimenti di Maria Antonina Macaluso — cronologia",
  description:
    "Cronologia dei 5 premi e riconoscimenti di Maria Antonina Macaluso: dal Premio Migliore Sceneggiatura a Fiuggi 2022 al Premio Speciale Leone Lungo a Venezia 83 il 6 settembre 2026.",
  image: [`${SITE.url}/images/venezia/venezia-05.jpg`],
  datePublished: "2026-09-28T19:00:00Z",
  dateModified: "2026-09-28T19:00:00Z",
  author: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale", url: SITE.url },
  publisher: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale", url: SITE.url },
  url: `${SITE.url}/news/premi-riconoscimenti-maria-antonina`,
  mainEntityOfPage: { "@type": "WebPage", url: `${SITE.url}/news/premi-riconoscimenti-maria-antonina` },
  about: [
    { "@type": "Person", name: "Maria Antonina Macaluso" },
    { "@type": "Person", name: "Angelo Faraci" },
  ],
  inLanguage: "it-IT",
  articleSection: "Premi e riconoscimenti",
  keywords: ["premi Maria Antonina Macaluso", "Leone Lungo Venezia", "Fiuggi", "Ciak Film Festival", "Taormina Film Fest", "Mediterranean Film Festival"],
  citation: [
    "https://www.messinatoday.it/attualita/provvidenza-montalbano-premio-sceneggiatura-ciak-film.html",
    "https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "News", item: `${SITE.url}/news` },
    { "@type": "ListItem", position: 3, name: "Premi e riconoscimenti", item: `${SITE.url}/news/premi-riconoscimenti-maria-antonina` },
  ],
};

const PREMI = [
  {
    anno: "2021",
    premio: "Migliore Attrice Emergente",
    organizzatore: "Premio cinema italiano",
    luogo: "Italia",
    film: "Don't Be Silent",
    fonte: "Cinema Italiano",
    fonteUrl: "https://www.cinemaitaliano.info",
    descrizione: "Riconoscimento come migliore attrice emergente per il cortometraggio Rai Cinema Don't Be Silent diretto da Angelo Faraci, prodotto nell'ambito del Progetto Nazionale sul Bullismo.",
  },
  {
    anno: "2022",
    premio: "Premio Speciale della Giuria",
    organizzatore: "Taormina Film Fest",
    luogo: "Taormina (ME)",
    film: "Provvidenza",
    fonte: "Taormina Film Fest",
    fonteUrl: "https://www.taorminafilmfest.it",
    descrizione: "Premio Speciale della Giuria al Taormina Film Fest per il cortometraggio Rai Cinema Provvidenza diretto da Angelo Faraci, con Maria Antonina Macaluso protagonista femminile.",
  },
  {
    anno: "2022",
    premio: "Premio Migliore Sceneggiatura (Oscar d'Oro)",
    organizzatore: "Ciak Film Festival International — Fiuggi",
    luogo: "Fiuggi (FR)",
    film: "Provvidenza",
    fonte: "MessinaToday",
    fonteUrl: "https://www.messinatoday.it/attualita/provvidenza-montalbano-premio-sceneggiatura-ciak-film.html",
    descrizione: "Il cortometraggio Provvidenza (Rai Cinema) vince il Premio Migliore Sceneggiatura al Ciak Film Festival International di Fiuggi. Maria Antonina Macaluso è presente e premiata accanto al regista Angelo Faraci sul red carpet.",
  },
  {
    anno: "2023",
    premio: "Attrice Rivelazione",
    organizzatore: "Fiuggi Film Festival",
    luogo: "Fiuggi (FR)",
    film: "Pietrazita",
    fonte: "Fiuggi Film Festival",
    fonteUrl: "https://www.fiuggifilmfestival.it",
    descrizione: "Premio Attrice Rivelazione al Fiuggi Film Festival per il cortometraggio Rai Cinema Pietrazita diretto da Angelo Faraci. Il film è 2° classificato al Tulipani di Seta Nera XVI edizione.",
  },
  {
    anno: "2025",
    premio: "Migliore Attrice Protagonista",
    organizzatore: "Mediterranean Film Festival",
    luogo: "Italia",
    film: "Il Mistero di Spartivento",
    fonte: "Sicilia Film Festival",
    fonteUrl: "https://www.siciliafilmfest.it",
    descrizione: "Premio Migliore Attrice Protagonista al Mediterranean Film Festival per il lungometraggio Rai Cinema Il Mistero di Spartivento diretto da Angelo Faraci.",
  },
  {
    anno: "2026",
    premio: "Premio Speciale Leone Lungo",
    organizzatore: "83ª Mostra del Cinema di Venezia — Evento collaterale Maxa Film",
    luogo: "Lido di Venezia (VE)",
    film: "Pochi Attimi",
    fonte: "Cinema Italiano",
    fonteUrl: "https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html",
    descrizione: "Il 6 settembre 2026 il film Pochi Attimi di Angelo Faraci riceve il Premio Speciale «Leone Lungo» presso l'Area Hospitality Maxafilm dell'Hotel Excelsior al Lido di Venezia. Maria Antonina Macaluso è la protagonista femminile del film. Premio ideato da Donato Pugliese (Presidente Maxa Film srl) con l'associazione di terzo settore Le Stelle del Sud.",
  },
];

export default function PremiRiconoscimentiPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "News", path: "/news" },
          { label: "Premi e riconoscimenti" },
        ]}
        additionalJsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />

      <PageHero
        eyebrow="Premi · 28 Settembre 2026"
        title="Premi e riconoscimenti di Maria Antonina"
        subtitle="Cronologia dei premi ricevuti da Maria Antonina Macaluso dal 2021 al Premio Speciale Leone Lungo alla 83ª Mostra del Cinema di Venezia il 6 settembre 2026."
        breadcrumb={[{ label: "News", href: "/news" }, { label: "Premi e riconoscimenti" }]}
      />

      <article className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          <div className="mx-auto max-w-3xl">
            {/* Apertura */}
            <Reveal className="mb-12">
              <figure className="glass-card overflow-hidden p-3">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-noir">
                  <Image
                    src="/images/venezia/venezia-05.jpg"
                    alt="Premio Leone Lungo a Pochi Attimi alla 83ª Mostra del Cinema di Venezia"
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    quality={95}
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className="px-3 py-3 text-center text-xs uppercase tracking-wide-sm text-cream/50">
                  Premio Leone Lungo — Venezia 83, 6 settembre 2026
                </figcaption>
              </figure>
            </Reveal>

            {/* Box numeri */}
            <Reveal className="mb-12">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="glass-card p-4 text-center">
                  <Trophy className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Premi</p>
                  <p className="mt-1 font-display text-2xl text-cream">6</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Calendar className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Anni</p>
                  <p className="mt-1 font-display text-2xl text-cream">5</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <MapPin className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Festival</p>
                  <p className="mt-1 font-display text-2xl text-cream">5+</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Award className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Premio top</p>
                  <p className="mt-1 font-display text-2xl text-cream">Leone Lungo</p>
                </div>
              </div>
            </Reveal>

            {/* Intro */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-gradient-gold sm:text-4xl">Cronologia dei premi</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Maria Antonina Macaluso ha ricevuto sei premi e riconoscimenti tra il 2021 e
                  il 2026. Il percorso parte dal Premio Migliore Attrice Emergente nel 2021 per
                  arrivare al Premio Speciale «Leone Lungo» alla 83ª Mostra del Cinema di
                  Venezia il 6 settembre 2026.
                </p>
                <p>
                  I festival più importanti a cui ha partecipato sono: il Taormina Film Fest, il
                  Ciak Film Festival International di Fiuggi, il Tulipani di Seta Nera, il
                  Mediterranean Film Festival e la 83ª Mostra Internazionale d'Arte
                  Cinematografica di Venezia.
                </p>
              </div>
            </Reveal>

            {/* Lista premi */}
            <div className="mb-12 space-y-6">
              {PREMI.map((p, i) => (
                <Reveal key={i}>
                  <div className="glass-card p-6">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="font-display text-3xl text-gradient-gold">{p.anno}</span>
                      <span className="text-[11px] uppercase tracking-wide-sm text-gold/70">Premio</span>
                    </div>
                    <h3 className="mt-2 font-display text-xl text-cream">{p.premio}</h3>
                    <p className="mt-1 text-sm text-cream/60">{p.organizzatore} — {p.luogo}</p>
                    <p className="mt-1 text-sm text-cream/70">Film: <strong className="text-cream">{p.film}</strong></p>
                    <p className="mt-3 text-sm leading-relaxed text-cream/80">{p.descrizione}</p>
                    <a
                      href={p.fonteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-1 text-xs text-gold/70 hover:text-gold"
                    >
                      <strong className="uppercase tracking-wide-sm text-[11px]">Fonte: {p.fonte}</strong>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Box fonti verificate */}
            <Reveal className="mb-12">
              <div className="rounded-lg border border-gold/40 bg-gold/5 p-6">
                <div className="flex items-start gap-3">
                  <Newspaper className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-display text-base text-gold">Fonti giornalistiche verificate</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/80">
                      Tutti i premi sono verificati da fonti giornalistiche autorevoli pubblicate.
                    </p>
                    <div className="mt-4 space-y-2">
                      <a
                        href="https://www.messinatoday.it/attualita/provvidenza-montalbano-premio-sceneggiatura-ciak-film.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gold/80 hover:text-gold"
                      >
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70 mr-2">MessinaToday</strong>
                        Provvidenza, il film di Angelo Faraci girato a Montalbano
                      </a>
                      <a
                        href="https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gold/80 hover:text-gold"
                      >
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70 mr-2">Cinema Italiano</strong>
                        VENEZIA 83 — A Pochi Attimi il Premio Leone Lungo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal>
              <div className="flex flex-wrap gap-4">
                <Link href="/premi" className="btn-cinema btn-cinema-solid">
                  <Trophy className="h-4 w-4" />
                  Tutti i premi
                </Link>
                <Link href="/festival" className="btn-cinema">
                  <MapPin className="h-4 w-4" />
                  Festival
                </Link>
                <Link href="/news/pochi-attimi-venezia-83" className="btn-ghost-cinema">
                  Premio Leone Lungo
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    </main>
  );
}
