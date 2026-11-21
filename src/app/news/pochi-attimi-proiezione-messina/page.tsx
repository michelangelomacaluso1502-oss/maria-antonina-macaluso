import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero";
import SeoBoost from "@/components/site/SeoBoost";
import { Reveal } from "@/components/cinematic/Reveal";
import { Calendar, MapPin, Film, Star, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Pochi Attimi — Proiezione a Messina: il cinema siciliano allo stretto",
  description: "Il film Pochi Attimi (2026) di Angelo Faraci, con Maria Antonina Macaluso, in proiezione a Messina. Il cinema siciliano sbarca nello Stretto: data, luogo, programma e cast.",
  alternates: { canonical: "/news/pochi-attimi-proiezione-messina" },
  openGraph: {
    title: "Pochi Attimi in proiezione a Messina",
    description: "Il cinema siciliano di Angelo Faraci e Maria Antonina Macaluso arriva a Messina. Proiezione speciale del film Pochi Attimi (2026).",
    images: [{ url: "/images/films/pochi-attimi.jpg", width: 800, height: 1200, alt: "Locandina Pochi Attimi" }],
    type: "article",
    publishedTime: "2026-11-21T10:00:00Z",
    authors: ["Redazione Maria Antonina Macaluso"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Pochi Attimi in proiezione a Messina — il cinema siciliano allo Stretto",
  description: "Il film Pochi Attimi (2026) di Angelo Faraci, con Maria Antonina Macaluso, in proiezione speciale a Messina.",
  image: [`${SITE.url}/images/films/pochi-attimi.jpg`],
  datePublished: "2026-11-21T10:00:00Z",
  dateModified: "2026-11-21T10:00:00Z",
  author: { "@type": "Organization", name: "Maria Antonina Macaluso — Sito ufficiale" },
  publisher: { "@type": "Organization", name: "Maria Antonina Macaluso — Sito ufficiale", url: SITE.url },
  url: `${SITE.url}/news/pochi-attimi-proiezione-messina`,
  keywords: ["Pochi Attimi", "Messina", "Maria Antonina Macaluso", "Angelo Faraci", "proiezione", "cinema siciliano"],
  articleSection: "Cinema",
};

const eventJsonLd = {
  "@context": "https://schema.org",
  "@type": "ScreeningEvent",
  name: "Pochi Attimi — Proiezione Messina",
  startDate: "2026-12-12T20:30",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Cinema Teatro Peloro — Messina",
    address: { "@type": "PostalAddress", streetAddress: "Via Garibaldi", addressLocality: "Messina", addressRegion: "ME", postalCode: "98100", addressCountry: "IT" },
  },
  image: `${SITE.url}/images/films/pochi-attimi.jpg`,
  workPresented: { "@type": "Movie", name: "Pochi Attimi", director: { "@type": "Person", name: "Angelo Faraci" }, actor: [{ "@type": "Person", name: "Maria Antonina Macaluso" }], datePublished: "2026" },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }} />
      <PageHero title="Pochi Attimi in proiezione a Messina" subtitle="Il cinema siciliano di Angelo Faraci e Maria Antonina Macaluso allo Stretto" />
      <article className="cinematic-container py-16 md:py-24">
        <SeoBoost />
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 flex flex-wrap items-center gap-4 text-xs uppercase tracking-wide-sm text-gold/70">
            <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> 21 Novembre 2026</span>
            <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4" /> Messina</span>
            <span className="flex items-center gap-1.5"><Film className="h-4 w-4" /> Proiezione speciale</span>
          </div>
          <Reveal>
            <p className="text-pretty text-lg leading-relaxed text-cream/85">
              Dopo la proiezione di Partinico, il film <strong>Pochi Attimi</strong> (2026) di <strong>Angelo Faraci</strong> con <strong>Maria Antonina Macaluso</strong> protagonista femminile, approda a <strong>Messina</strong> per una proiezione speciale il <strong>12 dicembre 2026 alle ore 20:30</strong>. L'evento segna la diffusione del cinema siciliano contemporaneo oltre i confini dell'isola, verso lo Stretto.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mt-12 mb-4 font-display text-3xl text-cream">Messina e il cinema siciliano</h2>
            <p className="text-pretty text-base leading-relaxed text-cream/75">
              Messina, città-porta tra Sicilia e continente, ha una tradizione cinematografica che parte da Francesco Alliata e la sua scuola peloritana fino ad arrivare al cinema contemporaneo. La proiezione di <em>Pochi Attimi</em> nella città dello Stretto rappresenta un ponte culturale tra la Sicilia occidentale — terra di Maria Antonina Macaluso e Angelo Faraci — e la Sicilia orientale.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <h2 className="mt-12 mb-4 font-display text-3xl text-cream">Il valore del film Pochi Attimi</h2>
            <p className="text-pretty text-base leading-relaxed text-cream/75">
              <em>Pochi Attimi</em> è un film che mette in risalto il valore VERO della vita attraverso la storia di una comunità felice che impara a riconoscere il peso dei pochi attimi che ci sono concessi. La pellicola, girata interamente in Sicilia, è un omaggio al paesaggio, ai borghi e alla luce dell'isola, interpretati dalla macchina da presa di Angelo Faraci e dal volto di Maria Antonina Macaluso.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="glass-card mt-12 border-l-2 border-gold p-6">
              <h3 className="mb-3 flex items-center gap-2 font-display text-xl text-gold"><Star className="h-5 w-5" /> Info utili</h3>
              <ul className="space-y-2 text-sm text-cream/80">
                <li><strong>Data:</strong> Sabato 12 dicembre 2026</li>
                <li><strong>Orario:</strong> ore 20:30 (apertura porte ore 20:00)</li>
                <li><strong>Luogo:</strong> Messina (cinema da confermare)</li>
                <li><strong>Regia:</strong> Angelo Faraci</li>
                <li><strong>Interpreti:</strong> Maria Antonina Macaluso (protagonista femminile), Angelo Faraci, cast completo</li>
                <li><strong>Durata:</strong> 120 minuti circa</li>
                <li><strong>Genere:</strong> Drammatico — commedia siciliana</li>
                <li><strong>Biglietti:</strong> prevendita disponibile online e in biglietteria</li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={480}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link href="/film/pochi-attimi" className="btn-cinema">Scheda film <ArrowRight className="h-4 w-4" /></Link>
              <Link href="/news/pochi-attimi-cinema-empire-partinico" className="btn-ghost-cinema">Proiezione Partinico <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </article>
    </>
  );
}
