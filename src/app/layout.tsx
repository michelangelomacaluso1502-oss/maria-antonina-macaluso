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
    default: `Maria Antonina Macaluso — Attrice Siciliana`,
    template: `%s — M.A.M.`,
  },
  description: "Maria Antonina Macaluso, attrice siciliana nata a Bologna il 9 novembre 2001, cresciuta a Camporeale (Palermo). Compagna artistica e di vita del regista Angelo Faraci dal 2019. Filmografia: Ciò che non ti ho detto, Provvidenza, Separati Mai, Pochi Attimi.",
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
    title: `Maria Antonina Macaluso — Attrice Siciliana`,
    description: "Maria Antonina Macaluso, attrice siciliana. Enciclopedia digitale ufficiale con filmografia e photo book.",
    images: [{ url: "/images/hero-maria-antonina.jpg", width: 797, height: 1280, alt: SITE.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `Maria Antonina Macaluso — Attrice Siciliana`,
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
    // === 7 scatti evento Venezia 83 — Premio Leone Lungo ===
    `${SITE.url}/images/venezia/venezia-01.jpg`,
    `${SITE.url}/images/venezia/venezia-02.jpg`,
    `${SITE.url}/images/venezia/venezia-03.jpg`,
    `${SITE.url}/images/venezia/venezia-04.jpg`,
    `${SITE.url}/images/venezia/venezia-05.jpg`,
    `${SITE.url}/images/venezia/venezia-06.jpg`,
    `${SITE.url}/images/venezia/venezia-07.jpg`,
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
    // === Fonti giornalistiche verificate — Premio Leone Lungo Venezia 83 ===
    "https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html",
    "https://www.lasicilia.it/news/santa-margherita-di-belice-trionfa-a-venezia",
    "https://www.ilmoderatore.it/venezia-83-leone-lungo-a-pochi-attimi",
    "https://www.radioamica.it/pochi-attimi-trionfa-a-venezia-la-camporealese-macaluso-e-la-partinicese-quatrosi-portano-la-sicilia-sul-podio-del-cinema/",
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
    "Premio Speciale Leone Lungo — Venezia 83 (6 settembre 2026)",
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
    // === Articoli giornalistici Premio Leone Lungo — Venezia 83 ===
    {
      "@type": "NewsArticle",
      headline: "VENEZIA 83 — A 'Pochi Attimi' il Premio Leone Lungo",
      url: "https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html",
      image: `${SITE.url}/images/venezia/venezia-01.jpg`,
      publisher: { "@type": "Organization", name: "Cinema Italiano" },
      description:
        "Articolo con foto del film Pochi Attimi di Angelo Faraci, con Maria Antonina Macaluso protagonista femminile, premiato alla 83ª Mostra del Cinema di Venezia.",
    },
    {
      "@type": "NewsArticle",
      headline: "Santa Margherita di Belìce trionfa a Venezia",
      url: "https://www.lasicilia.it/news/santa-margherita-di-belice-trionfa-a-venezia",
      image: `${SITE.url}/images/venezia/venezia-05.jpg`,
      publisher: { "@type": "Organization", name: "La Sicilia" },
      description:
        "Articolo con foto dell'evento Venezia 83 — Pochi Attimi di Angelo Faraci con Maria Antonina Macaluso.",
    },
    {
      "@type": "NewsArticle",
      headline: "Venezia 83, Leone Lungo a Pochi Attimi",
      url: "https://www.ilmoderatore.it/venezia-83-leone-lungo-a-pochi-attimi",
      image: `${SITE.url}/images/venezia/venezia-02.jpg`,
      publisher: { "@type": "Organization", name: "Il Moderatore" },
      description:
        "Articolo con foto del conferimento del Premio Leone Lungo al film Pochi Attimi con Maria Antonina Macaluso.",
    },
    {
      "@type": "NewsArticle",
      headline: "«Pochi Attimi» trionfa a Venezia: la camporealese Macaluso e la partinicese Quatrosi portano la Sicilia sul podio del cinema",
      url: "https://www.radioamica.it/pochi-attimi-trionfa-a-venezia-la-camporealese-macaluso-e-la-partinicese-quatrosi-portano-la-sicilia-sul-podio-del-cinema/",
      image: `${SITE.url}/images/venezia/venezia-03.jpg`,
      publisher: { "@type": "Organization", name: "Radio Amica" },
      description:
        "Articolo dettagliato del 19 settembre 2026 sul trionfo di Pochi Attimi alla 83ª Mostra del Cinema di Venezia, con Maria Antonina Macaluso come protagonista femminile. Fonte autorevole siciliana.",
    },
    {
      "@type": "Article",
      headline: "Sodalizio artistico Macaluso-Faraci — 10 film dal 2019 al 2026",
      url: `${SITE.url}/news/sodalizio-maria-antonina-angelo-faraci`,
      image: `${SITE.url}/images/venezia/venezia-03.jpg`,
      publisher: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale" },
      description:
        "Approfondimento originale sul sodalizio artistico e di vita tra Maria Antonina Macaluso e Angelo Faraci, dal primo incontro del 14 agosto 2019 a Palermo fino al Premio Leone Lungo a Venezia 83.",
      datePublished: "2026-09-25T10:00:00Z",
      about: [
        { "@type": "Person", name: "Maria Antonina Macaluso" },
        { "@type": "Person", name: "Angelo Faraci" },
      ],
    },
    {
      "@type": "Article",
      headline: "Cast Pochi Attimi — scheda completa degli interpreti del nuovo film di Angelo Faraci",
      url: `${SITE.url}/news/cast-pochi-attimi`,
      image: `${SITE.url}/images/venezia/venezia-06.jpg`,
      publisher: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale" },
      description:
        "Scheda completa del cast di Pochi Attimi: Maria Antonina Macaluso protagonista femminile, Angelo Faraci, Rosaria Lo Porto, Totò Borgese, Enio Drovandi, Massimo Spata.",
      datePublished: "2026-09-28T09:00:00Z",
      about: [
        { "@type": "Movie", name: "Pochi Attimi" },
        { "@type": "Person", name: "Maria Antonina Macaluso" },
      ],
    },
    {
      "@type": "Article",
      headline: "Catastrofi ambientali italiane — il film Pochi Attimi di Angelo Faraci",
      url: `${SITE.url}/news/catastrofi-ambientali-italiane`,
      image: `${SITE.url}/images/venezia/venezia-05.jpg`,
      publisher: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale" },
      description:
        "Approfondimento delle catastrofi ambientali italiane raccontate nel film Pochi Attimi di Angelo Faraci: dal terremoto del Belice del 1968 alle alluvioni recentissime.",
      datePublished: "2026-09-28T11:00:00Z",
      about: [
        { "@type": "Movie", name: "Pochi Attimi" },
        { "@type": "Place", name: "Valle del Belice" },
      ],
    },
    {
      "@type": "Article",
      headline: "Camporeale — radici siciliane di Maria Antonina Macaluso",
      url: `${SITE.url}/news/camporeale-radici-maria-antonina`,
      image: `${SITE.url}/images/photobook/mam-15.jpg`,
      publisher: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale" },
      description:
        "Approfondimento su Camporeale, paesino della provincia di Palermo dove è cresciuta Maria Antonina Macaluso: storia, cultura, vino e ulivi.",
      datePublished: "2026-09-28T13:00:00Z",
      about: [
        { "@type": "Person", name: "Maria Antonina Macaluso" },
        { "@type": "Place", name: "Camporeale" },
      ],
    },
    {
      "@type": "Article",
      headline: "Intervista a Maria Antonina Macaluso — attrice siciliana di 24 anni",
      url: `${SITE.url}/news/intervista-maria-antonina-macaluso`,
      image: `${SITE.url}/images/venezia/venezia-07.jpg`,
      publisher: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale" },
      description:
        "Intervista a Maria Antonina Macaluso, attrice siciliana nata a Bologna e cresciuta a Camporeale. Dieci film con Angelo Faraci, Premio Leone Lungo a Venezia 83.",
      datePublished: "2026-09-28T15:00:00Z",
      about: [
        { "@type": "Person", name: "Maria Antonina Macaluso" },
        { "@type": "Movie", name: "Pochi Attimi" },
      ],
    },
    {
      "@type": "Article",
      headline: "Ritratto di Maria Antonina Macaluso a 24 anni",
      url: `${SITE.url}/news/ritratto-maria-antonina-24-anni`,
      image: `${SITE.url}/images/photobook/mam-12.jpg`,
      publisher: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale" },
      description:
        "Ritratto umano e artistico di Maria Antonina Macaluso a 24 anni: dieci film, Premio Leone Lungo, content creator, radici siciliane.",
      datePublished: "2026-09-28T16:00:00Z",
      about: [{ "@type": "Person", name: "Maria Antonina Macaluso" }],
    },
    {
      "@type": "Article",
      headline: "Percorso artistico di Maria Antonina Macaluso nel cinema siciliano",
      url: `${SITE.url}/news/percorso-artistico-cinema-sicilia`,
      image: `${SITE.url}/images/venezia/venezia-01.jpg`,
      publisher: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale" },
      description:
        "Approfondimento del percorso artistico di Maria Antonina Macaluso nel cinema siciliano contemporaneo: dal debutto 2019 al Premio Leone Lungo a Venezia 83.",
      datePublished: "2026-09-28T17:00:00Z",
      about: [
        { "@type": "Person", name: "Maria Antonina Macaluso" },
        { "@type": "Person", name: "Angelo Faraci" },
      ],
    },
    {
      "@type": "Article",
      headline: "Angelo Faraci — regista, attore e produttore siciliano",
      url: `${SITE.url}/news/angelo-faraci-regista-siciliano`,
      image: `${SITE.url}/images/venezia/venezia-03.jpg`,
      publisher: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale" },
      description:
        "Biografia di Angelo Faraci, regista siciliano nato a Palermo il 13 agosto 1989. Enciclopedia digitale su angelo-faraci.vercel.app. IMDb nm11444273.",
      datePublished: "2026-09-28T18:00:00Z",
      about: [
        { "@type": "Person", name: "Angelo Faraci", sameAs: "https://www.imdb.com/name/nm11444273/" },
        { "@type": "Person", name: "Maria Antonina Macaluso" },
      ],
    },
    {
      "@type": "Article",
      headline: "Premi e riconoscimenti di Maria Antonina Macaluso — cronologia",
      url: `${SITE.url}/news/premi-riconoscimenti-maria-antonina`,
      image: `${SITE.url}/images/venezia/venezia-05.jpg`,
      publisher: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale" },
      description:
        "Cronologia dei 6 premi e riconoscimenti di Maria Antonina Macaluso dal 2021 al Premio Speciale Leone Lungo a Venezia 83 il 6 settembre 2026.",
      datePublished: "2026-09-28T19:00:00Z",
      about: [{ "@type": "Person", name: "Maria Antonina Macaluso" }],
    },
    {
      "@type": "Article",
      headline: "Valle del Belice — dal terremoto del 1968 al cinema con Pochi Attimi",
      url: `${SITE.url}/news/valle-belice-1968-cinema-rinascita`,
      image: `${SITE.url}/images/venezia/venezia-01.jpg`,
      publisher: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale" },
      description:
        "Dal terremoto del Belice del 1968 al film Pochi Attimi di Angelo Faraci (2026) con Maria Antonina Macaluso come protagonista femminile.",
      datePublished: "2026-09-28T20:00:00Z",
      about: [
        { "@type": "Place", name: "Valle del Belice" },
        { "@type": "Movie", name: "Pochi Attimi" },
      ],
    },
    {
      "@type": "Article",
      headline: "Maria Antonina Macaluso — Enciclopedia (voce principale)",
      url: `${SITE.url}/enciclopedia-maria-antonina`,
      image: `${SITE.url}/images/hero-maria-antonina.jpg`,
      publisher: { "@type": "Organization", name: "Enciclopedia digitale Maria Antonina Macaluso" },
      description:
        "Voce enciclopedica completa su Maria Antonina Macaluso, attrice siciliana nata a Bologna il 9 novembre 2001, cresciuta a Camporeale (Palermo). 19 fonti verificate. Wikidata Q140944431. IMDb nm14708762.",
      datePublished: "2024-01-01T00:00:00Z",
      dateModified: "2026-09-29T10:00:00Z",
      about: {
        "@type": "Person",
        name: "Maria Antonina Macaluso",
        sameAs: "https://www.wikidata.org/wiki/Q140944431",
      },
      wordCount: 3000,
    },
    {
      "@type": "Article",
      headline: "Le 10 domande più cercate su Maria Antonina Macaluso (risposte verificate)",
      url: `${SITE.url}/news/domande-piu-cercate-maria-antonina`,
      image: `${SITE.url}/images/photobook/mam-09.jpg`,
      publisher: { "@type": "Organization", name: "Enciclopedia digitale Maria Antonina Macaluso" },
      description:
        "FAQ con 10 domande frequenti su Maria Antonina Macaluso: chi è, dove è nata, età, filmografia, fidanzato Angelo Faraci, Pochi Attimi, Venezia 83, Instagram. Risposte verificate da fonti pubbliche.",
      datePublished: "2026-09-29T11:00:00Z",
      about: [{ "@type": "Person", name: "Maria Antonina Macaluso" }],
    },
    {
      "@type": "Article",
      headline: "15 curiosità e fatti veritieri su Maria Antonina Macaluso",
      url: `${SITE.url}/news/curiosita-fatti-maria-antonina`,
      image: `${SITE.url}/images/photobook/mam-17.jpg`,
      publisher: { "@type": "Organization", name: "Enciclopedia digitale Maria Antonina Macaluso" },
      description:
        "15 curiosità e fatti verificati su Maria Antonina Macaluso: data nascita, Camporeale, sodalizio Angelo Faraci, dieci film, sei premi, Premio Leone Lungo.",
      datePublished: "2026-09-29T12:00:00Z",
      about: [{ "@type": "Person", name: "Maria Antonina Macaluso" }],
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
      genre: "Lungometraggio — Drammatico sociale",
      productionCompany: { "@type": "Organization", name: "Ancora Cinematografica + Ventitreesima Strada" },
      description:
        "Lungometraggio diretto da Angelo Faraci con Maria Antonina Macaluso come attrice protagonista femminile. Dedicato alle Catastrofi ambientali Italiane e al valore reale della vita. Il 6 settembre 2026 ha ricevuto il Premio Speciale Leone Lungo nell'ambito degli eventi collaterali della 83ª Mostra del Cinema di Venezia.",
      award: "Premio Speciale Leone Lungo — Venezia 83 (6 settembre 2026)",
      sameAs: `${SITE.url}/news/pochi-attimi-venezia-83`,
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

// ClaimReview per fatti verificati (rafforza authority nel Knowledge Graph)
const claimReviewJsonLd1 = {
  "@context": "https://schema.org",
  "@type": "ClaimReview",
  claimReviewed: "Maria Antonina Macaluso ha ricevuto il Premio Speciale Leone Lungo alla 83ª Mostra del Cinema di Venezia il 6 settembre 2026.",
  itemReviewed: {
    "@type": "CreativeWork",
    author: { "@type": "Organization", name: "Cinema Italiano" },
    sameAs: "https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html",
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    alternateName: "Verificato da molteplici fonti giornalistiche",
  },
  author: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale" },
  publisher: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale" },
  datePublished: "2026-09-28T10:00:00Z",
  url: `${SITE.url}/news/pochi-attimi-venezia-83`,
};

const claimReviewJsonLd2 = {
  "@context": "https://schema.org",
  "@type": "ClaimReview",
  claimReviewed: "Maria Antonina Macaluso ha debuttato nel 2019 diretta da Angelo Faraci con la fiction Sky 'Ciò che non ti ho detto'.",
  itemReviewed: {
    "@type": "CreativeWork",
    author: { "@type": "Organization", name: "IMDb" },
    sameAs: "https://www.imdb.com/it/name/nm14708762",
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    alternateName: "Verificato da IMDb e da Wikipedia/EverybodyWiki",
  },
  author: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale" },
  publisher: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale" },
  datePublished: "2026-09-28T10:00:00Z",
  url: `${SITE.url}/biografia`,
};

const claimReviewJsonLd3 = {
  "@context": "https://schema.org",
  "@type": "ClaimReview",
  claimReviewed: "Maria Antonina Macaluso è nata a Bologna il 9 novembre 2001 ed è cresciuta a Camporeale, in provincia di Palermo.",
  itemReviewed: {
    "@type": "CreativeWork",
    author: { "@type": "Organization", name: "Wikidata" },
    sameAs: "https://www.wikidata.org/wiki/Q140944431",
  },
  reviewRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    alternateName: "Verificato da Wikidata Q140944431 con 16 fonti P854",
  },
  author: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale" },
  publisher: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale" },
  datePublished: "2026-09-28T10:00:00Z",
  url: `${SITE.url}/biografia`,
};

// ItemList — filmografia come collection
const filmografiaItemList = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Filmografia di Maria Antonina Macaluso",
  description: "Lista completa delle produzioni cinematografiche e televisive interpretate da Maria Antonina Macaluso dal 2019 al 2026.",
  numberOfItems: 10,
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Ciò che non ti ho detto (2019)", url: `${SITE.url}/film/cio-che-non-ti-ho-detto` },
    { "@type": "ListItem", position: 2, name: "Don't Be Silent (2020)", url: `${SITE.url}/film/dont-be-silent` },
    { "@type": "ListItem", position: 3, name: "Provvidenza (2021)", url: `${SITE.url}/film/provvidenza` },
    { "@type": "ListItem", position: 4, name: "Pietrazita (2023)", url: `${SITE.url}/film/pietrazita` },
    { "@type": "ListItem", position: 5, name: "Separati Mai (2023-2024)", url: `${SITE.url}/film/separati-mai` },
    { "@type": "ListItem", position: 6, name: "Sabbie Nere (2023)", url: `${SITE.url}/film/sabbie-nere` },
    { "@type": "ListItem", position: 7, name: "Vanina (2024)", url: `${SITE.url}/film/vanina` },
    { "@type": "ListItem", position: 8, name: "Il Mistero di Spartivento (2024-2025)", url: `${SITE.url}/film/il-mistero-di-spartivento` },
    { "@type": "ListItem", position: 9, name: "Eccellenza Siciliana (2025)", url: `${SITE.url}/altre-produzioni/eccellenza-siciliana` },
    { "@type": "ListItem", position: 10, name: "Pochi Attimi (2026)", url: `${SITE.url}/film/pochi-attimi` },
  ],
};

// ProfilePage — rafforza l'identity della homepage
const profilePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  mainEntity: {
    "@type": "Person",
    name: "Maria Antonina Macaluso",
    url: SITE.url,
  },
  url: SITE.url,
  datePublished: "2024-01-01T00:00:00Z",
  dateModified: "2026-09-28T13:00:00Z",
  inLanguage: "it-IT",
  isPartOf: {
    "@type": "WebSite",
    name: "Maria Antonina Macaluso — Enciclopedia digitale",
    url: SITE.url,
  },
};

// Organization — publisher del sito come entità autorevole
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Maria Antonina Macaluso — Enciclopedia digitale",
  alternateName: "Enciclopedia digitale Maria Antonina Macaluso",
  url: SITE.url,
  description: "Enciclopedia digitale ufficiale dedicata a Maria Antonina Macaluso, attrice siciliana. Include biografia, filmografia, photo book, news e approfondimenti.",
  foundingDate: "2024-01-01",
  founder: {
    "@type": "Person",
    name: "Maria Antonina Macaluso",
    url: SITE.url,
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Camporeale",
    addressRegion: "Palermo",
    addressCountry: "IT",
  },
  areaServed: "Italy",
  knowsLanguage: ["it-IT", "scn"],
  logo: {
    "@type": "ImageObject",
    url: `${SITE.url}/images/hero-maria-antonina.jpg`,
  },
  sameAs: [
    "https://www.instagram.com/mary.macaluso09",
    "https://www.tiktok.com/@mary.macaluso",
    "https://www.facebook.com/mary.macaluso.16",
    "https://www.imdb.com/name/nm14708762/",
    "https://www.wikidata.org/wiki/Q140944431",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Press inquiries",
    email: "mariantonina63@gmail.com",
    areaServed: "IT",
    availableLanguage: ["Italian", "Sicilian"],
  },
};

// SiteNavigationElement — struttura di navigazione del sito (Google usa questo per sitelinks)
const siteNavigationElementJsonLd = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: "Navigazione principale",
  url: SITE.url,
  hasPart: [
    { "@type": "WebPage", name: "Home", url: SITE.url },
    { "@type": "WebPage", name: "Biografia", url: `${SITE.url}/biografia` },
    { "@type": "WebPage", name: "Filmografia", url: `${SITE.url}/filmografia` },
    { "@type": "WebPage", name: "Photo Book", url: `${SITE.url}/photobook` },
    { "@type": "WebPage", name: "Timeline", url: `${SITE.url}/timeline` },
    { "@type": "WebPage", name: "Premi", url: `${SITE.url}/premi` },
    { "@type": "WebPage", name: "Festival", url: `${SITE.url}/festival` },
    { "@type": "WebPage", name: "Articoli", url: `${SITE.url}/articoli` },
    { "@type": "WebPage", name: "Multimedia", url: `${SITE.url}/multimedia` },
    { "@type": "WebPage", name: "Angelo Faraci", url: `${SITE.url}/angelo-faraci` },
    { "@type": "WebPage", name: "FAQ", url: `${SITE.url}/faq` },
    { "@type": "WebPage", name: "Contatti", url: `${SITE.url}/contatti` },
    { "@type": "WebPage", name: "Venezia 83", url: `${SITE.url}/news/pochi-attimi-venezia-83` },
    { "@type": "WebPage", name: "Sodalizio artistico", url: `${SITE.url}/news/sodalizio-maria-antonina-angelo-faraci` },
    { "@type": "WebPage", name: "Cast Pochi Attimi", url: `${SITE.url}/news/cast-pochi-attimi` },
    { "@type": "WebPage", name: "Catastrofi ambientali", url: `${SITE.url}/news/catastrofi-ambientali-italiane` },
    { "@type": "WebPage", name: "Camporeale", url: `${SITE.url}/news/camporeale-radici-maria-antonina` },
    { "@type": "WebPage", name: "Intervista", url: `${SITE.url}/news/intervista-maria-antonina-macaluso` },
    { "@type": "WebPage", name: "Ritratto 24 anni", url: `${SITE.url}/news/ritratto-maria-antonina-24-anni` },
    { "@type": "WebPage", name: "Percorso artistico", url: `${SITE.url}/news/percorso-artistico-cinema-sicilia` },
    { "@type": "WebPage", name: "Tag Angelo Faraci", url: `${SITE.url}/tag/angelo-faraci` },
    { "@type": "WebPage", name: "Tag Venezia 83", url: `${SITE.url}/tag/venezia-83` },
    { "@type": "WebPage", name: "Tag Cinema siciliano", url: `${SITE.url}/tag/cinema-siciliano` },
  ],
};

// Speakable — ottimizzazione voice search
const speakableJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Maria Antonina Macaluso — Attrice Siciliana",
  url: SITE.url,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".speakable-summary", "h1"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" dir="ltr" suppressHydrationWarning>
      <head>
        {/* Resource hints per TTFB <25ms + LCP <1s */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://img.youtube.com" />
        {/* Preload font CSS con font-display swap */}
        <link
          rel="preload"
          as="style"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Italiana&display=swap"
        />
        {/* Google Search Console verification */}
        <meta name="google-site-verification" content="7k8LbVSFjRug2y5x-E2w6CGy4aYIIqHUaR66LnNMbhQ" />
        {/* Bing Webmaster verification */}
        <meta name="msvalidate.01" content="a8f3b7c9d2e1f4a6b8c0d2e4f6a8b0c2" />
        {/* Font CSS con font-display swap per eliminare FOUT */}
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Italiana&display=swap"
          rel="stylesheet"
        />
        {/* Preload immagine hero per LCP <1s */}
        <link rel="preload" as="image" href="/images/hero-maria-antonina.jpg" fetchPriority="high" />
        {/* Preload CSS critico */}
        <link rel="preload" as="style" href="/_next/static/chunks/main-app.css" />
        {/* Module preload per JS critico */}
        <link rel="modulepreload" href="/_next/static/chunks/main-app.js" />
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
        {/* ClaimReview — fatti verificati (rafforza authority per Knowledge Graph) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(claimReviewJsonLd1) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(claimReviewJsonLd2) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(claimReviewJsonLd3) }}
        />
        {/* ItemList — filmografia come collection strutturata */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(filmografiaItemList) }}
        />
        {/* ProfilePage — rafforza l'identity della homepage */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageJsonLd) }}
        />
        {/* Organization — publisher come entità autorevole */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {/* SiteNavigationElement — struttura di navigazione per Google sitelinks */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavigationElementJsonLd) }}
        />
        {/* Speakable — ottimizzazione voice search */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableJsonLd) }}
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
