import Reveal from "./Reveal";

const expertise = [
  "Nigerian agricultural commodity markets",
  "Agro-export strategy",
  "Export-market intelligence",
  "Supplier discovery",
  "Buyer discovery",
  "Market-entry analysis",
  "Commodity sourcing",
  "Export opportunity analysis",
  "Supply-chain coordination",
  "Cross-border trade",
  "Buyer–seller coordination",
  "Commercial negotiation",
  "Market intelligence",
  "Saudi market opportunity analysis",
  "GCC market-entry thinking",
  "African-to-GCC trade corridors",
  "Export documentation workflows",
  "Trade verification",
  "Transaction orchestration",
  "Commercial relationship building",
];

const supply = [
  "Producers",
  "Aggregators",
  "Commodity availability",
  "Pricing",
  "Quality",
  "Seasonal supply",
  "Export constraints",
  "Local market structures",
  "Logistics",
];

const demand = [
  "Buyer requirements",
  "Market demand",
  "Product specifications",
  "Procurement expectations",
  "Commercial relationships",
  "Market-entry requirements",
  "Distribution opportunities",
];

export default function ExportTrade() {
  return (
    <section className="py-28 lg:py-40 hairline-t relative overflow-hidden">
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-[0.045] pointer-events-none"
        style={{
          background: "radial-gradient(circle, #3a9d78 0%, transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="kicker mb-6">Export &amp; Trade Strategy</p>
          <h2 className="h-display text-4xl md:text-6xl max-w-4xl">
            From African Supply
            <br />
            to <span className="italic text-emerald">Global Demand.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-ivory-dim leading-relaxed">
            Grounded in direct exposure to Nigerian agricultural markets and
            export opportunity analysis — and extended by strategic research
            into Saudi and GCC demand — this is the ability to read both ends
            of a trade corridor and design the infrastructure between them.
          </p>
        </Reveal>

        {/* two-sided intelligence */}
        <div className="mt-16 grid md:grid-cols-2 gap-px bg-line">
          <Reveal className="bg-ink p-8 lg:p-12">
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-emerald mb-2">
              Side A
            </p>
            <h3 className="font-display text-2xl mb-6">
              African Supply Intelligence
            </h3>
            <ul className="space-y-2.5">
              {supply.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 text-sm text-ivory-dim"
                >
                  <span className="w-1 h-1 rounded-full bg-emerald shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="bg-ink p-8 lg:p-12" delay={120}>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mb-2">
              Side B
            </p>
            <h3 className="font-display text-2xl mb-6">
              GCC Demand Intelligence
            </h3>
            <ul className="space-y-2.5">
              {demand.map((s) => (
                <li
                  key={s}
                  className="flex items-center gap-3 text-sm text-ivory-dim"
                >
                  <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        {/* expertise chips */}
        <Reveal delay={100}>
          <div className="mt-14 flex flex-wrap gap-2.5">
            {expertise.map((e) => (
              <span
                key={e}
                className="font-mono text-[10px] tracking-[0.15em] uppercase px-3.5 py-2 border border-line text-ivory-dim hover:border-emerald/50 hover:text-emerald transition-colors cursor-default"
              >
                {e}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
