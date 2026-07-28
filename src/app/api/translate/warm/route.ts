import { NextRequest, NextResponse } from 'next/server';
export async function POST(request: NextRequest) {
  const auth = request.headers.get('authorization');
  if (auth !== `Bearer ${process.env.WARM_SECRET || 'mam-warm-2026'}`)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  return NextResponse.json({ success: true, warmed: 0, message: 'Use static JSON files in /translations/' });
}
export const runtime = 'edge';
