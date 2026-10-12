import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SeoBoost from "@/components/site/SeoBoost";
import { Reveal } from "@/components/cinematic/Reveal";
import { HelpCircle, ExternalLink, Calendar, MapPin } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Domande frequenti su Maria Antonina Macaluso",
  description: "Le 10 domande più cercate su Maria Antonina Macaluso con risposte verificate: chi è, dove è nata, qual è la sua filmografia, fidanzato Angelo Faraci, Camporeale, Pochi Attimi Venezia 83.",
  alternates: { canonical: "/news/domande-piu-cercate-maria-antonina" },
  openGraph: {
    title: "10 domande frequenti su Maria Antonina Macaluso (risposte verificate)",
    description: "Le domande più cercate su Google su Maria Antonina Macaluso con risposte basate su fonti verificate.",
    images: [{ url: "/images/photobook/mam-09.jpg", width: 1025, height: 1280, alt: "Maria Antonina Macaluso" }],
    type: "article",
    publishedTime: "2026-09-29T11:00:00Z",
    authors: ["Enciclopedia digitale Maria Antonina Macaluso"],
  },
};

const qaJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  url: `${SITE.url}/news/domande-piu-cercate-maria-antonina`,
  inLanguage: "it-IT",
  mainEntity: [
    {
      "@type": "Question",
      name: "Chi è Maria Antonina Macaluso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maria Antonina Macaluso è un'attrice italiana nata a Bologna il 9 novembre 2001 e cresciuta a Camporeale (Palermo). Ha debuttato nel 2019 con la fiction Sky 'Ciò che non ti ho detto' diretta da Angelo Faraci. Fonte: IMDb nm14708762, Wikidata Q140944431.",
      },
    },
    {
      "@type": "Question",
      name: "Dove è nata Maria Antonina Macaluso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maria Antonina Macaluso è nata a Bologna il 9 novembre 2001. È cresciuta a Camporeale, paesino della provincia di Palermo in Sicilia. Fonte: Wikidata Q140944431 con 16 fonti P854 verificate.",
      },
    },
    {
      "@type": "Question",
      name: "Quanti anni ha Maria Antonina Macaluso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maria Antonina Macaluso compie 24 anni nel 2026 (nata il 9 novembre 2001). Fonte: data di nascita verificata su Wikidata Q140944431 e IMDb nm14708762.",
      },
    },
    {
      "@type": "Question",
      name: "Qual è la filmografia di Maria Antonina Macaluso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maria Antonina Macaluso ha interpretato 10 produzioni dal 2019 al 2026: Ciò che non ti ho detto (2019, Sky), Don't Be Silent (2020, Rai Cinema), Provvidenza (2021, Rai Cinema), Pietrazita (2023, Rai Cinema), Separati Mai (2023-2024, Rai Cinema), Sabbie Nere (2023, Mediaset), Vanina (2024, Canale 5), Il Mistero di Spartivento (2024-2025, Rai Cinema), Eccellenza Siciliana (2025), Pochi Attimi (2026). Fonte: IMDb nm14708762.",
      },
    },
    {
      "@type": "Question",
      name: "Chi è il fidanzato di Maria Antonina Macaluso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maria Antonina Macaluso è compagna artistica e di vita del regista Angelo Faraci dal 14 agosto 2019. Angelo Faraci è nato a Palermo il 13 agosto 1989 ed è regista, attore e produttore. Il sodalizio artistico dura dal 2019 ed ha prodotto 10 film insieme. Fonte: intervista Radio Amica.",
      },
    },
    {
      "@type": "Question",
      name: "Di cosa parla il film Pochi Attimi?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pochi Attimi è il nuovo lungometraggio di Angelo Faraci dedicato alle catastrofi ambientali italiane (terremoto del Belice 1968, alluvioni, frane). Il film mette in risalto il valore vero della vita. Maria Antonina Macaluso è la protagonista femminile. Fonte: Cinema Italiano, InfoBelice.",
      },
    },
    {
      "@type": "Question",
      name: "Qual è il premio più importante ricevuto da Maria Antonina Macaluso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il Premio Speciale Leone Lungo, ricevuto il 6 settembre 2026 alla 83ª Mostra del Cinema di Venezia per il film Pochi Attimi di Angelo Faraci. Il premio è stato consegnato all'Area Hospitality Maxafilm dell'Hotel Excelsior al Lido di Venezia. Fonte: Cinema Italiano, La Sicilia, Il Moderatore, Radio Amica, Radio Una Voce Vicina.",
      },
    },
    {
      "@type": "Question",
      name: "Da dove viene Maria Antonina Macaluso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maria Antonina Macaluso è cresciuta a Camporeale, paesino della provincia di Palermo in Sicilia, tra le colline dell'entroterra siciliano. Camporeale è nota per il vino Doc (Nero d'Avola, Catarratto), l'olio extravergine d'oliva e il grano duro. Fonte: Wikipedia voce Camporeale.",
      },
    },
    {
      "@type": "Question",
      name: "Qual è l'Instagram di Maria Antonina Macaluso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maria Antonina Macaluso è su Instagram (@mary.macaluso09, 11.900 follower), TikTok (@mary.macaluso, 5.200 follower) e Facebook (@mary.macaluso.16). Fonte: link verificati sui profili social pubblici.",
      },
    },
    {
      "@type": "Question",
      name: "Quando è iniziata la carriera di Maria Antonina Macaluso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maria Antonina Macaluso ha debuttato nel 2019 con la fiction Sky 'Ciò che non ti ho detto' diretta da Angelo Faraci. La fiction è l'unica serie TV italiana con cast composto esclusivamente da siciliani. Fonte: IMDb nm14708762.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "News", item: `${SITE.url}/news` },
    { "@type": "ListItem", position: 3, name: "Domande frequenti", item: `${SITE.url}/news/domande-piu-cercate-maria-antonina` },
  ],
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Le 10 domande più cercate su Maria Antonina Macaluso (con risposte verificate)",
  description: "Domande frequenti su Maria Antonina Macaluso: chi è, dove è nata, età, filmografia, fidanzato, Pochi Attimi, Venezia 83.",
  image: [`${SITE.url}/images/photobook/mam-09.jpg`],
  datePublished: "2026-09-29T11:00:00Z",
  author: { "@type": "Organization", name: "Enciclopedia digitale Maria Antonina Macaluso", url: SITE.url },
  publisher: { "@type": "Organization", name: "Enciclopedia digitale Maria Antonina Macaluso", url: SITE.url },
  url: `${SITE.url}/news/domande-piu-cercate-maria-antonina`,
  mainEntityOfPage: { "@type": "WebPage", url: `${SITE.url}/news/domande-piu-cercate-maria-antonina` },
  about: [{ "@type": "Person", name: "Maria Antonina Macaluso" }],
  inLanguage: "it-IT",
  articleSection: "FAQ",
  keywords: ["Maria Antonina Macaluso chi è", "Maria Antonina Macaluso età", "Maria Antonina Macaluso fidanzato", "Maria Antonina Macaluso Instagram", "Pochi Attimi Angelo Faraci", "Camporeale attrice"],
};

const DOMANDE = [
  {
    domanda: "Chi è Maria Antonina Macaluso?",
    risposta: "Maria Antonina Macaluso è un'attrice italiana nata a Bologna il 9 novembre 2001 e cresciuta a Camporeale (Palermo). Ha debuttato nel 2019 con la fiction Sky «Ciò che non ti ho detto» diretta da Angelo Faraci. In otto anni di carriera ha interpretato dieci produzioni cinematografiche e televisive.",
    fonte: "IMDb nm14708762, Wikidata Q140944431",
    fonteUrl: "https://www.imdb.com/it/name/nm14708762",
  },
  {
    domanda: "Dove è nata Maria Antonina Macaluso?",
    risposta: "Maria Antonina Macaluso è nata a Bologna il 9 novembre 2001. È cresciuta a Camporeale, paesino della provincia di Palermo in Sicilia, tra le colline dell'entroterra siciliano. Camporeale è noto per il vino Doc, l'olio extravergine d'oliva e il grano duro.",
    fonte: "Wikidata Q140944431 (16/16 fonti P854)",
    fonteUrl: "https://www.wikidata.org/wiki/Q140944431",
  },
  {
    domanda: "Quanti anni ha Maria Antonina Macaluso?",
    risposta: "Maria Antonina Macaluso compie 24 anni nel 2026 (nata il 9 novembre 2001). Ad agosto 2026 ha ricevuto il Premio Speciale Leone Lungo alla 83ª Mostra del Cinema di Venezia, a 24 anni compiuti da novembre 2025.",
    fonte: "Wikidata Q140944431",
    fonteUrl: "https://www.wikidata.org/wiki/Q140944431",
  },
  {
    domanda: "Qual è la filmografia completa di Maria Antonina Macaluso?",
    risposta: "Maria Antonina Macaluso ha interpretato 10 produzioni dal 2019 al 2026: Ciò che non ti ho detto (2019, Sky), Don't Be Silent (2020, Rai Cinema), Provvidenza (2021, Rai Cinema), Pietrazita (2023, Rai Cinema), Separati Mai (2023-2024, Rai Cinema), Sabbie Nere (2023, Mediaset), Vanina (2024, Canale 5), Il Mistero di Spartivento (2024-2025, Rai Cinema), Eccellenza Siciliana (2025), Pochi Attimi (2026).",
    fonte: "IMDb nm14708762",
    fonteUrl: "https://www.imdb.com/it/name/nm14708762",
  },
  {
    domanda: "Chi è il fidanzato di Maria Antonina Macaluso?",
    risposta: "Maria Antonina Macaluso è compagna artistica e di vita del regista Angelo Faraci dal 14 agosto 2019. Angelo Faraci è nato a Palermo il 13 agosto 1989 ed è regista, attore e produttore. Il sodalizio artistico dura dal 2019 ed ha prodotto 10 film insieme. Angelo ha una enciclopedia digitale dedicata su angelo-faraci.vercel.app.",
    fonte: "Intervista Radio Amica storica",
    fonteUrl: "https://www.radioamica.it/da-un-piccolo-comune-allincontro-con-lattore-regista-angelo-faraci-lattrice-camporealese-maria-antonina-macaluso-si-racconta",
  },
  {
    domanda: "Di cosa parla il film Pochi Attimi?",
    risposta: "Pochi Attimi è il nuovo lungometraggio di Angelo Faraci dedicato alle catastrofi ambientali italiane — dal terremoto del Belice del 1968 alle alluvioni recenti. Il film mette in risalto il valore vero della vita. Maria Antonina Macaluso è la protagonista femminile, accanto ad Angelo Faraci che interpreta Salvatore. Cast: Rosaria Lo Porto, Totò Borgese, Marika Faraci, Salvatore Martines, Mario Romano, Rosanna Barbera, Enio Drovandi, Massimo Spata.",
    fonte: "Cinema Italiano, InfoBelice, CastingNews.eu",
    fonteUrl: "https://www.cinemaitaliano.info/film/38844/festival/pochi-attimi.html",
  },
  {
    domanda: "Qual è il premio più importante ricevuto da Maria Antonina Macaluso?",
    risposta: "Il Premio Speciale Leone Lungo, ricevuto il 6 settembre 2026 alla 83ª Mostra del Cinema di Venezia per il film Pochi Attimi di Angelo Faraci. Il premio è stato consegnato presso l'Area Hospitality Maxafilm dell'Hotel Excelsior al Lido di Venezia. È ideato da Donato Pugliese (Presidente Maxa Film srl) con l'associazione di terzo settore Le Stelle del Sud.",
    fonte: "Cinema Italiano, La Sicilia, Il Moderatore, Radio Amica, Radio Una Voce Vicina",
    fonteUrl: "https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html",
  },
  {
    domanda: "Da dove viene Maria Antonina Macaluso?",
    risposta: "Maria Antonina Macaluso è cresciuta a Camporeale, paesino della provincia di Palermo in Sicilia, tra le colline dell'entroterra siciliano. Camporeale è un comune di circa 3.000 abitanti situato a 550 metri di altitudine, noto per la produzione di vino Doc (Nero d'Avola, Catarratto, Inzolia), olio extravergine d'oliva e grano duro.",
    fonte: "Wikipedia voce Camporeale",
    fonteUrl: "https://it.wikipedia.org/wiki/Camporeale",
  },
  {
    domanda: "Qual è l'Instagram di Maria Antonina Macaluso?",
    risposta: "Maria Antonina Macaluso è attiva come content creator su Instagram (@mary.macaluso09, 11.900 follower), TikTok (@mary.macaluso, 5.200 follower) e Facebook (@mary.macaluso.16). La critica l'ha definita 'vulcanica content creator' (Cronache Mediterranee 2025) e 'talento ecletico tra cinema, social media e beauty' (Orawebtv 2025).",
    fonte: "Profili social pubblici verificati, Cronache Mediterranee, Orawebtv",
    fonteUrl: "https://cronachemediterranee.net/vulcanica-content-creator-maria-antonina-macaluso",
  },
  {
    domanda: "Quando è iniziata la carriera di Maria Antonina Macaluso?",
    risposta: "Maria Antonina Macaluso ha debuttato nel 2019 con la fiction Sky «Ciò che non ti ho detto» diretta da Angelo Faraci. La fiction è l'unica serie TV italiana con cast composto esclusivamente da siciliani e volti isolani noti. Angelo Faraci è attore protagonista nel ruolo di Gaetano Scalici per cinque anni consecutivi.",
    fonte: "IMDb nm14708762",
    fonteUrl: "https://www.imdb.com/it/name/nm14708762",
  },
];

export default function DomandeFrequentiPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "News", path: "/news" },
          { label: "Domande frequenti" },
        ]}
        additionalJsonLd={[articleJsonLd, breadcrumbJsonLd, qaJsonLd]}
      />

      <PageHero
        eyebrow="FAQ · 29 Settembre 2026"
        title="10 domande frequenti su Maria Antonina"
        subtitle="Le domande più cercate su Google su Maria Antonina Macaluso, con risposte verificate da fonti pubbliche autorevoli (IMDb, Wikidata, giornali siciliani)."
        breadcrumb={[{ label: "News", href: "/news" }, { label: "Domande frequenti" }]}
      />

      <article className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          <div className="mx-auto max-w-3xl">
            {/* Apertura */}
            <Reveal className="mb-12">
              <div className="rounded-lg border border-gold/40 bg-gold/5 p-6">
                <div className="flex items-start gap-3">
                  <HelpCircle className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h2 className="font-display text-base text-gold">Domande più cercate su Google</h2>
                    <p className="mt-2 text-sm leading-relaxed text-cream/80">
                      Questa pagina raccoglie le 10 domande più frequenti su Maria Antonina
                      Macaluso, con risposte basate esclusivamente su fonti verificate e
                      pubblici. Ogni risposta cita la fonte originale.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Domande e risposte */}
            {DOMANDE.map((d, i) => (
              <Reveal key={i} className="mb-8">
                <div className="glass-card p-6">
                  <h2 className="font-display text-xl text-gradient-gold sm:text-2xl">
                    {i + 1}. {d.domanda}
                  </h2>
                  <div className="divider-cinema mt-4 max-w-xs" />
                  <p className="mt-4 text-pretty text-base leading-relaxed text-cream/80">
                    {d.risposta}
                  </p>
                  <a
                    href={d.fonteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-xs text-gold/70 hover:text-gold"
                  >
                    <strong className="uppercase tracking-wide-sm text-[11px]">Fonte: {d.fonte}</strong>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </Reveal>
            ))}

            {/* Box dati rapidi */}
            <Reveal className="mb-12">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="glass-card p-4 text-center">
                  <Calendar className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Nata</p>
                  <p className="mt-1 font-display text-base text-cream">9 nov 2001</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <MapPin className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Cresciuta</p>
                  <p className="mt-1 font-display text-base text-cream">Camporeale</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <HelpCircle className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Film</p>
                  <p className="mt-1 font-display text-base text-cream">10 produzioni</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <HelpCircle className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Premi</p>
                  <p className="mt-1 font-display text-base text-cream">6 riconoscimenti</p>
                </div>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal>
              <div className="flex flex-wrap gap-4">
                <Link href="/enciclopedia-maria-antonina" className="btn-cinema btn-cinema-solid">
                  Voce enciclopedica
                </Link>
                <Link href="/biografia" className="btn-cinema">
                  Biografia completa
                </Link>
                <Link href="/faq" className="btn-ghost-cinema">
                  FAQ generale
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    </main>
  );
}
