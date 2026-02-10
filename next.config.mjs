/** @type {import('next').NextConfig} */
const nextConfig = {
  // Image optimization configuration for Netlify
  images: {
    unoptimized: false,
    formats: ['image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
};

export default nextConfig;
