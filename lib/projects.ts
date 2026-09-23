export type ProjectStatus =
  | "CONCEPT"
  | "ARCHITECTURE"
  | "PROTOTYPE"
  | "IN DEVELOPMENT"
  | "LIVE"
  | "RESEARCH"
  | "STRATEGIC EXPLORATION";

export interface CaseStudy {
  slug: string;
  name: string;
  tagline: string;
  status: ProjectStatus;
  domain: string;
  summary: string;
  overview: string;
  problem: string;
  market: string;
  gap: string;
  insight: string;
  vision: string;
  architecture: string[];
  ecosystem: string[];
  technology: string[];
  automation: string[];
  commercial: string;
  currentStatus: string;
  explored: string[];
  designed: string[];
  implemented: string[];
  lessons: string[];
  roadmap: string[];
  accent: string;
}

export const statusBadgeClass: Record<ProjectStatus, string> = {
  LIVE: "badge-live",
  "IN DEVELOPMENT": "badge-dev",
  PROTOTYPE: "badge-proto",
  ARCHITECTURE: "badge-arch",
  RESEARCH: "badge-research",
  CONCEPT: "badge-concept",
  "STRATEGIC EXPLORATION": "badge-research",
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "koriepay",
    name: "KoriePay",
    tagline: "Cross-Border Financial Infrastructure — Nigeria ↔ Niger Republic",
    status: "ARCHITECTURE",
    domain: "Fintech & Financial Infrastructure",
    accent: "#c9a96a",
    summary:
      "A fintech infrastructure concept connecting Nigeria and Niger Republic — designed as an interconnected financial ecosystem rather than a single wallet: agents, merchants, aggregators, banks, BDC/FX, liquidity, settlement, ledger and intelligence on one rail.",
    overview:
      "KoriePay is an architectural exploration of what cross-border financial infrastructure between Nigeria and Niger Republic could look like when designed from the rail upward instead of the app downward. The work covers digital payments, agency banking, merchant acceptance, customer wallets, BDC/FX connectivity, liquidity management, settlement, ledgering, reconciliation and compliance — organised as a multi-portal ecosystem serving customers, agents, merchants, aggregators, banks and administrators.",
    problem:
      "Money moving between Nigeria and Niger Republic crosses two currencies (NGN and XOF), multiple informal FX channels, fragmented agent networks and financial institutions that do not share infrastructure. Individuals and small merchants absorb the cost of that fragmentation in fees, delays and failed transactions.",
    market:
      "The Nigeria–Niger corridor: two neighbouring markets with deep commercial, cultural and family ties, high cash intensity, growing agency-banking penetration and demand for reliable low-value cross-border payments in English, French and Hausa-speaking communities.",
    gap:
      "There is no unified rail where a customer wallet, an agent float, a merchant settlement, a BDC/FX conversion and an interbank position live on one coherent ledger. Every actor keeps a private version of the truth, so reconciliation is manual and liquidity is blind.",
    insight:
      "The wallet is not the product — the ledger is. If the ledger, liquidity engine and settlement layer are designed first, then customer apps, agent portals, merchant tools and developer APIs become surfaces on top of one dependable rail rather than separate products stitched together later.",
    vision:
      "Customers → Agents → Merchants → Aggregators → Banks → BDC/FX → Liquidity → Settlement → Ledger → Intelligence: one interconnected financial ecosystem where each actor has a purpose-built portal, every movement of value produces a ledger event, and management sees the whole corridor in real time.",
    architecture: [
      "Customer",
      "Customer App",
      "Transaction Engine",
      "Ledger",
      "Liquidity",
      "Bank / BDC / FX",
      "Settlement",
      "Reconciliation",
      "Intelligence",
    ],
    ecosystem: [
      "Customer wallet & app",
      "Agent portal with float management",
      "Aggregator portal for agent networks",
      "Merchant portal & payment acceptance",
      "Bank connectivity layer",
      "BDC/FX desk integration",
      "Admin & Super Admin systems",
      "Regional management console",
      "Developer portal, APIs & sandbox",
    ],
    technology: [
      "Double-entry ledger design",
      "Transaction engine & state machines",
      "Multi-currency accounts (NGN / XOF)",
      "Role-based access control",
      "KYC & compliance workflows",
      "Risk & fraud control models",
      "Reconciliation pipelines",
      "Reporting & intelligence dashboards",
      "API & sandbox architecture",
    ],
    automation: [
      "Automated settlement cycles",
      "Liquidity threshold alerts and rebalancing logic",
      "Reconciliation matching between ledger, banks and FX desks",
      "KYC document workflow routing",
      "Fraud rules triggering holds and escalation",
    ],
    commercial:
      "Modelled around transaction fees, FX spread participation, agent/aggregator commission structures and future API monetisation for third parties building on the rail — with unit economics analysed per corridor transaction rather than per app install.",
    currentStatus:
      "Architecture stage. KoriePay is a designed system, not a launched financial institution: the ecosystem map, portal structure, ledger model, transaction flows and compliance workflows have been architected; no regulated payment operations are live.",
    explored: [
      "Nigeria ↔ Niger payment behaviours and corridor dynamics",
      "Agency banking economics and float management",
      "NGN/XOF FX and BDC structures",
      "Multi-language product surfaces: English, French, Hausa",
      "Regulatory and compliance requirements across both markets",
    ],
    designed: [
      "Full ecosystem architecture from customer to intelligence layer",
      "Multi-portal system: customer, agent, aggregator, merchant, admin, super admin, regional",
      "Ledger, settlement and reconciliation model",
      "Risk, fraud and KYC workflow design",
      "Developer API and sandbox structure",
    ],
    implemented: [
      "System architecture documentation and data models",
      "Portal wireframes and workflow specifications",
      "Transaction flow and ledger event design",
    ],
    lessons: [
      "Cross-border fintech is a liquidity and trust problem before it is a software problem.",
      "Designing the ledger first prevents every later product from inventing its own truth.",
      "Agent economics decide adoption in cash-heavy corridors — the portal must serve the agent's business, not just the platform's.",
    ],
    roadmap: [
      "Prototype the ledger and transaction engine",
      "Partner-led pilots on a single corridor segment",
      "Compliance and licensing pathway analysis",
      "Developer sandbox for ecosystem partners",
    ],
  },
  {
    slug: "masar",
    name: "MASAR",
    tagline: "Africa ↔ Saudi/GCC Trade Infrastructure",
    status: "STRATEGIC EXPLORATION",
    domain: "Cross-Border Trade",
    accent: "#3a9d78",
    summary:
      "A transaction-first cross-border trade infrastructure concept connecting verified African suppliers with qualified Saudi/GCC buyers — coordinating verification, compliance, inspection, transaction execution and settlement. We own the rail; partners move the physical world.",
    overview:
      "MASAR explores the infrastructure required for African supply to reliably reach GCC demand. Rather than another B2B listing marketplace, MASAR is designed transaction-first: every module exists to make a single verified trade execute safely — identity, compliance, inspection, evidence, controlled release of funds, and settlement orchestration. The strategic beachhead is premium Nigerian non-GMO sesame into Saudi Arabia, with expansion paths into cashew, soy, other African commodities and wider GCC corridors.",
    problem:
      "African producers have supply and GCC buyers have demand, but the corridor between them is filled with unverifiable counterparties, opaque quality claims, informal payment terms and no neutral infrastructure for executing a trade both sides can trust.",
    market:
      "African agricultural commodities into Saudi Arabia and the wider GCC — beginning with premium Nigerian non-GMO sesame, a commodity with established Gulf demand, quality-sensitive pricing and fragmented supply-side aggregation.",
    gap:
      "The missing layer is not discovery — buyers and sellers can find each other. The missing layer is execution: verification, compliance, inspection, evidence and settlement rails that let a first-time counterparty trade like a trusted one.",
    insight:
      "Trust in cross-border trade is manufactured by infrastructure, not by promises. If the rail verifies identity, inspects goods, holds evidence and controls the release of funds, the corridor scales on the rail's credibility instead of on personal relationships.",
    vision:
      "A trade operating system for African→GCC corridors: verified supplier onboarding, qualified buyer discovery, a Trade Desk orchestrating each transaction, Compliance OS handling documentation, Verify and Vault managing inspection evidence and controlled release, Capital preparing trade-finance readiness, and Intelligence learning from every completed trade.",
    architecture: [
      "Supplier",
      "Verification",
      "Trade Desk",
      "Compliance",
      "Inspection",
      "Buyer",
      "Transaction",
      "Settlement",
      "Shipment",
      "Audit Data",
    ],
    ecosystem: [
      "Verified African suppliers",
      "Qualified Saudi/GCC buyers",
      "Inspection & quality partners",
      "Logistics & shipping partners",
      "Financial institutions & settlement partners",
      "Compliance & documentation bodies",
    ],
    technology: [
      "Identity / KYB module",
      "Trade Desk transaction orchestration",
      "Compliance OS & export documentation workflows",
      "Verify — inspection & evidence management",
      "Vault — controlled release & escrow logic",
      "Capital — trade-finance readiness",
      "Intelligence — corridor analytics",
      "Audit data & immutable trade records",
    ],
    automation: [
      "Documentation checklists generated per commodity and destination",
      "Verification status gates on transaction progression",
      "Evidence-linked release conditions",
      "Settlement orchestration across partners",
      "Corridor intelligence from completed trade data",
    ],
    commercial:
      "Transaction-fee and service-layer economics on executed trades, with future revenue in trade-finance facilitation and corridor intelligence — deliberately avoiding asset-heavy logistics: we own the rail, partners move the physical world.",
    currentStatus:
      "Strategic exploration stage. MASAR is a researched and modularly designed concept: corridor analysis, module architecture and transaction workflows are defined; no live trading platform is in operation.",
    explored: [
      "Nigerian sesame supply structures, quality grades and seasonality",
      "Saudi/GCC buyer requirements, specifications and procurement expectations",
      "Export documentation, inspection and compliance requirements",
      "Escrow, controlled-release and settlement models for commodity trades",
      "Beachhead-then-expand corridor strategy",
    ],
    designed: [
      "Module map: Identity/KYB, Trade Desk, Compliance OS, Verify, Vault, Capital, Intelligence",
      "End-to-end transaction workflow from supplier verification to audit data",
      "Buyer and supplier discovery and qualification flows",
      "Evidence and controlled-release logic",
    ],
    implemented: [
      "Corridor research and market intelligence documentation",
      "System architecture and module specifications",
      "Transaction workflow design",
    ],
    lessons: [
      "In commodity trade, execution infrastructure is worth more than discovery features.",
      "A narrow beachhead (one commodity, one corridor) beats a broad marketplace at the start.",
      "Compliance is a product surface, not paperwork — designing it well is a competitive moat.",
    ],
    roadmap: [
      "Deepen sesame corridor partnerships on both sides",
      "Prototype Trade Desk and Verify workflows",
      "Structure pilot trades with partner-managed logistics",
      "Expand to cashew, soy and wider GCC corridors",
    ],
  },
  {
    slug: "kgm-real-estate",
    name: "KGM Real Estate",
    tagline: "Property Technology & Saudi Market Entry",
    status: "IN DEVELOPMENT",
    domain: "Real Estate & Property Technology",
    accent: "#9fb6d9",
    summary:
      "A property ecosystem at the intersection of Saudi real estate, advisory, brokerage, investment, property and rental management — transforming traditional property services into digitally coordinated workflows.",
    overview:
      "KGM Real Estate explores how a full-service property operation — advisory, brokerage, investment support, market entry, property management, rental and yield management, documentation, government liaison, design, furnishing, digital marketing and communications — can run on coordinated digital workflows instead of disconnected manual processes.",
    problem:
      "Traditional property services run on phone calls, spreadsheets and personal follow-ups. Listings, viewings, documentation, government processes, rentals, maintenance and owner reporting live in separate silos, so service quality depends entirely on individual effort rather than system design.",
    market:
      "Saudi real estate — a market undergoing rapid transformation with strong demand for professional property management, investment advisory and market-entry support for local and international clients.",
    gap:
      "The gap is coordination infrastructure: no unified layer connects the client journey (discovery → viewing → transaction → documentation → management → yield reporting) across the many actors involved in a Saudi property transaction.",
    insight:
      "Property services become scalable when every service line is expressed as a workflow with states, owners, documents and deadlines — the technology then coordinates people instead of replacing them.",
    vision:
      "A digitally coordinated property operation where advisory, brokerage, management and owner reporting share one operational backbone — every property, client, document and task visible in a single system.",
    architecture: [
      "Client",
      "Advisory & Discovery",
      "Brokerage Workflow",
      "Documentation",
      "Government Liaison",
      "Property Management",
      "Rental & Yield",
      "Owner Reporting",
    ],
    ecosystem: [
      "Property owners & investors",
      "Tenants & buyers",
      "Advisory & brokerage team",
      "Government & documentation bodies",
      "Design, furnishing & maintenance partners",
      "Marketing & communications",
    ],
    technology: [
      "Property & client data architecture",
      "Workflow states for each service line",
      "Document management & tracking",
      "Rental and yield management structures",
      "Owner dashboards & reporting design",
      "Digital marketing coordination",
    ],
    automation: [
      "Viewing and follow-up scheduling workflows",
      "Documentation checklist automation",
      "Rental cycle reminders and renewals",
      "Owner statement generation",
    ],
    commercial:
      "Service-line economics across advisory, brokerage commissions, management fees and yield-based management — with technology positioned as the margin and quality multiplier across all lines.",
    currentStatus:
      "In development. The service architecture and digital workflow design are being actively built out alongside the underlying property operation.",
    explored: [
      "Saudi property market structures and client expectations",
      "Market-entry requirements for international clients",
      "Rental and yield management models",
      "Government and documentation processes",
    ],
    designed: [
      "Service-line workflow architecture",
      "Client journey mapping from discovery to management",
      "Owner reporting and yield visibility structures",
    ],
    implemented: [
      "Operational workflow definitions",
      "Digital coordination structures for core service lines",
    ],
    lessons: [
      "In service businesses, the workflow is the product — clients feel the system even when they never see it.",
      "Documentation and government processes are where trust is won or lost in Saudi property transactions.",
    ],
    roadmap: [
      "Complete the digital workflow backbone",
      "Owner and client portals",
      "Deeper yield analytics and reporting",
    ],
  },
  {
    slug: "kgm-cinematic-studio",
    name: "KGM Cinematic Studio OS",
    tagline: "AI-Powered Property Media Infrastructure",
    status: "PROTOTYPE",
    domain: "Cinematic Property Media Technology",
    accent: "#e0c68f",
    summary:
      "A proprietary cinematic production operating system for architectural and real-estate marketing: upload property images, and the system transforms them into cinematic property-viewing videos through an automated pipeline.",
    overview:
      "KGM Cinematic Studio OS is a media-technology concept: an operating system for producing cinematic real-estate video from architectural and property imagery. The pipeline — UPLOAD → ANALYZE → SEQUENCE → MOTION → CINEMATIC CAMERA → MASTER → EXPORT — turns static property assets into story-driven viewing experiences, managed through a production dashboard.",
    problem:
      "Premium property marketing demands cinematic video, but traditional production is slow, expensive and inconsistent — most properties are marketed with static photos because video production doesn't scale.",
    market:
      "Real-estate marketing, initially serving the KGM property ecosystem, with applicability to developers, brokerages and premium property marketers who need cinematic content at volume.",
    gap:
      "Between raw property photos and professional cinematic video sits an expensive human production process. No accessible system converts architectural imagery into cinematic sequences automatically.",
    insight:
      "Cinematic quality is a set of learnable decisions — scene selection, sequencing, camera movement, pacing, mastering. If those decisions are encoded into a pipeline, cinematic property video becomes an operating system, not a per-project service.",
    vision:
      "A full production OS: architectural image analysis, automated scene sequencing, cinematic camera movement, property storytelling, asset mastering, gallery management — governed by a senior admin dashboard with authentication, user portals, a content pipeline and production monitoring.",
    architecture: [
      "Upload",
      "Analyze",
      "Sequence",
      "Motion",
      "Cinematic Camera",
      "Master",
      "Export",
    ],
    ecosystem: [
      "Property marketers & agents",
      "Production administrators",
      "Senior admin oversight",
      "Content consumers (buyers & investors)",
    ],
    technology: [
      "Architectural image analysis",
      "Automated scene sequencing",
      "Cinematic camera-movement generation",
      "Asset mastering pipeline",
      "Gallery management",
      "Authentication & user portal",
      "Senior admin dashboard",
      "Production monitoring",
    ],
    automation: [
      "Automatic scene detection and ordering",
      "Camera-path generation per architectural context",
      "Render pipeline orchestration",
      "Production status monitoring",
    ],
    commercial:
      "Positioned first as proprietary infrastructure giving the KGM property ecosystem a content advantage, with potential productisation as a service for external property marketers.",
    currentStatus:
      "Prototype stage. The production pipeline concept, dashboard architecture and workflow have been designed and prototyped; it is an evolving internal system, not a public product.",
    explored: [
      "AI-assisted video generation approaches for architectural content",
      "Cinematic grammar for property storytelling",
      "Production pipeline orchestration models",
    ],
    designed: [
      "Seven-stage production pipeline",
      "Senior admin dashboard and user portal structure",
      "Gallery and asset management architecture",
    ],
    implemented: [
      "Prototype pipeline and dashboard workflows",
      "Authentication and portal structures",
    ],
    lessons: [
      "Media pipelines are workflow systems — the same state-machine thinking as fintech settlement applies to rendering.",
      "Consistency at volume beats occasional brilliance in property marketing content.",
    ],
    roadmap: [
      "Harden the pipeline stages",
      "Expand cinematic movement library",
      "Production analytics and quality scoring",
    ],
  },
  {
    slug: "pluck-agro",
    name: "Pluck Agro Allied",
    tagline: "Agricultural Processing & Export Infrastructure",
    status: "ARCHITECTURE",
    domain: "Agriculture & Export Finance",
    accent: "#3a9d78",
    summary:
      "Agricultural processing, commodity sourcing and export-finance planning — connecting agriculture, manufacturing, finance, ERP and export strategy: gum arabic export, soybean processing, oil production and a digital ERP designed around real operational sheets.",
    overview:
      "Pluck Agro Allied is an exploration of agricultural processing and export infrastructure: gum arabic export, soybean processing into oil and soybean cake, commodity procurement, production planning, working capital, CAPEX/OPEX modelling, inventory management, export markets and NEXIM financing strategy — with a digital ERP concept designed directly around the operational records a processing business actually keeps.",
    problem:
      "Agricultural processing businesses in Nigeria run capital-intensive operations on paper records and disconnected spreadsheets. Procurement, production, inventory, credit, expenses and bank positions are tracked separately — so working capital decisions are made blind.",
    market:
      "Nigerian agricultural commodities with export potential — gum arabic into international markets, soybean processing serving domestic oil and feed demand with export-finance pathways through institutions like NEXIM.",
    gap:
      "The gap is an operational truth layer: no system connects the purchase table to the stock sheet to the daily production log to the payables and the bank closing balance, so the economics of each production cycle are reconstructed after the fact instead of managed in real time.",
    insight:
      "The ERP should be designed from the sheets the business already trusts — stock_sheet, credit_sheet, daily_log_sheet, purchase_table, payables/payment_records, general_expenses, bank_closing_balance, asset management — digitising the actual operational language rather than forcing generic software onto the operation.",
    vision:
      "A processing and export operation with full operational intelligence: procurement to production to inventory to sales to export documentation to financing — each cycle visible, costed and bankable, making export finance applications evidence-backed.",
    architecture: [
      "Commodity Procurement",
      "Purchase Records",
      "Stock & Inventory",
      "Production Log",
      "Credit & Payables",
      "Expenses",
      "Bank Position",
      "Financial Intelligence",
    ],
    ecosystem: [
      "Commodity suppliers & aggregators",
      "Processing operations",
      "Domestic buyers (oil, soybean cake)",
      "Export buyers (gum arabic)",
      "Financial institutions (NEXIM strategy)",
    ],
    technology: [
      "ERP data architecture from real operational sheets",
      "stock_sheet, credit_sheet, daily_log_sheet structures",
      "purchase_table & payables/payment_records",
      "general_expenses & bank_closing_balance tracking",
      "Asset management structures",
      "Financial modelling: working capital, CAPEX, OPEX",
    ],
    automation: [
      "Daily log rollups into production intelligence",
      "Stock movements reconciled against purchases and production",
      "Payables aging and credit tracking",
      "Cycle-level cost and margin computation",
    ],
    commercial:
      "Processing margin economics per production cycle, export revenue on gum arabic, and a financing strategy built on NEXIM-aligned documentation — where the ERP itself strengthens bankability.",
    currentStatus:
      "Architecture stage. Financial models, ERP data structures and export-finance strategy have been designed; this represents planning and system architecture, not a fully operational digital ERP.",
    explored: [
      "Gum arabic export market dynamics",
      "Soybean processing economics: oil and cake",
      "NEXIM export financing requirements",
      "Working capital, CAPEX and OPEX modelling",
    ],
    designed: [
      "Digital ERP schema mapped to real operational records",
      "Production cycle costing model",
      "Export-finance documentation strategy",
    ],
    implemented: [
      "Financial models and ERP data structure definitions",
      "Operational record architecture",
    ],
    lessons: [
      "The best ERP design starts from the paper the operation already trusts.",
      "Export finance is won on evidence — systems that produce clean records are financing tools.",
      "Agriculture, manufacturing and finance are one system in a processing business; software must treat them that way.",
    ],
    roadmap: [
      "Implement the core ERP sheets digitally",
      "Cycle-level profitability dashboards",
      "Export documentation workflow build-out",
    ],
  },
  {
    slug: "neis-exploration",
    name: "NEIS Ecosystem Research",
    tagline: "Public & Digital Information Systems Exploration",
    status: "RESEARCH",
    domain: "Public / Digital Information Systems",
    accent: "#8f9bb0",
    summary:
      "Research and architecture exploration into the NEIS ecosystem: digital information architecture, platform analysis, system relationships, user journeys and government/business information workflows — analysis, not ownership.",
    overview:
      "This is a research and analysis track — an exploration of the NEIS ecosystem examining its digital information architecture, platform relationships, user journeys and the workflows connecting government and business information systems. It is explicitly research: mapping how such systems work and where they could be improved, clearly distinguished from implemented ownership.",
    problem:
      "Large public information ecosystems accumulate platforms over time. Understanding how those platforms relate — what data moves where, which journeys users actually take, and where workflows break — requires deliberate system analysis that rarely happens.",
    market:
      "Public and business-facing digital information systems, where improvements in architecture and workflow design translate into better service delivery.",
    gap:
      "The analytical gap: system relationships and user journeys across the ecosystem are rarely mapped end-to-end, which hides both friction and improvement opportunities.",
    insight:
      "Treating a public information ecosystem as a single system-of-systems — with actors, data flows and journeys — reveals improvement opportunities that platform-by-platform views miss.",
    vision:
      "A clear architectural map of the ecosystem: platforms, relationships, journeys and workflows — usable as a foundation for identifying where technology infrastructure can improve information delivery.",
    architecture: [
      "Platform Inventory",
      "System Relationships",
      "Data Flows",
      "User Journeys",
      "Workflow Mapping",
      "Improvement Opportunities",
    ],
    ecosystem: [
      "Government information platforms",
      "Business users & citizens",
      "Administrative workflows",
    ],
    technology: [
      "Information architecture analysis",
      "Process mapping methods",
      "User journey mapping",
      "System relationship modelling",
    ],
    automation: [],
    commercial:
      "Research track — the value is analytical: understanding how public information infrastructure works and where system improvements are possible.",
    currentStatus:
      "Research. This is system analysis and architecture exploration only — not an implemented system and not a claim of ownership or official involvement.",
    explored: [
      "Platform analysis across the ecosystem",
      "Government/business information workflows",
      "User journey mapping",
      "Technology infrastructure patterns",
    ],
    designed: [
      "System relationship maps",
      "Process and journey documentation",
    ],
    implemented: [],
    lessons: [
      "Public systems reward the same gap-analysis discipline as commercial ones.",
      "Mapping before proposing keeps recommendations honest.",
    ],
    roadmap: [
      "Continue ecosystem mapping",
      "Document improvement opportunity areas",
    ],
  },
  {
    slug: "chambers-polo",
    name: "Chambers Polo Smart Estate",
    tagline: "Property Visualization & Premium Land Marketing",
    status: "CONCEPT",
    domain: "Property Media & Smart Estate Concepts",
    accent: "#9fb6d9",
    summary:
      "A property visualization and land-marketing concept: 420 sqm plots, villa positioning, Sultan Road orientation, aerial land visualization and digital overlays — architectural storytelling for premium land sales.",
    overview:
      "Chambers Polo Smart Estate is a property visualization concept exploring how premium land is marketed digitally: plot mapping of 420 sqm parcels, villa positioning studies, Sultan Road orientation, aerial visualization and digital overlays that turn raw land into an understandable, desirable proposition.",
    problem:
      "Land is the hardest property product to market: buyers see empty ground and must imagine everything. Static survey plans communicate legality, not lifestyle or value.",
    market:
      "Premium residential land marketing, where visualization quality directly affects buyer confidence and price realisation.",
    gap:
      "Between the surveyor's plan and the buyer's imagination sits a visualization gap — few land projects present plots, orientation, access and future villas as a coherent visual story.",
    insight:
      "Land sells when buyers can see the future: plot mapping, aerial context, villa positioning and digital overlays convert coordinates into a place people can picture living in.",
    vision:
      "A smart-estate presentation layer: interactive plot maps, aerial visualization with digital overlays, villa positioning concepts and premium architectural storytelling for every parcel.",
    architecture: [
      "Land Survey Data",
      "Plot Mapping",
      "Aerial Visualization",
      "Digital Overlays",
      "Villa Positioning",
      "Buyer Presentation",
    ],
    ecosystem: [
      "Estate developers",
      "Land buyers & investors",
      "Marketing & sales teams",
    ],
    technology: [
      "Plot mapping & parcel visualization",
      "Aerial imagery with digital overlays",
      "Architectural storytelling assets",
      "Digital property presentation",
    ],
    automation: [],
    commercial:
      "Visualization as a sales multiplier for premium land — better presentation supporting stronger buyer confidence and pricing.",
    currentStatus:
      "Concept stage. Visualization concepts including 420 sqm plot layouts, Sultan Road orientation and aerial overlay approaches have been explored; this is a design concept, not a live estate platform.",
    explored: [
      "420 sqm plot layout concepts",
      "Villa positioning studies",
      "Sultan Road orientation analysis",
      "Aerial land visualization approaches",
    ],
    designed: [
      "Digital overlay presentation concepts",
      "Plot mapping visual language",
    ],
    implemented: [],
    lessons: [
      "Visualization is infrastructure for trust in land transactions.",
      "The same storytelling systems built for property media apply directly to land.",
    ],
    roadmap: [
      "Interactive plot map prototype",
      "Aerial overlay production workflow",
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
