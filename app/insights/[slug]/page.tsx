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
  // Two-tone title like the Terms page: the part before the first colon in brand colour.
  const colon = post.title.indexOf(":");
  const titleLead = colon > 0 ? post.title.slice(0, colon) : "";
  const titleRest = colon > 0 ? post.title.slice(colon + 1) : "";

  return (
    <main className="min-h-dvh flex flex-col ">
      <Navbar />
      <section className="pt-20 min-h-[calc(100vh-245px)] bg-(--color-7)">
        <h1 className="mx-auto max-w-5xl px-6 text-3xl font-semibold text-center text-(--color-1)">
          {titleLead ? (
            <>
              <span className="text-(--color-4)">{titleLead}:</span>
              {titleRest}
            </>
          ) : (
            post.title
          )}
        </h1>

        <div className="mx-auto max-w-5xl px-6 py-14 space-y-8 text-(--color-1)">
          {(post.publishedFormatted || post.author) && (
            <p>
              {post.publishedFormatted && (
                <>
                  <strong>Published:</strong> {post.publishedFormatted}
                </>
              )}
              {post.publishedFormatted && post.author && " · "}
              {post.author && (
                <>
                  <strong>Author:</strong> {post.author}
                </>
              )}
            </p>
          )}
          <RichArticle html={html} className="rt-insight" />
        </div>
      </section>
      <Footer />
    </main>
  );
}
