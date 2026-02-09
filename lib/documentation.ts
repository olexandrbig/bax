import { promises as fs } from "fs";
import path from "path";
import { extractFrontmatter, parseFrontmatter, slugify, formatDate } from "@/lib/utils"

export type DocumentationSummary = {
  slug: string;
  title: string;
  description?: string;
  published?: string;
  publishedFormatted?: string;
};

export type Documentation = DocumentationSummary & {
  content: string;
};

const POSTS_DIR = path.join(process.cwd(), "content", "documentation");

export async function getDocumentations(): Promise<DocumentationSummary[]> {
  const entries = await fs.readdir(POSTS_DIR);
  const mdFiles = entries.filter((f) => f.endsWith(".md"));
  const posts = await Promise.all(
    mdFiles.map(async (filename) => {
      const full = await fs.readFile(path.join(POSTS_DIR, filename), "utf8");
      const fm = parseFrontmatter(full);
      const title =
        (fm.title as string) ??
        filename.replace(/\.md$/, "").replace(/[-_]/g, " ");
      const slug =
        (fm.slug as string) ?? slugify((fm.title as string) ?? filename.replace(/\.md$/, ""));
      return {
        slug,
        title,
        description: (fm.description as string) ?? undefined,
        published: (fm.publishedDate as string) ?? undefined,
        publishedFormatted: formatDate(fm.publishedDate as string),
      } satisfies DocumentationSummary;
    })
  );

  posts.sort((a, b) => {
    const ad = a.published ? +new Date(a.published) : 0;
    const bd = b.published ? +new Date(b.published) : 0;
    return bd - ad;
  });

  return posts;
}

export async function getAllSlugs() {
  const posts = await getDocumentations();
  return posts.map((p) => p.slug);
}

export async function getDocumentationBySlug(slug: string): Promise<Documentation | null> {
  const entries = await fs.readdir(POSTS_DIR);
  for (const filename of entries) {
    if (!filename.endsWith(".md")) continue;
    const full = await fs.readFile(path.join(POSTS_DIR, filename), "utf8");
    const { fmRaw, body } = extractFrontmatter(full);
    const fm = parseFrontmatter(fmRaw);
    const fileSlug =
      (fm.slug as string) ??
      slugify((fm.title as string) ?? filename.replace(/\.md$/, ""));
    if (fileSlug === slug) {
      const title =
        (fm.title as string) ??
        filename.replace(/\.md$/, "").replace(/[-_]/g, " ");
      return {
        slug: fileSlug,
        title,
        description: (fm.description as string) ?? undefined,
        published: (fm.publishedDate as string) ?? undefined,
        publishedFormatted: formatDate(fm.publishedDate as string),
        content: body.trim(),
      };
    }
  }
  return null;
}
