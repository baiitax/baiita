import Reveal from "./Reveal";

const categories: { name: string; items: string[] }[] = [
  {
    name: "Technology",
    items: [
      "Software development",
      "Full-stack development",
      "Web applications",
      "APIs",
      "Databases",
      "Authentication",
      "Dashboards",
      "Portals",
      "SaaS architecture",
      "Financial systems",
      "Automation",
    ],
  },
  {
    name: "Architecture",
    items: [
      "System architecture",
      "Data architecture",
      "Workflow architecture",
      "Financial architecture",
      "Transaction architecture",
      "API architecture",
      "Role-based systems",
      "Multi-portal architecture",
    ],
  },
  {
    name: "Strategy",
    items: [
      "Product strategy",
      "Business strategy",
      "Market strategy",
      "Export strategy",
      "Market-entry strategy",
      "Commercial strategy",
      "Digital transformation",
    ],
  },
  {
    name: "Operations",
    items: [
      "Process design",
      "Workflow optimization",
      "Operational intelligence",
      "Reconciliation",
      "Reporting",
      "Performance management",
      "Process automation",
    ],
  },
  {
    name: "Commercial",
    items: [
      "Market research",
      "Buyer discovery",
      "Supplier discovery",
      "Opportunity identification",
      "Negotiation",
      "Partnership development",
      "Commercial modelling",
    ],
  },
  {
    name: "Product",
    items: [
      "Product ideation",
      "Product architecture",
      "MVP planning",
      "Feature mapping",
      "User journeys",
      "Product workflows",
      "Platform strategy",
    ],
  },
];

export default function Skills() {
  return (
    <section className="py-28 lg:py-40 hairline-t bg-ink-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="kicker mb-6">Professional Skills</p>
          <h2 className="h-display text-4xl md:text-5xl max-w-3xl">
            Six Disciplines. One Integrated Practice.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {categories.map((c, ci) => (
            <Reveal key={c.name} delay={ci * 60} className="bg-ink-2">
              <div className="p-8 h-full hover:bg-ink-3 transition-colors group">
                <div className="flex items-baseline justify-between mb-6">
                  <h3 className="font-display text-2xl">{c.name}</h3>
                  <span className="font-mono text-[10px] text-mute group-hover:text-gold transition-colors">
                    {String(c.items.length).padStart(2, "0")} areas
                  </span>
                </div>
                <ul className="space-y-2">
                  {c.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-3 text-sm text-ivory-dim"
                    >
                      <span className="w-3 h-px bg-gold/50 shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
