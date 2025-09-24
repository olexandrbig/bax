"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function LoginPage() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const errRef = useRef<HTMLDivElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const password = String(fd.get("password") || "");

    if (password === "bax123") {
      setError(null);
      router.push("/app/overview");
      return;
    }

    setError("Invalid password. Please contact administrator to proceed.");

    queueMicrotask(() => errRef.current?.focus());
  };

  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      <div className="hidden lg:block border-r bg-muted/30 bg-[url(/hero-login.png)] bg-cover mt-[-70px]">
        <div className="h-full w-full flex items-center justify-center p-8">
        </div>
      </div>

      <div className="flex items-center justify-center p-6">
        <div className="mx-auto w-full max-w-sm space-y-6">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="BAX Consulting"
            />
          </div>
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight">Welcome back</h1>
            <p className="text-sm text-muted-foreground">
              Enter your credentials to access your account.
            </p>
          </div>

          {error && (
            <Alert
              ref={errRef}
              tabIndex={-1}
              variant="destructive"
              className="outline-none"
            >
              <AlertTitle>Authentication failed</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                {/*<Link*/}
                {/*  href="#"*/}
                {/*  className="text-xs text-muted-foreground hover:underline"*/}
                {/*>*/}
                {/*  Forgot password?*/}
                {/*</Link>*/}
              </div>
              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="••••••••"
                aria-invalid={Boolean(error) || undefined}
                className="w-full rounded-md border bg-background px-3 py-2 text-sm outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-ring data-[invalid=true]:border-destructive"
                data-invalid={Boolean(error)}
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
