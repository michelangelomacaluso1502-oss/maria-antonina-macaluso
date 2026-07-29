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

// Reveal: fades + slides up children when they enter the viewport.
interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "article" | "li" | "header" | "figure" | "p" | "span";
  once?: boolean;
  variant?: RevealVariant;
}

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
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            if (once) obs.unobserve(entry.target);
          } else if (!once) {
            setVisible(false);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(el);
    return () => obs.disconnect();
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

// Stagger: orchestrates staggerItem children.
interface StaggerProps {
  children: React.ReactNode;
  className?: string;
  gap?: number; // ms between items
  as?: "div" | "ul" | "section";
}

export function Stagger({ children, className, gap = 90, as: Tag = "div" }: StaggerProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStart(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
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

// staggerItem: animates in based on its DOM order once Stagger is triggered.
export function staggerItem(children: React.ReactNode): React.ReactNode {
  return children;
}
