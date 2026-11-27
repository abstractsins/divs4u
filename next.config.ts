import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentUpgrade: "security",
  },
};

module.exports = {
  allowedDevOrigins: ["10.0.0.39"],
};

export default nextConfig;
