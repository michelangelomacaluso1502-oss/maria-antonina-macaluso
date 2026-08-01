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

// Mappa icone → componenti lucide
const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  instagram: Instagram,
  facebook: Facebook,
  imdb: Film,
  globe: Globe,
  tiktok: Music2,
};

// Fonti verificate per la sezione Content Creator
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
          subtitle="Oltre il cinema: una presenza social autentica, collaborazioni con brand e community"
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
                  Attrice &amp; Content Creator
                </h3>
              </div>

              <div className="space-y-5 text-base leading-relaxed text-cream/80 sm:text-lg">
                <p>
                  Accanto alla carriera cinematografica, Maria Antonina Macaluso coltiva una
                  presenza digitale significativa come content creator. Sul suo{" "}
                  <a
                    href="https://www.instagram.com/mary.macaluso09"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-source"
                  >
                    Instagram @mary.macaluso09 (11.9K follower)
                  </a>{" "}
                  e{" "}
                  <a
                    href="https://www.tiktok.com/@mary.macaluso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-source"
                  >
                    TikTok @mary.macaluso (5.2K follower)
                  </a>{" "}
                  condivide contenuti su bellezza, lifestyle, food e Sicilia — costruendo una
                  community autentica che la riconosce come{" "}
                  <em>&ldquo;volcanica content creator&rdquo;</em>{" "}
                  <a
                    href="https://cronachemediterranee.net/vulcanica-content-creator-maria-antonina-macaluso"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-source"
                  >
                    (Cronache Mediterranee, 2025)
                  </a>
                  .
                </p>

                <p>
                  Reduce da prestigiosi progetti RAI, è una content creator che collabora con
                  importanti brand italiani, seguita da un vasto pubblico sui social. La sua bio
                  ufficiale recita:{" "}
                  <em>&ldquo;Actress🎬 Content Creator 💄 Food lover🍋&rdquo;</em> — una sintesi
                  perfetta di un talento che mescola cinema, bellezza e radici siciliane.
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <span className="text-sm text-cream/60">Per collaborazioni:</span>
                  <a
                    href="mailto:mariantonina63@gmail.com"
                    className="link-source inline-flex items-center gap-2"
                  >
                    <Mail className="h-4 w-4" />
                    mariantonina63@gmail.com
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
                  Galleria
                </h3>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <figure className="glass-card card-lift-premium group overflow-hidden p-2">
                  <div className="zoom-wrap relative aspect-square w-full overflow-hidden">
                    <Image
                      src="/images/content-creator/beauty-creator.jpg"
                      alt="Maria Antonina Macaluso — Beauty Content Creator"
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="px-3 py-2 text-center text-[11px] uppercase tracking-wide-sm text-cream/50">
                    Beauty Content Creator
                  </figcaption>
                </figure>
                <figure className="glass-card card-lift-premium group overflow-hidden p-2">
                  <div className="zoom-wrap relative aspect-square w-full overflow-hidden">
                    <Image
                      src="/images/content-creator/lifestyle-creator.jpg"
                      alt="Maria Antonina Macaluso — Lifestyle Content Creator"
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <figcaption className="px-3 py-2 text-center text-[11px] uppercase tracking-wide-sm text-cream/50">
                    Lifestyle Content Creator
                  </figcaption>
                </figure>
              </div>
              <p className="mt-4 text-center text-[11px] text-cream/40">
                Fonte:{" "}
                <a
                  href="https://cronachemediterranee.net/vulcanica-content-creator-maria-antonina-macaluso/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-source"
                >
                  Cronache Mediterranee — Vulcanica content creator
                </a>
              </p>
            </div>
          </Reveal>

          {/* === Profili social verificati === */}
          <Reveal delay={100}>
            <div>
              <h3 className="mb-6 font-display text-xl text-gold/90 uppercase tracking-wide-sm">
                Profili ufficiali verificati
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

          {/* === Fonti e articoli verificati === */}
          <Reveal delay={200}>
            <div>
              <div className="mb-6 flex items-center gap-3">
                <Newspaper className="h-6 w-6 text-gold" />
                <h3 className="font-display text-xl text-gold/90 uppercase tracking-wide-sm">
                  Fonti verificate
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
                          <span className="text-[11px] uppercase tracking-wide-sm text-blue-400">
                            {article.source}
                          </span>
                          <span className="text-[11px] text-cream/40">{article.date}</span>
                        </div>
                        <h4 className="mt-1 font-display text-base text-cream group-hover:text-gold">
                          {article.title}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-cream/60">
                          {article.excerpt}
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
