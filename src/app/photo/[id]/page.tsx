import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PHOTOBOOK } from "@/lib/data";
import { Reveal } from "@/components/cinematic/Reveal";
import { ArrowLeft, ArrowRight, Grid3x3 } from "lucide-react";

export const dynamicParams = false;

export function generateStaticParams() {
  return PHOTOBOOK.map((p) => ({ id: p.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const photo = PHOTOBOOK.find((p) => p.id === id);
  if (!photo) return { title: "Foto non trovata" };
  return {
    title: `Photo Book — Scatto ${photo.id}`,
    description: photo.alt,
    alternates: { canonical: `/photo/${photo.id}` },
    openGraph: { images: [{ url: photo.src, alt: photo.alt }] },
  };
}

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const idx = PHOTOBOOK.findIndex((p) => p.id === id);
  if (idx === -1) notFound();

  const photo = PHOTOBOOK[idx];
  const prev = idx > 0 ? PHOTOBOOK[idx - 1] : null;
  const next = idx < PHOTOBOOK.length - 1 ? PHOTOBOOK[idx + 1] : null;

  return (
    <main id="main" className="bg-noire min-h-screen pt-28">
      <div className="cinematic-container">
        <Reveal className="mb-6 flex items-center justify-between">
          <Link href="/photobook" className="btn-ghost-cinema">
            <Grid3x3 className="h-4 w-4" /> Photo Book
          </Link>
          <span className="text-xs uppercase tracking-cinema text-gold/70">
            Scatto {photo.id} / {PHOTOBOOK.length}
          </span>
        </Reveal>

        <Reveal className="glass-card mx-auto max-w-3xl overflow-hidden p-3">
          <figure>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={photo.src}
              alt={photo.alt}
              className="mx-auto max-h-[75vh] w-auto object-contain"
            />
            <figcaption className="px-2 py-3 text-center text-sm text-cream/60">
              {photo.alt}
            </figcaption>
          </figure>
        </Reveal>

        <div className="mx-auto mt-6 flex max-w-3xl items-center justify-between gap-4">
          {prev ? (
            <Link href={`/photo/${prev.id}`} className="btn-cinema">
              <ArrowLeft className="h-4 w-4" /> Precedente
            </Link>
          ) : (
            <span className="btn-ghost-cinema opacity-30">Precedente</span>
          )}
          <span className="font-display text-2xl text-gradient-gold">{photo.id}</span>
          {next ? (
            <Link href={`/photo/${next.id}`} className="btn-cinema">
              Successivo <ArrowRight className="h-4 w-4" />
            </Link>
          ) : (
            <span className="btn-ghost-cinema opacity-30">Successivo</span>
          )}
        </div>
      </div>
    </main>
  );
}
