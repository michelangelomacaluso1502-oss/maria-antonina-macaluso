import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/cinematic/Reveal";
import { ExternalLink, Calendar, MapPin, Award, Film, Users, Newspaper, Star } from "lucide-react";

const EVENT_DETAILS = {
  data: "6 Settembre 2026",
  orario: "18:00",
  location: "Area Hospitality Maxafilm, Hotel Excelsior",
  citta: "Lido di Venezia",
  festival: "83ª Mostra Internazionale d'Arte Cinematografica di Venezia",
  premio: "Premio Speciale «Leone Lungo»",
  organizzatore: "Le Stelle del Sud (Direzione Artistica)",
  promotore: "Maxa Film srl — Presidente Donato Pugliese",
  contesto: "Evento collaterale di prestigio",
  regista: "Angelo Faraci",
  attrice: "Maria Antonina Macaluso (protagonista femminile)",
  tema: "Catastrofi ambientali italiane e valore reale della vita",
};

const SOURCES = [
  {
    source: "Radio Amica",
    title: "«Pochi Attimi» trionfa a Venezia: la camporealese Macaluso e la partinicese Quatrosi portano la Sicilia sul podio del cinema",
    url: "https://www.radioamica.it/pochi-attimi-trionfa-a-venezia-la-camporealese-macaluso-e-la-partinicese-quatrosi-portano-la-sicilia-sul-podio-del-cinema/",
    date: "19 Settembre 2026",
    excerpt:
      "Alla 83ª Mostra Internazionale d'Arte Cinematografica di Venezia conquista il pubblico con una delle opere più intense e applaudite della kermesse: «Pochi Attimi», il nuovo film del regista siciliano Angelo Faraci, accolto al Lido con commozione e sincero entusiasmo. La pellicola, dedicata alle grandi catastrofi ambientali italiane, ha come protagonista femminile Maria Antonina Macaluso.",
  },
  {
    source: "Cinema Italiano",
    title: "VENEZIA 83 — A «Pochi Attimi» il Premio Leone Lungo",
    url: "https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html",
    date: "16 Agosto 2026",
    excerpt:
      "Il film Pochi Attimi per la regia di Angelo Faraci, con Maria Antonina Macaluso attrice protagonista femminile, è il progetto prescelto e premiato il 6 Settembre 2026 all'interno del Lido Venezia, precisamente all'Hotel Excelsior tra le molteplici manifestazioni della Biennale.",
  },
  {
    source: "Radio Una Voce Vicina",
    title: "Venezia: Pochi Attimi di Angelo Faraci al Premio Leone Lungo al Festival",
    url: "https://www.radiounavocevicina.it/main/venezia-pochi-attimi-di-angelo-faraci-il-premio-leone-lungo-al-festival",
    date: "17 Agosto 2026",
    excerpt:
      "Il Premio «Leone Lungo» viene inserito all'interno dei tanti eventi collaterali più meritevoli della 83ª Mostra del Cinema di Venezia. Pochi Attimi di Angelo Faraci, con Maria Antonina Macaluso protagonista femminile, è il progetto selezionato per il riconoscimento.",
  },
  {
    source: "IMDb",
    title: "Pochi attimi (2026) — Scheda film",
    url: "https://m.imdb.com/title/tt39376885",
    date: "2026",
    excerpt:
      "Pochi Attimi è un film storico-culturale di Angelo Faraci, dedicato alle catastrofi ambientali italiane e in particolare ai terremoti storici. Maria Antonina Macaluso attrice protagonista femminile.",
  },
  {
    source: "Cinema Italiano (scheda film)",
    title: "Pochi Attimi — Scheda film e festival",
    url: "https://www.cinemaitaliano.info/film/38844/festival/pochi-attimi.html",
    date: "2026",
    excerpt:
      "Regia: Angelo Faraci. Anno: 2026. Tipologia: lungometraggio. Stato: in produzione. Paese: Italia. Il film racconta la storia di una Comunità felice. Maria Antonina Macaluso tra gli interpreti principali.",
  },
  {
    source: "CastingNews.eu",
    title: "Al via i casting per il lungometraggio storico Pochi Attimi di Angelo Faraci",
    url: "https://www.castingnews.eu/magazine/2026/01/19/al-via-i-casting-per-il-lungometraggio-storico-pochi-attimi-di-angelo-faraci",
    date: "19 Gennaio 2026",
    excerpt:
      "Casting aperti in Sicilia per il film storico Pochi Attimi diretto da Angelo Faraci, con Maria Antonina Macaluso attrice protagonista femminile.",
  },
  {
    source: "YouTube",
    title: "Al via a Nicosia il casting nazionale per il film Pochi Attimi di Angelo Faraci",
    url: "https://www.youtube.com/watch?v=lyQ6_Phs-is",
    date: "29 Gennaio 2026",
    excerpt:
      "Servizio telegiornalistico sul casting nazionale del film Pochi Attimi di Angelo Faraci, con Maria Antonina Macaluso tra gli interpreti.",
  },
];

const JSONLD_SECTION = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Premio Speciale Leone Lungo — Pochi Attimi alla 83ª Mostra del Cinema di Venezia",
  description:
    "Presentazione nazionale di esclusiva del film Pochi Attimi di Angelo Faraci, con Maria Antonina Macaluso come attrice protagonista femminile, nell'ambito degli eventi collaterali della 83ª Mostra Internazionale d'Arte Cinematografica di Venezia. Il film ha ricevuto il Premio Speciale Leone Lungo.",
  startDate: "2026-09-06T18:00:00+02:00",
  endDate: "2026-09-06T20:00:00+02:00",
  eventStatus: "https://schema.org/EventCompleted",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  location: {
    "@type": "Place",
    name: "Area Hospitality Maxafilm — Hotel Excelsior",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Hotel Excelsior, Lido di Venezia",
      addressLocality: "Venezia",
      addressRegion: "Veneto",
      addressCountry: "IT",
    },
  },
  organizer: {
    "@type": "Organization",
    name: "Le Stelle del Sud",
  },
  sponsor: {
    "@type": "Organization",
    name: "Maxa Film srl",
  },
  about: {
    "@type": "Movie",
    name: "Pochi Attimi",
    director: { "@type": "Person", name: "Angelo Faraci" },
    actor: { "@type": "Person", name: "Maria Antonina Macaluso" },
    datePublished: "2026",
    genre: "Lungometraggio storico-culturale",
  },
  award: "Premio Speciale Leone Lungo",
  superEvent: {
    "@type": "Festival",
    name: "83ª Mostra Internazionale d'Arte Cinematografica di Venezia",
    startDate: "2026-09-02",
    endDate: "2026-09-12",
    location: "Venezia, Italia",
  },
};

export default function PochiAttimiVenezia() {
  return (
    <section id="pochi-attimi-venezia" className="bg-section-alt py-24 md:py-32">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLD_SECTION) }}
      />
      <div className="cinematic-container">
        {/* === Header === */}
        <Reveal className="mx-auto mb-16 max-w-3xl text-center">
          <span className="pill-cinema mb-4">Venezia 83 · 6 Settembre 2026 · Premio ricevuto</span>
          <h2 className="font-display text-4xl text-gradient-gold sm:text-5xl md:text-6xl">
            Pochi Attimi al Premio Leone Lungo
          </h2>
          <p className="mt-6 text-pretty text-base leading-relaxed text-cream/70 sm:text-lg">
            Il film diretto da <strong className="text-cream">Angelo Faraci</strong>, con{" "}
            <strong className="text-gold">Maria Antonina Macaluso</strong> come attrice
            protagonista femminile, ha ricevuto il Premio Speciale «Leone Lungo» nell'ambito
            degli eventi collaterali della 83ª Mostra del Cinema di Venezia. Il sodalizio
            artistico tra Maria Antonina e Angelo Faraci ha raggiunto così uno dei suoi
            momenti più alti, portando il cinema siciliano alla vetrina internazionale
            veneziana.
          </p>
          <div className="divider-cinema mx-auto mt-8 max-w-xs" />
        </Reveal>

        {/* === Locandina ufficiale + Info evento === */}
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[400px_1fr] md:items-start">
          {/* Locandina */}
          <Reveal>
            <figure className="glass-card overflow-hidden p-3">
              <div className="relative aspect-[896/1200] w-full overflow-hidden bg-noir">
                <Image
                  src="/images/news/pochi-attimi-venezia-83.jpg"
                  alt="Locandina ufficiale — Pochi Attimi Premio Leone Lungo Venezia 83"
                  fill
                  sizes="(min-width: 768px) 400px, 100vw"
                  quality={100}
                  className="object-contain"
                  priority
                />
              </div>
              <figcaption className="px-3 py-3 text-center text-xs uppercase tracking-wide-sm text-cream/50">
                Locandina ufficiale evento — Maxa Film · Le Stelle del Sud
              </figcaption>
            </figure>
          </Reveal>

          {/* Info evento + dettagli film */}
          <Reveal delay={120}>
            <div className="space-y-6">
              {/* Evento box */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-gold" />
                  <h3 className="font-display text-2xl text-cream">L'evento</h3>
                </div>
                <div className="divider-cinema mt-3 max-w-xs" />
                <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-[11px] uppercase tracking-wide-sm text-gold/70">Data</dt>
                    <dd className="mt-1 text-cream">{EVENT_DETAILS.data}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-wide-sm text-gold/70">Orario</dt>
                    <dd className="mt-1 text-cream">{EVENT_DETAILS.orario}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-wide-sm text-gold/70">Location</dt>
                    <dd className="mt-1 text-cream">{EVENT_DETAILS.location}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-wide-sm text-gold/70">Città</dt>
                    <dd className="mt-1 text-cream">{EVENT_DETAILS.citta}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-[11px] uppercase tracking-wide-sm text-gold/70">Festival</dt>
                    <dd className="mt-1 text-cream">{EVENT_DETAILS.festival}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-[11px] uppercase tracking-wide-sm text-gold/70">Premio</dt>
                    <dd className="mt-1 font-display text-gold">{EVENT_DETAILS.premio}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-[11px] uppercase tracking-wide-sm text-gold/70">Contesto</dt>
                    <dd className="mt-1 text-cream">{EVENT_DETAILS.contesto}</dd>
                  </div>
                </dl>
              </div>

              {/* Film box */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-3">
                  <Film className="h-6 w-6 text-gold" />
                  <h3 className="font-display text-2xl text-cream">Il film</h3>
                </div>
                <div className="divider-cinema mt-3 max-w-xs" />
                <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-[11px] uppercase tracking-wide-sm text-gold/70">Regista</dt>
                    <dd className="mt-1 text-cream">{EVENT_DETAILS.regista}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-wide-sm text-gold/70">Protagonista femminile</dt>
                    <dd className="mt-1 text-cream">{EVENT_DETAILS.attrice}</dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-[11px] uppercase tracking-wide-sm text-gold/70">Tema</dt>
                    <dd className="mt-1 text-cream/90">{EVENT_DETAILS.tema}</dd>
                  </div>
                </dl>
              </div>

              {/* Crediti evento */}
              <div className="glass-card p-6">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-gold" />
                  <h3 className="font-display text-2xl text-cream">Crediti evento</h3>
                </div>
                <div className="divider-cinema mt-3 max-w-xs" />
                <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div>
                    <dt className="text-[11px] uppercase tracking-wide-sm text-gold/70">Direzione artistica</dt>
                    <dd className="mt-1 text-cream">{EVENT_DETAILS.organizzatore}</dd>
                  </div>
                  <div>
                    <dt className="text-[11px] uppercase tracking-wide-sm text-gold/70">Promotore</dt>
                    <dd className="mt-1 text-cream">{EVENT_DETAILS.promotore}</dd>
                  </div>
                </dl>
              </div>
            </div>
          </Reveal>
        </div>

        {/* === Approfondimento — Il Leone Lungo === */}
        <Reveal className="mx-auto mt-20 max-w-4xl">
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-gold" />
            <h2 className="font-display text-3xl text-cream sm:text-4xl">Il Premio «Leone Lungo»</h2>
          </div>
          <div className="divider-cinema mt-6 max-w-xs" />
          <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
            <p>
              Il Premio Speciale «Leone Lungo» è un riconoscimento cinematografico italiano
              assegnato durante gli eventi collaterali della 83ª Mostra del Cinema di Venezia.
              Nato per mettere in risalto il lungometraggio italiano che più si è distinto a
              livello nazionale come progetto storico-culturale, il premio è ideato da
              <strong className="text-cream"> Donato Pugliese</strong> (Presidente Maxa Film srl)
              con l'associazione di terzo settore <strong className="text-cream">Le Stelle del Sud</strong>,
              con sede in Puglia.
            </p>
            <p>
              Il premio viene portato in una vetrina prestigiosa come la Mostra del Cinema di
              Venezia, all'interno dei tanti eventi collaterali più risonanti, per valorizzare
              il lungometraggio italiano che più si è distinto a livello nazionale come progetto
              storico-culturale per il mondo dell'audiovisivo.
            </p>
            <p>
              Il film <strong className="text-gold">Pochi Attimi</strong>, per la regia di
              Angelo Faraci, è il progetto prescelto per il 6 settembre 2026. La presentazione
              nazionale di esclusiva si è tenuta presso l'Area Hospitality Maxafilm dell'Hotel
              Excelsior, al Lido di Venezia, con la presenza del cast artistico del film.
            </p>
            <p>
              Tra gli interpreti principali spicca <strong className="text-gold">Maria Antonina
              Macaluso</strong>, attrice siciliana già nota per le pellicole «Ciò che non ti ho
              detto» (2019), «Provvidenza» (2021) e «Separati Mai» (2023). Il sodalizio artistico
              e di vita tra Maria Antonina e Angelo Faraci, nato il 14 agosto 2019 a Palermo,
              ha trovato nella Mostra del Cinema di Venezia una delle sue vetrine più prestigiose,
              confermando il cinema siciliano come voce autorevole del panorama audiovisivo
              italiano contemporaneo.
            </p>
          </div>
        </Reveal>

        {/* === Fonti terze verificate === */}
        <Reveal className="mx-auto mt-20 max-w-5xl">
          <div className="flex items-center gap-3">
            <Newspaper className="h-6 w-6 text-gold" />
            <h2 className="font-display text-3xl text-cream sm:text-4xl">Fonti giornalistiche verificate</h2>
          </div>
          <div className="divider-cinema mt-6 max-w-xs" />
          <p className="mt-6 text-pretty text-base leading-relaxed text-cream/70">
            La notizia del premio a Pochi Attimi è riportata da molteplici fonti giornalistiche
            indipendenti. Di seguito l'elenco completo delle fonti verificabili.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {SOURCES.map((source, i) => (
              <Reveal key={i} delay={i * 60}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card card-lift-premium group block h-full p-5"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0 flex-1">
                      <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">
                        {source.source}
                      </p>
                      <h3 className="mt-1 font-display text-lg text-cream group-hover:text-gold">
                        {source.title}
                      </h3>
                      <p className="mt-1 text-xs text-cream/50">{source.date}</p>
                      <p className="mt-3 text-sm leading-relaxed text-cream/70">
                        {source.excerpt}
                      </p>
                    </div>
                    <ExternalLink className="h-4 w-4 shrink-0 text-gold/50 transition-colors group-hover:text-gold" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* === CTA === */}
        <Reveal className="mx-auto mt-20 max-w-3xl text-center">
          <div className="glass-card p-8">
            <Star className="mx-auto mb-4 h-10 w-10 text-gold" />
            <h3 className="font-display text-2xl text-cream sm:text-3xl">
              Approfondisci il film
            </h3>
            <p className="mt-4 text-pretty text-base leading-relaxed text-cream/70">
              Scopri la scheda completa di Pochi Attimi, con cast, regista, produzione e
              curiosità sul set.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/film/pochi-attimi"
                className="btn-cinema btn-cinema-solid"
              >
                <Film className="h-4 w-4" />
                Scheda film Pochi Attimi
              </Link>
              <Link
                href="/news/pochi-attimi-venezia-83"
                className="btn-ghost-cinema"
              >
                <Newspaper className="h-4 w-4" />
                Pagina news completa
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
