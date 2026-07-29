import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

// Google Translate free endpoint (unofficial, public).
// We race a couple of host variants for resilience and fall back to original text.
const ENDPOINTS = [
  "https://translate.googleapis.com/translate_a/single",
  "https://clients5.google.com/translate_a/single",
];

interface TranslateBody {
  texts?: string[];
  targetLang?: string;
  sourceLang?: string;
}

async function translateOne(
  text: string,
  source: string,
  target: string,
): Promise<string> {
  const params = new URLSearchParams({
    client: "gtx",
    sl: source,
    tl: target,
    dt: "t",
    q: text,
  });
  for (const base of ENDPOINTS) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 5000);
      const res = await fetch(`${base}?${params.toString()}`, {
        signal: controller.signal,
        headers: { accept: "application/json, text/plain, */*" },
      });
      clearTimeout(timer);
      if (!res.ok) continue;
      const data = await res.json();
      // Google returns nested arrays: [ [ [translatedChunk, originalChunk, ...], ... ], ... ]
      if (Array.isArray(data) && Array.isArray(data[0])) {
        const out = data[0]
          .map((seg: unknown) => (Array.isArray(seg) ? String(seg[0] ?? "") : ""))
          .join("");
        if (out) return out;
      }
    } catch {
      // try next endpoint
    }
  }
  return text; // fallback to original
}

export async function POST(req: NextRequest) {
  const start = Date.now();
  let body: TranslateBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const texts = Array.isArray(body.texts) ? body.texts.map((t) => String(t)) : [];
  const targetLang = String(body.targetLang || "en").slice(0, 8);
  const sourceLang = String(body.sourceLang || "it").slice(0, 8);

  if (texts.length === 0) {
    return NextResponse.json({
      ok: true,
      translations: [],
      targetLang,
      sourceLang,
      count: 0,
      elapsedMs: 0,
      engine: "google-race",
      edge: true,
    });
  }

  // Max 10 texts per request.
  const batch = texts.slice(0, 10);

  try {
    const translations = await Promise.all(
      batch.map((t) => translateOne(t, sourceLang, targetLang)),
    );
    return NextResponse.json({
      ok: true,
      translations,
      targetLang,
      sourceLang,
      count: translations.length,
      elapsedMs: Date.now() - start,
      engine: "google-race",
      edge: true,
    });
  } catch (e) {
    return NextResponse.json({
      ok: true,
      translations: batch, // fallback to originals
      targetLang,
      sourceLang,
      count: batch.length,
      elapsedMs: Date.now() - start,
      engine: "google-race-fallback",
      edge: true,
      error: e instanceof Error ? e.message : "unknown",
    });
  }
}
