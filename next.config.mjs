/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pixels.com',
      },
    ],
    unoptimized: true,
  },
  // Modern optimization features
  optimizeFonts: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Improved performance settings
  poweredByHeader: false,
  compress: true,
  // Add output configuration for static export
  output: 'export',
  // Ensure proper asset handling
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
  // Disable server-side features for static export
  trailingSlash: true,
  // Ensure proper image optimization
  images: {
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
};

export default nextConfig; 