"use client";

import { useState } from "react";
import { FAQS } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/cn";

export default function FAQ({ compact = false }: { compact?: boolean }) {
  const list = compact ? FAQS.slice(0, 5) : FAQS;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cinema-radial py-24 md:py-32">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow="FAQ"
          title="Domande frequenti"
          subtitle="Otto risposte sui dati verificati di Maria Antonina Macaluso"
        />
        <div className="mx-auto max-w-3xl divide-y divide-gold/10 border-y border-gold/10">
          {list.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.question} delay={i * 50}>
                <div>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left no-tap-highlight"
                    aria-expanded={isOpen}
                  >
                    <span className={cn("font-display text-lg transition-colors sm:text-xl", isOpen ? "text-gold" : "text-cream")}>
                      {item.question}
                    </span>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gold/40 text-gold">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div
                    className={cn(
                      "grid overflow-hidden transition-all duration-400",
                      isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <p className="min-h-0 text-pretty text-sm leading-relaxed text-cream/70 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
