import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

// Security headers sent with every response.
//
// The Content-Security-Policy is limited to directives that cannot break the
// site: it stops other sites from framing the pages (clickjacking), plugin
// content and <base> hijacking. Scripts, styles and the booking iframe are not
// restricted here. Permissions-Policy turns off browser features the site never
// uses; "payment" is left alone on purpose (card payments).
const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value:
      'camera=(), microphone=(), geolocation=(), usb=(), serial=(), magnetometer=(), gyroscope=(), accelerometer=(), browsing-topics=()',
  },
  {
    key: 'Content-Security-Policy',
    value: "frame-ancestors 'self'; base-uri 'self'; object-src 'none'",
  },
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
