"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-8 rounded bg-black dark:bg-white" />
            <span className="font-semibold text-lg">bax</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              href="/login"
              className="rounded-md px-4 py-2 text-sm font-medium border hover:bg-muted"
            >
              Login
            </Link>
            <Link
              href="/dashboard"
              className="rounded-md px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90"
            >
              Open App
            </Link>
          </nav>
        </div>
      </header>

      <section className="flex-1">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-4xl/tight sm:text-5xl/tight font-bold">
              Ship fast with a clean, modern app shell.
            </h1>
            <p className="text-muted-foreground text-lg">
              A minimal starter with a dashboard layout, authentication screen,
              and Tailwind styling. Use it as a base to build your product.
            </p>
            <div className="flex gap-3">
              <Link
                href="/dashboard"
                className="rounded-md px-5 py-3 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90"
              >
                Go to Dashboard
              </Link>
              <Link
                href="/login"
                className="rounded-md px-5 py-3 text-sm font-medium border hover:bg-muted"
              >
                Login
              </Link>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            <FeatureCard
              title="Accessible primitives"
              description="Built on proven UI patterns you can customize."
            />
            <FeatureCard
              title="Type-safe by default"
              description="TypeScript-first to keep your codebase robust."
            />
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} bax. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border p-6">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
