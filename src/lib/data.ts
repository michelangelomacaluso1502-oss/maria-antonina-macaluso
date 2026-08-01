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
  { label: "Instagram", handle: "@mary.macaluso.16", url: "https://www.instagram.com/mary.macaluso.16", icon: "instagram" },
  { label: "Facebook", handle: "@mary.macaluso.16", url: "https://www.facebook.com/mary.macaluso.16", icon: "facebook" },
];

// Tutti i collegamenti professionali verificati di Maria Antonina Macaluso
export const MAM_PROFILES = [
  { label: "Instagram", handle: "@mary.macaluso.16", url: "https://www.instagram.com/mary.macaluso.16", icon: "instagram", note: "Profilo personale ufficiale" },
  { label: "Facebook", handle: "Maria Antonina Macaluso", url: "https://www.facebook.com/mary.macaluso.16", icon: "facebook", note: "Pagina Facebook ufficiale" },
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
  /** Aspect ratio per il rendering della foto (default "4/5" portrait) */
  aspect?: "3/4" | "4/5" | "4/3" | "16/9" | "1/1";
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
}

// URL del profilo IMDb verificato di Maria Antonina Macaluso
export const MAM_IMDB_URL = "https://www.imdb.com/it/name/nm14708762";

export const FILMS: Film[] = [
  {
    slug: "dont-be-silent",
    year: "2020",
    title: "Don't Be Silent",
    role: "Attrice",
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
    slug: "regenerate",
    year: "2021",
    title: "Regenerate",
    role: "Attrice",
    director: "Angelo Faraci",
    type: "Cortometraggio",
    production: "Rai Cinema",
    description:
      "Cortometraggio Rai Cinema sulla rinascita interiore e sulla trasformazione personale.",
    longDescription:
      "Regenerate (2021) è un cortometraggio Rai Cinema che esplora i temi dell'identità, della memoria e della trasformazione. La regia di Angelo Faraci costruisce un racconto sospeso, in cui la Sicilia non è solo scenario ma materia narrativa. La presenza di Maria Antonina Macaluso conferma la coerenza di un cast che attraversa la filmografia di Faraci come una compagnia d'autore.",
    imdbUrl: MAM_IMDB_URL,
    cast: ["Angelo Faraci", "Maria Antonina Macaluso"],
    genre: "Drammatico",
    duration: "Cortometraggio",
    plot:
      "Un percorso di rinascita interiore che attraversa memoria e identità, con la Sicilia come sfondo simbolico.",
    trivia: [
      "Cortometraggio Rai Cinema, regia Angelo Faraci.",
      "Tema centrale: la trasformazione personale come atto rigenerante.",
    ],
  },
  {
    slug: "provvidenza",
    year: "2022",
    title: "Provvidenza",
    role: "Attrice protagonista",
    director: "Angelo Faraci",
    type: "Cortometraggio",
    production: "Rai Cinema",
    description:
      "Cortometraggio Rai Cinema. Premio Migliore Sceneggiatura al Ciak Film Festival di Fiuggi 2022.",
    longDescription:
      "Provvidenza (2022) è un cortometraggio Rai Cinema scritto e diretto da Angelo Faraci, girato tra le strade di Montalbano e i paesaggi della Sicilia nord-orientale. L'opera vince il Premio Migliore Sceneggiatura al Ciak Film Festival International di Fiuggi (Oscar d'Oro) e il Premio Luchino Visconti al Ciclopi Summer Fest di Aci Trezza. Maria Antonina Macaluso è la protagonista femminile del cortometraggio, premiata accanto al regista sul red carpet di Fiuggi.",
    imdbUrl: MAM_IMDB_URL,
    cast: ["Angelo Faraci", "Maria Antonina Macaluso", "Rosaria Lo Porto"],
    genre: "Drammatico",
    duration: "Cortometraggio",
    plot:
      "Provvidenza indaga il rapporto tra destino e scelta nel tessuto culturale siciliano, con una recitazione asciutta e misurata.",
    trivia: [
      "Premio Migliore Sceneggiatura al Ciak Film Festival International di Fiuggi 2022 (Oscar d'Oro).",
      "Premio Luchino Visconti al Ciclopi Summer Fest di Aci Trezza.",
      "Girato tra Montalbano e i paesaggi siciliani.",
      "Maria Antonina Macaluso premiata sul red carpet di Fiuggi accanto ad Angelo Faraci.",
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
    ],
  },
  {
    slug: "pietrazita",
    year: "2023",
    title: "Pietrazita",
    role: "Attrice protagonista",
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
    title: "Vanina",
    role: "Voce (1 episodio)",
    director: "Davide Marengo",
    type: "Serie TV",
    production: "Canale 5 — Mediaset",
    description:
      "Serie TV Canale 5 / Mediaset, regia di Davide Marengo. Partecipazione di Maria Antonina Macaluso.",
    longDescription:
      "Vanina (2024) è una serie televisiva trasmessa su Canale 5 (Mediaset), regia di Davide Marengo. Maria Antonina Macaluso compare nel cast (voce) per un episodio della prima stagione, confermando la propria presenza anche sul piccolo schermo italiano. Una partecipazione che segna l'esordio dell'attrice in una produzione Mediaset di prime time.",
    imdbUrl: "https://www.imdb.com/it/title/tt31721916/fullcredits",
    cast: ["Cast corale Mediaset", "Maria Antonina Macaluso (voce)"],
    genre: "Serie TV — Drammatico",
    duration: "1 episodio (2024)",
    plot:
      "Serie TV trasmessa su Canale 5, regia di Davide Marengo.",
    trivia: [
      "Prima partecipazione di Maria Antonina Macaluso a una serie TV Mediaset.",
      "Regia di Davide Marengo (Canale 5, 2024).",
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
    slug: "sicilian-excellence",
    year: "2025",
    title: "Sicilian Excellence",
    role: "Attrice",
    director: "Angelo Faraci",
    type: "Documentario",
    production: "Independent",
    description:
      "Una celebrazione dell'eccellenza siciliana.",
    longDescription:
      "Sicilian Excellence (2025) è una celebrazione dell'eccellenza siciliana — artigianato, cultura, cinema, cibo — che trova in Maria Antonina Macaluso una delle sue voci e dei suoi volti. Un omaggio al territorio che si fa racconto corale.",
    imdbUrl: MAM_IMDB_URL,
    cast: ["Angelo Faraci", "Maria Antonina Macaluso"],
    genre: "Documentario",
    duration: "Documentario",
    plot:
      "Una celebrazione dell'eccellenza siciliana tra artigianato, cultura, cinema e cibo.",
  },
  {
    slug: "pochi-attimi",
    year: "2026",
    title: "Pochi Attimi",
    role: "Attrice protagonista",
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
    title: "Incontro con Angelo Faraci",
    description:
      "Il 14 agosto 2019, a Palermo, Maria Antonina incontra il regista Angelo Faraci. L'indomani del compleanno di Angelo, nato il 13 agosto, inizia un sodalizio artistico e di vita destinato a durare.",
    sourceUrl: "https://www.radioamica.it/da-un-piccolo-comune-allincontro-con-lattore-regista-angelo-faraci-lattrice-camporealese-maria-antonina-macaluso-si-racconta",
    sourceName: "Radio Amica",
    youtubeId: "1Org85u4MqI",
    youtubeTitle: "Maria Antonina Macaluso e Angelo Faraci",
  },
  {
    year: "2020",
    title: "Don't Be Silent — Ciò che non ti ho detto",
    description:
      "Cortometraggio Rai Cinema, regia di Angelo Faraci. Primo progetto ufficiale della coppia per Rai Cinema, nell'ambito del Progetto Nazionale sul Bullismo. Il titolo originale del corto è 'Ciò che non ti ho detto'.",
    sourceUrl: "https://cinematografica.altervista.org/maria-antonina-macaluso",
    sourceName: "Ancora Cinematografica",
    youtubeId: "Ati69QDU8MI",
    youtubeTitle: "Ciò che non ti ho detto (2018) — Angelo Faraci",
  },
  {
    year: "2021",
    title: "Regenerate",
    description:
      "Cortometraggio Rai Cinema sulla rinascita interiore. Identità, memoria, trasformazione.",
    youtubeId: "1NMm-4a8lwo",
    youtubeTitle: "Regenerate — Angelo Faraci",
  },
  {
    year: "2022",
    title: "Provvidenza — Premio a Fiuggi",
    description:
      "Cortometraggio Rai Cinema girato a Montalbano. Vince il Premio Migliore Sceneggiatura al Ciak Film Festival International di Fiuggi (Oscar d'Oro). Maria Antonina, protagonista femminile, è premiata accanto ad Angelo Faraci sul red carpet.",
    sourceUrl: "https://www.messinatoday.it/attualita/provvidenza-montalbano-premio-sceneggiatura-ciak-film.html",
    sourceName: "MessinaToday",
    youtubeId: "mjGQPlM4qg0",
    youtubeTitle: "Provvidenza",
  },
  {
    year: "2023",
    title: "Pietrazita",
    description:
      "Cortometraggio Rai Cinema ambientato a Sant'Angelo di Brolo (Nebrodi). Cast: Benedetto Lo Monaco, Beatrice Ingegneri. 2° classificato al Tulipani di Seta Nera XVI edizione.",
    sourceUrl: "https://www.cinemaitaliano.info/Pietrazita",
    sourceName: "Cinema Italiano",
    youtubeId: "LVQqo0Kes5o",
    youtubeTitle: "Pietrazita",
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
      "Lungometraggio diretto da Angelo Faraci. Una storia di legami che resistono alla distanza e al tempo.",
  },
  {
    year: "2024",
    title: "Vanina — Canale 5",
    description:
      "Serie TV Canale 5 / Mediaset, regia di Davide Marengo. Maria Antonina Macaluso compare nel cast (voce) per un episodio della prima stagione.",
    sourceUrl: "https://www.imdb.com/it/title/tt31721916/fullcredits",
    sourceName: "IMDb",
  },
  {
    year: "2024–2025",
    title: "Il Mistero di Spartivento",
    description:
      "Lungometraggio Rai Cinema, regia Angelo Faraci. Suspense mediterraneo.",
    youtubeId: "N3irUShU0eU",
    youtubeTitle: "Il Mistero di Spartivento",
  },
  {
    year: "2025",
    title: "Sicilian Excellence",
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
    youtubeId: "tc0gmpaxKT0",
    youtubeTitle: "Pochi Attimi",
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
  {
    title: "Maria Antonina Macaluso | IMDb",
    source: "IMDb",
    url: "https://www.imdb.com/it/name/nm14708762",
    date: "2024",
    excerpt:
      "Scheda IMDb ufficiale di Maria Antonina Macaluso. È celebre per aver partecipato a Ciò che non ti ho detto (2018), Il mistero di Spartivento (2024).",
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
