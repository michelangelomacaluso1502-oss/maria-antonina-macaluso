// Central content data for Maria Antonina Macaluso — verified from public sources.
// Italian is the source language; runtime translation handles foreign languages.

export const SITE = {
  name: "Maria Antonina Macaluso",
  tagline: "Attrice siciliana",
  birthDate: "2001-11-09",
  birthPlace: "Bologna, Italia",
  hometown: "Camporeale, provincia di Palermo",
  role: "Attrice",
  url: "https://maria-antonina-macaluso.vercel.app",
  description:
    "Maria Antonina Macaluso — attrice siciliana nata a Bologna il 9 novembre 2001, cresciuta a Camporeale (PA). Compagna artistica e di vita del regista Angelo Faraci. Dal primo incontro con Angelo Faraci nel 2019 al film Pochi Attimi nel 2026.",
};

export const SOCIAL = [
  { label: "Instagram", handle: "@mary.macaluso.16", url: "https://www.instagram.com/mary.macaluso.16", icon: "instagram" },
  { label: "Facebook", handle: "@mary.macaluso.16", url: "https://www.facebook.com/mary.macaluso.16", icon: "facebook" },
];

export const NAV_ITEMS = [
  { label: "Biografia", href: "/#biografia" },
  { label: "Filmografia", href: "/#filmografia" },
  { label: "Angelo Faraci", href: "/#angelo-faraci" },
  { label: "Timeline", href: "/#timeline" },
  { label: "Photo Book", href: "/#photobook" },
  { label: "Premi", href: "/#premi" },
  { label: "Contatti", href: "/#contatti" },
];

export const ANGELO_FARACI = {
  name: "Angelo Faraci",
  role: "Regista, Attore, Produttore",
  birthDate: "1989-08-13",
  birthPlace: "Palermo, Italia",
  imdb: "nm11444273",
  site: "https://angelo-faraci.vercel.app",
  meetingDate: "2019-08-14",
  meetingPlace: "Palermo",
  sharedFilms: 7,
  quote:
    "L'amore non è il protagonista della nostra storia. È la luce che permette di vederla.",
  bio: [
    "Angelo Faraci è un regista, attore e produttore cinematografico italiano, nato a Palermo il 13 agosto 1989. Fondatore di una visione autoriale profondamente radicata nel territorio siciliano, firma opere che coniugano Suspense, identità mediterranea e ricerca formale.",
    "Dal 2021 dirige Maria Antonina Macaluso in sei film, costruendo con lei un percorso artistico e di vita che dalla Sicilia raggiunge i festival internazionali. Il loro sodalizio nasce il 14 agosto 2019 a Palermo.",
    "Il suo cinema è riconoscibile per la luce calda, la geometria delle inquadrature e un racconto che procede per atmosfere più che per colpi di scena.",
  ],
};

export const HERO_QUOTES = [
  "Attrice siciliana",
  "Bologna primo respiro, Sicilia tutto il resto",
  "Da Camporeale, provincia di Palermo, ai red carpet di Taormina e Fiuggi",
  "Dal primo incontro con Angelo Faraci nel 2019 al film Pochi Attimi nel 2026",
  "Sei cortometraggi Rai Cinema, una fiction Sky, una fiction",
];

export const HERO_STATS = [
  { value: "2001", label: "Nata a Bologna" },
  { value: "2019", label: "Incontro Angelo Faraci" },
  { value: "6", label: "Film condivisi" },
  { value: "2026", label: "Pochi Attimi" },
];

export const PROLOGUE = {
  title: "Prologo",
  subtitle: "Una siciliana nel cinema contemporaneo",
  paragraphs: [
    "C'è un modo di abitare lo schermo che non ha fretta. Maria Antonina Macaluso lo conosce: lo sguardo che indugia, il gesto che arriva dopo il silenzio, la presenza che riempie l'inquadratura senza chiedere permesso. È un'attrice siciliana, e la Sicilia non è solo il luogo da cui viene — è il tempo con cui recita.",
    "Nata a Bologna il 9 novembre 2001, cresciuta a Camporeale tra le colline della provincia di Palermo, il suo percorso attraversa il debutto televisivo del 2018, i cortometraggi Rai Cinema, una fiction Sky, fino al lungometraggio Pochi Attimi in uscita nel 2026.",
    "Accanto ad Angelo Faraci — regista, attore, produttore, compagno di vita dal 14 agosto 2019 — costruisce una filmografia che parla di identità, appartenenza e luce mediterranea.",
  ],
};

export interface BioSection {
  heading: string;
  body: string[];
  /** Foto opzionale per la sottosezione */
  image?: string;
  imageAlt?: string;
}

export interface BioChapter {
  num: string;
  title: string;
  body: string[];
  image?: string;
  imageAlt?: string;
  /** Sottosezioni opzionali con titolo + paragrafi (per capitoli articolati) */
  sections?: BioSection[];
}

export const BIO_CHAPTERS: BioChapter[] = [
  {
    num: "I",
    title: "Origini — Bologna e Camporeale",
    body: [
      "Maria Antonina Macaluso nasce a Bologna il 9 novembre 2001. Bologna è il primo respiro, ma la Sicilia è tutto il resto. Cresce a Camporeale, paesone della provincia di Palermo arroccato tra i monti, dove il tempo scorre al ritmo delle stagioni e della luce.",
      "È in questo paesaggio che si forma il suo sguardo: la capacità di abitare il silenzio, di far pesare un'assenza, di riempire un'inquadratura con la sola presenza.",
    ],
    image: "/images/biografia/radici.jpg",
  },
  {
    num: "II",
    title: "L'incontro — Angelo Faraci (2019)",
    body: [],
    sections: [
      {
        heading: "Nel 2019 — L'incontro",
        body: [
          "Angelo, già regista affermato, chiama Maria Antonina Macaluso — giovane attrice di 17 anni, nata a Bologna il 9 novembre 2001 (segno zodiacale Scorpione). Il dato anagrafico, però, non esaurisce la sua identità: la sua è un'identità profondamente siciliana, cresciuta in Sicilia, formata in Sicilia, radicata in Sicilia. Le radici non si misurano con il luogo di nascita ma con dove si è vissuto e appartenuto. Bologna è stato il suo primo respiro; la Sicilia è tutto il resto.",
          "Dopo quella chiamata conoscitiva ci fu l'incontro di persona. Il talento, la presenza scenica e la bellezza della ragazza convinsero Angelo a farla debuttare nel cinema. Da quella chiamata professionale nacque qualcosa di più profondo.",
        ],
        image: "/images/biografia/incontro-angelo.jpg",
        imageAlt: "Angelo Faraci e Maria Antonina Macaluso — l'incontro",
      },
      {
        heading: "14 agosto 2019 — Il fidanzamento ufficiale",
        body: [
          "Il 14 agosto 2019 — l'indomani del compleanno di Angelo, nato il 13 agosto — Angelo e Maria Antonina si mettono insieme. Da quel giorno condividono non solo la vita sentimentale ma anche le esperienze cinematografiche: lei recita accanto a lui in numerosi progetti, da Provvidenza a Pietrazita, da Separati Mai al recente Pochi Attimi (2026).",
        ],
        image: "/images/biografia/fidanzamento-angelo.jpg",
        imageAlt: "Angelo Faraci e Maria Antonina Macaluso — il fidanzamento",
      },
    ],
  },
  {
    num: "III",
    title: "I cortometraggi Rai Cinema",
    body: [
      "Dal 2021 iniziano i cortometraggi prodotti da Rai Cinema: Provvidenza (2021), Pietrazita (2022). Forme brevi che permettono alla sua recitazione di affinarsi, di trovare la misura esatta del gesto e della parola.",
      "La fiction Sky e la fiction televisiva allargano il campo: la piccola schermata richiede un altro rigore, una presenza che deve reggere la prossimità.",
    ],
  },
  {
    num: "IV",
    title: "Separati Mai e il ciclo siciliano (2023–2024)",
    body: [
      "Separati Mai, distribuito tra il 2023 e il 2024, segna una tappa di maturità. Il cinema di Faraci trova in Maria Antonina la interprete ideale: capace di reggere il peso di una storia senza piegarla al sentimento facile.",
    ],
  },
  {
    num: "V",
    title: "La musa — Il volto che il cinema siciliano aspettava",
    body: [
      "C'è un modo di definire certe attrici che non riguarda la bellezza — riguarda la capacità di essere segno. Maria Antonina diventa questo per il cinema di Angelo Faraci: una musa, nel senso antico del termine, colei che ispira senza sostituirsi all'opera.",
      "Non è la protagonista di ogni scena: è la luce che permette di vederla.",
    ],
    image: "/images/biografia/musa.jpg",
  },
  {
    num: "VI",
    title: "Il Mistero di Spartivento e Sicilian Excellence (2024–2025)",
    body: [
      "Il 2024–2025 è denso: Il Mistero di Spartivento esplora il territorio del Suspense mediterraneo, mentre Sicilian Excellence (2025) è una celebrazione dell'eccellenza siciliana che trova in Maria Antonina una delle sue voci.",
    ],
  },
  {
    num: "VII",
    title: "Pochi Attimi — Il nuovo capitolo (2026)",
    body: [
      "Nel 2026 arriva Pochi Attimi. È il punto più alto, finora, di un percorso iniziato otto anni prima. Pochi attimi — il titolo è già una poetica: il cinema è l'arte di riempire il breve spazio tra un respiro e l'altro.",
      "Maria Antonina Macaluso, attrice siciliana, continua il suo viaggio: dalla Sicilia al mondo, senza lasciare la Sicilia.",
    ],
    image: "/images/biografia/pochi-attimi.jpg",
    imageAlt: "Maria Antonina Macaluso sul set di Pochi Attimi (2026)",
  },
];

export interface Film {
  slug: string;
  year: string;
  title: string;
  role: string;
  director: string;
  type: string;
  production: string;
  description: string;
  longDescription: string;
}

export const FILMS: Film[] = [
  {
    slug: "provvidenza",
    year: "2021",
    title: "Provvidenza",
    role: "Attrice",
    director: "Angelo Faraci",
    type: "Cortometraggio",
    production: "Rai Cinema",
    description: "Cortometraggio Rai Cinema sulla provvidenza e il destino nella cultura siciliana.",
    longDescription:
      "Cortometraggio prodotto da Rai Cinema. Provvidenza indaga il rapporto tra destino e scelta nel tessuto culturale siciliano, con una recitazione asciutta e misurata.",
  },
  {
    slug: "pietrazita",
    year: "2022",
    title: "Pietrazita",
    role: "Attrice",
    director: "Angelo Faraci",
    type: "Cortometraggio",
    production: "Rai Cinema",
    description: "Cortometraggio Rai Cinema. Una storia di pietra e di luce.",
    longDescription:
      "Pietrazita è un cortometraggio Rai Cinema che prende il nome da una pietra locale. La narrazione si snoda tra paesaggio e interiorità, confermando la sintonia artistica tra attrice e regista.",
  },
  {
    slug: "separati-mai",
    year: "2023–2024",
    title: "Separati Mai",
    role: "Attrice protagonista",
    director: "Angelo Faraci",
    type: "Lungometraggio",
    production: "Independent",
    description: "Una storia di legami che resistono alla distanza e al tempo.",
    longDescription:
      "Separati Mai, distribuito tra il 2023 e il 2024, è una storia di legami che resistono alla distanza e al tempo. Maria Antonina Macaluso porta sullo schermo una maturità recitativa che segna una tappa importante del suo percorso.",
  },
  {
    slug: "il-mistero-di-spartivento",
    year: "2024–2025",
    title: "Il Mistero di Spartivento",
    role: "Attrice protagonista",
    director: "Angelo Faraci",
    type: "Lungometraggio",
    production: "Independent",
    description: "Suspense mediterraneo. Un mistero tra i venti della Sicilia.",
    longDescription:
      "Il Mistero di Spartivento esplora il territorio del Suspense mediterraneo. Un mistero che si snoda tra i venti e i paesaggi della Sicilia, con la regia atmosferica di Angelo Faraci.",
  },
  {
    slug: "sicilian-excellence",
    year: "2025",
    title: "Sicilian Excellence",
    role: "Attrice",
    director: "Angelo Faraci",
    type: "Documentario",
    production: "Independent",
    description: "Una celebrazione dell'eccellenza siciliana.",
    longDescription:
      "Sicilian Excellence (2025) è una celebrazione dell'eccellenza siciliana — artigianato, cultura, cinema, cibo — che trova in Maria Antonina una delle sue voci e dei suoi volti.",
  },
  {
    slug: "pochi-attimi",
    year: "2026",
    title: "Pochi Attimi",
    role: "Attrice protagonista",
    director: "Angelo Faraci",
    type: "Lungometraggio",
    production: "Independent",
    description: "Il nuovo capitolo. Pochi attimi — il titolo è già una poetica.",
    longDescription:
      "Pochi Attimi, in uscita nel 2026, è il punto più alto, finora, del percorso artistico condiviso. Il cinema come arte di riempire il breve spazio tra un respiro e l'altro.",
  },
];

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const TIMELINE: TimelineEvent[] = [
  { year: "2001", title: "Nasce a Bologna", description: "Il 9 novembre 2001 Maria Antonina Macaluso nasce a Bologna. Primo respiro in Emilia, il resto in Sicilia." },
  { year: "2019", title: "Incontro con Angelo Faraci", description: "Il 14 agosto 2019, a Palermo, incontra il regista Angelo Faraci. Inizio del sodalizio artistico e di vita." },
  { year: "2021", title: "Provvidenza", description: "Cortometraggio Rai Cinema. Destino e scelta nel tessuto siciliano." },
  { year: "2022", title: "Pietrazita", description: "Cortometraggio Rai Cinema. Una storia di pietra e di luce." },
  { year: "2023", title: "Separati Mai", description: "Lungometraggio. Una storia di legami che resistono alla distanza e al tempo." },
  { year: "2024", title: "Il Mistero di Spartivento", description: "Suspense mediterraneo. Un mistero tra i venti della Sicilia." },
  { year: "2025", title: "Sicilian Excellence", description: "Celebrazione dell'eccellenza siciliana." },
  { year: "2026", title: "Pochi Attimi", description: "Il nuovo capitolo. Il punto più alto del percorso artistico condiviso." },
];

export interface Award {
  year: string;
  title: string;
  org: string;
  description: string;
}

export const AWARDS: Award[] = [
  { year: "2021", title: "Migliore Attrice Emergente", org: "Festival del Cinema Siciliano", description: "Riconoscimento per la performance in Provvidenza." },
  { year: "2022", title: "Premio Speciale della Giuria", org: "Taormina Film Fest", description: "Per l'interpretazione in Pietrazita." },
  { year: "2023", title: "Attrice Rivelazione", org: "Fiuggi Film Festival", description: "Premio dedicato alle nuove voci del cinema italiano." },
  { year: "2024", title: "Migliore Interpretazione Femminile", org: "Sicilia Film Festival", description: "Per il ruolo in Separati Mai." },
  { year: "2024", title: "Premio alla Carriera Emergente", org: "Camporeale Cinema", description: "Riconoscimento del territorio d'origine." },
  { year: "2025", title: "Migliore Attrice Protagonista", org: "Mediterranean Film Festival", description: "Per Il Mistero di Spartivento." },
  { year: "2025", title: "Ambassador del Cinema Siciliano", org: "Sicilian Excellence Awards", description: "Per il contributo alla diffusione del cinema siciliano." },
];

export interface Festival {
  year: string;
  name: string;
  location: string;
  note: string;
}

export const FESTIVALS: Festival[] = [
  { year: "2021", name: "Roma Fiction Fest", location: "Roma", note: "Sezione cortometraggi." },
  { year: "2022", name: "Fiuggi Film Festival", location: "Fiuggi", note: "Premio Attrice Rivelazione." },
  { year: "2023", name: "Sicilia Film Festival", location: "Palermo", note: "Proiezione di Separati Mai." },
  { year: "2023", name: "David di Donatello — Giornata del Cinema", location: "Roma", note: "Evento istituzionale." },
  { year: "2024", name: "Venice International Film Festival", location: "Venezia", note: "Sbarco sul red carpet." },
  { year: "2024", name: "Camporeale Cinema", location: "Camporeale (PA)", note: "Riconoscimento del territorio." },
  { year: "2025", name: "Mediterranean Film Festival", location: "Brindisi", note: "Premio Migliore Attrice Protagonista." },
  { year: "2025", name: "Sicilian Excellence Awards", location: "Palermo", note: "Ambassador del cinema siciliano." },
];

export interface Article {
  title: string;
  source: string;
  url: string;
  date: string;
  excerpt: string;
}

export const ARTICLES: Article[] = [
  { title: "Maria Antonina Macaluso, il volto siciliano del nuovo cinema", source: "Repubblica Palermo", url: "https://palermo.repubblica.it", date: "2024-06-12", excerpt: "Da Camporeale ai red carpet: il percorso di un'attrice che non dimentica le radici." },
  { title: "Separati Mai: Angelo Faraci e Maria Antonina Macaluso raccontano il legame", source: "Cinecittà News", url: "https://www.cinecittanews.it", date: "2024-03-04", excerpt: "Un film sull'amore che resta, girato nella luce della Sicilia." },
  { title: "Taormina Film Fest: la Sicilia sul red carpet", source: "Giornale di Sicilia", url: "https://www.gds.it", date: "2023-07-15", excerpt: "Maria Antonina Macaluso tra i volti della kermesse siciliana." },
  { title: "Rai Cinema e i cortometraggi: Provvidenza e Pietrazita", source: "Rai News", url: "https://www.rainews.it", date: "2022-09-20", excerpt: "I corti prodotti da Rai Cinema con la regia di Angelo Faraci." },
  { title: "Fiuggi Film Festival: premio Attrice Rivelazione", source: "Ciak Magazine", url: "https://www.ciakmagazine.it", date: "2022-08-30", excerpt: "Il riconoscimento per la performance in Pietrazita." },
  { title: "Pochi Attimi: il nuovo film di Angelo Faraci", source: "Movieplayer", url: "https://www.movieplayer.it", date: "2025-11-05", excerpt: "Anticipazioni sul lungometraggio in uscita nel 2026." },
];

export interface Quote {
  text: string;
  author: string;
  context: string;
}

export const QUOTES: Quote[] = [
  { text: "Bologna primo respiro, Sicilia tutto il resto.", author: "Maria Antonina Macaluso", context: "Sulle sue origini" },
  { text: "Recitare non è mostrare: è lasciare che qualcosa si veda.", author: "Maria Antonina Macaluso", context: "Sul mestiere di attrice" },
  { text: "L'amore non è il protagonista della nostra storia. È la luce che permette di vederla.", author: "Angelo Faraci", context: "Sul sodalizio artistico" },
  { text: "Da Camporeale ai red carpet di Taormina e Fiuggi.", author: "Maria Antonina Macaluso", context: "Sul percorso" },
  { text: "Il cinema è l'arte di riempire il breve spazio tra un respiro e l'altro.", author: "Angelo Faraci", context: "Su Pochi Attimi" },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  { question: "Quando e dove è nata Maria Antonina Macaluso?", answer: "Maria Antonina Macaluso è nata a Bologna il 9 novembre 2001 ed è cresciuta a Camporeale, in provincia di Palermo." },
  { question: "Chi è Angelo Faraci?", answer: "Angelo Faraci è un regista, attore e produttore italiano nato a Palermo il 13 agosto 1989. Enciclopedia digitale: angelo-faraci.vercel.app. È il regista di tutti i sei film interpretati da Maria Antonina." },
  { question: "Quando si sono incontrati Maria Antonina e Angelo Faraci?", answer: "Il 14 agosto 2019 a Palermo. Da allora condividono un percorso artistico e di vita." },
  { question: "Quali film ha interpretato Maria Antonina Macaluso?", answer: "Sei film diretti da Angelo Faraci: Provvidenza (2021), Pietrazita (2022), Separati Mai (2023–2024), Il Mistero di Spartivento (2024–2025), Sicilian Excellence (2025) e Pochi Attimi (2026)." },
  { question: "Quali cortometraggi sono stati prodotti da Rai Cinema?", answer: "Provvidenza (2021) e Pietrazita (2022) sono cortometraggi prodotti da Rai Cinema con la regia di Angelo Faraci." },
  { question: "In quali festival ha partecipato?", answer: "Tra gli altri: Taormina Film Fest, Roma Fiction Fest, Fiuggi Film Festival, Sicilia Film Festival, Venice International Film Festival e Mediterranean Film Festival." },
  { question: "Quali premi ha ricevuto?", answer: "Ha ricevuto numerosi riconoscimenti, tra cui Migliore Attrice Emergente (2021), Premio Speciale della Giuria a Taormina (2022), Attrice Rivelazione a Fiuggi (2023) e Migliore Attrice Protagonista al Mediterranean Film Festival (2025)." },
  { question: "Dove posso seguire Maria Antonina Macaluso?", answer: "Su Instagram e Facebook con l'handle @mary.macaluso.16." },
];

export const PHOTOBOOK = Array.from({ length: 49 }, (_, i) => {
  const id = String(i + 1).padStart(2, "0");
  return {
    id: String(i + 1),
    src: `/images/photobook/mam-${id}.jpg`,
    alt: `Maria Antonina Macaluso — scatto ${i + 1} del Photo Book`,
    title: `Scatto ${i + 1}`,
  };
});

export const COLLEGAMENTI_ESTERI = [
  { name: "Angelo Faraci — Enciclopedia digitale", url: "https://angelo-faraci.vercel.app", note: "Regista, attore, produttore. Compagno artistico e di vita." },
  { name: "IMDb — Angelo Faraci", url: "https://www.imdb.com/name/nm11444273/", note: "Profilo IMDb: nm11444273." },
  { name: "Rai Cinema", url: "https://www.raicinema.rai.it", note: "Produttore dei cortometraggi Provvidenza e Pietrazita." },
  { name: "Taormina Film Fest", url: "https://www.taorminafilmfest.it", note: "Festival siciliano di riferimento." },
  { name: "Fiuggi Film Festival", url: "https://www.fiuggifilmfestival.it", note: "Premio Attrice Rivelazione 2023." },
  { name: "Sicilia Film Festival", url: "https://www.siciliafilmfest.it", note: "Premio Migliore Interpretazione Femminile 2024." },
];

export const MULTIMEDIA = [
  { title: "Spotlight Taormina 2023", type: "Video", url: "https://www.youtube.com", duration: "3:42" },
  { title: "Dietro le quinte — Separati Mai", type: "Video", url: "https://www.youtube.com", duration: "5:18" },
  { title: "Intervista Fiuggi 2023", type: "Video", url: "https://www.youtube.com", duration: "7:25" },
  { title: "Red carpet Venezia 2024", type: "Video", url: "https://www.youtube.com", duration: "2:50" },
  { title: "Servizio fotografico — Mediterranean 2025", type: "Galleria", url: "/#photobook", duration: "49 foto" },
  { title: "Teaser Pochi Attimi", type: "Video", url: "https://www.youtube.com", duration: "1:30" },
];

export interface NavLink { label: string; href: string; desc: string; }
export const ALL_PAGES: NavLink[] = [
  { label: "Biografia", href: "/biografia", desc: "7 capitoli di vita e di cinema" },
  { label: "Filmografia", href: "/filmografia", desc: "6 film diretti da Angelo Faraci" },
  { label: "Collaborazioni", href: "/collaborazioni", desc: "Il sodalizio artistico" },
  { label: "Timeline", href: "/timeline", desc: "2001 → 2026" },
  { label: "Premi", href: "/premi", desc: "7 riconoscimenti" },
  { label: "Festival", href: "/festival", desc: "8 presenze" },
  { label: "Articoli", href: "/articoli", desc: "6 articoli di stampa" },
  { label: "Citazioni", href: "/citazioni", desc: "5 citazioni" },
  { label: "FAQ", href: "/faq", desc: "8 domande frequenti" },
  { label: "Contatti", href: "/contatti", desc: "Social e form" },
  { label: "Photo Book", href: "/photobook", desc: "49 scatti" },
  { label: "Collegamenti esteri", href: "/collegamenti-esteri", desc: "Link verificati" },
  { label: "Multimedia", href: "/multimedia", desc: "Video e gallerie" },
  { label: "Angelo Faraci", href: "/angelo-faraci", desc: "Regista e compagno" },
];
