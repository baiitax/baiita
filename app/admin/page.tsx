"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";

type Stage =
  | "NEW"
  | "QUALIFIED"
  | "DISCOVERY"
  | "PROPOSAL"
  | "NEGOTIATION"
  | "ACTIVE"
  | "COMPLETED";

interface Lead {
  id: string;
  reference: string;
  createdAt: string;
  intent: string;
  situation: string;
  problem: string;
  outcome: string;
  company: string;
  role: string;
  budget: string;
  timeline: string;
  name: string;
  email: string;
  phone?: string;
  classification: string;
  score: number;
  priority: "HIGH" | "MEDIUM" | "STANDARD";
  stage: Stage;
  source: string;
  notes: { at: string; text: string }[];
  nextAction?: string;
  booking?: { slot: string } | null;
}

const STAGES: Stage[] = [
  "NEW",
  "QUALIFIED",
  "DISCOVERY",
  "PROPOSAL",
  "NEGOTIATION",
  "ACTIVE",
  "COMPLETED",
];

const priorityColor = {
  HIGH: "text-emerald border-emerald/40",
  MEDIUM: "text-gold border-gold/40",
  STANDARD: "text-ivory-dim border-line-strong",
};

export default function AdminPage() {
  const [authed, setAuthed] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [selected, setSelected] = useState<Lead | null>(null);
  const [note, setNote] = useState("");
  const [filter, setFilter] = useState<string>("ALL");

  const load = useCallback(async () => {
    const res = await fetch("/api/admin/leads");
    if (res.status === 401) {
      setAuthed(false);
      return;
    }
    const data = await res.json();
    setLeads(data.leads ?? []);
    setAuthed(true);
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setLoginError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setPassword("");
      load();
    } else {
      const d = await res.json().catch(() => ({}));
      setLoginError(d.error ?? "Login failed.");
    }
  }

  async function patch(id: string, body: Record<string, unknown>) {
    const res = await fetch("/api/admin/leads", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, ...body }),
    });
    if (res.ok) {
      const { lead } = await res.json();
      setLeads((ls) => ls.map((l) => (l.id === id ? lead : l)));
      setSelected((s) => (s?.id === id ? lead : s));
    }
  }

  const stats = useMemo(() => {
    const byClass: Record<string, number> = {};
    const byStage: Record<string, number> = {};
    leads.forEach((l) => {
      byClass[l.classification] = (byClass[l.classification] ?? 0) + 1;
      byStage[l.stage] = (byStage[l.stage] ?? 0) + 1;
    });
    return { byClass, byStage, total: leads.length };
  }, [leads]);

  const visible =
    filter === "ALL" ? leads : leads.filter((l) => l.stage === filter);

  if (authed === null) {
    return (
      <div className="min-h-screen flex items-center justify-center font-mono text-xs tracking-[0.3em] uppercase text-mute">
        Loading…
      </div>
    );
  }

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <form onSubmit={login} className="card p-10 w-full max-w-sm">
          <p className="kicker mb-4">Private Environment</p>
          <h1 className="font-display text-3xl mb-8">Admin Access</h1>
          <label className="block font-mono text-[10px] tracking-[0.25em] uppercase text-mute mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="field"
            autoFocus
          />
          {loginError && (
            <p className="mt-3 text-xs text-red-400 font-mono">{loginError}</p>
          )}
          <button type="submit" className="btn btn-gold w-full justify-center mt-6">
            Enter →
          </button>
          <Link
            href="/"
            className="block text-center mt-6 font-mono text-[10px] tracking-[0.25em] uppercase text-mute hover:text-gold transition-colors"
          >
            ← Back to site
          </Link>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <header className="glass hairline-b sticky top-0 z-40">
        <div className="mx-auto max-w-[1500px] px-6 py-4 flex items-center justify-between">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-lg">Baita Intelligence</span>
            <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-gold">
              Inquiry Command Center
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-mono text-[10px] tracking-[0.25em] uppercase text-mute hover:text-gold transition-colors"
            >
              View Site
            </Link>
            <button
              onClick={async () => {
                await fetch("/api/admin/login", { method: "DELETE" });
                setAuthed(false);
              }}
              className="font-mono text-[10px] tracking-[0.25em] uppercase text-mute hover:text-red-400 transition-colors"
            >
              Log Out
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-[1500px] px-6 py-10">
        {/* overview */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-line mb-10">
          <div className="bg-ink p-6">
            <p className="metric-num !text-3xl">{stats.total}</p>
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-mute mt-1">
              Total Leads
            </p>
          </div>
          <div className="bg-ink p-6">
            <p className="metric-num !text-3xl">{stats.byStage["NEW"] ?? 0}</p>
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-mute mt-1">
              New
            </p>
          </div>
          <div className="bg-ink p-6">
            <p className="metric-num !text-3xl">
              {leads.filter((l) => l.priority === "HIGH").length}
            </p>
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-mute mt-1">
              High Priority
            </p>
          </div>
          <div className="bg-ink p-6">
            <p className="metric-num !text-3xl">
              {leads.filter((l) => l.booking).length}
            </p>
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-mute mt-1">
              Session Requests
            </p>
          </div>
          <div className="bg-ink p-6">
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-gold mb-2">
              Categories
            </p>
            <div className="flex flex-wrap gap-1.5">
              {Object.entries(stats.byClass).map(([k, v]) => (
                <span
                  key={k}
                  className="font-mono text-[9px] px-2 py-1 border border-line text-ivory-dim"
                >
                  {k} · {v}
                </span>
              ))}
              {!Object.keys(stats.byClass).length && (
                <span className="text-xs text-mute">No data yet</span>
              )}
            </div>
          </div>
        </div>

        {/* pipeline filter */}
        <div className="flex flex-wrap gap-2 mb-8">
          {["ALL", ...STAGES].map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              className={`font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-2.5 border transition-all ${
                filter === s
                  ? "border-gold/60 text-gold-bright bg-gold/[0.06]"
                  : "border-line text-ivory-dim hover:border-line-strong"
              }`}
            >
              {s}
              {s !== "ALL" && ` · ${stats.byStage[s] ?? 0}`}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* list */}
          <div className="space-y-px bg-line">
            {visible.length === 0 && (
              <div className="bg-ink p-10 text-center text-sm text-mute">
                No inquiries in this stage yet. Leads submitted through the
                contact system appear here automatically.
              </div>
            )}
            {visible.map((l) => (
              <button
                key={l.id}
                onClick={() => setSelected(l)}
                className={`w-full text-left bg-ink p-5 transition-colors hover:bg-ink-2 ${
                  selected?.id === l.id ? "!bg-ink-3" : ""
                }`}
              >
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="font-mono text-[10px] text-gold">
                    {l.reference}
                  </span>
                  <div className="flex items-center gap-2">
                    <span
                      className={`font-mono text-[9px] tracking-[0.2em] px-2 py-0.5 border ${priorityColor[l.priority]}`}
                    >
                      {l.priority}
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.2em] px-2 py-0.5 border border-line text-ivory-dim">
                      {l.stage}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-ivory">
                  {l.name}
                  {l.company && (
                    <span className="text-mute"> — {l.company}</span>
                  )}
                </p>
                <p className="text-xs text-ivory-dim mt-1 line-clamp-1">
                  {l.classification} · {l.intent} · {l.budget || "budget n/a"} ·{" "}
                  {l.timeline || "timeline n/a"}
                </p>
              </button>
            ))}
          </div>

          {/* detail */}
          <div>
            {selected ? (
              <div className="card p-8 sticky top-24">
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <p className="font-mono text-[10px] text-gold mb-1">
                      {selected.reference} · Score {selected.score}/100
                    </p>
                    <h2 className="font-display text-2xl">{selected.name}</h2>
                    <p className="text-sm text-ivory-dim mt-1">
                      {selected.email}
                      {selected.phone && ` · ${selected.phone}`}
                    </p>
                  </div>
                  <span
                    className={`font-mono text-[9px] tracking-[0.2em] px-2 py-1 border ${priorityColor[selected.priority]}`}
                  >
                    {selected.priority}
                  </span>
                </div>

                <div className="space-y-4 text-sm">
                  {[
                    ["Intent", selected.intent],
                    ["Classification", selected.classification],
                    ["Company", selected.company || "—"],
                    ["Role", selected.role || "—"],
                    ["Budget", selected.budget || "—"],
                    ["Timeline", selected.timeline || "—"],
                    ["Situation", selected.situation || "—"],
                    ["Problem", selected.problem || "—"],
                    ["Target Outcome", selected.outcome || "—"],
                    ["Session Request", selected.booking?.slot ?? "None"],
                    ["Source", selected.source],
                    [
                      "Received",
                      new Date(selected.createdAt).toLocaleString(),
                    ],
                  ].map(([k, v]) => (
                    <div key={k as string} className="grid grid-cols-3 gap-3 hairline-b pb-3">
                      <span className="font-mono text-[9px] tracking-[0.2em] uppercase text-mute pt-0.5">
                        {k as string}
                      </span>
                      <span className="col-span-2 text-ivory-dim">
                        {v as string}
                      </span>
                    </div>
                  ))}
                </div>

                {/* stage control */}
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold mt-8 mb-3">
                  Pipeline Stage
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {STAGES.map((s) => (
                    <button
                      key={s}
                      onClick={() => patch(selected.id, { stage: s })}
                      className={`font-mono text-[9px] tracking-[0.15em] px-3 py-2 border transition-all ${
                        selected.stage === s
                          ? "border-emerald/60 text-emerald bg-emerald/[0.06]"
                          : "border-line text-ivory-dim hover:border-line-strong"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>

                {/* notes */}
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-gold mt-8 mb-3">
                  Notes & History
                </p>
                <div className="space-y-2 max-h-40 overflow-y-auto thin-scroll mb-3">
                  {selected.notes.length === 0 && (
                    <p className="text-xs text-mute italic">No notes yet.</p>
                  )}
                  {selected.notes.map((n, i) => (
                    <div key={i} className="text-xs text-ivory-dim border border-line p-3">
                      <span className="font-mono text-[9px] text-mute block mb-1">
                        {new Date(n.at).toLocaleString()}
                      </span>
                      {n.text}
                    </div>
                  ))}
                </div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (note.trim()) {
                      patch(selected.id, { note });
                      setNote("");
                    }
                  }}
                  className="flex gap-2"
                >
                  <input
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="Add a note…"
                    className="field !py-2.5 text-xs"
                  />
                  <button type="submit" className="btn btn-ghost !px-4 !py-2.5">
                    Add
                  </button>
                </form>
              </div>
            ) : (
              <div className="card p-10 text-center text-sm text-mute">
                Select an inquiry to view its full intelligence profile,
                update the pipeline stage, or add follow-up notes.
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
