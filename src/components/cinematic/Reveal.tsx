"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type RevealVariant = "default" | "left" | "right" | "up-sm" | "scale" | "clip";

const variantClass: Record<RevealVariant, string> = {
  default: "reveal",
  left: "reveal reveal-left",
  right: "reveal reveal-right",
  "up-sm": "reveal reveal-up-sm",
  scale: "reveal reveal-scale",
  clip: "reveal reveal-clip",
};

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "header" | "figure" | "p" | "span";
  once?: boolean;
  variant?: RevealVariant;
}

/**
 * Reveal — FIX iOS Safari/Tablet:
 * 1. IntersectionObserver con threshold basso (0.01)
 * 2. Fallback: se dopo 1.5s l'elemento non è visibile, mostra comunque
 * 3. Se IntersectionObserver non supportato, mostra subito tutto
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
  once = true,
  variant = "default",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      setVisible(true);
      return;
    }

    // Se IntersectionObserver non supportato, mostra subito
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    let fallbackTimer: ReturnType<typeof setTimeout> | null = null;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.unobserve(entry.target);
            if (fallbackTimer) clearTimeout(fallbackTimer);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px -5% 0px" },
    );
    obs.observe(el);

    // Fallback: dopo 1.5s, mostra comunque (fix iOS Safari/tablet)
    fallbackTimer = setTimeout(() => {
      setVisible(true);
      obs.disconnect();
    }, 1500);

    return () => {
      obs.disconnect();
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };
  }, [once]);

  const Comp = Tag as React.ElementType;
  return (
    <Comp
      ref={ref}
      className={cn(variantClass[variant], visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Comp>
  );
}

interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  gap?: number;
  as?: "div" | "ul" | "section";
}

export function Stagger({ children, className, gap = 90, as: Tag = "div" }: StaggerProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      setStart(true);
      return;
    }

    if (typeof IntersectionObserver === "undefined") {
      setStart(true);
      return;
    }

    let fallbackTimer: ReturnType<typeof setTimeout> | null = null;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStart(true);
            obs.unobserve(entry.target);
            if (fallbackTimer) clearTimeout(fallbackTimer);
          }
        });
      },
      { threshold: 0.01 },
    );
    obs.observe(el);

    fallbackTimer = setTimeout(() => {
      setStart(true);
      obs.disconnect();
    }, 1500);

    return () => {
      obs.disconnect();
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };
  }, []);

  const Comp = Tag as React.ElementType;
  return (
    <Comp
      ref={ref}
      className={className}
      data-stagger="true"
      data-stagger-start={start ? "1" : "0"}
      data-stagger-gap={String(gap)}
    >
      {children}
    </Comp>
  );
}

export function staggerItem(children: React.ReactNode): React.ReactNode {
  return children;
}
