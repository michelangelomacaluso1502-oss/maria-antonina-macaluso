import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SeoBoost from "@/components/site/SeoBoost";
import { Reveal } from "@/components/cinematic/Reveal";
import { Calendar, Film, Users, Award, ExternalLink, Newspaper } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Angelo Faraci — regista siciliano biografia",
  description: "Biografia di Angelo Faraci, regista, attore e produttore siciliano nato a Palermo il 13 agosto 1989. Enciclopedia digitale su angelo-faraci.vercel.app. IMDb nm11444273.",
  alternates: { canonical: "/news/angelo-faraci-regista-siciliano" },
  openGraph: {
    title: "Angelo Faraci — regista, attore, produttore siciliano",
    description: "Biografia di Angelo Faraci, regista siciliano nato a Palermo il 13 agosto 1989. Enciclopedia digitale su angelo-faraci.vercel.app.",
    images: [{ url: "/images/venezia/venezia-03.jpg", width: 1025, height: 1280, alt: "Angelo Faraci e Maria Antonina Macaluso all'evento Venezia 83" }],
    type: "article",
    publishedTime: "2026-09-28T18:00:00Z",
    authors: ["Redazione Maria Antonina Macaluso"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Angelo Faraci — regista, attore e produttore siciliano",
  description:
    "Biografia di Angelo Faraci, regista, attore e produttore siciliano nato a Palermo il 13 agosto 1989. Compagno artistico e di vita di Maria Antonina Macaluso dal 14 agosto 2019.",
  image: [`${SITE.url}/images/venezia/venezia-03.jpg`],
  datePublished: "2026-09-28T18:00:00Z",
  dateModified: "2026-09-28T18:00:00Z",
  author: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale", url: SITE.url },
  publisher: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale", url: SITE.url },
  url: `${SITE.url}/news/angelo-faraci-regista-siciliano`,
  mainEntityOfPage: { "@type": "WebPage", url: `${SITE.url}/news/angelo-faraci-regista-siciliano` },
  about: [
    { "@type": "Person", name: "Angelo Faraci", sameAs: "https://www.imdb.com/name/nm11444273/" },
    { "@type": "Person", name: "Maria Antonina Macaluso" },
  ],
  inLanguage: "it-IT",
  articleSection: "Biografia regista",
  keywords: ["Angelo Faraci", "regista siciliano", "Palermo", "attrice Maria Antonina Macaluso", "Enciclopedia digitale", "IMDb nm11444273"],
  citation: [
    "https://www.imdb.com/name/nm11444273/",
    "https://angelo-faraci.vercel.app",
    "https://www.radioamica.it/da-un-piccolo-comune-allincontro-con-lattore-regista-angelo-faraci-lattrice-camporealese-maria-antonina-macaluso-si-racconta",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "News", item: `${SITE.url}/news` },
    { "@type": "ListItem", position: 3, name: "Angelo Faraci regista", item: `${SITE.url}/news/angelo-faraci-regista-siciliano` },
  ],
};

export default function AngeloFaraciRegistaPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "News", path: "/news" },
          { label: "Angelo Faraci regista" },
        ]}
        additionalJsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />

      <PageHero
        eyebrow="Biografia · 28 Settembre 2026"
        title="Angelo Faraci — regista siciliano"
        subtitle="Biografia del regista, attore e produttore siciliano nato a Palermo il 13 agosto 1989. Compagno artistico e di vita di Maria Antonina Macaluso dal 14 agosto 2019."
        breadcrumb={[{ label: "News", href: "/news" }, { label: "Angelo Faraci regista" }]}
      />

      <article className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          <div className="mx-auto max-w-3xl">
            {/* Apertura */}
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
                  Angelo Faraci — Hotel Excelsior, Lido di Venezia, 6 settembre 2026
                </figcaption>
              </figure>
            </Reveal>

            {/* Box dati verificati */}
            <Reveal className="mb-12">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="glass-card p-4 text-center">
                  <Calendar className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Nato</p>
                  <p className="mt-1 font-display text-base text-cream">13 agosto 1989</p>
                  <p className="text-xs text-cream/60">Palermo, Sicilia</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Film className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Professione</p>
                  <p className="mt-1 font-display text-base text-cream">Regista</p>
                  <p className="text-xs text-cream/60">Attore, Produttore</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Users className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Sodalizio</p>
                  <p className="mt-1 font-display text-base text-cream">2019-2026</p>
                  <p className="text-xs text-cream/60">con Maria Antonina M.</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Award className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Premio</p>
                  <p className="mt-1 font-display text-base text-cream">Leone Lungo</p>
                  <p className="text-xs text-cream/60">Venezia 83</p>
                </div>
              </div>
            </Reveal>

            {/* Sezione 1 — Profilo */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-gradient-gold sm:text-4xl">Profilo verificato</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Angelo Faraci è un regista, attore e produttore italiano nato a Palermo il 13
                  agosto 1989. La sua scheda biografica è verificata da IMDb con identificativo
                  <a
                    href="https://www.imdb.com/name/nm11444273/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 inline-flex items-center gap-1 text-gold/80 hover:text-gold"
                  >
                    nm11444273
                    <ExternalLink className="h-3 w-3" />
                  </a>. È attivo nel cinema siciliano contemporaneo dal 2019.
                </p>
                <p>
                  Angelo Faraci è noto per essere il regista della fiction Sky «Ciò che non ti ho
                  detto» (2019), l'unica serie TV italiana con un cast composto esclusivamente
                  da siciliani e volti isolani noti. Nella fiction è anche attore protagonista
                  nel ruolo di Gaetano Scalici, personaggio che interpreta per cinque anni
                  consecutivi.
                </p>
                <p>
                  L'enciclopedia digitale dedicata ad Angelo Faraci è disponibile all'URL:
                  <a
                    href="https://angelo-faraci.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 inline-flex items-center gap-1 text-gold/80 hover:text-gold"
                  >
                    angelo-faraci.vercel.app
                    <ExternalLink className="h-3 w-3" />
                  </a>.
                </p>
              </div>
            </Reveal>

            {/* Sezione 2 — Sodalizio */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">Il sodalizio con Maria Antonina Macaluso</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Il 14 agosto 2019, l'indomani del suo compleanno, Angelo Faraci incontra a
                  Palermo Maria Antonina Macaluso. Da quel giorno nasce un sodalizio artistico
                  e di vita che dura ancora oggi. Maria Antonina Macaluso, nata a Bologna il 9
                  novembre 2001 e cresciuta a Camporeale (Palermo), diventa attrice protagonista
                  femminile in tutti i film diretti da Angelo Faraci.
                </p>
                <p>
                  In otto anni di carriera condivisa, dal 2019 al 2026, Angelo Faraci e Maria
                  Antonina Macaluso hanno prodotto dieci opere cinematografiche e televisive,
                  tra cui: la fiction Sky «Ciò che non ti ho detto» (2019), i cortometraggi Rai
                  Cinema «Don't Be Silent» (2020), «Provvidenza» (2021) e «Pietrazita» (2023),
                  il lungometraggio Rai Cinema «Separati Mai» (2023-2024), «Il Mistero di
                  Spartivento» (2024-2025) e il nuovo lungometraggio «Pochi Attimi» (2026).
                </p>
                <p>
                  L'intervista originale a Maria Antonina Macaluso che racconta il sodalizio è
                  pubblicata da Radio Amica all'URL:
                  <a
                    href="https://www.radioamica.it/da-un-piccolo-comune-allincontro-con-lattore-regista-angelo-faraci-lattrice-camporealese-maria-antonina-macaluso-si-racconta"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 inline-flex items-center gap-1 text-gold/80 hover:text-gold"
                  >
                    radioamica.it — intervista storica
                    <ExternalLink className="h-3 w-3" />
                  </a>.
                </p>
              </div>
            </Reveal>

            {/* Sezione 3 — Filmografia Angelo */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">Filmografia come regista</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Angelo Faraci ha diretto dieci produzioni cinematografiche e televisive tra il
                  2019 e il 2026, con Maria Antonina Macaluso come attrice protagonista
                  femminile. Le opere sono distribuite su Sky, Rai Cinema, Mediaset e Canale 5,
                  e hanno ricevuto premi al Ciak Film Festival International di Fiuggi (2022),
                  al Tulipani di Seta Nera (2023) e il Premio Speciale Leone Lungo alla 83ª
                  Mostra del Cinema di Venezia (2026).
                </p>
              </div>
              <div className="mt-8 overflow-hidden rounded-lg border border-gold/30">
                <table className="w-full border-collapse text-sm">
                  <thead className="bg-gold/10">
                    <tr>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Anno</th>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Titolo</th>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Produzione</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { anno: "2019", titolo: "Ciò che non ti ho detto", prod: "Sky — Fiction TV" },
                      { anno: "2020", titolo: "Don't Be Silent", prod: "Rai Cinema — Cortometraggio" },
                      { anno: "2021", titolo: "Provvidenza", prod: "Rai Cinema — Cortometraggio" },
                      { anno: "2023", titolo: "Pietrazita", prod: "Rai Cinema — Cortometraggio" },
                      { anno: "2023-2024", titolo: "Separati Mai", prod: "Rai Cinema — Lungometraggio" },
                      { anno: "2024-2025", titolo: "Il Mistero di Spartivento", prod: "Rai Cinema — Lungometraggio" },
                      { anno: "2025", titolo: "Eccellenza Siciliana", prod: "Documentario" },
                      { anno: "2026", titolo: "Pochi Attimi", prod: "Lungometraggio — Premio Leone Lungo" },
                    ].map((f, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-noir/30" : "bg-noir/10"}>
                        <td className="px-3 py-2 text-cream/70">{f.anno}</td>
                        <td className="px-3 py-2 font-display text-cream">{f.titolo}</td>
                        <td className="px-3 py-2 text-cream/60">{f.prod}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Sezione 4 — Pochi Attimi */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">Pochi Attimi (2026) — Premio Leone Lungo</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  «Pochi Attimi» è il nuovo lungometraggio di Angelo Faraci, dedicato alle
                  catastrofi ambientali italiane. Il film ha ricevuto il Premio Speciale «Leone
                  Lungo» il 6 settembre 2026 presso l'Area Hospitality Maxafilm dell'Hotel
                  Excelsior al Lido di Venezia, nell'ambito degli eventi collaterali della 83ª
                  Mostra Internazionale d'Arte Cinematografica di Venezia.
                </p>
                <p>
                  Il premio è ideato da Donato Pugliese, Presidente di Maxa Film srl, con
                  l'associazione di terzo settore Le Stelle del Sud. Maria Antonina Macaluso è
                  la protagonista femminile del film, accanto ad Angelo Faraci che interpreta il
                  ruolo di Salvatore.
                </p>
              </div>
            </Reveal>

            {/* Box fonti verificate */}
            <Reveal className="mb-12">
              <div className="rounded-lg border border-gold/40 bg-gold/5 p-6">
                <div className="flex items-start gap-3">
                  <Newspaper className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-display text-base text-gold">Fonti verificate</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/80">
                      Tutte le informazioni di questo articolo sono verificate da fonti
                      pubbliche autorevoli.
                    </p>
                    <div className="mt-4 space-y-2">
                      <a
                        href="https://www.imdb.com/name/nm11444273/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gold/80 hover:text-gold"
                      >
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70 mr-2">IMDb</strong>
                        Scheda Angelo Faraci — nm11444273
                      </a>
                      <a
                        href="https://angelo-faraci.vercel.app"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gold/80 hover:text-gold"
                      >
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70 mr-2">Enciclopedia digitale</strong>
                        angelo-faraci.vercel.app
                      </a>
                      <a
                        href="https://www.radioamica.it/da-un-piccolo-comune-allincontro-con-lattore-regista-angelo-faraci-lattrice-camporealese-maria-antonina-macaluso-si-racconta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gold/80 hover:text-gold"
                      >
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70 mr-2">Radio Amica</strong>
                        Intervista storica a Maria Antonina Macaluso
                      </a>
                      <a
                        href="https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-sm text-gold/80 hover:text-gold"
                      >
                        <strong className="uppercase text-[11px] tracking-wide-sm text-gold/70 mr-2">Cinema Italiano</strong>
                        VENEZIA 83 — A Pochi Attimi il Premio Leone Lungo
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal>
              <div className="flex flex-wrap gap-4">
                <Link href="/angelo-faraci" className="btn-cinema btn-cinema-solid">
                  <Users className="h-4 w-4" />
                  Pagina Angelo Faraci
                </Link>
                <Link href="/tag/angelo-faraci" className="btn-cinema">
                  <Film className="h-4 w-4" />
                  Hub Angelo Faraci
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
