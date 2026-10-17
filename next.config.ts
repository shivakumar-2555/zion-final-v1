import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 100],
  },
  // Security headers
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
        ],
      },
    ];
  },
  // Performance optimization
  compress: true,
};

export default nextConfig;

export async function redirects() {
  return [
    {
      source: '/products/post-press-finishing-machines',
      destination: '/products/finishing-processes',
      permanent: true,
    },
  ];
}
