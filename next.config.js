/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    domains: ["cdnb.artstation.com"],
  },
};

module.exports = nextConfig;
