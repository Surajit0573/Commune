import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "utfs.io"
    ]
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
