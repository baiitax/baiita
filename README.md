# Mujaheed Baita — Digital Headquarters

Executive portfolio for **Mujaheed Baita** — Technology Strategist · Systems Architect · Export Market Strategist · Venture Builder.

> I identify the gaps businesses overlook, design the systems they need, and turn opportunities into scalable technology and commercial infrastructure.

## Stack

- **Next.js 16** (App Router) + **TypeScript** + **Tailwind CSS v4**
- Self-hosted fonts (Fraunces, Manrope, IBM Plex Mono via Fontsource)
- Server-rendered pages, SSG case studies, dynamic API routes

## What's inside

| Area | Route |
| --- | --- |
| Homepage (hero, gap system, expertise matrix, export strategy, venture lab, corridors, contact) | `/` |
| Case-study engine (7 projects, 14-section structure, animated architecture diagrams) | `/work/[slug]` |
| Admin inquiry command center (pipeline CRM: NEW → … → COMPLETED) | `/admin` |
| Lead intake + auto classification / scoring / reference generation | `POST /api/leads` |
| BAITA INTELLIGENCE assistant (grounded, never fabricates) | `POST /api/assistant` |
| Admin auth (HMAC-signed session cookie) | `POST /api/admin/login` |

## Running

```bash
npm install
npm run dev      # development
npm run build && npm start   # production
```

## Admin access

Set environment variables in production:

```
ADMIN_PASSWORD=<strong password>        # default dev password: baita-admin-2025
ADMIN_SESSION_SECRET=<random secret>
```

Lead data is stored in `.data/leads.json` (git-ignored). Swap `lib/leads.ts` for Supabase/Postgres in production — the data layer is isolated for exactly that migration.

## Credibility principle

**Never exaggerate. Never fabricate. Never turn an idea into a claimed achievement.**
Every project carries an honest status badge: CONCEPT · RESEARCH · ARCHITECTURE · PROTOTYPE · IN DEVELOPMENT · LIVE · STRATEGIC EXPLORATION. No invented metrics anywhere.
