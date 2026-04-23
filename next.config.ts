import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['172.15.0.73', '172.15.0.48', 'localhost'],
};

export default nextConfig;
