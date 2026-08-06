"use client";

import { useState } from "react";
import { FAQS } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/cn";

/**
 * Renderizza il testo della risposta FAQ trasformando:
 * - Handle social (@xxx) in link blu
 * - ID IMDb (nmXXXX) in link blu
 * - Email in link mailto blu
 * - URL plain text in link blu
 */
function renderAnswerWithLinks(text: string): React.ReactNode {
  // Pattern: @handle, nm\d+ (IMDb), email, http(s)://url
  const pattern = /(@[a-zA-Z0-9._-]+)|(nm\d{7,})|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(https?:\/\/[^\s,)]+)/g;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    // Aggiungi testo prima del match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const [full, handle, imdbId, email, url] = match;

    if (handle) {
      // @handle → determina piattaforma dal contesto
      let href = `https://www.instagram.com/${handle.substring(1)}`;
      const ctx = text.toLowerCase();
      if (ctx.includes("tiktok")) href = `https://www.tiktok.com/${handle}`;
      else if (ctx.includes("facebook")) href = `https://www.facebook.com/${handle.substring(1)}`;
      parts.push(
        <a key={key++} href={href} target="_blank" rel="noopener noreferrer"
          className="font-medium text-blue-400 hover:text-blue-300 underline decoration-blue-400/40 underline-offset-2 transition-colors">
          {handle}
        </a>
      );
    } else if (imdbId) {
      parts.push(
        <a key={key++} href={`https://www.imdb.com/name/${imdbId}/`} target="_blank" rel="noopener noreferrer"
          className="font-medium text-blue-400 hover:text-blue-300 underline decoration-blue-400/40 underline-offset-2 transition-colors">
          {imdbId}
        </a>
      );
    } else if (email) {
      parts.push(
        <a key={key++} href={`mailto:${email}`}
          className="font-medium text-blue-400 hover:text-blue-300 underline decoration-blue-400/40 underline-offset-2 transition-colors">
          {email}
        </a>
      );
    } else if (url) {
      parts.push(
        <a key={key++} href={url} target="_blank" rel="noopener noreferrer"
          className="font-medium text-blue-400 hover:text-blue-300 underline decoration-blue-400/40 underline-offset-2 transition-colors break-all">
          {url}
        </a>
      );
    }

    lastIndex = match.index + full.length;
  }

  // Aggiungi testo rimanente
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  return parts;
}

export default function FAQ({ compact = false }: { compact?: boolean }) {
  const list = compact ? FAQS.slice(0, 5) : FAQS;
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cinema-radial py-24 md:py-32">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow="FAQ"
          title="Domande frequenti"
          subtitle="Risposte sui dati verificati di Maria Antonina Macaluso"
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
                      {renderAnswerWithLinks(item.answer)}
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
