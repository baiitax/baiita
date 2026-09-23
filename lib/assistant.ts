import { caseStudies } from "./projects";

interface KBEntry {
  keywords: string[];
  answer: string;
}

const kb: KBEntry[] = [
  {
    keywords: ["who", "about", "mujaheed", "baita", "background", "profile", "himself"],
    answer:
      "Mujaheed Baita is a technology strategist, systems architect, export-market strategist and venture builder. He operates at the intersection of technology, business systems, fintech infrastructure, export strategy, African markets and Saudi/GCC opportunities. His defining approach: he doesn't start with technology — he starts with the gap, studying how a business operates before designing the systems it needs.",
  },
  {
    keywords: ["expertise", "skills", "what can", "capable", "services", "offer", "do you do", "does he do"],
    answer:
      "Mujaheed operates at two levels. Strategic: business strategy, market-entry and export strategy, business-gap analysis, commercial modelling, venture architecture. Technical: software architecture, full-stack web applications, fintech systems, databases, APIs, automation, dashboards, portals, workflow systems and AI-assisted product workflows. His strongest differentiator is business systems thinking — redesigning the system around the business, not just automating tasks.",
  },
  {
    keywords: ["gap", "opportunity", "approach", "methodology", "think", "process", "how does he work"],
    answer:
      "The core discipline is: THE GAP IS THE OPPORTUNITY. Mujaheed looks for ten kinds of gaps — operational, technology, information, market, infrastructure, financial, communication, export, automation and product gaps. His nine-step method: Observe → Deconstruct → Identify the Gap → Architect → Build → Automate → Connect → Measure → Scale.",
  },
  {
    keywords: ["export", "trade", "agriculture", "commodity", "sesame", "africa", "corridor"],
    answer:
      "Mujaheed's export strategy work is grounded in exposure to Nigerian agricultural commodity markets: agro-export strategy, supplier and buyer discovery, market-entry analysis, commodity sourcing and export documentation workflows. He studies both sides of the corridor — African supply intelligence (producers, aggregators, pricing, quality, seasonality, logistics) and GCC demand intelligence (buyer requirements, specifications, procurement expectations, market-entry requirements).",
  },
  {
    keywords: ["saudi", "gcc", "gulf", "riyadh", "middle east"],
    answer:
      "Saudi/GCC market opportunity analysis is a core strategic focus: GCC market-entry thinking, African-to-GCC trade corridors (explored through the MASAR concept), and Saudi real estate (through the KGM Real Estate ecosystem). These represent strategic research and active project work — the portfolio does not claim physical offices or operations in any country beyond what is documented.",
  },
  {
    keywords: ["collaborat", "work with", "hire", "engage", "partner", "project with", "contact", "reach"],
    answer:
      "Mujaheed works on digital products, business automation, operations improvement, market entry, African export, Saudi/GCC market entry, fintech infrastructure, real-estate platforms, technical architecture, product strategy and business-gap analysis. The best way to start is the intelligent contact form on this site — it asks what you're trying to build and routes your inquiry appropriately. You can also book a discovery session.",
  },
];

function projectAnswer(slug: string): string {
  const p = caseStudies.find((c) => c.slug === slug)!;
  return `${p.name} — ${p.tagline}. Status: ${p.status}. ${p.summary} Current status: ${p.currentStatus} You can read the full case study at /work/${p.slug}.`;
}

const projectKeywords: Record<string, string[]> = {
  koriepay: ["koriepay", "korie", "wallet", "payment", "fintech", "niger", "agency banking", "ledger", "settlement"],
  masar: ["masar", "trade infrastructure", "sesame", "trade desk", "compliance os", "vault", "kyb"],
  "kgm-real-estate": ["kgm real", "real estate", "property advisory", "brokerage", "rental", "yield"],
  "kgm-cinematic-studio": ["cinematic", "studio os", "video", "media", "property media", "camera"],
  "pluck-agro": ["pluck", "agro allied", "soybean", "gum arabic", "erp", "nexim", "processing"],
  "neis-exploration": ["neis", "information system", "public system", "government"],
  "chambers-polo": ["chambers", "polo", "smart estate", "plot", "land", "420"],
};

const FALLBACK =
  "That detail is not currently documented in Mujaheed's public portfolio. I can tell you about his expertise, his projects (KoriePay, MASAR, KGM Real Estate, KGM Cinematic Studio OS, Pluck Agro Allied), his export strategy work, or how to start a project with him.";

export function answerQuestion(q: string): {
  answer: string;
  actions: { label: string; href: string }[];
} {
  const query = q.toLowerCase();

  const score = (keywords: string[]) =>
    keywords.reduce((s, k) => (query.includes(k) ? s + k.length : s), 0);

  let best: { answer: string; s: number } | null = null;

  for (const [slug, keywords] of Object.entries(projectKeywords)) {
    const s = score(keywords);
    if (s > 0 && (!best || s > best.s)) best = { answer: projectAnswer(slug), s };
  }
  for (const entry of kb) {
    const s = score(entry.keywords);
    if (s > 0 && (!best || s > best.s)) best = { answer: entry.answer, s };
  }

  const defaultActions = [
    { label: "Start a Project", href: "/#contact" },
    { label: "Explore a Case Study", href: "/#projects" },
    { label: "Book a Discovery Session", href: "/#contact" },
  ];

  if (!best || best.s < 4) {
    return { answer: FALLBACK, actions: defaultActions };
  }
  return { answer: best.answer, actions: defaultActions };
}
