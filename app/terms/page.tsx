import type { Metadata } from "next";
import Script from "next/script";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

const SITE_URL = process.env.BASE_URL || "https://bax.solutions";
const PAGE_PATH = "/terms";
const NAME = "Terms of Service";
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

export default function TermsPage() {
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

  return (
    <main className="min-h-dvh">
      <Navbar />
      <section className="pt-20 min-h-[calc(100vh-245px)] bg-(--color-7)">
        <h1 className="text-3xl font-semibold text-center text-(--color-1)">
          <span className="text-(--color-4)">{BRAND}</span> Privacy &amp; Terms
        </h1>
        <div className="mx-auto max-w-5xl px-6 py-14 space-y-6">
          <p className="text-(--color-1)">
            TODO: Place your introduction to the Terms of Service here. Summarize
            what the agreement covers.
          </p>
          <p className="text-(--color-1)">
            TODO: Add sections (Acceptance of Terms, Changes, Accounts, Payments,
            Intellectual Property, Acceptable Use, Disclaimers, Limitation of
            Liability, Governing Law, Contact, etc.).
          </p>
        </div>
      </section>
      <Footer />

      <Script
        id="ld-json-terms"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
