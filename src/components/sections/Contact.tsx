import { MAM_PROFILES, ANGELO_PROFILES, SITE } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";
import { Instagram, Facebook, Globe, Film, ExternalLink, Heart } from "lucide-react";

// Mappa icone → componenti lucide
const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  facebook: Facebook,
  imdb: Film,
  globe: Globe,
  tiktok: Globe, // fallback: TikTok non in lucide, uso Globe
};

export default function Contact() {
  return (
    <section id="contatti" className="bg-section-alt py-24 md:py-32">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow="Contatti"
          title="Collegamenti professionali"
          subtitle="Profili ufficiali verificati di Maria Antonina Macaluso e Angelo Faraci"
        />

        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2">
          {/* Maria Antonina */}
          <Reveal>
            <div className="glass-luxury h-full p-7">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold">
                  <Heart className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-cinema text-gold/70">Maria Antonina</p>
                  <h3 className="font-display text-xl text-cream">Macaluso</h3>
                </div>
              </div>

              <div className="space-y-3">
                {MAM_PROFILES.map((p) => {
                  const Icon = ICONS[p.icon] ?? Globe;
                  return (
                    <a
                      key={p.url}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 border-b border-gold/10 pb-3 last:border-0 transition-colors hover:border-gold/30"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold transition-colors group-hover:bg-gold group-hover:text-noir">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-cream">{p.label}</span>
                          <ExternalLink className="h-3 w-3 text-cream/40" />
                        </div>
                        <span className="block truncate text-xs text-cream/50">{p.handle}</span>
                        <span className="block text-[11px] text-cream/40">{p.note}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* Angelo Faraci */}
          <Reveal delay={120}>
            <div className="glass-luxury h-full p-7">
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold">
                  <Film className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-cinema text-gold/70">Angelo</p>
                  <h3 className="font-display text-xl text-cream">Faraci</h3>
                </div>
              </div>

              <div className="space-y-3">
                {ANGELO_PROFILES.map((p) => {
                  const Icon = ICONS[p.icon] ?? Globe;
                  return (
                    <a
                      key={p.url}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 border-b border-gold/10 pb-3 last:border-0 transition-colors hover:border-gold/30"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold transition-colors group-hover:bg-gold group-hover:text-noir">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-cream">{p.label}</span>
                          <ExternalLink className="h-3 w-3 text-cream/40" />
                        </div>
                        <span className="block truncate text-xs text-cream/50">{p.handle}</span>
                        <span className="block text-[11px] text-cream/40">{p.note}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Nota professionale */}
        <Reveal delay={200}>
          <div className="mx-auto mt-10 max-w-3xl text-center">
            <p className="text-sm leading-relaxed text-cream/60">
              Archivio digitale autorevole di {SITE.name}. Tutti i collegamenti sono verificati da fonti pubbliche
              ufficiali. Per richieste di stampa e collaborazioni professionali, utilizzare i profili ufficiali
              indicati. Nessun dato inventato: ogni informazione è documentata e verificabile.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
