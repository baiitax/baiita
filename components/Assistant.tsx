"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Msg {
  role: "user" | "assistant";
  text: string;
  actions?: { label: string; href: string }[];
}

const suggestions = [
  "What is Mujaheed's expertise?",
  "Tell me about KoriePay",
  "What is MASAR?",
  "How does he approach export strategy?",
  "How can we collaborate?",
];

export default function Assistant() {
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    {
      role: "assistant",
      text: "I'm BAITA INTELLIGENCE — Mujaheed's portfolio assistant. Ask me about his expertise, projects, export strategy or collaboration opportunities. I only answer from documented portfolio information.",
    },
  ]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 99999, behavior: "smooth" });
  }, [msgs, open]);

  async function send(text: string) {
    const q = text.trim();
    if (!q || busy) return;
    setInput("");
    setMsgs((m) => [...m, { role: "user", text: q }]);
    setBusy(true);
    try {
      const res = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: q }),
      });
      const data = await res.json();
      setMsgs((m) => [
        ...m,
        {
          role: "assistant",
          text: data.answer ?? data.error ?? "Something went wrong.",
          actions: data.actions,
        },
      ]);
    } catch {
      setMsgs((m) => [
        ...m,
        { role: "assistant", text: "Connection issue — please try again." },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {/* launcher */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 glass hairline px-5 py-3.5 group hover:border-gold/50 transition-all"
        aria-label="Open Baita Intelligence assistant"
      >
        <span className="relative flex w-2 h-2">
          <span className="absolute inline-flex w-full h-full rounded-full bg-emerald ping-soft" />
          <span className="relative inline-flex w-2 h-2 rounded-full bg-emerald" />
        </span>
        <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-ivory group-hover:text-gold transition-colors">
          Baita Intelligence
        </span>
      </button>

      {/* panel */}
      <div
        className={`fixed z-50 transition-all duration-500 glass hairline flex flex-col
          bottom-0 left-0 right-0 max-h-[80vh] rounded-t-2xl
          sm:bottom-20 sm:right-6 sm:left-auto sm:w-[400px] sm:h-[560px] sm:rounded-none
          ${open ? "translate-y-0 opacity-100 visible" : "translate-y-8 opacity-0 invisible"}`}
      >
        <div className="flex items-center justify-between px-5 py-4 hairline-b shrink-0">
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold">
              Baita Intelligence
            </p>
            <p className="text-[11px] text-mute mt-0.5">
              Grounded in documented portfolio data only
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="text-mute hover:text-ivory transition-colors text-lg px-2"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto thin-scroll p-5 space-y-4 min-h-[240px]">
          {msgs.map((m, i) => (
            <div key={i} className={m.role === "user" ? "flex justify-end" : ""}>
              <div
                className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${
                  m.role === "user"
                    ? "bg-gold/10 border border-gold/30 text-ivory"
                    : "bg-ink-3 border border-line text-ivory-dim"
                }`}
              >
                {m.text}
                {m.actions && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {m.actions.map((a) => (
                      <Link
                        key={a.label}
                        href={a.href}
                        onClick={() => setOpen(false)}
                        className="font-mono text-[9px] tracking-[0.2em] uppercase px-3 py-1.5 border border-gold/40 text-gold hover:bg-gold/10 transition-colors"
                      >
                        {a.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          {busy && (
            <div className="bg-ink-3 border border-line px-4 py-3 text-sm text-mute inline-block">
              Thinking…
            </div>
          )}
          {msgs.length <= 1 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="text-[11px] px-3 py-2 border border-line text-ivory-dim hover:border-gold/50 hover:text-gold transition-colors text-left"
                >
                  {s}
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="p-4 hairline-t shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about expertise, projects, strategy…"
              className="field !py-3 text-sm"
            />
            <button
              type="submit"
              className="btn btn-gold !px-4 !py-3 shrink-0"
              disabled={busy}
            >
              →
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
