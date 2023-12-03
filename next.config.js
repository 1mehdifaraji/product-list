/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    scrollRestoration: false,
  },
  env: {
    API: "https://taskapi.hiweb.ir/api",
  },
};

module.exports = nextConfig;
