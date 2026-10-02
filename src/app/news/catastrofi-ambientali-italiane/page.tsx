import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SeoBoost from "@/components/site/SeoBoost";
import { Reveal } from "@/components/cinematic/Reveal";
import { AlertTriangle, History, ExternalLink, Newspaper, Globe } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Catastrofi ambientali italiane — il film Pochi Attimi",
  description: "Approfondimento delle catastrofi ambientali italiane raccontate nel film Pochi Attimi di Angelo Faraci: dal terremoto del Belice del 1968 alle alluvioni di Cinque Terre e Sardegna.",
  alternates: { canonical: "/news/catastrofi-ambientali-italiane" },
  openGraph: {
    title: "Catastrofi ambientali italiane — il film Pochi Attimi",
    description: "Approfondimento delle catastrofi ambientali italiane raccontate nel film Pochi Attimi di Angelo Faraci.",
    images: [{ url: "/images/venezia/venezia-05.jpg", width: 1440, height: 1920, alt: "Premio Leone Lungo a Pochi Attimi Venezia 83" }],
    type: "article",
    publishedTime: "2026-09-28T11:00:00Z",
    authors: ["Redazione Maria Antonina Macaluso"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Catastrofi ambientali italiane — il film Pochi Attimi di Angelo Faraci",
  description:
    "Approfondimento delle catastrofi ambientali italiane raccontate nel film Pochi Attimi di Angelo Faraci: dal terremoto del Belice del 1968 alle alluvioni di Cinque Terre e Sardegna, fino al disastro di Sarno.",
  image: [`${SITE.url}/images/venezia/venezia-05.jpg`],
  datePublished: "2026-09-28T11:00:00Z",
  dateModified: "2026-09-28T11:00:00Z",
  author: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale", url: SITE.url },
  publisher: {
    "@type": "Organization",
    name: "Maria Antonina Macaluso — Enciclopedia digitale",
    url: SITE.url,
  },
  url: `${SITE.url}/news/catastrofi-ambientali-italiane`,
  mainEntityOfPage: { "@type": "WebPage", url: `${SITE.url}/news/catastrofi-ambientali-italiane` },
  about: [
    { "@type": "Movie", name: "Pochi Attimi" },
    { "@type": "Person", name: "Angelo Faraci" },
    { "@type": "Person", name: "Maria Antonina Macaluso" },
  ],
  inLanguage: "it-IT",
  articleSection: "Cinema e storia",
  keywords: ["Catastrofi ambientali italiane", "terremoto Belice", "alluvioni Italia", "Pochi Attimi", "Angelo Faraci", "Valle del Belice", "Camporeale"],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "News", item: `${SITE.url}/news` },
    { "@type": "ListItem", position: 3, name: "Catastrofi ambientali italiane", item: `${SITE.url}/news/catastrofi-ambientali-italiane` },
  ],
};

const CATASTROFI = [
  {
    anno: "1968",
    luogo: "Valle del Belice (Sicilia)",
    tipo: "Terremoto",
    magnitudo: "6.4",
    vittime: "~370",
    descrizione: "Terremoto che colpì la Valle del Belice in Sicilia, distruggendo i paesi di Gibellina, Poggioreale, Salaparuta, Montevago e Santa Margherita di Belice. Centro di rinascita culturale con il Cretto di Burri a Gibellina.",
  },
  {
    anno: "1980",
    luogo: "Irpinia (Campania)",
    tipo: "Terremoto",
    magnitudo: "6.9",
    vittime: "~2.914",
    descrizione: "Terremoto dell'Irpinia del 23 novembre 1980, colpì Campania, Basilicata e Puglia. Una delle più grandi catastrofi naturali italiane del Novecento.",
  },
  {
    anno: "1998",
    luogo: "Sarno (Campania)",
    tipo: "Frana",
    magnitudo: "—",
    vittime: "~160",
    descrizione: "Frana di Sarno del 5-6 maggio 1998, che colpì i comuni di Sarno, Siano, Bracigliano, Quindici e San Felice a Cancello. Una delle frane più mortali della storia italiana.",
  },
  {
    anno: "2011",
    luogo: "Cinque Terre (Liguria)",
    tipo: "Alluvione",
    magnitudo: "—",
    vittime: "~13",
    descrizione: "Alluvione delle Cinque Terre e della Versilia del 25 ottobre 2011, con piogge eccezionali che causarono esondazioni e frane.",
  },
  {
    anno: "2013",
    luogo: "Sardegna",
    tipo: "Alluvione",
    magnitudo: "—",
    vittime: "~16",
    descrizione: "Alluvione della Sardegna del novembre 2013, con il ciclone Cleopatra che colpì l'intera isola, causando esondazioni e morti.",
  },
  {
    anno: "2017",
    luogo: "Ischia (Campania)",
    tipo: "Frana",
    magnitudo: "—",
    vittime: "~1",
    descrizione: "Frana di Ischia del 26 novembre 2017, con una colata di fango che colpì Casamicciola Terme.",
  },
];

export default function CatastrofiAmbientaliItalianePage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "News", path: "/news" },
          { label: "Catastrofi ambientali italiane" },
        ]}
        additionalJsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />

      <PageHero
        eyebrow="Approfondimento · 28 Settembre 2026"
        title="Catastrofi ambientali italiane nel cinema"
        subtitle="Il film Pochi Attimi di Angelo Faraci racconta le catastrofi ambientali italiane — dal terremoto del Belice del 1968 alle alluvioni recentissime — con Maria Antonina Macaluso protagonista femminile."
        breadcrumb={[{ label: "News", href: "/news" }, { label: "Catastrofi ambientali italiane" }]}
      />

      <article className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          <div className="mx-auto max-w-3xl">
            {/* Immagine apertura */}
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
                  Premio Leone Lungo a Pochi Attimi — Venezia 83, 6 settembre 2026
                </figcaption>
              </figure>
            </Reveal>

            {/* Intro */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-gradient-gold sm:text-4xl">Il cinema e le catastrofi ambientali italiane</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Il cinema italiano ha sempre raccontato le catastrofi ambientali come modo per
                  metabolizzare il dolore collettivo e ricostruire un senso di comunità. Dal
                  Neorealismo ai giorni nostri, il terremoto, l'alluvione, la frana sono
                  diventati parte del linguaggio cinematografico italiano come narrazione del
                  rapporto tra uomo e territorio.
                </p>
                <p>
                  «Pochi Attimi» di Angelo Faraci, che ha ricevuto il Premio Speciale «Leone
                  Lungo» alla 83ª Mostra del Cinema di Venezia, si inserisce in questa
                  tradizione raccontando le grandi catastrofi ambientali italiane come moments
                  di rottura e di rinascita. Il film, con Maria Antonina Macaluso come
                  protagonista femminile, mette in risalto il valore vero della vita proprio
                  attraverso il racconto della perdita e della ricostruzione.
                </p>
                <p>
                  La scelta di Angelo Faraci di ambientare il film nella Valle del Belice —
                  territorio simbolo del terremoto siciliano del 1968 — non è casuale. Maria
                  Antonina Macaluso è cresciuta a Camporeale, paesino della provincia di Palermo
                  non lontano dalla Valle del Belice. Il racconto cinematografico diventa così
                  anche racconto di radici, di memoria locale, di identità siciliana.
                </p>
              </div>
            </Reveal>

            {/* Box catastrofi */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Principali catastrofi ambientali italiane</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  La storia italiana è segnata da una serie di catastrofi ambientali che hanno
                  lasciato ferite profonde nel territorio. Il film «Pochi Attimi» racconta
                  alcune di queste catastrofi, mettendo in risalto il valore vero della vita
                  attraverso la memoria.
                </p>
              </div>
              <div className="mt-8 space-y-4">
                {CATASTROFI.map((c, i) => (
                  <Reveal key={i}>
                    <div className="glass-card p-5">
                      <div className="flex flex-wrap items-baseline gap-3">
                        <span className="font-display text-3xl text-gradient-gold">{c.anno}</span>
                        <span className="text-[11px] uppercase tracking-wide-sm text-gold/70">{c.tipo}</span>
                        <span className="text-base text-cream/70">— {c.luogo}</span>
                      </div>
                      <div className="mt-3 flex flex-wrap gap-4 text-xs text-cream/60">
                        {c.magnitudo !== "—" && <span>Magnitudo: <strong className="text-cream">{c.magnitudo}</strong></span>}
                        <span>Vittime: <strong className="text-cream">{c.vittime}</strong></span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-cream/80">
                        {c.descrizione}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            {/* Il terremoto del Belice */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <History className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Il terremoto del Belice del 1968</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Il terremoto della Valle del Belice del 14-15 gennaio 1968 è una delle
                  catastrofi naturali più significative della storia siciliana recente. Con una
                  magnitudo di 6.4, colpì una delle valli più povere della Sicilia occidentale,
                  distruggendo i paesi di Gibellina, Poggioreale, Salaparuta, Montevago e Santa
                  Margherita di Belice. Le vittime furono circa 370, con oltre 70.000
                  sfollati.
                </p>
                <p>
                  La Valle del Belice divenne simbolo della ricostruzione fallita e della
                  memoria del dolore. Gibellina vecchia fu abbandonata e ricostruita più a
                  valle, mentre il Cretto di Burri — opera d'arte land art di Alberto Burri
                  del 1984-1989 — ricopre le macerie del paese vecchio con enormi blocchi di
                  cemento bianco, trasformando la ferita in opera d'arte.
                </p>
                <p>
                  Maria Antonina Macaluso è cresciuta a Camporeale, paesino della provincia di
                  Palermo a pochi chilometri dalla Valle del Belice. La sua partecipazione al
                  film «Pochi Attimi» ha una dimensione biografica profonda: il racconto
                  cinematografico delle catastrofi ambientali italiane è anche racconto delle
                  radici di Maria Antonina, della sua infanzia in Sicilia, della memoria
                  collettiva del terremoto del Belice.
                </p>
              </div>
            </Reveal>

            {/* Contesto geografico */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">La Valle del Belice e Camporeale</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  La Valle del Belice è una zona geografica della Sicilia occidentale, in
                  provincia di Trapani e Palermo, attraversata dal fiume Belice. È una delle
                  aree più povere dell'isola, storicamente segnata dall'agricoltura contadina,
                  dagli ulivi e dai vigneti che producono il famoso vino Nero d'Avola. I paesi
                  della valle — Gibellina, Poggioreale, Salaparuta, Montevago, Santa Margherita
                  di Belice, Contessa Entellina, Camporeale — sono comunità di poche migliaia
                  di abitanti, custodi di una memoria storica e contadina profonda.
                </p>
                <p>
                  Camporeale, il paese dove Maria Antonina Macaluso è cresciuta, è un comune di
                  circa 3.000 abitanti in provincia di Palermo, situato sulle colline tra la
                  costa e l'entroterra. Il paesaggio è dominato da uliveti, vigneti e campi di
                  grano duro. Il vino è una delle risorse economiche principali del paese, con
                  la denominazione Doc Camporeale.
                </p>
                <p>
                  Il cinema di Angelo Faraci, scegliendo la Valle del Belice come ambientazione
                  di Pochi Attimi, recupera una dimensione profonda del cinema siciliano: il
                  racconto del territorio come luogo di memoria, di dolore e di rinascita. Una
                  tradizione che parte da Pasquale Squitieri e Giuseppe Tornatore e arriva a
                  Faraci, con Maria Antonina Macaluso come voce femminile di questa
                  narrazione.
                </p>
              </div>
            </Reveal>

            {/* CTA finale */}
            <Reveal>
              <div className="flex flex-wrap gap-4">
                <Link href="/film/pochi-attimi" className="btn-cinema btn-cinema-solid">
                  Scheda film Pochi Attimi
                </Link>
                <Link href="/news/pochi-attimi-venezia-83" className="btn-cinema">
                  Premio Leone Lungo
                </Link>
                <Link href="/news/cast-pochi-attimi" className="btn-ghost-cinema">
                  Cast completo
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    </main>
  );
}
