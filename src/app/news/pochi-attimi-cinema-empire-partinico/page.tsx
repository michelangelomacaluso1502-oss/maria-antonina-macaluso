import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import SeoBoost from "@/components/site/SeoBoost";
import { Reveal } from "@/components/cinematic/Reveal";
import { Calendar, MapPin, Film, Star, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pochi Attimi — Proiezione speciale al Cinema Empire di Partinico",
  description: "Il film Pochi Attimi (2026) con Maria Antonina Macaluso e regia di Angelo Faraci in proiezione speciale al Cinema Empire di Partinico (PA). Data, orario, info biglietti e programmazione.",
  alternates: { canonical: "/news/pochi-attimi-cinema-empire-partinico" },
  openGraph: {
    title: "Pochi Attimi al Cinema Empire di Partinico",
    description: "Proiezione speciale del film Pochi Attimi con Maria Antonina Macaluso al Cinema Empire di Partinico (PA).",
    images: [{ url: "/images/films/pochi-attimi.jpg", width: 800, height: 1200, alt: "Locandina Pochi Attimi" }],
    type: "article",
    publishedTime: "2026-11-20T09:00:00Z",
    authors: ["Redazione Maria Antonina Macaluso"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Pochi Attimi in proiezione speciale al Cinema Empire di Partinico",
  description: "Il film Pochi Attimi (2026) di Angelo Faraci, con Maria Antonina Macaluso protagonista femminile, in proiezione speciale al Cinema Empire di Partinico (PA).",
  image: [`${SITE.url}/images/films/pochi-attimi.jpg`],
  datePublished: "2026-11-20T09:00:00Z",
  dateModified: "2026-11-20T09:00:00Z",
  author: { "@type": "Organization", name: "Maria Antonina Macaluso — Sito ufficiale" },
  publisher: { "@type": "Organization", name: "Maria Antonina Macaluso — Sito ufficiale", url: SITE.url },
  url: `${SITE.url}/news/pochi-attimi-cinema-empire-partinico`,
  keywords: ["Pochi Attimi", "Cinema Empire", "Partinico", "Maria Antonina Macaluso", "Angelo Faraci"],
  articleSection: "Cinema",
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "ScreeningEvent",
  name: "Pochi Attimi — Proiezione Cinema Empire Partinico",
  startDate: "2026-12-05T20:30",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Cinema Empire Partinico",
    address: { "@type": "PostalAddress", streetAddress: "Via IV Novembre", addressLocality: "Partinico", addressRegion: "PA", postalCode: "90047", addressCountry: "IT" },
  },
  image: `${SITE.url}/images/films/pochi-attimi.jpg`,
  workPresented: { "@type": "Movie", name: "Pochi Attimi", director: { "@type": "Person", name: "Angelo Faraci" }, actor: [{ "@type": "Person", name: "Maria Antonina Macaluso" }], datePublished: "2026" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
      <PageHero title="Pochi Attimi al Cinema Empire di Partinico" subtitle="Proiezione speciale del nuovo lungometraggio di Angelo Faraci" image="/images/films/pochi-attimi.jpg" />
      <article className="cinematic-container py-16 md:py-24">
        <SeoBoost />
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-4 text-xs uppercase tracking-wide-sm text-gold/70">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> 20 Novembre 2026</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Cinema Empire, Partinico (PA)</span>
            <span className="flex items-center gap-1.5"><Film className="h-4 w-4" /> Proiezione speciale</span>
          </div>
          <Reveal>
            <p className="text-pretty text-lg leading-relaxed text-cream/85">
              Il film <strong>Pochi Attimi</strong> (2026), il nuovo lungometraggio scritto e diretto da <strong>Angelo Faraci</strong> con <strong>Maria Antonina Macaluso</strong> nel ruolo di protagonista femminile, sarà proiettato in anteprima al <strong>Cinema Empire di Partinico</strong>, in provincia di Palermo, il <strong>5 dicembre 2026 alle ore 20:30</strong>.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-12 mb-4 font-display text-3xl text-cream">Il Cinema Empire di Partinico</h2>
            <p className="text-pretty text-base leading-relaxed text-cream/75">
              Il Cinema Empire è una delle realtà cinematografiche più importanti della provincia di Palermo. Situato nel cuore di Partinico, cittadina a pochi chilometri da Camporeale — il paese dove Maria Antonina Macaluso è cresciuta — il cinema rappresenta un punto di riferimento per la fruizione cinematografica nel territorio del Trapanese e della Sicilia occidentale.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <h2 className="mt-12 mb-4 font-display text-3xl text-cream">Il film Pochi Attimi</h2>
            <p className="text-pretty text-base leading-relaxed text-cream/75">
              <em>Pochi Attimi</em> racconta la storia di una comunità felice che affronta la sfida più grande: comprendere che il valore VERO della vita sta nei pochi attimi che ci vengono concessi. Girato interamente in Sicilia tra i borghi dell'entroterra e le coste del Trapanese, il film segna il ritorno di Angelo Faraci dietro la macchina da presa dopo il successo del ciclo Separati Mai.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="glass-card mt-12 border-l-2 border-gold p-6">
              <h3 className="mb-3 flex items-center gap-2 font-display text-xl text-gold"><Star className="h-5 w-5" /> Info utili</h3>
              <ul className="space-y-2 text-sm text-cream/80">
                <li><strong>Data:</strong> Sabato 5 dicembre 2026</li>
                <li><strong>Orario:</strong> ore 20:30 (apertura porte ore 20:00)</li>
                <li><strong>Luogo:</strong> Cinema Empire, Partinico (PA)</li>
                <li><strong>Regia:</strong> Angelo Faraci</li>
                <li><strong>Interpreti:</strong> Maria Antonina Macaluso (protagonista femminile), Angelo Faraci, cast completo</li>
                <li><strong>Durata:</strong> 120 minuti circa</li>
                <li><strong>Genere:</strong> Drammatico — commedia siciliana</li>
                <li><strong>Biglietti:</strong> prevendita disponibile presso la biglietteria del Cinema Empire</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-12 text-center">
              <Link href="/film/pochi-attimi" className="btn-cinema">Scheda completa del film <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </article>
    </>
  );
}
