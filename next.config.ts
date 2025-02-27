import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "2025-portfolio-project-images.s3.us-west-2.amazonaws.com",
        port: "",
        pathname: "/**", // Adjust if needed
      },
    ],
  },
};

export default nextConfig;
