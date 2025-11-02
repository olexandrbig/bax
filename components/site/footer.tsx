import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t bg-[url(/footer.png)] bg-cover bg-center bg-black/60 bg-blend-multiply py-6">
      <header>
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <Image width={80} height={27} src="/logo-dark.png" alt="BAX Consulting" />
            </Link>
            <nav className="hidden items-center gap-6 sm:flex">
              <Link href="/#solutions" className="rounded-md px-3 py-2 text-sm text-(--color-7)">Solutions</Link>
              <Link href="/#services" className="rounded-md px-3 py-2 text-sm text-(--color-7)">Services</Link>
              <Link href="/insights" className="rounded-md px-3 py-2 text-sm text-(--color-7)">Insights</Link>
              <Link href="/terms" className="rounded-md px-3 py-2 text-sm text-(--color-7)">Privacy & Terms</Link>
              <Link href="/impressum" className="rounded-md px-3 py-2 text-sm text-(--color-7)">Impressum</Link>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:info@bax.com" className="hidden sm:inline text-sm text-(--color-7)">info@bax.com</a>
            <a href="tel:+359000000000" className="hidden sm:inline text-sm text-(--color-7)">+359 000 000 000</a>
            <Link
              href="/#contact"
              className="rounded-sm px-6 py-1 text-base font-semibold bg-(--color-4) text-(--color-7) hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>
      <div className="mx-auto max-w-7xl px-6 text-sm text-(--color-6)">
        © {new Date().getFullYear()} BAX Consulting
        <div className="text-sm">Grosse Gallussstrasse 16-18, 60312 Frankfurt am Main 60312, Germany</div>
        <div className="text-sm">All rights reserved. Secured by SSL.</div>
      </div>
    </footer>
  );
}
