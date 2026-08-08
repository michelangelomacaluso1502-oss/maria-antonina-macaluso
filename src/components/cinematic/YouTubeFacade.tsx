"use client";

import Image from "next/image";
import { Play, ExternalLink } from "lucide-react";
import { useState } from "react";

interface YouTubeFacadeProps {
  videoId: string;
  title: string;
  className?: string;
}

/**
 * YouTubeFacade v2 — Istantaneo, zero lag
 *
 * Mostra thumbnail con play button.
 * Al click: iframe caricato con autoplay=1, istantaneo.
 * FIX: usa www.youtube.com (non nocookie) per compatibilità massima.
 * Thumbnail: hqdefault (sempre disponibile, carica veloce).
 */
export default function YouTubeFacade({
  videoId,
  title,
  className = "",
}: YouTubeFacadeProps) {
  const [activated, setActivated] = useState(false);

  if (activated) {
    // Iframe diretto — si apre istantaneamente al click
    return (
      <div className={`relative aspect-video w-full overflow-hidden bg-noir ${className}`}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 h-full w-full border-0"
          style={{ touchAction: "auto" }}
        />
      </div>
    );
  }

  // Thumbnail con play button — click istantaneo
  return (
    <button
      type="button"
      onClick={() => setActivated(true)}
      aria-label={`Riproduci video: ${title}`}
      className={`group relative aspect-video w-full overflow-hidden bg-noir cursor-pointer no-tap-highlight ${className}`}
      style={{ touchAction: "manipulation" }}
    >
      <Image
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        alt={title}
        fill
        sizes="(min-width: 768px) 50vw, 100vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        unoptimized
      />
      <div className="absolute inset-0 bg-gradient-to-t from-noir/80 via-noir/20 to-noir/30 transition-opacity group-hover:from-noir/70" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-gold bg-noir/60 backdrop-blur transition-all duration-300 group-hover:scale-110 group-hover:bg-gold group-hover:text-noir sm:h-16 sm:w-16">
          <Play className="h-5 w-5 fill-current text-gold transition-colors group-hover:text-noir sm:h-6 sm:w-6" />
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="flex items-center gap-2 text-xs uppercase tracking-wide-sm text-cream/90">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gold/20">
            <Play className="h-2.5 w-2.5 fill-current text-gold" />
          </span>
          <span className="line-clamp-1">{title}</span>
        </p>
      </div>
      <div className="absolute right-2 top-2 flex items-center gap-1 rounded-sm bg-red-600/90 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide-sm text-white">
        <ExternalLink className="h-2.5 w-2.5" />
        YouTube
      </div>
    </button>
  );
}
