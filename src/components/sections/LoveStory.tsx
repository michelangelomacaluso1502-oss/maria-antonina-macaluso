import Image from "next/image";
import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";
import { Heart, Calendar, MapPin, Film, ExternalLink } from "lucide-react";

// 22 foto della relazione Angelo & Maria Antonina
const RELATION_PHOTOS = [
  { src: "/images/relation/rel-01.jpg", alt: "Angelo e Maria Antonina insieme", span: "tall" },
  { src: "/images/relation/rel-02.jpg", alt: "Angelo e Maria Antonina — momento together", span: "normal" },
  { src: "/images/relation/rel-03.jpg", alt: "Angelo e Maria Antonina — ritratto di coppia", span: "normal" },
  { src: "/images/relation/rel-04.jpg", alt: "Angelo e Maria Antonina — sorrisi", span: "wide" },
  { src: "/images/relation/rel-05.jpg", alt: "Angelo e Maria Antonina — vicinanza", span: "normal" },
  { src: "/images/relation/rel-06.jpg", alt: "Angelo e Maria Antonina — selfie", span: "wide" },
  { src: "/images/relation/rel-07.jpg", alt: "Angelo e Maria Antonina — abbraccio", span: "normal" },
  { src: "/images/relation/rel-08.jpg", alt: "Angelo e Maria Antonina — insieme", span: "tall" },
  { src: "/images/relation/rel-09.jpg", alt: "Angelo e Maria Antonina — panorama", span: "wide" },
  { src: "/images/relation/rel-10.jpg", alt: "Angelo e Maria Antonina — momento intimo", span: "tall" },
  { src: "/images/relation/rel-11.jpg", alt: "Angelo e Maria Antonina — insieme", span: "normal" },
  { src: "/images/relation/rel-12.jpg", alt: "Angelo e Maria Antonina — ritratto", span: "normal" },
  { src: "/images/relation/rel-13.jpg", alt: "Angelo e Maria Antonina — sorriso", span: "normal" },
  { src: "/images/relation/rel-14.jpg", alt: "Angelo e Maria Antonina — momento speciale", span: "tall" },
  { src: "/images/relation/rel-15.jpg", alt: "Angelo e Maria Antonina — vicinanza", span: "wide" },
  { src: "/images/relation/rel-16.jpg", alt: "Angelo e Maria Antonina — insieme", span: "normal" },
  { src: "/images/relation/rel-17.jpg", alt: "Angelo e Maria Antonina — momento", span: "normal" },
  { src: "/images/relation/rel-18.jpg", alt: "Angelo e Maria Antonina — ritratto di coppia", span: "normal" },
  { src: "/images/relation/rel-19.jpg", alt: "Angelo e Maria Antonina — sorrisi", span: "normal" },
  { src: "/images/relation/rel-20.jpg", alt: "Angelo e Maria Antonina — insieme", span: "normal" },
  { src: "/images/relation/rel-21.jpg", alt: "Angelo e Maria Antonina — insieme", span: "tall" },
  { src: "/images/relation/rel-22.jpg", alt: "Angelo e Maria Antonina — centro storico", span: "wide" },
];

// Tappe principali della relazione
const MILESTONES = [
  {
    icon: Calendar,
    year: "14 agosto 2019",
    title: "Il fidanzamento",
    description:
      "Il 14 agosto 2019 — l'indomani del compleanno di Angelo, nato il 13 agosto — Angelo e Maria Antonina si mettono insieme a Palermo. Da quel giorno non si separeranno più.",
  },
  {
    icon: Film,
    year: "2020 → 2026",
    title: "Il sodalizio artistico",
    description:
      "Angelo diventa il regista di tutte le dieci produzioni interpretate da Maria Antonina. Insieme hanno calcato i red carpet di Taormina, Fiuggi, Roma e dei Tulipani di Seta Nera.",
  },
  {
    icon: Heart,
    year: "Oggi",
    title: "Una coppia, una squadra, una Sicilia",
    description:
      "Oggi Angelo e Maria Antonina continuano la loro storia d'amore e di cinema. Vivono tra la provincia messinese e Roma. Lei è il suo amore e la sua musa ispiratrice.",
  },
];

export default function LoveStory() {
  return (
    <section id="storia-amore" className="bg-cinema-radial py-24 md:py-32">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow="Storia d'Amore"
          title="Angelo & Maria Antonina"
          subtitle="Una coppia, una squadra, una Sicilia — fidanzati dal 14 agosto 2019"
        />

        {/* === Citazione === */}
        <Reveal>
          <div className="glass-luxury mx-auto mb-16 max-w-2xl p-8 text-center md:p-10">
            <p className="font-display text-xl italic leading-relaxed text-cream/85 md:text-2xl">
              &ldquo;L&apos;amore non è il protagonista della nostra storia.
              È la luce che permette di vederla.&rdquo;
            </p>
            <p className="mt-4 text-xs uppercase tracking-wide-lux text-gold/60">
              — Angelo Faraci
            </p>
          </div>
        </Reveal>

        {/* === Tappe della relazione === */}
        <div className="mx-auto mb-16 max-w-3xl space-y-6">
          {MILESTONES.map((m, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="glass-card card-lift-premium p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold">
                    <m.icon className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-cinema text-gold/70">{m.year}</p>
                    <h3 className="mt-1 font-display text-xl text-cream md:text-2xl">{m.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-cream/70 md:text-base">
                      {m.description}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* === Galleria foto Masonry === */}
        <Reveal>
          <div className="mb-6 flex items-center gap-3">
            <Heart className="h-6 w-6 text-rose" />
            <h3 className="font-display text-xl text-gold/90 uppercase tracking-wide-sm">
              Galleria — 22 scatti della relazione
            </h3>
          </div>
        </Reveal>

        <div className="masonry-grid">
          {RELATION_PHOTOS.map((photo, i) => (
            <Reveal key={i} delay={(i % 3) * 80} className="masonry-item">
              <figure className="glass-card group overflow-hidden p-2">
                <div className="zoom-wrap relative overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={800}
                    height={photo.span === "wide" ? 500 : photo.span === "tall" ? 1200 : 800}
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 33vw, 50vw"
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <figcaption className="px-2 py-1.5 text-center text-[10px] uppercase tracking-wide-sm text-cream/40">
                  Angelo &amp; Maria Antonina
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* === Fonte === */}
        <Reveal>
          <p className="mt-6 text-center text-[11px] text-cream/40">
            Fonte:{" "}
            <a
              href="https://www.radioamica.it/da-un-piccolo-comune-allincontro-con-lattore-regista-angelo-faraci-lattrice-camporealese-maria-antonina-macaluso-si-racconta"
              target="_blank"
              rel="noopener noreferrer"
              className="link-source"
            >
              Radio Amica — L'incontro con Angelo Faraci
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
