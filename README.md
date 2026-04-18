# # OmniVital

> A wellness OS that learns your body, builds your ritual, and gets stickier every week you use it.

## What This Is

The supplement industry sells products. OmniVital sells a system. Most brands lose a customer the moment a bottle runs out — no follow-up, no proof it worked, no reason to reorder. OmniVital replaces that broken loop with an AI advisor who knows your goals, a dashboard that shows your progress objectively, and a community of people on the same protocol — without exposing who you are.

## Product Through-Line

The sequence of questions the product answers for a new user:

1. **“What do I actually need?”** → Voice agent greets on landing, asks about goals and issues, recommends a ritual
2. **“What does each product do?”** → Agent navigates to product pages mid-conversation; full tabbed PDPs (bioavailability, sourcing, daily ritual)
3. **“Is this worth subscribing to?”** → Pricing clarity, subscription framing, single checkout path
4. **“What happens after I buy?”** → Dashboard auto-populates ritual stack; community threads visible immediately; color badge assigned
5. **“Is it working?”** → Daily check-in logs feeling scores 1–5; 7-day streak shows adherence; advisor references your history
6. **“Should I keep going?”** → Agent acknowledges progress, surfaces renewal recommendation at natural inflection (month 2–3)

## What It Does / Doesn’t Do

**Works today:**

- Auth (email + password, email verification required, auto-profile creation on signup)
- Landing page, product detail pages (`/product/:slug`), auth page, protected dashboard
- 6-product catalog with morning / midday / evening schedule slots (static TypeScript, not DB-driven)
- Ritual stack: add/remove products, persisted per user
- Daily check-in logging: feeling score (1–5) + notes per product
- 7-day streak visualization
- ElevenLabs voice agent with dynamic user context injection (`full_name`, `ritual_summary`, streak) and `navigate_to_product` client tool
- GPT-4.1 text advisor with ritual context injection (FastAPI backend, MongoDB chat persistence)
- Real-time community: threads, replies, privacy color badge identity
- Supabase RLS on every table — users can only access their own rows

**Not built yet:**

- Stripe — checkout UI exists, database field (`stripe_subscription_id`) exists, payment does not flow
- Profile onboarding flow — new users land in an empty dashboard with no guided setup
- Community moderation (admin pin / delete / flag)
- Apple Watch / HealthKit biometric sync (referenced in marketing, not implemented)
- Push / email ritual reminders
- Admin dashboard (analytics, user management, catalog management)
- RAG-powered advisor (research doc ingestion, citations)
- Mobile app

**Explicit non-goals:**

- No mock or fake data anywhere in the codebase
- No generic AI responses — advisor always receives user ritual context

## Tech Stack

|Layer            |Technology                                                |Notes                                     |
|-----------------|----------------------------------------------------------|------------------------------------------|
|Framework        |React 18, TypeScript, Vite                                |`@vitejs/plugin-react-swc`                |
|Styling          |Tailwind CSS 3.4, shadcn/ui, Framer Motion 12             |Custom HSL design tokens, glass utilities |
|Routing          |React Router v6                                           |Auth-guarded routes via `RequireAuth`     |
|State            |React Context (auth), TanStack React Query 5              |No Redux                                  |
|Backend (data)   |Supabase (PostgreSQL, Auth, RLS)                          |Project ID: `zxahroknicbkyswagvpd`        |
|Backend (AI chat)|FastAPI + MongoDB                                         |Separate backend service, not in this repo|
|Voice AI         |ElevenLabs Conversational AI (`@elevenlabs/react ^0.14.0`)|WebRTC, public agent                      |
|Text AI          |GPT-4.1 via FastAPI                                       |Personalized with ritual context          |
|Icons            |Lucide React                                              |                                          |

## Data Architecture

### Tables (Supabase — project `zxahroknicbkyswagvpd`)

**`products`** — Public product catalog

- `id` UUID PK, `name` TEXT, `slug` TEXT UNIQUE, `category` TEXT (`morning` | `focus` | `evening`), `tagline` TEXT, `description` TEXT, `price` NUMERIC(10,2), `image_url` TEXT, `bio_availability_text` TEXT, `sourcing_text` TEXT, `daily_ritual_text` TEXT, `created_at` TIMESTAMPTZ
- RLS: SELECT open to all; no public writes

**`email_signups`** — Pre-auth email capture

- `id` UUID PK, `email` TEXT, `created_at` TIMESTAMPTZ
- RLS: INSERT only, no read

**`profiles`** — Extended user info (auto-created on signup via trigger)

- `id` UUID PK (FK → `auth.users.id`), `full_name` TEXT, `ritual_summary` TEXT, `created_at` TIMESTAMPTZ, `updated_at` TIMESTAMPTZ
- RLS: owner SELECT / INSERT / UPDATE only
- Trigger: `on_auth_user_created` → `handle_new_user()` (SECURITY DEFINER)

**`user_rituals`** — Active ritual stack

- `id` UUID PK, `user_id` UUID, `product_id` UUID (FK → `products`), `added_at` TIMESTAMPTZ
- RLS: owner SELECT / INSERT / DELETE only

**`ritual_logs`** — Daily check-ins

- `id` UUID PK, `user_id` UUID, `product_id` UUID (FK → `products`), `logged_at` TIMESTAMPTZ, `notes` TEXT, `feeling_score` INTEGER DEFAULT 3
- RLS: owner SELECT / INSERT / UPDATE only
- Used for: streak calculation, calendar heatmap, advisor context, avg score display

### Run migrations

```sh
supabase db push
# or apply manually in Supabase SQL editor — files in /supabase/migrations/
```

### Environment variables

|Variable                       |Purpose                                   |
|-------------------------------|------------------------------------------|
|`VITE_SUPABASE_URL`            |Supabase project URL                      |
|`VITE_SUPABASE_PUBLISHABLE_KEY`|Supabase anon key (public, safe to expose)|

Backend (FastAPI) requires separate configuration — [needs input from owner: backend env vars and MongoDB connection string]

## Integrations

### ElevenLabs Conversational AI

- **Purpose:** Voice advisor widget — floating orb, WebRTC, real-time conversation
- **Agent ID:** `agent_5501kgzectw4ep69wjamch6xr2k7`
- **Credentials:** None required on frontend (public agent). Agent configuration lives in ElevenLabs dashboard — dashboard access required to modify system prompt, voice, or tools.
- **Where used:** `VoiceAgent.tsx` — `useConversation` hook from `@elevenlabs/react`
- **Client tool:** `navigate_to_product` — agent triggers browser navigation to `/product/:slug` mid-conversation
- **Context injected at session start:** `user_name`, `ritual_context`, `streak_days` via `dynamicVariables`
- **To disable:** Remove `<VoiceAgent />` from layout — no backend dependency

### Supabase

- **Purpose:** Auth, database, RLS
- **Credentials:** `VITE_SUPABASE_URL` + `VITE_SUPABASE_PUBLISHABLE_KEY` (anon key)
- **Where used:** `src/integrations/supabase/client.ts` — imported across all data-fetching components
- **To swap:** Replace Supabase client with any PostgreSQL + Auth provider; update all `supabase.from()` calls

### OpenAI GPT-4.1 (via FastAPI backend)

- **Purpose:** Text-based AI advisor with ritual context
- **Credentials:** [needs input from owner: backend API key and base URL]
- **Where used:** Frontend calls `${BACKEND_URL}/api/advisor/chat` — backend in separate repo
- **To disable:** Remove advisor chat UI from dashboard; backend is not required for frontend to function

### MongoDB (via FastAPI backend)

- **Purpose:** Chat history persistence across sessions
- **Credentials:** [needs input from owner: MongoDB connection string]
- **Where used:** Backend only — `db.chat_messages` collection
- **To disable:** Remove MongoDB write from backend — advisor still functions, history is lost on session end

## Local Development

```sh
git clone https://github.com/agenticjess-star/omniavital-v3
cd omniavital-v3
cp .env .env.local   # values already in .env — do not commit changes with real keys
npm install
npm run dev
```

App runs at `http://localhost:8080` (Vite default).

Backend (FastAPI) runs separately — [needs input from owner: backend repo and startup instructions].

## Deployment

- **Platform:** [needs input from owner — Lovable Cloud or Vercel]
- **Build command:** `npm run build`
- **Output dir:** `dist`
- **Environment variables:** Set `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` in deployment platform

## Changelog

|Date      |Change                                                                         |Agent            |
|----------|-------------------------------------------------------------------------------|-----------------|
|2026-04-17|README rewritten per project standard; Lovable branding removed from index.html|Claude Sonnet 4.6|
