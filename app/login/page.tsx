"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: validate and authenticate
    router.push("/dashboard");
  };

  const handleGoogleSignIn = () => {
    // TODO: trigger Google OAuth flow
    router.push("/dashboard");
  };

  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:block border-r bg-muted/30">
        <div className="h-full w-full flex items-center justify-center p-8">
          <AuthPreview />
        </div>
      </div>

      <div className="flex items-center justify-center p-6">
        <div className="mx-auto w-full max-w-sm space-y-6">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded bg-black dark:bg-white" />
            <span className="font-semibold">bax</span>
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground">
              Enter your credentials to access your account.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <Link
                  href="#"
                  className="text-xs text-muted-foreground hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                required
                placeholder="••••••••"
                className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Sign in
            </button>

            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full rounded-md border px-4 py-2 text-sm font-medium hover:bg-muted"
            >
              Sign in with Google
            </button>
          </form>

          <p className="text-center text-sm text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="#" className="underline underline-offset-4">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}

function AuthPreview() {
  return (
    <div className="w-full max-w-md space-y-4">
      <div className="aspect-video w-full rounded-xl border bg-background" />
      <div className="grid grid-cols-3 gap-3">
        <div className="h-16 rounded-lg border bg-background" />
        <div className="h-16 rounded-lg border bg-background" />
        <div className="h-16 rounded-lg border bg-background" />
      </div>
      <p className="text-sm text-muted-foreground">
        A modern dashboard to manage your data with ease.
      </p>
    </div>
  );
}
