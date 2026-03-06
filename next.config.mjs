/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['res.cloudinary.com', 'illustrations.popsy.co', 'images.unsplash.com', 'plus.unsplash.com', 'illustrations.popsy.co', 'zep-research.pockethost.io', 'icemss.pockethost.io'],
  },
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;