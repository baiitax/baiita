import Reveal from "./Reveal";

const reasons = [
  {
    t: "I Think Across Systems",
    d: "I don't isolate one feature from the business surrounding it. Every component is designed as part of the whole.",
  },
  {
    t: "I Understand Both Technology and Operations",
    d: "The product must work technically and operationally — code that ignores the workflow is a liability.",
  },
  {
    t: "I Look for the Commercial Opportunity",
    d: "Technology should create or protect economic value. If it doesn't, it's decoration.",
  },
  {
    t: "I Understand Emerging Markets",
    d: "My thinking is grounded in African markets and cross-border opportunities — where infrastructure gaps are the biggest opportunities.",
  },
  {
    t: "I Build Around Real Workflows",
    d: "Systems should reflect how people actually operate — not how a template assumes they do.",
  },
  {
    t: "I Think in Infrastructure",
    d: "I look for the underlying rails that can support many products, not one-off builds that dead-end.",
  },
];

export default function WhyMe() {
  return (
    <section className="py-28 lg:py-40 hairline-t bg-ink-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="kicker mb-6">Why Work With Me</p>
          <h2 className="h-display text-4xl md:text-5xl max-w-3xl">
            Concrete Differentiators. No Adjectives.
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
          {reasons.map((r, i) => (
            <Reveal key={r.t} delay={(i % 3) * 70} className="bg-ink-2">
              <div className="p-8 lg:p-10 h-full hover:bg-ink-3 transition-colors group relative overflow-hidden">
                <span className="font-mono text-[10px] text-mute group-hover:text-gold transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl lg:text-2xl mt-4 mb-4 leading-tight">
                  {r.t}
                </h3>
                <p className="text-sm text-ivory-dim leading-relaxed">{r.d}</p>
                <div className="absolute bottom-0 left-0 w-0 h-px bg-gold group-hover:w-full transition-all duration-700" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
