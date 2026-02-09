"use client";

import Link from "next/link";

export type Documentation = {
  slug: string;
  title: string;
  description?: string;
  publishedFormatted?: string;
};

export function Documentation({ items = [] }: { items: Documentation[] }) {

  return (
    <main className="flex flex-col">
      <section id="insights" className="pt-20 min-h-[calc(100vh-245px)] bg-(--color-7)">
        <h1 className="text-3xl font-semibold text-center text-(--color-1)"><span className="text-(--color-4)">BAX Consulting</span> Documentation </h1>
        <div className="mx-auto max-w-7xl px-6 pb-30 py-12 grid gap-10 items-center">
          <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-1">
            {items.map((documentation, documentationIndex) => {
              return (
                <article key={documentationIndex} className="rounded-lg border border-(--color-4) hover:border-(--color-3) overflow-hidden hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-1)_10%,transparent)]">
                  <div className="p-4 space-y-2">
                    <Link
                      href={documentation.slug ? `/documentation/${documentation.slug}` : "/"}
                    >
                      <h3 className="font-semibold text-(--color-1)">{documentation.title}</h3>
                      <p className="text-sm text-(--color-1) line-clamp-2">
                        {documentation.description}
                      </p>
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
