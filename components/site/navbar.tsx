"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import type { InsightCard } from "./latest-insights";
import insightsJson from "@/data/latest-insights.json";

const insights = insightsJson as InsightCard[];

export function Navbar() {
  const pathname = usePathname();
  const [passed100vh, setPassed100vh] = useState(false);
  const [insightsOpen, setInsightsOpen] = useState(false);
  const closeTimer = useRef<number | undefined>(undefined);

  // Mouse users get the Insights menu on hover; touch and keyboard still open it by tap/Enter.
  const openInsightsOnHover = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    window.clearTimeout(closeTimer.current);
    setInsightsOpen(true);
  };
  const closeInsightsSoon = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setInsightsOpen(false), 150);
  };

  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

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
            <Link href="/#services" className="rounded-md px-3 py-2 text-sm text-(--color-7)">Services</Link>
            <Link href="/#solutions" className="rounded-md px-3 py-2 text-sm text-(--color-7)">Solutions</Link>
            <DropdownMenu modal={false} open={insightsOpen} onOpenChange={setInsightsOpen}>
              <DropdownMenuTrigger
                onPointerEnter={openInsightsOnHover}
                onPointerLeave={closeInsightsSoon}
                onPointerDown={(e) => {
                  // Mouse users open the menu by hovering; stop the click from toggling it shut.
                  if (e.pointerType === "mouse") e.preventDefault();
                }}
                className="flex items-center gap-1 rounded-md px-3 py-2 text-sm text-(--color-7) outline-none focus-visible:ring-2 focus-visible:ring-(--color-5) data-[state=open]:[&>svg]:rotate-180">
                Insights
                <ChevronDown className="size-4 transition-transform" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                onPointerEnter={openInsightsOnHover}
                onPointerLeave={closeInsightsSoon}
                align="start" sideOffset={8} className="w-80 rounded-sm border-0 bg-(--color-7) p-2 shadow-lg">
                {insights.filter((item) => item.href).map((item) => (
                  <DropdownMenuItem key={item.href} asChild className="cursor-pointer rounded-sm p-3 focus:bg-(--color-8)">
                    <Link href={item.href as never} className="flex flex-col items-start gap-1">
                      <span className="text-xs font-semibold text-(--color-4)">
                        {item.type} · {item.date}
                      </span>
                      <span className="text-sm font-semibold text-(--color-1)">{item.title}</span>
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <a href="mailto:contact@bax.solutions" className="hidden sm:inline text-sm text-(--color-7)">contact@bax.solutions</a>
          <a href="tel:+49408668770" className="hidden sm:inline text-sm text-(--color-7)">+49 40 8668 770</a>
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
