import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SeoBoost from "@/components/site/SeoBoost";
import { Reveal } from "@/components/cinematic/Reveal";
import { Calendar, Film, Users, Award, MapPin, ExternalLink, Newspaper } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Sodalizio artistico Macaluso-Faraci",
  description:
    "Approfondimento del sodalizio artistico tra Maria Antonina Macaluso e Angelo Faraci: dal primo incontro del 14 agosto 2019 a Palermo al Premio Leone Lungo a Venezia 83 con Pochi Attimi.",
  alternates: { canonical: "/news/sodalizio-maria-antonina-angelo-faraci" },
  openGraph: {
    title: "Sodalizio artistico Macaluso-Faraci — 10 film dal 2019 al 2026",
    description: "Dieci produzioni cinematografiche condivise in otto anni di carriera, dal primo incontro a Palermo al Premio Leone Lungo a Venezia 83.",
    images: [{ url: "/images/venezia/venezia-03.jpg", width: 1025, height: 1280, alt: "Angelo Faraci e Maria Antonina Macaluso all'evento Venezia 83" }],
    type: "article",
    publishedTime: "2026-09-25T10:00:00Z",
    authors: ["Redazione Maria Antonina Macaluso"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Sodalizio artistico Maria Antonina Macaluso e Angelo Faraci — 10 film dal 2019 al 2026",
  description:
    "Approfondimento del sodalizio artistico e di vita tra Maria Antonina Macaluso e Angelo Faraci: dal primo incontro del 14 agosto 2019 a Palermo, fino al Premio Leone Lungo a Venezia 83 con Pochi Attimi.",
  image: [
    `${SITE.url}/images/venezia/venezia-03.jpg`,
    `${SITE.url}/images/venezia/venezia-01.jpg`,
    `${SITE.url}/images/photobook/mam-01.jpg`,
  ],
  datePublished: "2026-09-25T10:00:00Z",
  dateModified: "2026-09-25T10:00:00Z",
  author: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale", url: SITE.url },
  publisher: {
    "@type": "Organization",
    name: "Maria Antonina Macaluso — Enciclopedia digitale",
    url: SITE.url,
    logo: { "@type": "ImageObject", url: `${SITE.url}/images/hero-maria-antonina.jpg` },
  },
  url: `${SITE.url}/news/sodalizio-maria-antonina-angelo-faraci`,
  mainEntityOfPage: { "@type": "WebPage", url: `${SITE.url}/news/sodalizio-maria-antonina-angelo-faraci` },
  about: [
    { "@type": "Person", name: "Maria Antonina Macaluso" },
    { "@type": "Person", name: "Angelo Faraci" },
    { "@type": "Movie", name: "Pochi Attimi" },
  ],
  inLanguage: "it-IT",
  articleSection: "Cinema italiano",
  keywords: ["Maria Antonina Macaluso", "Angelo Faraci", "Pochi Attimi", "Venezia 83", "Premio Leone Lungo", "Cinema siciliano", "Camporeale"],
  isPartOf: { "@type": "WebSite", name: "Maria Antonina Macaluso — Enciclopedia digitale", url: SITE.url },
  citation: [
    "https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html",
    "https://www.radioamica.it/pochi-attimi-trionfa-a-venezia-la-camporealese-macaluso-e-la-partinicese-quatrosi-portano-la-sicilia-sul-podio-del-cinema/",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "News", item: `${SITE.url}/news` },
    { "@type": "ListItem", position: 3, name: "Sodalizio artistico", item: `${SITE.url}/news/sodalizio-maria-antonina-angelo-faraci` },
  ],
};

const FILMOGRAFIA_CONGIUNTA = [
  { year: "2019", title: "Ciò che non ti ho detto", type: "Fiction TV Sky", role: "Attrice" },
  { year: "2020", title: "Don't Be Silent", type: "Cortometraggio Rai Cinema", role: "Attrice" },
  { year: "2021", title: "Provvidenza", type: "Cortometraggio Rai Cinema", role: "Protagonista femminile" },
  { year: "2023", title: "Pietrazita", type: "Cortometraggio Rai Cinema", role: "Interprete principale" },
  { year: "2023-2024", title: "Separati Mai", type: "Lungometraggio Rai Cinema", role: "Attrice" },
  { year: "2023", title: "Sabbie Nere", type: "Serie TV Mediaset", role: "Interprete" },
  { year: "2024", title: "Vanina", type: "Serie TV Canale 5", role: "Partecipazione" },
  { year: "2024-2025", title: "Il Mistero di Spartivento", type: "Lungometraggio Rai Cinema", role: "Attrice" },
  { year: "2025", title: "Eccellenza Siciliana", type: "Documentario", role: "Voce narrante" },
  { year: "2026", title: "Pochi Attimi", type: "Lungometraggio", role: "Protagonista femminile" },
];

export default function SodalizioArtisticoPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "News", path: "/news" },
          { label: "Sodalizio artistico" },
        ]}
        additionalJsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />

      <PageHero
        eyebrow="Approfondimento · 25 Settembre 2026"
        title="Sodalizio artistico: Maria Antonina Macaluso e Angelo Faraci"
        subtitle="Dieci produzioni cinematografiche condivise in otto anni di carriera, dal primo incontro a Palermo del 14 agosto 2019 fino al Premio Leone Lungo alla 83ª Mostra del Cinema di Venezia con Pochi Attimi."
        breadcrumb={[{ label: "News", href: "/news" }, { label: "Sodalizio artistico" }]}
      />

      <article className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          <div className="mx-auto max-w-3xl">
            {/* Immagine apertura */}
            <Reveal className="mb-12">
              <figure className="glass-card overflow-hidden p-3">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-noir">
                  <Image
                    src="/images/venezia/venezia-03.jpg"
                    alt="Angelo Faraci e Maria Antonina Macaluso all'evento Venezia 83"
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    quality={95}
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className="px-3 py-3 text-center text-xs uppercase tracking-wide-sm text-cream/50">
                  Angelo Faraci e Maria Antonina Macaluso — Hotel Excelsior, Lido di Venezia, 6 settembre 2026
                </figcaption>
              </figure>
            </Reveal>

            {/* Box metadati */}
            <Reveal className="mb-12">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="glass-card p-4 text-center">
                  <Calendar className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Inizio</p>
                  <p className="mt-1 font-display text-base text-cream">14 agosto 2019</p>
                  <p className="text-xs text-cream/60">Palermo</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Film className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Produzioni</p>
                  <p className="mt-1 font-display text-base text-cream">10 film</p>
                  <p className="text-xs text-cream/60">Cinema + TV</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Award className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Premio</p>
                  <p className="mt-1 font-display text-base text-cream">Leone Lungo</p>
                  <p className="text-xs text-cream/60">Venezia 83</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <MapPin className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Vetrina</p>
                  <p className="mt-1 font-display text-base text-cream">Lido di Venezia</p>
                  <p className="text-xs text-cream/60">6 settembre 2026</p>
                </div>
              </div>
            </Reveal>

            {/* Sezione 1 */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-gradient-gold sm:text-4xl">L'inizio — Palermo, 14 agosto 2019</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Il 14 agosto 2019 segna una data fondamentale nella storia del cinema siciliano
                  contemporaneo: a Palermo, l'indomani del compleanno di Angelo Faraci (nato il 13
                  agosto 1989), il regista incontra Maria Antonina Macaluso. È il momento esatto in
                  cui inizia un sodalizio artistico e di vita destinato a durare nel tempo e a
                  produrre dieci opere cinematografiche e televisive nel giro di otto anni.
                </p>
                <p>
                  Maria Antonina Macaluso, nata a Bologna il 9 novembre 2001 e cresciuta a
                  Camporeale — paesino della città metropolitana di Palermo tra le colline e gli
                  ulivi dell'entroterra siciliano — aveva già maturato una formazione artistica
                  poliedrica: attrice, content creator, esperta di comunicazione e appassionata di
                  beauty. Angelo Faraci, all'epoca trentenne, era già attore, regista e produttore
                  con un percorso consolidato nel cinema siciliano. L'incontro segna la nascita di
                  un sodalizio che coniuga vita sentimentale e percorso artistico condiviso.
                </p>
                <p>
                  Da quel 14 agosto 2019, Maria Antonina e Angelo non si separano più, né nella vita
                  né sul set. Ogni opera diretta da Angelo Faraci vede Maria Antonina tra gli
                  interpreti principali, spesso nella parte di protagonista femminile. È un modello
                  di sodalizio artistico che ricorda le grandi coppie del cinema italiano
                  classico — come Antonioni-Berti o Wertmüller-Giannini — ma con una caratteristica
                  unica: la dimensione siciliana, la fedeltà alle radici, l'attenzione alle
                  storie del territorio.
                </p>
              </div>
            </Reveal>

            {/* Sezione 2 — Filmografia */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">Dieci produzioni in otto anni</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Dal 2019 al 2026, il sodalizio Macaluso-Faraci produce dieci opere cinematografiche
                  e televisive: tre cortometraggi Rai Cinema, una fiction Sky, due serie TV
                  Mediaset e Canale 5, un documentario, e tre lungometraggi Rai Cinema o
                  indipendenti. È una filmografia densa, che attraversa generi differenti — dal
                  dramma sociale alla suspense mediterranea, dal documentario al cinema storico
                  — ma che mantiene una coerenza profonda: il racconto della Sicilia, delle sue
                  ferite e delle sue voci, attraverso lo sguardo femminile di Maria Antonina.
                </p>
              </div>
              <div className="mt-8 overflow-hidden rounded-lg border border-gold/30">
                <table className="w-full border-collapse text-sm">
                  <thead className="bg-gold/10">
                    <tr>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Anno</th>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Titolo</th>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Tipologia</th>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Ruolo di Maria Antonina</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FILMOGRAFIA_CONGIUNTA.map((f, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-noir/30" : "bg-noir/10"}>
                        <td className="px-3 py-2 text-cream/70">{f.year}</td>
                        <td className="px-3 py-2 font-display text-cream">{f.title}</td>
                        <td className="px-3 py-2 text-cream/60">{f.type}</td>
                        <td className="px-3 py-2 text-cream">{f.role}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs text-cream/50">
                Filmografia completa del sodalizio Macaluso-Faraci dal 2019 al 2026.
              </p>
            </Reveal>

            {/* Sezione 3 — Debutto */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">Il debutto — «Ciò che non ti ho detto» (2019)</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  L'esordio del sodalizio avviene nel 2019 con la fiction TV «Ciò che non ti ho
                  detto», ideata da Angelo Faraci per Sky. La fiction è un unicum nel panorama
                  televisivo italiano: è l'unica serie TV italiana con un cast composto
                  esclusivamente da siciliani e volti isolani noti. Angelo Faraci è attore
                  protagonista nel ruolo di Gaetano Scalici, personaggio che interpreterà per
                  cinque anni consecutivi.
                </p>
                <p>
                  Maria Antonina Macaluso partecipa alla fiction in un ruolo che la introduce al
                  pubblico televisivo nazionale. Il debutto è confermato da IMDb, che elenca
                  l'opera tra le produzioni per cui l'attrice è celebre. La fiction viene
                  distribuita su Sky e nel mercato estero, aprendo la strada a una serie di
                  collaborazioni successive con Rai Cinema e Mediaset.
                </p>
                <p>
                  La fiction segna anche l'inizio di una costante del sodalizio: la fedeltà al
                  territorio siciliano. Le storie raccontate sono storie di Palermo, di
                  Camporeale, della Valle del Belice, della costa tra Messina e Trapani. Il cinema
                  di Angelo Faraci è un cinema che parte dalla Sicilia e parla all'Italia, con
                  Maria Antonina come voce femminile guida.
                </p>
              </div>
            </Reveal>

            {/* Sezione 4 — Rai Cinema */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">Rai Cinema e il cinema sociale (2020-2023)</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Nel 2020 Angelo Faraci esordisce come regista per Rai Cinema con il cortometraggio
                  «Don't Be Silent», prodotto nell'ambito del Progetto Nazionale sul Bullismo.
                  Maria Antonina Macaluso è tra gli interpreti principali: è la prima volta che la
                  coppia lavora insieme per Rai Cinema. Il film affronta il tema del silenzio
                  complice di fronte alle violenze quotidiane, con la grammatica asciutta del
                  cinema sociale siciliano.
                </p>
                <p>
                  Nel 2021 è la volta di «Provvidenza», cortometraggio Rai Cinema girato a
                  Montalbano Elicona, in provincia di Messina. Maria Antonina Macaluso è la
                  protagonista femminile accanto ad Angelo Faraci. Il cortometraggio vince il
                  Premio Migliore Sceneggiatura al Ciak Film Festival International di Fiuggi,
                  ricevendo l'Oscar d'Oro. Maria Antonina è presente e premiata accanto al regista
                  sul red carpet.
                </p>
                <p>
                  Nel 2023 esce «Pietrazita», cortometraggio Rai Cinema ambientato a Sant'Angelo
                  di Brolo, sui Nebrodi. Il cast vede Benedetto Lo Monaco e Beatrice Ingegneri
                  accanto a Maria Antonina Macaluso, tra gli interpreti principali. Il film si
                  classifica al secondo posto al Tulipani di Seta Nera, XVI edizione. La critica
                  apprezza la grammatica visiva del cinema di Faraci e la presenza magnetica di
                  Maria Antonina, che si conferma attrice poliedrica capace di passare dalla
                  fiction TV al cortometraggio d'autore.
                </p>
              </div>
            </Reveal>

            {/* Sezione 5 — Lungometraggi */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">I lungometraggi e la consacrazione (2023-2026)</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Il 2023 segna il passaggio dai cortometraggi ai lungometraggi. «Separati Mai» è
                  il primo lungometraggio Rai Cinema diretto da Angelo Faraci con Maria Antonina
                  Macaluso come attrice. Il film racconta una storia di legami che resistono alla
                  distanza e al tempo, con una fotografia che valorizza i paesaggi siciliani.
                </p>
                <p>
                  Nel 2023 Maria Antonina è anche nel cast di «Sabbie Nere», serie TV Mediaset
                  diretta da Davide Marengo, accanto ad Angelo Faraci. L'anno successivo, nel
                  2024, partecipa a un episodio della prima stagione di «Vanina», serie TV Canale
                  5 / Mediaset, sempre con la regia di Davide Marengo. Nel 2024-2025 è la volta
                  de «Il Mistero di Spartivento», lungometraggio Rai Cinema con regia di Angelo
                  Faraci: un suspense mediterraneo che si snoda tra i venti della Sicilia.
                </p>
                <p>
                  Nel 2025 Maria Antonina è voce narrante di «Eccellenza Siciliana», documentario
                  che celebra l'eccellenza siciliana in chiave cinematografica. Ma è nel 2026 che
                  il sodalizio raggiunge il suo punto più alto con «Pochi Attimi», il nuovo
                  lungometraggio di Angelo Faraci che mette in risalto il valore vero della vita.
                </p>
              </div>
            </Reveal>

            {/* Sezione 6 — Pochi Attimi */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-gradient-gold sm:text-4xl">«Pochi Attimi» — il nuovo lungometraggio di Angelo Faraci</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  «Pochi Attimi» è il nuovo lungometraggio di Angelo Faraci, dedicato alle
                  catastrofi ambientali italiane — dai terremoti del Belice alle alluvioni, dalle
                  frane ai disastri industriali. Il film mette in risalto il valore vero della
                  vita, raccontando come una comunità felice possa resistere e rinascere anche di
                  fronte alla catastrofe. Maria Antonina Macaluso è la protagonista femminile,
                  accanto ad Angelo Faraci che interpreta il ruolo di Salvatore.
                </p>
                <p>
                  Il cast è ricco: Rosaria Lo Porto, autrice della sceneggiatura su soggetto di
                  Angelo Faraci, figura tra gli interpreti principali. Ci sono poi Totò Borgese,
                  Marika Faraci, Salvatore Martines, Mario Romano, Rosanna Barbera, Enio Drovandi
                  e Massimo Spata in partecipazioni straordinarie. La direzione di produzione è
                  affidata a Salvatore Alicata. Le musiche sono di Lorenzo Minardi, la produzione
                  esecutiva di Angelo Faraci e Angela Giardina.
                </p>
                <p>
                  La pellicola è il punto più alto, finora, del percorso artistico condiviso tra
                  Maria Antonina Macaluso e Angelo Faraci. È il primo film che porta il sodalizio
                  alla vetrina internazionale della Mostra del Cinema di Venezia, dove riceve il
                  Premio Speciale «Leone Lungo» il 6 settembre 2026.
                </p>
              </div>
            </Reveal>

            {/* Sezione 7 — Premio */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">Premio Leone Lungo — 83ª Mostra del Cinema di Venezia</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Il 6 settembre 2026, alle ore 18:00, presso l'Area Hospitality Maxafilm
                  dell'Hotel Excelsior al Lido di Venezia, il film «Pochi Attimi» di Angelo Faraci
                  riceve il Premio Speciale «Leone Lungo». Il riconoscimento è ideato da Donato
                  Pugliese, Presidente di Maxa Film srl, con l'associazione di terzo settore «Le
                  Stelle del Sud», con sede in Puglia. Il premio nasce per mettere in risalto il
                  lungometraggio italiano che più si è distinto a livello nazionale come progetto
                  storico-culturale per il mondo dell'audiovisivo.
                </p>
                <p>
                  La presentazione nazionale di esclusiva si è tenuta nell'ambito degli eventi
                  collaterali della 83ª Mostra Internazionale d'Arte Cinematografica di Venezia.
                  Maria Antonina Macaluso è presente come attrice protagonista femminile del film,
                  accanto ad Angelo Faraci regista e attore. Per il sodalizio artistico è la
                  consacrazione internazionale di un percorso iniziato sette anni prima a
                  Palermo.
                </p>
                <p>
                  La notizia del premio è riportata da molteplici fonti giornalistiche
                  indipendenti: Cinema Italiano, Radio Amica, Radio Una Voce Vicina, La Sicilia,
                  Il Moderatore. La copertura stampa conferma l'autorevolezza del riconoscimento e
                  la centralità del sodalizio Macaluso-Faraci nel panorama del cinema siciliano
                  contemporaneo.
                </p>
              </div>
            </Reveal>

            {/* Sezione 8 — Significato */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">Il significato del sodalizio</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Il sodalizio artistico tra Maria Antonina Macaluso e Angelo Faraci è un caso
                  raro nel cinema italiano contemporaneo. Non si tratta semplicemente di una
                  coppia che lavora insieme, ma di un sodalizio che coniuga vita sentimentale,
                  percorso artistico e fedeltà al territorio. Dieci produzioni in otto anni
                  raccontano una costanza produttiva che ha pochi paragoni nel cinema italiano
                  recente.
                </p>
                <p>
                  Maria Antonina Macaluso porta sul set la sua formazione poliedrica: attrice,
                  content creator, esperta di comunicazione. Angelo Faraci porta la regia, la
                  produzione, la sceneggiatura. Insieme formano un sodalizio dove la voce
                  femminile siciliana incontra lo sguardo registico maschile siciliano: una
                  simbiosi che produce racconti autentici, mai stereotipati, capaci di parlare
                  di dolore e di rinascita con la stessa intensità.
                </p>
                <p>
                  Il sodalizio è anche un atto di resistenza culturale: fare cinema in Sicilia,
                  con cast siciliani, raccontando storie siciliane, portandole alla vetrina
                  internazionale di Venezia. È una dimostrazione che il cinema siciliano non è
                  un cinema minore, ma una voce autorevole del panorama audiovisivo italiano
                  contemporaneo. E Maria Antonina Macaluso è una delle voci più rappresentative
                  di questo cinema.
                </p>
              </div>
            </Reveal>

            {/* Sezione 9 — Future */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">Prospettive future</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Con il Premio Leone Lungo a Venezia 83, il sodalizio Macaluso-Faraci apre una
                  nuova fase della sua parabola artistica. «Pochi Attimi» è il nuovo
                  lungometraggio che porta il cinema siciliano alla vetrina internazionale. La
                  speranza è che il riconoscimento apra porte a nuove distribuzioni
                  internazionali, a festival stranieri, a collaborazioni con produzioni europee.
                </p>
                <p>
                  Maria Antonina Macaluso, a 24 anni, ha già un curriculum di dieci produzioni
                  cinematografiche e televisive, un Premio Speciale a Venezia 83, una
                  presenza consolidata su Rai Cinema, Sky, Mediaset e Canale 5. Il suo percorso
                  è ancora agli inizi, ma il sodalizio con Angelo Faraci ha già dimostrato di
                  saper produrre cinema autorevole, autentico, radicato nel territorio ma capace
                  di parlare al mondo.
                </p>
                <p>
                  Il prossimo capitolo sarà scritto nei prossimi mesi. Per ora, il 6 settembre
                  2026 resterà come la data in cui il cinema siciliano, attraverso il sodalizio
                  Macaluso-Faraci, ha ricevuto il suo battesimo ufficiale alla 83ª Mostra del
                  Cinema di Venezia. È un punto di arrivo, ma soprattutto un punto di partenza.
                </p>
              </div>
            </Reveal>

            {/* Box fonti */}
            <Reveal className="mb-12">
              <div className="rounded-lg border border-gold/40 bg-gold/5 p-6">
                <div className="flex items-start gap-3">
                  <Newspaper className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-display text-base text-gold">Fonti giornalistiche verificate</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/80">
                      Questo articolo è basato su fonti giornalistiche autorevoli verificabili.
                      Per consultare gli articoli originali sul Premio Leone Lungo a Pochi Attimi
                      e sul sodalizio Macaluso-Faraci, visita la pagina dedicata all'evento
                      Venezia 83.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link
                        href="/news/pochi-attimi-venezia-83"
                        className="inline-flex items-center gap-2 rounded-sm border border-gold/40 bg-gold/10 px-4 py-2 text-xs uppercase tracking-wide-sm text-gold/90 transition-colors hover:bg-gold hover:text-noir"
                      >
                        <Newspaper className="h-3.5 w-3.5" />
                        Pagina evento Venezia 83
                      </Link>
                      <a
                        href="https://www.radioamica.it/pochi-attimi-trionfa-a-venezia-la-camporealese-macaluso-e-la-partinicese-quatrosi-portano-la-sicilia-sul-podio-del-cinema/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-sm border border-cream/30 bg-cream/5 px-4 py-2 text-xs uppercase tracking-wide-sm text-cream/80 transition-colors hover:bg-cream hover:text-noir"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Articolo Radio Amica
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* CTA finale */}
            <Reveal>
              <div className="flex flex-wrap gap-4">
                <Link href="/news/pochi-attimi-venezia-83" className="btn-cinema btn-cinema-solid">
                  <Film className="h-4 w-4" />
                  Approfondisci Venezia 83
                </Link>
                <Link href="/filmografia" className="btn-cinema">
                  <Users className="h-4 w-4" />
                  Filmografia completa
                </Link>
                <Link href="/" className="btn-ghost-cinema">
                  Torna alla home
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    </main>
  );
}
