import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

function csp() {
  const scriptSrc = [
    "'self'",
    "'unsafe-inline'",
    ...(isDev ? ["'unsafe-eval'"] : [])
  ];
  const connectSrc = [
    "'self'",
    ...(isDev ? ["ws:", "wss:"] : [])
  ];
  const directives = new Map<string, string[]>([
    ["default-src", ["'self'"]],
    ["script-src", scriptSrc],
    ["style-src", ["'self'", "'unsafe-inline'"]],
    ["img-src", ["'self'", "data:", "https:"]],
    ["font-src", ["'self'", "data:"]],
    ["connect-src", connectSrc],
    ["frame-src", ["'self'"]]
  ]);
  return Array.from(directives.entries())
    .map(([k, v]) => `${k} ${v.join(" ")}`)
    .join("; ");
}

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
  { key: "Content-Security-Policy", value: csp() }
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  typedRoutes: true,
  // typescript: { ignoreBuildErrors: true },
  // eslint: { ignoreDuringBuilds: true },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  }
};

export default nextConfig;
