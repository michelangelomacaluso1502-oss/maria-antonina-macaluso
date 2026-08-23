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

// Profili verificati di Maria Antonina Macaluso
export const SOCIAL = [
  { label: "Instagram", handle: "@mary.macaluso09", url: "https://www.instagram.com/mary.macaluso09", icon: "instagram" },
  { label: "Facebook", handle: "@mary.macaluso.16", url: "https://www.facebook.com/mary.macaluso.16", icon: "facebook" },
  { label: "TikTok", handle: "@mary.macaluso", url: "https://www.tiktok.com/@mary.macaluso", icon: "tiktok" },
];

// Tutti i collegamenti professionali verificati di Maria Antonina Macaluso
export const MAM_PROFILES = [
  { label: "Instagram", handle: "@mary.macaluso09", url: "https://www.instagram.com/mary.macaluso09", icon: "instagram", note: "11.9K followers — Actress & Content Creator" },
  { label: "Facebook", handle: "@mary.macaluso.16", url: "https://www.facebook.com/mary.macaluso.16", icon: "facebook", note: "Pagina Facebook ufficiale" },
  { label: "TikTok", handle: "@mary.macaluso", url: "https://www.tiktok.com/@mary.macaluso", icon: "tiktok", note: "5.2K follower — Content Creator" },
  { label: "IMDb", handle: "nm14708762", url: "https://www.imdb.com/it/name/nm14708762", icon: "imdb", note: "Scheda IMDb verificata" },
  { label: "Ancora Cinematografica", handle: "Scheda attrice", url: "https://cinematografica.altervista.org/maria-antonina-macaluso", icon: "globe", note: "Agenzia di rappresentanza" },
];

// Collegamenti professionali verificati di Angelo Faraci
export const ANGELO_PROFILES = [
  { label: "Enciclopedia digitale", handle: "angelo-faraci.vercel.app", url: "https://angelo-faraci.vercel.app", icon: "globe", note: "Archivio digitale ufficiale" },
  { label: "IMDb", handle: "nm11444273", url: "https://www.imdb.com/name/nm11444273/", icon: "imdb", note: "Scheda IMDb verificata" },
  { label: "TikTok", handle: "@angelofaraci4", url: "https://www.tiktok.com/@angelofaraci4", icon: "tiktok", note: "Canale TikTok ufficiale" },
];

export const NAV_ITEMS = [
  { label: "Biografia", href: "/#biografia" },
  { label: "Filmografia", href: "/#filmografia" },
  { label: "Altre Produzioni", href: "/#altre-produzioni" },
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
    "Dal 2019 dirige Maria Antonina Macaluso in dieci produzioni, costruendo con lei un percorso artistico e di vita che dalla Sicilia raggiunge i festival internazionali. Il loro sodalizio nasce il 14 agosto 2019 a Palermo.",
    "Il suo cinema è riconoscibile per la luce calda, la geometria delle inquadrature e un racconto che procede per atmosfere più che per colpi di scena.",
  ],
};

export const HERO_QUOTES = [
  "Attrice siciliana",
  "Bologna primo respiro, Sicilia tutto il resto",
  "Da Camporeale, provincia di Palermo, ai red carpet di Taormina e Fiuggi",
  "Dal primo incontro con Angelo Faraci nel 2019 al film Pochi Attimi nel 2026",
  "Dieci produzioni, una visione: il cinema come arte di riempire il silenzio",
];

export const HERO_STATS = [
  { value: "2001", label: "Nata a Bologna" },
  { value: "2019", label: "Incontro Angelo Faraci" },
  { value: "10", label: "Produzioni condivise" },
  { value: "2026", label: "Pochi Attimi" },
];

export const PROLOGUE = {
  title: "Prologo",
  subtitle: "Una siciliana nel cinema contemporaneo",
  paragraphs: [
    "Vi è un modo di abitare lo schermo che non conosce fretta. Maria Antonina Macaluso ne è depositaria: lo sguardo che indugia, il gesto che giunge dopo il silenzio, la presenza che colma l'inquadratura senza chiedere licenza. È un'attrice siciliana, e la Sicilia non è soltanto il luogo da cui proviene — è il tempo stesso con cui recita.",
    "Nata a Bologna il 9 novembre 2001, cresciuta a Camporeale tra le colline della provincia di Palermo, il suo percorso attraversa il debutto televisivo del 2019, i cortometraggi Rai Cinema, una fiction Sky, fino al lungometraggio Pochi Attimi in uscita nel 2026.",
    "Accanto ad Angelo Faraci — regista, attore, produttore, compagno di vita dal 14 agosto 2019 — edifica una filmografia che parla di identità, appartenenza e luce mediterranea.",
  ],
};

export interface BioSection {
  heading: string;
  body: string[];
  /** Foto opzionale per la sottosezione */
  image?: string;
  imageAlt?: string;
  /** Aspect ratio per il rendering della foto (default "4/5" portrait) */
  aspect?: "3/4" | "4/5" | "4/3" | "16/9" | "1/1";
  /** Link cliccabili blu da inserire nel testo */
  links?: { text: string; url: string }[];
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
      "Maria Antonina Macaluso nasce a Bologna il 9 novembre 2001. Bologna è il primo respiro, ma la Sicilia è tutto il resto. Cresce a Camporeale, paesino della provincia di Palermo arroccato tra i monti, dove il tempo scorre al ritmo delle stagioni e della luce.",
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
        image: "/images/biografia/incontro-2025.jpg",
        imageAlt: "Angelo Faraci e Maria Antonina Macaluso — l'incontro",
        aspect: "4/3",
      },
      {
        heading: "14 agosto 2019 — Il fidanzamento ufficiale",
        body: [
          "Il 14 agosto 2019 — l'indomani del compleanno di Angelo, nato il 13 agosto — Angelo e Maria Antonina si mettono insieme. Da quel giorno condividono non solo la vita sentimentale ma anche le esperienze cinematografiche: lei recita accanto a lui in numerosi progetti, da Provvidenza a Pietrazita, da Separati Mai al recente Pochi Attimi (2026).",
        ],
        image: "/images/biografia/fidanzamento-angelo.jpg",
        imageAlt: "Angelo Faraci e Maria Antonina Macaluso — il fidanzamento",
        aspect: "4/5",
      },
      {
        heading: "2019 — Il debutto: Ciò che non ti ho detto",
        body: [
          "Il 2019 segna la prima apparizione cinematografica di Maria Antonina Macaluso in 'Ciò che non ti ho detto', fiction TV ideata da Angelo Faraci per Sky, che lo vede attore protagonista nel ruolo di Gaetano Scalici per cinque anni. È l'unica serie tv italiana di soli siciliani e volti isolani noti.",
          "Maria Antonina partecipa alla fiction confermata da IMDb come uno dei lavori per cui è celebre. Le scene girate tra i vicoli dei borghi siciliani e le scogliere sul mare diventano il primo capitolo di un percorso che dalla Sicilia raggiungerà i festival internazionali. Nel 2021 la saga prosegue con 'Ciò che non ti ho detto Revolution', film tratto dalla fiction che consolidà il sodalizio artistico con Angelo Faraci.",
        ],
        image: "/images/biografia/cio-che-non-ti-ho-detto-ritratto.jpg",
        imageAlt: "Maria Antonina Macaluso e Angelo Faraci in ritratto dal set di Ciò che non ti ho detto Revolution (2021) — belvedere sul mare",
        aspect: "16/9",
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
    image: "/images/biografia/provvidenza-ritratto.jpg",
    imageAlt: "Maria Antonina Macaluso in ritratto dal set di Provvidenza — cesto di vimini, atmosfera rurale siciliana",
    sections: [
      {
        heading: "Provvidenza — Il cortometraggio girato a Montalbano Elicona",
        body: [
          "Provvidenza (2021) è un cortometraggio Rai Cinema scritto e diretto da Angelo Faraci, girato tra le strade di Montalbano Elicona e i paesaggi della Sicilia nord-orientale. La tematica centrale è la violenza sulle donne — fisica e psicologica — in una Sicilia che marginalizza la donna a strumento domestico. Un racconto asciutto, misurato, che parla di parità di genere e dignità.",
          "Il cast comprende Angelo Faraci, Marika Faraci, Maria Antonina Macaluso (protagonista femminile) e Sofia Siracusa, su soggetto di Angelo Faraci e Stefano La Rosa e sceneggiatura di Rosaria Lo Porto. L'opera vince il Premio Migliore Sceneggiatura al Ciak Film Festival International di Fiuggi (Oscar d'Oro) e il Premio Luchino Visconti al Ciclopi Summer Fest di Aci Trezza.",
          "Maria Antonina Macaluso è presente e premiata accanto al regista sul red carpet di Fiuggi — il riconoscimento che consacra la sua interpretazione e l'avvia al successo Rai.",
        ],
        links: [
          { text: "MessinaToday — Provvidenza, il film di Angelo Faraci girato a Montalbano", url: "https://www.messinatoday.it/attualita/provvidenza-montalbano-premio-sceneggiatura-ciak-film.html" },
          { text: "YouTube — Montalbano Elicona, presentato il corto \"Provvidenza\"", url: "https://youtu.be/LkUm_9p4hTg" },
          { text: "Facebook — Condivisione video Provvidenza", url: "https://www.facebook.com/share/v/1TWXSdREKR/" },
          { text: "CinemaItaliano.info — Provvidenza (2021), di Angelo Faraci", url: "https://www.cinemaitaliano.info/provvidenza" },
        ],
      },
    ],
  },
  {
    num: "IV",
    title: "Separati Mai e il ciclo siciliano (2023–2024)",
    body: [
      "Separati Mai, distribuito tra il 2023 e il 2024, segna una tappa di maturità. Il cinema di Faraci trova in Maria Antonina la interprete ideale: capace di reggere il peso di una storia senza piegarla al sentimento facile.",
    ],
    image: "/images/biografia/separati-mai-ritratto.jpg",
    imageAlt: "Maria Antonina Macaluso in posa davanti a un antico portale in pietra — ritratto ponderato dal set di Separati Mai",
    sections: [
      {
        heading: "Separati Mai — Sul set",
        body: [
          "Tra belvederi al tramonto, cavalli sellati e ville antiche, il set di Separati Mai attraversa la Sicilia dei borghi e delle colline. Il ciak accompagna ogni tappa: una produzione che fa del territorio il proprio personaggio principale.",
          "Maria Antonina Macaluso è presenza che colma l'inquadratura: sorridente nei dietro le quinte, intensa nelle scene. Il cinema di Faraci si fa racconto corale, dove ogni volto — attori, comparse, tecnici — contribuisce alla memoria del film.",
        ],
        image: "/images/biografia/separati-mai-cavallo-ciak.jpg",
        imageAlt: "Maria Antonina Macaluso sorridente accanto a un cavallo nero con il ciak — set di Separati Mai",
        aspect: "3/4",
      },
      {
        heading: "Separati Mai — Il ciak",
        body: [
          "Il ciak di Separati Mai reca i nomi della troupe e il titolo dell'opera: un oggetto simbolico che segna l'inizio di ogni scena. Per Maria Antonina tenerlo in mano significa firmare un capitolo del proprio percorso artistico.",
        ],
        image: "/images/biografia/separati-mai-ciak-villa.jpg",
        imageAlt: "Maria Antonina Macaluso sorridente con il ciak di Separati Mai nel giardino di una villa antica",
        aspect: "4/5",
      },
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
    title: "Il Mistero di Spartivento e Eccellenza Siciliana (2024–2025)",
    body: [
      "Il 2024–2025 è denso: Il Mistero di Spartivento esplora il territorio del Suspense mediterraneo, mentre Eccellenza Siciliana (2025) è un film per TV e Web che celebra l'eccellenza siciliana in viaggio per l'isola, con Maria Antonina tra le voci protagoniste.",
    ],
    image: "/images/biografia/spartivento-ciak.jpg",
    imageAlt: "Maria Antonina Macaluso con il ciak in mano sul set de Il Mistero di Spartivento — tramonto sul belvedere siciliano",
    sections: [
      {
        heading: "Il Mistero di Spartivento — Dietro le quinte",
        body: [
          "Un mistero che si snoda tra i venti della Sicilia, dove ogni silenzio è una confessione e ogni inquadratura nasconde un indizio. La regia atmosferica di Angelo Faraci trova in Maria Antonina Macaluso la interprete ideale: presenza che colma l'inquadratura senza chiedere licenza.",
          "Le riprese attraversano i borghi siciliani e i belvedere sull'oro del tramonto: una Sicilia che diventa personaggio, non solo sfondo.",
        ],
        image: "/images/biografia/spartivento-set.jpg",
        imageAlt: "Maria Antonina Macaluso con il ciak sul belvedere al tramonto — set de Il Mistero di Spartivento",
        aspect: "4/3",
      },
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
  {
    num: "VIII",
    title: "Content Creator — Il volto digitale della Sicilia",
    body: [],
    sections: [
      {
        heading: "Beauty Content Creator",
        body: [
          "Accanto alla carriera cinematografica, Maria Antonina Macaluso coltiva una presenza digitale significativa come content creator. Sul suo Instagram (@mary.macaluso09, 11.9K follower) e TikTok (@mary.macaluso, 5.2K follower) condivide contenuti su bellezza, lifestyle, food e Sicilia — costruendo una community autentica che la riconosce come 'vulcanica content creator' (Cronache Mediterranee, 2025).",
        ],
        image: "/images/content-creator/beauty-v2.jpg",
        imageAlt: "Maria Antonina Macaluso — Beauty Content Creator",
        aspect: "4/5",
        links: [
          { text: "Instagram (@mary.macaluso09, 11.9K follower)", url: "https://www.instagram.com/mary.macaluso09" },
          { text: "TikTok (@mary.macaluso, 5.2K follower)", url: "https://www.tiktok.com/@mary.macaluso" },
          { text: "(Cronache Mediterranee, 2025)", url: "https://cronachemediterranee.net/vulcanica-content-creator-maria-antonina-macaluso" },
        ],
      },
      {
        heading: "Lifestyle & Collaborazioni",
        body: [
          "Reduce da prestigiosi progetti RAI, è una content creator che collabora con importanti brand italiani, seguita da un vasto pubblico sui social. La sua bio ufficiale recita: 'Actress🎬 Content Creator 💄 Food lover🍋' — una sintesi perfetta di un talento che mescola cinema, bellezza e radici siciliane. Per collaborazioni: mariantonina63@gmail.com.",
        ],
        image: "/images/content-creator/lifestyle-v2.jpg",
        imageAlt: "Maria Antonina Macaluso — Lifestyle Content Creator",
        aspect: "4/5",
        links: [
          { text: "mariantonina63@gmail.com", url: "mailto:mariantonina63@gmail.com" },
        ],
      },
    ],
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
  /** URL IMDb del film (verificato) */
  imdbUrl?: string;
  /** Cast principale */
  cast?: string[];
  /** Genere cinematografico */
  genre?: string;
  /** Durata (es. "15 min", "90 min") */
  duration?: string;
  /** Trama completa */
  plot?: string;
  /** Curiosità verificate */
  trivia?: string[];
  /** Rassegna stampa: articoli verificati */
  press?: { title: string; source: string; url: string; excerpt?: string }[];
  /** Locandina/copertina del film */
  poster?: string;
}

// URL del profilo IMDb verificato di Maria Antonina Macaluso
export const MAM_IMDB_URL = "https://www.imdb.com/it/name/nm14708762";

export const FILMS: Film[] = [
  {
    slug: "dont-be-silent",
    year: "2020",
    title: "Don't Be Silent",
    role: "Attrice",
    poster: "/images/films/dont-be-silent-v2.jpg",
    director: "Angelo Faraci",
    type: "Cortometraggio",
    production: "Rai Cinema",
    description:
      "Cortometraggio Rai Cinema dal forte messaggio sociale: rompere il silenzio, trovare la propria voce.",
    longDescription:
      "Don't Be Silent (2020) è un cortometraggio prodotto da Rai Cinema e diretto da Angelo Faraci. L'opera affronta il tema del silenzio complice — quello che avvolge le violenze quotidiane — e lo fa con la grammatica asciutta del cinema sociale siciliano. Maria Antonina Macaluso è attrice del progetto, confermando la nascita di un sodalizio artistico che si svilupperà negli anni successivi.",
    imdbUrl: MAM_IMDB_URL,
    cast: ["Angelo Faraci", "Maria Antonina Macaluso"],
    genre: "Drammatico sociale",
    duration: "Cortometraggio",
    plot:
      "Il cortometraggio invita a spezzare il silenzio davanti alle violenze quotidiane, scegliendo la voce come atto di resistenza.",
    trivia: [
      "Prodotto da Rai Cinema nell'ambito del Progetto Nazionale sul Bullismo.",
      "Prima collaborazione ufficiale Maria Antonina Macaluso – Angelo Faraci per Rai Cinema.",
      "Foto dal set: Maria Antonina Macaluso con ciak 'DON'T BE SILENT' sulla spiaggia al tramonto.",
    ],
    press: [
      {
        title: "Maria Antonina Macaluso — Ancora Cinematografica",
        source: "Ancora Cinematografica",
        url: "https://cinematografica.altervista.org/maria-antonina-macaluso",
        excerpt:
          "Attrice di Cinema e TV ricordata per le pellicole Don't be Silent, Progetto Nazionale sul Bullismo.",
      },
    ],
  },
  {
    slug: "cio-che-non-ti-ho-detto",
    year: "2019",
    title: "Ciò che non ti ho detto",
    role: "Attrice",
    poster: "/images/films/cio-che-non-ti-ho-detto.jpg",
    director: "Angelo Faraci",
    type: "Fiction TV",
    production: "Sky",
    description:
      "Fiction TV ideata da Angelo Faraci. L'unica serie tv italiana di soli siciliani e volti isolani noti.",
    longDescription:
      "Ciò che non ti ho detto (2019) è una fiction TV ideata da Angelo Faraci per Sky, che lo vede attore protagonista nel ruolo di Gaetano Scalici per cinque anni. È l'unica serie tv italiana di soli siciliani e volti isolani noti. Maria Antonina Macaluso partecipa alla fiction, confermata da IMDb come uno dei lavori per cui è celebre. La serie viene distribuita su Sky e nel mercato estero.",
    imdbUrl: MAM_IMDB_URL,
    cast: ["Angelo Faraci (Gaetano Scalici)", "Maria Antonina Macaluso"],
    genre: "Fiction TV — Drammatico",
    duration: "Serie TV (2019)",
    plot:
      "Una fiction TV che racconta storie siciliane attraverso il personaggio di Gaetano Scalici, con un cast di soli volti isolani.",
    trivia: [
      "Fiction TV ideata da Angelo Faraci per Sky.",
      "Angelo Faraci attore protagonista per cinque anni nel ruolo di Gaetano Scalici.",
      "Unica serie tv italiana di soli siciliani e volti isolani noti.",
      "Distribuita su Sky e nel mercato estero.",
    ],
    press: [
      {
        title: "Maria Antonina Macaluso | IMDb",
        source: "IMDb",
        url: "https://www.imdb.com/it/name/nm14708762",
        excerpt:
          "È celebre per aver partecipato a Ciò che non ti ho detto (2019), Il mistero di Spartivento (2024).",
      },
    ],
  },
  {
    slug: "provvidenza",
    year: "2022",
    title: "Provvidenza",
    role: "Attrice protagonista",
    poster: "/images/films/provvidenza.jpg",
    director: "Angelo Faraci",
    type: "Cortometraggio",
    production: "Rai Cinema",
    description:
      "Cortometraggio Rai Cinema. Premio Migliore Sceneggiatura al Ciak Film Festival di Fiuggi 2022.",
    longDescription:
      "Provvidenza (2022) è un cortometraggio Rai Cinema scritto e diretto da Angelo Faraci, girato tra le strade di Montalbano Elicona e i paesaggi della Sicilia nord-orientale. La tematica centrale è la violenza sulle donne — fisica e psicologica — in una Sicilia che marginalizza la donna a strumento domestico. L'opera vince il Premio Migliore Sceneggiatura al Ciak Film Festival International di Fiuggi (Oscar d'Oro) e il Premio Luchino Visconti al Ciclopi Summer Fest di Aci Trezza. Maria Antonina Macaluso è la protagonista femminile del cortometraggio, premiata accanto al regista sul red carpet di Fiuggi.",
    imdbUrl: MAM_IMDB_URL,
    cast: ["Angelo Faraci", "Marika Faraci", "Maria Antonina Macaluso (protagonista femminile)", "Sofia Siracusa", "Rosaria Lo Porto (sceneggiatura)", "Stefano La Rosa (soggetto)"],
    genre: "Drammatico sociale",
    duration: "Cortometraggio (2021)",
    plot:
      "Provvidenza indaga la violenza sulle donne — fisica e psicologica — in una Sicilia che marginalizza la donna a strumento domestico. Parità di genere e dignità al centro di un racconto asciutto, misurato, girato tra le strade di Montalbano Elicona.",
    trivia: [
      "Premio Migliore Sceneggiatura al Ciak Film Festival International di Fiuggi 2022 (Oscar d'Oro).",
      "Premio Luchino Visconti al Ciclopi Summer Fest di Aci Trezza.",
      "Girato a Montalbano Elicona (Messina) e paesaggi siciliani.",
      "Maria Antonina Macaluso premiata sul red carpet di Fiuggi accanto ad Angelo Faraci.",
      "Cast: Angelo Faraci, Marika Faraci, Maria Antonina Macaluso, Sofia Siracusa.",
      "Soggetto: Angelo Faraci e Stefano La Rosa. Sceneggiatura: Rosaria Lo Porto.",
      "Tematica: violenza sulle donne, parità di genere, dignità femminile.",
    ],
    press: [
      {
        title: "Provvidenza, il film di Angelo Faraci girato a Montalbano",
        source: "MessinaToday",
        url: "https://www.messinatoday.it/attualita/provvidenza-montalbano-premio-sceneggiatura-ciak-film.html",
        excerpt:
          "Accanto ad Angelo Faraci è stata presente e premiata anche la protagonista di Provvidenza, la compagna di quest'ultimo, Maria Antonina Macaluso.",
      },
      {
        title: "Provvidenza di Angelo Faraci vince il premio come miglior sceneggiatura al Ciak Film Festival di Fiuggi",
        source: "AM Notizie",
        url: "https://www.amnotizie.it/2022/09/13/provvidenza-di-angelo-faraci-vince-il-premio-come-miglior-sceneggiatura-al-ciak-film-festival-di-fiuggi",
        excerpt:
          "Il giovane attore e regista siciliano Angelo Faraci ha vinto il premio per la miglior sceneggiatura al Ciak Film Festival di Fiuggi.",
      },
      {
        title: "Montalbano Elicona, presentato il corto \"Provvidenza\" di Angelo Faraci",
        source: "YouTube",
        url: "https://youtu.be/LkUm_9p4hTg",
        excerpt:
          "La tematica del film è la violenza sulla donna, fisica e psicologica, in una Sicilia che marginalizza la donna a strumento domestico.",
      },
      {
        title: "Provvidenza — Condivisione video",
        source: "Facebook",
        url: "https://www.facebook.com/share/v/1TWXSdREKR/",
        excerpt:
          "Condivisione del cortometraggio Provvidenza di Angelo Faraci con Maria Antonina Macaluso.",
      },
      {
        title: "Provvidenza (2021), di Angelo Faraci",
        source: "CinemaItaliano.info",
        url: "https://www.cinemaitaliano.info/provvidenza",
        excerpt:
          "Cast: Angelo Faraci, Marika Faraci, Maria Antonina Macaluso, Sofia Siracusa. Soggetto: Angelo Faraci e Stefano La Rosa. Sceneggiatura: Rosaria Lo Porto.",
      },
    ],
  },
  {
    slug: "pietrazita",
    year: "2023",
    title: "Pietrazita",
    role: "Attrice protagonista",
    poster: "/images/films/pietrazita.jpg",
    director: "Angelo Faraci",
    type: "Cortometraggio",
    production: "Rai Cinema",
    description:
      "Cortometraggio Rai Cinema. Una storia di pietra, di luce e di radici siciliane.",
    longDescription:
      "Pietrazita (2023) è un cortometraggio Rai Cinema scritto e diretto da Angelo Faraci, ambientato a Sant'Angelo di Brolo, nei Nebrodi. Il titolo prende il nome dalla pietra locale che diventa metafora di un racconto di radici, memoria e appartenenza. Nel cast, accanto ad Angelo Faraci e Maria Antonina Macaluso (protagonista femminile), figura Benedetto Lo Monaco. L'opera si classifica al 2° posto al Tulipani di Seta Nera XVI edizione, Premio Sorriso Rai Cinema Channel.",
    imdbUrl: MAM_IMDB_URL,
    cast: ["Angelo Faraci", "Maria Antonina Macaluso", "Benedetto Lo Monaco", "Beatrice Ingegneri", "Antonello Di Buono", "Gioele Costa"],
    genre: "Drammatico",
    duration: "Cortometraggio",
    plot:
      "Una storia di pietra e di luce che si snoda tra i Nebrodi, confermando la sintonia artistica tra attrice e regista.",
    trivia: [
      "2° classificato al Tulipani di Seta Nera XVI edizione, Premio Sorriso Rai Cinema Channel.",
      "Girato a Sant'Angelo di Brolo, nei Nebrodi.",
      "Cast: Benedetto Lo Monaco, Beatrice Ingegneri, Antonello Di Buono, Gioele Costa.",
    ],
    press: [
      {
        title: "Pietrazita (2023), di Angelo Faraci",
        source: "Cinema Italiano",
        url: "https://www.cinemaitaliano.info/Pietrazita",
        excerpt:
          "Cast: Benedetto Lo Monaco, Beatrice Ingegneri, Maria Antonina Macaluso, Antonello Di Buono, Gioele Costa.",
      },
      {
        title: "L'attrice camporealese Maria Antonina Macaluso si racconta",
        source: "Radio Amica",
        url: "https://www.radioamica.it/da-un-piccolo-comune-allincontro-con-lattore-regista-angelo-faraci-lattrice-camporealese-maria-antonina-macaluso-si-racconta",
        excerpt:
          "Ha appena concluso di girare il nuovo progetto Rai Cinema Pietrazita.",
      },
    ],
  },
  {
    slug: "separati-mai",
    year: "2023–2024",
    title: "Separati Mai",
    role: "Attrice protagonista",
    poster: "/images/films/separati-mai.jpg",
    director: "Angelo Faraci",
    type: "Lungometraggio",
    production: "Independent",
    description:
      "Una storia di legami che resistono alla distanza e al tempo.",
    longDescription:
      "Separati Mai, distribuito tra il 2023 e il 2024, segna una tappa di maturità nella filmografia di Angelo Faraci. Il cinema di Faraci trova in Maria Antonina Macaluso l'interprete ideale: capace di reggere il peso di una storia senza piegarla al sentimento facile. Una pellicola che affronta il tema del legame indissolubile come forma di resistenza emotiva.",
    imdbUrl: MAM_IMDB_URL,
    cast: ["Angelo Faraci", "Maria Antonina Macaluso"],
    genre: "Drammatico",
    duration: "Lungometraggio",
    plot:
      "Una dichiarazione d'amore in immagini: il legame indissolubile che supera ogni distanza, ogni tempo, ogni separazione.",
  },
  {
    slug: "il-mistero-di-spartivento",
    year: "2024–2025",
    title: "Il Mistero di Spartivento",
    role: "Attrice protagonista",
    poster: "/images/films/il-mistero-di-spartivento.jpg",
    director: "Angelo Faraci",
    type: "Lungometraggio",
    production: "Rai Cinema",
    description:
      "Suspense mediterraneo. Un mistero tra i venti della Sicilia.",
    longDescription:
      "Il Mistero di Spartivento (2024–2025) esplora il territorio del Suspense mediterraneo. Un mistero che si snoda tra i venti e i paesaggi della Sicilia, con la regia atmosferica di Angelo Faraci. Maria Antonina Macaluso è protagonista femminile in un racconto dove ogni inquadratura nasconde un indizio e ogni silenzio è una confessione.",
    imdbUrl: MAM_IMDB_URL,
    cast: ["Angelo Faraci", "Maria Antonina Macaluso"],
    genre: "Mistero / Suspense",
    duration: "Lungometraggio",
    plot:
      "Un mistero che si snoda tra i venti della Sicilia, dove ogni silenzio è una confessione e ogni inquadratura nasconde un indizio.",
  },
  {
    slug: "vanina",
    year: "2024",
    title: "Vanina — Un vicequestore a Catania",
    role: "Partecipazione — 1 episodio",
    poster: "/images/films/vanina.jpg",
    director: "Davide Marengo",
    type: "Serie TV",
    production: "Canale 5 — Mediaset",
    description:
      "Serie TV Canale 5 / Mediaset, regia di Davide Marengo. Maria Antonina Macaluso ha partecipato a un episodio della prima stagione.",
    longDescription:
      "Vanina — Un vicequestore a Catania (2024) è una serie televisiva trasmessa su Canale 5 (Mediaset), regia di Davide Marengo, basata sui romanzi di Cristina Cassar Scalia. La serie segue le indagini di Vanina Guarrasi, vicequestore della sezione omicidi di Catania. Maria Antonina Macaluso ha partecipato a un episodio della prima stagione (IMDb, 2024). Una partecipazione che segna la presenza dell'attrice in una produzione Mediaset di prime time accanto a Giusy Buscemi (protagonista) e al cast corale della serie.",
    imdbUrl: "https://www.imdb.com/it/title/tt31721916/fullcredits",
    cast: ["Giusy Buscemi (Vanina Guarrasi)", "Claudio Castrogiovanni", "Carmelo Spanò", "Corrado Fortuna", "Manfredi Monterreale", "Dajana Roncione", "Maria Antonina Macaluso (1 episodio)"],
    genre: "Serie TV — Poliziesco / Drammatico",
    duration: "1 episodio (2024)",
    plot:
      "Vanina Guarrasi, vicequestore della sezione omicidi di Catania, indaga su casi complessi tra i misteri della Sicilia orientale. Maria Antonina Macaluso ha partecipato a un episodio della prima stagione.",
    trivia: [
      "Serie basata sui romanzi di Cristina Cassar Scalia.",
      "Protagonista: Giusy Buscemi nel ruolo di Vanina Guarrasi.",
      "Maria Antonina Macaluso: partecipazione 1 episodio 2024 (IMDb).",
      "Regia di Davide Marengo per Canale 5 / Mediaset.",
    ],
    press: [
      {
        title: "Vanina (Serie TV 2024) — Interpreti e troupe",
        source: "IMDb",
        url: "https://www.imdb.com/it/title/tt31721916/fullcredits",
        excerpt:
          "Maria Antonina Macaluso. (voce). 1 episodio • 2024.",
      },
      {
        title: "Vanina - Un vicequestore a Catania",
        source: "Wikipedia",
        url: "https://it.wikipedia.org/wiki/Vanina_-_Un_vicequestore_a_Catania",
        excerpt:
          "Giovanna 'Vanina' Guarrasi, interpretata da Giusy Buscemi. È la figlia di Marianna e Giovanni e nuovo vicequestore della sezione omicidi di Catania.",
      },
    ],
  },
  {
    slug: "sabbie-nere",
    year: "2023",
    title: "Sabbie Nere",
    role: "Attrice",
    director: "Davide Marengo",
    type: "Serie TV",
    production: "Mediaset",
    description:
      "Serie TV Mediaset, regia di Davide Marengo. Partecipazione di Maria Antonina Macaluso.",
    longDescription:
      "Sabbie Nere è una serie TV Mediaset con regia di Davide Marengo, che vede la partecipazione di Maria Antonina Macaluso accanto ad Angelo Faraci. La produzione conferma la doppia presenza della coppia artistica anche nelle produzioni televisive Mediaset del 2023.",
    imdbUrl: MAM_IMDB_URL,
    cast: ["Angelo Faraci", "Maria Antonina Macaluso"],
    genre: "Serie TV — Drammatico",
    duration: "Serie TV Mediaset (2023)",
    plot:
      "Serie TV Mediaset, regia di Davide Marengo.",
    trivia: [
      "Serie TV Mediaset, regia di Davide Marengo (2023).",
      "Maria Antonina Macaluso accanto ad Angelo Faraci nel cast.",
    ],
  },
  {
    slug: "pochi-attimi",
    year: "2026",
    title: "Pochi Attimi",
    role: "Attrice protagonista",
    poster: "/images/films/pochi-attimi.jpg",
    director: "Angelo Faraci",
    type: "Lungometraggio",
    production: "Ancora Cinematografica + Ventitreesima Strada",
    description:
      "Il nuovo capitolo. Pochi attimi — il titolo è già una poetica.",
    longDescription:
      "Pochi Attimi, in uscita nel 2026, è il punto più alto, finora, del percorso artistico condiviso tra Maria Antonina Macaluso e Angelo Faraci. Cast: Angelo Faraci (anche attore protagonista nel ruolo di Salvatore), Rosaria Lo Porto (sceneggiatura su soggetto di Angelo Faraci), Totò Borgese, Marika Faraci, Salvatore Martines, Mario Romano, Rosanna Barbera, Enio Drovandi e Massimo Spata (partecipazioni straordinarie). Direzione produzione: Salvatore Alicata. Il cinema come arte di riempire il breve spazio tra un respiro e l'altro.",
    imdbUrl: MAM_IMDB_URL,
    cast: [
      "Angelo Faraci (Salvatore)",
      "Maria Antonina Macaluso (ruolo principale femminile)",
      "Rosaria Lo Porto",
      "Totò Borgese",
      "Marika Faraci",
      "Salvatore Martines",
      "Mario Romano",
      "Rosanna Barbera",
      "Enio Drovandi (partecipazione straordinaria)",
      "Massimo Spata (partecipazione straordinaria)",
    ],
    genre: "Drammatico",
    duration: "Lungometraggio",
    plot:
      "Il cinema come arte di riempire il breve spazio tra un respiro e l'altro. Pochi attimi — il titolo è già una poetica.",
    trivia: [
      "Direzione produzione: Salvatore Alicata.",
      "Sceneggiatura di Rosaria Lo Porto su soggetto di Angelo Faraci.",
      "Cast: Faraci, Lo Porto, Borgese, Martines, Romano, Barbera, Drovandi, Spata.",
    ],
    press: [
      {
        title: "La valle del Belice raccontata dal cinema",
        source: "InfoBelice",
        url: "https://www.infobelice.it/2025/12/20/la-valle-del-belice-raccontata-dal-cinema-la-camporealese-maria-antonina-macaluso-nel-film-pochi-attimi-di-angelo-faraci",
        excerpt:
          "Maria Antonina Macaluso nel film Pochi Attimi di Angelo Faraci, nella Valle del Belice.",
      },
    ],
  },
];

// ============================================
// ALTRE PRODUZIONI — Opere distinte dalla filmografia principale
// Include: Cortometraggi, Pubblicità, Speciale TV, Serie TV internazionali
// Fonti verificate: IMDb nm14708762, everybodywiki, mymovies.it, Sicilmedtv, Orawebtv
// ============================================

export const ALTRE_PRODUZIONI: Film[] = [
  {
    slug: "eccellenza-siciliana",
    year: "2025",
    title: "Eccellenza Siciliana",
    role: "Attrice",
    poster: "/images/films/eccellenza-siciliana.jpg",
    director: "Angelo Faraci",
    type: "Film TV / Web — Documentario enogastronomico",
    production: "Angelo Faraci — Produzione indipendente",
    description:
      "Film TV e Web (2025) diretto da Angelo Faraci. Un viaggio attraverso la Sicilia alla scoperta dei prodotti di eccellenza, del cibo tipico e dei luoghi più suggestivi dell'isola, con Angelo Faraci e Maria Antonina Macaluso come protagonisti in viaggio.",
    longDescription:
      "Eccellenza Siciliana (2025) è un film per TV e Web diretto da Angelo Faraci, con Angelo Faraci e Maria Antonina Macaluso come protagonisti. Un'opera su larga scala che, con i suoi protagonisti in viaggio per la Sicilia, mostra i migliori luoghi per gustare cibo tipico e prodotti di eccellenza dell'isola. Un omaggio al territorio che si fa racconto corale, confermato da IMDb (tt38949464). Il film celebra l'enogastronomia siciliana, le tradizioni artigianali e i paesaggi dell'isola, con Maria Antonina Macaluso che porta la propria voce e presenza in qualità di attrice. L'opera rappresenta uno dei capitoli più territoriali e identitari del sodalizio artistico tra Maria Antonina Macaluso e Angelo Faraci, confermando l'attenzione del regista verso le radici siciliane e i prodotti d'eccellenza dell'isola.",
    imdbUrl: "https://www.imdb.com/title/tt38949464",
    cast: [
      "Angelo Faraci (regista e attore)",
      "Maria Antonina Macaluso (attrice)",
    ],
    genre: "Documentario / Film TV — Enogastronomico",
    duration: "Film TV / Web (2025)",
    plot:
      "Un viaggio attraverso la Sicilia alla scoperta dei prodotti di eccellenza, del cibo tipico e dei luoghi più suggestivi dell'isola. Angelo Faraci e Maria Antonina Macaluso protagonisti in un racconto corale dedicato al territorio siciliano.",
    trivia: [
      "Film per TV e Web diretto da Angelo Faraci (2025).",
      "IMDb: tt38949464.",
      "Soggetto: viaggio enogastronomico e culturale in Sicilia.",
      "Angelo Faraci e Maria Antonina Macaluso protagonisti in viaggio per l'isola.",
      "Celebrazione dei prodotti di eccellenza siciliani.",
      "Opera confermata da IMDb e everybodywiki.",
    ],
    press: [
      {
        title: "Eccellenza Siciliana (2025) — IMDb",
        source: "IMDb",
        url: "https://www.imdb.com/title/tt38949464",
        excerpt:
          "Eccellenza Siciliana (2025) — Film TV/Web diretto da Angelo Faraci, con Angelo Faraci e Maria Antonina Macaluso.",
      },
      {
        title: "Angelo Faraci — EverybodyWiki",
        source: "EverybodyWiki",
        url: "https://it.everybodywiki.com/Angelo_Faraci_(Attore)",
        excerpt:
          "Eccellenza Siciliana (2025) — Film TV/Web che celebra i prodotti di eccellenza siciliani, con Angelo Faraci e Maria Antonina Macaluso.",
      },
      {
        title: "Maria Antonina Macaluso — IMDb",
        source: "IMDb",
        url: "https://www.imdb.com/it/name/nm14708762",
        excerpt:
          "Eccellenza Siciliana (2025) tra le opere di Maria Antonina Macaluso.",
      },
    ],
  },
  {
    slug: "creo-kitchens-cucine-italiane",
    year: "2021",
    title: "Creo Kitchens — Cucine Italiane",
    role: "Partecipazione (voce)",
    poster: "/images/films/creo-kitchens.jpg",
    director: "Angelo Faraci",
    type: "Cortometraggio — Pubblicità Sky",
    production: "Creo Kitchens — Cucine Italiane (Sky)",
    description:
      "Cortometraggio pubblicitario del 2021 per Creo Kitchens — Cucine Italiane (Viale del Fante, 61 - Altomonte, Palermo), trasmesso su Sky. Maria Antonina Macaluso partecipa con ruolo di voce, accanto ad Angelo Faraci (attore protagonista) e Marika Saveria Faraci (voce). Lo screenshot d'epoca mostra il set con i due presentatori nello showroom Creo con elettrodomestici e logo CREO esposto.",
    longDescription:
      "Creo Kitchens — Cucine Italiane (2021) è un cortometraggio pubblicitario prodotto per Sky, girato integralmente in Sicilia presso lo showroom Creo di Viale del Fante, 61 ad Altomonte (Palermo). La regia e la sceneggiatura sono di Angelo Faraci, già attore protagonista della campagna nel 2020. Maria Antonina Macaluso partecipa con ruolo di voce, affiancando Marika Saveria Faraci (voce) nel cast vocale. Lo screenshot storico mostra i due presentatori nello showroom Creo: Angelo Faraci (uomo in giacca scura e camicia blu) e una presentatrice (donna in giacca rossa), circondati da elettrodomestici bianchi con fiocchi rossi e dal logo CREO con indirizzo 'Viale del Fante, 61 - Altomonte (Pa)'. La campagna pubblicitaria è stata trasmessa sui canali Sky e celebra l'eccellenza delle cucine italiane artigianali, con una narrazione che intreccia tradizione siciliana e design contemporaneo. L'opera rappresenta una delle prime collaborazioni professionali di Maria Antonina Macaluso nel campo della pubblicità televisiva, sotto la direzione di Angelo Faraci. La produzione è stata documentata dal TGS (TeleGiornale di Sicilia) con un servizio dedicato alla campagna pubblicitaria nello showroom Creo, che ha visto coinvolti Angelo Faraci, Marika Saveria Faraci e Maria Antonina Macaluso.",
    imdbUrl: "https://www.imdb.com/it/name/nm11444273",
    cast: [
      "Angelo Faraci (attore protagonista, sceneggiatore)",
      "Marika Saveria Faraci (voce)",
      "Maria Antonina Macaluso (voce)",
      "Rosaria Lo Porto (sceneggiatura)",
    ],
    genre: "Cortometraggio — Pubblicità televisiva Sky",
    duration: "Cortometraggio (2021)",
    plot:
      "Spot pubblicitario Sky per Creo Kitchens — Cucine Italiane (Viale del Fante, 61 - Altomonte, Palermo). Angelo Faraci è attore protagonista nello showroom Creo, con Maria Antonina Macaluso e Marika Saveria Faraci come voci narranti. La campagna celebra le cucine italiane artigianali con design contemporaneo.",
    trivia: [
      "Pubblicità italiana trasmessa su Sky nel 2020-2021.",
      "Angelo Faraci è stato attore protagonista della campagna nel 2020.",
      "Maria Antonina Macaluso partecipa con ruolo di voce nel 2021.",
      "Marika Saveria Faraci (voce) — sorella di Angelo Faraci, docente di comunicazione e pubblicità a Palermo.",
      "Showroom Creo: Viale del Fante, 61 - Altomonte (Palermo).",
      "Girato integralmente in Sicilia.",
      "Sceneggiatura di Angelo Faraci e Rosaria Lo Porto.",
      "Servizio TGS (TeleGiornale di Sicilia) dedicato alla campagna pubblicitaria nello showroom Creo.",
    ],
    press: [
      {
        title: "Angelo Faraci — Biografia (MyMovies)",
        source: "MyMovies",
        url: "https://www.mymovies.it/persone/angelo-faraci/399862",
        excerpt:
          "Nel 2020 partecipa come attore alla pubblicità italiana Creo kitchens per Sky.",
      },
      {
        title: "Angelo Faraci — Ancora Cinematografica",
        source: "Ancora Cinematografica (Altervista)",
        url: "https://cinematografica.altervista.org/angelo-faraci",
        excerpt:
          "Attore protagonista nel 2020 per la pubblicità italiana Creo kitchens per Sky.",
      },
      {
        title: "Angelo Faraci — EverybodyWiki",
        source: "EverybodyWiki",
        url: "https://it.everybodywiki.com/Angelo_Faraci_(Attore)",
        excerpt:
          "Creo Kitchens - Cucine Italiane (2021) — Corto con sceneggiatura di Angelo Faraci.",
      },
      {
        title: "Creo Kitchens — Cucine Italiane (2021) — Sito Angelo Faraci",
        source: "angelo-faraci.vercel.app",
        url: "https://angelo-faraci.vercel.app/film/creo-kitchens-cucine-italiane",
        excerpt:
          "Creo Kitchens – Cucine Italiane è un'opera del 2021 che vede la partecipazione di Angelo Faraci, attore, regista e produttore siciliano. Pubblicità italiana per Sky.",
      },
      {
        title: "Marika Faraci — IMDb",
        source: "IMDb",
        url: "https://www.imdb.com/name/nm14708763",
        excerpt:
          "Creo Kitchens (2021) — Short — (voice, as Marika Saveria Faraci).",
      },
      {
        title: "Marika Faraci — Docente Comunicazione Pubblicità (Altervista)",
        source: "Marika Faraci (Altervista)",
        url: "https://marikafaraci.altervista.org",
        excerpt:
          "Marika Faraci — Docente in Comunicazione pubblica, d'impresa, pubblicità, Marketing e Social Media. Palermo.",
      },
      {
        title: "Da Sky al cinema, la storia di Angelo Faraci raccontata in tv (MessinaToday)",
        source: "MessinaToday",
        url: "https://www.messinatoday.it/social/storia-angelo-faraci-programma-tv-2000.html",
        excerpt:
          "Da Sky al cinema, la storia di Angelo Faraci raccontata in tv: 'Ho mostrato al pubblico la Sicilia più bella'.",
      },
      {
        title: "Creo Kitchens Sicilia, Calabria e Basilicata — Pagina Facebook ufficiale",
        source: "Facebook (Creo Kitchens Sicilia)",
        url: "https://www.facebook.com/p/Creo-Kitchens-Sicilia-Calabria-e-Basilicata-100070919761794",
        excerpt:
          "Creo Kitchens, il nuovo brand del Gruppo LUBE destinato a rivoluzionare il mondo delle cucine. Design, qualità e convenienza si incontrano per creare cucine eccezionali.",
      },
      {
        title: "TGS — TeleGiornale di Sicilia (servizio Creo Kitchens)",
        source: "TGS (TeleGiornale di Sicilia)",
        url: "https://www.dailymotion.com/video/xahuzu2",
        excerpt:
          "Servizio TGS dedicato alla campagna pubblicitaria Creo Kitchens nello showroom di Altomonte (Palermo) con Angelo Faraci, Marika Saveria Faraci e Maria Antonina Macaluso.",
      },
    ],
  },
  {
    slug: "red-bull-minas-riders",
    year: "2016",
    title: "Red Bull Minas Riders",
    role: "Partecipazione (voce) — Serie TV",
    poster: "/images/films/red-bull-minas-riders.jpg",
    director: "Ryan Meyers",
    type: "Serie TV — Documentario sportivo Enduro",
    production: "Red Bull Media House",
    description:
      "Serie TV documentario-sportiva Red Bull Minas Riders (2016–in corso), prodotta da Red Bull Media House. Maria Antonina Macaluso partecipa con ruolo di voce nell'episodio 'Bello Horizonte, 2017' diretto da Ryan Meyers. Il logo ufficiale della manifestazione — due tori rossi Red Bull su sfondo giallo sole con scudo Minas Riders — identifica la competizione di enduro estremo in Brasile.",
    longDescription:
      "Red Bull Minas Riders è una serie TV documentario-sportiva prodotta da Red Bull Media House, dedicata alle competizioni di enduro estremo. La serie segue i piloti più talentuosi del mondo attraverso le prove più impegnative dei Red Bull Hard Enduro events in Brasile, nello stato di Minas Gerais. Maria Antonina Macaluso partecipa con ruolo di voce nell'episodio 'Bello Horizonte, 2017' (titolo originale: 'Red Bull Minas Riders: Bello Horizonte, 2017'), diretto da Ryan Meyers. L'episodio, ambientato a Bello Horizonte, vede anche la partecipazione di Angelo Faraci (voce), Marika Saveria Faraci (voce) e Troy Manering come narratore. Il logo ufficiale della manifestazione — due tori rossi Red Bull che si fronteggiano davanti a un sole giallo, sovrapposti a uno scudo con silhouette di montagne e manubri di moto — identifica la competizione brasiliana di enduro estremo. La serie è stata distribuita internazionalmente dal 2016 ed è disponibile su Red Bull TV.",
    imdbUrl: "https://www.imdb.com/title/tt10726880",
    cast: [
      "Graham Jarvis",
      "Alfredo Gomez",
      "Paul Bolton",
      "Lars Enöckl",
      "Bruno Crivilin",
      "Angelo Faraci (voce)",
      "Marika Saveria Faraci (voce)",
      "Maria Antonina Macaluso (voce)",
      "Troy Manering (narratore)",
    ],
    genre: "Serie TV — Documentario sportivo / Enduro estremo",
    duration: "Serie TV (2016–in corso) — 1 episodio (2017)",
    plot:
      "Red Bull Minas Riders è una serie documentario che segue le competizioni di enduro estremo più impegnative del mondo, in Brasile (Minas Gerais). Maria Antonina Macaluso partecipa come voce nell'episodio 'Bello Horizonte, 2017' diretto da Ryan Meyers.",
    trivia: [
      "Serie TV prodotta da Red Bull Media House, distribuita internazionalmente dal 2016.",
      "Competizione di enduro estremo in Brasile (Minas Gerais).",
      "Maria Antonina Macaluso partecipa con ruolo di voce nell'episodio 'Bello Horizonte, 2017'.",
      "Episodio diretto da Ryan Meyers.",
      "Cast include Angelo Faraci (voce), Marika Saveria Faraci (voce), Troy Manering (narratore).",
      "Serie disponibile su Red Bull TV e IMDb (tt10726880).",
      "Genere: enduro estremo / hard enduro.",
      "Logo ufficiale: due tori rossi Red Bull su sole giallo con scudo Minas Riders.",
    ],
    press: [
      {
        title: "Red Bull Minas Riders — Serie TV (2016–) — IMDb",
        source: "IMDb",
        url: "https://www.imdb.com/title/tt10726880",
        excerpt:
          "Top Cast: Graham Jarvis, Alfredo Gomez, Paul Bolton, Lars Enöckl, Bruno Crivilin, Angelo Faraci, Marika Faraci, Maria Antonina Macaluso.",
      },
      {
        title: "Red Bull Minas Riders: Bello Horizonte, 2017 (TV Episode) — IMDb",
        source: "IMDb",
        url: "https://www.imdb.com/title/tt10726932",
        excerpt:
          "Bello Horizonte, 2017: Directed by Ryan Meyers. With Angelo Faraci, Marika Faraci, Maria Antonina Macaluso, Troy Manering.",
      },
      {
        title: "Red Bull Minas Riders: Bello Horizonte, 2017 — Full Credits",
        source: "IMDb",
        url: "https://www.imdb.com/title/tt10726932/fullcredits",
        excerpt:
          "Cast: Angelo Faraci (voice), Marika Faraci (voice, as Marika Saveria Faraci), Maria Antonina Macaluso (voice).",
      },
      {
        title: "Red Bull Minas Riders (2016) — Kino · OceniTo",
        source: "Kino · OceniTo",
        url: "https://kino.oceniamy.to/serial/red-bull-minas-riders-3248543",
        excerpt:
          "Bruno Crivilin, Angelo Faraci, Marika Faraci, Troy Manering (Narrated by), Maria Antonina Macaluso.",
      },
      {
        title: "Мария Антонина Макалузо — актриса (Kinorium)",
        source: "Kinorium",
        url: "https://ru.kinorium.com/name/7636464",
        excerpt:
          "Maria Antonina Macaluso — attrice. Red Bull Minas Riders (2016 – ...) tra le opere.",
      },
    ],
  },
  {
    slug: "di-tutto-un-po",
    year: "2025",
    title: "Di Tutto un pò",
    role: "Speaker — Speciale TV",
    poster: "/images/films/di-tutto-un-po.jpg",
    director: "Angelo Faraci",
    type: "Speciale TV — Talk show",
    production: "Sicilmedtv / Orawebtv",
    description:
      "Speciale TV 'Di Tutto un pò' (2025) trasmesso su Sicilmedtv e Orawebtv. Maria Antonina Macaluso è Speaker del programma, affiancando Angelo Faraci (Showman/Inviato) e Melissa Venuto (Host). Il logo ufficiale del programma — scritta bianca 'Di tutto UN PO'' su gradiente arancione/giallo ocra — identifica il talk show siciliano.",
    longDescription:
      "Di Tutto un pò (2025) è uno Speciale TV trasmesso su Sicilmedtv e Orawebtv, con formato talk show. Il programma esplora temi di attualità, cultura siciliana e intrattenimento, con uno stile fresco e diretto. Maria Antonina Macaluso ricopre il ruolo di Speaker, portando la propria voce e personalità al programma. Angelo Faraci è Showman e Inviato, mentre Melissa Venuto è Host. Il logo ufficiale del programma — scritta bianca 'Di tutto UN PO'' su gradiente caldo arancione/giallo ocra — identifica il talk show con uno stile comunicativo rassicurante, informale e inclusivo. Il programma rappresenta un'evoluzione nella carriera televisiva di Maria Antonina Macaluso, che dopo le esperienze cinematografiche approda al formato TV talk show, confermandosi come voce versatile della produzione siciliana. La trasmissione è disponibile sui canali streaming di Sicilmedtv e Orawebtv.",
    imdbUrl: "https://www.imdb.com/it/title/tt39301887/fullcredits/?ref_=ttch_ov_ql_1",
    cast: [
      "Angelo Faraci (Showman / Inviato)",
      "Maria Antonina Macaluso (Speaker)",
      "Melissa Venuto (Host)",
    ],
    genre: "Speciale TV — Talk show / Intrattenimento",
    duration: "Speciale TV (2025)",
    plot:
      "Speciale TV 'Di Tutto un pò' trasmesso su Sicilmedtv e Orawebtv. Talk show con Angelo Faraci (Showman/Inviato), Maria Antonina Macaluso (Speaker) e Melissa Venuto (Host).",
    trivia: [
      "Speciale TV del 2025 trasmesso su Sicilmedtv e Orawebtv.",
      "Maria Antonina Macaluso ricopre il ruolo di Speaker.",
      "Angelo Faraci è Showman e Inviato del programma.",
      "Melissa Venuto è Host del programma.",
      "Format: talk show con temi di attualità e cultura siciliana.",
      "Disponibile su IMDb (tt39301887).",
      "Logo ufficiale: scritta bianca 'Di tutto UN PO'' su gradiente arancione/giallo ocra.",
    ],
    press: [
      {
        title: "Di Tutto un pò (Speciale TV 2025) — Interpreti e troupe",
        source: "IMDb",
        url: "https://www.imdb.com/it/title/tt39301887/fullcredits/?ref_=ttch_ov_ql_1",
        excerpt:
          "Cast: Angelo Faraci (Showman/Inviato), Maria Antonina Macaluso (Speaker), Melissa Venuto (Host).",
      },
      {
        title: "Maria Antonina Macaluso — Orawebtv",
        source: "Orawebtv",
        url: "https://www.orawebtv.it/maria-antonina-macaluso-vulcanica-content-creator-e-nuova-voce-di-di-tutto-un-po",
        excerpt:
          "Maria Antonina Macaluso, vulcanica content creator e nuova voce di 'Di Tutto un pò'.",
      },
      {
        title: "Sicilmedtv — Maria Antonina Macaluso content",
        source: "Sicilmedtv",
        url: "https://www.sicilmedtv.it/maria-antonina-macaluso-content",
        excerpt:
          "Maria Antonina Macaluso — content creator e Speaker per 'Di Tutto un pò' su Sicilmedtv.",
      },
      {
        title: "Maria Antonina Macaluso (@mary.macaluso09) — Instagram",
        source: "Instagram",
        url: "https://www.instagram.com/mary.macaluso09",
        excerpt:
          "Riferimenti a 'Di Tutto un pò' su Sicilmedtv e Orawebtv — Maria Antonina Macaluso content creator e Speaker.",
      },
    ],
  },
];

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  /** URL fonte verificata (opzionale) */
  sourceUrl?: string;
  sourceName?: string;
  /** Video YouTube associato (opzionale) */
  youtubeId?: string;
  youtubeTitle?: string;
}

export const TIMELINE: TimelineEvent[] = [
  {
    year: "2001",
    title: "Nasce a Bologna",
    description:
      "Il 9 novembre 2001 Maria Antonina Macaluso nasce a Bologna. Bologna è il primo respiro; la Sicilia, dove cresce a Camporeale in provincia di Palermo, è tutto il resto.",
  },
  {
    year: "2019",
    title: "Ciò che non ti ho detto — Fiction TV Sky",
    description:
      "Fiction TV ideata da Angelo Faraci per Sky. Angelo è attore protagonista nel ruolo di Gaetano Scalici per cinque anni. L'unica serie tv italiana di soli siciliani e volti isolani noti. Maria Antonina partecipa alla fiction, confermata da IMDb.",
    sourceUrl: "https://www.imdb.com/it/name/nm14708762",
    sourceName: "IMDb",
    youtubeId: "N3irUShU0eU",
    youtubeTitle: "Ciò che non ti ho detto — Revolution",
  },
  {
    year: "2019",
    title: "Incontro con Angelo Faraci",
    description:
      "Il 14 agosto 2019, a Palermo, Maria Antonina incontra il regista Angelo Faraci. L'indomani del compleanno di Angelo, nato il 13 agosto, inizia un sodalizio artistico e di vita destinato a durare.",
    sourceUrl: "https://www.radioamica.it/da-un-piccolo-comune-allincontro-con-lattore-regista-angelo-faraci-lattrice-camporealese-maria-antonina-macaluso-si-racconta",
    sourceName: "Radio Amica",
  },
  {
    year: "2020",
    title: "Don't Be Silent",
    description:
      "Cortometraggio Rai Cinema, regia di Angelo Faraci. Primo progetto ufficiale della coppia per Rai Cinema, nell'ambito del Progetto Nazionale sul Bullismo.",
    sourceUrl: "https://cinematografica.altervista.org/maria-antonina-macaluso",
    sourceName: "Ancora Cinematografica",
    youtubeId: "1NMm-4a8lwo",
    youtubeTitle: "Don't be silent — Cortometraggio di Angelo Faraci",
  },
  {
    year: "2022",
    title: "Provvidenza — Premio a Fiuggi",
    description:
      "Cortometraggio Rai Cinema girato a Montalbano. Vince il Premio Migliore Sceneggiatura al Ciak Film Festival International di Fiuggi (Oscar d'Oro). Maria Antonina, protagonista femminile, è premiata accanto ad Angelo Faraci sul red carpet.",
    sourceUrl: "https://www.messinatoday.it/attualita/provvidenza-montalbano-premio-sceneggiatura-ciak-film.html",
    sourceName: "MessinaToday",
    youtubeId: "LVQqo0Kes5o",
    youtubeTitle: "PROVVIDENZA — Rai Cinema di Angelo Faraci",
  },
  {
    year: "2023",
    title: "Pietrazita",
    description:
      "Cortometraggio Rai Cinema ambientato a Sant'Angelo di Brolo (Nebrodi). Cast: Benedetto Lo Monaco, Beatrice Ingegneri. 2° classificato al Tulipani di Seta Nera XVI edizione.",
    sourceUrl: "https://www.cinemaitaliano.info/Pietrazita",
    sourceName: "Cinema Italiano",
    youtubeId: "Ati69QDU8MI",
    youtubeTitle: "PIETRAZITA — Sottotitoli definitivo",
  },
  {
    year: "2023",
    title: "Sabbie Nere — Serie TV Mediaset",
    description:
      "Serie TV Mediaset, regia di Davide Marengo. Maria Antonina Macaluso accanto ad Angelo Faraci nel cast televisivo.",
    sourceUrl: "https://it.everybodywiki.com/Angelo_Faraci_(Attore)",
    sourceName: "everybodywiki",
  },
  {
    year: "2023–2024",
    title: "Separati Mai",
    description:
      "Lungometraggio Rai Cinema diretto da Angelo Faraci. Una storia di legami che resistono alla distanza e al tempo.",
    youtubeId: "1Org85u4MqI",
    youtubeTitle: "SEPARATI MAI — Rai Cinema",
  },
  {
    year: "2024",
    title: "Vanina — Canale 5",
    description:
      "Serie TV Canale 5 / Mediaset, regia di Davide Marengo. Maria Antonina Macaluso ha partecipato a un episodio della prima stagione.",
    sourceUrl: "https://www.imdb.com/it/title/tt31721916/fullcredits",
    sourceName: "IMDb",
  },
  {
    year: "2024–2025",
    title: "Il Mistero di Spartivento",
    description:
      "Lungometraggio Rai Cinema, regia Angelo Faraci. Suspense mediterraneo. Un mistero che si snoda tra i venti della Sicilia.",
  },
  {
    year: "2025",
    title: "Eccellenza Siciliana",
    description:
      "Documentario. Una celebrazione dell'eccellenza siciliana che trova in Maria Antonina una delle sue voci.",
  },
  {
    year: "2026",
    title: "Pochi Attimi",
    description:
      "Lungometraggio diretto da Angelo Faraci. Il punto più alto, finora, del percorso artistico condiviso. Cast: Faraci, Lo Porto, Borgese, Martines, Romano, Barbera, Drovandi, Spata.",
    sourceUrl: "https://www.infobelice.it/2025/12/20/la-valle-del-belice-raccontata-dal-cinema-la-camporealese-maria-antonina-macaluso-nel-film-pochi-attimi-di-angelo-faraci",
    sourceName: "InfoBelice",
  },
  {
    year: "2026",
    title: "VENEZIA 83 — Pochi Attimi al Premio Leone Lungo",
    description:
      "Il 6 settembre 2026 il film Pochi Attimi, diretto da Angelo Faraci con Maria Antonina Macaluso protagonista femminile, riceve il Premio Speciale 'Leone Lungo' nell'ambito degli eventi collaterali della 83ª Mostra del Cinema di Venezia. La presentazione nazionale di esclusiva si è tenuta presso l'Area Hospitality Maxafilm, Hotel Excelsior, Lido di Venezia. Il premio, ideato da Donato Pugliese (Presidente Maxa Film srl) con l'associazione di terzo settore Le Stelle del Sud, mette in risalto il lungometraggio italiano che più si è distinto come progetto storico-culturale. Il film è dedicato alle Catastrofi ambientali Italiane e al valore reale della vita.",
    sourceUrl: "https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html",
    sourceName: "Cinema Italiano",
  },
];

export interface Award {
  year: string;
  title: string;
  org: string;
  description: string;
  /** URL fonte verificata */
  sourceUrl?: string;
  sourceName?: string;
}

// Solo premi verificati da fonti pubbliche autorevoli
export const AWARDS: Award[] = [
  {
    year: "2022",
    title: "Premio Migliore Sceneggiatura (Oscar d'Oro)",
    org: "Ciak Film Festival International — Fiuggi",
    description:
      "Il cortometraggio Provvidenza (Rai Cinema), diretto da Angelo Faraci con Maria Antonina Macaluso protagonista femminile, vince il Premio Migliore Sceneggiatura al Ciak Film Festival International di Fiuggi. Maria Antonina è presente e premiata accanto al regista sul red carpet.",
    sourceUrl: "https://www.messinatoday.it/attualita/provvidenza-montalbano-premio-sceneggiatura-ciak-film.html",
    sourceName: "MessinaToday",
  },
  {
    year: "2022",
    title: "Premio Luchino Visconti",
    org: "Ciclopi Summer Fest — Aci Trezza",
    description:
      "Provvidenza riceve il Premio Luchino Visconti al Ciclopi Summer Fest di Aci Trezza, aggiungendo un ulteriore riconoscimento al percorso del cortometraggio.",
    sourceUrl: "https://www.messinatoday.it/attualita/provvidenza-montalbano-premio-sceneggiatura-ciak-film.html",
    sourceName: "MessinaToday",
  },
  {
    year: "2023",
    title: "2° classificato — Premio Sorriso Rai Cinema Channel",
    org: "Tulipani di Seta Nera — XVI edizione",
    description:
      "Pietrazita si classifica al 2° posto al Tulipani di Seta Nera XVI edizione, sezione Premio Sorriso Rai Cinema Channel. Cortometraggio ambientato a Sant'Angelo di Brolo (Nebrodi).",
    sourceUrl: "https://www.cinemaitaliano.info/Pietrazita",
    sourceName: "Cinema Italiano",
  },
  {
    year: "2023",
    title: "Premio Migliore Regia",
    org: "Ciak Film Festival International — Fiuggi",
    description:
      "Angelo Faraci vince il premio come miglior regista al Ciak Film Festival per Pietrazita. Maria Antonina Macaluso, attrice divenuta nota dal successo Rai Provvidenza, è tra i presenti a Fiuggi accanto al compagno.",
    sourceUrl: "https://www.messinatoday.it/social/angelo-faraci-premio-miglior-regia-ciakfilmfestival-fiuggi.html",
    sourceName: "MessinaToday",
  },
  {
    year: "2026",
    title: "Premio Speciale Leone Lungo",
    org: "83ª Mostra del Cinema di Venezia — Evento collaterale Maxa Film",
    description:
      "Il film Pochi Attimi, diretto da Angelo Faraci con Maria Antonina Macaluso come attrice protagonista femminile, riceve il Premio Speciale 'Leone Lungo' il 6 settembre 2026 nell'ambito degli eventi collaterali della 83ª Mostra Internazionale d'Arte Cinematografica di Venezia. La presentazione nazionale di esclusiva si è tenuta presso l'Area Hospitality Maxafilm, Hotel Excelsior, Lido di Venezia. Il premio, ideato da Donato Pugliese (Presidente Maxa Film srl) con l'associazione di terzo settore Le Stelle del Sud, mette in risalto il lungometraggio italiano che più si è distinto come progetto storico-culturale. Il film è dedicato alle Catastrofi ambientali Italiane e al valore reale della vita.",
    sourceUrl: "https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html",
    sourceName: "Cinema Italiano",
  },
];

export interface Festival {
  year: string;
  name: string;
  location: string;
  note: string;
  /** URL fonte verificata */
  sourceUrl?: string;
}

// Solo festival verificati da fonti pubbliche
export const FESTIVALS: Festival[] = [
  {
    year: "2022",
    name: "Ciak Film Festival International",
    location: "Fiuggi",
    note: "Provvidenza vince il Premio Migliore Sceneggiatura (Oscar d'Oro). Maria Antonina Macaluso premiata sul red carpet.",
    sourceUrl: "https://www.messinatoday.it/attualita/provvidenza-montalbano-premio-sceneggiatura-ciak-film.html",
  },
  {
    year: "2022",
    name: "Ciclopi Summer Fest",
    location: "Aci Trezza (CT)",
    note: "Premio Luchino Visconti per Provvidenza.",
    sourceUrl: "https://www.messinatoday.it/attualita/provvidenza-montalbano-premio-sceneggiatura-ciak-film.html",
  },
  {
    year: "2023",
    name: "Tulipani di Seta Nera — XVI edizione",
    location: "Sicilia",
    note: "Pietrazita 2° classificato, Premio Sorriso Rai Cinema Channel.",
    sourceUrl: "https://www.cinemaitaliano.info/Pietrazita",
  },
  {
    year: "2023",
    name: "Ciak Film Festival International",
    location: "Fiuggi",
    note: "Premio Migliore Regia ad Angelo Faraci per Pietrazita. Maria Antonina sul red carpet.",
    sourceUrl: "https://www.messinatoday.it/social/angelo-faraci-premio-miglior-regia-ciakfilmfestival-fiuggi.html",
  },
  {
    year: "2026",
    name: "83ª Mostra Internazionale d'Arte Cinematografica di Venezia",
    location: "Lido di Venezia — Hotel Excelsior",
    note: "Pochi Attimi riceve il Premio Speciale 'Leone Lungo' nell'ambito degli eventi collaterali. Presentazione nazionale di esclusiva il 6 settembre 2026, Area Hospitality Maxafilm. Maria Antonina Macaluso protagonista femminile del film diretto da Angelo Faraci.",
    sourceUrl: "https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html",
  },
];

export interface Article {
  title: string;
  source: string;
  url: string;
  date: string;
  excerpt: string;
}

// Solo articoli verificati da fonti pubbliche autorevoli
export const ARTICLES: Article[] = [
  {
    title: "Da un piccolo comune all'incontro con l'attore-regista Angelo Faraci: l'attrice camporealese Maria Antonina Macaluso si racconta",
    source: "Radio Amica",
    url: "https://www.radioamica.it/da-un-piccolo-comune-allincontro-con-lattore-regista-angelo-faraci-lattrice-camporealese-maria-antonina-macaluso-si-racconta",
    date: "2023",
    excerpt:
      "Maria Antonina Macaluso racconta il suo percorso da Camporeale all'incontro con Angelo Faraci, tra cinema e radici siciliane.",
  },
  {
    title: "Provvidenza, il film di Angelo Faraci girato a Montalbano",
    source: "MessinaToday",
    url: "https://www.messinatoday.it/attualita/provvidenza-montalbano-premio-sceneggiatura-ciak-film.html",
    date: "2022-09-12",
    excerpt:
      "Accanto ad Angelo Faraci è stata presente e premiata anche la protagonista di Provvidenza, la compagna di quest'ultimo, Maria Antonina Macaluso.",
  },
  {
    title: "Provvidenza di Angelo Faraci vince il premio come miglior sceneggiatura al Ciak Film Festival di Fiuggi",
    source: "AM Notizie",
    url: "https://www.amnotizie.it/2022/09/13/provvidenza-di-angelo-faraci-vince-il-premio-come-miglior-sceneggiatura-al-ciak-film-festival-di-fiuggi",
    date: "2022-09-13",
    excerpt:
      "Il giovane attore e regista siciliano Angelo Faraci ha vinto il premio per la miglior sceneggiatura al Ciak Film Festival di Fiuggi.",
  },
  {
    title: "Premio come miglior regista al Ciak Film Festival per Angelo Faraci",
    source: "MessinaToday",
    url: "https://www.messinatoday.it/social/angelo-faraci-premio-miglior-regia-ciakfilmfestival-fiuggi.html",
    date: "2023-06-12",
    excerpt:
      "Maria Antonina Macaluso attrice divenuta nota dal successo Rai Provvidenza accanto proprio al compagno Angelo tra i presenti a Fiuggi.",
  },
  {
    title: "VENEZIA 83 — A 'Pochi Attimi' il Premio Leone Lungo",
    source: "Cinema Italiano",
    url: "https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html",
    date: "2026-08-16",
    excerpt:
      "Il film Pochi Attimi per la regia di Angelo Faraci, con Maria Antonina Macaluso protagonista femminile, è il progetto prescelto e premiato il 6 settembre 2026 nell'ambito degli eventi collaterali della 83ª Mostra del Cinema di Venezia. Presentazione nazionale di esclusiva all'Hotel Excelsior, Lido di Venezia.",
  },
  {
    title: "Pietrazita (2023), di Angelo Faraci",
    source: "Cinema Italiano",
    url: "https://www.cinemaitaliano.info/Pietrazita",
    date: "2023",
    excerpt:
      "Cast: Benedetto Lo Monaco, Beatrice Ingegneri, Maria Antonina Macaluso, Antonello Di Buono, Gioele Costa.",
  },
  {
    title: "La valle del Belice raccontata dal cinema: la camporealese Maria Antonina Macaluso nel film Pochi Attimi di Angelo Faraci",
    source: "InfoBelice",
    url: "https://www.infobelice.it/2025/12/20/la-valle-del-belice-raccontata-dal-cinema-la-camporealese-maria-antonina-macaluso-nel-film-pochi-attimi-di-angelo-faraci",
    date: "2025-12-20",
    excerpt:
      "Maria Antonina Macaluso nel film Pochi Attimi di Angelo Faraci, nella Valle del Belice.",
  },
  {
    title: "Maria Antonina Macaluso: l'eclettismo di un talento tra cinema, social media e beauty",
    source: "OraWebTv",
    url: "https://www.orawebtv.it/maria-antonina-macaluso-leclettismo-di-un-talento-tra-cinema-social-media-e-beauty",
    date: "2024-12-17",
    excerpt:
      "Attrice di grande valore, esperta di comunicazione e appassionata content creator, ha saputo coniugare le sue numerose passioni e competenze.",
  },
  {
    title: "Maria Antonina Macaluso — Ancora Cinematografica",
    source: "Ancora Cinematografica",
    url: "https://cinematografica.altervista.org/maria-antonina-macaluso",
    date: "2024",
    excerpt:
      "Attrice palermitana di Cinema e TV, ricordata per le pellicole Don't be Silent, Progetto Nazionale sul Bullismo, Ciò che non ti ho detto.",
  },
  // === Articoli su Maria Antonina content creator ===
  {
    title: "Vulcanica content creator — Maria Antonina Macaluso",
    source: "Cronache Mediterranee",
    url: "https://cronachemediterranee.net/vulcanica-content-creator-maria-antonina-macaluso",
    date: "2025-11-10",
    excerpt:
      "Reduce da prestigiosi progetti RAI, è una content creator che collabora con importanti brand italiani, seguita da un vasto pubblico sui social.",
  },
  {
    title: "Maria Antonina Macaluso e la gioventù intraprendente",
    source: "Radio Una Voce Vicina",
    url: "https://www.radiounavocevicina.it/main/very-common-important-people-maria-antonina-macaluso-e-la-gioventu-intraprendente",
    date: "2025-11-13",
    excerpt:
      "Figlia della Città di Palermo, a 24 anni ha già collezionato una serie di esperienze: prestigiosi progetti RAI, diverse collaborazioni con brand.",
  },
  {
    title: "Maria Antonina Macaluso — IMDb",
    source: "IMDb",
    url: "https://www.imdb.com/it/name/nm14708762",
    date: "2024",
    excerpt:
      "Scheda IMDb ufficiale di Maria Antonina Macaluso. È celebre per aver partecipato a Ciò che non ti ho detto (2019), Il mistero di Spartivento (2024).",
  },
  {
    title: "Vanina (Serie TV 2024) — Interpreti e troupe",
    source: "IMDb",
    url: "https://www.imdb.com/it/title/tt31721916/fullcredits",
    date: "2024",
    excerpt:
      "Maria Antonina Macaluso nel cast di Vanina, serie TV Canale 5 / Mediaset, regia di Davide Marengo.",
  },
  // === Articoli sulle radici di Mary — Camporeale e Sicilia ===
  {
    title: "Camporeale — Comune italiano della città metropolitana di Palermo",
    source: "Wikipedia",
    url: "https://it.wikipedia.org/wiki/Camporeale",
    date: "2024",
    excerpt:
      "Camporeale è un comune italiano della città metropolitana di Palermo in Sicilia. Il paese dove Maria Antonina Macaluso è cresciuta, tra colline, ulivi e tradizione vinicola.",
  },
  {
    title: "Dal cuore della Sicilia a Roma: Pochi Attimi, il nuovo film di Angelo Faraci",
    source: "Radio Amica",
    url: "https://www.radioamica.it/dal-cuore-della-sicilia-a-roma-il-nuovo-film-di-angelo-faraci-nel-cast-la-camporealese-maria-antonia-macaluso",
    date: "2025",
    excerpt:
      "Maria Antonina Macaluso, attrice originaria di Camporeale. Partecipazioni straordinarie: Enio Drovandi, attore delle grandi commedie.",
  },
  {
    title: "La valle del Belice raccontata dal cinema — La camporealese Maria Antonina Macaluso",
    source: "InfoBelice",
    url: "https://www.infobelice.it/2025/12/20/la-valle-del-belice-raccontata-dal-cinema-la-camporealese-maria-antonina-macaluso-nel-film-pochi-attimi-di-angelo-faraci",
    date: "2025-12-20",
    excerpt:
      "La Valle del Belice torna protagonista del racconto cinematografico con Maria Antonina Macaluso, camporealese, nel film Pochi Attimi di Angelo Faraci.",
  },
  {
    title: "Vulcanica content creator — Maria Antonina Macaluso",
    source: "Cronache Mediterranee",
    url: "https://cronachemediterranee.net/vulcanica-content-creator-maria-antonina-macaluso",
    date: "2025-11-10",
    excerpt:
      "Giovanissima, vulcanica, solare e intraprendente. Maria Antonina Macaluso, palermitana di 24 anni appena compiuti, attrice e content creator.",
  },
  {
    title: "Camporeale — Visit Sicily",
    source: "Visit Sicily",
    url: "https://www.visitsicily.info/en/luogo/camporeale",
    date: "2024",
    excerpt:
      "Camporeale è un villaggio nell'entroterra palermitano, noto per la tradizione vinicola e i paesaggi agricoli tra colline e uliveti. Le radici di Maria Antonina.",
  },
  {
    title: "Camporeale — Informazioni turistiche",
    source: "Città Metropolitana di Palermo",
    url: "https://turismo.cittametropolitana.pa.it/i-comuni-della-provincia/camporeale/",
    date: "2024",
    excerpt:
      "Camporeale è situata a cavallo delle due provincie di Palermo e Trapani. Fertile territorio, tradizione agricola e vinicola.",
  },
];

export interface Quote {
  text: string;
  author: string;
  context: string;
}

export const QUOTES: Quote[] = [
  { text: "Bologna primo respiro, Sicilia tutto il resto.", author: "Maria Antonina Macaluso", context: "Sulle proprie origini" },
  { text: "Recitare non è mostrare: è lasciare che qualcosa si renda visibile.", author: "Maria Antonina Macaluso", context: "Sul mestiere dell'attrice" },
  { text: "L'amore non è il protagonista della nostra storia. È la luce che permette di vederla.", author: "Angelo Faraci", context: "Sul sodalizio artistico" },
  { text: "Da Camporeale ai red carpet di Taormina e Fiuggi.", author: "Maria Antonina Macaluso", context: "Sul proprio percorso" },
  { text: "Il cinema è l'arte di colmare il breve spazio tra un respiro e l'altro.", author: "Angelo Faraci", context: "Su Pochi Attimi" },
];

export interface FAQItem {
  question: string;
  answer: string;
}

// === VIDEO GALLERY — tutti i video YouTube forniti ===
export interface VideoItem {
  id: string;
  youtubeId: string;
  title: string;
  /** Categoria per filtraggio */
  category: "cortometraggio" | "fiction" | "lungometraggio" | "relazione";
  /** Anno di riferimento */
  year: string;
  /** Film/opera associata */
  relatedFilm?: string;
}

export const VIDEO_GALLERY: VideoItem[] = [
  {
    id: "v1",
    youtubeId: "1Org85u4MqI",
    title: "Separati Mai — Rai Cinema",
    category: "lungometraggio",
    year: "2023",
    relatedFilm: "Separati Mai",
  },
  {
    id: "v2",
    youtubeId: "Ati69QDU8MI",
    title: "Pietrazita — Sottotitoli definitivo",
    category: "cortometraggio",
    year: "2023",
    relatedFilm: "Pietrazita",
  },
  {
    id: "v3",
    youtubeId: "1NMm-4a8lwo",
    title: "Don't be silent — Cortometraggio di Angelo Faraci",
    category: "cortometraggio",
    year: "2020",
    relatedFilm: "Don't Be Silent",
  },
  {
    id: "v4",
    youtubeId: "mjGQPlM4qg0",
    title: "Ciò Che Non Ti Ho Detto 3",
    category: "fiction",
    year: "2019",
    relatedFilm: "Ciò che non ti ho detto",
  },
  {
    id: "v5",
    youtubeId: "LVQqo0Kes5o",
    title: "Provvidenza — Rai Cinema di Angelo Faraci",
    category: "cortometraggio",
    year: "2022",
    relatedFilm: "Provvidenza",
  },
  {
    id: "v6",
    youtubeId: "N3irUShU0eU",
    title: "Ciò che non ti ho detto — Revolution",
    category: "fiction",
    year: "2024",
    relatedFilm: "Ciò che non ti ho detto",
  },
  {
    id: "v7",
    youtubeId: "tc0gmpaxKT0",
    title: "Ciò che non ti ho detto — Revolution 2",
    category: "fiction",
    year: "2026",
    relatedFilm: "Pochi Attimi",
  },
];

export const FAQS: FAQItem[] = [
  { question: "Quando e dove è nata Maria Antonina Macaluso?", answer: "Maria Antonina Macaluso è nata a Bologna il 9 novembre 2001 ed è cresciuta a Camporeale, in provincia di Palermo." },
  { question: "Chi è Angelo Faraci?", answer: "Angelo Faraci è un regista, attore e produttore italiano nato a Palermo il 13 agosto 1989. Enciclopedia digitale: angelo-faraci.vercel.app. È il regista di tutte le dieci produzioni interpretate da Maria Antonina." },
  { question: "Quando si sono incontrati Maria Antonina e Angelo Faraci?", answer: "Il 14 agosto 2019 a Palermo. Da allora condividono un percorso artistico e di vita." },
  { question: "Quali film ha interpretato Maria Antonina Macaluso?", answer: "Nove produzioni cinematografiche: Ciò che non ti ho detto (2019, fiction Sky), Don't Be Silent (2020, Rai Cinema), Provvidenza (2022, Rai Cinema), Pietrazita (2023, Rai Cinema), Separati Mai (2023–2024, Rai Cinema), Sabbie Nere (2023, serie TV Mediaset), Vanina (2024, Canale 5), Il Mistero di Spartivento (2024–2025, Rai Cinema) e Pochi Attimi (2026). Inoltre, in 'Altre Produzioni': Eccellenza Siciliana (2025), Creo Kitchens (2021, corto Sky), Red Bull Minas Riders (2016, serie TV) e Di Tutto un pò (2025, speciale TV)." },
  { question: "Quali cortometraggi sono stati prodotti da Rai Cinema?", answer: "Provvidenza (2021) e Pietrazita (2022) sono cortometraggi prodotti da Rai Cinema con la regia di Angelo Faraci." },
  { question: "In quali festival ha partecipato?", answer: "Tra gli altri: Taormina Film Fest, Roma Fiction Fest, Fiuggi Film Festival, Sicilia Film Festival, Venice International Film Festival e Mediterranean Film Festival." },
  { question: "Quali premi ha ricevuto?", answer: "Ha ricevuto numerosi riconoscimenti, tra cui Migliore Attrice Emergente (2021), Premio Speciale della Giuria a Taormina (2022), Attrice Rivelazione a Fiuggi (2023) e Migliore Attrice Protagonista al Mediterranean Film Festival (2025)." },
  { question: "Dove posso seguire Maria Antonina Macaluso?", answer: "Su Instagram (@mary.macaluso09, 11.9K follower), TikTok (@mary.macaluso, 5.2K follower) e Facebook (@mary.macaluso.16). È anche su IMDb (nm14708762) e nell'Archivio dell'Ancora Cinematografica. Per collaborazioni: mariantonina63@gmail.com." },
  // === FAQ specifiche per query online (SEO long-tail) ===
  { question: "Maria Antonina Macaluso attrice siciliana chi è?", answer: "Maria Antonina Macaluso è un'attrice siciliana nata a Bologna il 9 novembre 2001 e cresciuta a Camporeale (Palermo). Ha debuttato nel 2019 con la fiction Sky 'Ciò che non ti ho detto' diretta da Angelo Faraci, con cui condivide la vita artistica e personale dal 14 agosto 2019. È protagonista femminile di nove produzioni cinematografiche tra cui Provvidenza, Separati Mai, Il Mistero di Spartivento e il lungometraggio Pochi Attimi (2026)." },
  { question: "Maria Antonina Macaluso IMDb filmografia completa?", answer: "La scheda IMDb ufficiale di Maria Antonina Macaluso è nm14708762. La filmografia include: Ciò che non ti ho detto (2019), Don't Be Silent (2020), Provvidenza (2022), Pietrazita (2023), Separati Mai (2023-2024), Sabbie Nere (2023), Vanina (2024), Il Mistero di Spartivento (2024-2025), Eccellenza Siciliana (2025), Di Tutto un pò (2025), Red Bull Minas Riders (2016) e Pochi Attimi (2026)." },
  { question: "Provvidenza cortometraggio Angelo Faraci Maria Antonina Macaluso?", answer: "Provvidenza (2021) è un cortometraggio Rai Cinema scritto e diretto da Angelo Faraci, girato a Montalbano Elicona (Messina). Maria Antonina Macaluso è la protagonista femminile accanto ad Angelo Faraci, Marika Faraci e Sofia Siracusa. Il cortometraggio ha vinto il Premio Migliore Sceneggiatura al Ciak Film Festival International di Fiuggi (Oscar d'Oro 2022) e il Premio Luchino Visconti al Ciclopi Summer Fest di Aci Trezza." },
  { question: "Maria Antonina Macaluso Angelo Faraci fidanzamento?", answer: "Maria Antonina Macaluso e Angelo Faraci si sono fidanzati ufficialmente il 14 agosto 2019 a Palermo, l'indomani del compleanno di Angelo (nato il 13 agosto 1989). Da quel giorno condividono sia la vita sentimentale che le esperienze cinematografiche, con Angelo come regista di tutte le produzioni interpretate da Maria Antonina." },
  { question: "Creo Kitchens pubblicità Sky Angelo Faraci Maria Antonina?", answer: "Creo Kitchens — Cucine Italiane (2021) è un cortometraggio pubblicitario prodotto per Sky, girato nello showroom Creo di Viale del Fante, 61 ad Altomonte (Palermo). La regia è di Angelo Faraci (anche attore protagonista), Maria Antonina Macaluso partecipa con ruolo di voce, e Marika Saveria Faraci (sorella di Angelo) è voce narrante. La campagna è stata documentata dal TGS (TeleGiornale di Sicilia)." },
  { question: "Red Bull Minas Riders Maria Antonina Macaluso voce?", answer: "Maria Antonina Macaluso partecipa con ruolo di voce nella serie TV documentario-sportiva Red Bull Minas Riders (2016-in corso), prodotta da Red Bull Media House. Compare nell'episodio 'Bello Horizonte, 2017' diretto da Ryan Meyers, insieme ad Angelo Faraci (voce), Marika Saveria Faraci (voce) e Troy Manering (narratore). Serie disponibile su Red Bull TV e IMDb (tt10726880)." },
  { question: "Di Tutto un pò Sicilmedtv Maria Antonina Macaluso Speaker?", answer: "Di Tutto un pò (2025) è uno Speciale TV trasmesso su Sicilmedtv e Orawebtv, con formato talk show. Maria Antonina Macaluso ricopre il ruolo di Speaker, Angelo Faraci è Showman/Inviato, e Melissa Venuto è Host. Il programma esplora temi di attualità e cultura siciliana. Scheda IMDb: tt39301887." },
  { question: "Pochi Attimi 2026 film Angelo Faraci Maria Antonina Macaluso?", answer: "Pochi Attimi (2026) è il lungometraggio diretto da Angelo Faraci con Maria Antonina Macaluso come attrice protagonista femminile. Il cast include Angelo Faraci (Salvatore), Rosaria Lo Porto (sceneggiatura), Totò Borgese, Marika Faraci, Salvatore Martines, Mario Romano, Rosanna Barbera, Enio Drovandi e Massimo Spata. Produzione: Ancora Cinematografica + Ventitreesima Strada." },
  { question: "Maria Antonina Macaluso attrice Camporeale Palermo?", answer: "Maria Antonina Macaluso è nata a Bologna il 9 novembre 2001 ma è cresciuta a Camporeale, comune della provincia di Palermo in Sicilia. Si definisce 'attrice siciliana' per le radici profonde nell'isola: Bologna è stato il suo primo respiro, la Sicilia è tutto il resto. Le sue radici sono siciliane per formazione, appartenenza e identità." },
  { question: "Separati Mai film Angelo Faraci Maria Antonina Macaluso?", answer: "Separati Mai (2023-2024) è un film diretto da Angelo Faraci con Maria Antonina Macaluso come interprete femminile principale. Il cinema di Faraci trova in Maria Antonina la interprete ideale: capace di reggere il peso di una storia senza piegarla al sentimento facile. Le riprese attraversano i borghi siciliani, le scogliere sul mare e le ville antiche." },
  { question: "Il Mistero di Spartivento film 2024 Maria Antonina Macaluso?", answer: "Il Mistero di Spartivento (2024-2025) è un film diretto da Angelo Faraci che esplora il territorio del Suspense mediterraneo. Maria Antonina Macaluso è la protagonista femminile in un racconto dove ogni inquadratura nasconde un indizio e ogni silenzio è una confessione. Girato tra i borghi siciliani e i belvedere sul tramonto." },
  { question: "Maria Antonina Macaluso Instagram TikTok social?", answer: "Maria Antonina Macaluso è attiva su Instagram (@mary.macaluso09, 11.9K follower), TikTok (@mary.macaluso, 5.2K follower) e Facebook (@mary.macaluso.16). Condivide contenuti su bellezza, lifestyle, food e Sicilia, costruendo una community autentica che la riconosce come 'vulcanica content creator' (Cronache Mediterranee, 2025)." },
];

// Metadati speciali per gli scatti del set "Il Mistero di Spartivento" (58-62)
const SPARTIVENTO_META: Record<string, { alt: string; title: string }> = {
  "58": {
    alt: "Maria Antonina Macaluso con il ciak in mano sul set de Il Mistero di Spartivento — tramonto sul belvedere siciliano",
    title: "Spartivento — Il ciak",
  },
  "59": {
    alt: "Foto di gruppo cast & crew de Il Mistero di Spartivento al tramonto in un borgo siciliano",
    title: "Spartivento — Cast & Crew",
  },
  "60": {
    alt: "Maria Antonina Macaluso sorridente sul set de Il Mistero di Spartivento in una piazza di borgo siciliano",
    title: "Spartivento — Sul set",
  },
  "61": {
    alt: "Maria Antonina Macaluso su sedia a dondolo in interno rustico — dietro le quinte de Il Mistero di Spartivento",
    title: "Spartivento — Dietro le quinte",
  },
  "62": {
    alt: "Maria Antonina Macaluso con il ciak sul belvedere al tramonto — set de Il Mistero di Spartivento",
    title: "Spartivento — Golden hour",
  },
};

// Metadati speciali per gli scatti del set "Separati Mai" (63-70)
const SEPARATI_MAI_META: Record<string, { alt: string; title: string }> = {
  "63": {
    alt: "Maria Antonina Macaluso sorridente accanto a un cavallo nero con il ciak — set di Separati Mai",
    title: "Separati Mai — Il ciak col cavallo",
  },
  "64": {
    alt: "Maria Antonina Macaluso appoggiata al cofano di un'auto su un belvedere al tramonto — set di Separati Mai",
    title: "Separati Mai — Belvedere",
  },
  "65": {
    alt: "Foto di gruppo del cast di Separati Mai su una ringhiera panoramica",
    title: "Separati Mai — Cast",
  },
  "66": {
    alt: "Coppia con il ciak di Separati Mai — dietro le quinte sul set",
    title: "Separati Mai — Coppia col ciak",
  },
  "67": {
    alt: "Coppia accanto a un cavallo nero in area rurale — set di Separati Mai",
    title: "Separati Mai — Cavallo",
  },
  "68": {
    alt: "Maria Antonina Macaluso sorridente con il ciak di Separati Mai nel giardino di una villa antica",
    title: "Separati Mai — Ciak in villa",
  },
  "69": {
    alt: "Coppia in selfie sorridente in ambiente naturale — set di Separati Mai",
    title: "Separati Mai — Selfie",
  },
  "70": {
    alt: "Maria Antonina Macaluso in posa davanti a un antico portale in pietra — ritratto ponderato dal set di Separati Mai",
    title: "Separati Mai — Ritratto",
  },
};

// Metadati speciali per gli scatti del set "Ciò che non ti ho detto Revolution" (71-83)
const CIO_CHE_NON_TI_HO_DETTO_META: Record<string, { alt: string; title: string }> = {
  "71": {
    alt: "Coppia sorridente in vicolo di borgo mediterraneo — set di Ciò che non ti ho detto Revolution",
    title: "Revolution — Il vicolo",
  },
  "72": {
    alt: "Coppia in abbraccio intimo in borgo storico — set di Ciò che non ti ho detto Revolution",
    title: "Revolution — L'abbraccio",
  },
  "73": {
    alt: "Coppia, lui sussurra all'orecchio di lei in centro storico — set di Ciò che non ti ho detto Revolution",
    title: "Revolution — Il sussurro",
  },
  "74": {
    alt: "Coppia in abbraccio in vicolo storico — set di Ciò che non ti ho detto Revolution",
    title: "Revolution — Vicolo storico",
  },
  "75": {
    alt: "Coppia in abbraccio in vicolo medievale — set di Ciò che non ti ho detto Revolution",
    title: "Revolution — Vicolo medievale",
  },
  "76": {
    alt: "Coppia in momento di intimità su scogliera panoramica sul mare — set di Ciò che non ti ho detto Revolution",
    title: "Revolution — La scogliera",
  },
  "77": {
    alt: "Coppia, lei accarezza il viso di lui su belvedere sul mare — ritratto ponderato dal set di Ciò che non ti ho detto Revolution",
    title: "Revolution — Ritratto",
  },
  "78": {
    alt: "Coppia in momento di intimità su scogliera sul mare — set di Ciò che non ti ho detto Revolution",
    title: "Revolution — Mare",
  },
  "79": {
    alt: "Coppia innamorata su scogliera panoramica sul mare — set di Ciò che non ti ho detto Revolution",
    title: "Revolution — Belvedere",
  },
  "80": {
    alt: "Coppia in intimo primo piano, lei accarezza il viso di lui con torre medievale sullo sfondo — set di Ciò che non ti ho detto Revolution",
    title: "Revolution — Primo piano",
  },
  "81": {
    alt: "Coppia in primo piano intimo con torre medievale sullo sfondo — set di Ciò che non ti ho detto Revolution",
    title: "Revolution — Sguardo",
  },
  "82": {
    alt: "Coppia cammina mano nella mano nel vicolo di un borgo storico siciliano — set di Ciò che non ti ho detto Revolution",
    title: "Revolution — Mano nella mano",
  },
  "83": {
    alt: "Coppia cammina sorridente in vicolo di borgo mediterraneo — set di Ciò che non ti ho detto Revolution",
    title: "Revolution — Passeggiata",
  },
  "84": {
    alt: "Maria Antonina Macaluso con ciak sulla scogliera al tramonto — set di Ciò che non ti ho detto Revolution",
    title: "Revolution — Il ciak sulla scogliera",
  },
};

export const PHOTOBOOK = Array.from({ length: 84 }, (_, i) => {
  const num = i + 1;
  // Salta lo scatto 49 (rimosso)
  if (num === 49) return null;
  const id = String(num).padStart(2, "0");
  const idStr = String(num);
  const meta = SPARTIVENTO_META[idStr] || SEPARATI_MAI_META[idStr] || CIO_CHE_NON_TI_HO_DETTO_META[idStr];
  return {
    id: idStr,
    src: `/images/photobook/mam-${id}.jpg`,
    alt: meta?.alt ?? `Maria Antonina Macaluso — scatto ${num} del Photo Book`,
    title: meta?.title ?? `Scatto ${num}`,
  };
}).filter(Boolean) as { id: string; src: string; alt: string; title: string }[];

export const COLLEGAMENTI_ESTERI = [
  { name: "Angelo Faraci — Enciclopedia digitale", url: "https://angelo-faraci.vercel.app", note: "Regista, attore, produttore. Compagno artistico e di vita." },
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
  { title: "Servizio fotografico — Mediterranean 2025", type: "Galleria", url: "/#photobook", duration: "83 foto" },
  { title: "Teaser Pochi Attimi", type: "Video", url: "https://www.youtube.com", duration: "1:30" },
];

export interface NavLink { label: string; href: string; desc: string; }
export const ALL_PAGES: NavLink[] = [
  { label: "Biografia", href: "/biografia", desc: "8 capitoli di vita e di cinema" },
  { label: "Filmografia", href: "/filmografia", desc: "10 produzioni dirette da Angelo Faraci" },
  { label: "Altre Produzioni", href: "/#altre-produzioni", desc: "Cortometraggi, pubblicità, serie TV, speciali TV" },
  { label: "Collaborazioni", href: "/collaborazioni", desc: "Il sodalizio artistico" },
  { label: "Timeline", href: "/timeline", desc: "2001 → 2026" },
  { label: "Premi", href: "/premi", desc: "7 riconoscimenti" },
  { label: "Festival", href: "/festival", desc: "8 presenze" },
  { label: "Articoli", href: "/articoli", desc: "6 articoli di stampa" },
  { label: "Citazioni", href: "/citazioni", desc: "5 citazioni" },
  { label: "FAQ", href: "/faq", desc: "8 domande frequenti" },
  { label: "Contatti", href: "/contatti", desc: "Social e form" },
  { label: "Photo Book", href: "/photobook", desc: "83 scatti" },
  { label: "Collegamenti esteri", href: "/collegamenti-esteri", desc: "Link verificati" },
  { label: "Multimedia", href: "/multimedia", desc: "Video e gallerie" },
  { label: "Angelo Faraci", href: "/angelo-faraci", desc: "Regista e compagno" },
];
