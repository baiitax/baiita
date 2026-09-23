import Reveal from "./Reveal";

const ventures: { name: string; status: string; badge: string; desc: string }[] =
  [
    {
      name: "KoriePay Ecosystem",
      status: "ARCHITECTURE",
      badge: "badge-arch",
      desc: "Nigeria ↔ Niger cross-border financial rail — ledger-first multi-portal ecosystem design.",
    },
    {
      name: "MASAR Trade OS",
      status: "RESEARCH",
      badge: "badge-research",
      desc: "Africa → GCC transaction-first trade infrastructure. Beachhead: premium Nigerian non-GMO sesame.",
    },
    {
      name: "KGM Cinematic Studio OS",
      status: "PROTOTYPE",
      badge: "badge-proto",
      desc: "AI-powered cinematic property media pipeline: upload → analyze → sequence → motion → master → export.",
    },
    {
      name: "KGM Property Workflows",
      status: "ACTIVE BUILD",
      badge: "badge-dev",
      desc: "Digitally coordinated Saudi property advisory, brokerage, management and yield workflows.",
    },
    {
      name: "Pluck Agro ERP",
      status: "ARCHITECTURE",
      badge: "badge-arch",
      desc: "Processing-and-export ERP designed from real operational sheets: stock, credit, production log, payables, bank position.",
    },
    {
      name: "Chambers Polo Smart Estate",
      status: "CONCEPT",
      badge: "badge-concept",
      desc: "Premium land visualization: 420 sqm plot mapping, villa positioning, aerial overlays, Sultan Road orientation.",
    },
    {
      name: "NEIS Ecosystem Mapping",
      status: "RESEARCH",
      badge: "badge-research",
      desc: "Public information-system analysis: platform relationships, journeys, workflow mapping, improvement opportunities.",
    },
    {
      name: "Operational Automation Concepts",
      status: "IDEA",
      badge: "badge-concept",
      desc: "A rolling lab of business-process automation and operational-intelligence system concepts across industries.",
    },
  ];

export default function VentureLab() {
  return (
    <section id="venture-lab" className="py-28 lg:py-40 hairline-t bg-ink-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="kicker mb-6">Experimental Products &amp; Emerging Ideas</p>
          <h2 className="h-display text-4xl md:text-6xl">The Venture Lab</h2>
          <p className="mt-8 max-w-2xl text-ivory-dim leading-relaxed">
            Not every idea is a company, and none is presented as one. The lab
            is where systems thinking is exercised across domains — each entry
            classified honestly by its true stage.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          {ventures.map((v, i) => (
            <Reveal key={v.name} delay={(i % 4) * 60} className="bg-ink-2">
              <div className="p-7 h-full min-h-[220px] flex flex-col hover:bg-ink-3 transition-colors group">
                <span className={`badge ${v.badge} self-start mb-6`}>
                  {v.status}
                </span>
                <h3 className="font-display text-xl mb-3 group-hover:text-gold-bright transition-colors">
                  {v.name}
                </h3>
                <p className="text-xs text-ivory-dim leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <p className="mt-10 font-mono text-[10px] tracking-[0.25em] uppercase text-mute">
            Classification legend: Idea · Research · Concept · Prototype ·
            Architecture · Active Build — nothing here is claimed as a launched
            company unless marked live.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
