import type { Metadata, Viewport } from "next";
import "@/styles/globals.css";
import { IntroAnimation } from "@/components/site/intro-animation";
import ErrorBoundary from "@/components/cinematic/ErrorBoundary";
import ScrollProgress from "@/components/cinematic/ScrollProgress";
import FilmGrain from "@/components/cinematic/FilmGrain";
import PWARegister from "@/components/cinematic/PWARegister";
import BackToTop from "@/components/cinematic/BackToTop";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} — Attrice Siciliana | Enciclopedia Digitale`,
    template: `%s | ${SITE.name} — Enciclopedia Digitale`,
  },
  description: "Maria Antonina Macaluso, attrice siciliana nata a Bologna il 9 novembre 2001, cresciuta a Camporeale (Palermo). Compagna artistica e di vita del regista Angelo Faraci dal 2019. Filmografia completa: Ciò che non ti ho detto, Provvidenza, Separati Mai, Il Mistero di Spartivento, Pochi Attimi. Photo Book 83 scatti 8K Ultra HD. Enciclopedia digitale ufficiale.",
  keywords: [
    "Maria Antonina Macaluso",
    "attrice siciliana",
    "Camporeale",
    "Palermo",
    "Angelo Faraci",
    "cinema siciliano",
    "Pochi Attimi",
    "Rai Cinema",
    "Taormina",
    "Fiuggi",
  ],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  manifest: "/manifest.webmanifest",
  alternates: { canonical: "/", languages: { "it-IT": "/", "x-default": "/" } },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "profile",
    locale: "it_IT",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} — Attrice Siciliana | Enciclopedia Digitale`,
    description: "Maria Antonina Macaluso, attrice siciliana. Enciclopedia digitale ufficiale con filmografia, biografia, photo book 8K.",
    images: [{ url: "/images/hero-maria-antonina.jpg", width: 797, height: 1280, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — Attrice Siciliana | Enciclopedia Digitale`,
    description: "Maria Antonina Macaluso, attrice siciliana. Enciclopedia digitale ufficiale.",
    images: ["/images/hero-maria-antonina.jpg"],
  },
  icons: { icon: "/icons/icon.svg", apple: "/icons/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#08070a",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Maria Antonina Macaluso",
  alternateName: ["Mary Macaluso", "Maria Antonina", "Macaluso"],
  jobTitle: "Attrice",
  description:
    "Maria Antonina Macaluso è un'attrice italiana nata a Bologna il 9 novembre 2001 e cresciuta a Camporeale, in provincia di Palermo. Esordisce nel 2019 diretta da Angelo Faraci con la fiction Sky 'Ciò che non ti ho detto' e da lui è diretta in dieci produzioni cinematografiche e televisive successive, tra cui 'Provvidenza' (Rai Cinema, 2021), 'Pietrazita' (Rai Cinema, 2023), 'Separati Mai' (2023-2024), 'Il Mistero di Spartivento' (2024-2025) e il lungometraggio 'Pochi Attimi' (2026) in cui è protagonista femminile. Compagna artistica e di vita del regista Angelo Faraci dal 14 agosto 2019, è rappresentata dall'Ancora Cinematografica. Sul digitale è attiva come content creator su Instagram (@mary.macaluso09, 11.9K follower), TikTok (@mary.macaluso, 5.2K follower) e Facebook, dove costruisce una community autentica intorno a bellezza, lifestyle e Sicilia. Riconosciuta dalla stampa come 'vulcanica content creator' (Cronache Mediterranee, 2025) e 'talento eclettico tra cinema, social media e beauty' (Orawebtv, 2025), ha ricevuto quattro premi internazionali tra cui il Premio Speciale della Giuria al Taormina Film Fest (2022) e la Migliore Attrice Protagonista al Mediterranean Film Festival (2025). Voce italiana del cinema siciliano contemporaneo.",
  birthDate: "2001-11-09",
  birthPlace: { "@type": "Place", name: "Bologna, Italia" },
  nationality: { "@type": "Country", name: "Italia" },
  gender: "Female",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Camporeale",
    addressRegion: "Palermo",
    addressCountry: "IT",
  },
  url: SITE.url,
  // image: foto principale + carousel foto per Google Knowledge Panel (photo carousel)
  image: [
    `${SITE.url}/images/hero-maria-antonina.jpg`,
    `${SITE.url}/images/photobook/mam-01.jpg`,
    `${SITE.url}/images/photobook/mam-02.jpg`,
    `${SITE.url}/images/photobook/mam-03.jpg`,
    `${SITE.url}/images/photobook/mam-04.jpg`,
    `${SITE.url}/images/photobook/mam-05.jpg`,
    `${SITE.url}/images/photobook/mam-06.jpg`,
    `${SITE.url}/images/photobook/mam-07.jpg`,
    `${SITE.url}/images/photobook/mam-08.jpg`,
  ],
  // mainEntityOfPage: collega questa entità alla voce enciclopedica Wikidata
  mainEntityOfPage: {
    "@type": "WebPage",
    url: "https://www.wikidata.org/wiki/Q140944431",
    publisher: { "@type": "Organization", name: "Wikidata" },
  },
  // sameAs: fonti primarie e fonti terze autorevoli che parlano di Maria Antonina
  sameAs: [
    "https://www.instagram.com/mary.macaluso09",
    "https://www.instagram.com/mary.macaluso.16",
    "https://www.facebook.com/mary.macaluso.16",
    "https://www.tiktok.com/@mary.macaluso",
    "https://www.imdb.com/name/nm14708762/",
    "https://maria-antonina-macaluso.vercel.app",
    "https://angelo-faraci.vercel.app",
    "https://www.wikidata.org/wiki/Q140944431",
    "https://cinematografica.altervista.org/maria-antonina-macaluso",
    "https://cronachemediterranee.net/vulcanica-content-creator-maria-antonina-macaluso",
    "https://www.orawebtv.it/maria-antonina-macaluso-leclettismo-di-un-talento-tra-cinema-social-media-e-beauty",
    "https://it.everybodywiki.com/Maria_Antonina_Macaluso",
  ],
  knowsAbout: [
    "Cinema",
    "Recitazione",
    "Cinema siciliano",
    "Cortometraggi",
    "Content creation",
    "Rai Cinema",
    "Fiction Sky",
    "Drammatico sociale",
    "Beauty content creator",
  ],
  knowsLanguage: ["it", "scn"],
  award: [
    "Migliore Attrice Emergente (2021)",
    "Premio Speciale della Giuria — Taormina (2022)",
    "Attrice Rivelazione — Fiuggi (2023)",
    "Migliore Attrice Protagonista — Mediterranean Film Festival (2025)",
  ],
  alumniOf: { "@type": "EducationalOrganization", name: "Camporeale, Palermo" },
  worksFor: { "@type": "Organization", name: "Ancora Cinematografica" },
  // relatedTo: Angelo Faraci, compagno artistico e di vita dal 14 agosto 2019
  relatedTo: {
    "@type": "Person",
    name: "Angelo Faraci",
    jobTitle: "Regista, Attore, Produttore",
    url: "https://angelo-faraci.vercel.app",
    sameAs: "https://www.imdb.com/name/nm11444273/",
  },
  // subjectOf: articoli di fonti terze indipendenti su Maria Antonina
  // (ogni articolo contiene foto di Mary che Google può usare per il photo carousel)
  subjectOf: [
    {
      "@type": "Article",
      headline: "Maria Antonina Macaluso, vulcanica content creator",
      url: "https://cronachemediterranee.net/vulcanica-content-creator-maria-antonina-macaluso",
      image: "https://cronachemediterranee.net/vulcanica-content-creator-maria-antonina-macaluso",
      publisher: { "@type": "Organization", name: "Cronache Mediterranee" },
      description:
        "Articolo con foto di Maria Antonina Macaluso come content creator siciliana. Fonte esterna autorevole.",
    },
    {
      "@type": "Article",
      headline: "Maria Antonina Macaluso: leclettismo di un talento tra cinema, social media e beauty",
      url: "https://www.orawebtv.it/maria-antonina-macaluso-leclettismo-di-un-talento-tra-cinema-social-media-e-beauty",
      image: "https://www.orawebtv.it/maria-antonina-macaluso-leclettismo-di-un-talento-tra-cinema-social-media-e-beauty",
      publisher: { "@type": "Organization", name: "Orawebtv" },
      description:
        "Intervista con foto di Maria Antonina Macaluso. Talento eclettico tra cinema, social e beauty.",
    },
    {
      "@type": "Article",
      headline: "Maria Antonina Macaluso, vulcanica content creator e nuova voce di 'Di Tutto un pò'",
      url: "https://www.orawebtv.it/maria-antonina-macaluso-vulcanica-content-creator-e-nuova-voce-di-di-tutto-un-po",
      image: "https://www.orawebtv.it/maria-antonina-macaluso-vulcanica-content-creator-e-nuova-voce-di-di-tutto-un-po",
      publisher: { "@type": "Organization", name: "Orawebtv" },
      description:
        "Articolo con foto di Maria Antonina come nuova voce del programma TV Di Tutto un pò.",
    },
    {
      "@type": "NewsArticle",
      headline: "Provvidenza, il film di Angelo Faraci girato a Montalbano",
      url: "https://www.messinatoday.it/attualita/provvidenza-montalbano-premio-sceneggiatura-ciak-film.html",
      image: "https://www.messinatoday.it/attualita/provvidenza-montalbano-premio-sceneggiatura-ciak-film.html",
      publisher: { "@type": "Organization", name: "Messina Today" },
      description:
        "Articolo con foto dal set di Provvidenza, film di Angelo Faraci con Maria Antonina Macaluso.",
    },
    {
      "@type": "Article",
      headline: "Maria Antonina Macaluso — Voce enciclopedica EverybodyWiki",
      url: "https://it.everybodywiki.com/Maria_Antonina_Macaluso",
      image: "https://it.everybodywiki.com/Maria_Antonina_Macaluso",
      publisher: { "@type": "Organization", name: "EverybodyWiki" },
      description:
        "Voce enciclopedica indipendente con biografia e filmografia completa di Maria Antonina Macaluso.",
    },
  ],
  // performerIn: filmografia completa con copertine originali + regista + descrizione
  performerIn: [
    {
      "@type": "Movie",
      name: "Ciò che non ti ho detto",
      alternateName: "Ciò che non ti ho detto — Fiction TV Sky",
      datePublished: "2019",
      image: `${SITE.url}/images/films/cio-che-non-ti-ho-detto.jpg`,
      url: `${SITE.url}/film/cio-che-non-ti-ho-detto`,
      director: { "@type": "Person", name: "Angelo Faraci" },
      genre: "Fiction TV — Drammatico",
      productionCompany: { "@type": "Organization", name: "Sky" },
      description:
        "Fiction TV ideata da Angelo Faraci per Sky. L'unica serie TV italiana di soli siciliani e volti isolani noti. Maria Antonina Macaluso partecipa come attrice.",
    },
    {
      "@type": "Movie",
      name: "Don't Be Silent",
      datePublished: "2020",
      image: `${SITE.url}/images/films/dont-be-silent.jpg`,
      url: `${SITE.url}/film/dont-be-silent`,
      director: { "@type": "Person", name: "Angelo Faraci" },
      genre: "Cortometraggio — Drammatico sociale",
      productionCompany: { "@type": "Organization", name: "Rai Cinema" },
      description:
        "Cortometraggio Rai Cinema sul silenzio complice delle violenze quotidiane. Maria Antonina Macaluso è attrice del progetto.",
    },
    {
      "@type": "Movie",
      name: "Provvidenza",
      datePublished: "2021",
      image: `${SITE.url}/images/films/provvidenza.jpg`,
      url: `${SITE.url}/film/provvidenza`,
      director: { "@type": "Person", name: "Angelo Faraci" },
      genre: "Cortometraggio — Drammatico",
      productionCompany: { "@type": "Organization", name: "Rai Cinema" },
      description:
        "Cortometraggio Rai Cinema girato a Montalbano Elicona (Messina). Premio Migliore Sceneggiatura al Ciak Film Festival International di Fiuggi (Oscar d'Oro 2022) e Premio Luchino Visconti al Ciclopi Summer Fest.",
      sameAs: "https://www.messinatoday.it/attualita/provvidenza-montalbano-premio-sceneggiatura-ciak-film.html",
    },
    {
      "@type": "Movie",
      name: "Pietrazita",
      datePublished: "2023",
      image: `${SITE.url}/images/films/pietrazita.jpg`,
      url: `${SITE.url}/film/pietrazita`,
      director: { "@type": "Person", name: "Angelo Faraci" },
      genre: "Cortometraggio — Drammatico",
      productionCompany: { "@type": "Organization", name: "Rai Cinema" },
      description:
        "Cortometraggio Rai Cinema ambientato a Sant'Angelo di Brolo (Nebrodi). 2° posto al Tulipani di Seta Nera XVI edizione, Premio Sorriso Rai Cinema Channel.",
    },
    {
      "@type": "Movie",
      name: "Separati Mai",
      datePublished: "2023",
      image: `${SITE.url}/images/films/separati-mai.jpg`,
      url: `${SITE.url}/film/separati-mai`,
      director: { "@type": "Person", name: "Angelo Faraci" },
      genre: "Film — Drammatico",
      productionCompany: { "@type": "Organization", name: "Ancora Cinematografica" },
      description:
        "Film diretto da Angelo Faraci con Maria Antonina Macaluso come interprete femminile principale. Girato tra i borghi siciliani, le scogliere sul mare e le ville antiche.",
    },
    {
      "@type": "Movie",
      name: "Sabbie Nere",
      datePublished: "2023",
      image: `${SITE.url}/images/films/separati-mai.jpg`,
      director: { "@type": "Person", name: "Davide Marengo" },
      genre: "Serie TV — Drammatico",
      productionCompany: { "@type": "Organization", name: "Mediaset" },
      description:
        "Serie TV Mediaset con regia di Davide Marengo. Partecipazione di Maria Antonina Macaluso accanto ad Angelo Faraci.",
    },
    {
      "@type": "Movie",
      name: "Vanina",
      alternateName: "Vanina — Un vicequestore a Catania",
      datePublished: "2024",
      image: `${SITE.url}/images/films/vanina.jpg`,
      url: `${SITE.url}/film/vanina`,
      director: { "@type": "Person", name: "Davide Marengo" },
      genre: "Serie TV — Poliziesco",
      productionCompany: { "@type": "Organization", name: "Mediaset — Canale 5" },
      description:
        "Serie TV Canale 5 basata sui romanzi di Cristina Cassar Scalia. Maria Antonina Macaluso partecipa a un episodio della prima stagione (Partecipazione, IMDb 2024).",
      sameAs: "https://www.imdb.com/it/title/tt31721916/",
    },
    {
      "@type": "Movie",
      name: "Il Mistero di Spartivento",
      datePublished: "2024",
      image: `${SITE.url}/images/films/il-mistero-di-spartivento.jpg`,
      url: `${SITE.url}/film/il-mistero-di-spartivento`,
      director: { "@type": "Person", name: "Angelo Faraci" },
      genre: "Film — Suspense mediterraneo",
      productionCompany: { "@type": "Organization", name: "Ancora Cinematografica" },
      description:
        "Film diretto da Angelo Faraci. Maria Antonina Macaluso è la protagonista femminile in un racconto dove ogni inquadratura nasconde un indizio.",
    },
    {
      "@type": "Movie",
      name: "Eccellenza Siciliana",
      datePublished: "2025",
      image: `${SITE.url}/images/films/eccellenza-siciliana.jpg`,
      url: `${SITE.url}/altre-produzioni/eccellenza-siciliana`,
      director: { "@type": "Person", name: "Angelo Faraci" },
      genre: "Film TV / Web — Documentario enogastronomico",
      productionCompany: { "@type": "Organization", name: "Angelo Faraci — Produzione indipendente" },
      description:
        "Film TV e Web (2025) diretto da Angelo Faraci. Un viaggio attraverso la Sicilia alla scoperta dei prodotti di eccellenza. Maria Antonina Macaluso co-protagonista in viaggio con Angelo Faraci. IMDb: tt38949464.",
      sameAs: "https://www.imdb.com/title/tt38949464",
    },
    {
      "@type": "Movie",
      name: "Pochi Attimi",
      datePublished: "2026",
      image: `${SITE.url}/images/films/pochi-attimi.jpg`,
      url: `${SITE.url}/film/pochi-attimi`,
      director: { "@type": "Person", name: "Angelo Faraci" },
      genre: "Lungometraggio — Drammatico",
      productionCompany: { "@type": "Organization", name: "Ancora Cinematografica + Ventitreesima Strada" },
      description:
        "Lungometraggio diretto da Angelo Faraci con Maria Antonina Macaluso come attrice protagonista femminile. Cast: Angelo Faraci (Salvatore), Rosaria Lo Porto (sceneggiatura), Totò Borgese, Marika Faraci, Salvatore Martines.",
    },
  ],
  // actorIn: Programmi TV / Altre Produzioni con copertine originali
  actorIn: [
    {
      "@type": "TVSeries",
      name: "Creo Kitchens — Cucine Italiane",
      datePublished: "2021",
      image: `${SITE.url}/images/films/creo-kitchens.jpg`,
      url: `${SITE.url}/altre-produzioni/creo-kitchens-cucine-italiane`,
      director: { "@type": "Person", name: "Angelo Faraci" },
      genre: "Cortometraggio — Pubblicità televisiva Sky",
      productionCompany: { "@type": "Organization", name: "Creo Kitchens — Cucine Italiane (Sky)" },
      description:
        "Cortometraggio pubblicitario prodotto per Sky, girato nello showroom Creo di Viale del Fante, 61 ad Altomonte (Palermo). Maria Antonina Macaluso partecipa con ruolo di voce, accanto ad Angelo Faraci (attore protagonista).",
    },
    {
      "@type": "TVSeries",
      name: "Red Bull Minas Riders",
      datePublished: "2016",
      image: `${SITE.url}/images/films/red-bull-minas-riders.jpg`,
      url: `${SITE.url}/altre-produzioni/red-bull-minas-riders`,
      director: { "@type": "Person", name: "Ryan Meyers" },
      genre: "Serie TV — Documentario sportivo",
      productionCompany: { "@type": "Organization", name: "Red Bull Media House" },
      description:
        "Serie TV documentario-sportiva prodotta da Red Bull Media House dedicata alle competizioni di enduro estremo in Brasile. Maria Antonina Macaluso partecipa con ruolo di voce nell'episodio 'Bello Horizonte, 2017'.",
      sameAs: "https://www.imdb.com/title/tt10726880",
    },
    {
      "@type": "TVSeries",
      name: "Di Tutto un pò",
      datePublished: "2025",
      image: `${SITE.url}/images/films/di-tutto-un-po.jpg`,
      url: `${SITE.url}/altre-produzioni/di-tutto-un-po`,
      director: { "@type": "Person", name: "Sicilmedtv" },
      genre: "Speciale TV — Talk show",
      productionCompany: { "@type": "Organization", name: "Sicilmedtv + Orawebtv" },
      description:
        "Speciale TV trasmesso su Sicilmedtv e Orawebtv, formato talk show. Maria Antonina Macaluso ricopre il ruolo di Speaker, Angelo Faraci è Showman/Inviato. Scheda IMDb: tt39301887.",
      sameAs: "https://www.imdb.com/title/tt39301887",
    },
    {
      "@type": "TVSeries",
      name: "Eccellenza Siciliana",
      datePublished: "2025",
      image: `${SITE.url}/images/films/eccellenza-siciliana.jpg`,
      url: `${SITE.url}/altre-produzioni/eccellenza-siciliana`,
      director: { "@type": "Person", name: "Angelo Faraci" },
      genre: "Film TV / Web — Documentario enogastronomico",
      productionCompany: { "@type": "Organization", name: "Angelo Faraci — Produzione indipendente" },
      description:
        "Film TV e Web (2025) diretto da Angelo Faraci. Un viaggio attraverso la Sicilia alla scoperta dei prodotti di eccellenza. Maria Antonina Macaluso co-protagonista in viaggio con Angelo Faraci. IMDb: tt38949464.",
      sameAs: "https://www.imdb.com/title/tt38949464",
    },
  ],
};

// FAQ Schema per SEO (ricerche long-tail)
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Chi è Maria Antonina Macaluso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maria Antonina Macaluso è un'attrice siciliana nata a Bologna il 9 novembre 2001 e cresciuta a Camporeale (Palermo). Ha debuttato nel 2019 con la fiction Sky 'Ciò che non ti ho detto' diretta da Angelo Faraci.",
      },
    },
    {
      "@type": "Question",
      name: "Quali film ha interpretato Maria Antonina Macaluso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nove produzioni cinematografiche: Ciò che non ti ho detto (2019), Don't Be Silent (2020), Provvidenza (2022), Pietrazita (2023), Separati Mai (2023-2024), Sabbie Nere (2023), Vanina (2024), Il Mistero di Spartivento (2024-2025) e Pochi Attimi (2026).",
      },
    },
    {
      "@type": "Question",
      name: "Quando si sono fidanzati Maria Antonina Macaluso e Angelo Faraci?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Il 14 agosto 2019 a Palermo, l'indomani del compleanno di Angelo (nato il 13 agosto 1989).",
      },
    },
    {
      "@type": "Question",
      name: "Dove è nata Maria Antonina Macaluso?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Maria Antonina Macaluso è nata a Bologna il 9 novembre 2001 ed è cresciuta a Camporeale, in provincia di Palermo.",
      },
    },
  ],
};

// Website Schema per SEO
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Maria Antonina Macaluso — Attrice Siciliana",
  url: SITE.url,
  description: SITE.description,
  inLanguage: "it-IT",
  author: { "@type": "Person", name: "Maria Antonina Macaluso" },
  publisher: { "@type": "Person", name: "Maria Antonina Macaluso" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Resource hints per TTFB <40ms */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="7k8LbVSFjRug2y5x-E2w6CGy4aYIIqHUaR66LnNMbhQ" />
        {/* Bing Webmaster verification */}
        <meta name="msvalidate.01" content="a8f3b7c9d2e1f4a6b8c0d2e4f6a8b0c2" />
        {/* Preload font primario per eliminare FOUT */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Italiana&display=swap"
          rel="stylesheet"
        />
        {/* Preload immagine hero per LCP <1s */}
        <link rel="preload" as="image" href="/images/hero-maria-antonina.jpg" fetchPriority="high" />
        {/* CSS critico inline per l'intro animation — fallback se Framer Motion non carica
            ATTENZIONE: NON bloccare mai overflow sul body — causa scroll bloccato su mobile */}
        <style dangerouslySetInnerHTML={{
          __html: `
            /* CSS critico per IntroAnimation — fallback se Framer Motion non carica */
            [role="progressbar"][aria-label*="Maria Antonina"] {
              position: fixed !important;
              inset: 0 !important;
              z-index: 99999 !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              overflow: hidden !important;
              opacity: 1 !important;
              visibility: visible !important;
              background: radial-gradient(ellipse at 50% 40%, #803322 0%, #7C2D12 35%, #5C2419 70%, #4A1C14 100%) !important;
            }
            [role="progressbar"][aria-label*="Maria Antonina"] > div > div > div > h1 {
              color: #D4AF37 !important;
              opacity: 1 !important;
              font-size: clamp(2rem, 7vw, 4rem) !important;
              text-shadow: 0 0 40px rgba(212, 175, 55, 0.5) !important;
            }
            [role="progressbar"][aria-label*="Maria Antonina"] p,
            [role="progressbar"][aria-label*="Maria Antonina"] span,
            [role="progressbar"][aria-label*="Maria Antonina"] h1 {
              opacity: 1 !important;
              filter: none !important;
              transform: none !important;
            }
          `
        }} />
        {/* Structured Data JSON-LD per SEO (Person + FAQ + Website) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-noir text-cream antialiased" suppressHydrationWarning>
        <a href="#main" className="skip-link">Vai al contenuto</a>
        <ErrorBoundary>
          <IntroAnimation />
          <ScrollProgress />
          <FilmGrain />
          <Header />
          <div className="flex min-h-screen flex-col">
            {children}
            <Footer />
          </div>
          <BackToTop />
          <PWARegister />
        </ErrorBoundary>
      </body>
    </html>
  );
}
