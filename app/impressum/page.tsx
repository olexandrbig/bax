import type { Metadata } from "next";
import {Navbar} from "@/components/site/navbar";
import {Footer} from "@/components/site/footer";
import Script from "next/script";

const SITE_URL = process.env.BASE_URL || "https://bax.solutions";
const PAGE_PATH = "/impressum";
const NAME = "Impressum";
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

export default function ImpressumPage() {
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
        <h1 className="text-3xl font-semibold text-center text-(--color-1)"><span className="text-(--color-4)">BAX Consulting</span> Impressum </h1>
        <div className="mx-auto max-w-5xl px-6 py-14 space-y-6">
          <p className="text-(--color-1)">
            We provide comprehensive software and consulting solutions tailored specifically for the banking sector.
            Our expertise enables financial institutions to enhance their operational efficiency, improve customer
            experiences, and navigate the complexities of regulatory compliance. By leveraging advanced technology and
            industry insights, we empower banks to innovate and stay competitive in a rapidly evolving market.
          </p>
          <p className="text-(--color-1)">
            Software and consulting solutions tailored for BIRD and IReF are designed to enhance operational efficiency and
            drive innovation. By focusing on customized solutions, the aim is to facilitate growth and improve overall
            performance in a competitive landscape.
          </p>
        </div>
      </section>
      <Footer />
      <Script
        id="ld-json-impressum"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
