import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SeoBoost from "@/components/site/SeoBoost";
import { Reveal } from "@/components/cinematic/Reveal";
import { History, AlertTriangle, Film, MapPin, ExternalLink, Newspaper } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Valle del Belice — dal terremoto 1968 al cinema",
  description: "Dal terremoto del Belice del 1968 al film Pochi Attimi di Angelo Faraci (2026): storia, ricostruzione, Cretto di Burri e rinascita cinematografica con Maria Antonina Macaluso.",
  alternates: { canonical: "/news/valle-belice-1968-cinema-rinascita" },
  openGraph: {
    title: "Valle del Belice 1968 → Cinema 2026 — dal terremoto a Pochi Attimi",
    description: "Dal terremoto del Belice del 1968 al film Pochi Attimi di Angelo Faraci con Maria Antonina Macaluso.",
    images: [{ url: "/images/venezia/venezia-01.jpg", width: 1000, height: 1280, alt: "Locandina Pochi Attimi" }],
    type: "article",
    publishedTime: "2026-09-28T20:00:00Z",
    authors: ["Redazione Maria Antonina Macaluso"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Valle del Belice — dal terremoto del 1968 al cinema con Pochi Attimi",
  description:
    "Dal terremoto del Belice del 1968 al film Pochi Attimi di Angelo Faraci (2026) con Maria Antonina Macaluso come protagonista femminile. Storia, ricostruzione, Cretto di Burri e rinascita cinematografica siciliana.",
  image: [`${SITE.url}/images/venezia/venezia-01.jpg`],
  datePublished: "2026-09-28T20:00:00Z",
  dateModified: "2026-09-28T20:00:00Z",
  author: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale", url: SITE.url },
  publisher: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale", url: SITE.url },
  url: `${SITE.url}/news/valle-belice-1968-cinema-rinascita`,
  mainEntityOfPage: { "@type": "WebPage", url: `${SITE.url}/news/valle-belice-1968-cinema-rinascita` },
  about: [
    { "@type": "Place", name: "Valle del Belice" },
    { "@type": "Movie", name: "Pochi Attimi" },
    { "@type": "Person", name: "Maria Antonina Macaluso" },
  ],
  inLanguage: "it-IT",
  articleSection: "Storia e cinema",
  keywords: ["Valle del Belice", "terremoto 1968", "Cretto di Burri", "Gibellina", "Pochi Attimi", "Angelo Faraci", "Maria Antonina Macaluso"],
  citation: [
    "https://it.wikipedia.org/wiki/TTerremoto_di_Belice_del_1968",
    "https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html",
    "https://www.infobelice.it/2025/12/20/la-valle-del-belice-raccontata-dal-cinema-la-camporealese-maria-antonina-macaluso-nel-film-pochi-attimi-di-angelo-faraci",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "News", item: `${SITE.url}/news` },
    { "@type": "ListItem", position: 3, name: "Valle del Belice", item: `${SITE.url}/news/valle-belice-1968-cinema-rinascita` },
  ],
};

const DATI_TERREMOTO = [
  { label: "Data", valore: "14-15 gennaio 1968" },
  { label: "Magnitudo", valore: "6.4 Mw" },
  { label: "Epicentro", valore: "Valle del Belice (TP/PA)" },
  { label: "Vittime", valore: "~370" },
  { label: "Sfollati", valore: "~70.000" },
  { label: "Paesi distrutti", valore: "Gibellina, Poggioreale, Salaparuta, Montevago, Santa Margherita" },
];

const PAESI_BELICE = [
  { nome: "Gibellina", ruolo: "Cretto di Burri (1984-1989), land art di Alberto Burri sulle macerie del paese vecchio" },
  { nome: "Poggioreale", ruolo: "Paese abbandonato, nuovo centro ricostruito più a valle" },
  { nome: "Salaparuta", ruolo: "Ricostruito con urbanistica moderna" },
  { nome: "Montevago", ruolo: "Ricostruito con criteri antisismici" },
  { nome: "Santa Margherita di Belice", ruolo: "Ricostruito, diventa centro di riferimento della Valle" },
  { nome: "Contessa Entellina", ruolo: "Comune arbëreshë della Valle" },
  { nome: "Camporeale", ruolo: "Paese di Maria Antonina Macaluso, a nord della Valle" },
];

export default function ValleBelice1968Page() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "News", path: "/news" },
          { label: "Valle del Belice" },
        ]}
        additionalJsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />

      <PageHero
        eyebrow="Storia e cinema · 28 Settembre 2026"
        title="Valle del Belice — dal terremoto al cinema"
        subtitle="Dal terremoto del 14-15 gennaio 1968 al film Pochi Attimi di Angelo Faraci (2026) con Maria Antonina Macaluso come protagonista femminile. Storia, ricostruzione, Cretto di Burri e rinascita cinematografica."
        breadcrumb={[{ label: "News", href: "/news" }, { label: "Valle del Belice" }]}
      />

      <article className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          <div className="mx-auto max-w-3xl">
            {/* Apertura */}
            <Reveal className="mb-12">
              <figure className="glass-card overflow-hidden p-3">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-noir">
                  <Image
                    src="/images/venezia/venezia-01.jpg"
                    alt="Locandina Pochi Attimi — Premio Leone Lungo Venezia 83"
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    quality={95}
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className="px-3 py-3 text-center text-xs uppercase tracking-wide-sm text-cream/50">
                  «Pochi Attimi» — film dedicato alle catastrofi ambientali italiane
                </figcaption>
              </figure>
            </Reveal>

            {/* Box dati terremoto */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Il terremoto del 1968</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {DATI_TERREMOTO.map((d, i) => (
                  <div key={i} className="glass-card p-4">
                    <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">{d.label}</p>
                    <p className="mt-1 font-display text-base text-cream">{d.valore}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Sezione 1 — Il terremoto */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-gradient-gold sm:text-4xl">14-15 gennaio 1968 — il terremoto</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Il terremoto della Valle del Belice del 14-15 gennaio 1968 è una delle
                  catastrofi naturali più significative della storia siciliana recente. Con
                  una magnitudo di 6.4 Mw, colpì una delle valli più povere della Sicilia
                  occidentale, tra le province di Trapani e Palermo.
                </p>
                <p>
                  I paesi di Gibellina, Poggioreale, Salaparuta, Montevago e Santa Margherita
                  di Belice furono completamente distrutti. Le vittime furono circa 370, con
                  oltre 70.000 sfollati. Fu una catastrofe annunciata: la zona era già
                  identificata come sismica, ma le costruzioni erano in pietra calcarea locale
                  senza criteri antisismici.
                </p>
                <p>
                  Il terremoto del Belice divenne simbolo della ricostruzione fallita e della
                  memoria del dolore. La Valle del Belice divenne un caso di studio per
                  l'urbanistica e la pianificazione del territorio in zona sismica in Italia.
                  Da quella catastrofe nacquero le leggi antisismiche italiane moderne.
                </p>
              </div>
            </Reveal>

            {/* Sezione 2 — Ricostruzione */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <History className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">La ricostruzione</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  La ricostruzione della Valle del Belice fu lenta e problematica. Molti paesi
                  furono ricostruiti in nuove sedi, abbandonando i centri storici distrutti.
                  Gibellina vecchia fu abbandonata e ricostruita più a valle. Poggioreale,
                  Salaparuta e Montevago seguirono sorte simile.
                </p>
                <p>
                  La rinascita culturale della Valle del Belice divenne un simbolo: il Cretto
                  di Burri, opera land art di Alberto Burri realizzata tra il 1984 e il 1989,
                  ricopre le macerie di Gibellina vecchia con enormi blocchi di cemento bianco.
                  È una delle opere d'arte contemporanea più significative d'Italia.
                </p>
              </div>
            </Reveal>

            {/* Sezione 3 — I paesi della Valle */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">I paesi della Valle</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {PAESI_BELICE.map((p, i) => (
                  <div key={i} className="glass-card p-5">
                    <p className="font-display text-lg text-cream">{p.nome}</p>
                    <p className="mt-1 text-sm text-cream/60">{p.ruolo}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Sezione 4 — Cinema */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <Film className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Il cinema della rinascita</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Il cinema italiano ha raccontato più volte la catastrofe del Belice e la
                  rinascita della Valle. Dal Neorealismo ai giorni nostri, il terremoto e la
                  ricostruzione sono diventati parte del linguaggio cinematografico italiano
                  come narrazione del rapporto tra uomo e territorio.
                </p>
                <p>
                  «Pochi Attimi» di Angelo Faraci (2026) si inserisce in questa tradizione
                  raccontando le catastrofi ambientali italiane attraverso la voce femminile
                  di Maria Antonina Macaluso, attrice siciliana cresciuta a Camporeale, paesino
                  della provincia di Palermo a pochi chilometri dalla Valle del Belice. Il film
                  mette in risalto il valore vero della vita attraverso la memoria del dolore
                  e della ricostruzione.
                </p>
                <p>
                  Il 6 settembre 2026, presso l'Area Hospitality Maxafilm dell'Hotel Excelsior
                  al Lido di Venezia, «Pochi Attimi» ha ricevuto il Premio Speciale «Leone
                  Lungo» nell'ambito degli eventi collaterali della 83ª Mostra Internazionale
                  d'Arte Cinematografica di Venezia. Maria Antonina Macaluso è la protagonista
                  femminile del film, accanto ad Angelo Faraci che interpreta il ruolo di
                  Salvatore.
                </p>
              </div>
            </Reveal>

            {/* Sezione 5 — Maria Antonina e la Valle */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">Maria Antonina Macaluso e la Valle</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Maria Antonina Macaluso, nata a Bologna il 9 novembre 2001, è cresciuta a
                  Camporeale, paesino della provincia di Palermo situato a pochi chilometri
                  dalla Valle del Belice. Camporeale confina con i comuni della Valle e
                  condivide con loro il paesaggio di colline, ulivi, vigneti e grano duro.
                </p>
                <p>
                  La scelta di Angelo Faraci di ambientare «Pochi Attimi» nella Valle del
                  Belice non è casuale. Maria Antonina porta sul set una dimensione biografica
                  profonda: il racconto cinematografico delle catastrofi ambientali italiane è
                  anche racconto delle sue radici, della sua infanzia in Sicilia, della memoria
                  collettiva del terremoto del Belice del 1968.
                </p>
                <p>
                  La produzione di «Pochi Attimi» ha coinvolto il territorio siciliano in
                  modo significativo. I casting sono stati aperti in Sicilia nel gennaio 2026,
                  come riportato da fonti giornalistiche specializzate (CastingNews.eu,
                  Telenicosia). Il film racconta la storia di una Comunità felice che resiste
                  alla catastrofe, confermando il legame profondo tra cinema siciliano e
                  territorio.
                </p>
              </div>
            </Reveal>

            {/* Box fonti verificate */}
            <Reveal className="mb-12">
              <div className="rounded-lg border border-gold/40 bg-gold/5 p-6">
                <div className="flex items-start gap-3">
                  <Newspaper className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-display text-base text-gold">Fonti verificate</h3>
                    <div className="mt-4 space-y-2">
                      <a
                        href="https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gold/80 hover:text-gold"
                      >
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70 mr-2">Cinema Italiano</strong>
                        VENEZIA 83 — A Pochi Attimi il Premio Leone Lungo
                      </a>
                      <a
                        href="https://www.infobelice.it/2025/12/20/la-valle-del-belice-raccontata-dal-cinema-la-camporealese-maria-antonina-macaluso-nel-film-pochi-attimi-di-angelo-faraci"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gold/80 hover:text-gold"
                      >
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70 mr-2">InfoBelice</strong>
                        La valle del Belice raccontata dal cinema
                      </a>
                      <a
                        href="https://www.castingnews.eu/magazine/2026/01/19/al-via-i-casting-per-il-lungometraggio-storico-pochi-attimi-di-angelo-faraci"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gold/80 hover:text-gold"
                      >
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70 mr-2">CastingNews.eu</strong>
                        Al via i casting per Pochi Attimi
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal>
              <div className="flex flex-wrap gap-4">
                <Link href="/news/catastrofi-ambientali-italiane" className="btn-cinema btn-cinema-solid">
                  <AlertTriangle className="h-4 w-4" />
                  Catastrofi ambientali italiane
                </Link>
                <Link href="/film/pochi-attimi" className="btn-cinema">
                  <Film className="h-4 w-4" />
                  Scheda film Pochi Attimi
                </Link>
                <Link href="/news/camporeale-radici-maria-antonina" className="btn-ghost-cinema">
                  Camporeale
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    </main>
  );
}
