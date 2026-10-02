import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SeoBoost from "@/components/site/SeoBoost";
import { Reveal } from "@/components/cinematic/Reveal";
import { Film, MapPin, Users, Award, ArrowRight, ExternalLink } from "lucide-react";
import { SITE, FILMS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cinema siciliano contemporaneo — Maria Antonina Macaluso",
  description: "Approfondimento sul cinema siciliano contemporaneo attraverso le 10 produzioni di Maria Antonina Macaluso e Angelo Faraci: dal terremoto del Belice alla Valle del Belice, da Palermo a Camporeale.",
  alternates: { canonical: "/tag/cinema-siciliano" },
  openGraph: {
    title: "Cinema siciliano contemporaneo — Hub tematico",
    description: "Approfondimento del cinema siciliano contemporaneo attraverso le produzioni di Maria Antonina Macaluso e Angelo Faraci.",
    images: [{ url: "/images/venezia/venezia-02.jpg", width: 1080, height: 1710, alt: "Maria Antonina Macaluso sul red carpet Venezia 83" }],
    type: "article",
  },
};

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Cinema siciliano contemporaneo — Hub tematico",
  description:
    "Hub tematico sul cinema siciliano contemporaneo attraverso le produzioni di Maria Antonina Macaluso e Angelo Faraci, dal 2019 al 2026.",
  url: `${SITE.url}/tag/cinema-siciliano`,
  inLanguage: "it-IT",
  isPartOf: {
    "@type": "WebSite",
    name: "Maria Antonina Macaluso — Enciclopedia digitale",
    url: SITE.url,
  },
  mainEntity: {
    "@type": "CreativeWork",
    name: "Cinema siciliano contemporaneo",
    about: [
      { "@type": "Person", name: "Maria Antonina Macaluso" },
      { "@type": "Person", name: "Angelo Faraci" },
      { "@type": "Place", name: "Sicilia" },
    ],
  },
  keywords: ["cinema siciliano", "Sicilia", "Maria Antonina Macaluso", "Angelo Faraci", "Palermo", "Camporeale"],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Tag", item: `${SITE.url}/tag` },
    { "@type": "ListItem", position: 3, name: "Cinema siciliano", item: `${SITE.url}/tag/cinema-siciliano` },
  ],
};

const TERRITORI = [
  { nome: "Palermo", ruolo: "Città natale di Angelo Faraci, luogo del primo incontro 14 agosto 2019" },
  { nome: "Camporeale (PA)", ruolo: "Paesino dove è cresciuta Maria Antonina Macaluso" },
  { nome: "Valle del Belice", ruolo: "Territorio del terremoto 1968, ambientazione di Pochi Attimi" },
  { nome: "Montalbano Elicona (ME)", ruolo: "Set del cortometraggio Provvidenza (2021)" },
  { nome: "Sant'Angelo di Brolo (ME)", ruolo: "Set del cortometraggio Pietrazita (2023)" },
  { nome: "Lido di Venezia", ruolo: "Vetrina internazionale del Premio Leone Lungo 2026" },
];

const FILMS_SICILIANI = FILMS.filter(f => f.director === "Angelo Faraci");

export default function CinemaSicilianoHubPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "Tag", path: "/tag" },
          { label: "Cinema siciliano" },
        ]}
        additionalJsonLd={[collectionPageJsonLd, breadcrumbJsonLd]}
      />

      <PageHero
        eyebrow="Hub · Cinema siciliano contemporaneo"
        title="Cinema siciliano contemporaneo"
        subtitle="Approfondimento del cinema siciliano contemporaneo attraverso le 10 produzioni di Maria Antonina Macaluso e Angelo Faraci, dal debutto 2019 al Premio Leone Lungo 2026."
        breadcrumb={[{ label: "Tag", href: "/tag/cinema-siciliano" }, { label: "Cinema siciliano" }]}
      />

      <section className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          <div className="mx-auto max-w-4xl">
            {/* Intro */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-gradient-gold sm:text-4xl">La Sicilia del cinema di Maria Antonina Macaluso</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Il cinema siciliano contemporaneo ha una delle sue voci più rappresentative
                  in Maria Antonina Macaluso, attrice nata a Bologna nel 2001 e cresciuta a
                  Camporeale, in provincia di Palermo. Compagna artistica e di vita del regista
                  Angelo Faraci dal 14 agosto 2019, ha condiviso con lui dieci produzioni
                  cinematografiche e televisive in otto anni di carriera.
                </p>
                <p>
                  Il cinema di Angelo Faraci è profondamente radicato in Sicilia: i set sono
                  i paesini di montagna (Montalbano Elicona, Sant'Angelo di Brolo, Camporeale),
                  le città d'arte (Palermo, Messina), le valli storiche (Valle del Belice,
                  Valle dell'Etna). Maria Antonina Macaluso porta sul set la voce femminile
                  siciliana — giovane, autentica, poliedrica.
                </p>
                <p>
                  Dal debutto con la fiction Sky «Ciò che non ti ho detto» (2019), l'unica serie
                  TV italiana con un cast di soli siciliani, fino al Premio Leone Lungo alla
                  83ª Mostra del Cinema di Venezia con «Pochi Attimi» (2026), il sodalizio
                  Macaluso-Faraci ha portato il cinema siciliano alla vetrina internazionale.
                </p>
              </div>
            </Reveal>

            {/* Territori */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <MapPin className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Territori del cinema siciliano</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {TERRITORI.map((t, i) => (
                  <div key={i} className="glass-card p-5">
                    <p className="font-display text-lg text-cream">{t.nome}</p>
                    <p className="mt-1 text-sm text-cream/60">{t.ruolo}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Lista film */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <Film className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">10 produzioni siciliane</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-8 overflow-hidden rounded-lg border border-gold/30">
                <table className="w-full border-collapse text-sm">
                  <thead className="bg-gold/10">
                    <tr>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Anno</th>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Titolo</th>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Produzione</th>
                      <th className="border-b border-gold/30 px-3 py-2 text-left text-[11px] uppercase tracking-wide-sm text-gold/70">Tipologia</th>
                    </tr>
                  </thead>
                  <tbody>
                    {FILMS_SICILIANI.map((f, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-noir/30" : "bg-noir/10"}>
                        <td className="px-3 py-2 text-cream/70">{f.year}</td>
                        <td className="px-3 py-2 font-display text-cream">
                          <Link href={`/film/${f.slug}`} className="hover:text-gold">
                            {f.title}
                          </Link>
                        </td>
                        <td className="px-3 py-2 text-cream/60">{f.production}</td>
                        <td className="px-3 py-2 text-cream/60">{f.type}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>

            {/* Premio Venezia */}
            <Reveal className="mb-12">
              <div className="rounded-lg border border-gold/40 bg-gold/5 p-6">
                <div className="flex items-start gap-3">
                  <Award className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-display text-base text-gold">Venezia 83 — Premio Leone Lungo</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/80">
                      Il 6 settembre 2026, il cinema siciliano attraverso il sodalizio
                      Macaluso-Faraci ha ricevuto il battesimo ufficiale alla 83ª Mostra del
                      Cinema di Venezia. Il film «Pochi Attimi» ha ricevuto il Premio Speciale
                      «Leone Lungo» presso l'Hotel Excelsior del Lido di Venezia.
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <Link href="/tag/venezia-83" className="btn-cinema btn-cinema-solid">
                        Hub Venezia 83
                      </Link>
                      <Link href="/news/pochi-attimi-venezia-83" className="btn-ghost-cinema">
                        Pagina evento
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Approfondimenti */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Approfondimenti correlati</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Link href="/news/camporeale-radici-maria-antonina" className="glass-card group card-lift-premium block p-5">
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Radici siciliane</p>
                  <h3 className="mt-1 font-display text-lg text-cream group-hover:text-gold">Camporeale</h3>
                  <p className="mt-2 text-sm text-cream/60">Il paesino dove è cresciuta Maria Antonina.</p>
                </Link>
                <Link href="/news/catastrofi-ambientali-italiane" className="glass-card group card-lift-premium block p-5">
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Contesto storico</p>
                  <h3 className="mt-1 font-display text-lg text-cream group-hover:text-gold">Catastrofi ambientali</h3>
                  <p className="mt-2 text-sm text-cream/60">Il terremoto del Belice e le alluvioni italiane.</p>
                </Link>
                <Link href="/news/sodalizio-maria-antonina-angelo-faraci" className="glass-card group card-lift-premium block p-5">
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Sodalizio artistico</p>
                  <h3 className="mt-1 font-display text-lg text-cream group-hover:text-gold">Macaluso-Faraci</h3>
                  <p className="mt-2 text-sm text-cream/60">10 film dal 2019 al 2026.</p>
                </Link>
                <Link href="/tag/angelo-faraci" className="glass-card group card-lift-premium block p-5">
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Regista siciliano</p>
                  <h3 className="mt-1 font-display text-lg text-cream group-hover:text-gold">Angelo Faraci</h3>
                  <p className="mt-2 text-sm text-cream/60">Regista, attore, produttore.</p>
                </Link>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal>
              <div className="flex flex-wrap gap-4">
                <Link href="/filmografia" className="btn-cinema btn-cinema-solid">
                  Filmografia completa
                </Link>
                <Link href="/biografia" className="btn-cinema">
                  Biografia
                </Link>
                <Link href="/" className="btn-ghost-cinema">
                  Home
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
