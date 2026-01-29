import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // basePath will be set based on repository name for GitHub Pages
  // basePath: '/cursor-meetup-landing',
};

export default nextConfig;
