import Link from "next/link";
import Image from "next/image";
import { ContactUs } from "./contact-us";

export type Post = {
  slug: string;
  title: string;
  description?: string;
  publishedFormatted?: string;
};


export function Landing({ posts = [] }: { posts: Post[] }) {
  return (
    <>
      <section className="flex-1 flex min-h-[calc(100vh+10px)] justify-center items-center bg-[url(/hero.png)] bg-black/20 bg-blend-multiply bg-cover mt-[-70px]">
        <div>
          <div className="w-1/1 space-y-6 text-center">
            <h1 className="text-4xl/tight sm:text-5xl/tight font-semibold text-(--color-7)">BAX Consulting</h1>
            <p className="text-(--color-7) text-2xl/tight mb-12">
              Streamlining regulatory reporting with BIRD and IReF
            </p>
            <Link
              href="/#solutions"
              className="rounded-sm px-7 py-4 text-base font-semibold bg-transparent border border-(--color-7) text-(--color-7) hover:opacity-90"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section id="solutions" className="bg-(--color-8) pt-20">
        <h2 className="text-3xl font-semibold text-center text-(--color-4)">BAX Platform</h2>
        <div className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div className="order-1">
            <Image width={644} height={366} src="/graph.png" alt="BAX Platform screenshot" className="w-full" />
          </div>
          <div className="order-2 space-y-5">
            <p className="text-(--color-1) text-2xl">
              The BAX Platform is your End-to-end solution for prudential, statistical, granular, European and local
              reporting.
            </p>
            <p className="text-(--color-1) text-2xl">
              With the ECB-issued BIRD standard at its core, the BAX Platform delivers a future-ready reporting solution
              for effortless ECB compliance.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="pt-20 bg-(--color-7)">
        <h2 className="text-3xl font-semibold text-center text-(--color-1)">
          <span className="text-(--color-4)">BAX Consulting</span> Services
        </h2>
        <div className="mx-auto max-w-7xl px-6 pt-8 pb-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ServiceCard
              title="Cost Reduction Assessment"
              index={0}
              description="A cost reduction assessment is a systematic evaluation of a business's expenses to identify inefficiencies, waste, and areas for optimization, aiming to lower per-unit costs and improve overall profitability without sacrificing quality. It involves analyzing data to pinpoint opportunities for savings in procurement, operations, and overhead, then implementing and monitoring a plan to achieve sustainable, long-term cost reduction."
            />
            <ServiceCard
              title="Transformation Roadmap"
              index={1}
              description="A transformation roadmap is a strategic, step-by-step plan that guides an organization through a significant change by outlining goals, initiatives, timelines, and required resources to move from its current state to a desired future state. It serves as a blueprint for achieving business objectives by integrating new technologies and processes, ensuring that efforts are aligned, measurable, and effectively managed."
            />
            <ServiceCard
              title="BIRD Advisory"
              index={2}
              description="The Banks' Integrated Reporting Dictionary (BIRD) is a voluntary, collaborative initiative led by the European Central Bank (ECB) that provides banks with a standardized data model and transformation rules to simplify regulatory reporting and reduce the reporting burden."
            />
            <ServiceCard
              title="IReF Advisory"
              index={3}
              description="The Integrated Reporting Framework (IRF) provides organizations with a structured approach to preparing integrated reports that go beyond traditional financial reporting. The IRF identifies information to be included in an integrated report for use in assessing an organization's ability to create value."
            />
          </div>
        </div>
      </section>

      <ContactUs />

      <section id="insights" className="pt-20 bg-(--color-7)">
        <h2 className="text-3xl font-semibold text-center text-(--color-1)">
          <span className="text-(--color-4)">BAX Consulting</span> Insights
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-30 py-12 grid gap-10 items-center">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {posts.map((post, postIndex) => (
              <article
                key={postIndex}
                className="rounded-lg border hover:border-(--color-6) overflow-hidden hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-1)_10%,transparent)]"
              >
                <Image
                  width={310}
                  height={176}
                  src="/article.png"
                  alt=""
                  className="w-full aspect-[3/2] object-cover bg-muted"
                />
                <div className="p-4 space-y-2">
                  <div className="text-xs text-(--color-2)">{post.publishedFormatted}</div>
                  <h3 className="font-semibold text-(--color-1)">{post.title}</h3>
                  <p className="text-sm text-(--color-1) line-clamp-4">{post.description}</p>
                  <Link
                    href={post.slug ? `/insights/${post.slug}` : "/"}
                    className="text-sm text-(--color-4) underline underline-offset-4 font-semibold"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-(--color-7)">
        <h2 className="text-3xl font-semibold text-center text-(--color-1)">
          <span className="text-(--color-4)">BAX Consulting</span> SEO text
        </h2>

        <div className="mx-auto max-w-5xl px-6 py-14 space-y-6">
          <p className="text-(--color-1)">
            We provide comprehensive software and consulting solutions tailored specifically for the banking sector. Our
            expertise enables financial institutions to enhance their operational efficiency, improve customer
            experiences, and navigate the complexities of regulatory compliance. By leveraging advanced technology and
            industry insights, we empower banks to innovate and stay competitive in a rapidly evolving market.
          </p>
          <p className="text-(--color-1)">
            Software and consulting solutions tailored for BIRD and IReF are designed to enhance operational efficiency
            and drive innovation. By focusing on customized solutions, the aim is to facilitate growth and improve overall
            performance in a competitive landscape.
          </p>

          <details className="group">
            <summary className="inline-flex items-center gap-2 text-sm text-(--color-4) font-semibold underline underline-offset-4 cursor-pointer select-none">
              <span className="group-open:hidden">Read more</span>
              <span className="hidden group-open:inline">Read less</span>
            </summary>

            <div className="mt-4 space-y-6">
              <p className="text-(--color-1)">
                [SEO paragraph #3] Add more relevant, keyword-rich copy about your services, industry expertise, and
                differentiators. Keep it human and readable.
              </p>
              <p className="text-(--color-1)">
                [SEO paragraph #4] Mention supported regulatory frameworks (e.g., BIRD, IReF), typical engagement models,
                and measurable outcomes you deliver for clients.
              </p>
              <p className="text-(--color-1)">
                [SEO paragraph #5] Include trust signals: security posture, compliance approach, data handling, regions served,
                and integration capabilities with core systems.
              </p>
            </div>
          </details>
        </div>
      </section>
    </>
  );
}

function ServiceCard({ title, description, index }: { title: string; description: string; index: number }) {
  return (
    <div className="rounded-sm border hover:border-(--color-6) p-5 flex flex-col hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-1)_10%,transparent)]">
      <div className="text-right">
        <Image
          width={80}
          height={80}
          src={`/service-${index + 1}.png`}
          alt=""
          className="w-20 mb-4 float-right inline-block"
        />
      </div>
      <h3 className="text-(--color-1) text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-(--color-1)">{description}</p>
    </div>
  );
}
