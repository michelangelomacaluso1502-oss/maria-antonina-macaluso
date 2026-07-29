import { PROLOGUE } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";

export default function Prologue() {
  return (
    <section id="storia" className="bg-cinema-radial py-24 md:py-32">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow={PROLOGUE.title}
          title="Una siciliana nel cinema contemporaneo"
          subtitle="Il volto che il cinema siciliano stava aspettando"
        />
        <div className="mx-auto max-w-3xl space-y-6">
          {PROLOGUE.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 120} as="p">
              <p className="text-pretty text-lg leading-relaxed text-cream/80 sm:text-xl">
                {p}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
