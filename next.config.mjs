/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        hostname: 'images.pixels.com',
      },
    ],
  },
  // Modern optimization features
  optimizeFonts: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Improved performance settings
  poweredByHeader: false,
  compress: true,
};

export default nextConfig; 