import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Bật chế độ Strict Mode để bắt lỗi tốt hơn
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
