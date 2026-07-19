import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a fully static site to `out/` (no Node server needed at runtime).
  output: "export",
  reactStrictMode: true,
  images: {
    // Static export has no image-optimization server, so serve images as-is.
    // Required because we use next/image with remote (Unsplash) sources.
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }],
  },
};

export default nextConfig;
