import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/blog", // Chuyển hướng từ trang chủ sang trang blog
        permanent: true, // 301 Redirect (SEO tốt)
      },
    ];
  },
};

export default nextConfig;
