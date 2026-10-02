import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SeoBoost from "@/components/site/SeoBoost";
import { Reveal } from "@/components/cinematic/Reveal";
import { Users, Film, ExternalLink, Award, Newspaper, PlayCircle } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cast Pochi Attimi — scheda completa",
  description: "Scheda completa del cast di Pochi Attimi di Angelo Faraci: Maria Antonina Macaluso protagonista femminile, Angelo Faraci, Rosaria Lo Porto, Totò Borgese, Enio Drovandi, Massimo Spata.",
  alternates: { canonical: "/news/cast-pochi-attimi" },
  openGraph: {
    title: "Cast Pochi Attimi — scheda completa",
    description: "Tutti gli interpreti del film Pochi Attimi di Angelo Faraci, con Maria Antonina Macaluso protagonista femminile.",
    images: [{ url: "/images/venezia/venezia-06.jpg", width: 1440, height: 1920, alt: "Cast di Pochi Attimi all'Hotel Excelsior Venezia 83" }],
    type: "article",
    publishedTime: "2026-09-28T09:00:00Z",
    authors: ["Redazione Maria Antonina Macaluso"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cast Pochi Attimi — scheda completa degli interpreti del nuovo film di Angelo Faraci",
  description:
    "Scheda completa del cast di Pochi Attimi di Angelo Faraci: Maria Antonina Macaluso protagonista femminile, Angelo Faraci nel ruolo di Salvatore, Rosaria Lo Porto, Totò Borgese, Marika Faraci, Salvatore Martines, Mario Romano, Rosanna Barbera, Enio Drovandi, Massimo Spata.",
  image: [`${SITE.url}/images/venezia/venezia-06.jpg`],
  datePublished: "2026-09-28T09:00:00Z",
  dateModified: "2026-09-28T09:00:00Z",
  author: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale", url: SITE.url },
  publisher: {
    "@type": "Organization",
    name: "Maria Antonina Macaluso — Enciclopedia digitale",
    url: SITE.url,
  },
  url: `${SITE.url}/news/cast-pochi-attimi`,
  mainEntityOfPage: { "@type": "WebPage", url: `${SITE.url}/news/cast-pochi-attimi` },
  about: [
    { "@type": "Movie", name: "Pochi Attimi" },
    { "@type": "Person", name: "Maria Antonina Macaluso" },
    { "@type": "Person", name: "Angelo Faraci" },
  ],
  inLanguage: "it-IT",
  articleSection: "Cinema italiano — Cast",
  keywords: ["Cast Pochi Attimi", "Maria Antonina Macaluso", "Angelo Faraci", "Rosaria Lo Porto", "Totò Borgese", "Enio Drovandi", "Massimo Spata"],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "News", item: `${SITE.url}/news` },
    { "@type": "ListItem", position: 3, name: "Cast Pochi Attimi", item: `${SITE.url}/news/cast-pochi-attimi` },
  ],
};

const CAST_PRINCIPALE = [
  { nome: "Angelo Faraci", ruolo: "Salvatore (attore protagonista)", funzione: "Regista, attore, soggetto" },
  { nome: "Maria Antonina Macaluso", ruolo: "Protagonista femminile", funzione: "Attrice siciliana, camporealese" },
  { nome: "Rosaria Lo Porto", ruolo: "Sceneggiatura su soggetto di Angelo Faraci", funzione: "Autrice, interprete" },
  { nome: "Totò Borgese", ruolo: "Partecipazione straordinaria", funzione: "Attore siciliano" },
  { nome: "Marika Faraci", ruolo: "Interprete", funzione: "Attice" },
  { nome: "Salvatore Martines", ruolo: "Interprete", funzione: "Attore" },
  { nome: "Mario Romano", ruolo: "Interprete", funzione: "Attore" },
  { nome: "Rosanna Barbera", ruolo: "Interprete", funzione: "Attrice siciliana" },
  { nome: "Enio Drovandi", ruolo: "Partecipazione straordinaria", funzione: "Attore delle grandi commedie" },
  { nome: "Massimo Spata", ruolo: "Partecipazione straordinaria", funzione: "Attore" },
];

const CREDITS_TECNICI = [
  { ruolo: "Regia", nome: "Angelo Faraci" },
  { ruolo: "Soggetto", nome: "Angelo Faraci" },
  { ruolo: "Sceneggiatura", nome: "Rosaria Lo Porto" },
  { ruolo: "Musiche", nome: "Lorenzo Minardi" },
  { ruolo: "Produzione esecutiva", nome: "Angelo Faraci, Angela Giardina" },
  { ruolo: "Direzione di produzione", nome: "Salvatore Alicata" },
  { ruolo: "Anno", nome: "2026" },
  { ruolo: "Tipologia", nome: "Lungometraggio" },
  { ruolo: "Genere", nome: "Drammatico storico-culturale" },
];

export default function CastPochiAttimiPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "News", path: "/news" },
          { label: "Cast Pochi Attimi" },
        ]}
        additionalJsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />

      <PageHero
        eyebrow="News · 28 Settembre 2026"
        title="Cast Pochi Attimi — scheda completa"
        subtitle="Tutti gli interpreti e i crediti tecnici del nuovo lungometraggio di Angelo Faraci, con Maria Antonina Macaluso come attrice protagonista femminile."
        breadcrumb={[{ label: "News", href: "/news" }, { label: "Cast Pochi Attimi" }]}
      />

      <article className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          <div className="mx-auto max-w-3xl">
            {/* Immagine apertura */}
            <Reveal className="mb-12">
              <figure className="glass-card overflow-hidden p-3">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-noir">
                  <Image
                    src="/images/venezia/venezia-06.jpg"
                    alt="Cast di Pochi Attimi all'Hotel Excelsior Venezia 83"
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    quality={95}
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className="px-3 py-3 text-center text-xs uppercase tracking-wide-sm text-cream/50">
                  Cast di Pochi Attimi — Hotel Excelsior, Lido di Venezia, 6 settembre 2026
                </figcaption>
              </figure>
            </Reveal>

            {/* Intro */}
            <Reveal className="mb-12">
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  «Pochi Attimi» è il nuovo lungometraggio di Angelo Faraci, dedicato alle
                  catastrofi ambientali italiane e al valore vero della vita. Il film ha ricevuto
                  il Premio Speciale «Leone Lungo» alla 83ª Mostra del Cinema di Venezia il 6
                  settembre 2026. Il cast è composto da interpreti siciliani e attori di cinema,
                  TV e teatro italiani.
                </p>
                <p>
                  Maria Antonina Macaluso, attrice siciliana nata a Bologna il 9 novembre 2001 e
                  cresciuta a Camporeale (Palermo), è la protagonista femminile del film. Angelo
                  Faraci è regista, soggettista e attore protagonista nel ruolo di Salvatore. La
                  sceneggiatura è di Rosaria Lo Porto, su soggetto di Angelo Faraci. Le musiche
                  sono di Lorenzo Minardi. La produzione esecutiva è di Angelo Faraci e Angela
                  Giardina. La direzione di produzione è affidata a Salvatore Alicata.
                </p>
              </div>
            </Reveal>

            {/* Cast principale */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Cast principale</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Il cast di Pochi Attimi è composto da dieci interpreti principali, tra cui
                  Angelo Faraci e Maria Antonina Macaluso come coppia artistica e di vita sul
                  set, e una serie di partecipazioni straordinarie di attori siciliani e italiani
                  di cinema, TV e teatro.
                </p>
              </div>

              <div className="mt-8 overflow-hidden rounded-lg border border-gold/30">
                <table className="w-full border-collapse text-sm">
                  <thead className="bg-gold/10">
                    <tr>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Nome</th>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Ruolo nel film</th>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Funzione artistica</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CAST_PRINCIPALE.map((c, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-noir/30" : "bg-noir/10"}>
                        <td className="px-3 py-2 font-display text-cream">{c.nome}</td>
                        <td className="px-3 py-2 text-cream/70">{c.ruolo}</td>
                        <td className="px-3 py-2 text-cream/60">{c.funzione}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Crediti tecnici */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <Film className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Crediti tecnici</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Oltre al cast artistico, il film vanta una squadra tecnica di alto livello. La
                  regia e il soggetto sono di Angelo Faraci, regista siciliano con una
                  filmografia che parte dalla fiction Sky «Ciò che non ti ho detto» (2019) e
                  arriva al nuovo lungometraggio «Pochi Attimi» (2026). La sceneggiatura è
                  affidata a Rosaria Lo Porto, che figura anche tra gli interpreti principali.
                </p>
              </div>

              <div className="mt-8 overflow-hidden rounded-lg border border-gold/30">
                <table className="w-full border-collapse text-sm">
                  <thead className="bg-gold/10">
                    <tr>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Ruolo</th>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Nome</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CREDITS_TECNICI.map((c, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-noir/30" : "bg-noir/10"}>
                        <td className="px-3 py-2 text-cream/70">{c.ruolo}</td>
                        <td className="px-3 py-2 font-display text-cream">{c.nome}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Approfondimento attori */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">Gli attori del cast</h2>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  <strong className="text-gold">Angelo Faraci</strong> è regista, soggettista e
                  attore protagonista nel ruolo di Salvatore. Nato a Palermo il 13 agosto 1989,
                  è regista, attore e produttore con una filmografia che parte dal 2019. Con
                  Maria Antonina Macaluso ha condiviso dieci produzioni cinematografiche e
                  televisive, dal debutto con la fiction Sky «Ciò che non ti ho detto» fino al
                  nuovo lungometraggio «Pochi Attimi».
                </p>
                <p>
                  <strong className="text-gold">Maria Antonina Macaluso</strong> è la protagonista
                  femminile del film. Attrice siciliana nata a Bologna il 9 novembre 2001 e
                  cresciuta a Camporeale (Palermo), ha un curriculum di dieci produzioni
                  cinematografiche e televisive, con presenze consolidte su Rai Cinema, Sky,
                  Mediaset e Canale 5. Ha ricevuto il Premio Speciale Leone Lungo alla 83ª Mostra
                  del Cinema di Venezia il 6 settembre 2026.
                </p>
                <p>
                  <strong className="text-gold">Rosaria Lo Porto</strong> è autrice della
                  sceneggiatura su soggetto di Angelo Faraci, e figura anche tra gli interpreti
                  principali. <strong className="text-gold">Totò Borgese</strong> è un attore
                  siciliano con partecipazioni in numerose produzioni regionali.
                  <strong className="text-gold"> Enio Drovandi</strong>, con partecipazione
                  straordinaria, è un attore delle grandi commedie.
                  <strong className="text-gold"> Massimo Spata</strong>, sempre in partecipazione
                  straordinaria, è un attore siciliano di cinema.
                </p>
                <p>
                  Completano il cast <strong className="text-cream">Marika Faraci</strong>,{" "}
                  <strong className="text-cream">Salvatore Martines</strong>,{" "}
                  <strong className="text-cream">Mario Romano</strong> e{" "}
                  <strong className="text-cream">Rosanna Barbera</strong>, tutti con ruoli di
                  interprete nel film.
                </p>
              </div>
            </Reveal>

            {/* Premio */}
            <Reveal className="mb-12">
              <div className="rounded-lg border border-gold/40 bg-gold/5 p-6">
                <div className="flex items-start gap-3">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-display text-base text-gold">Premio Leone Lungo — Venezia 83</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/80">
                      Il 6 settembre 2026, presso l'Area Hospitality Maxafilm dell'Hotel Excelsior
                      al Lido di Venezia, il film Pochi Attimi ha ricevuto il Premio Speciale
                      «Leone Lungo» nell'ambito degli eventi collaterali della 83ª Mostra
                      Internazionale d'Arte Cinematografica di Venezia. Il premio è ideato da
                      Donato Pugliese, Presidente di Maxa Film srl, con l'associazione di terzo
                      settore Le Stelle del Sud.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Fonti */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <Newspaper className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Fonti verificate</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-6 space-y-4">
                <a
                  href="https://www.cinemaitaliano.info/film/38844/festival/pochi-attimi.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card card-lift-premium group flex items-center justify-between gap-4 p-5"
                >
                  <div>
                    <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Cinema Italiano</p>
                    <h3 className="mt-1 font-display text-lg text-cream group-hover:text-gold">Pochi Attimi — Scheda film</h3>
                  </div>
                  <ExternalLink className="h-5 w-5 shrink-0 text-gold/50 group-hover:text-gold" />
                </a>
                <a
                  href="https://www.castingnews.eu/magazine/2026/01/19/al-via-i-casting-per-il-lungometraggio-storico-pochi-attimi-di-angelo-faraci"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card card-lift-premium group flex items-center justify-between gap-4 p-5"
                >
                  <div>
                    <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">CastingNews.eu</p>
                    <h3 className="mt-1 font-display text-lg text-cream group-hover:text-gold">Al via i casting per Pochi Attimi</h3>
                  </div>
                  <ExternalLink className="h-5 w-5 shrink-0 text-gold/50 group-hover:text-gold" />
                </a>
              </div>
            </Reveal>

            {/* CTA finale */}
            <Reveal>
              <div className="flex flex-wrap gap-4">
                <Link href="/film/pochi-attimi" className="btn-cinema btn-cinema-solid">
                  <Film className="h-4 w-4" />
                  Scheda film completa
                </Link>
                <Link href="/news/pochi-attimi-venezia-83" className="btn-cinema">
                  <Award className="h-4 w-4" />
                  Premio Leone Lungo
                </Link>
                <Link href="/news/sodalizio-maria-antonina-angelo-faraci" className="btn-ghost-cinema">
                  <Users className="h-4 w-4" />
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
