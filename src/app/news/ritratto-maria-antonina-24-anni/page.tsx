import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SeoBoost from "@/components/site/SeoBoost";
import { Reveal } from "@/components/cinematic/Reveal";
import { Heart, Users, Calendar, MapPin, Film, Award } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Ritratto di Maria Antonina a 24 anni",
  description: "Ritratto umano e artistico di Maria Antonina Macaluso a 24 anni: dieci film, Premio Leone Lungo a Venezia 83, content creator, radici siciliane, sodalizio artistico con Angelo Faraci.",
  alternates: { canonical: "/news/ritratto-maria-antonina-24-anni" },
  openGraph: {
    title: "Ritratto di Maria Antonina Macaluso a 24 anni",
    description: "Ritratto umano e artistico di Maria Antonina Macaluso: dieci film, Premio Leone Lungo, radici siciliane.",
    images: [{ url: "/images/photobook/mam-12.jpg", width: 1025, height: 1280, alt: "Ritratto Maria Antonina Macaluso" }],
    type: "article",
    publishedTime: "2026-09-28T16:00:00Z",
    authors: ["Redazione Maria Antonina Macaluso"],
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Ritratto di Maria Antonina Macaluso a 24 anni — attrice, content creator, siciliana",
  description:
    "Ritratto umano e artistico di Maria Antonina Macaluso a 24 anni: dieci film con Angelo Faraci, Premio Leone Lungo a Venezia 83, content creator su Instagram e TikTok, radici camporealesi.",
  image: [`${SITE.url}/images/photobook/mam-12.jpg`],
  datePublished: "2026-09-28T16:00:00Z",
  dateModified: "2026-09-28T16:00:00Z",
  author: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale", url: SITE.url },
  publisher: {
    "@type": "Organization",
    name: "Maria Antonina Macaluso — Enciclopedia digitale",
    url: SITE.url,
  },
  url: `${SITE.url}/news/ritratto-maria-antonina-24-anni`,
  mainEntityOfPage: { "@type": "WebPage", url: `${SITE.url}/news/ritratto-maria-antonina-24-anni` },
  about: [{ "@type": "Person", name: "Maria Antonina Macaluso" }],
  inLanguage: "it-IT",
  articleSection: "Ritratto umano",
  keywords: ["Maria Antonina Macaluso", "ritratto", "24 anni", "attrice siciliana", "Camporeale", "Venezia 83"],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "News", item: `${SITE.url}/news` },
    { "@type": "ListItem", position: 3, name: "Ritratto", item: `${SITE.url}/news/ritratto-maria-antonina-24-anni` },
  ],
};

export default function Ritratto24AnniPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "News", path: "/news" },
          { label: "Ritratto 24 anni" },
        ]}
        additionalJsonLd={[articleJsonLd, breadcrumbJsonLd]}
      />

      <PageHero
        eyebrow="Ritratto · 28 Settembre 2026"
        title="Maria Antonina Macaluso a 24 anni"
        subtitle="Ritratto umano e artistico di un'attrice siciliana che ha già scritto un capitolo del cinema contemporaneo: dieci film, un Premio Speciale a Venezia 83, una community autentica di follower, e radici contadine a Camporeale."
        breadcrumb={[{ label: "News", href: "/news" }, { label: "Ritratto 24 anni" }]}
      />

      <article className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          <div className="mx-auto max-w-3xl">
            {/* Ritratto */}
            <Reveal className="mb-12">
              <figure className="glass-card overflow-hidden p-3">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-noir">
                  <Image
                    src="/images/photobook/mam-12.jpg"
                    alt="Ritratto di Maria Antonina Macaluso"
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    quality={95}
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className="px-3 py-3 text-center text-xs uppercase tracking-wide-sm text-cream/50">
                  Maria Antonina Macaluso — ritratto artistico
                </figcaption>
              </figure>
            </Reveal>

            {/* Apertura */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-gradient-gold sm:text-4xl">A 24 anni, già una voce del cinema siciliano</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  A 24 anni, Maria Antonina Macaluso ha già un curriculum che molte attrici
                  sognano per una vita intera. Dieci produzioni cinematografiche e televisive,
                  distribuite su Sky, Rai Cinema, Mediaset e Canale 5. Un Premio Speciale alla
                  Mostra del Cinema di Venezia. Una presenza consolidata su Instagram con 11.900
                  follower, su TikTok con 5.200 follower, su Facebook con una community attiva.
                  E una firma critica che l'ha definita «vulcanica content creator» e «talento
                  ecletico tra cinema, social media e beauty».
                </p>
                <p>
                  Ma il numero che conta di più, forse, è uno: 14 agosto 2019. È la data del
                  primo incontro con Angelo Faraci a Palermo. Da quel giorno, la vita di Maria
                  Antonina si è intrecciata con quella di Angelo in un sodalizio artistico e di
                  vita che dura ancora oggi. Otto anni di carriera insieme, dieci film, una
                  consacrazione internazionale a Venezia.
                </p>
                <p>
                  Maria Antonina porta sul set la sua formazione poliedrica: attrice, content
                  creator, esperta di comunicazione, appassionata di beauty. Non è un'attrice
                  tradizionale: è una voce femminile siciliana giovane, autentica, poliedrica. È
                  la prova che il cinema siciliano contemporaneo ha trovato una nuova
                  generazione di talenti.
                </p>
              </div>
            </Reveal>

            {/* Box numeri */}
            <Reveal className="mb-12">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="glass-card p-4 text-center">
                  <Calendar className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Età</p>
                  <p className="mt-1 font-display text-2xl text-cream">24</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Film className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Film</p>
                  <p className="mt-1 font-display text-2xl text-cream">10</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Award className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Premi</p>
                  <p className="mt-1 font-display text-2xl text-cream">5</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Users className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Follower</p>
                  <p className="mt-1 font-display text-2xl text-cream">17K+</p>
                </div>
              </div>
            </Reveal>

            {/* Sezione 1 — Infanzia */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">L'infanzia a Camporeale</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Maria Antonina Macaluso è nata a Bologna il 9 novembre 2001, ma è cresciuta a
                  Camporeale, paesino della città metropolitana di Palermo. Camporeale è un
                  comune di circa 3.000 abitanti, situato a 550 metri di altitudine sulle colline
                  dell'entroterra siciliano. È il paese degli ulivi, del vino Doc Camporeale
                  (Nero d'Avola, Catarratto, Inzolia), del pane di grano duro cotto in forni a
                  legna.
                </p>
                <p>
                  L'infanzia di Maria Antonina è stata scandita dai ritmi agricoli. La
                  vendemmia a settembre, la raccolta delle olive a novembre, la festa di San
                  Giuseppe il 19 marzo con la «Tavola» votiva. Le estati nei campi di grano, le
                  sere in piazza con gli amici d'infanzia. È un'infanzia semplice, contadina,
                  siciliana — che Maria Antonina porta con sé anche oggi, da attrice
                  affermata e content creator.
                </p>
                <p>
                  Anche quando la carriera l'ha portata a Roma, Maria Antonina torna spesso a
                  Camporeale. È il posto dove ritrova la famiglia, gli amici, le radici. Il
                  cinema di Angelo Faraci, scegliendo la Valle del Belice come ambientazione di
                  «Pochi Attimi», ha raccontato questa dimensione siciliana attraverso lo
                  sguardo di Maria Antonina.
                </p>
              </div>
            </Reveal>

            {/* Sezione 2 — Il debutto */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">Il debutto del 2019</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Il debutto di Maria Antonina Macaluso avviene nel 2019 con la fiction TV
                  «Ciò che non ti ho detto», ideata da Angelo Faraci per Sky. La fiction è un
                  unicum nel panorama televisivo italiano: è l'unica serie TV italiana con un
                  cast composto esclusivamente da siciliani e volti isolani noti. Angelo è
                  attore protagonista nel ruolo di Gaetano Scalici per cinque anni consecutivi.
                  Maria Antonina partecipa alla fiction in un ruolo che la introduce al
                  pubblico televisivo nazionale.
                </p>
                <p>
                  Il debutto è confermato da IMDb, che elenca l'opera tra le produzioni per cui
                  l'attrice è celebre. Da quel 2019, Maria Antonina e Angelo non si sono più
                  separati: ogni film diretto da Angelo vede Maria Antonina tra gli interpreti
                  principali, spesso come protagonista femminile. È un sodalizio artistico
                  che ricorda le grandi coppie del cinema italiano classico, ma con una
                  caratteristica unica: la dimensione siciliana, la fedeltà alle radici.
                </p>
              </div>
            </Reveal>

            {/* Sezione 3 — Il successo */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">Il successo internazionale — Venezia 83</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Il 6 settembre 2026, presso l'Area Hospitality Maxafilm dell'Hotel Excelsior al
                  Lido di Venezia, il film «Pochi Attimi» di Angelo Faraci riceve il Premio
                  Speciale «Leone Lungo» nell'ambito degli eventi collaterali della 83ª Mostra
                  Internazionale d'Arte Cinematografica di Venezia. Maria Antonina Macaluso è
                  presente come attrice protagonista femminile del film.
                </p>
                <p>
                  Per il sodalizio artistico Macaluso-Faraci è la consacrazione internazionale.
                  Per il cinema siciliano è il battesimo ufficiale alla vetrina più
                  prestigiosa del cinema mondiale. Maria Antonina, a 24 anni, si ritrova ad
                  essere una delle voci più rappresentative del cinema siciliano
                  contemporaneo.
                </p>
                <p>
                  La notizia del premio è riportata da molteplici fonti giornalistiche
                  indipendenti: Cinema Italiano, Radio Amica, Radio Una Voce Vicina, La
                  Sicilia, Il Moderatore. La copertura stampa conferma l'autorevolezza del
                  riconoscimento.
                </p>
              </div>
            </Reveal>

            {/* Sezione 4 — Content creator */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">Maria Antonina content creator</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  Maria Antonina Macaluso non è solo attrice: è anche content creator. Su
                  Instagram (@mary.macaluso09, 11.900 follower), TikTok (@mary.macaluso, 5.200
                  follower) e Facebook ha costruito una community autentica intorno a bellezza,
                  lifestyle, e Sicilia. La critica l'ha definita «vulcanica content creator»
                  (Cronache Mediterranee, 2025) e «talento ecletico tra cinema, social media e
                  beauty» (Orawebtv, 2025).
                </p>
                <p>
                  Per Maria Antonina il cinema e i social non sono in contraddizione. Sono due
                  modi di raccontare storie: il cinema è la storia grande, il social è la
                  storia quotidiana. Entrambi parlano di lei, della sua Sicilia, della sua
                  generazione. Maria Antonina è una rappresentante di una nuova generazione di
                  attrici italiane che coniugano cinema tradizionale e comunicazione
                  digitale.
                </p>
              </div>
            </Reveal>

            {/* Sezione 5 — Radici */}
            <Reveal className="mb-12">
              <h2 className="font-display text-3xl text-cream sm:text-4xl">Le radici come ancora</h2>
              <div className="divider-cinema mt-6 max-w-xs" />
              <div className="mt-6 space-y-4 text-pretty text-base leading-relaxed text-cream/80">
                <p>
                  In un'epoca in cui le attrici italiane spesso dimenticano le proprie radici,
                  Maria Antonina Macaluso mantiene un legame profondo con Camporeale. Torna al
                  paese per le feste patronali, per la vendemmia, per rivedere gli amici
                  d'infanzia. Le radici contadine siciliane sono per lei non un limite, ma
                  un'ancora: le danno stabilità, identità, autenticità.
                </p>
                <p>
                  «Senza Camporeale non sarei l'attrice che sono», ha detto Maria Antonina in
                  un'intervista. È una frase che riassume il suo percorso: il cinema siciliano
                  non è cinema minore, ma voce autorevole del panorama audiovisivo italiano
                  contemporaneo. E Maria Antonina è una delle voci più rappresentative di
                  questo cinema.
                </p>
              </div>
            </Reveal>

            {/* Box cuore */}
            <Reveal className="mb-12">
              <div className="rounded-lg border border-gold/40 bg-gold/5 p-6">
                <div className="flex items-start gap-3">
                  <Heart className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-display text-base text-gold">Maria Antonina a 24 anni</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/80">
                      A 24 anni, Maria Antonina Macaluso ha già raggiunto traguardi che molte
                      attrici sognano per una vita intera. Ma il suo percorso è ancora agli
                      inizi. Il Premio Leone Lungo a Venezia 83 è un punto di arrivo, ma
                      soprattutto un punto di partenza. Il prossimo capitolo sarà scritto nei
                      prossimi mesi. Per ora, il 6 settembre 2026 resterà come la data del
                      battesimo internazionale del cinema siciliano alla Mostra del Cinema di
                      Venezia.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* CTA */}
            <Reveal>
              <div className="flex flex-wrap gap-4">
                <Link href="/biografia" className="btn-cinema btn-cinema-solid">
                  Biografia completa
                </Link>
                <Link href="/news/intervista-maria-antonina-macaluso" className="btn-cinema">
                  Intervista
                </Link>
                <Link href="/news/percorso-artistico-cinema-sicilia" className="btn-ghost-cinema">
                  Percorso artistico
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    </main>
  );
}
