import Reveal from "./Reveal";

const stages = [
  {
    t: "Technology",
    d: "It began with building — web applications, databases, interfaces. Learning that software is only as good as its structure.",
  },
  {
    t: "Automation",
    d: "Then the question changed: why are people doing what software should do? Automation revealed that most friction is process, not code.",
  },
  {
    t: "Business Systems",
    d: "Automating a broken process automates the breakage. The real work became redesigning the system around the business itself.",
  },
  {
    t: "Financial Infrastructure",
    d: "Every business system eventually touches money. Ledgers, settlement, reconciliation and liquidity became the deepest layer of the craft.",
  },
  {
    t: "Export Strategy",
    d: "Exposure to Nigerian agricultural markets opened a new lens: entire corridors of supply and demand missing their infrastructure.",
  },
  {
    t: "Cross-Border Commerce",
    d: "From Nigeria–Niger payments to Africa–GCC trade: the gaps between markets proved larger — and more valuable — than the gaps within them.",
  },
  {
    t: "Venture Architecture",
    d: "Today the practice is designing ventures as systems: rails first, products on top, partners moving the physical world.",
  },
];

export default function BrandStory() {
  return (
    <section className="py-28 lg:py-40 hairline-t">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="kicker mb-6">Personal Brand Story</p>
          <h2 className="h-display text-4xl md:text-5xl max-w-3xl">
            From Building Technology to Understanding the Businesses It Must
            Serve.
          </h2>
        </Reveal>

        <div className="mt-20 relative">
          <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-line" />
          <div className="space-y-14">
            {stages.map((s, i) => (
              <Reveal key={s.t} delay={i * 50}>
                <div
                  className={`relative grid md:grid-cols-2 gap-6 md:gap-16 items-start ${
                    i % 2 ? "" : ""
                  }`}
                >
                  <span className="absolute left-[3px] md:left-1/2 md:-translate-x-1/2 top-2 w-[9px] h-[9px] rounded-full bg-gold shadow-[0_0_14px_rgba(201,169,106,0.5)]" />
                  <div
                    className={`pl-8 md:pl-0 ${
                      i % 2
                        ? "md:order-2 md:pl-16"
                        : "md:text-right md:pr-16"
                    }`}
                  >
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold">
                      Evolution {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-3xl mt-2">{s.t}</h3>
                  </div>
                  <div
                    className={`pl-8 md:pl-0 ${
                      i % 2 ? "md:order-1 md:text-right md:pr-16" : "md:pl-16"
                    }`}
                  >
                    <p className="text-sm text-ivory-dim leading-relaxed max-w-md inline-block">
                      {s.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={100}>
          <blockquote className="mt-24 max-w-3xl mx-auto text-center font-display text-2xl md:text-3xl italic text-ivory leading-snug">
            “The journey moved from building technology to understanding the
            businesses technology must serve.”
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
