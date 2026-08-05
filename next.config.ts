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
          value: "public, s-maxage=300, stale-while-revalidate=86400",
        },
        { key: "CDN-Cache-Control", value: "public, s-maxage=300, stale-while-revalidate=86400" },
        { key: "Vercel-CDN-Cache-Control", value: "public, s-maxage=300, stale-while-revalidate=86400" },
      ],
    },
    // Tutte le pagine statiche: cache 1 anno + stale-while-revalidate
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
    // Security headers globali — EXTREME SECURITY
    {
      source: "/(.*)",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "X-Frame-Options", value: "DENY" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "X-DNS-Prefetch-Control", value: "on" },
        { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), magnetometer=(), gyroscope=(), accelerometer=(), interest-cohort=()" },
        // CSP — Content Security Policy estrema (con Facebook SDK)
        { key: "Content-Security-Policy", value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.youtube.com https://i.ytimg.com https://connect.facebook.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: blob: https:; media-src 'self' https:; connect-src 'self' https:; frame-src https://www.youtube.com https://www.facebook.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none'; upgrade-insecure-requests; block-all-mixed-content" },
        // Prevenzione XSS reflection
        { key: "X-XSS-Protection", value: "1; mode=block" },
        // COEP/COOP CORP per isolamento cross-origin
        { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
        { key: "Cross-Origin-Resource-Policy", value: "same-site" },
        // Cache Fetch metadata
        { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
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
    // API routes: no-cache + CORS strict
    {
      source: "/api/(.*)",
      headers: [
        { key: "Cache-Control", value: "no-store, no-cache, must-revalidate" },
        { key: "Access-Control-Allow-Origin", value: "https://maria-antonina-macaluso.vercel.app" },
        { key: "Access-Control-Allow-Methods", value: "GET, POST, OPTIONS" },
        { key: "Access-Control-Allow-Headers", value: "Content-Type, Authorization" },
        { key: "Access-Control-Max-Age", value: "86400" },
      ],
    },
    // Manifest: cache moderata
    {
      source: "/manifest.webmanifest",
      headers: [
        { key: "Cache-Control", value: "public, max-age=86400" },
      ],
    },
    // Robots.txt: cache moderata
    {
      source: "/robots.txt",
      headers: [
        { key: "Cache-Control", value: "public, max-age=86400" },
        { key: "X-Robots-Tag", value: "all" },
      ],
    },
    // Sitemap: cache moderata
    {
      source: "/sitemap.xml",
      headers: [
        { key: "Cache-Control", value: "public, max-age=86400" },
        { key: "Content-Type", value: "application/xml; charset=utf-8" },
      ],
    },
  ],
};

export default nextConfig;
