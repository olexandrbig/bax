import type { Metadata } from "next";
import Script from "next/script";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

const SITE_URL = process.env.BASE_URL || "https://bax.solutions";
const PAGE_PATH = "/terms";
const NAME = "Terms of Service";
const BRAND = "BAX Consulting";
const DESCRIPTION = "At BAX, we respect your privacy and are committed to protecting your personal information";
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
          <span className="text-(--color-4)">BAX Consulting</span> Privacy &amp; Terms
        </h1>

        <div className="mx-auto max-w-5xl px-6 py-14 space-y-8 text-(--color-1)">

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Privacy Policy</h2>

            <p><strong>Effective Date: 1.7.2025</strong></p>

            <p><strong>Your Privacy Matters</strong></p>
            <p>
              At BAX, we respect your privacy and are committed to protecting your personal information. This Privacy Policy
              explains how we collect, use, and safeguard your data.
            </p>

            <h3 className="text-xl font-semibold">Information We Collect</h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Personal Information:</strong> Name, email address, phone number, billing information, etc., that you
                provide when signing up or making a purchase.
              </li>
              <li>
                <strong>Non-Personal Information:</strong> Browser type, device information, IP address, and usage data
                collected automatically to improve our services.
              </li>
            </ul>

            <h3 className="text-xl font-semibold">How We Use Your Information</h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>To provide and improve our services.</li>
              <li>To communicate with you regarding updates, offers, or support.</li>
              <li>To personalize your experience on our website.</li>
              <li>To comply with legal obligations.</li>
            </ul>

            <h3 className="text-xl font-semibold">Sharing Your Information</h3>
            <p>We do not sell your personal information.</p>

            <h3 className="text-xl font-semibold">Cookies &amp; Tracking</h3>
            <p>
              We use cookies and similar technologies to enhance your experience. You can manage your preferences in your
              browser settings.
            </p>

            <hr className="border-(--color-3)/30" />

            <h3 className="text-xl font-semibold">GDPR Compliance (for EU Users)</h3>

            <p>
              If you are located in the European Union, you have the following rights under the General Data Protection
              Regulation (GDPR):
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> You can request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> You can request that we correct inaccurate or incomplete data.</li>
              <li><strong>Erasure (“Right to be Forgotten”):</strong> You can request deletion of your personal data.</li>
              <li><strong>Restriction &amp; Objection:</strong> You may limit or object to our processing of your data.</li>
              <li><strong>Data Portability:</strong> You can request your personal data in a structured, commonly used format.</li>
            </ul>

            <p>To exercise your GDPR rights, please contact us at <a href="mailto:gdpr@bax.com" target="_blank">gdpr@bax.com</a></p>

            <hr className="border-(--color-3)/30" />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Terms of Service</h2>

            <p><strong>Acceptance of Terms</strong></p>
            <p>
              By accessing or using <a href="mailto:www.bax.com" target="_blank">www.bax.com</a>, you agree to be bound by these Terms of Service. If you do not agree, please
              do not use our site.
            </p>

            <p><strong>Use of Our Services</strong></p>
            <p>You agree to use our website in compliance with all applicable laws and regulations. You may not:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Violate intellectual property rights.</li>
              <li>Interfere with website security or functionality.</li>
              <li>Use our services for unlawful purposes.</li>
            </ul>

            <p><strong>Account Responsibility</strong></p>
            <p>
              If you create an account, you are responsible for maintaining the confidentiality of your login information and
              for all activities under your account.
            </p>

            <p><strong>Limitation of Liability</strong></p>
            <p>
              BAX is not liable for any direct, indirect, or consequential damages resulting from your use of our website or
              services.
            </p>

            <p><strong>Changes to Terms</strong></p>
            <p>
              We may update these Terms and Privacy Policy from time to time. Updates will be posted on this page with a
              revised effective date.
            </p>

            <p><strong>Contact Us</strong></p>
            <p>For questions about these Terms or Privacy Policy, please contact:</p>

            <p>BAX Consulting</p>
            <p><a href="mailto:contact@bax.com" target="_blank">contact@bax.com</a></p>

            <hr className="border-(--color-3)/30" />
          </div>
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
