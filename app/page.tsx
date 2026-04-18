import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ElevenLabsWidget } from "@/components/elevenlabs-widget"

export default function HomePage() {
  return (
    <main className="max-w-[820px] mx-auto px-8 py-16 md:py-20">
      <SiteHeader />
      
      <div className="animate-fade-up mb-14">
        <h1 className="font-serif text-[48px] md:text-[56px] font-light leading-[1.1] text-foreground mb-4 tracking-[-0.01em]">
          Building wellness<br />
          <em className="text-muted-foreground">that scales.</em>
        </h1>
        <p className="text-sm text-muted-foreground max-w-[560px] leading-relaxed">
          OmniVital is a full-stack wellness platform — AI advisor, community, ritual tracking, 
          and a 6-formula product system. This site contains the project valuation and roadmap.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.07)] rounded-lg overflow-hidden animate-fade-up animate-delay-1">
        <Link 
          href="/valuation" 
          className="bg-card p-6 hover:bg-[#1a1a18] transition-colors group"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-teal shadow-[0_0_8px_var(--teal)]" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              Document
            </span>
          </div>
          <h2 className="font-serif text-[28px] font-light text-foreground mb-2 group-hover:text-teal transition-colors">
            Valuation Report
          </h2>
          <p className="text-[13px] text-muted-foreground leading-relaxed">
            What has been built, what it&apos;s worth, and what comes next. 
            Honest assessment with market-rate benchmarking.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="font-mono text-[12px] text-teal">$18–24k</span>
            <span className="font-mono text-[10px] text-muted-foreground">value today</span>
          </div>
        </Link>
        
        <Link 
          href="/roadmap" 
          className="bg-card p-6 hover:bg-[#1a1a18] transition-colors group"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-2 h-2 rounded-full bg-amber shadow-[0_0_8px_var(--amber)]" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              Strategy
            </span>
          </div>
          <h2 className="font-serif text-[28px] font-light text-foreground mb-2 group-hover:text-amber transition-colors">
            Product Roadmap
          </h2>
          <p className="text-[13px] text-muted-foreground leading-relaxed">
            Four phases from working platform to market-ready OS. 
            Foundation deployed — revenue, growth, and expansion ahead.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <span className="font-mono text-[12px] text-amber">4 Phases</span>
            <span className="font-mono text-[10px] text-muted-foreground">~$33–47k full build</span>
          </div>
        </Link>
      </div>

      <Link 
        href="/flywheel" 
        className="block bg-card p-6 hover:bg-[#1a1a18] transition-colors group border border-[rgba(255,255,255,0.07)] rounded-lg mt-6 animate-fade-up animate-delay-2"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 rounded-full bg-purple shadow-[0_0_8px_var(--purple)]" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            Model
          </span>
        </div>
        <h2 className="font-serif text-[28px] font-light text-foreground mb-2 group-hover:text-purple transition-colors">
          Business Flywheel
        </h2>
        <p className="text-[13px] text-muted-foreground leading-relaxed">
          The conversion and retention engine. Five stages where each reinforces the next — 
          acquisition, conversion, activation, retention, expansion.
        </p>
        <div className="mt-6 flex items-center gap-3">
          <span className="font-mono text-[12px] text-purple">5 Stages</span>
          <span className="font-mono text-[10px] text-muted-foreground">self-reinforcing growth</span>
        </div>
      </Link>

      <div className="grid grid-cols-3 gap-px bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.07)] rounded-lg overflow-hidden mt-6 animate-fade-up animate-delay-3">
        <div className="bg-card p-5">
          <div className="font-serif text-[36px] font-light text-teal leading-none mb-2">11k+</div>
          <div className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase leading-tight">
            Lines of<br />application code
          </div>
        </div>
        <div className="bg-card p-5">
          <div className="font-serif text-[36px] font-light text-teal leading-none mb-2">12</div>
          <div className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase leading-tight">
            Core systems<br />deployed
          </div>
        </div>
        <div className="bg-card p-5">
          <div className="font-serif text-[36px] font-light text-teal leading-none mb-2">Live</div>
          <div className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase leading-tight">
            Vercel + Supabase<br />production ready
          </div>
        </div>
      </div>

      <div className="mt-12 p-5 rounded-md bg-[rgba(20,172,142,0.12)] border-l-2 border-teal animate-fade-up animate-delay-4">
        <p className="text-[13px] leading-relaxed">
          <strong className="text-teal">Talk to the AI advisor.</strong>{" "}
          <span className="text-muted-foreground">
            Click the voice button in the bottom-right corner to speak with OmniaVit, 
            the ElevenLabs-powered voice agent built into this platform.
          </span>
        </p>
      </div>

      <SiteFooter />
      <ElevenLabsWidget />
    </main>
  )
}
