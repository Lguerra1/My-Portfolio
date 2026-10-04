import type { NextConfig } from "next";

// Static export: the site builds to plain HTML in /out, which Netlify serves directly.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
