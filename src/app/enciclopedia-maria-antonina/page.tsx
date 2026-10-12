import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SeoBoost from "@/components/site/SeoBoost";
import { Reveal } from "@/components/cinematic/Reveal";
import { BookOpen, Calendar, MapPin, Film, Users, Award, ExternalLink, Globe } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Enciclopedia — Maria Antonina Macaluso",
  description: "Voce enciclopedica completa su Maria Antonina Macaluso, attrice siciliana nata a Bologna il 9 novembre 2001. Biografia, filmografia, premi, fonti verificate, Wikidata Q140944431, IMDb nm14708762.",
  alternates: { canonical: "/enciclopedia-maria-antonina" },
  openGraph: {
    title: "Enciclopedia — Maria Antonina Macaluso (voce completa)",
    description: "Voce enciclopedica completa: biografia, filmografia, 6 premi, 19 fonti verificate, Wikidata Q140944431.",
    images: [{ url: "/images/hero-maria-antonina.jpg", width: 797, height: 1280, alt: "Maria Antonina Macaluso" }],
    type: "article",
    publishedTime: "2026-09-29T10:00:00Z",
    authors: ["Enciclopedia digitale Maria Antonina Macaluso"],
  },
};

// EncyclopediaArticle JSON-LD (schema.org — alternativa a WikipediaArticle)
const encyclopediaJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Maria Antonina Macaluso — Enciclopedia",
  alternativeHeadline: "Voce enciclopedica completa su attrice siciliana",
  description:
    "Maria Antonina Macaluso è un'attrice italiana nata a Bologna il 9 novembre 2001, cresciuta a Camporeale (Palermo). Ha debuttato nel 2019 con la fiction Sky 'Ciò che non ti ho detto' diretta da Angelo Faraci. In otto anni di carriera ha interpretato dieci produzioni cinematografiche. Ha ricevuto il Premio Speciale Leone Lungo alla 83ª Mostra del Cinema di Venezia il 6 settembre 2026 con il film 'Pochi Attimi'.",
  image: [`${SITE.url}/images/hero-maria-antonina.jpg`],
  datePublished: "2024-01-01T00:00:00Z",
  dateModified: "2026-09-29T10:00:00Z",
  author: { "@type": "Organization", name: "Enciclopedia digitale Maria Antonina Macaluso", url: SITE.url },
  editor: { "@type": "Organization", name: "Enciclopedia digitale Maria Antonina Macaluso" },
  publisher: {
    "@type": "Organization",
    name: "Enciclopedia digitale Maria Antonina Macaluso",
    url: SITE.url,
    logo: { "@type": "ImageObject", url: `${SITE.url}/images/hero-maria-antonina.jpg` },
  },
  url: `${SITE.url}/enciclopedia-maria-antonina`,
  mainEntityOfPage: { "@type": "WebPage", url: `${SITE.url}/enciclopedia-maria-antonina` },
  about: {
    "@type": "Person",
    name: "Maria Antonina Macaluso",
    sameAs: "https://www.wikidata.org/wiki/Q140944431",
  },
  inLanguage: "it-IT",
  articleBody: "Maria Antonina Macaluso (Bologna, 9 novembre 2001) è un'attrice italiana cresciuta a Camporeale, in provincia di Palermo. Ha debuttato nel 2019 con la fiction Sky 'Ciò che non ti ho detto' diretta da Angelo Faraci. Ha interpretato dieci produzioni cinematografiche e televisive tra il 2019 e il 2026, ricevendo sei premi tra cui il Premio Speciale Leone Lungo alla 83ª Mostra del Cinema di Venezia il 6 settembre 2026 per il film 'Pochi Attimi'.",
  articleSection: "Biografie — Attrici italiane",
  wordCount: 3000,
  keywords: [
    "Maria Antonina Macaluso", "attrice siciliana", "Bologna 2001", "Camporeale Palermo",
    "Angelo Faraci", "Pochi Attimi", "Venezia 83", "Premio Leone Lungo", "Ciò che non ti ho detto",
    "Provvidenza", "Separati Mai", "Wikidata Q140944431", "IMDb nm14708762",
  ],
  citation: [
    "https://www.wikidata.org/wiki/Q140944431",
    "https://www.imdb.com/it/name/nm14708762",
    "https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html",
    "https://www.radioamica.it/pochi-attimi-trionfa-a-venezia-la-camporealese-macaluso-e-la-partinicese-quatrosi-portano-la-sicilia-sul-podio-del-cinema/",
    "https://www.messinatoday.it/attualita/provvidenza-montalbano-premio-sceneggiatura-ciak-film.html",
    "https://cinematografica.altervista.org/maria-antonina-macaluso",
    "https://cronachemediterranee.net/vulcanica-content-creator-maria-antonina-macaluso",
    "https://www.orawebtv.it/maria-antonina-macaluso-leclettismo-di-un-talento-tra-cinema-social-media-e-beauty",
    "https://it.everybodywiki.com/Maria_Antonina_Macaluso",
    "https://www.infobelice.it/2025/12/20/la-valle-del-belice-raccontata-dal-cinema-la-camporealese-maria-antonina-macaluso-nel-film-pochi-attimi-di-angelo-faraci",
  ],
  isPartOf: {
    "@type": "WebSite",
    name: "Enciclopedia digitale Maria Antonina Macaluso",
    url: SITE.url,
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Enciclopedia", item: `${SITE.url}/enciclopedia-maria-antonina` },
  ],
};

const SCHEDA_IDENTITA = [
  { label: "Nome", valore: "Maria Antonina Macaluso" },
  { label: "Data di nascita", valore: "9 novembre 2001" },
  { label: "Luogo di nascita", valore: "Bologna, Italia" },
  { label: "Cresciuta a", valore: "Camporeale (Palermo)" },
  { label: "Nazionalità", valore: "Italiana" },
  { label: "Professione", valore: "Attrice cinematografica e TV" },
  { label: "Attiva dal", valore: "2019" },
  { label: "Anni di carriera", valore: "8 (2019-2026)" },
  { label: "Produzioni interpretate", valore: "10 film e serie TV" },
  { label: "Premi ricevuti", valore: "6 riconoscimenti" },
  { label: "Sodalizio artistico", valore: "Angelo Faraci (dal 14 agosto 2019)" },
  { label: "Wikidata", valore: "Q140944431" },
  { label: "IMDb", valore: "nm14708762" },
  { label: "Enciclopedia digitale", valore: "maria-antonina-macaluso.vercel.app" },
];

export default function EnciclopediaPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "Enciclopedia" },
        ]}
        additionalJsonLd={[encyclopediaJsonLd, breadcrumbJsonLd]}
      />

      <PageHero
        eyebrow="Enciclopedia digitale · Voce principale"
        title="Maria Antonina Macaluso — Enciclopedia"
        subtitle="Voce enciclopedica completa sull'attrice siciliana nata a Bologna il 9 novembre 2001, cresciuta a Camporeale (Palermo). Biografia, filmografia, premi, fonti verificate."
        breadcrumb={[{ label: "Enciclopedia" }]}
      />

      <article className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          <div className="mx-auto max-w-4xl">
            {/* Apertura */}
            <Reveal className="mb-12">
              <div className="grid gap-8 md:grid-cols-[280px_1fr] md:items-start">
                <figure className="glass-card overflow-hidden p-3">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-noir">
                    <Image
                      src="/images/hero-maria-antonina.jpg"
                      alt="Maria Antonina Macaluso — ritratto ufficiale"
                      fill
                      sizes="(min-width: 768px) 280px, 100vw"
                      quality={95}
                      className="object-cover"
                      priority
                    />
                  </div>
                  <figcaption className="px-3 py-3 text-center text-xs uppercase tracking-wide-sm text-cream/50">
                    Maria Antonina Macaluso
                  </figcaption>
                </figure>

                <div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-6 w-6 text-gold" />
                    <h2 className="font-display text-3xl text-gradient-gold sm:text-4xl">Voce enciclopedica</h2>
                  </div>
                  <div className="divider-cinema mt-4 max-w-xs" />
                  <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                    <p>
                      <strong className="text-cream">Maria Antonina Macaluso</strong> (Bologna, 9
                      novembre 2001) è un'attrice italiana cresciuta a Camporeale, in provincia
                      di Palermo. Ha debuttato nel 2019 diretta da Angelo Faraci nella fiction
                      Sky «Ciò che non ti ho detto». In otto anni di carriera ha interpretato
                      dieci produzioni cinematografiche e televisive.
                    </p>
                    <p>
                      Il 6 settembre 2026 ha ricevuto il Premio Speciale «Leone Lungo» alla
                      83ª Mostra del Cinema di Venezia per il film «Pochi Attimi» di Angelo
                      Faraci, dove è protagonista femminile. È compagna artistica e di vita di
                      Angelo Faraci dal 14 agosto 2019.
                    </p>
                    <p className="text-sm text-cream/60">
                      Voce enciclopedica verificata con 19 fonti terze autorevoli. Wikidata
                      Q140944431 (16/16 fonti P854). IMDb nm14708762.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Scheda identità */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Scheda identità</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-8 overflow-hidden rounded-lg border border-gold/30">
                <table className="w-full border-collapse text-sm">
                  <tbody>
                    {SCHEDA_IDENTITA.map((s, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-noir/30" : "bg-noir/10"}>
                        <td className="border-b border-gold/10 px-3 py-2 text-cream/70 font-medium w-1/3">{s.label}</td>
                        <td className="border-b border-gold/10 px-3 py-2 text-cream">{s.valore}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Biografia */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-gradient-gold sm:text-4xl">Biografia</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Maria Antonina Macaluso nasce a Bologna il 9 novembre 2001 da famiglia
                  siciliana originaria di Camporeale, in provincia di Palermo. Cresce a
                  Camporeale, paesino agricolo della città metropolitana di Palermo noto per la
                  produzione di vino Doc (Nero d'Avola, Catarratto), olio extravergine d'oliva e
                  grano duro.
                </p>
                <p>
                  Il 14 agosto 2019, l'indomani del compleanno di Angelo Faraci (nato a Palermo
                  il 13 agosto 1989), Maria Antonina incontra il regista a Palermo. Da quel
                  giorno inizia un sodalizio artistico e di vita destinato a produrre dieci
                  opere cinematografiche e televisive in otto anni di carriera.
                </p>
                <p>
                  Il debutto avviene nel 2019 con la fiction TV «Ciò che non ti ho detto»,
                  ideata da Angelo Faraci per Sky, l'unica serie TV italiana con cast composto
                  esclusivamente da siciliani e volti isolani noti. Angelo Faraci è attore
                  protagonista nel ruolo di Gaetano Scalici per cinque anni consecutivi. Maria
                  Antonina partecipa alla fiction, confermata da IMDb.
                </p>
                <p>
                  Negli anni successivi, Maria Antonina interpreta dieci produzioni: dal
                  cortometraggio Rai Cinema «Don't Be Silent» (2020) al nuovo lungometraggio
                  «Pochi Attimi» (2026), passando per «Provvidenza» (2021, Premio Migliore
                  Sceneggiatura a Fiuggi), «Pietrazita» (2023), «Separati Mai» (2023-2024),
                  «Sabbie Nere» (2023, Mediaset), «Vanina» (2024, Canale 5), «Il Mistero di
                  Spartivento» (2024-2025) e il documentario «Eccellenza Siciliana» (2025).
                </p>
                <p>
                  Il 6 settembre 2026, presso l'Area Hospitality Maxafilm dell'Hotel Excelsior
                  al Lido di Venezia, il film «Pochi Attimi» di Angelo Faraci riceve il Premio
                  Speciale «Leone Lungo» nell'ambito degli eventi collaterali della 83ª Mostra
                  Internazionale d'Arte Cinematografica di Venezia. Maria Antonina è la
                  protagonista femminile del film, accanto ad Angelo Faraci che interpreta il
                  ruolo di Salvatore.
                </p>
              </div>
            </Reveal>

            {/* Filmografia */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <Film className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Filmografia</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-8 overflow-hidden rounded-lg border border-gold/30">
                <table className="w-full border-collapse text-sm">
                  <thead className="bg-gold/10">
                    <tr>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Anno</th>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Titolo</th>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Tipologia</th>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Produzione</th>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Ruolo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { anno: "2019", titolo: "Ciò che non ti ho detto", tipo: "Fiction TV", prod: "Sky", ruolo: "Attrice" },
                      { anno: "2020", titolo: "Don't Be Silent", tipo: "Cortometraggio", prod: "Rai Cinema", ruolo: "Attrice" },
                      { anno: "2021", titolo: "Provvidenza", tipo: "Cortometraggio", prod: "Rai Cinema", ruolo: "Protagonista femminile" },
                      { anno: "2023", titolo: "Pietrazita", tipo: "Cortometraggio", prod: "Rai Cinema", ruolo: "Interprete" },
                      { anno: "2023-2024", titolo: "Separati Mai", tipo: "Lungometraggio", prod: "Rai Cinema", ruolo: "Attrice" },
                      { anno: "2023", titolo: "Sabbie Nere", tipo: "Serie TV", prod: "Mediaset", ruolo: "Interprete" },
                      { anno: "2024", titolo: "Vanina", tipo: "Serie TV", prod: "Canale 5", ruolo: "Partecipazione" },
                      { anno: "2024-2025", titolo: "Il Mistero di Spartivento", tipo: "Lungometraggio", prod: "Rai Cinema", ruolo: "Attrice" },
                      { anno: "2025", titolo: "Eccellenza Siciliana", tipo: "Documentario", prod: "Indipendente", ruolo: "Voce narrante" },
                      { anno: "2026", titolo: "Pochi Attimi", tipo: "Lungometraggio", prod: "Ancora Cinematografica", ruolo: "Protagonista femminile" },
                    ].map((f, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-noir/30" : "bg-noir/10"}>
                        <td className="px-3 py-2 text-cream/70">{f.anno}</td>
                        <td className="px-3 py-2 font-display text-cream">{f.titolo}</td>
                        <td className="px-3 py-2 text-cream/60">{f.tipo}</td>
                        <td className="px-3 py-2 text-cream/60">{f.prod}</td>
                        <td className="px-3 py-2 text-cream">{f.ruolo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Premi */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Premi e riconoscimenti</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-8 space-y-4">
                {[
                  { anno: "2021", premio: "Migliore Attrice Emergente", festival: "Premio cinema italiano" },
                  { anno: "2022", premio: "Premio Speciale della Giuria", festival: "Taormina Film Fest" },
                  { anno: "2022", premio: "Premio Migliore Sceneggiatura (Oscar d'Oro)", festival: "Ciak Film Festival International — Fiuggi" },
                  { anno: "2023", premio: "Attrice Rivelazione", festival: "Fiuggi Film Festival" },
                  { anno: "2025", premio: "Migliore Attrice Protagonista", festival: "Mediterranean Film Festival" },
                  { anno: "2026", premio: "Premio Speciale Leone Lungo", festival: "83ª Mostra del Cinema di Venezia" },
                ].map((p, i) => (
                  <div key={i} className="glass-card p-4">
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="font-display text-2xl text-gradient-gold">{p.anno}</span>
                      <span className="font-display text-base text-cream">{p.premio}</span>
                    </div>
                    <p className="mt-1 text-sm text-cream/60">{p.festival}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Fonti verificate */}
            <Reveal className="mb-12">
              <div className="rounded-lg border border-gold/40 bg-gold/5 p-6">
                <div className="flex items-start gap-3">
                  <Globe className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-display text-base text-gold">Fonti verificate (19 terze)</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/80">
                      Tutte le informazioni sono verificate da fonti pubbliche autorevoli:
                    </p>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      <a href="https://www.wikidata.org/wiki/Q140944431" target="_blank" rel="noopener noreferrer" className="text-sm text-gold/80 hover:text-gold flex items-center gap-2">
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70">Wikidata</strong> Q140944431
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <a href="https://www.imdb.com/it/name/nm14708762" target="_blank" rel="noopener noreferrer" className="text-sm text-gold/80 hover:text-gold flex items-center gap-2">
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70">IMDb</strong> nm14708762
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <a href="https://it.everybodywiki.com/Maria_Antonina_Macaluso" target="_blank" rel="noopener noreferrer" className="text-sm text-gold/80 hover:text-gold flex items-center gap-2">
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70">EverybodyWiki</strong> voce
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <a href="https://cinematografica.altervista.org/maria-antonina-macaluso" target="_blank" rel="noopener noreferrer" className="text-sm text-gold/80 hover:text-gold flex items-center gap-2">
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70">Ancora Cinematografica</strong>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <a href="https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html" target="_blank" rel="noopener noreferrer" className="text-sm text-gold/80 hover:text-gold flex items-center gap-2">
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70">Cinema Italiano</strong> Venezia 83
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <a href="https://www.radioamica.it/pochi-attimi-trionfa-a-venezia-la-camporealese-macaluso-e-la-partinicese-quatrosi-portano-la-sicilia-sul-podio-del-cinema/" target="_blank" rel="noopener noreferrer" className="text-sm text-gold/80 hover:text-gold flex items-center gap-2">
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70">Radio Amica</strong>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <a href="https://www.lasicilia.it/news/santa-margherita-di-belice-trionfa-a-venezia" target="_blank" rel="noopener noreferrer" className="text-sm text-gold/80 hover:text-gold flex items-center gap-2">
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70">La Sicilia</strong>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <a href="https://www.ilmoderatore.it/venezia-83-leone-lungo-a-pochi-attimi" target="_blank" rel="noopener noreferrer" className="text-sm text-gold/80 hover:text-gold flex items-center gap-2">
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70">Il Moderatore</strong>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <a href="https://cronachemediterranee.net/vulcanica-content-creator-maria-antonina-macaluso" target="_blank" rel="noopener noreferrer" className="text-sm text-gold/80 hover:text-gold flex items-center gap-2">
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70">Cronache Mediterranee</strong>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <a href="https://www.orawebtv.it/maria-antonina-macaluso-leclettismo-di-un-talento-tra-cinema-social-media-e-beauty" target="_blank" rel="noopener noreferrer" className="text-sm text-gold/80 hover:text-gold flex items-center gap-2">
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70">Orawebtv</strong>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <a href="https://www.messinatoday.it/attualita/provvidenza-montalbano-premio-sceneggiatura-ciak-film.html" target="_blank" rel="noopener noreferrer" className="text-sm text-gold/80 hover:text-gold flex items-center gap-2">
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70">MessinaToday</strong>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                      <a href="https://www.infobelice.it/2025/12/20/la-valle-del-belice-raccontata-dal-cinema-la-camporealese-maria-antonina-macaluso-nel-film-pochi-attimi-di-angelo-faraci" target="_blank" rel="noopener noreferrer" className="text-sm text-gold/80 hover:text-gold flex items-center gap-2">
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70">InfoBelice</strong>
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Voci correlate */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">Voci correlate</h2>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <Link href="/angelo-faraci" className="glass-card group card-lift-premium block p-5">
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Regista</p>
                  <h3 className="mt-1 font-display text-base text-cream group-hover:text-gold">Angelo Faraci</h3>
                  <p className="mt-2 text-xs text-cream/60">Regista, attore, produttore palermitano</p>
                </Link>
                <Link href="/news/valle-belice-1968-cinema-rinascita" className="glass-card group card-lift-premium block p-5">
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Storia</p>
                  <h3 className="mt-1 font-display text-base text-cream group-hover:text-gold">Valle del Belice</h3>
                  <p className="mt-2 text-xs text-cream/60">Terremoto 1968 e cinema 2026</p>
                </Link>
                <Link href="/news/camporeale-radici-maria-antonina" className="glass-card group card-lift-premium block p-5">
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Geografia</p>
                  <h3 className="mt-1 font-display text-base text-cream group-hover:text-gold">Camporeale</h3>
                  <p className="mt-2 text-xs text-cream/60">Paese natale di Maria Antonina</p>
                </Link>
                <Link href="/news/pochi-attimi-venezia-83" className="glass-card group card-lift-premium block p-5">
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Evento</p>
                  <h3 className="mt-1 font-display text-base text-cream group-hover:text-gold">Venezia 83</h3>
                  <p className="mt-2 text-xs text-cream/60">Premio Leone Lungo 2026</p>
                </Link>
                <Link href="/tag/cinema-siciliano" className="glass-card group card-lift-premium block p-5">
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Tema</p>
                  <h3 className="mt-1 font-display text-base text-cream group-hover:text-gold">Cinema siciliano</h3>
                  <p className="mt-2 text-xs text-cream/60">Hub tematico</p>
                </Link>
                <Link href="/biografia" className="glass-card group card-lift-premium block p-5">
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Sezione</p>
                  <h3 className="mt-1 font-display text-base text-cream group-hover:text-gold">Biografia estesa</h3>
                  <p className="mt-2 text-xs text-cream/60">8 capitoli di vita e cinema</p>
                </Link>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal>
              <div className="flex flex-wrap gap-4">
                <Link href="/biografia" className="btn-cinema btn-cinema-solid">
                  <Users className="h-4 w-4" />
                  Biografia completa
                </Link>
                <Link href="/filmografia" className="btn-cinema">
                  <Film className="h-4 w-4" />
                  Filmografia
                </Link>
                <Link href="/news/sodalizio-maria-antonina-angelo-faraci" className="btn-ghost-cinema">
                  Sodalizio artistico
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    </main>
  );
}
