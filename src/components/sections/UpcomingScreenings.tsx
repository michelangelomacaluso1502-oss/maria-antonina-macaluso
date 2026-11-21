import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import { Calendar, MapPin, ArrowRight, Star } from "lucide-react";

/**
 * UpcomingScreenings — Prossime proiezioni del film Pochi Attimi
 * Mostra le proiezioni speciali a Partinico e Messina con link alle news complete.
 */
const SCREENINGS = [
  {
    date: "5 Dicembre 2026",
    dateISO: "2026-12-05",
    time: "20:30",
    city: "Partinico (PA)",
    venue: "Cinema Empire",
    href: "/news/pochi-attimi-cinema-empire-partinico",
    excerpt: "Proiezione speciale al Cinema Empire di Partinico, in provincia di Palermo. A pochi chilometri da Camporeale, paese dove Maria Antonina Macaluso è cresciuta.",
    badge: "Anteprima Sicilia",
  },
  {
    date: "12 Dicembre 2026",
    dateISO: "2026-12-12",
    time: "20:30",
    city: "Messina",
    venue: "Cinema da confermare",
    href: "/news/pochi-attimi-proiezione-messina",
    excerpt: "Il cinema siciliano di Angelo Faraci e Maria Antonina Macaluso arriva allo Stretto. Un ponte culturale tra la Sicilia occidentale e orientale.",
    badge: "Sicilia orientale",
  },
];

export default function UpcomingScreenings() {
  return (
    <section id="prossime-proiezioni" className="bg-cinema-radial py-20 md:py-28">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow="Prossime Proiezioni"
          title="Pochi Attimi sul grande schermo"
          subtitle="Il nuovo lungometraggio di Angelo Faraci in programmazione speciale"
        />
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          {SCREENINGS.map((s, i) => (
            <Reveal key={s.city} delay={i * 120}>
              <Link
                href={s.href}
                className="group glass-card card-lift-premium flex h-full flex-col p-6"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="pill-cinema">
                    <Star className="mr-1 h-3 w-3" />
                    {s.badge}
                  </span>
                  <ArrowRight className="h-4 w-4 text-cream/40 transition-transform group-hover:translate-x-1 group-hover:text-gold" />
                </div>
                <div className="mb-3 flex flex-wrap items-center gap-3 text-xs uppercase tracking-wide-sm text-gold/70">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4" /> {s.date}
                  </span>
                  <span className="text-cream/30">•</span>
                  <span>{s.time}</span>
                </div>
                <h3 className="font-display text-2xl text-cream group-hover:text-gold">
                  {s.city}
                </h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm text-cream/60">
                  <MapPin className="h-3.5 w-3.5 text-gold/70" /> {s.venue}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-cream/65">
                  {s.excerpt}
                </p>
                <span className="mt-5 text-xs uppercase tracking-wide-sm text-gold/70 group-hover:text-gold">
                  Leggi la scheda completa →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
