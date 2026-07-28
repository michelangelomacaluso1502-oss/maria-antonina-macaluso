import { NextRequest, NextResponse } from 'next/server';

const MAX_TEXTS = 10;
const GOOGLE_ENDPOINT = 'https://translate.googleapis.com/translate_a/single';

async function translateSingle(text: string, source: string, target: string): Promise<string> {
  const url = `${GOOGLE_ENDPOINT}?client=gtx&sl=${source}&tl=${target}&dt=t&q=${encodeURIComponent(text)}`;
  const resp = await fetch(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36', 'Accept': 'application/json, text/plain, */*' },
    signal: AbortSignal.timeout(5000),
  });
  if (!resp.ok) throw new Error(`Google returned ${resp.status}`);
  const data = await resp.json();
  if (Array.isArray(data) && Array.isArray(data[0])) {
    return data[0].map((s: unknown) => Array.isArray(s) && typeof s[0] === 'string' ? s[0] : '').filter(Boolean).join('');
  }
  throw new Error('Unexpected response');
}

export async function POST(request: NextRequest) {
  const start = Date.now();
  try {
    const body = await request.json();
    if (!body.texts || !Array.isArray(body.texts) || body.texts.length === 0)
      return NextResponse.json({ ok: false, error: 'texts array required' }, { status: 400 });
    if (body.texts.length > MAX_TEXTS)
      return NextResponse.json({ ok: false, error: `Max ${MAX_TEXTS} texts` }, { status: 429 });
    if (!body.targetLang)
      return NextResponse.json({ ok: false, error: 'targetLang required' }, { status: 400 });

    const sourceLang = body.sourceLang || 'it';
    if (sourceLang === body.targetLang)
      return NextResponse.json({ ok: true, translations: body.texts, targetLang: body.targetLang, sourceLang, count: body.texts.length, elapsedMs: 0, engine: 'noop', edge: true });

    const translations = await Promise.all(body.texts.map(async (text: string) => {
      try {
        if (!text || text.trim().length < 2) return text;
        if (/^https?:\/\//.test(text) || /^[^\s]+@[^\s]+$/.test(text) || /^\d+$/.test(text)) return text;
        return await translateSingle(text, sourceLang, body.targetLang);
      } catch { return text; }
    }));

    return NextResponse.json({ ok: true, translations, targetLang: body.targetLang, sourceLang, count: translations.length, elapsedMs: Date.now() - start, engine: 'google-race', edge: true });
  } catch {
    return NextResponse.json({ ok: false, error: 'Translation unavailable' }, { status: 503 });
  }
}
export const runtime = 'edge';
export const dynamic = 'force-dynamic';
