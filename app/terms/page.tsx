import type { Metadata } from "next";
import Script from "next/script";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";

const SITE_URL = process.env.BASE_URL || "https://bax.solutions";
const PAGE_PATH = "/terms";
const NAME = "Terms of Service";
const BRAND = "BAX Consulting";
const DESCRIPTION = "At BAX Consulting, we respect your privacy and are committed to protecting your personal information.";
const EFFECTIVE_DATE = "11 September 2026";
const CONTACT_EMAIL = "contact@bax.solutions";
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
        <h1 className="px-6 text-3xl font-semibold text-center text-(--color-1)">
          <span className="text-(--color-4)">BAX Consulting</span> Privacy Policy &amp; Terms of Service
        </h1>

        <div className="mx-auto max-w-5xl px-6 py-14 space-y-8 text-(--color-1)">

          <p><strong>Effective Date:</strong> {EFFECTIVE_DATE}</p>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Privacy Policy</h2>

            <h3 className="text-xl font-semibold">Your Privacy Matters</h3>
            <p>
              At BAX Consulting, we respect your privacy and are committed to protecting your personal information. This
              Privacy Policy explains how we collect, use, and safeguard your data.
            </p>

            <h3 className="text-xl font-semibold">Information We Collect</h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Information you provide:</strong> name, company name, business email address, phone number, and any
                details you share with us when contacting us or requesting a consultation.
              </li>
              <li>
                <strong>Information collected automatically:</strong> browser type, device information, IP address, and usage
                data, collected to help us understand and improve how our website is used.
              </li>
            </ul>

            <h3 className="text-xl font-semibold">How We Use Your Information</h3>

            <ul className="list-disc pl-6 space-y-2">
              <li>To respond to your inquiries and provide consulting services.</li>
              <li>To communicate with you about our services, proposals, or ongoing engagements.</li>
              <li>To improve our website and services.</li>
              <li>To comply with legal and regulatory obligations.</li>
            </ul>

            <h3 className="text-xl font-semibold">Sharing Your Information</h3>
            <p>
              We do not sell your personal information. We may share it with trusted service providers who support our
              operations (for example, email or hosting providers), and only under confidentiality obligations. We do not
              share your data with third parties for their own marketing purposes.
            </p>

            <h3 className="text-xl font-semibold">Cookies &amp; Tracking</h3>
            <p>
              We use cookies and similar technologies to operate and improve this website. You can manage your cookie
              preferences at any time in your browser settings.
            </p>

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

            <p>
              To exercise your GDPR rights, please contact us at{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-(--color-4) underline underline-offset-4">{CONTACT_EMAIL}</a>.
            </p>

            <hr className="border-(--color-3)/30" />
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Terms of Service</h2>

            <h3 className="text-xl font-semibold">Acceptance of Terms</h3>
            <p>
              By accessing or using this website, you agree to be bound by these Terms of Service. If you do not agree,
              please do not use the site.
            </p>

            <h3 className="text-xl font-semibold">Use of Our Website</h3>
            <p>You agree to use this website in compliance with all applicable laws and regulations. You may not:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Violate our or any third party’s intellectual property rights.</li>
              <li>Interfere with the website’s security or functionality.</li>
              <li>Use the website for unlawful purposes.</li>
            </ul>

            <h3 className="text-xl font-semibold">Consulting Engagements</h3>
            <p>
              Any consulting or implementation services provided by BAX Consulting are governed by a separate, signed
              agreement between BAX Consulting and the client. These Terms of Service apply only to your use of this website
              and do not constitute or replace any such agreement.
            </p>

            <h3 className="text-xl font-semibold">Limitation of Liability</h3>
            <p>
              BAX Consulting is not liable for any direct, indirect, or consequential damages resulting from your use of this
              website.
            </p>

            <h3 className="text-xl font-semibold">Changes to This Page</h3>
            <p>
              We may update these Terms and this Privacy Policy from time to time. Updates will be posted on this page with a
              revised effective date.
            </p>

            <h3 className="text-xl font-semibold">Contact Us</h3>
            <p>For questions about these Terms or this Privacy Policy, please contact:</p>

            <p>
              <strong>BAX Consulting</strong>
              <br />
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-(--color-4) underline underline-offset-4">{CONTACT_EMAIL}</a>
            </p>
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
