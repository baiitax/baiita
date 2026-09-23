import fs from "fs";
import path from "path";
import crypto from "crypto";

export type Stage =
  | "NEW"
  | "QUALIFIED"
  | "DISCOVERY"
  | "PROPOSAL"
  | "NEGOTIATION"
  | "ACTIVE"
  | "COMPLETED";

export interface Lead {
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
  followUp?: string;
  nextAction?: string;
  booking?: { slot: string; confirmedAt: string } | null;
}

const DATA_DIR = path.join(process.cwd(), ".data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

function ensure() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(LEADS_FILE)) fs.writeFileSync(LEADS_FILE, "[]");
}

export function readLeads(): Lead[] {
  ensure();
  try {
    return JSON.parse(fs.readFileSync(LEADS_FILE, "utf8"));
  } catch {
    return [];
  }
}

export function writeLeads(leads: Lead[]) {
  ensure();
  fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2));
}

export function saveLead(lead: Lead) {
  const leads = readLeads();
  leads.unshift(lead);
  writeLeads(leads);
}

export function updateLead(id: string, patch: Partial<Lead>) {
  const leads = readLeads();
  const i = leads.findIndex((l) => l.id === id);
  if (i === -1) return null;
  leads[i] = { ...leads[i], ...patch };
  writeLeads(leads);
  return leads[i];
}

/* ---------------- classification & scoring ---------------- */

const intentClassification: Record<string, string> = {
  "Build a digital product": "TECHNOLOGY",
  "Automate a business": "AUTOMATION",
  "Improve operations": "AUTOMATION",
  "Enter a new market": "STRATEGY",
  "Export from Africa": "EXPORT",
  "Enter Saudi/GCC markets": "EXPORT",
  "Build fintech infrastructure": "FINTECH",
  "Build a real-estate platform": "REAL ESTATE",
  "Need technical architecture": "TECHNOLOGY",
  "Need product strategy": "STRATEGY",
  "Need business-gap analysis": "STRATEGY",
  "Strategic partnership": "PARTNERSHIP",
  Other: "VENTURE",
};

export function classifyIntent(intent: string): string {
  return intentClassification[intent] ?? "STRATEGY";
}

const budgetScore: Record<string, number> = {
  "Under $5k": 5,
  "$5k – $15k": 12,
  "$15k – $50k": 20,
  "$50k – $150k": 25,
  "$150k+": 25,
  "To be discussed": 10,
};

const timelineScore: Record<string, number> = {
  "Immediately": 20,
  "Within 1 month": 18,
  "1–3 months": 14,
  "3–6 months": 10,
  "Exploring / no fixed timeline": 5,
};

const roleScore: Record<string, number> = {
  "Founder / Owner": 15,
  "Executive / Director": 13,
  "Manager": 8,
  "Team member": 4,
  "Advisor / Consultant": 6,
  Other: 4,
};

export function scoreLead(input: {
  problem: string;
  situation: string;
  outcome: string;
  budget: string;
  timeline: string;
  role: string;
  intent: string;
}): { score: number; priority: Lead["priority"] } {
  let score = 0;

  // Problem clarity — length & specificity heuristics
  const clarity =
    (input.problem.length > 60 ? 10 : input.problem.length > 20 ? 6 : 2) +
    (input.outcome.length > 40 ? 8 : input.outcome.length > 15 ? 5 : 2);
  score += clarity;

  // Project maturity — situation depth
  score += input.situation.length > 80 ? 12 : input.situation.length > 30 ? 8 : 4;

  score += budgetScore[input.budget] ?? 8;
  score += timelineScore[input.timeline] ?? 8;
  score += roleScore[input.role] ?? 5;

  // Business relevance — alignment with core domains
  const cls = classifyIntent(input.intent);
  score += ["FINTECH", "EXPORT", "TECHNOLOGY", "AUTOMATION"].includes(cls)
    ? 10
    : 7;

  const priority: Lead["priority"] =
    score >= 70 ? "HIGH" : score >= 50 ? "MEDIUM" : "STANDARD";
  return { score, priority };
}

export function makeReference(classification: string): string {
  const seq = crypto.randomBytes(2).toString("hex").toUpperCase();
  const y = new Date().getFullYear();
  return `MB-${y}-${classification.slice(0, 3)}-${seq}`;
}

export function makeId(): string {
  return crypto.randomUUID();
}
