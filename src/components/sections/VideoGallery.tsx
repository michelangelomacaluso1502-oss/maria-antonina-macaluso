import { VIDEO_GALLERY } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import YouTubeFacade from "@/components/cinematic/YouTubeFacade";
import SectionHeading from "./SectionHeading";

export default function VideoGallery() {
  return (
    <section id="video" className="bg-section-alt py-24 md:py-32">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow="Video"
          title="Galleria multimediale"
          subtitle="Trailer, cortometraggi e contenuti video ufficiali"
        />

        <div className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VIDEO_GALLERY.map((video, i) => (
            <Reveal key={video.id} delay={(i % 3) * 100}>
              <div className="glass-card card-lift-premium overflow-hidden p-3">
                <YouTubeFacade
                  videoId={video.youtubeId}
                  title={video.title}
                  className="rounded-sm"
                />
                <div className="mt-3 px-2 pb-1">
                  <p className="text-[11px] uppercase tracking-wide-sm text-gold/70">
                    {video.year} · {video.category}
                  </p>
                  <h3 className="mt-1 font-display text-base text-cream line-clamp-2">
                    {video.title}
                  </h3>
                  {video.relatedFilm && (
                    <p className="mt-1 text-xs text-cream/50">
                      Opera: {video.relatedFilm}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
