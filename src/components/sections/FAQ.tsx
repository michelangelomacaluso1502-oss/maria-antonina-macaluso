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
 *
 * FIX MOBILE: Usa link <a> nativi SENZA preventDefault.
 * Il comportamento nativo del browser funziona su tutti i dispositivi
 * senza dipendere dall'idratazione JS.
 *
 * FIX PIATTAFORMA: Identifica la piattaforma corretta in base alla parola
 * più vicina prima dell'handle (Instagram/TikTok/Facebook).
 */
function getPlatformForHandle(text: string, matchIndex: number): string {
  // Cerca la parola "Instagram", "TikTok", "Facebook" più vicina PRIMA dell'handle
  const before = text.substring(0, matchIndex).toLowerCase();
  const platforms = [
    { name: "instagram", url: "https://www.instagram.com/" },
    { name: "tiktok", url: "https://www.tiktok.com/" },
    { name: "facebook", url: "https://www.facebook.com/" },
  ];

  // Trova l'ultima occorrenza di ogni piattaforma
  let bestPlatform = platforms[0]; // default Instagram
  let bestIndex = -1;

  for (const p of platforms) {
    const idx = before.lastIndexOf(p.name);
    if (idx > bestIndex) {
      bestIndex = idx;
      bestPlatform = p;
    }
  }

  return bestPlatform.url;
}

function renderAnswerWithLinks(text: string): React.ReactNode {
  const pattern = /(@[a-zA-Z0-9._-]+)|(nm\d{7,})|([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})|(https?:\/\/[^\s,)]+)/g;

  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  let key = 0;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }

    const [full, handle, imdbId, email, url] = match;

    // Classe comune per tutti i link blu
    const linkClass =
      "faq-link font-medium text-blue-400 underline decoration-blue-400/40 underline-offset-2 transition-colors break-words";

    if (handle) {
      // Determina la piattaforma in base alla parola più vicina prima dell'handle
      const platformUrl = getPlatformForHandle(text, match.index);
      const handleName = handle.substring(1); // rimuovi @
      // Per TikTok usa /@handle, per Instagram e Facebook usa /handle
      const href = platformUrl.includes("tiktok.com")
        ? `${platformUrl}@${handleName}`
        : `${platformUrl}${handleName}`;
      parts.push(
        <a
          key={key++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {handle}
        </a>
      );
    } else if (imdbId) {
      parts.push(
        <a
          key={key++}
          href={`https://www.imdb.com/name/${imdbId}/`}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {imdbId}
        </a>
      );
    } else if (email) {
      parts.push(
        <a
          key={key++}
          href={`mailto:${email}`}
          className={linkClass}
        >
          {email}
        </a>
      );
    } else if (url) {
      parts.push(
        <a
          key={key++}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={linkClass}
        >
          {url}
        </a>
      );
    }

    lastIndex = match.index + full.length;
  }

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
                      "grid transition-all duration-400",
                      isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                    style={{ overflow: isOpen ? "visible" : "hidden" }}
                  >
                    {/* FAQ content: pointer-events auto quando aperto */}
                    <div
                      className="min-h-0 text-pretty text-sm leading-relaxed text-cream/70 sm:text-base"
                      style={{ pointerEvents: isOpen ? "auto" : "none" }}
                    >
                      {renderAnswerWithLinks(item.answer)}
                    </div>
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
