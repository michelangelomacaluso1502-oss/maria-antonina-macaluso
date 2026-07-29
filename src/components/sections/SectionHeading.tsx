import { cn } from "@/lib/cn";
import { Reveal } from "@/components/cinematic/Reveal";

interface Props {
  id?: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  id,
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
}: Props) {
  return (
    <Reveal
      className={cn(
        "mb-12 md:mb-16",
        align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl text-left",
        className,
      )}
    >
      {eyebrow && (
        <span className="pill-cinema mb-4" id={id ? `${id}-label` : undefined}>
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-4xl leading-tight text-cream sm:text-5xl md:text-6xl">
        <span className="text-gradient-gold">{title}</span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-pretty text-base leading-relaxed text-cream/65 sm:text-lg">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "divider-cinema mt-8",
          align === "center" ? "mx-auto max-w-xs" : "max-w-xs",
        )}
      />
    </Reveal>
  );
}
