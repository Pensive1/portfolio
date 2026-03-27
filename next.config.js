/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  experimental: {
    taint: true,
  },
  typedRoutes: true,
};

module.exports = nextConfig;
