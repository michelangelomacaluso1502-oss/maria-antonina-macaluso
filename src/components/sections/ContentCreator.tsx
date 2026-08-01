import { SOCIAL, MAM_PROFILES } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import SectionHeading from "./SectionHeading";
import Image from "next/image";
import {
  Instagram,
  Facebook,
  Globe,
  Film,
  ExternalLink,
  Music2,
  Sparkles,
  Mail,
  Newspaper,
  Camera,
} from "lucide-react";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  facebook: Facebook,
  imdb: Film,
  globe: Globe,
  tiktok: Music2,
};

const SOURCES = [
  {
    title: "Vulcanica content creator — Maria Antonina Macaluso",
    source: "Cronache Mediterranee",
    url: "https://cronachemediterranee.net/vulcanica-content-creator-maria-antonina-macaluso",
    date: "10 novembre 2025",
    excerpt:
      "Reduce da prestigiosi progetti RAI, è una content creator che collabora con importanti brand italiani, seguita da un vasto pubblico sui social.",
  },
  {
    title: "Maria Antonina Macaluso e la gioventù intraprendente",
    source: "Radio Una Voce Vicina",
    url: "https://www.radiounavocevicina.it/main/very-common-important-people-maria-antonina-macaluso-e-la-gioventu-intraprendente",
    date: "13 novembre 2025",
    excerpt:
      "Figlia della Città di Palermo, a 24 anni ha già collezionato una serie di esperienze: prestigiosi progetti RAI, diverse collaborazioni con brand.",
  },
  {
    title: "Maria Antonina Macaluso: l'eclettismo di un talento",
    source: "OraWebTv",
    url: "https://www.orawebtv.it/maria-antonina-macaluso-leclettismo-di-un-talento-tra-cinema-social-media-e-beauty",
    date: "17 dicembre 2024",
    excerpt:
      "Attrice di grande valore, esperta di comunicazione e appassionata content creator, ha saputo coniugare le sue numerose passioni e competenze.",
  },
];

export default function ContentCreator() {
  return (
    <section id="content-creator" className="bg-cinema-radial py-24 md:py-32">
      <div className="cinematic-container">
        <SectionHeading
          eyebrow="Content Creator"
          title="Il volto digitale della Sicilia"
          subtitle="Oltre il cinema: una voce autentica nel paesaggio digitale contemporaneo"
        />

        <div className="mx-auto max-w-4xl space-y-12">
          {/* === Testo descrittivo con link blu cliccabili === */}
          <Reveal>
            <div className="glass-luxury p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold">
                  <Sparkles className="h-5 w-5" />
                </span>
                <h3 className="font-display text-2xl text-cream md:text-3xl">
                  <span>Attrice e Content Creator</span>
                </h3>
              </div>

              <div className="space-y-5 text-base leading-relaxed text-cream/80 sm:text-lg">
                <p>
                  <span>Accanto alla carriera cinematografica, Maria Antonina Macaluso coltiva una presenza digitale di spessore, quale content creator di rara sensibilità. Sul suo </span>
                  <a
                    href="https://www.instagram.com/mary.macaluso09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-source"
                  >
                    <span>Instagram @mary.macaluso09 (11.9 mila follower)</span>
                  </a>
                  <span> e sul suo </span>
                  <a
                    href="https://www.tiktok.com/@mary.macaluso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-source"
                  >
                    <span>TikTok @mary.macaluso (5.2 mila follower)</span>
                  </a>
                  <span> condivide contenuti dedicati alla bellezza, al lifestyle, alla gastronomia e alla terra di Sicilia, edificando una community autentica che la riconosce quale </span>
                  <span>&ldquo;volcanica content creator&rdquo;</span>
                  <span> </span>
                  <a
                    href="https://cronachemediterranee.net/vulcanica-content-creator-maria-antonina-macaluso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-source"
                  >
                    <span>(Cronache Mediterranee, 2025)</span>
                  </a>
                  <span>.</span>
                </p>

                <p>
                  <span>Reduce da prestigiosi progetti Rai, è una creatrice di contenuti che collabora con brand italiani di rilievo, seguita da un pubblico vasto e fedele sui social. La sua biografia ufficiale recita: </span>
                  <span>&ldquo;Attrice, Content Creator, Food lover&rdquo;</span>
                  <span> — sintesi perfetta di un talento che intreccia cinema, bellezza e radici siciliane in un unicum irripetibile.</span>
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <span className="text-sm text-cream/60"><span>Per collaborazioni professionali:</span></span>
                  <a
                    href="mailto:mariantonina63@gmail.com"
                    className="link-source inline-flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    <span>mariantonina63@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>

          {/* === Galleria foto Content Creator === */}
          <Reveal delay={80}>
            <div>
              <div className="mb-6 flex items-center gap-3">
                <Camera className="h-6 w-6 text-gold" />
                <h3 className="font-display text-xl text-gold/90 uppercase tracking-wide-sm">
                  <span>Galleria</span>
                </h3>
              </div>
              <div className="mx-auto grid max-w-2xl gap-5 sm:grid-cols-2">
                <figure className="glass-card card-lift-premium group overflow-hidden p-2">
                  <div className="zoom-wrap relative aspect-[3/5] w-full max-w-[240px] mx-auto overflow-hidden bg-noir">
                    <Image
                      src="/images/content-creator/beauty-v2.jpg"
                      alt="Maria Antonina Macaluso — Beauty Content Creator"
                      fill
                      sizes="(min-width: 640px) 240px, 100vw"
                      className="object-contain object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="px-3 py-2 text-center text-[11px] uppercase tracking-wide-sm text-cream/50">
                    <span>Beauty Content Creator</span>
                  </figcaption>
                </figure>
                <figure className="glass-card card-lift-premium group overflow-hidden p-2">
                  <div className="zoom-wrap relative aspect-[3/5] w-full max-w-[240px] mx-auto overflow-hidden bg-noir">
                    <Image
                      src="/images/content-creator/lifestyle-v2.jpg"
                      alt="Maria Antonina Macaluso — Lifestyle Content Creator"
                      fill
                      sizes="(min-width: 640px) 240px, 100vw"
                      className="object-contain object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="px-3 py-2 text-center text-[11px] uppercase tracking-wide-sm text-cream/50">
                    <span>Lifestyle Content Creator</span>
                  </figcaption>
                </figure>
              </div>
              <p className="mt-4 text-center text-[11px] text-cream/40">
                <span>Fonte: </span>
                <a
                  href="https://cronachemediterranee.net/vulcanica-content-creator-maria-antonina-macaluso/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-source"
                >
                  <span>Cronache Mediterranee — Vulcanica content creator</span>
                </a>
              </p>
            </div>
          </Reveal>

          {/* === Profili social verificati === */}
          <Reveal delay={100}>
            <div>
              <h3 className="mb-6 font-display text-xl text-gold/90 uppercase tracking-wide-sm">
                <span>Profili ufficiali verificati</span>
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {MAM_PROFILES.map((p) => {
                  const Icon = ICONS[p.icon] ?? Globe;
                  return (
                    <a
                      key={p.url}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card card-lift-premium group flex items-center gap-4 p-5"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-gold/5 text-gold transition-colors group-hover:bg-gold group-hover:text-noir">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-cream"><span>{p.label}</span></span>
                          <ExternalLink className="h-3 w-3 text-cream/40" />
                        </div>
                        <span className="block truncate text-xs text-cream/50"><span>{p.handle}</span></span>
                        <span className="block text-[11px] text-cream/40"><span>{p.note}</span></span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>

          {/* === Fonti e articoli verificati === */}
          <Reveal delay={200}>
            <div>
              <div className="mb-6 flex items-center gap-3">
                <Newspaper className="h-6 w-6 text-gold" />
                <h3 className="font-display text-xl text-gold/90 uppercase tracking-wide-sm">
                  <span>Fonti verificate</span>
                </h3>
              </div>
              <div className="space-y-4">
                {SOURCES.map((article, i) => (
                  <a
                    key={i}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card card-lift-premium group block p-5"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-3">
                          <span className="text-[11px] uppercase tracking-wide-sm text-blue-400"><span>{article.source}</span></span>
                          <span className="text-[11px] text-cream/40"><span>{article.date}</span></span>
                        </div>
                        <h4 className="mt-1 font-display text-base text-cream group-hover:text-gold">
                          <span>{article.title}</span>
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-cream/60">
                          <span>{article.excerpt}</span>
                        </p>
                      </div>
                      <ExternalLink className="h-4 w-4 shrink-0 text-blue-400 transition-colors group-hover:text-blue-300" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
