import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  sassOptions: {
    quietDeps: true,
  },
  allowedDevOrigins: ["10.10.10.108"],
};

export default nextConfig;
