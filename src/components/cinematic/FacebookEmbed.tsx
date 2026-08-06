"use client";

import { useState } from "react";

/**
 * FacebookEmbed — Anteprima cliccabile con immagine (stile YouTube)
 *
 * Mostra una card con:
 * - Thumbnail immagine di anteprima
 * - Titolo del post
 * - Icona Facebook
 * - Click → apre il post Facebook in nuova tab (immediato, come YouTube)
 *
 * Niente SDK esterno, niente iframe pesante: solo HTML/CSS ultra-leggero.
 * Performance: 0ms impatto, no lag, fluido su tutti i device.
 */
interface FacebookEmbedProps {
  url: string;
  title?: string;
  description?: string;
  /** URL dell'immagine di anteprima (opzionale) */
  thumbnail?: string;
}

export default function FacebookEmbed({
  url,
  title = "Post Facebook",
  description,
  thumbnail,
}: FacebookEmbedProps) {
  const [imageError, setImageError] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    e.stopPropagation();
    // iOS Safari: usa window.open con fallback
    try {
      const newWin = window.open(url, "_blank", "noopener,noreferrer");
      if (!newWin) {
        window.location.href = url;
      }
    } catch {
      window.location.href = url;
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="group my-6 block overflow-hidden rounded-xl border border-gold/20 bg-noir/60 transition-all duration-300 hover:border-blue-400/50 hover:bg-noir/80 no-tap-highlight"
      style={{ touchAction: "manipulation", WebkitTapHighlightColor: "transparent" }}
    >
      <div className="flex flex-col sm:flex-row">
        {/* Thumbnail immagine */}
        <div className="relative aspect-video w-full overflow-hidden bg-noir sm:w-64 sm:shrink-0">
          {thumbnail && !imageError ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumbnail}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              onError={() => setImageError(true)}
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#1877F2]/20 to-[#0c0a09]">
              <svg
                className="h-12 w-12 text-[#1877F2]"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
          )}
          {/* Overlay play-style (come YouTube) */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1877F2] shadow-lg">
              <svg className="h-6 w-6 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Contenuto testuale */}
        <div className="flex flex-1 flex-col justify-center p-4 sm:p-5">
          <div className="mb-2 flex items-center gap-2">
            <svg className="h-4 w-4 text-[#1877F2]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="text-[10px] font-semibold uppercase tracking-wide-sm text-[#1877F2]">Facebook</span>
          </div>
          <h4 className="font-display text-base text-cream transition-colors group-hover:text-blue-300 sm:text-lg">
            {title}
          </h4>
          {description && (
            <p className="mt-1 text-xs leading-relaxed text-cream/60 sm:text-sm">{description}</p>
          )}
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-blue-400 group-hover:text-blue-300">
            Apri su Facebook →
          </span>
        </div>
      </div>
    </a>
  );
}
