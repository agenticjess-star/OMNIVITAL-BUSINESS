import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ElevenLabsWidget } from "@/components/elevenlabs-widget"
import { Check, Circle } from "lucide-react"

const phases = [
  {
    number: "01",
    name: "Foundation",
    window: "Complete",
    hours: "Delivered",
    color: "teal",
    colorClass: "text-teal",
    bgClass: "bg-teal",
    shadowClass: "shadow-[0_0_8px_var(--teal)]",
    unlock: "A fully deployed, working wellness SaaS. Real users can sign up, build a ritual, log check-ins, talk to the AI advisor, use the voice agent, and participate in the community. The platform works end-to-end — except money doesn't flow yet.",
    deliverables: [
      { title: "Full-stack architecture (React 18, FastAPI, Supabase, MongoDB)", done: true },
      { title: "AI Advisor with personalized ritual context (GPT-4.1)", done: true },
      { title: "ElevenLabs voice agent with dynamic user context", done: true },
      { title: "Real-time community (threads, replies, likes, privacy badges)", done: true },
      { title: "Ritual tracker, calendar heatmap, streak system", done: true },
      { title: "6-product catalog, detail pages, checkout UI, Vercel deployment", done: true },
    ]
  },
  {
    number: "02",
    name: "Revenue Ready",
    window: "Weeks 1–4",
    hours: "~45–58 hrs",
    color: "amber",
    colorClass: "text-amber",
    bgClass: "bg-amber",
    shadowClass: "shadow-[0_0_8px_var(--amber)]",
    unlock: "Money flows. The platform can actually charge customers, receive real subscriptions, and process billing events. Without this phase, OmniVital has no path to commercial validation — this is the highest-priority work remaining.",
    deliverables: [
      { 
        title: "Stripe integration — subscriptions, webhooks, billing portal", 
        done: false,
        tags: [{ label: "Critical", color: "red" }, { label: "Revenue", color: "teal" }],
        detail: "The checkout UI and database field already exist. Wire Stripe Checkout to the Subscribe Now flow, handle webhook events (payment success, cancellation, renewal), expose a billing portal for customers."
      },
      { 
        title: "Profile onboarding flow", 
        done: false,
        tags: [{ label: "Retention", color: "teal" }],
        detail: "Set name, wellness goals, and color badge during first login. Currently a new user lands in an empty dashboard. Onboarding creates the ritual context that makes the AI advisor immediately useful."
      },
      { 
        title: "Community moderation — admin pin, delete, flag", 
        done: false,
        tags: [{ label: "Ops", color: "teal" }],
        detail: "Before opening the community to real users, admin controls are required. Unpinned spam or abuse with no moderation path is a launch blocker."
      },
    ]
  },
  {
    number: "03",
    name: "Growth Layer",
    window: "Weeks 4–10",
    hours: "~65–95 hrs",
    color: "purple",
    colorClass: "text-purple",
    bgClass: "bg-purple",
    shadowClass: "shadow-[0_0_8px_var(--purple)]",
    unlock: "The platform moves from transactional to habitual. Reminders bring users back daily. The admin dashboard makes the business operationally viable. Apple Watch sync delivers the core differentiator that's already in the marketing — and the advisor becomes genuinely research-grade.",
    deliverables: [
      { 
        title: "Apple Watch biometric sync", 
        done: false,
        tags: [{ label: "Differentiator", color: "blue" }, { label: "In pitch — not built", color: "red" }],
        detail: "Currently referenced in marketing and the Collective pitch but not implemented. HealthKit integration, HRV + sleep + activity data into user profiles, advisor and community context. This is what makes the color-matched signature system real."
      },
      { 
        title: "Ritual reminders — push and email", 
        done: false,
        tags: [{ label: "Engagement", color: "purple" }],
        detail: "Scheduled notifications at each ritual window (morning, midday, evening). Direct driver of daily active users, check-in rates, and streaks — the metrics that prove product value."
      },
      { 
        title: "Admin dashboard — analytics, user management, product control", 
        done: false,
        tags: [{ label: "Ops", color: "purple" }],
        detail: "Revenue reporting, active subscriber counts, ritual adherence heatmaps, user analytics, ability to manage the product catalog without a code deploy."
      },
      { 
        title: "RAG advisor — research doc ingestion and citations", 
        done: false,
        tags: [{ label: "Differentiator", color: "blue" }],
        detail: "Ground the AI advisor in a curated library of clinical research. Responses become citable, accurate, and defensibly different from generic ChatGPT wellness advice."
      },
    ]
  },
  {
    number: "04",
    name: "Platform Expansion",
    window: "Month 3+",
    hours: "~100–140 hrs",
    color: "blue",
    colorClass: "text-blue",
    bgClass: "bg-blue",
    shadowClass: "shadow-[0_0_8px_var(--blue)]",
    unlock: "OmniVital becomes a full ecosystem — not a web app. Mobile brings the platform into every pocket, everywhere. Community DMs turn the Collective from a public board into a genuine connection layer. The partner white-label system turns the platform into a B2B revenue channel alongside D2C.",
    deliverables: [
      { 
        title: "Mobile app — React Native", 
        done: false,
        later: true,
        tags: [{ label: "Scale", color: "purple" }],
        detail: "Core screens: dashboard, ritual tracker, AI advisor chat, community feed. Separate project from this codebase — React Native port, not an extension. Push notifications, biometric integration, App Store distribution. Estimated 80–120 hrs as a standalone build."
      },
      { 
        title: "Community DMs", 
        done: false,
        later: true,
        tags: [{ label: "Retention", color: "purple" }],
        detail: "Privacy-first direct messaging using color badge identities, not names. Extends the Collective from a broadcast community into a connection network."
      },
      { 
        title: "Partner white-label portal", 
        done: false,
        later: true,
        tags: [{ label: "B2B Revenue", color: "teal" }],
        detail: "The Collective portal deployed under a partner's brand — gym, influencer, or retailer. Their members, their health signature, their retention layer. Separate partner admin, custom color systems, revenue share infrastructure."
      },
      { 
        title: "Ritual AI summary — auto-generated from logs", 
        done: false,
        later: true,
        tags: [{ label: "Intelligence", color: "blue" }],
        detail: "Automatically update each user's ritual_summary based on accumulated check-in data, feeling scores, and adherence patterns. Advisor becomes progressively more personalized over time without user effort."
      },
    ]
  },
]

function getTagColor(color: string) {
  switch (color) {
    case "red": return "bg-[rgba(200,70,60,0.12)] text-[#c84640]"
    case "teal": return "bg-[rgba(20,172,142,0.12)] text-teal"
    case "purple": return "bg-[rgba(155,127,212,0.1)] text-purple"
    case "blue": return "bg-[rgba(91,155,213,0.1)] text-blue"
    default: return "bg-[rgba(255,255,255,0.04)] text-muted-foreground"
  }
}

export default function RoadmapPage() {
  return (
    <main className="max-w-[820px] mx-auto px-8 py-16 md:py-20">
      <SiteHeader />
      
      {/* Hero */}
      <div className="animate-fade-up mb-14">
        <h1 className="font-serif text-[40px] md:text-[48px] font-light leading-[1.1] text-foreground mb-4 tracking-[-0.01em]">
          From working platform<br />
          <em className="text-muted-foreground">to market-ready OS.</em>
        </h1>
        <p className="text-sm text-muted-foreground max-w-[560px] leading-relaxed">
          Four phases. The foundation is deployed. What follows turns a functional product into a 
          revenue-generating, defensibly differentiated wellness platform.
        </p>
      </div>

      <div className="flex items-center gap-3 mb-8 animate-fade-up animate-delay-1">
        <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
          Build sequence
        </span>
        <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
      </div>

      {/* Timeline */}
      <div className="relative">
        {phases.map((phase, phaseIndex) => (
          <div 
            key={phase.number} 
            className={`grid md:grid-cols-[180px_1fr] gap-0 mb-px animate-fade-up`}
            style={{ animationDelay: `${0.1 + phaseIndex * 0.07}s` }}
          >
            {/* Left col — phase meta */}
            <div className="py-7 pr-7 md:border-r border-[rgba(255,255,255,0.07)] relative">
              {/* Phase dot */}
              <div className={`hidden md:block w-2 h-2 rounded-full absolute right-[-5px] top-9 ${phase.bgClass} ${phase.shadowClass}`} />
              <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-1">
                Phase {phase.number}
              </div>
              <div className={`font-serif text-[24px] font-light leading-tight mb-2 ${phase.colorClass}`}>
                {phase.name.split(" ").map((word, i) => (
                  <span key={i}>
                    {word}
                    {i < phase.name.split(" ").length - 1 && <br />}
                  </span>
                ))}
              </div>
              <div className="font-mono text-[11px] text-foreground/70">{phase.window}</div>
              <div className={`font-mono text-[10px] mt-1 text-muted-foreground`}>
                {phase.hours === "Delivered" ? "✓ " : ""}{phase.hours}
              </div>
            </div>

            {/* Right col — content */}
            <div className="py-7 md:pl-8">
              <div className="text-[11px] text-muted-foreground/70 leading-relaxed mb-5 pb-4 border-b border-[rgba(255,255,255,0.07)]">
                <strong className="block font-mono text-[9px] tracking-[0.12em] uppercase mb-1 text-muted-foreground/50">
                  What this unlocks
                </strong>
                {phase.unlock}
              </div>

              <div className="flex flex-col gap-px">
                {phase.deliverables.map((item, i) => (
                  <div 
                    key={i} 
                    className={`flex items-start gap-3 bg-card p-3 ${
                      i === 0 ? "rounded-t-md" : ""
                    } ${
                      i === phase.deliverables.length - 1 ? "rounded-b-md" : ""
                    }`}
                  >
                    <div className={`w-[18px] h-[18px] rounded-sm flex-shrink-0 mt-0.5 flex items-center justify-center ${
                      item.done 
                        ? "bg-[rgba(20,172,142,0.22)]" 
                        : item.later 
                          ? "bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.07)]"
                          : "bg-[rgba(201,136,58,0.1)] border border-[rgba(201,136,58,0.3)]"
                    }`}>
                      {item.done ? (
                        <Check className="w-2.5 h-2.5 text-teal" strokeWidth={2} />
                      ) : (
                        <Circle className={`w-2.5 h-2.5 ${item.later ? "text-[#4a4845]" : "text-amber"}`} strokeWidth={2} />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-[13px] text-foreground font-medium leading-snug">
                        {item.title}
                        {item.tags?.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className={`inline-block font-mono text-[8px] tracking-[0.1em] uppercase px-1.5 py-0.5 rounded-sm ml-2 align-middle relative -top-px ${getTagColor(tag.color)}`}
                          >
                            {tag.label}
                          </span>
                        ))}
                      </div>
                      {item.detail && (
                        <div className="text-[10px] text-muted-foreground/60 mt-1 leading-relaxed">
                          {item.detail}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.07)] rounded-lg overflow-hidden mt-12 animate-fade-up animate-delay-5">
        <div className="bg-card p-5">
          <div className="w-1.5 h-1.5 rounded-full bg-teal mb-3" />
          <div className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase mb-1.5">Phase 1</div>
          <div className="font-serif text-[26px] font-light text-teal leading-none">Done</div>
          <div className="font-mono text-[10px] text-muted-foreground mt-1.5 leading-relaxed">
            Platform deployed<br />$18–24k value
          </div>
        </div>
        <div className="bg-card p-5">
          <div className="w-1.5 h-1.5 rounded-full bg-amber mb-3" />
          <div className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase mb-1.5">Phase 2 · Weeks 1–4</div>
          <div className="font-serif text-[26px] font-light text-amber leading-none">~$6–8k</div>
          <div className="font-mono text-[10px] text-muted-foreground mt-1.5 leading-relaxed">
            Revenue turns on<br />45–58 hrs
          </div>
        </div>
        <div className="bg-card p-5">
          <div className="w-1.5 h-1.5 rounded-full bg-purple mb-3" />
          <div className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase mb-1.5">Phase 3 · Weeks 4–10</div>
          <div className="font-serif text-[26px] font-light text-purple leading-none">~$8–12k</div>
          <div className="font-mono text-[10px] text-muted-foreground mt-1.5 leading-relaxed">
            Growth layer built<br />65–95 hrs
          </div>
        </div>
        <div className="bg-card p-5">
          <div className="w-1.5 h-1.5 rounded-full bg-blue mb-3" />
          <div className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase mb-1.5">Phase 4 · Month 3+</div>
          <div className="font-serif text-[26px] font-light text-blue leading-none">~$12–18k</div>
          <div className="font-mono text-[10px] text-muted-foreground mt-1.5 leading-relaxed">
            Full ecosystem<br />100–140 hrs
          </div>
        </div>
      </div>

      <SiteFooter />
      <ElevenLabsWidget />
    </main>
  )
}
