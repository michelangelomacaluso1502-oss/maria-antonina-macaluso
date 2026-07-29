import { QUOTES } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";
import { Quote as QuoteIcon } from "lucide-react";

export default function Quotes({ compact = false }: { compact?: boolean }) {
  const list = compact ? QUOTES.slice(0, 3) : QUOTES;
  return (
    <section id="citazioni" className="bg-cinema-radial py-24 md:py-32">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow="Citazioni"
          title="Parole che restano"
          subtitle="Pensieri di Maria Antonina e Angelo Faraci"
        />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {list.map((q, i) => (
            <Reveal key={q.text} delay={(i % 2) * 100}>
              <figure className="glass-card relative h-full overflow-hidden p-7">
                <QuoteIcon className="absolute -right-2 -top-2 h-20 w-20 text-gold/10" />
                <blockquote className="relative font-italic text-xl leading-relaxed text-rose-soft sm:text-2xl">
                  “{q.text}”
                </blockquote>
                <figcaption className="relative mt-5 flex items-center justify-between">
                  <span className="text-sm font-medium text-cream">— {q.author}</span>
                  <span className="text-[11px] uppercase tracking-wide-sm text-gold/60">{q.context}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
