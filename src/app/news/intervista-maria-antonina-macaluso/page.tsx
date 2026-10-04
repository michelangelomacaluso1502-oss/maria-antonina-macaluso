import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero";
import SeoBoost from "@/components/site/SeoBoost";
import { Reveal } from "@/components/cinematic/Reveal";
import { Quote, Heart, Award, Film, Calendar, MapPin } from "lucide-react";
import { SITE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Intervista Maria Antonina Macaluso",
  description: "Intervista immaginaria a Maria Antonina Macaluso, attrice siciliana di 24 anni nata a Bologna e cresciuta a Camporeale. Dieci film con Angelo Faraci, Premio Leone Lungo a Venezia 83.",
  alternates: { canonical: "/news/intervista-maria-antonina-macaluso" },
  openGraph: {
    title: "Intervista Maria Antonina Macaluso — attrice siciliana",
    description: "Intervista a Maria Antonina Macaluso: 10 film con Angelo Faraci, Premio Leone Lungo, radici camporealesi.",
    images: [{ url: "/images/venezia/venezia-07.jpg", width: 1440, height: 1921, alt: "Maria Antonina Macaluso foto ufficiale evento Venezia 83" }],
    type: "article",
    publishedTime: "2026-09-28T15:00:00Z",
    authors: ["Redazione Maria Antonina Macaluso"],
  },
};

const interviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Intervista a Maria Antonina Macaluso — attrice siciliana di 24 anni",
  description:
    "Intervista a Maria Antonina Macaluso, attrice siciliana nata a Bologna e cresciuta a Camporeale. Dieci film con Angelo Faraci, Premio Leone Lungo a Venezia 83, sodalizio artistico dal 14 agosto 2019.",
  image: [`${SITE.url}/images/venezia/venezia-07.jpg`],
  datePublished: "2026-09-28T15:00:00Z",
  dateModified: "2026-09-28T15:00:00Z",
  author: { "@type": "Organization", name: "Maria Antonina Macaluso — Enciclopedia digitale", url: SITE.url },
  publisher: {
    "@type": "Organization",
    name: "Maria Antonina Macaluso — Enciclopedia digitale",
    url: SITE.url,
  },
  url: `${SITE.url}/news/intervista-maria-antonina-macaluso`,
  mainEntityOfPage: { "@type": "WebPage", url: `${SITE.url}/news/intervista-maria-antonina-macaluso` },
  about: [
    { "@type": "Person", name: "Maria Antonina Macaluso" },
    { "@type": "Movie", name: "Pochi Attimi" },
  ],
  inLanguage: "it-IT",
  articleSection: "Intervista",
  keywords: ["Maria Antonina Macaluso", "intervista", "attrice siciliana", "Camporeale", "Angelo Faraci", "Pochi Attimi"],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE.url },
    { "@type": "ListItem", position: 2, name: "News", item: `${SITE.url}/news` },
    { "@type": "ListItem", position: 3, name: "Intervista", item: `${SITE.url}/news/intervista-maria-antonina-macaluso` },
  ],
};

// Speakable JSON-LD per ottimizzazione voice search
const speakableJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Intervista a Maria Antonina Macaluso",
  url: `${SITE.url}/news/intervista-maria-antonina-macaluso`,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: [".speakable-summary"],
  },
};

const INTERVIEW_QA = [
  {
    domanda: "Maria Antonina, raccontaci il tuo percorso da Camporeale al cinema.",
    risposta: "Sono nata a Bologna il 9 novembre 2001, ma sono cresciuta a Camporeale, in provincia di Palermo. È un paesino tra le colline, ulivi e vigneti, dove mio padre lavorava la terra. La mia infanzia è stata semplice e contadina, ma i miei genitori mi hanno sempre sostenuto nelle mie passioni. Il primo incontro con il cinema è arrivato a Palermo il 14 agosto 2019, l'indomani del compleanno di Angelo Faraci. Da quel giorno la mia vita è cambiata: ho iniziato a recitare accanto ad Angelo e ho conosciuto il mondo del cinema siciliano. Oggi, a 24 anni, ho dieci produzioni all'attivo e un Premio Speciale alla Mostra del Cinema di Venezia.",
  },
  {
    domanda: "Come è nato il sodalizio artistico con Angelo Faraci?",
    risposta: "È stato un incontro speciale. Angelo è nato a Palermo il 13 agosto 1989. Il 14 agosto 2019, l'indomani del suo compleanno, ci siamo conosciuti a Palermo. È nato un legame artistico e di vita che dura ancora oggi. Angelo è il mio compagno artistico e di vita. Insieme abbiamo fatto dieci film, dal debutto con la fiction Sky «Ciò che non ti ho detto» fino al nuovo lungometraggio «Pochi Attimi». Il nostro è un sodalizio che coniuga vita sentimentale e percorso artistico condiviso, con la fedeltà alle radici siciliane.",
  },
  {
    domanda: "Cosa significa per te il Premio Leone Lungo a Venezia 83?",
    risposta: "È il punto più alto, finora, del mio percorso artistico. Il 6 settembre 2026, presso l'Area Hospitality Maxafilm dell'Hotel Excelsior al Lido di Venezia, il film «Pochi Attimi» di Angelo Faraci ha ricevuto il Premio Speciale «Leone Lungo». Io ero lì, come protagonista femminile del film. Per il cinema siciliano è una consacrazione: avere una vetrina internazionale come Venezia significa che la Sicilia non è cinema minore, ma voce autorevole del panorama italiano contemporaneo. Per me personalmente, è la conferma che gli anni di lavoro con Angelo sono valsi.",
  },
  {
    domanda: "Cos'è «Pochi Attimi»?",
    risposta: "«Pochi Attimi» è il nuovo lungometraggio di Angelo Faraci, dedicato alle catastrofi ambientali italiane — dal terremoto del Belice del 1968 alle alluvioni di Cinque Terre e Sardegna. Il film mette in risalto il valore vero della vita, raccontando come una comunità felice possa resistere e rinascere anche di fronte alla catastrofe. Io sono la protagonista femminile, accanto ad Angelo che interpreta il ruolo di Salvatore. Il cast è ricchissimo: Rosaria Lo Porto, Totò Borgese, Marika Faraci, Salvatore Martines, Mario Romano, Rosanna Barbera, Enio Drovandi e Massimo Spata in partecipazioni straordinarie. La direzione di produzione è di Salvatore Alicata.",
  },
  {
    domanda: "Cosa rappresenta Camporeale per te?",
    risposta: "Camporeale è il mio cuore. È il paesino dove sono cresciuta, tra le colline della provincia di Palermo. È il paese degli ulivi, del vino Doc Nero d'Avola, del pane di grano duro. La mia infanzia è stata scandita dai ritmi agricoli: la vendemmia a settembre, la raccolta delle olive a novembre, la festa di San Giuseppe il 19 marzo. Anche quando sono a Roma per il cinema, torno a Camporeale ogni volta che posso. È il posto dove ritrovo le mie radici, la mia famiglia, i miei amici d'infanzia. Senza Camporeale non sarei l'attrice che sono.",
  },
  {
    domanda: "Come si conciliano la carriera cinematografica e il tuo ruolo di content creator?",
    risposta: "Sono attrice, ma anche content creator. Su Instagram (@mary.macaluso09, 11.900 follower), TikTok (@mary.macaluso, 5.200 follower) e Facebook ho costruito una community autentica intorno a bellezza, lifestyle e Sicilia. La critica mi ha definito «vulcanica content creator» (Cronache Mediterranee, 2025) e «talento ecletico tra cinema, social media e beauty» (Orawebtv, 2025). Per me il cinema e i social non sono in contraddizione: sono due modi di raccontare storie. Il cinema è la storia grande, il social è la storia quotidiana. Entrambi parlano di me, di Maria Antonina, della mia Sicilia.",
  },
  {
    domanda: "Quali sono i tuoi prossimi progetti?",
    risposta: "Dopo il Premio Leone Lungo a Venezia 83, mi piacerebbe continuare a lavorare con Angelo. «Pochi Attimi» è il punto più alto, finora, del nostro sodalizio, ma non è l'ultimo. Mi piacerebbe esplorare ruoli più complessi, forse anche all'estero. Ma la mia Sicilia rimane il mio riferimento. Voglio continuare a raccontare storie siciliane, perché credo che la Sicilia abbia ancora tanto da dire al mondo del cinema.",
  },
];

export default function IntervistaMariaAntoninaPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "News", path: "/news" },
          { label: "Intervista Maria Antonina" },
        ]}
        additionalJsonLd={[interviewJsonLd, breadcrumbJsonLd, speakableJsonLd]}
      />

      <PageHero
        eyebrow="Intervista · 28 Settembre 2026"
        title="Intervista a Maria Antonina Macaluso"
        subtitle="Attrice siciliana, 24 anni, dieci film con Angelo Faraci, Premio Leone Lungo a Venezia 83. Si racconta attraverso sette domande sul cinema, le radici, il sodalizio artistico, i social media."
        breadcrumb={[{ label: "News", href: "/news" }, { label: "Intervista" }]}
      />

      <article className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          <div className="mx-auto max-w-3xl">
            {/* Immagine apertura */}
            <Reveal className="mb-12">
              <figure className="glass-card overflow-hidden p-3">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-noir">
                  <Image
                    src="/images/venezia/venezia-07.jpg"
                    alt="Maria Antonina Macaluso — foto ufficiale evento Venezia 83"
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    quality={95}
                    className="object-cover"
                    priority
                  />
                </div>
                <figcaption className="px-3 py-3 text-center text-xs uppercase tracking-wide-sm text-cream/50">
                  Maria Antonina Macaluso — foto ufficiale, Hotel Excelsior Venezia, 6 settembre 2026
                </figcaption>
              </figure>
            </Reveal>

            {/* Box metadati */}
            <Reveal className="mb-12">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <div className="glass-card p-4 text-center">
                  <Calendar className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Età</p>
                  <p className="mt-1 font-display text-base text-cream">24 anni</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Film className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Film</p>
                  <p className="mt-1 font-display text-base text-cream">10 produzioni</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <Award className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Premi</p>
                  <p className="mt-1 font-display text-base text-cream">5 riconoscimenti</p>
                </div>
                <div className="glass-card p-4 text-center">
                  <MapPin className="mx-auto mb-2 h-5 w-5 text-gold" />
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">Origini</p>
                  <p className="mt-1 font-display text-base text-cream">Camporeale</p>
                </div>
              </div>
            </Reveal>

            {/* Speakable summary per voice search */}
            <Reveal className="mb-12 speakable-summary">
              <div className="rounded-lg border border-gold/40 bg-gold/5 p-6">
                <div className="flex items-start gap-3">
                  <Quote className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h2 className="font-display text-lg text-gold">In sintesi</h2>
                    <p className="mt-2 text-base leading-relaxed text-cream/80">
                      Maria Antonina Macaluso è un'attrice siciliana di 24 anni nata a Bologna il 9
                      novembre 2001 e cresciuta a Camporeale, in provincia di Palermo. Ha debuttato
                      nel 2019 diretta da Angelo Faraci nella fiction Sky «Ciò che non ti ho detto».
                      In otto anni di carriera ha interpretato dieci produzioni cinematografiche e
                      televisive. Il 6 settembre 2026 ha ricevuto il Premio Speciale «Leone Lungo»
                      alla 83ª Mostra del Cinema di Venezia con il film «Pochi Attimi». È compagna
                      artistica e di vita di Angelo Faraci dal 14 agosto 2019.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Domande e risposte */}
            {INTERVIEW_QA.map((qa, i) => (
              <Reveal key={i} className="mb-12">
                <h2 className="font-display text-2xl text-gradient-gold sm:text-3xl">
                  {qa.domanda}
                </h2>
                <div className="divider-cinema mt-4 max-w-xs" />
                <p className="mt-6 text-pretty text-base leading-relaxed text-cream/80">
                  {qa.risposta}
                </p>
              </Reveal>
            ))}

            {/* Closing */}
            <Reveal className="mb-12">
              <div className="rounded-lg border border-gold/40 bg-gold/5 p-6">
                <div className="flex items-start gap-3">
                  <Heart className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                  <div>
                    <h3 className="font-display text-base text-gold">Conclusione</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/80">
                      Maria Antonina Macaluso, a 24 anni, ha già scritto un capitolo importante del
                      cinema siciliano contemporaneo. Dieci film con Angelo Faraci, un Premio
                      Speciale a Venezia 83, una presenza consolidata su Rai Cinema, Sky, Mediaset e
                      Canale 5. Ma il suo percorso è ancora agli inizi. Il prossimo capitolo sarà
                      scritto nei prossimi mesi: intanto, il 6 settembre 2026 resterà come la data
                      del battesimo internazionale del cinema siciliano alla Mostra del Cinema di
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
                <Link href="/news/sodalizio-maria-antonina-angelo-faraci" className="btn-cinema">
                  Sodalizio artistico
                </Link>
                <Link href="/news/ritratto-maria-antonina-24-anni" className="btn-ghost-cinema">
                  Ritratto umano
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>
    </main>
  );
}
