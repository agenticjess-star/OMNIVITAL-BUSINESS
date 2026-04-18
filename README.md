# OmniVital
> Full-stack wellness platform with AI advisor, community, ritual tracking, and a 6-formula product system.

![Status](https://img.shields.io/badge/status-active-brightgreen)
![Stack](https://img.shields.io/badge/stack-TypeScript%20%7C%20Next.js%2016%20%7C%20Supabase-blue)
![Deploy](https://img.shields.io/badge/deploy-Vercel-black)

**Live:** [omnivital-business.vercel.app](https://omnivital-business.vercel.app) · **Repo:** [github.com/agenticjess-star/OMNIVITAL-BUSINESS](https://github.com/agenticjess-star/OMNIVITAL-BUSINESS)

---

## What This Is

OmniVital is a wellness SaaS that combines personalized AI guidance with community accountability and habit tracking. Users build daily rituals from a 6-formula supplement system, log check-ins, talk to an AI advisor that understands their routine, and participate in a real-time community. This documentation site presents the project valuation and product roadmap for stakeholders.

---

## Product Through-Line

The UI is built around a single decision flow. Every screen answers one question in this chain:

1. **What is OmniVital?** — Homepage introduces the platform and its core value proposition
2. **What has been built and what is it worth?** — Valuation page provides honest assessment with market-rate benchmarking
3. **What comes next?** — Roadmap page outlines four phases from working platform to market-ready OS

This sequence is reflected in the navigation and layout. No screen exists that doesn't advance this flow.

---

## What It Does / Doesn't Do

**Works today:**
- Project valuation report with detailed cost breakdown
- Product roadmap with four-phase build sequence
- ElevenLabs voice agent (OmniaVit) for conversational interaction
- Responsive design with custom OmniVital design system

**Not built yet (in main platform, separate repo):**
- Stripe integration for subscriptions and billing
- Apple Watch biometric sync
- Admin dashboard for analytics and product management
- Ritual reminders (push and email notifications)

**Explicit non-goals:**
- This documentation site will not become the main application — it presents project information only
- No user authentication or data storage in this repo

**Data policy:** No mock data. No simulated state. All numbers in the valuation and roadmap are derived from actual codebase analysis.

---

## Tech Stack

| Layer | Technology | Notes |
|---|---|---|
| Frontend | Next.js 16, React 19, TypeScript | App Router, Server Components |
| Styling | Tailwind CSS 4, shadcn/ui | Custom OmniVital design tokens |
| Fonts | DM Sans, DM Mono, Cormorant Garamond | Google Fonts via next/font |
| Voice Agent | ElevenLabs Conversational AI | Widget embed with agent ID |
| Analytics | Vercel Analytics | Production only |
| Deployment | Vercel | Branch: main → production |

---

## Data Architecture

### Schema

This documentation site has no database. The main OmniVital platform (separate repository) uses:
- Supabase with 8 tables, RLS policies, triggers, and realtime subscriptions
- MongoDB for AI chat persistence
- FastAPI backend with GPT-4.1 integration

### Environment Variables

| Variable | Required | Description |
|---|---|---|
| None | — | This site requires no environment variables |

The ElevenLabs widget uses a public agent ID embedded in the component.

---

## Integrations

### ElevenLabs Conversational AI
- **Purpose:** Voice-based AI advisor (OmniaVit) for interactive conversations
- **Credentials needed:** None (public agent ID)
- **Where it's used:** `/components/elevenlabs-widget.tsx`
- **To disable:** Remove the `<ElevenLabsWidget />` component from pages
- **Docs:** [elevenlabs.io/docs](https://elevenlabs.io/docs)

### Vercel Analytics
- **Purpose:** Production traffic and performance monitoring
- **Credentials needed:** Automatic via Vercel deployment
- **Where it's used:** `/app/layout.tsx`
- **To disable:** Remove the `<Analytics />` component

---

## Local Development

```bash
# Install
pnpm install

# Start
pnpm dev

# Build
pnpm build

# Lint
pnpm lint
```

Requires Node 18+.

---

## Deployment

Deployed on Vercel. Connected to GitHub `main` branch. Push to `main` → auto-deploy.

**Vercel Project ID:** `prj_l9EuQvpd09Gv2Ow6tyg4kT2aypOA`

If a deploy fails: check Vercel build logs. Most failures are missing environment variables or a bad dependency version.

---

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with fonts and analytics
│   ├── page.tsx             # Homepage
│   ├── globals.css          # OmniVital design system
│   ├── valuation/page.tsx   # Valuation report
│   └── roadmap/page.tsx     # Product roadmap
├── components/
│   ├── site-header.tsx      # Navigation header
│   ├── site-footer.tsx      # Footer
│   ├── elevenlabs-widget.tsx # Voice agent
│   └── ui/                  # shadcn/ui components
├── lib/
│   └── utils.ts             # Utility functions
└── public/
    └── *.png, *.svg         # Icons and images
```

---

## Changelog

| Date | Change | Author |
|---|---|---|
| 2026-04-17 | README rewritten per project standard | v0 |
| 2026-04-17 | Initial commit from v0 | v0 |
