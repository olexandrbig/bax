import {getPosts} from '@/lib/posts';
import { Insights } from "@/components/site/insights";
import {Navbar} from "@/components/site/navbar";
import {Footer} from "@/components/site/footer";
import type {Metadata} from "next";
import Script from "next/script";

const SITE_URL = process.env.BASE_URL || "https://bax.solutions";
const PAGE_PATH = "/insights";
const NAME = "Insights";
const BRAND = "BAX Consulting";
const DESCRIPTION = "TODO: One–sentence summary of your Terms of Service page for search and link previews.";
const KEYWORDS = [
  "terms",
  "terms of service",
  "tos",
  "legal",
  "agreement",
  "conditions",
  BRAND,
]
const OG_IMAGE = "/og/icon.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${NAME} | ${BRAND}`,
    template: `%s | ${BRAND}`,
  },
  description: DESCRIPTION,
  keywords: KEYWORDS,
  applicationName: BRAND,
  authors: [{ name: BRAND, url: SITE_URL }],
  creator: BRAND,
  publisher: BRAND,
  category: "legal",
  alternates: {
    canonical: PAGE_PATH
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
      // noimageindex: true,
    },
  },
  openGraph: {
    type: "website",
    url: `${SITE_URL}${PAGE_PATH}`,
    title: `${NAME} | ${BRAND}`,
    description: DESCRIPTION,
    siteName: BRAND,
    locale: "en_US",
    images: [
      {
        url: `${SITE_URL}${OG_IMAGE}`,
        width: 1200,
        height: 630,
        alt: `${NAME} | ${BRAND}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@bax.solutions",
    creator: "@bax.solutions",
    title: `${NAME} | ${BRAND}`,
    description: DESCRIPTION,
    images: [`${SITE_URL}${OG_IMAGE}`],
  },
  manifest: "/site.webmanifest"
};

export default async function InsightsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${NAME} | ${BRAND}`,
    url: `${SITE_URL}${PAGE_PATH}`,
    inLanguage: "en",
    isPartOf: { "@type": "WebSite", name: BRAND, url: SITE_URL },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: NAME,
          item: `${SITE_URL}${PAGE_PATH}`,
        },
      ],
    },
  };
  const posts = await getPosts();

  return (
    <main className="min-h-dvh flex flex-col">
      <Navbar />
      <Insights posts={posts}></Insights>
      <Footer />
      <Script
        id="ld-json-insights"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
