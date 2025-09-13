import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  server: {
    host: "0.0.0.0",
    port: 3455,
    allowedHosts: ["localhost", "www.hyudequeue.xyz", "hyudequeue.xyz"]
  }
};

export default nextConfig;
