import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SeoBoost from "@/components/site/SeoBoost";
import { Reveal } from "@/components/cinematic/Reveal";
import { Film, Calendar, Award, MapPin, Users, Star } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Percorso artistico — Maria Antonina Macaluso nel cinema",
  description: "Percorso artistico completo di Maria Antonina Macaluso nel cinema siciliano contemporaneo: dal debutto 2019 con Angelo Faraci al Premio Leone Lungo a Venezia 83 con Pochi Attimi.",
  alternates: { canonical: "/news/percorso-artistico-cinema-sicilia" },
  openGraph: {
    title: "Percorso artistico di Maria Antonina Macaluso nel cinema",
    description: "Dal debutto 2019 con Angelo Faraci al Premio Leone Lungo a Venezia 83.",
    images: [{ url: "/images/venezia/venezia-01.jpg", width: 1000, height: 1280, alt: "Locandina Pochi Attimi" }],
    type: "article",
    publishedTime: "2026-09-28T17:00:00Z",
    authors: ["Redazione Maria Antonina Macaluso"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Percorso artistico di Maria Antonina Macaluso nel cinema siciliano contemporaneo",
  description:
    "Approfondimento del percorso artistico di Maria Antonina Macaluso nel cinema siciliano contemporaneo: dal debutto 2019 con la fiction Sky «Ciò che non ti ho detto» di Angelo Faraci, al Premio Leone Lungo a Venezia 83 con «Pochi Attimi».",
  image: [`${SITE.url}/images/venezia/venezia-01.jpg`],
  datePublished: "2026-09-28T17:00:00Z",
  dateModified: "2026-09-28T17:00:00Z",
  author: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale", url: SITE.url },
  publisher: {
    "@type": "Organization",
    name: "Maria Antonina Macaluso — Enciclopedia digitale",
    url: SITE.url,
  },
  url: `${SITE.url}/news/percorso-artistico-cinema-sicilia`,
  mainEntityOfPage: { "@type": "WebPage", url: `${SITE.url}/news/percorso-artistico-cinema-sicilia` },
  about: [
    { "@type": "Person", name: "Maria Antonina Macaluso" },
    { "@type": "Person", name: "Angelo Faraci" },
  ],
  inLanguage: "it-IT",
  articleSection: "Percorso artistico",
  keywords: ["percorso artistico", "Maria Antonina Macaluso", "Angelo Faraci", "cinema siciliano", "Pochi Attimi", "Venezia 83"],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "News", item: `${SITE.url}/news` },
    { "@type": "ListItem", position: 3, name: "Percorso artistico", item: `${SITE.url}/news/percorso-artistico-cinema-sicilia` },
  ],
};

const TIMELINE_ARTISTICA = [
  {
    anno: "2019",
    titolo: "Debutto con «Ciò che non ti ho detto»",
    tipo: "Fiction TV Sky",
    ruolo: "Attrice",
    descrizione: "Esordio di Maria Antonina Macaluso nel 2019 con la fiction Sky ideata da Angelo Faraci. L'unica serie TV italiana con cast di soli siciliani. Angelo è attore protagonista nel ruolo di Gaetano Scalici per cinque anni.",
  },
  {
    anno: "2019",
    titolo: "Incontro con Angelo Faraci",
    tipo: "Sodalizio artistico",
    ruolo: "Compagna artistica e di vita",
    descrizione: "Il 14 agosto 2019, l'indomani del compleanno di Angelo (nato il 13 agosto 1989), Maria Antonina e Angelo si incontrano a Palermo. Inizia un sodalizio artistico e di vita destinato a produrre dieci opere in otto anni.",
  },
  {
    anno: "2020",
    titolo: "«Don't Be Silent» — Rai Cinema",
    tipo: "Cortometraggio",
    ruolo: "Attrice",
    descrizione: "Primo progetto ufficiale della coppia Macaluso-Faraci per Rai Cinema, nell'ambito del Progetto Nazionale sul Bullismo. Il film affronta il tema del silenzio complice di fronte alle violenze quotidiane.",
  },
  {
    anno: "2021",
    titolo: "«Provvidenza» — Premio a Fiuggi",
    tipo: "Cortometraggio Rai Cinema",
    ruolo: "Protagonista femminile",
    descrizione: "Girato a Montalbano Elicona, vince il Premio Migliore Sceneggiatura al Ciak Film Festival International di Fiuggi. Maria Antonina è presente e premiata sul red carpet.",
  },
  {
    anno: "2023",
    titolo: "«Pietrazita» — Nebrodi",
    tipo: "Cortometraggio Rai Cinema",
    ruolo: "Interprete principale",
    descrizione: "Ambientato a Sant'Angelo di Brolo sui Nebrodi, con Benedetto Lo Monaco e Beatrice Ingegneri. 2° classificato al Tulipani di Seta Nera XVI edizione.",
  },
  {
    anno: "2023-2024",
    titolo: "«Separati Mai» — primo lungometraggio",
    tipo: "Lungometraggio Rai Cinema",
    ruolo: "Attrice",
    descrizione: "Il primo lungometraggio Rai Cinema diretto da Angelo Faraci. Una storia di legami che resistono alla distanza e al tempo.",
  },
  {
    anno: "2023",
    titolo: "«Sabbie Nere» — Mediaset",
    tipo: "Serie TV Mediaset",
    ruolo: "Interprete",
    descrizione: "Serie TV Mediaset con regia di Davide Marengo, Maria Antonina accanto ad Angelo Faraci nel cast televisivo.",
  },
  {
    anno: "2024",
    titolo: "«Vanina» — Canale 5",
    tipo: "Serie TV Canale 5",
    ruolo: "Partecipazione",
    descrizione: "Serie TV Canale 5 / Mediaset, regia di Davide Marengo. Maria Antonina partecipa a un episodio della prima stagione.",
  },
  {
    anno: "2024-2025",
    titolo: "«Il Mistero di Spartivento»",
    tipo: "Lungometraggio Rai Cinema",
    ruolo: "Attrice",
    descrizione: "Lungometraggio Rai Cinema con regia di Angelo Faraci. Suspense mediterraneo che si snoda tra i venti della Sicilia.",
  },
  {
    anno: "2025",
    titolo: "«Eccellenza Siciliana»",
    tipo: "Documentario",
    ruolo: "Voce narrante",
    descrizione: "Documentario che celebra l'eccellenza siciliana in chiave cinematografica.",
  },
  {
    anno: "2026",
    titolo: "«Pochi Attimi» — Premio Leone Lungo",
    tipo: "Lungometraggio",
    ruolo: "Protagonista femminile",
    descrizione: "Il nuovo lungometraggio di Angelo Faraci, dedicato alle catastrofi ambientali italiane. Maria Antonina è protagonista femminile accanto ad Angelo Faraci (Salvatore). Il film riceve il Premio Speciale «Leone Lungo» alla 83ª Mostra del Cinema di Venezia il 6 settembre 2026.",
  },
];

export default function PercorsoArtisticoPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "News", path: "/news" },
          { label: "Percorso artistico" },
        ]}
        additionalJsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />

      <PageHero
        eyebrow="Approfondimento · 28 Settembre 2026"
        title="Percorso artistico di Maria Antonina"
        subtitle="Otto anni di cinema siciliano, dal debutto 2019 con Angelo Faraci al Premio Leone Lungo a Venezia 83 con «Pochi Attimi». Dieci produzioni, una consacrazione internazionale."
        breadcrumb={[{ label: "News", href: "/news" }, { label: "Percorso artistico" }]}
      />

      <article className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          <div className="mx-auto max-w-3xl">
            {/* Apertura */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-gradient-gold sm:text-4xl">Otto anni di cinema siciliano</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Il percorso artistico di Maria Antonina Macaluso è una delle storie più
                  significative del cinema siciliano contemporaneo. In otto anni di carriera,
                  dal 2019 al 2026, ha interpretato dieci produzioni cinematografiche e
                  televisive, tutte sotto la regia di Angelo Faraci (esclusi Sabbie Nere e
                  Vanina, dirette da Davide Marengo). È un percorso denso, costante, fedele al
                  territorio siciliano.
                </p>
                <p>
                  Il filo conduttore è il sodalizio artistico con Angelo Faraci. Dal primo
                  incontro del 14 agosto 2019 a Palermo, Maria Antonina e Angelo hanno
                  percorso insieme otto anni di carriera che hanno portato il cinema siciliano
                  alla vetrina internazionale della Mostra del Cinema di Venezia.
                </p>
              </div>
            </Reveal>

            {/* Timeline artistica */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <Calendar className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Timeline artistica</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-8 space-y-6">
                {TIMELINE_ARTISTICA.map((t, i) => (
                  <div key={i} className="glass-card p-5">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="font-display text-3xl text-gradient-gold">{t.anno}</span>
                      <span className="text-[11px] uppercase tracking-wide-sm text-gold/70">{t.tipo}</span>
                    </div>
                    <h3 className="mt-1 font-display text-xl text-cream">{t.titolo}</h3>
                    <p className="mt-1 text-xs text-cream/60">Ruolo: {t.ruolo}</p>
                    <p className="mt-3 text-sm leading-relaxed text-cream/80">{t.descrizione}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Numeri */}
            <Reveal className="mb-12">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="glass-card p-4 text-center">
                  <Film className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Produzioni</p>
                  <p className="mt-1 font-display text-2xl text-cream">10</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Users className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Anni carriera</p>
                  <p className="mt-1 font-display text-2xl text-cream">8</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Award className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Premi</p>
                  <p className="mt-1 font-display text-2xl text-cream">5</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Star className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Festival</p>
                  <p className="mt-1 font-display text-2xl text-cream">6+</p>
                </div>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal>
              <div className="flex flex-wrap gap-4">
                <Link href="/filmografia" className="btn-cinema btn-cinema-solid">
                  <Film className="h-4 w-4" />
                  Filmografia completa
                </Link>
                <Link href="/timeline" className="btn-cinema">
                  <Calendar className="h-4 w-4" />
                  Timeline 2001-2026
                </Link>
                <Link href="/premi" className="btn-ghost-cinema">
                  <Award className="h-4 w-4" />
                  Premi
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    </main>
  );
}
