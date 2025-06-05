/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    // Disable image optimization to prevent DoS
    minimumCacheTTL: 60,
    formats: ['image/avif', 'image/webp'],
  },
  reactStrictMode: true,
  swcMinify: true,
  // Prevent cache poisoning
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
  },
  // Disable server actions to prevent DoS
  experimental: {
    serverActions: false,
  },
  // Prevent information exposure
  poweredByHeader: false,
  compress: true,
};

export default nextConfig; 