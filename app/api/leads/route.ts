import { NextRequest, NextResponse } from "next/server";
import {
  classifyIntent,
  makeId,
  makeReference,
  saveLead,
  scoreLead,
  Lead,
} from "@/lib/leads";
import { rateLimit } from "@/lib/rateLimit";

function clean(v: unknown, max = 2000): string {
  if (typeof v !== "string") return "";
  return v.replace(/<[^>]*>/g, "").trim().slice(0, max);
}

export async function POST(req: NextRequest) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "local";
  if (!rateLimit(`leads:${ip}`, 5, 60_000)) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a moment." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  // Honeypot anti-spam: bots fill hidden field
  if (clean(body.website)) {
    return NextResponse.json({ ok: true, reference: "MB-OK" });
  }

  const intent = clean(body.intent, 100);
  const name = clean(body.name, 120);
  const email = clean(body.email, 160);

  if (!intent || !name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please provide your intent, name and a valid email." },
      { status: 400 }
    );
  }

  const situation = clean(body.situation);
  const problem = clean(body.problem);
  const outcome = clean(body.outcome);
  const budget = clean(body.budget, 60);
  const timeline = clean(body.timeline, 60);
  const role = clean(body.role, 60);

  const classification = classifyIntent(intent);
  const { score, priority } = scoreLead({
    problem,
    situation,
    outcome,
    budget,
    timeline,
    role,
    intent,
  });
  const reference = makeReference(classification);

  const lead: Lead = {
    id: makeId(),
    reference,
    createdAt: new Date().toISOString(),
    intent,
    situation,
    problem,
    outcome,
    company: clean(body.company, 160),
    role,
    budget,
    timeline,
    name,
    email,
    phone: clean(body.phone, 40),
    classification,
    score,
    priority,
    stage: "NEW",
    source: clean(body.source, 60) || "portfolio",
    notes: [],
    nextAction: "Review inquiry and confirm discovery session",
    booking: body.slot
      ? { slot: clean(body.slot, 80), confirmedAt: new Date().toISOString() }
      : null,
  };

  saveLead(lead);

  return NextResponse.json({
    ok: true,
    reference,
    classification,
    checklist: [
      "Prepare a short description of how the business currently operates",
      "List the top 3 points of friction or cost you experience",
      "Gather any existing documents, spreadsheets or tools involved",
      "Identify who the decision-makers for this initiative are",
      "Think about what a successful outcome looks like in 6–12 months",
    ],
  });
}
