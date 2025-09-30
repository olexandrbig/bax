"use client";

import Link from "next/link";
import Image from "next/image";

export type Post = {
  slug: string;
  title: string;
  description?: string;
  publishedFormatted?: string;
};

export function Insights({ posts = [] }: { posts: Post[] }) {

  return (
    <main className="flex flex-col">
      <section id="insights" className="pt-20 min-h-[calc(100vh-245px)] bg-(--color-7)">
        <h1 className="text-3xl font-semibold text-center text-(--color-1)"><span className="text-(--color-4)">BAX Consulting</span> Insights </h1>
        <div className="mx-auto max-w-7xl px-6 pb-30 py-12 grid gap-10 items-center">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {posts.map((post, postIndex) => {
              return (
                <article key={postIndex} className="rounded-lg border hover:border-(--color-6) overflow-hidden hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-1)_10%,transparent)]">
                  <Image
                    width={310} height={176}
                    src="/article.png"
                    alt=""
                    className="w-full aspect-[3/2] object-cover bg-muted"
                  />
                  <div className="p-4 space-y-2">
                    <div className="text-xs text-(--color-2)">{post.publishedFormatted}</div>
                    <h3 className="font-semibold text-(--color-1)">{post.title}</h3>
                    <p className="text-sm text-(--color-1) line-clamp-4">
                      {post.description}
                    </p>
                    <Link
                      href={post.slug ? `/insights/${post.slug}` : "/"}
                      className="text-sm text-(--color-4) underline underline-offset-4 font-semibold"
                    >
                      Read more
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
