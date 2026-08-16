import { SITE } from "@/lib/data";

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface SeoBoostProps {
  /** Breadcrumb path: [{label:'Home',path:'/'},{label:'Biografia'}] */
  items?: BreadcrumbItem[];
  /** Optional: additional JSON-LD to inject (Movie, TVSeries, etc.) */
  additionalJsonLd?: object[];
  /** Optional: page type for og:type */
  type?: "article" | "profile" | "website";
}

/**
 * SEO Boost Component — Inject:
 * 1. BreadcrumbList JSON-LD (helps Google understand site hierarchy)
 * 2. Hreflang it-IT + x-default (international SEO)
 * 3. Additional structured data (Movie, TVSeries, Article, etc.)
 *
 * Usage:
 * <SeoBoost items={[{label:'Home',path:'/'},{label:'Biografia'}]} />
 */
export default function SeoBoost({
  items = [],
  additionalJsonLd = [],
  type = "website",
}: SeoBoostProps) {
  // Build BreadcrumbList JSON-LD
  const breadcrumbLd =
    items.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: items.map((item, idx) => ({
            "@type": "ListItem",
            position: idx + 1,
            name: item.label,
            ...(item.path
              ? { item: `${SITE.url}${item.path}` }
              : {}),
          })),
        }
      : null;

  const allJsonLd = [breadcrumbLd, ...additionalJsonLd].filter(Boolean);

  return (
    <>
      {/* Hreflang tags */}
      <link rel="alternate" hrefLang="it-IT" href={SITE.url} />
      <link rel="alternate" hrefLang="x-default" href={SITE.url} />

      {/* JSON-LD structured data */}
      {allJsonLd.map((ld, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
        />
      ))}
    </>
  );
}
