import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero";
import { MULTIMEDIA } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import { Play, Images, ExternalLink } from "lucide-react";
import SeoBoost from "@/components/site/SeoBoost";

export const metadata: Metadata = {
  title: "Multimedia",
  description:
    "Contenuti multimediali su Maria Antonina Macaluso: video, interviste, red carpet, dietro le quinte e gallerie fotografiche.",
  alternates: { canonical: "/multimedia" },
};

export default function MultimediaPage() {
  return (
    <main id="main">
      <SeoBoost
        items={[
          { label: "Home", path: "/" },
          { label: "Multimedia" },
        ]}
      />
      <PageHero
        eyebrow="Multimedia"
        title="Video e gallerie"
        subtitle="Interviste, red carpet, dietro le quinte e servizi fotografici"
        breadcrumb={[{ label: "Multimedia" }]}
      />
      <section className="bg-section-alt py-24 md:py-32">
        <div className="cinematic-container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {MULTIMEDIA.map((m, i) => (
              <Reveal key={m.title} delay={(i % 3) * 90}>
                <a
                  href={m.url}
                  target={m.url.startsWith("http") ? "_blank" : undefined}
                  rel={m.url.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="glass-card group card-lift-premium flex h-full flex-col p-6"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold">
                    {m.type === "Video" ? <Play className="h-5 w-5" /> : <Images className="h-5 w-5" />}
                  </span>
                  <h3 className="mt-4 font-display text-xl leading-snug text-cream group-hover:text-gold">
                    {m.title}
                  </h3>
                  <p className="mt-2 text-xs uppercase tracking-wide-sm text-gold/70">
                    {m.type} · {m.duration}
                  </p>
                  <span className="mt-auto flex items-center gap-1.5 pt-4 text-xs text-cream/50 group-hover:text-gold">
                    Apri {m.url.startsWith("http") && <ExternalLink className="h-3 w-3" />}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
