import Image from "next/image";

type ServiceItem = { name: string; text: string };
type ServiceGroup = { title?: string; intro?: string; items?: ServiceItem[] };
type Service = { title: string; icon: string; intro: string; groups: ServiceGroup[] };

const SERVICES: Service[] = [
  {
    title: "BIRD consulting services",
    icon: "/service-3.png",
    intro:
      "Our team of BIRD experts actively builds BIRD-based semantic data layers. We apply the experience gained from building our own BIRD data layer, the BAX Platform, to the benefit of our clients:",
    groups: [
      {
        items: [
          {
            name: "BIRD source integration",
            text: "We integrate your existing data sources, from in-house systems and third-party vendors such as SAP, Temenos and others, and map their data into the BIRD model. Drawing on our experience, we use ready-made connectors and data mappings to integrate systems faster and at high quality."
          },
          {
            name: "BIRD data modelling",
            text: "We help you build your own BIRD-native data layer, from the Input Layer (IL) all the way to the Reference Output Layer (ROL) and beyond. With a deep understanding of all aspects of BIRD, we help you implement your data layer seamlessly."
          },
          {
            name: "BIRD deployment",
            text: "Thanks to our platform-specific accelerator packs, rolling out BIRD on data platforms such as Snowflake, Databricks or Oracle is quick and easy."
          },
          {
            name: "BIRD testing",
            text: "Based on years of BIRD implementation experience, we have developed tools that generate test data and automated test cases. They ensure that both your implementation and your data are of high quality and conform to the BIRD model."
          }
        ]
      }
    ]
  },
  {
    title: "Regulatory reporting services",
    icon: "/service-4.png",
    intro:
      "We help banks implement statistical, supervisory and resolution reporting, whether on your existing systems or on the BAX Platform.",
    groups: [
      {
        title: "Statistical reporting",
        intro:
          "Our consultants have spent decades implementing statistical reports such as AnaCredit at multiple banks. They know this complex report in every detail, as well as the related reports BSI, MIR and SHS-S, which IReF will merge into one harmonised reporting scheme. Our services include:",
        items: [
          {
            name: "IReF AnaCredit implementation",
            text: "We re-implement your existing AnaCredit report based on IReF and the BAX Platform."
          },
          {
            name: "IReF impact and gap analysis",
            text: "We compare your current AnaCredit, BSI, MIR and SHS-S processes with the IReF requirements and identify the data gaps you need to close."
          },
          {
            name: "Transition of BSI, MIR and SHS-S",
            text: "Under IReF, much of what banks report today as aggregates will be derived from granular data. We identify which data you must now deliver at granular level and how to source it."
          },
          {
            name: "Parallel run and reconciliation",
            text: "We run your legacy reports and IReF side by side and reconcile the results until you are ready to switch over."
          }
        ]
      },
      {
        title: "Supervisory reporting",
        intro:
          "We implement FINREP for you, either on your current system or as part of a new BIRD-aligned data foundation, drawing on our team's deep understanding of the FINREP framework."
      },
      {
        title: "Resolution reporting",
        intro:
          "We extend BAX beyond statistical and supervisory reporting into resolution requirements, such as Asset Encumbrance and the SRB's resolution reporting."
      }
    ]
  },
  {
    title: "Transformation and cost reduction services",
    icon: "/service-1.png",
    intro:
      "We analyse your current system landscape and provide tangible insight in the form of C-level management reports and roadmaps. These show your options for moving to a BIRD-aligned data foundation and the cost-saving potential that comes with it. Use these insights to give your CFO a strong, convincing and logical multi-year strategic roadmap and budget plans.",
    groups: []
  }
];

export function Services() {
  return (
    <section id="services" className="pt-20 bg-(--color-7)">
      <h2 className="text-3xl font-semibold text-center text-(--color-1)">
        <span className="text-(--color-4)">BAX Consulting</span> Services
      </h2>
      <p className="mx-auto mt-6 max-w-3xl px-6 text-center text-lg text-(--color-1)">
        The BAX team of experts draws on decades of regulatory reporting experience at major European banks to help
        you exceed your regulatory reporting goals. With a flexible engagement model (onsite, nearshore, remote or
        hybrid, as project delivery or staff augmentation), we adapt to the way your team works. Our consulting is
        vendor-neutral: we support your BIRD and IReF projects whether or not they use the BAX Platform.
      </p>

      <div className="mx-auto max-w-7xl px-6 pt-12 pb-16 space-y-6">
        {SERVICES.map((service) => (
          <article
            key={service.title}
            className="grid gap-8 rounded-sm border p-6 md:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] hover:border-(--color-6) hover:shadow-[0_0_20px_color-mix(in_srgb,var(--color-1)_10%,transparent)]"
          >
            <div className="space-y-4">
              <Image width={80} height={80} src={service.icon} alt="" className="w-16" />
              <h3 className="text-2xl font-semibold text-(--color-1)">{service.title}</h3>
              {service.groups.length > 0 && <p className="text-(--color-1)">{service.intro}</p>}
            </div>

            {service.groups.length === 0 && (
              <p className="self-center text-lg text-(--color-1)">{service.intro}</p>
            )}

            {service.groups.length > 0 && (
              <div className="space-y-8">
                {service.groups.map((group, i) => (
                  <div key={group.title ?? i} className="space-y-3">
                    {group.title && <h4 className="text-lg font-semibold text-(--color-4)">{group.title}</h4>}
                    {group.intro && <p className="text-(--color-1)">{group.intro}</p>}
                    {group.items && (
                      <ul className="grid gap-4 sm:grid-cols-2">
                        {group.items.map((item) => (
                          <li key={item.name} className="rounded-sm bg-(--color-8) p-4">
                            <p className="font-semibold text-(--color-1)">{item.name}</p>
                            <p className="mt-1 text-sm text-(--color-1)">{item.text}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
