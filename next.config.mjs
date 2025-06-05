/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', 
  trailingSlash: true, // Consistent URL endings
  images: {
    unoptimized: true, // Required for static exports
    minimumCacheTTL: 60, // Minimum 60s cache for images
    formats: ['image/webp'], // WebP only (smaller than AVIF for broad compatibility)
    domains: [], // Restrict image domains if applicable
  },
  reactStrictMode: true, // Safe React practices
  swcMinify: true, 
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Clickjacking protection
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff', // MIME sniffing prevention
          },
        ],
      },
      // Static assets cache longer
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  // Security headers (applied in production)
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/.well-known/security.txt',
          destination: '/security.txt',
        },
      ],
    };
  },
  // Disable unnecessary features for static export
  experimental: {
    serverActions: false, // Disabled for static export
    optimizeCss: true, // Optional: Enable if using CSS
  },
  // Prevent info exposure
  poweredByHeader: false,
  generateEtags: false, // Disable weak ETags
  compress: true, // Enable gzip/brotli
  // Optional: Enable if using Sentry or error tracking
  productionBrowserSourceMaps: false,
};

export default nextConfig;