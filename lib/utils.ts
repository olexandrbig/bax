import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(input: string) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function extractFrontmatter(src: string) {
  if (!src.startsWith("---")) return { fmRaw: "", body: src };
  const m = src.match(/^---\s*[\r\n]+([\s\S]*?)^[ \t-]{3,}\s*[\r\n]/m);
  if (!m) return { fmRaw: "", body: src };
  const fmRaw = m[1] ?? "";
  const body = src.slice(m[0].length);
  return { fmRaw, body };
}

export function parseFrontmatter(raw: string) {
  const data: Record<string, string> = {};
  raw.split(/\r?\n/).forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) return;
    const idx = trimmed.indexOf(":");
    if (idx === -1) return;
    const key = trimmed.slice(0, idx).trim();
    const val = trimmed.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
    data[key] = val;
  });
  return data;
}

export function formatDate(d?: string) {
  if (!d) return undefined;
  try {
    return new Date(d).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  } catch {
    return d;
  }
}
