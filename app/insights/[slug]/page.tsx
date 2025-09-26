import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import type { Metadata } from "next";
import { marked } from "marked";

export const dynamic = "error";
export const revalidate = false;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
                                         params,
                                       }: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  return {
    title: post?.title ?? "Post",
    description: post?.description,
  };
}

export default async function PostPage({
                                         params,
                                       }: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-2xl font-semibold">Not found</h1>
      </main>
    );
  }

  const html = marked.parse(post.content) as string;

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 prose prose-invert">
      <p className="text-sm text-muted-foreground">{post.publishedFormatted}</p>
      <h1 className="!mb-4">{post.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}
