"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { Play, ExternalLink } from "lucide-react";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  /** Classe wrapper opzionale */
  className?: string;
}

/**
 * YouTubeFacade — pattern facade per embed YouTube
 * - Mostra thumbnail hqdefault con play button
 * - Al click, carica iframe youtube-nocookie con autoplay=1
 * - Lazy load: iframe viene caricato SOLO quando l'utente clicca
 * - Fallback hqdefault se maxresdefault mancante
 * - Privacy: usa youtube-nocookie.com (no cookie tracking)
 * - Parametri: rel=0 (no video correlati), modestbranding=1, autoplay=1
 */
export default function YouTubeFacade({
  videoId,
  title,
  className = "",
}: YouTubeFacadeProps) {
  const [activated, setActivated] = useState(false);
  const [thumbSrc, setThumbSrc] = useState(
    `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
  );

  const handleClick = useCallback(() => {
    setActivated(true);
  }, []);

  const handleThumbError = useCallback(() => {
    // Fallback a hqdefault se maxresdefault non disponibile
    setThumbSrc(`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`);
  }, []);

  if (activated) {
    return (
      <div
        className={`relative aspect-video w-full overflow-hidden bg-noir ${className}`}
      >
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          loading="lazy"
          className="absolute inset-0 h-full w-full"
        />
      </div>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={`Riproduci video: ${title}`}
      className={`group relative aspect-video w-full overflow-hidden bg-noir cursor-pointer ${className}`}
    >
      {/* Thumbnail */}
      <Image
        src={thumbSrc}
        alt={title}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        onError={handleThumbError}
        unoptimized
      />
      {/* Overlay scuro per leggibilità */}
      <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/20 to-noir/30 transition-opacity group-hover:from-noir/70" />
      {/* Play button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gold bg-noir/60 backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-noir">
          <Play className="h-6 w-6 fill-current text-gold transition-colors group-hover:text-noir" />
        </span>
      </div>
      {/* Titolo video */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="flex items-center gap-2 text-xs uppercase tracking-wide-sm text-cream/90">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20">
            <Play className="h-2.5 w-2.5 fill-current text-gold" />
          </span>
          <span className="line-clamp-1">{title}</span>
        </p>
      </div>
      {/* Badge YouTube */}
      <div className="absolute right-2 top-2 flex items-center gap-1 rounded-sm bg-red-600/90 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide-sm text-white">
        <ExternalLink className="h-2.5 w-2.5" />
        YouTube
      </div>
    </button>
  );
}
