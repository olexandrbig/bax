import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

function csp() {
  const scriptSrc = [
    "'self'",
    "'unsafe-inline'",
    "https://*.mailerlite.com",
    ...(isDev ? ["'unsafe-eval'"] : [])
  ];
  const connectSrc = [
    "'self'",
    "https://*.mailerlite.com",
    ...(isDev ? ["ws:", "wss:"] : [])
  ];
  const directives = new Map<string, string[]>([
    ["default-src", ["'self'"]],
    ["script-src", scriptSrc],
    ["script-src-elem", ["'self'", "'unsafe-inline'", "https://*.mailerlite.com", "https://www.google.com/", "https://assets.mlcdn.com/", "https://www.gstatic.com/"]],
    ["style-src", ["'self'", "'unsafe-inline'", "https://*.mailerlite.com", "https://assets.mlcdn.com/"]],
    ["img-src", ["'self'", "data:", "https:"]],
    ["font-src", ["'self'", "data:", "https://fonts.mailerlite.com"]],
    ["connect-src", connectSrc],
    ["frame-src", ["'self'", "https://*.powerbi.com", "https://*.mailerlite.com", "https://www.google.com/"]],
    ["frame-ancestors", ["'self'", "https://*.mailerlite.com", "https://www.google.com/"]],
    ["form-action", ["'self'", "https://*.mailerlite.com"]]
  ]);
  return Array.from(directives.entries())
    .map(([k, v]) => `${k} ${v.join(" ")}`)
    .join("; ");
}

const securityHeaders = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
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
