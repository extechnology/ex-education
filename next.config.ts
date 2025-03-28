import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true, // Temporarily allow unoptimized images
    domains: ["server.exedu.in"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "server.exedu.in",
        pathname: "/media/**",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
    ],
  },
};

export default nextConfig;
