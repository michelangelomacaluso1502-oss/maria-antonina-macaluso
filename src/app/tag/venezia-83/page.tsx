import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SeoBoost from "@/components/site/SeoBoost";
import { Reveal } from "@/components/cinematic/Reveal";
import { Award, Calendar, MapPin, Film, Users, ExternalLink, Camera } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Venezia 83 — Premio Leone Lungo a Pochi Attimi",
  description: "Tutti i contenuti sull'evento Venezia 83: Premio Leone Lungo a Pochi Attimi di Angelo Faraci con Maria Antonina Macaluso protagonista femminile, 6 settembre 2026 all'Hotel Excelsior del Lido di Venezia.",
  alternates: { canonical: "/tag/venezia-83" },
  openGraph: {
    title: "Venezia 83 — Hub del Premio Leone Lungo",
    description: "Tutti i contenuti sull'evento Venezia 83: Premio Leone Lungo a Pochi Attimi di Angelo Faraci con Maria Antonina Macaluso.",
    images: [{ url: "/images/venezia/venezia-01.jpg", width: 1000, height: 1280, alt: "Locandina Pochi Attimi Premio Leone Lungo Venezia 83" }],
    type: "article",
  },
};

const collectionPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Venezia 83 — Premio Leone Lungo a Pochi Attimi",
  description:
    "Hub di tutti i contenuti sull'evento del 6 settembre 2026: Premio Speciale Leone Lungo al film Pochi Attimi di Angelo Faraci con Maria Antonina Macaluso protagonista femminile, presso l'Area Hospitality Maxafilm dell'Hotel Excelsior al Lido di Venezia nell'ambito degli eventi collaterali della 83ª Mostra del Cinema di Venezia.",
  url: `${SITE.url}/tag/venezia-83`,
  inLanguage: "it-IT",
  isPartOf: {
    "@type": "WebSite",
    name: "Maria Antonina Macaluso — Enciclopedia digitale",
    url: SITE.url,
  },
  mainEntity: {
    "@type": "Event",
    name: "Premio Speciale Leone Lungo — Pochi Attimi alla 83ª Mostra del Cinema di Venezia",
    startDate: "2026-09-06T18:00:00+02:00",
    endDate: "2026-09-06T20:00:00+02:00",
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
    organizer: { "@type": "Organization", name: "Le Stelle del Sud" },
    award: "Premio Speciale Leone Lungo",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "Tag", item: `${SITE.url}/tag` },
    { "@type": "ListItem", position: 3, name: "Venezia 83", item: `${SITE.url}/tag/venezia-83` },
  ],
};

const CONTENUTI_VENEZIA = [
  {
    titolo: "Pagina evento Venezia 83",
    url: "/news/pochi-attimi-venezia-83",
    descrizione: "Pagina dedicata al Premio Leone Lungo con metadati evento, locandina, galleria 7 foto, trailer YouTube, fonti giornalistiche verificate.",
    icon: Award,
  },
  {
    titolo: "Cast Pochi Attimi — scheda completa",
    url: "/news/cast-pochi-attimi",
    descrizione: "Tutti gli interpreti del film: Angelo Faraci, Maria Antonina Macaluso, Rosaria Lo Porto, Totò Borgese, Enio Drovandi, Massimo Spata.",
    icon: Users,
  },
  {
    titolo: "Catastrofi ambientali italiane",
    url: "/news/catastrofi-ambientali-italiane",
    descrizione: "Approfondimento del tema del film: terremoto del Belice 1968, alluvioni Cinque Terre, Sardegna, frana Sarno.",
    icon: Film,
  },
  {
    titolo: "Sodalizio artistico Macaluso-Faraci",
    url: "/news/sodalizio-maria-antonina-angelo-faraci",
    descrizione: "Approfondimento del sodalizio artistico dal primo incontro del 14 agosto 2019 al Premio Leone Lungo a Venezia 83.",
    icon: Users,
  },
  {
    titolo: "Camporeale — radici siciliane",
    url: "/news/camporeale-radici-maria-antonina",
    descrizione: "Il paesino dove è cresciuta Maria Antonina Macaluso, tra ulivi, vigneti e tradizione contadina siciliana.",
    icon: MapPin,
  },
  {
    titolo: "Scheda film Pochi Attimi",
    url: "/film/pochi-attimi",
    descrizione: "Scheda completa del film: cast, trama, curiosità, rassegna stampa, trailer YouTube ufficiale.",
    icon: Film,
  },
];

const FONTI_ESTERNE = [
  { source: "Radio Amica", url: "https://www.radioamica.it/pochi-attimi-trionfa-a-venezia-la-camporealese-macaluso-e-la-partinicese-quatrosi-portano-la-sicilia-sul-podio-del-cinema/" },
  { source: "Cinema Italiano", url: "https://www.cinemaitaliano.info/news/92951/venezia-83-a-pochi-attimi-il-premio-leone.html" },
  { source: "Radio Una Voce Vicina", url: "https://www.radiounavocevicina.it/main/venezia-pochi-attimi-di-angelo-faraci-il-premio-leone-lungo-al-festival" },
  { source: "La Sicilia", url: "https://www.lasicilia.it/news/santa-margherita-di-belice-trionfa-a-venezia" },
  { source: "Il Moderatore", url: "https://www.ilmoderatore.it/venezia-83-leone-lungo-a-pochi-attimi" },
];

const VENICE_GALLERY = [
  { src: "/images/venezia/venezia-01.jpg", alt: "Locandina Pochi Attimi", caption: "Locandina" },
  { src: "/images/venezia/venezia-02.jpg", alt: "Maria Antonina Macaluso Hotel Excelsior", caption: "Hotel Excelsior" },
  { src: "/images/venezia/venezia-05.jpg", alt: "Premio Leone Lungo", caption: "Premio" },
  { src: "/images/venezia/venezia-06.jpg", alt: "Cast Pochi Attimi", caption: "Il cast" },
];

export default function Venezia83HubPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "Tag", path: "/tag" },
          { label: "Venezia 83" },
        ]}
        additionalJsonLd={[collectionPageJsonLd, breadcrumbJsonLd]}
      />

      <PageHero
        eyebrow="Hub · 6 Settembre 2026 · Premio ricevuto"
        title="Venezia 83 — Premio Leone Lungo"
        subtitle="Hub di tutti i contenuti sull'evento: Premio Speciale Leone Lungo al film Pochi Attimi di Angelo Faraci con Maria Antonina Macaluso protagonista femminile, presso l'Area Hospitality Maxafilm dell'Hotel Excelsior al Lido di Venezia."
        breadcrumb={[{ label: "Tag", href: "/tag/venezia-83" }, { label: "Venezia 83" }]}
      />

      <section className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          <div className="mx-auto max-w-5xl">
            {/* Metadati evento */}
            <Reveal className="mb-12">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="glass-card p-5 text-center">
                  <Calendar className="mx-auto mb-2 h-6 w-6 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Data evento</p>
                  <p className="mt-1 font-display text-base text-cream">6 Settembre 2026</p>
                  <p className="text-xs text-cream/60">ore 18:00</p>
                </div>
                <div className="glass-card p-5 text-center">
                  <MapPin className="mx-auto mb-2 h-6 w-6 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Location</p>
                  <p className="mt-1 font-display text-base text-cream">Hotel Excelsior</p>
                  <p className="text-xs text-cream/60">Lido di Venezia</p>
                </div>
                <div className="glass-card p-5 text-center">
                  <Award className="mx-auto mb-2 h-6 w-6 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Premio</p>
                  <p className="mt-1 font-display text-base text-cream">Leone Lungo</p>
                  <p className="text-xs text-cream/60">Premio Speciale</p>
                </div>
                <div className="glass-card p-5 text-center">
                  <Film className="mx-auto mb-2 h-6 w-6 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Film premiato</p>
                  <p className="mt-1 font-display text-base text-cream">Pochi Attimi</p>
                  <p className="text-xs text-cream/60">regia Angelo Faraci</p>
                </div>
              </div>
            </Reveal>

            {/* Galleria foto evento */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <Camera className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Galleria evento</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
                {VENICE_GALLERY.map((photo, idx) => (
                  <figure key={idx} className="glass-card overflow-hidden p-2">
                    <div className="relative aspect-[3/4] w-full overflow-hidden bg-noir">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 640px) 25vw, 50vw"
                        quality={90}
                        className="object-cover"
                        loading="lazy"
                      />
                    </div>
                    <figcaption className="px-2 py-2 text-center text-[10px] uppercase tracking-wide-sm text-cream/50">
                      {photo.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </Reveal>

            {/* Lista contenuti */}
            <Reveal className="mb-12">
              <div className="flex items-center gap-3">
                <Film className="h-6 w-6 text-gold" />
                <h2 className="font-display text-3xl text-cream sm:text-4xl">Contenuti correlati</h2>
              </div>
              <div className="divider-cinema mt-4 max-w-xs" />
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {CONTENUTI_VENEZIA.map((c, i) => (
                  <Link key={i} href={c.url} className="glass-card group card-lift-premium block p-5">
                    <div className="flex items-start gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold">
                        <c.icon className="h-4 w-4" />
                      </span>
                      <div>
                        <h3 className="font-display text-lg text-cream group-hover:text-gold">{c.titolo}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-cream/60">{c.descrizione}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </Reveal>

            {/* Fonti esterne */}
            <Reveal className="mb-12">
              <div className="rounded-lg border border-gold/40 bg-gold/5 p-6">
                <h3 className="font-display text-base text-gold">Fonti giornalistiche verificate</h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/80">
                  La notizia del Premio Leone Lungo è riportata da 5 fonti giornalistiche
                  indipendenti siciliane e nazionali:
                </p>
                <div className="mt-4 space-y-2">
                  {FONTI_ESTERNE.map((f, i) => (
                    <a
                      key={i}
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between gap-3 text-sm text-cream/80 hover:text-gold"
                    >
                      <span><strong className="text-gold/70 uppercase tracking-wide-sm text-[11px] mr-2">{f.source}</strong></span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal>
              <div className="flex flex-wrap gap-4">
                <Link href="/news/pochi-attimi-venezia-83" className="btn-cinema btn-cinema-solid">
                  <Award className="h-4 w-4" />
                  Pagina evento completa
                </Link>
                <Link href="/tag/angelo-faraci" className="btn-ghost-cinema">
                  <Users className="h-4 w-4" />
                  Hub Angelo Faraci
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
