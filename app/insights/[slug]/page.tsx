import { getAllSlugs, getPostBySlug } from "@/lib/posts";
import type { Metadata } from "next";
import { marked } from "marked";
import {Navbar} from "@/components/site/navbar";
import {Footer} from "@/components/site/footer";
import { RichArticle } from "@/components/site/rich-article";

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
    description: post?.description
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
      <main className="min-h-dvh flex flex-col">
        <Navbar />
        <section className="pt-20 min-h-[calc(100vh-245px)] mx-auto max-w-3xl px-6 py-16">
          <h1 className="text-2xl font-semibold">Not found</h1>
        </section>
        <Footer />
      </main>
    );
  }

  const html = marked.parse(post.content) as string;

  return (
    <main className="min-h-dvh flex flex-col ">
      <Navbar />
      <section className="min-h-[calc(100vh-245px)] bg-(--color-7) px-6 py-16 ">
        <div className="mx-auto max-w-3xl prose">
          <RichArticle html={html} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
