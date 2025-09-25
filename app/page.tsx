"use client";

import Link from "next/link";

export default function LandingPage() {
  return (
    <main className="min-h-dvh flex flex-col">
      <header className="sticky top-0 z-10 bg-center bg-black/40 bg-blend-multiply">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo-dark.png"
                alt="BAX Consulting"
              />
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#solutions" className="rounded-md px-3 py-2 text-sm text-(--color-7)">Solutions</Link>
              <Link href="#services" className="rounded-md px-3 py-2 text-sm text-(--color-7)">Services</Link>
              <Link href="#insights" className="rounded-md px-3 py-2 text-sm text-(--color-7)">Insights</Link>
            </nav>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:info@bax.com" className="hidden sm:inline text-sm text-(--color-7)">info@bax.com</a>
            <a href="tel:+359000000000" className="hidden sm:inline text-sm text-(--color-7)">+359 000 000 000</a>
            <Link
              href="#contact"
              className="rounded-sm px-6 py-1 text-base font-semibold bg-(--color-4) text-(--color-7) hover:opacity-90"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      <section className="flex-1 flex min-h-[calc(100vh+10px)] justify-center items-center bg-[url(/hero.png)] bg-black/20 bg-blend-multiply bg-cover mt-[-70px]">
        <div className="">
          <div className="w-1/1 space-y-6 text-center">
            <h1 className="text-4xl/tight sm:text-5xl/tight font-semibold text-(--color-7)">
              BAX Consulting
            </h1>
            <p className="text-(--color-7) text-2xl/tight mb-12">
              Software and Consulting for BIRD and IReF
            </p>
            <Link
              href="/login"
              className="rounded-sm px-7 py-4 text-base font-semibold bg-transparent border border-(--color-7) text-(--color-7) hover:opacity-90"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section id="platform" className="bg-(--color-8) pt-20">
        <h2 className="text-3xl font-semibold text-center text-(--color-4)">BAX Platform</h2>
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-1">
            <img
              src="/graph.png"
              alt="BAX Platform screenshot"
              className="w-full object-cover bg-muted"
            />
          </div>
          <div className="order-2 space-y-5">
            <p className="text-muted-foreground">
              The BAX Platform is your
              End-to-end solution for prudential, statistical, granular, European and local reporting.
            </p>
            <p className="text-muted-foreground">
              With the ECB-issued BIRD standard at its core, the BAX Platform delivers a future-ready reporting solution for effortless ECB
              compliance.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="pt-20">
        <h2 className="text-3xl font-semibold text-center">BAX Consulting Services </h2>
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Cost Reduction Assessment"
              index={0}
              description="A cost reduction assessment is a systematic evaluation of a business's expenses to identify inefficiencies, waste, and areas for optimization, aiming to lower per-unit costs and improve overall profitability without sacrificing quality. It involves analyzing data to pinpoint opport-unities for savings in procurement, operations, and overhead, then implementing and monitoring a plan to achieve sustainable, long-term cost reduction."
            />
            <ServiceCard
              title="Transformation Roadmap"
              index={1}
              description="A transformation roadmap is a strategic, step-by-step plan that guides an organization through a significant change by outlining goals, initiatives, timelines, and required resources to move from its current state to a desired future state. It serves as a blueprint for achieving business objectives by integrating new technologies, processes ensuring that efforts  are aligned, measurable, and effectively managed. "
            />
            <ServiceCard
              title="BIRD Advisory"
              index={2}
              description="The Banks' Integrated Reporting Dictionary (BIRD) is a voluntary, collaborative initiative led by the European Central Bank (ECB) that provides banks with a standardized data model and transformation rules to simplify regulatory reporting and reduce the reporting burden. It achieves this by identifying and describing reporting concepts only once, allowing for a common 'input layer' from which various regulatory reports."
            />
            <ServiceCard
              title="IReF Advisory"
              index={3}
              description="The Integrated Reporting Framework (IRF) provides organizations with a structured approach to preparing integrated reports that go beyond traditional financial reporting. The IRF  identifies information to be included in an integrated report for use in assessing an organization's ability to create value; it does not set benchmarks for such things as the quality of an organization's strategy or the level of its performance."
            />
          </div>
        </div>
      </section>

      <section className="bg-muted/30 pt-20">
        <h2 className="text-3xl font-semibold text-center">For inquiries, please reach out to us</h2>
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">

        </div>
      </section>

      <section id="insights" className="pt-20">
        <h2 className="text-3xl font-semibold text-center">BAX Consulting Insights </h2>
        <div className="mx-auto max-w-7xl px-6 pb-30 py-12 grid gap-10 items-center">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <article key={i} className="rounded-lg border overflow-hidden">
                <img
                  src="/article.png"
                  alt=""
                  className="w-full aspect-[3/2] object-cover bg-muted"
                />
                <div className="p-4 space-y-2">
                  <div className="text-xs text-muted-foreground">18.09.25</div>
                  <h3 className="font-semibold">Cost Reduction Assessment</h3>
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    A cost reduction assessment is a systematic evaluation of a business’s expenses to identify
                    inefficiencies, waste, and areas for optimization…
                  </p>
                  <Link href="#" className="text-sm underline underline-offset-4">
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="solutions">
        <h2 className="text-3xl font-semibold text-center">BAX Consulting SEO text</h2>
        <div className="mx-auto max-w-5xl px-6 py-14 space-y-6">
          <p className="text-muted-foreground">
            We provide comprehensive software and consulting solutions tailored specifically for the banking sector.
            Our expertise enables financial institutions to enhance their operational efficiency, improve customer
            experiences, and navigate the complexities of regulatory compliance. By leveraging advanced technology and
            industry insights, we empower banks to innovate and stay competitive in a rapidly evolving market.
          </p>
          <p className="text-muted-foreground">
            Software and consulting solutions tailored for BIRD and IReF are designed to enhance operational efficiency and
            drive innovation. By focusing on customized solutions, the aim is to facilitate growth and improve overall
            performance in a competitive landscape.
          </p>
        </div>
      </section>

      <footer className="border-t bg-[url(/footer.png)] bg-cover bg-center bg-black/60 bg-blend-multiply py-6">
        <header>
          <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between gap-6">
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center gap-3">
                <img
                  src="/logo-dark.png"
                  alt="BAX Consulting"
                />
              </Link>
              <nav className="flex items-center gap-8">
                <Link href="#solutions" className="rounded-md px-3 py-2 text-sm text-(--color-7)">Solutions</Link>
                <Link href="#services" className="rounded-md px-3 py-2 text-sm text-(--color-7)">Services</Link>
                <Link href="#insights" className="rounded-md px-3 py-2 text-sm text-(--color-7)">Insights</Link>
                <Link href="#insights" className="rounded-md px-3 py-2 text-sm text-(--color-7)">Privacy & Terms</Link>
                <Link href="#insights" className="rounded-md px-3 py-2 text-sm text-(--color-7)">Impressum</Link>
              </nav>
            </div>
            <div className="flex items-center gap-3">
              <a href="mailto:info@bax.com" className="inline text-sm text-(--color-7)">info@bax.com</a>
              <a href="tel:+359000000000" className="inline text-sm text-(--color-7)">+359 000 000 000</a>
              <Link
                href="#contact"
                className="rounded-md px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:opacity-90"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </header>
        <div className="mx-auto max-w-7xl px-6 text-sm text-(--color-7)">
          © {new Date().getFullYear()} BAX Consulting.
          <div className="text-sm">
            Bulgaria, Sofia 1750, Mladost 1, 40 Boulevard &quot;Tsarigradsko shose&quot;
          </div>
          <div className="text-sm">All rights reserved. Secured by SSL.</div>
        </div>
      </footer>
    </main>
  );
}

function ServiceCard({ title, description, index }: { title: string; description: string; index: number }) {
  return (
    <div className="rounded-lg border p-5 flex flex-col">
      <div className="text-right">
        <img src={`/service-${index + 1}.png`} alt="" className="w-20 mb-4 float-right inline-block" />
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}
