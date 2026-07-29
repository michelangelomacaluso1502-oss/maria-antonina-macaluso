import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Reveal } from "@/components/cinematic/Reveal";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href?: string }[];
}

export default function PageHero({ eyebrow, title, subtitle, breadcrumb }: Props) {
  return (
    <header className="relative overflow-hidden bg-cinema-radial pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" aria-hidden>
        <div className="absolute -right-20 top-10 h-72 w-72 rounded-full bg-gold blur-[100px]" />
      </div>
      <div className="cinematic-container relative">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-xs text-cream/50">
              <li>
                <Link href="/" className="hover:text-gold">Home</Link>
              </li>
              {breadcrumb.map((b, i) => (
                <li key={i} className="flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3 text-cream/30" />
                  {b.href ? (
                    <Link href={b.href} className="hover:text-gold">{b.label}</Link>
                  ) : (
                    <span className="text-cream/70">{b.label}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
        <Reveal>
          {eyebrow && <span className="pill-cinema mb-4">{eyebrow}</span>}
          <h1 className="font-display text-4xl leading-tight text-cream sm:text-5xl md:text-6xl">
            <span className="text-gradient-gold">{title}</span>
          </h1>
          {subtitle && (
            <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-cream/65 sm:text-lg">
              {subtitle}
            </p>
          )}
          <div className="divider-cinema mt-8 max-w-xs" />
        </Reveal>
      </div>
    </header>
  );
}
