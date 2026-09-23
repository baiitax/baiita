import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Assistant from "@/components/Assistant";
import Reveal from "@/components/Reveal";
import ArchDiagram from "@/components/ArchDiagram";
import { caseStudies, getCaseStudy, statusBadgeClass } from "@/lib/projects";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return {
    title: `${cs.name} — Case Study`,
    description: cs.summary,
    openGraph: { title: `${cs.name} — ${cs.tagline}`, description: cs.summary },
  };
}

function Section({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal as="section" className="py-12 hairline-t">
      <div className="grid md:grid-cols-12 gap-6">
        <div className="md:col-span-4">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mb-1">
            {n}
          </p>
          <h2 className="font-display text-2xl md:text-3xl">{title}</h2>
        </div>
        <div className="md:col-span-8 text-ivory-dim leading-relaxed">
          {children}
        </div>
      </div>
    </Reveal>
  );
}

function List({ items, accent }: { items: string[]; accent: string }) {
  return (
    <ul className="grid sm:grid-cols-2 gap-2.5">
      {items.map((i) => (
        <li key={i} className="flex items-start gap-3 text-sm">
          <span
            className="w-2.5 h-px mt-2.5 shrink-0"
            style={{ background: accent }}
          />
          {i}
        </li>
      ))}
    </ul>
  );
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const idx = caseStudies.findIndex((c) => c.slug === slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <>
      <Nav />
      <main className="pt-28 pb-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          {/* header */}
          <Reveal>
            <Link
              href="/#projects"
              className="font-mono text-[10px] tracking-[0.25em] uppercase text-mute hover:text-gold transition-colors"
            >
              ← All Projects
            </Link>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className={`badge ${statusBadgeClass[cs.status]}`}>
                {cs.status}
              </span>
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-mute">
                {cs.domain}
              </span>
            </div>
            <h1 className="h-display text-5xl md:text-7xl mt-6">{cs.name}</h1>
            <p className="mt-4 font-mono text-xs tracking-[0.2em] uppercase text-ivory-dim">
              {cs.tagline}
            </p>
          </Reveal>

          {/* honest status banner */}
          <Reveal delay={100}>
            <div className="mt-10 card p-6 flex items-start gap-4">
              <span
                className="w-2 h-2 rounded-full mt-1.5 shrink-0"
                style={{ background: cs.accent }}
              />
              <p className="text-sm text-ivory-dim leading-relaxed">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold block mb-1.5">
                  Honest Status
                </span>
                {cs.currentStatus}
              </p>
            </div>
          </Reveal>

          <div className="mt-16">
            <Section n="01 — Overview" title="Overview">
              <p>{cs.overview}</p>
            </Section>
            <Section n="02 — Problem" title="The Problem">
              <p>{cs.problem}</p>
            </Section>
            <Section n="03 — Market" title="The Market">
              <p>{cs.market}</p>
            </Section>
            <Section n="04 — Business Gap" title="The Gap">
              <p className="border-l-2 pl-5" style={{ borderColor: cs.accent }}>
                {cs.gap}
              </p>
            </Section>
            <Section n="05 — Strategic Insight" title="The Insight">
              <p className="font-display text-xl italic text-ivory">
                {cs.insight}
              </p>
            </Section>
            <Section n="06 — Product Vision" title="The Vision">
              <p>{cs.vision}</p>
            </Section>

            {/* architecture */}
            <Reveal as="section" className="py-12 hairline-t">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mb-1">
                07 — System Architecture
              </p>
              <h2 className="font-display text-2xl md:text-3xl mb-10">
                Architecture Flow
              </h2>
              <div className="card p-8 md:p-14">
                <ArchDiagram nodes={cs.architecture} accent={cs.accent} />
              </div>
            </Reveal>

            <Section n="08 — User Ecosystem" title="The Ecosystem">
              <List items={cs.ecosystem} accent={cs.accent} />
            </Section>
            <Section n="09 — Technology" title="Technology & Modules">
              <List items={cs.technology} accent={cs.accent} />
            </Section>
            {cs.automation.length > 0 && (
              <Section n="10 — Automation" title="Automation Layer">
                <List items={cs.automation} accent={cs.accent} />
              </Section>
            )}
            <Section n="11 — Commercial Model" title="Commercial Thinking">
              <p>{cs.commercial}</p>
            </Section>

            {/* explored / designed / implemented */}
            <Reveal as="section" className="py-12 hairline-t">
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mb-1">
                12 — Current Status
              </p>
              <h2 className="font-display text-2xl md:text-3xl mb-8">
                What Was Explored, Designed & Implemented
              </h2>
              <div className="grid md:grid-cols-3 gap-px bg-line">
                {[
                  ["Explored", cs.explored],
                  ["Designed", cs.designed],
                  ["Implemented", cs.implemented],
                ].map(([title, items]) => (
                  <div key={title as string} className="bg-ink p-6">
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-ivory mb-4">
                      {title as string}
                    </p>
                    {(items as string[]).length ? (
                      <ul className="space-y-2.5">
                        {(items as string[]).map((i) => (
                          <li
                            key={i}
                            className="text-xs text-ivory-dim leading-relaxed flex gap-2.5"
                          >
                            <span
                              className="w-1 h-1 rounded-full mt-1.5 shrink-0"
                              style={{ background: cs.accent }}
                            />
                            {i}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-xs text-mute italic">
                        Nothing implemented at this stage — honestly stated.
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            <Section n="13 — Lessons" title="Lessons">
              <ul className="space-y-4">
                {cs.lessons.map((l) => (
                  <li key={l} className="font-display text-lg italic text-ivory">
                    “{l}”
                  </li>
                ))}
              </ul>
            </Section>
            <Section n="14 — Roadmap" title="Future Roadmap">
              <ol className="space-y-3">
                {cs.roadmap.map((r, i) => (
                  <li key={r} className="flex items-center gap-4 text-sm">
                    <span className="font-mono text-[10px] text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {r}
                  </li>
                ))}
              </ol>
            </Section>
          </div>

          {/* next */}
          <div className="mt-16 hairline-t pt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-mute mb-2">
                Next Case Study
              </p>
              <Link
                href={`/work/${next.slug}`}
                className="font-display text-3xl hover:text-gold-bright transition-colors"
              >
                {next.name} →
              </Link>
            </div>
            <Link href="/#contact" className="btn btn-gold">
              Start a Conversation
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <Assistant />
    </>
  );
}
