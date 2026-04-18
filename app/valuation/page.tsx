import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ElevenLabsWidget } from "@/components/elevenlabs-widget"

const deliverables = [
  { name: "React 18 + TypeScript frontend", detail: "Full SPA — routing, auth, protected routes" },
  { name: "Supabase database", detail: "8 tables, RLS, triggers, realtime subscriptions" },
  { name: "FastAPI backend + GPT-4.1", detail: "Personalized advisor with ritual context pipeline" },
  { name: "MongoDB chat persistence", detail: "Multi-session conversation history" },
  { name: "ElevenLabs voice agent", detail: "Dynamic variables, floating orb UI, context injection" },
  { name: "AI Advisor chat", detail: "Real-time, streak-aware, formula-aware responses" },
  { name: "Community system", detail: "Live threads, realtime replies, likes, privacy badges" },
  { name: "Ritual tracker", detail: "Add, remove, pause formulas — time-slot grouping" },
  { name: "Calendar heatmap", detail: "Monthly check-in history, feeling score color-coding" },
  { name: "6-product catalog", detail: "Full clinical detail, patented ingredients, pricing" },
  { name: "Auth + checkout UI", detail: "Supabase auth, profile auto-create, order summary" },
  { name: "Vercel deployment + tests", detail: "CI config, pytest, vitest, 3 iteration reports" },
]

const valuationItems = [
  { name: "Product strategy, brand architecture, 6-formula system", hours: "20–30", value: "$2,500–$3,750" },
  { name: "Frontend architecture (React 18, TS, Vite, Tailwind, shadcn)", hours: "15–20", value: "$1,875–$2,500" },
  { name: "Database design (8 tables, RLS, triggers, realtime, migrations)", hours: "15–20", value: "$1,875–$2,500" },
  { name: "Auth system (Supabase auth, protected routes, profile auto-create)", hours: "8–12", value: "$1,000–$1,500" },
  { name: "Dashboard (streak, calendar heatmap, check-ins, tab system)", hours: "18–25", value: "$2,250–$3,125" },
  { name: "AI Advisor (FastAPI, GPT-4.1, context pipeline, MongoDB)", hours: "15–20", value: "$1,875–$2,500" },
  { name: "Voice Agent (ElevenLabs, dynamic variables, orb UI)", hours: "12–18", value: "$1,500–$2,250" },
  { name: "Community (realtime threads, replies, likes, privacy system)", hours: "18–25", value: "$2,250–$3,125" },
  { name: "Protocol/subscription builder + checkout UI", hours: "18–28", value: "$2,250–$3,500" },
  { name: "Product catalog, landing page, product detail pages", hours: "16–24", value: "$2,000–$3,000" },
  { name: "Deployment, testing, documentation", hours: "13–20", value: "$1,625–$2,500" },
]

const remainingWork = [
  { name: "Stripe integration (subscriptions, webhooks, billing portal)", hours: "15–20", value: "$1,875–$2,500" },
  { name: "Apple Watch sync (core differentiator — currently marketing only)", hours: "20–30", value: "$2,500–$3,750" },
  { name: "Admin dashboard (analytics, product management)", hours: "20–30", value: "$2,500–$3,750" },
  { name: "Ritual reminders (push + email at scheduled windows)", hours: "10–18", value: "$1,250–$2,250" },
  { name: "RAG for advisor (research docs ingestion, citations)", hours: "15–25", value: "$1,875–$3,125" },
  { name: "Profile onboarding + community moderation", hours: "16–24", value: "$2,000–$3,000" },
]

const retainerItems = [
  { name: "Bug fixes, edge case handling", hours: "3–6 hrs" },
  { name: "Dependency and security updates (Supabase, ElevenLabs, OpenAI SDK)", hours: "1–2 hrs" },
  { name: "API key rotation, monitoring, production incidents", hours: "1–2 hrs" },
  { name: "Minor feature additions or content changes", hours: "2–4 hrs" },
]

export default function ValuationPage() {
  return (
    <main className="max-w-[820px] mx-auto px-8 py-16 md:py-20">
      <SiteHeader />
      
      {/* Hero */}
      <div className="animate-fade-up mb-14">
        <h1 className="font-serif text-[40px] md:text-[48px] font-light leading-[1.1] text-foreground mb-4 tracking-[-0.01em]">
          What has been built,<br />
          <em className="text-muted-foreground">what it&apos;s worth,</em><br />
          and what comes next.
        </h1>
        <p className="text-sm text-muted-foreground max-w-[560px] leading-relaxed">
          Based on live codebase analysis of GenJess/OmniVital. Numbers are derived from file-level 
          scope audit, market-rate benchmarking, and honest gap assessment. No inflation.
        </p>
      </div>

      {/* Section 1: Deliverables */}
      <section className="mb-13 animate-fade-up animate-delay-1">
        <div className="flex items-center gap-3 mb-5">
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            01 — Deliverables
          </span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
        </div>
        <h2 className="font-serif text-[28px] font-light text-foreground mb-6">What exists today</h2>
        <p className="text-[13px] text-muted-foreground mb-5">
          ~11,000 lines of application code across a full-stack SaaS. Not a prototype. 
          Deployed on Vercel, live database, real integrations.
        </p>
        <div className="grid md:grid-cols-2 gap-px bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.07)] rounded-lg overflow-hidden">
          {deliverables.map((item) => (
            <div key={item.name} className="bg-card p-4">
              <div className="text-[13px] text-foreground font-normal mb-0.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal" />
                {item.name}
              </div>
              <div className="font-mono text-[11px] text-muted-foreground">{item.detail}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 2: Valuation */}
      <section className="mb-13 animate-fade-up animate-delay-2">
        <div className="flex items-center gap-3 mb-5">
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            02 — Valuation
          </span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
        </div>
        <h2 className="font-serif text-[28px] font-light text-foreground mb-6">Value of work delivered</h2>
        <p className="text-[13px] text-muted-foreground mb-6">
          Blended rate of $125/hr — senior full-stack contractor market, not agency markup. 
          AI-assisted development is acknowledged and discounted appropriately.
        </p>
        
        <table className="w-full">
          <thead>
            <tr className="border-b border-[rgba(255,255,255,0.07)]">
              <th className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase p-0 pb-3 text-left font-normal w-[55%]">Deliverable</th>
              <th className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase p-0 pb-3 text-right font-normal">Hours</th>
              <th className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase p-0 pb-3 text-right font-normal">Value</th>
            </tr>
          </thead>
          <tbody>
            {valuationItems.map((item) => (
              <tr key={item.name} className="border-b border-[rgba(255,255,255,0.07)] last:border-b-0">
                <td className="py-3 pr-3 text-[13px] text-foreground">{item.name}</td>
                <td className="py-3 font-mono text-[12px] text-muted-foreground text-right whitespace-nowrap">{item.hours}</td>
                <td className="py-3 font-mono text-[12px] text-teal text-right whitespace-nowrap">{item.value}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-[rgba(20,172,142,0.3)]">
              <td className="pt-4 text-left font-mono text-[11px] tracking-[0.08em] uppercase text-muted-foreground">Total</td>
              <td colSpan={2} className="pt-4 text-right font-mono text-[13px] text-foreground">
                168–242 hrs · $21,000–$30,250 market rate
              </td>
            </tr>
          </tfoot>
        </table>

        <div className="mt-6 p-5 rounded-md bg-[rgba(201,136,58,0.1)] border-l-2 border-amber">
          <p className="text-[13px] leading-relaxed">
            <strong className="text-amber block mb-2">Two honest gaps to know before quoting:</strong>
            <strong className="text-amber">Stripe is not wired.</strong>{" "}
            <span className="text-foreground">
              The checkout UI and the <code className="font-mono text-[11px] text-amber">stripe_subscription_id</code> database 
              column both exist — but real money does not flow yet. This is a core gap for a commerce platform.
            </span>
          </p>
          <p className="text-[13px] leading-relaxed mt-2">
            <strong className="text-amber">Apple Watch sync is in the marketing copy but not in the codebase.</strong>{" "}
            <span className="text-foreground">
              The README and pitch reference biometric sync as a differentiator. It does not exist in the repo yet. 
              Scope it into remaining work or remove it from the pitch before demos.
            </span>
          </p>
        </div>

        <div className="mt-4 p-5 rounded-md bg-[rgba(20,172,142,0.12)] border-l-2 border-teal">
          <strong className="text-teal block mb-2">Fair price for work done, friend deal: $18,000–$24,000</strong>
          <p className="text-[12px] text-muted-foreground">
            Accounts for AI-assisted development compression, the two gaps above, and the relationship. 
            Not a wholesale number — the architecture and product thinking have standalone value a contract 
            house would charge significantly more for.
          </p>
        </div>
      </section>

      {/* Section 3: Completion */}
      <section className="mb-13 animate-fade-up animate-delay-3">
        <div className="flex items-center gap-3 mb-5">
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            03 — Completion
          </span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
        </div>
        <h2 className="font-serif text-[28px] font-light text-foreground mb-6">Full value when done</h2>
        
        <table className="w-full mb-5">
          <thead>
            <tr className="border-b border-[rgba(255,255,255,0.07)]">
              <th className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase p-0 pb-3 text-left font-normal w-[55%]">Remaining work</th>
              <th className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase p-0 pb-3 text-right font-normal">Hours</th>
              <th className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase p-0 pb-3 text-right font-normal">Value</th>
            </tr>
          </thead>
          <tbody>
            {remainingWork.map((item) => (
              <tr key={item.name} className="border-b border-[rgba(255,255,255,0.07)] last:border-b-0">
                <td className="py-3 pr-3 text-[13px] text-foreground">{item.name}</td>
                <td className="py-3 font-mono text-[12px] text-muted-foreground text-right whitespace-nowrap">{item.hours}</td>
                <td className="py-3 font-mono text-[12px] text-teal text-right whitespace-nowrap">{item.value}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="border-t border-[rgba(20,172,142,0.3)]">
              <td className="pt-4 text-left font-mono text-[11px] tracking-[0.08em] uppercase text-muted-foreground">Core completion subtotal</td>
              <td colSpan={2} className="pt-4 text-right font-mono text-[13px] text-foreground">
                96–147 hrs · $12,000–$18,375
              </td>
            </tr>
          </tfoot>
        </table>

        <div className="grid grid-cols-3 gap-px bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.07)] rounded-lg overflow-hidden my-6">
          <div className="bg-card p-5">
            <div className="font-serif text-[36px] font-light text-teal leading-none mb-2">$18–24k</div>
            <div className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase leading-tight">
              Value today<br />(friend rate)
            </div>
          </div>
          <div className="bg-card p-5">
            <div className="font-serif text-[36px] font-light text-teal leading-none mb-2">$33–47k</div>
            <div className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase leading-tight">
              Full platform<br />(no mobile)
            </div>
          </div>
          <div className="bg-card p-5">
            <div className="font-serif text-[36px] font-light text-teal leading-none mb-2">$43–62k</div>
            <div className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase leading-tight">
              Full platform<br />(with mobile)
            </div>
          </div>
        </div>

        <p className="text-[12px] text-muted-foreground">
          Mobile (React Native) is a separate project — $10,000–$15,000. Not a continuation of this codebase. 
          These are technology-asset values. Business value if the product scales commercially is a separate, larger number.
        </p>
      </section>

      {/* Section 4: Retainer */}
      <section className="mb-13 animate-fade-up animate-delay-4">
        <div className="flex items-center gap-3 mb-5">
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            04 — Ongoing
          </span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
        </div>
        <h2 className="font-serif text-[28px] font-light text-foreground mb-6">Monthly retainer</h2>
        
        <table className="w-full mb-5">
          <thead>
            <tr className="border-b border-[rgba(255,255,255,0.07)]">
              <th className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase p-0 pb-3 text-left font-normal">Monthly activity</th>
              <th className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground uppercase p-0 pb-3 text-right font-normal">Hours</th>
            </tr>
          </thead>
          <tbody>
            {retainerItems.map((item) => (
              <tr key={item.name} className="border-b border-[rgba(255,255,255,0.07)] last:border-b-0">
                <td className="py-3 text-[13px] text-foreground">{item.name}</td>
                <td className="py-3 font-mono text-[12px] text-muted-foreground text-right whitespace-nowrap">{item.hours}</td>
              </tr>
            ))}
            <tr className="border-b border-[rgba(255,255,255,0.07)]">
              <td className="py-3 text-[13px] text-foreground font-medium">Total</td>
              <td className="py-3 font-mono text-[12px] text-muted-foreground text-right whitespace-nowrap font-medium">7–14 hrs/mo</td>
            </tr>
          </tbody>
        </table>

        <div className="p-5 rounded-md bg-[rgba(20,172,142,0.12)] border-l-2 border-teal">
          <strong className="text-teal block mb-2">Recommended retainer: $1,000–$1,200 / month</strong>
          <p className="text-[12px] text-muted-foreground">
            Market rate for this scope is $1,750–$3,500. The $1,000–$1,200 range covers real time without 
            locking either party into a bad deal. Reassess at 6 months.
          </p>
        </div>

        <div className="mt-4 p-5 rounded-md bg-[rgba(201,136,58,0.1)] border-l-2 border-amber">
          <strong className="text-amber block mb-2">Do you need it?</strong>
          <p className="text-[13px] text-foreground">
            Yes, for the first 6 months minimum. Stripe webhooks will need debugging when real money flows. 
            OpenAI, ElevenLabs, and Supabase APIs change. Production bugs surface after real users, not in testing. 
            After that — if you&apos;re not actively adding features — a technically-minded operator could manage 
            routine maintenance, with a budget for ad-hoc fixes ($500–1,500 per incident) as needed.
          </p>
        </div>
      </section>

      {/* Section 5: Deal Structure */}
      <section className="mb-13 animate-fade-up animate-delay-5">
        <div className="flex items-center gap-3 mb-5">
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            05 — Structure
          </span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
        </div>
        <h2 className="font-serif text-[28px] font-light text-foreground mb-6">Deal options</h2>
        
        <div className="grid md:grid-cols-3 gap-px bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.07)] rounded-lg overflow-hidden my-6">
          <div className="bg-card p-5">
            <div className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase mb-3">Option A</div>
            <h4 className="font-serif text-[17px] font-normal text-foreground mb-3 leading-tight">Clean purchase</h4>
            <p className="text-[12px] text-muted-foreground leading-relaxed">
              $20K for current deliverable + milestone payments for completion + $1,000/mo retainer for 6 months. 
              Clear, simple, no ambiguity.
            </p>
          </div>
          <div className="bg-[rgba(20,172,142,0.12)] p-5">
            <div className="font-mono text-[10px] tracking-[0.15em] text-teal uppercase mb-3">Option B — Recommended</div>
            <h4 className="font-serif text-[17px] font-normal text-foreground mb-3 leading-tight">Hybrid with equity</h4>
            <p className="text-[12px] text-muted-foreground leading-relaxed">
              $18K for current work + milestone payments for completion + meaningful equity stake. Builder stays engaged, 
              has upside if it succeeds, you don&apos;t overpay for a handoff to someone who walks away.
            </p>
          </div>
          <div className="bg-card p-5">
            <div className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase mb-3">Option C</div>
            <h4 className="font-serif text-[17px] font-normal text-foreground mb-3 leading-tight">Equity-first</h4>
            <p className="text-[12px] text-muted-foreground leading-relaxed">
              Smaller cash + larger equity + developer as technical co-founder. Best if both parties believe 
              the business upside justifies the risk. Requires aligned vision on timeline and direction.
            </p>
          </div>
        </div>

        <p className="text-[12px] text-muted-foreground">
          The equity path is what the developer has said he wants. If the investor believes in the product, 
          that&apos;s the structure that creates the best long-term alignment — the builder stays motivated, 
          and you get continued technical ownership without a replacement hire.
        </p>
      </section>

      {/* Section 6: Summary */}
      <section className="mb-13 animate-fade-up animate-delay-6">
        <div className="flex items-center gap-3 mb-5">
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            06 — Summary
          </span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
        </div>
        <h2 className="font-serif text-[28px] font-light text-foreground mb-6">The numbers</h2>
        
        <table className="w-full">
          <tbody>
            <tr className="border-b border-[rgba(255,255,255,0.07)] bg-[rgba(20,172,142,0.12)]">
              <td className="py-3 px-4 text-[13px] text-muted-foreground">Value of work done today (friend rate)</td>
              <td className="py-3 px-4 font-mono text-[12px] text-teal text-right">$18,000–$24,000</td>
            </tr>
            <tr className="border-b border-[rgba(255,255,255,0.07)]">
              <td className="py-3 px-4 text-[13px] text-muted-foreground">What&apos;s left to build (core, no mobile)</td>
              <td className="py-3 px-4 font-mono text-[12px] text-teal text-right">96–147 hrs / $12,000–$18,375</td>
            </tr>
            <tr className="border-b border-[rgba(255,255,255,0.07)]">
              <td className="py-3 px-4 text-[13px] text-muted-foreground">Full platform value — no mobile</td>
              <td className="py-3 px-4 font-mono text-[12px] text-teal text-right">$33,000–$47,000</td>
            </tr>
            <tr className="border-b border-[rgba(255,255,255,0.07)]">
              <td className="py-3 px-4 text-[13px] text-muted-foreground">Full platform value — with mobile</td>
              <td className="py-3 px-4 font-mono text-[12px] text-teal text-right">$43,000–$62,000</td>
            </tr>
            <tr className="border-b border-[rgba(255,255,255,0.07)]">
              <td className="py-3 px-4 text-[13px] text-muted-foreground">Mobile app (separate project)</td>
              <td className="py-3 px-4 font-mono text-[12px] text-teal text-right">$10,000–$15,000</td>
            </tr>
            <tr className="border-b border-[rgba(255,255,255,0.07)] bg-[rgba(20,172,142,0.12)]">
              <td className="py-3 px-4 text-[13px] text-muted-foreground">Monthly retainer (fair friend rate)</td>
              <td className="py-3 px-4 font-mono text-[12px] text-teal text-right">$1,000–$1,200 / mo</td>
            </tr>
            <tr>
              <td className="py-3 px-4 text-[13px] text-muted-foreground">Do you need the retainer?</td>
              <td className="py-3 px-4 text-[13px] text-foreground text-right">Yes for 6 months, reassess after</td>
            </tr>
          </tbody>
        </table>
      </section>

      <SiteFooter />
      <ElevenLabsWidget />
    </main>
  )
}
