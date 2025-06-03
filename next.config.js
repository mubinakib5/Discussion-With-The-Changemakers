/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV === 'development',
  },
  // This is needed for React 19 compatibility
  experimental: {
    serverComponentsExternalPackages: [],
    esmExternals: 'loose',
  },

  // Ensure CSS modules work properly
  webpack: (config) => {
    return config;
  },
};

module.exports = nextConfig;
