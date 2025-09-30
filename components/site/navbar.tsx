"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  const [passed100vh, setPassed100vh] = useState(false);

  useEffect(() => {
    const apply = () => setPassed100vh(pathname !== "/" || window.scrollY >= window.innerHeight / 2);
    apply();
    window.addEventListener("scroll", apply, { passive: true });
    window.addEventListener("resize", apply);
    return () => {
      window.removeEventListener("scroll", apply);
      window.removeEventListener("resize", apply);
    };
  }, []);

  return (
    <header
      className={
        "sticky top-0 z-10 bg-center bg-blend-multiply duration-300" +
        (passed100vh ? " bg-(--color-3)/70 backdrop-blur-[1px]" : "")
      }
    >
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-3">
            <Image width={80} height={27} src="/logo-dark.png" alt="BAX Consulting" />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/#solutions" className="rounded-md px-3 py-2 text-sm text-(--color-7)">Solutions</Link>
            <Link href="/#services" className="rounded-md px-3 py-2 text-sm text-(--color-7)">Services</Link>
            <Link href="/insights" className="rounded-md px-3 py-2 text-sm text-(--color-7)">Insights</Link>
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
  );
}
