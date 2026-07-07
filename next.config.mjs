/** @type {import('next').NextConfig} */
const nextConfig = {
 images: {
    domains: ["res.cloudinary.com","icemss.pockethost.io","zep-research.pockethost.io","plus.unsplash.com","images.unsplash.com"],
 },
  eslint: {
    ignoreDuringBuilds: true,
  },
 
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;