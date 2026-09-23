import { NextRequest, NextResponse } from "next/server";
import { isAdmin } from "@/lib/adminAuth";
import { readLeads, updateLead, Stage } from "@/lib/leads";

const STAGES: Stage[] = [
  "NEW",
  "QUALIFIED",
  "DISCOVERY",
  "PROPOSAL",
  "NEGOTIATION",
  "ACTIVE",
  "COMPLETED",
];

export async function GET() {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return NextResponse.json({ leads: readLeads() });
}

export async function PATCH(req: NextRequest) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json().catch(() => null);
  if (!body?.id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const patch: Record<string, unknown> = {};
  if (body.stage && STAGES.includes(body.stage)) patch.stage = body.stage;
  if (typeof body.nextAction === "string")
    patch.nextAction = body.nextAction.slice(0, 300);
  if (typeof body.followUp === "string")
    patch.followUp = body.followUp.slice(0, 100);
  if (typeof body.note === "string" && body.note.trim()) {
    const leads = readLeads();
    const lead = leads.find((l) => l.id === body.id);
    if (lead) {
      patch.notes = [
        ...lead.notes,
        { at: new Date().toISOString(), text: body.note.trim().slice(0, 1000) },
      ];
    }
  }

  const updated = updateLead(body.id, patch);
  if (!updated) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  return NextResponse.json({ lead: updated });
}
