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
    domains: ['images.unsplash.com', 'images.pixels.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Modern optimization features
  optimizeFonts: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Improved performance settings
  poweredByHeader: false,
  compress: true,
  // Static export configuration
  output: 'export',
  // Asset handling
  assetPrefix: process.env.NODE_ENV === 'production' ? '.' : '',
  // Disable server-side features for static export
  trailingSlash: true,
  // Error handling
  onError: (err) => {
    console.error('Next.js build error:', err);
  },
  // Webpack configuration
  webpack: (config, { isServer }) => {
    // Optimize production builds
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        minimize: true,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          minChunks: 1,
          maxAsyncRequests: 30,
          maxInitialRequests: 30,
          cacheGroups: {
            defaultVendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10,
              reuseExistingChunk: true,
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig; 