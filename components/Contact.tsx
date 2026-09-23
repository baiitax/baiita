"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const intents = [
  "Build a digital product",
  "Automate a business",
  "Improve operations",
  "Enter a new market",
  "Export from Africa",
  "Enter Saudi/GCC markets",
  "Build fintech infrastructure",
  "Build a real-estate platform",
  "Need technical architecture",
  "Need product strategy",
  "Need business-gap analysis",
  "Strategic partnership",
  "Other",
];

const budgets = [
  "Under $5k",
  "$5k – $15k",
  "$15k – $50k",
  "$50k – $150k",
  "$150k+",
  "To be discussed",
];

const timelines = [
  "Immediately",
  "Within 1 month",
  "1–3 months",
  "3–6 months",
  "Exploring / no fixed timeline",
];

const roles = [
  "Founder / Owner",
  "Executive / Director",
  "Manager",
  "Team member",
  "Advisor / Consultant",
  "Other",
];

const slots = [
  "Strategic Discovery Call — 30 min (video)",
  "Deep-Dive Consultation — 60 min (video)",
  "Written Assessment — async brief review",
];

interface Result {
  reference: string;
  classification: string;
  checklist: string[];
}

export default function Contact() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({
    intent: "",
    situation: "",
    problem: "",
    outcome: "",
    company: "",
    role: "",
    budget: "",
    timeline: "",
    name: "",
    email: "",
    phone: "",
    slot: "",
    website: "", // honeypot
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const canNext =
    step === 0
      ? !!form.intent
      : step === 1
        ? form.situation.trim().length > 0 && form.problem.trim().length > 0
        : step === 2
          ? !!form.budget && !!form.timeline
          : true;

  async function submit() {
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Submission failed.");
      setResult(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  }

  const stepTitles = [
    "What are you trying to build?",
    "Tell me about the situation.",
    "Scope & timing.",
    "Contact & discovery session.",
  ];

  return (
    <section id="contact" className="py-28 lg:py-40 hairline-t bg-ink-2 relative overflow-hidden">
      <div
        className="absolute bottom-0 left-1/4 w-[700px] h-[500px] rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, #c9a96a 0%, transparent 60%)" }}
      />
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="kicker mb-6">Start a Strategic Conversation</p>
              <h2 className="h-display text-4xl md:text-5xl">
                There Is a Gap Somewhere in Your Business.
                <br />
                <span className="italic text-gold-bright">
                  Let&rsquo;s Understand It.
                </span>
              </h2>
              <p className="mt-8 text-ivory-dim leading-relaxed max-w-md">
                This is not a generic contact form. It&rsquo;s a structured
                qualification flow — the same discipline applied to every
                system: understand the situation before proposing the answer.
              </p>
              <ul className="mt-10 space-y-4">
                {[
                  ["01", "Describe what you're trying to build"],
                  ["02", "Your inquiry is classified & referenced automatically"],
                  ["03", "Choose a discovery session format"],
                  ["04", "Receive a preparation checklist instantly"],
                ].map(([n, t]) => (
                  <li key={n} className="flex items-center gap-4 text-sm text-ivory-dim">
                    <span className="font-mono text-[10px] text-gold">{n}</span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="card p-8 lg:p-12">
                {result ? (
                  <div>
                    <span className="badge badge-live mb-6">Inquiry Received</span>
                    <h3 className="font-display text-3xl mb-2">
                      Reference: <span className="text-gold-bright">{result.reference}</span>
                    </h3>
                    <p className="text-sm text-ivory-dim mb-8">
                      Classified under{" "}
                      <span className="font-mono text-emerald">{result.classification}</span>.
                      {form.slot && (
                        <>
                          {" "}Requested session: <span className="text-ivory">{form.slot}</span>.
                          A confirmation follow-up will reference this inquiry.
                        </>
                      )}
                    </p>
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
                      Preparation Checklist
                    </p>
                    <ul className="space-y-3">
                      {result.checklist.map((c, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-ivory-dim">
                          <span className="w-4 h-4 border border-gold/40 shrink-0 mt-0.5 flex items-center justify-center font-mono text-[9px] text-gold">
                            {i + 1}
                          </span>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <>
                    {/* progress */}
                    <div className="flex items-center gap-2 mb-8">
                      {stepTitles.map((_, i) => (
                        <div
                          key={i}
                          className={`h-[3px] flex-1 transition-colors ${
                            i <= step ? "bg-gold" : "bg-line"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-mute mb-2">
                      Step {step + 1} of 4
                    </p>
                    <h3 className="font-display text-2xl md:text-3xl mb-8">
                      {stepTitles[step]}
                    </h3>

                    {/* honeypot */}
                    <input
                      type="text"
                      name="website"
                      value={form.website}
                      onChange={(e) => set("website", e.target.value)}
                      className="hidden"
                      tabIndex={-1}
                      autoComplete="off"
                      aria-hidden
                    />

                    {step === 0 && (
                      <div className="grid sm:grid-cols-2 gap-2">
                        {intents.map((i) => (
                          <button
                            key={i}
                            onClick={() => set("intent", i)}
                            className={`text-left text-sm px-4 py-3.5 border transition-all ${
                              form.intent === i
                                ? "border-gold/60 bg-gold/[0.07] text-ivory"
                                : "border-line text-ivory-dim hover:border-line-strong"
                            }`}
                          >
                            {i}
                          </button>
                        ))}
                      </div>
                    )}

                    {step === 1 && (
                      <div className="space-y-5">
                        <div>
                          <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-mute mb-2">
                            What is the current situation?
                          </label>
                          <textarea
                            className="field min-h-[90px]"
                            value={form.situation}
                            onChange={(e) => set("situation", e.target.value)}
                            placeholder="How does the business or idea operate today?"
                          />
                        </div>
                        <div>
                          <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-mute mb-2">
                            What is the biggest problem?
                          </label>
                          <textarea
                            className="field min-h-[90px]"
                            value={form.problem}
                            onChange={(e) => set("problem", e.target.value)}
                            placeholder="Where is the friction, cost, or missed opportunity?"
                          />
                        </div>
                        <div>
                          <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-mute mb-2">
                            What outcome are you targeting?
                          </label>
                          <textarea
                            className="field min-h-[70px]"
                            value={form.outcome}
                            onChange={(e) => set("outcome", e.target.value)}
                            placeholder="What does success look like?"
                          />
                        </div>
                      </div>
                    )}

                    {step === 2 && (
                      <div className="space-y-6">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-mute mb-2">
                              Company / Organization
                            </label>
                            <input
                              className="field"
                              value={form.company}
                              onChange={(e) => set("company", e.target.value)}
                              placeholder="Optional"
                            />
                          </div>
                          <div>
                            <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-mute mb-2">
                              Your role
                            </label>
                            <select
                              className="field"
                              value={form.role}
                              onChange={(e) => set("role", e.target.value)}
                            >
                              <option value="">Select…</option>
                              {roles.map((r) => (
                                <option key={r}>{r}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                        <div>
                          <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-mute mb-3">
                            Budget range
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {budgets.map((b) => (
                              <button
                                key={b}
                                onClick={() => set("budget", b)}
                                className={`text-xs px-4 py-2.5 border transition-all ${
                                  form.budget === b
                                    ? "border-gold/60 bg-gold/[0.07] text-ivory"
                                    : "border-line text-ivory-dim hover:border-line-strong"
                                }`}
                              >
                                {b}
                              </button>
                            ))}
                          </div>
                        </div>
                        <div>
                          <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-mute mb-3">
                            Timeline
                          </label>
                          <div className="flex flex-wrap gap-2">
                            {timelines.map((t) => (
                              <button
                                key={t}
                                onClick={() => set("timeline", t)}
                                className={`text-xs px-4 py-2.5 border transition-all ${
                                  form.timeline === t
                                    ? "border-gold/60 bg-gold/[0.07] text-ivory"
                                    : "border-line text-ivory-dim hover:border-line-strong"
                                }`}
                              >
                                {t}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {step === 3 && (
                      <div className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-mute mb-2">
                              Full name *
                            </label>
                            <input
                              className="field"
                              value={form.name}
                              onChange={(e) => set("name", e.target.value)}
                            />
                          </div>
                          <div>
                            <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-mute mb-2">
                              Email *
                            </label>
                            <input
                              type="email"
                              className="field"
                              value={form.email}
                              onChange={(e) => set("email", e.target.value)}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-mute mb-2">
                            Phone / WhatsApp
                          </label>
                          <input
                            className="field"
                            value={form.phone}
                            onChange={(e) => set("phone", e.target.value)}
                            placeholder="Optional"
                          />
                        </div>
                        <div>
                          <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-mute mb-3">
                            Request a discovery session (optional)
                          </label>
                          <div className="space-y-2">
                            {slots.map((s) => (
                              <button
                                key={s}
                                onClick={() => set("slot", form.slot === s ? "" : s)}
                                className={`w-full text-left text-sm px-4 py-3.5 border transition-all ${
                                  form.slot === s
                                    ? "border-emerald/60 bg-emerald/[0.06] text-ivory"
                                    : "border-line text-ivory-dim hover:border-line-strong"
                                }`}
                              >
                                {s}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                    {error && (
                      <p className="mt-6 text-sm text-red-400 font-mono">{error}</p>
                    )}

                    <div className="mt-10 flex items-center justify-between">
                      <button
                        onClick={() => setStep((s) => Math.max(0, s - 1))}
                        className={`btn btn-text ${step === 0 ? "invisible" : ""}`}
                      >
                        ← Back
                      </button>
                      {step < 3 ? (
                        <button
                          onClick={() => canNext && setStep((s) => s + 1)}
                          disabled={!canNext}
                          className={`btn btn-gold ${!canNext ? "opacity-40 cursor-not-allowed" : ""}`}
                        >
                          Continue →
                        </button>
                      ) : (
                        <button
                          onClick={submit}
                          disabled={submitting || !form.name || !form.email}
                          className={`btn btn-gold ${
                            submitting || !form.name || !form.email
                              ? "opacity-40 cursor-not-allowed"
                              : ""
                          }`}
                        >
                          {submitting ? "Submitting…" : "Submit Inquiry →"}
                        </button>
                      )}
                    </div>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
