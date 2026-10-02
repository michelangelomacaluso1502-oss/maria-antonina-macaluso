import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SeoBoost from "@/components/site/SeoBoost";
import { Reveal } from "@/components/cinematic/Reveal";
import { MapPin, History, Grape, Users, Globe2 } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Camporeale — radici siciliane di Maria Antonina Macaluso",
  description: "Approfondimento su Camporeale, paesino della provincia di Palermo dove è cresciuta Maria Antonina Macaluso: storia, cultura, vino e ulivi, tradizione contadina.",
  alternates: { canonical: "/news/camporeale-radici-maria-antonina" },
  openGraph: {
    title: "Camporeale — radici siciliane di Maria Antonina Macaluso",
    description: "Approfondimento su Camporeale, paesino della provincia di Palermo dove è cresciuta Maria Antonina Macaluso.",
    images: [{ url: "/images/photobook/mam-15.jpg", width: 1025, height: 1280, alt: "Maria Antonina Macaluso — ritratto" }],
    type: "article",
    publishedTime: "2026-09-28T13:00:00Z",
    authors: ["Redazione Maria Antonina Macaluso"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Camporeale — radici siciliane di Maria Antonina Macaluso",
  description:
    "Approfondimento su Camporeale, paesino della provincia di Palermo dove è cresciuta Maria Antonina Macaluso: storia del paese, tradizione contadina, vino Doc, ulivi e cultura siciliana.",
  image: [`${SITE.url}/images/photobook/mam-15.jpg`],
  datePublished: "2026-09-28T13:00:00Z",
  dateModified: "2026-09-28T13:00:00Z",
  author: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale", url: SITE.url },
  publisher: {
    "@type": "Organization",
    name: "Maria Antonina Macaluso — Enciclopedia digitale",
    url: SITE.url,
  },
  url: `${SITE.url}/news/camporeale-radici-maria-antonina`,
  mainEntityOfPage: { "@type": "WebPage", url: `${SITE.url}/news/camporeale-radici-maria-antonina` },
  about: [
    { "@type": "Person", name: "Maria Antonina Macaluso" },
    { "@type": "Place", name: "Camporeale" },
    { "@type": "AdministrativeArea", name: "Palermo" },
  ],
  inLanguage: "it-IT",
  articleSection: "Cultura e territorio",
  keywords: ["Camporeale", "Sicilia", "Maria Antonina Macaluso", "Palermo", "Valle del Belice", "Nero d'Avola", "ulivi"],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "News", item: `${SITE.url}/news` },
    { "@type": "ListItem", position: 3, name: "Camporeale — radici", item: `${SITE.url}/news/camporeale-radici-maria-antonina` },
  ],
};

const DATI_CAMPOREALE = [
  { label: "Regione", valore: "Sicilia" },
  { label: "Città metropolitana", valore: "Palermo" },
  { label: "Abitanti", valore: "~3.000" },
  { label: "Altitudine", valore: "550 m s.l.m." },
  { label: "Superficie", valore: "47 km²" },
  { label: "Frazione principale", valore: "Boscopiano" },
  { label: "Santo patrono", valore: "San Giuseppe (19 marzo)" },
  { label: "Soprannome", valore: "Città del vino e dell'olio" },
];

export default function CamporealeRadiciPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "News", path: "/news" },
          { label: "Camporeale — radici" },
        ]}
        additionalJsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />

      <PageHero
        eyebrow="Approfondimento · 28 Settembre 2026"
        title="Camporeale — radici siciliane di Maria Antonina"
        subtitle="Il paesino della città metropolitana di Palermo dove è cresciuta Maria Antonina Macaluso, tra colline, ulivi, vigneti e tradizione contadina siciliana."
        breadcrumb={[{ label: "News", href: "/news" }, { label: "Camporeale — radici" }]}
      />

      <article className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          <div className="mx-auto max-w-3xl">
            {/* Immagine apertura */}
            <Reveal className="mb-12">
              <figure className="glass-card overflow-hidden p-3">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-noir">
                  <Image
                    src="/images/photobook/mam-15.jpg"
                    alt="Maria Antonina Macaluso — ritratto siciliano"
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    quality={95}
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className="px-3 py-3 text-center text-xs uppercase tracking-wide-sm text-cream/50">
                  Maria Antonina Macaluso — attrice siciliana di origini camporealesi
                </figcaption>
              </figure>
            </Reveal>

            {/* Intro */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-gradient-gold sm:text-4xl">Camporeale, il paese di Maria Antonina</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Camporeale è un comune di circa 3.000 abitanti della città metropolitana di
                  Palermo, situato a 550 metri di altitudine sulle colline dell'entroterra
                  siciliano, tra la costa di Trapani e l'area montuosa delle Madonie. È il
                  paese dove Maria Antonina Macaluso è cresciuta dopo la nascita a Bologna il
                  9 novembre 2001.
                </p>
                <p>
                  È un paesino agricolo — non un paesone — con una economia basata sulla
                  produzione di vino Doc Camporeale (Nero d'Avola, Catarratto, Inzolia), olio
                  extravergine d'oliva e grano duro. Il paesaggio è dominio di uliveti,
                  vigneti, campi di grano, muretti a secco, masserie e strade bianche che
                  attraversano le colline.
                </p>
                <p>
                  Maria Antonina Macaluso ha radici profonde a Camporeale: la sua famiglia, la
                  sua infanzia, le sue estati siciliane, i suoi sapori. Anche quando si è
                  trasferita a Roma per inseguire la carriera artistica con Angelo Faraci,
                  Camporeale è rimasta il punto di riferimento. Il cinema di Angelo Faraci —
                  che ha ambientato Pochi Attimi nella Valle del Belice, non lontano da
                  Camporeale — racconta questa dimensione siciliana.
                </p>
              </div>
            </Reveal>

            {/* Box dati */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Dati principali</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {DATI_CAMPOREALE.map((d, i) => (
                  <div key={i} className="glass-card p-4">
                    <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">{d.label}</p>
                    <p className="mt-1 font-display text-base text-cream">{d.valore}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Storia */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <History className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Storia di Camporeale</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Il nome «Camporeale» deriva dal latino «Campus Regalis» (Campo Reale),
                  indicando un territorio di pertinenza regia. Le origini del centro abitato
                  risalgono al XVII secolo, quando il marchese di Ballistrero ottenne la
                  licentia populandi nel 1680 per fondare il nuovo centro abitato. Tuttavia,
                  insediamenti agricoli esistevano già in epoca araba e normanna.
                </p>
                <p>
                  Camporeale è cresciuta come centro agricolo nella campagna tra Palermo e
                  Trapani, sulla strada per Monreale. La sua economia era basata sulla
                  produzione di grano, olio, vino e mandorle. Il borgo si sviluppò attorno alla
                  Chiesa Madre di San Giuseppe e alla piazza principale, con le case in pietra
                  calcarea locale.
                </p>
                <p>
                  Nel XX secolo, Camporeale ha attraversato le grandi vicende siciliane: le
                  due guerre mondiali, l'emigrazione verso le Americhe, la rinascita del
                  dopoguerra, il boom economico, l'emigrazione verso il Nord Italia. Negli
                  ultimi decenni, il paese ha visto una contrazione demografica, ma anche una
                  rinascita culturale con la valorizzazione delle produzioni agricole Doc.
                </p>
              </div>
            </Reveal>

            {/* Vino e ulivi */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <Grape className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Vino e ulivi</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Camporeale è conosciuta come «Città del vino e dell'olio». La denominazione
                  Doc Camporeale, istituita nel 1973, è una delle più antiche della Sicilia.
                  I vitigni principali sono il Nero d'Avola (uvaggio rosso), il Catarratto e
                  l'Inzolia (uvaggio bianco). La produzione vinicola è prevalentemente
                  biologica e biodinamica, con cantine familiari che producono vini di alta
                  qualità esportati in tutto il mondo.
                </p>
                <p>
                  L'olio extravergine d'oliva di Camporeale è ottenuto dalle varietà
                  Biancolilla, Nocellara del Belice e Cerasuola, con metod tradizionali di
                  molitura a freddo. La collina di ulivi è il paesaggio identitario del paese,
                  con filari di secolari ulivi che attraversano le pendici.
                </p>
                <p>
                  Il grano duro è l'altra grande produzione locale: la varietà Russello,
                  tumminia e senatore capelli, coltivate secondo metodi biologici, sono alla
                  base della pasta siciliana di alta qualità. Il pane di grano duro di
                  Camporeale è rinomato, cotto in forni a legna tradizionali.
                </p>
              </div>
            </Reveal>

            {/* Tradizioni */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Tradizioni e comunità</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Camporeale conserva tradizioni secolari, legate al ciclo agricolo e alle
                  feste religiose. La festa di San Giuseppe, patrono del paese, si celebra il
                  19 marzo con la «Tavola di San Giuseppe»: una grande tavolata di pani
                  votivi, paste, verdure, dolci, allestita in onore del santo. La tradizione
                  risale al medioevo e richiama devoti da tutta la Sicilia occidentale.
                </p>
                <p>
                  La Settimana Santa di Camporeale è una delle più suggestive della Sicilia,
                  con processioni del Cristo Morto, dell'Addolorata e dell'Ecce Homo. Le
                  confraternite vestono tuniche bianche, nere o rosse a seconda del giorno,
                  e attraversano le vie del paese con i «mystieri» — simulacri lignei
                  scolpiti.
                </p>
                <p>
                  La comunità camporelese è legata alle famiglie contadine che da generazioni
                  lavorano le terre di ulivi e vigneti. Anche i giovani che emigrano al Nord
                  o all'estero mantengono un legame profondo con il paese, tornando per le
                  feste patronali o per la vendemmia. Maria Antonina Macaluso è parte di
                  questa comunità: anche come attrice affermata e content creator con migliaia
                  di follower, continua a tornare a Camporeale.
                </p>
              </div>
            </Reveal>

            {/* Geografia e contesto */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <Globe2 className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Geografia e contesto</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Camporeale è situata a 550 metri di altitudine sulle propaggini collinari
                  che scendono dalle Madonie verso la valle del Belice. Il territorio
                  comunale è prevalentemente collinare, con altitudini tra 200 e 900 metri.
                  Il paesaggio è tipico della Sicilia interna: campi di grano duro, uliveti,
                  vigneti, mandorleti, e boschi di leccio e quercia sulle altitudini più
                  elevate.
                </p>
                <p>
                  Il paese è a circa 50 km da Palermo, sulla strada per Trapani e
                  Mazara del Vallo. I paesi più vicini sono Monreale, San Cipirello,
                  San Giuseppe Jato, Corleone e Partinico. La Valle del Belice — dove Angelo
                  Faraci ha ambientato Pochi Attimi — è a circa 30 km a sud, raggiungibile
                  attraversando le colline di Roccamena e Santa Margherita di Belice.
                </p>
                <p>
                  Il clima è mediterraneo di collina, con estati calde e secche (medie 30°C,
                  massime 38°C) e inverni miti (medie 8°C, minime 2°C). Le piogge sono
                  concentrate in autunno e inverno, con circa 600-700 mm annui. I venti
                  prevalenti sono lo scirocco (caldo dal Sahara) e il maestrale (freddo dal
                  nord-ovest).
                </p>
              </div>
            </Reveal>

            {/* CTA finale */}
            <Reveal>
              <div className="flex flex-wrap gap-4">
                <Link href="/biografia" className="btn-cinema btn-cinema-solid">
                  Biografia di Maria Antonina
                </Link>
                <Link href="/news/sodalizio-maria-antonina-angelo-faraci" className="btn-cinema">
                  Sodalizio artistico
                </Link>
                <Link href="/news/catastrofi-ambientali-italiane" className="btn-ghost-cinema">
                  Catastrofi ambientali italiane
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    </main>
  );
}
