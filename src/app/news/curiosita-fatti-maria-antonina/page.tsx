import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SeoBoost from "@/components/site/SeoBoost";
import { Reveal } from "@/components/cinematic/Reveal";
import { Sparkles, Star, Calendar, MapPin, Film, ExternalLink } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Curiosità e fatti su Maria Antonina Macaluso",
  description: "15 curiosità e fatti veritati su Maria Antonina Macaluso: data nascita, Camporeale, 10 film con Angelo Faraci, Premio Leone Lungo, content creator, radici siciliane.",
  alternates: { canonical: "/news/curiosita-fatti-maria-antonina" },
  openGraph: {
    title: "15 curiosità e fatti veritieri su Maria Antonina Macaluso",
    description: "Curiosità verificate su Maria Antonina Macaluso: nascita, Camporeale, Angelo Faraci, filmografia, premi.",
    images: [{ url: "/images/photobook/mam-17.jpg", width: 1025, height: 1280, alt: "Maria Antonina Macaluso" }],
    type: "article",
    publishedTime: "2026-09-29T12:00:00Z",
    authors: ["Enciclopedia digitale Maria Antonina Macaluso"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "15 curiosità e fatti veritieri su Maria Antonina Macaluso",
  description:
    "Curiosità e fatti verificati su Maria Antonina Macaluso: data di nascita, Camporeale, sodalizio con Angelo Faraci dal 14 agosto 2019, dieci film, sei premi, Premio Leone Lungo a Venezia 83.",
  image: [`${SITE.url}/images/photobook/mam-17.jpg`],
  datePublished: "2026-09-29T12:00:00Z",
  dateModified: "2026-09-29T12:00:00Z",
  author: { "@type": "Organization", name: "Enciclopedia digitale Maria Antonina Macaluso", url: SITE.url },
  publisher: { "@type": "Organization", name: "Enciclopedia digitale Maria Antonina Macaluso", url: SITE.url },
  url: `${SITE.url}/news/curiosita-fatti-maria-antonina`,
  mainEntityOfPage: { "@type": "WebPage", url: `${SITE.url}/news/curiosita-fatti-maria-antonina` },
  about: [{ "@type": "Person", name: "Maria Antonina Macaluso" }],
  inLanguage: "it-IT",
  articleSection: "Curiosità e fatti",
  keywords: ["curiosità Maria Antonina Macaluso", "fatti Maria Antonina Macaluso", "Angelo Faraci", "Camporeale", "Pochi Attimi", "Venezia 83"],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "News", item: `${SITE.url}/news` },
    { "@type": "ListItem", position: 3, name: "Curiosità e fatti", item: `${SITE.url}/news/curiosita-fatti-maria-antonina` },
  ],
};

const CURIOSITA = [
  {
    numero: 1,
    titolo: "È nata a Bologna ma cresciuta in Sicilia",
    testo: "Maria Antonina Macaluso è nata a Bologna il 9 novembre 2001, ma è cresciuta a Camporeale, paesino della provincia di Palermo. La sua è una famiglia siciliana originaria di Camporeale che si era trasferita a Bologna per lavoro.",
    fonte: "Wikidata Q140944431",
  },
  {
    numero: 2,
    titolo: "Ha 24 anni compiuti nel 2026",
    testo: "Avendo ricevuto il Premio Speciale Leone Lungo a Venezia 83 il 6 settembre 2026, Maria Antonina aveva 24 anni compiuti da novembre 2025. A 24 anni ha già un curriculum di dieci produzioni cinematografiche e televisive.",
    fonte: "Wikidata Q140944431",
  },
  {
    numero: 3,
    titolo: "Ha debuttato nel 2019 diretta da Angelo Faraci",
    testo: "Il debutto di Maria Antonina Macaluso avviene nel 2019 con la fiction Sky «Ciò che non ti ho detto», ideata da Angelo Faraci. La fiction è l'unica serie TV italiana con cast composto esclusivamente da siciliani e volti isolani noti.",
    fonte: "IMDb nm14708762",
  },
  {
    numero: 4,
    titolo: "Ha interpretato 10 produzioni in 8 anni",
    testo: "Dal 2019 al 2026, Maria Antonina Macaluso ha interpretato dieci produzioni: 3 cortometraggi Rai Cinema, 1 fiction Sky, 2 serie TV Mediaset e Canale 5, 1 documentario, 3 lungometraggi Rai Cinema o indipendenti.",
    fonte: "IMDb nm14708762",
  },
  {
    numero: 5,
    titolo: "Sodalizio artistico con Angelo Faraci dal 14 agosto 2019",
    testo: "Il 14 agosto 2019, l'indomani del compleanno di Angelo Faraci (nato il 13 agosto 1989), Maria Antonina e Angelo si incontrano a Palermo. Da quel giorno inizia un sodalizio artistico e di vita che dura ancora oggi.",
    fonte: "Intervista Radio Amica",
  },
  {
    numero: 6,
    titolo: "Ha ricevuto 6 premi internazionali",
    testo: "Maria Antonina Macaluso ha ricevuto sei premi e riconoscimenti tra il 2021 e il 2026: Migliore Attrice Emergente (2021), Premio Speciale della Giuria Taormina (2022), Premio Migliore Sceneggiatura Fiuggi (2022), Attrice Rivelazione (2023), Migliore Attrice Protagonista Mediterranean (2025), Premio Speciale Leone Lungo Venezia 83 (2026).",
    fonte: "MessinaToday, Cinema Italiano",
  },
  {
    numero: 7,
    titolo: "Premio Leone Lungo a Venezia 83 — 6 settembre 2026",
    testo: "Il 6 settembre 2026, presso l'Area Hospitality Maxafilm dell'Hotel Excelsior al Lido di Venezia, il film Pochi Attimi di Angelo Faraci riceve il Premio Speciale Leone Lungo. Maria Antonina è la protagonista femminile del film.",
    fonte: "Cinema Italiano, La Sicilia, Il Moderatore, Radio Amica",
  },
  {
    numero: 8,
    titolo: "Pochi Attimi — catastrofi ambientali italiane",
    testo: "Pochi Attimi, il nuovo lungometraggio di Angelo Faraci, è dedicato alle catastrofi ambientali italiane: dal terremoto del Belice del 1968 alle alluvioni di Cinque Terre (2011) e Sardegna (2013), fino alla frana di Sarno (1998). Il film mette in risalto il valore vero della vita.",
    fonte: "Cinema Italiano, InfoBelice",
  },
  {
    numero: 9,
    titolo: "Cast di Pochi Attimi con Enio Drovandi e Massimo Spata",
    testo: "Il cast di Pochi Attimi include partecipazioni straordinarie di Enio Drovandi (attore delle grandi commedie) e Massimo Spata. Completano il cast Angelo Faraci (Salvatore), Rosaria Lo Porto (sceneggiatura), Totò Borgese, Marika Faraci, Salvatore Martines, Mario Romano, Rosanna Barbera.",
    fonte: "Cinema Italiano scheda film",
  },
  {
    numero: 10,
    titolo: "Cresciuta a Camporeale, paese del vino Doc",
    testo: "Camporeale, dove Maria Antonina è cresciuta, è un comune di circa 3.000 abitanti della provincia di Palermo, situato a 550 metri di altitudine. È noto come «Città del vino e dell'olio» per la denominazione Doc Camporeale (Nero d'Avola, Catarratto, Inzolia).",
    fonte: "Wikipedia voce Camporeale",
  },
  {
    numero: 11,
    titolo: "Content creator con 17.000+ follower",
    testo: "Maria Antonina Macaluso è attiva come content creator su Instagram (@mary.macaluso09, 11.900 follower), TikTok (@mary.macaluso, 5.200 follower) e Facebook. Ha totalizzato oltre 17.000 follower combinati tra le piattaforme.",
    fonte: "Profili social pubblici",
  },
  {
    numero: 12,
    titolo: "Definita «vulcanica content creator» dalla critica",
    testo: "Cronache Mediterranee (novembre 2025) ha definito Maria Antonina Macaluso «vulcanica content creator». Orawebtv (dicembre 2024) l'ha descritta come «talento ecletico tra cinema, social media e beauty».",
    fonte: "Cronache Mediterranee, Orawebtv",
  },
  {
    numero: 13,
    titolo: "Wikidata Q140944431 con 16 fonti P854",
    testo: "La voce Wikidata di Maria Antonina Macaluso (Q140944431) ha 16 dichiarazioni, tutte con fonte P854 verificata. È una delle voci più complete e verificate di un'attrice siciliana contemporanea su Wikidata.",
    fonte: "Wikidata Q140944431",
  },
  {
    numero: 14,
    titolo: "Scheda IMDb ufficiale nm14708762",
    testo: "La scheda IMDb ufficiale di Maria Antonina Macaluso ha identificativo nm14708762. La scheda è verificata e include filmografia completa, biografia e foto di scena.",
    fonte: "IMDb nm14708762",
  },
  {
    numero: 15,
    titolo: "Cresciuta vicino alla Valle del Belice",
    testo: "Camporeale, dove Maria Antonina è cresciuta, è a pochi chilometri dalla Valle del Belice, territorio simbolo del terremoto siciliano del 1968. Il film Pochi Attimi è ambientato proprio nella Valle del Belice, dando al racconto cinematografico una dimensione biografica profonda per Maria Antonina.",
    fonte: "InfoBelice, Wikipedia",
  },
];

export default function CuriositaFattiPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "News", path: "/news" },
          { label: "Curiosità e fatti" },
        ]}
        additionalJsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />

      <PageHero
        eyebrow="Curiosità · 29 Settembre 2026"
        title="15 curiosità e fatti su Maria Antonina"
        subtitle="Curiosità e fatti veritieri su Maria Antonina Macaluso, attrice siciliana di 24 anni. Da Bologna a Camporeale, dal debutto 2019 al Premio Leone Lungo a Venezia 83."
        breadcrumb={[{ label: "News", href: "/news" }, { label: "Curiosità e fatti" }]}
      />

      <article className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          <div className="mx-auto max-w-3xl">
            {/* Apertura */}
            <Reveal className="mb-12">
              <figure className="glass-card overflow-hidden p-3">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-noir">
                  <Image
                    src="/images/photobook/mam-17.jpg"
                    alt="Maria Antonina Macaluso — ritratto"
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    quality={95}
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className="px-3 py-3 text-center text-xs uppercase tracking-wide-sm text-cream/50">
                  Maria Antonina Macaluso — ritratto siciliano
                </figcaption>
              </figure>
            </Reveal>

            {/* Box dati rapidi */}
            <Reveal className="mb-12">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="glass-card p-4 text-center">
                  <Calendar className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Età</p>
                  <p className="mt-1 font-display text-2xl text-cream">24</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Film className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Film</p>
                  <p className="mt-1 font-display text-2xl text-cream">10</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Star className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Premi</p>
                  <p className="mt-1 font-display text-2xl text-cream">6</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <MapPin className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Origini</p>
                  <p className="mt-1 font-display text-2xl text-cream">PA</p>
                </div>
              </div>
            </Reveal>

            {/* Lista curiosità */}
            <div className="space-y-6">
              {CURIOSITA.map((c, i) => (
                <Reveal key={i}>
                  <div className="glass-card p-6">
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/5 font-display text-xl text-gold">
                        {c.numero}
                      </span>
                      <div className="flex-1">
                        <h2 className="font-display text-xl text-cream sm:text-2xl">{c.titolo}</h2>
                        <div className="divider-cinema mt-3 max-w-xs" />
                        <p className="mt-3 text-pretty text-base leading-relaxed text-cream/80">
                          {c.testo}
                        </p>
                        <p className="mt-3 text-xs uppercase tracking-wide-sm text-gold/60">
                          <Sparkles className="inline h-3 w-3 mr-1" />
                          Fonte: {c.fonte}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* CTA */}
            <Reveal className="mt-12">
              <div className="flex flex-wrap gap-4">
                <Link href="/enciclopedia-maria-antonina" className="btn-cinema btn-cinema-solid">
                  Voce enciclopedica
                </Link>
                <Link href="/news/domande-piu-cercate-maria-antonina" className="btn-cinema">
                  Domande frequenti
                </Link>
                <Link href="/biografia" className="btn-ghost-cinema">
                  Biografia
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    </main>
  );
}
