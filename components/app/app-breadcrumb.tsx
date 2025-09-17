"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbSeparator,
  BreadcrumbLink,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import type { Route } from "next";

type Dict = Record<string, string>;

function humanize(input: string) {
  let s = "";
  try {
    s = decodeURIComponent(input);
  } catch {
    s = input;
  }
  s = s
    .replace(/^\[(.+)\]$/, "$1")
    .replace(/[-_]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2");

  return s
    .split(" ")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

function normalize(p: string) {
  if (!p) return "/";
  const noQs = p.split("?")[0].split("#")[0];
  return noQs.replace(/\/+$/g, "") || "/";
}

export function AppBreadcrumb({
  base = "/app",
  dict = {},
  hideRoot = true,
}: {
  base?: string;
  dict?: Dict;
  hideRoot?: boolean;
}) {
  const pathname = normalize(usePathname() || "/");
  const baseNorm = normalize(base);

  const parts = pathname.split("/").filter(Boolean);
  const baseCount = baseNorm === "/" ? 0 : baseNorm.split("/").filter(Boolean).length;
  const tail = parts.slice(baseCount);

  if (tail.length === 0 && hideRoot) return null;

  const prefix = baseNorm === "/" ? "" : baseNorm;
  let acc = prefix;
  const items = (hideRoot ? tail : parts).map((seg, idx, arr) => {
    acc += `/${seg}`;
    const fullPathKey = acc;
    const label = dict[fullPathKey] ?? dict[seg] ?? humanize(seg);
    const isLast = idx === arr.length - 1;

    return { href: fullPathKey, label, isLast };
  });

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {items.map((it, i) => (
          <span key={it.href} className="inline-flex items-center">
            <BreadcrumbItem>
              {it.isLast ? (
                <BreadcrumbPage>{it.label}</BreadcrumbPage>
              ) : (
                <BreadcrumbLink asChild>
                  <Link href={it.href as Route} aria-current={it.isLast ? "page" : undefined} className="text-2xl font-semibold tracking-tight">
                    {it.label}
                  </Link>
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {i < items.length - 1 ? <BreadcrumbSeparator /> : null}
          </span>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
