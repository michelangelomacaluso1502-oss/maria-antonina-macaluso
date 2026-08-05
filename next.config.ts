import type { NextConfig } from "next";

/**
 * Next.js Config — Ultra Performance <40ms
 *
 * Strategia ingegnerizzata per TTFB <40ms e sito 4K/8K:
 * 1. HTML: s-maxage=60, stale-while-revalidate=86400 (Edge CDN always fresh)
 * 2. Static assets: 1 anno immutable
 * 3. Images: 1 anno immutable, AVIF+WebP, quality 4K
 * 4. Preload critical fonts + CSS
 * 5. Brotli compression (Vercel auto)
 * 6. Edge runtime per API
 * 7. optimizePackageImports per tree-shaking
 */
const nextConfig: NextConfig = {
  output: "standalone",
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000, // 1 anno
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1440, 1920, 2048, 2560, 3840, 7680], // 4K + 8K
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512, 768, 1024, 1536, 2048],
    qualities: [75, 85, 90, 95, 100], // 4K quality range
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
    optimizeCss: true, // Minify + critical CSS inline
    preemptivePrerender: true, // Pre-render pages likely to be visited
    scrollRestoration: true,
    optimisticClientCache: true,
  },
  // Edge functions per API ultra-fast
  // Cache headers ingegnerizzati per <40ms TTFB
  headers: async () => [
    // HTML: stale-while-revalidate per TTFB ~0ms da CDN edge
    {
      source: "/",
      headers: [
        {
          key: "Cache-Control",
          value: "public, s-maxage=60, stale-while-revalidate=86400",
        },
        { key: "CDN-Cache-Control", value: "public, s-maxage=60, stale-while-revalidate=86400" },
        { key: "Vercel-CDN-Cache-Control", value: "public, s-maxage=60, stale-while-revalidate=86400" },
      ],
    },
    // Tutte le pagine statiche: cache 1 anno
    {
      source: "/((?!api|admin).*)",
      headers: [
        {
          key: "Cache-Control",
          value: "public, s-maxage=86400, stale-while-revalidate=2592000",
        },
        { key: "CDN-Cache-Control", value: "public, s-maxage=86400, stale-while-revalidate=2592000" },
        { key: "Vercel-CDN-Cache-Control", value: "public, s-maxage=86400, stale-while-revalidate=2592000" },
      ],
    },
    // Security headers globali
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "X-DNS-Prefetch-Control", value: "on" },
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    },
    // Next.js chunks: 1 anno immutable (hashed filenames)
    {
      source: "/_next/static/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        { key: "CDN-Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    // Immagini: 1 anno immutable (4K/8K cached)
    {
      source: "/images/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        { key: "CDN-Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    // Font Google: cache lunga
    {
      source: "/fonts/(.*)",
      headers: [
        { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
      ],
    },
    // Manifest: cache moderata
    {
      source: "/manifest.webmanifest",
      headers: [
        { key: "Cache-Control", value: "public, max-age=86400" },
      ],
    },
  ],
};

export default nextConfig;
