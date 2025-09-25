"use client";

export default function ImpressumPage() {

  return (
    <main className="min-h-screen grid lg:grid-cols-2">
      <section className="pt-20 bg-(--color-7)">
        <h2 className="text-3xl font-semibold text-center text-(--color-1)"><span className="text-(--color-4)">BAX Consulting</span> Impressum </h2>
        <div className="mx-auto max-w-5xl px-6 py-14 space-y-6">
          <p className="text-(--color-1)">
            We provide comprehensive software and consulting solutions tailored specifically for the banking sector.
            Our expertise enables financial institutions to enhance their operational efficiency, improve customer
            experiences, and navigate the complexities of regulatory compliance. By leveraging advanced technology and
            industry insights, we empower banks to innovate and stay competitive in a rapidly evolving market.
          </p>
          <p className="text-(--color-1)">
            Software and consulting solutions tailored for BIRD and IReF are designed to enhance operational efficiency and
            drive innovation. By focusing on customized solutions, the aim is to facilitate growth and improve overall
            performance in a competitive landscape.
          </p>
        </div>
      </section>
    </main>
  );
}
