import Link from "next/link";
import Image from "next/image";
import { ContactUs } from "./contact-us";
import { Services } from "./services";
import { LatestInsights, type InsightCard } from "./latest-insights";
import latestInsightsJson from "@/data/latest-insights.json";

const latestInsights = latestInsightsJson as InsightCard[];

export type Post = {
  slug: string;
  title: string;
  description?: string;
  publishedFormatted?: string;
};


export function Landing({ posts = [] }: { posts: Post[] }) {
  return (
    <>
      <section className="relative flex flex-col min-h-[calc(100vh+10px)] bg-[url(/hero.png)] bg-cover bg-center mt-[-70px]">
        <div className="absolute inset-0 bg-gradient-to-b from-(--color-3)/30 via-(--color-3)/40 via-55% to-(--color-3)" />
        <div className="relative flex flex-1 min-h-[60vh] justify-center items-center pt-[70px]">
          <div className="w-1/1 space-y-6 text-center px-6">
            <h1 className="text-4xl/tight sm:text-5xl/tight font-semibold text-(--color-7)">BIRD & IReF</h1>
            <p className="text-(--color-7) text-2xl/tight mb-12">
              Consulting and Implementation services
            </p>
            <Link
              href="/#services"
              className="rounded-sm px-7 py-4 text-base font-semibold bg-transparent border border-(--color-7) text-(--color-7) hover:opacity-90"
            >
              Learn More
            </Link>
          </div>
        </div>
        <LatestInsights items={latestInsights} />
      </section>

      <Services />

      <section id="solutions" className="bg-(--color-8) pt-20">
        <h2 className="text-3xl font-semibold text-center text-(--color-4)">BAX Platform</h2>
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-1">
            <Image width={750} height={442} src="/bax_platform_diagram.svg" alt="BAX Platform diagram" className="w-full" />
          </div>
          <div className="order-2 space-y-5">
            <p className="text-(--color-1) text-2xl">
              The BAX Platform is your End-to-End solution for prudential, statistical, granular, European and local
              reporting.
            </p>
            <p className="text-(--color-1) text-2xl">
              With the ECB-issued BIRD standard at its core, the BAX Platform delivers a future-ready reporting solution
              for effortless ECB compliance.
            </p>
          </div>
        </div>
      </section>

      <ContactUs />

      {/*<section id="insights" className="pt-20 bg-(--color-7)">*/}
      {/*  <h2 className="text-3xl font-semibold text-center text-(--color-1)">*/}
      {/*    <span className="text-(--color-4)">BAX Consulting</span> Insights*/}
      {/*  </h2>*/}
      {/*  <div className="mx-auto max-w-7xl px-6 pb-30 py-12 grid gap-10 items-center">*/}
      {/*    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">*/}
      {/*      {posts.map((post, postIndex) => (*/}
      {/*        <article*/}
      {/*          key={postIndex}*/}
      {/*          className="rounded-lg border hover:border-(--color-6) overflow-hidden hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-1)_10%,transparent)]"*/}
      {/*        >*/}
      {/*          <Image*/}
      {/*            width={310}*/}
      {/*            height={176}*/}
      {/*            src="/article.png"*/}
      {/*            alt=""*/}
      {/*            className="w-full aspect-[3/2] object-cover bg-muted"*/}
      {/*          />*/}
      {/*          <div className="p-4 space-y-2">*/}
      {/*            <div className="text-xs text-(--color-2)">{post.publishedFormatted}</div>*/}
      {/*            <h3 className="font-semibold text-(--color-1)">{post.title}</h3>*/}
      {/*            <p className="text-sm text-(--color-1) line-clamp-4">{post.description}</p>*/}
      {/*            <Link*/}
      {/*              href={post.slug ? `/insights/${post.slug}` : "/"}*/}
      {/*              className="text-sm text-(--color-4) underline underline-offset-4 font-semibold"*/}
      {/*            >*/}
      {/*              Read more*/}
      {/*            </Link>*/}
      {/*          </div>*/}
      {/*        </article>*/}
      {/*      ))}*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</section>*/}

      <section className="bg-(--color-7) pt-20">
        <h2 className="text-3xl font-semibold text-center text-(--color-1)">
          <span className="text-(--color-4)">BIRD and IReF</span> consulting
        </h2>

        <div className="mx-auto max-w-5xl px-6 py-14 space-y-6">
          <p className="text-(--color-1)">
            We specialize in BIRD and IReF consulting, offering expert guidance and hands-on implementation support.
            With deep experience in regulatory reporting frameworks like CoREP, FinRep, and AnaCredit, we help financial institutions optimize their regulatory reporting processes.
            Our expertise in BIRD data engineering and our earlier experience with IReF implementation ensures accurate, efficient, and fully compliant reporting solutions.
          </p>

          {/*<details className="group">*/}
          {/*  <summary className="inline-flex items-center gap-2 text-sm text-(--color-4) font-semibold underline underline-offset-4 cursor-pointer select-none">*/}
          {/*    <span className="group-open:hidden">Read more</span>*/}
          {/*    <span className="hidden group-open:inline">Read less</span>*/}
          {/*  </summary>*/}

          {/*  <div className="mt-4 space-y-6">*/}
          {/*    <p className="text-(--color-1)">*/}
          {/*      [SEO paragraph #3] Add more relevant, keyword-rich copy about your services, industry expertise, and*/}
          {/*      differentiators. Keep it human and readable.*/}
          {/*    </p>*/}
          {/*    <p className="text-(--color-1)">*/}
          {/*      [SEO paragraph #4] Mention supported regulatory frameworks (e.g., BIRD, IReF), typical engagement models,*/}
          {/*      and measurable outcomes you deliver for clients.*/}
          {/*    </p>*/}
          {/*    <p className="text-(--color-1)">*/}
          {/*      [SEO paragraph #5] Include trust signals: security posture, compliance approach, data handling, regions served,*/}
          {/*      and integration capabilities with core systems.*/}
          {/*    </p>*/}
          {/*  </div>*/}
          {/*</details>*/}
        </div>
      </section>
    </>
  );
}
