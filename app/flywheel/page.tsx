"use client"

import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ElevenLabsWidget } from "@/components/elevenlabs-widget"
import { useEffect, useRef, useState } from "react"

const stages = [
  {
    number: "01",
    name: "Acquisition",
    subtitle: "The First Touch",
    color: "teal",
    colorClass: "text-teal",
    bgClass: "bg-teal",
    shadowClass: "shadow-[0_0_12px_var(--teal)]",
    dimClass: "bg-[rgba(20,172,142,0.12)]",
    description: "A visitor lands. Instead of a static product grid, they meet a voice agent. The agent asks two questions: what's your goal, what's in the way. Based on their answers, it navigates the site for them — no browsing required. It recommends a ritual. It handles objections. It takes them to checkout.",
    keyPoint: "Voice-first discovery replaces static browsing"
  },
  {
    number: "02",
    name: "Conversion",
    subtitle: "The Ritual Bundle",
    color: "amber",
    colorClass: "text-amber",
    bgClass: "bg-amber",
    shadowClass: "shadow-[0_0_12px_var(--amber)]",
    dimClass: "bg-[rgba(201,136,58,0.1)]",
    description: "The product catalog is engineered as a morning / midday / evening protocol. Cross-sell is built into the logic of the product itself. A customer buying OV Drive at 7am naturally needs OV Quiet Focus at noon and OV Neuro Night at 9pm. The ritual sells the bundle. The bundle increases order value without a single upsell prompt.",
    keyPoint: "Product logic drives bundle conversion"
  },
  {
    number: "03",
    name: "Activation",
    subtitle: "The First Day",
    color: "purple",
    colorClass: "text-purple",
    bgClass: "bg-purple",
    shadowClass: "shadow-[0_0_12px_var(--purple)]",
    dimClass: "bg-[rgba(155,127,212,0.1)]",
    description: "Checkout creates the account. The dashboard is ready immediately — ritual stack populated, color badge assigned, community threads visible. The member sees the community before their order ships. Identity forms before the first pill is taken.",
    keyPoint: "Identity forms before product arrives"
  },
  {
    number: "04",
    name: "Retention",
    subtitle: "The Daily Loop",
    color: "blue",
    colorClass: "text-blue",
    bgClass: "bg-blue",
    shadowClass: "shadow-[0_0_12px_var(--blue)]",
    dimClass: "bg-[rgba(91,155,213,0.1)]",
    description: "Every day the agent asks one question: how did you feel? The user logs a score. The streak builds. The advisor references their history. The community sees people at week 8 and week 12 describing results. The member can see their own 7-day trend. Progress becomes visible. Visible progress creates intrinsic motivation to continue.",
    keyPoint: "Visible progress drives daily engagement"
  },
  {
    number: "05",
    name: "Expansion",
    subtitle: "The Annual Nudge",
    color: "teal",
    colorClass: "text-teal",
    bgClass: "bg-teal",
    shadowClass: "shadow-[0_0_12px_var(--teal)]",
    dimClass: "bg-[rgba(20,172,142,0.12)]",
    description: "After 60–90 days of logged data, the advisor has context. It doesn't send a discount email. It references the user's actual trajectory: \"You've logged 47 check-ins. Your average score moved from 2.8 to 4.1. Subscribing for a year locks your rate and removes the reorder friction.\" The offer lands with evidence, not pressure.",
    keyPoint: "Data-driven upsell, not discount spam"
  },
]

function FlywheelDiagram() {
  const [activeStage, setActiveStage] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const diagramRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )
    
    if (diagramRef.current) {
      observer.observe(diagramRef.current)
    }
    
    return () => observer.disconnect()
  }, [])
  
  useEffect(() => {
    if (!isVisible) return
    const interval = setInterval(() => {
      setActiveStage((prev) => (prev + 1) % 5)
    }, 3000)
    return () => clearInterval(interval)
  }, [isVisible])
  
  const stageColors = [
    { color: "#14ac8e", label: "Acquisition" },
    { color: "#c9883a", label: "Conversion" },
    { color: "#9b7fd4", label: "Activation" },
    { color: "#5b9bd5", label: "Retention" },
    { color: "#14ac8e", label: "Expansion" },
  ]
  
  return (
    <div ref={diagramRef} className="relative w-full max-w-[280px] md:max-w-[360px] mx-auto aspect-square">
      {/* Outer ring */}
      <svg className="w-full h-full" viewBox="0 0 400 400">
        {/* Background circle */}
        <circle
          cx="200"
          cy="200"
          r="160"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="2"
        />
        
        {/* Animated segments */}
        {stageColors.map((stage, i) => {
          const angle = (i * 72 - 90) * (Math.PI / 180)
          const nextAngle = ((i + 1) * 72 - 90) * (Math.PI / 180)
          const isActive = activeStage === i
          
          const x1 = 200 + 160 * Math.cos(angle)
          const y1 = 200 + 160 * Math.sin(angle)
          const x2 = 200 + 160 * Math.cos(nextAngle)
          const y2 = 200 + 160 * Math.sin(nextAngle)
          
          return (
            <g key={i}>
              {/* Segment arc */}
              <path
                d={`M 200 200 L ${x1} ${y1} A 160 160 0 0 1 ${x2} ${y2} Z`}
                fill={isActive ? `${stage.color}15` : "transparent"}
                stroke={stage.color}
                strokeWidth={isActive ? "3" : "1"}
                strokeOpacity={isActive ? 1 : 0.3}
                className="transition-all duration-700"
                style={{
                  filter: isActive ? `drop-shadow(0 0 12px ${stage.color})` : "none"
                }}
              />
              
              {/* Stage dot */}
              <circle
                cx={200 + 130 * Math.cos((angle + nextAngle) / 2)}
                cy={200 + 130 * Math.sin((angle + nextAngle) / 2)}
                r={isActive ? 8 : 5}
                fill={stage.color}
                className="transition-all duration-500"
                style={{
                  filter: isActive ? `drop-shadow(0 0 8px ${stage.color})` : "none"
                }}
              />
            </g>
          )
        })}
        
        {/* Center pulse */}
        <circle
          cx="200"
          cy="200"
          r="50"
          fill="rgba(20,172,142,0.08)"
          stroke="rgba(20,172,142,0.3)"
          strokeWidth="1"
        />
        <circle
          cx="200"
          cy="200"
          r="30"
          fill="rgba(20,172,142,0.15)"
          className={isVisible ? "animate-pulse" : ""}
        />
        
        {/* Center arrows suggesting rotation */}
        <path
          d="M 185 200 Q 200 185 215 200 Q 200 215 185 200"
          fill="none"
          stroke="#14ac8e"
          strokeWidth="2"
          strokeLinecap="round"
          className={isVisible ? "animate-spin" : ""}
          style={{ transformOrigin: "200px 200px", animationDuration: "8s" }}
        />
      </svg>
      
      {/* Labels - hidden on mobile to prevent overflow */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {stageColors.map((stage, i) => {
          const angle = (i * 72 - 90) * (Math.PI / 180)
          const nextAngle = ((i + 1) * 72 - 90) * (Math.PI / 180)
          const midAngle = (angle + nextAngle) / 2
          const labelRadius = 195
          const x = 50 + (50 + labelRadius * Math.cos(midAngle) / 4)
          const y = 50 + (50 + labelRadius * Math.sin(midAngle) / 4)
          const isActive = activeStage === i
          
          return (
            <div
              key={i}
              className={`absolute font-mono text-[9px] tracking-[0.15em] uppercase transition-all duration-500 ${
                isActive ? "opacity-100" : "opacity-40"
              }`}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
                color: stage.color
              }}
            >
              {stage.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default function FlywheelPage() {
  const [visibleStages, setVisibleStages] = useState<Set<number>>(new Set())
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute("data-index") || "0")
          if (entry.isIntersecting) {
            setVisibleStages((prev) => new Set([...prev, index]))
          }
        })
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }
    )
    
    document.querySelectorAll("[data-stage]").forEach((el) => observer.observe(el))
    
    return () => observer.disconnect()
  }, [])
  
  return (
    <main className="max-w-[820px] mx-auto px-8 py-16 md:py-20 overflow-x-hidden">
      <SiteHeader />
      
      {/* Hero */}
      <div className="animate-fade-up mb-14">
        <h1 className="font-serif text-[40px] md:text-[48px] font-light leading-[1.1] text-foreground mb-4 tracking-[-0.01em]">
          The business profits<br />
          <em className="text-muted-foreground">when customers improve.</em>
        </h1>
        <p className="text-sm text-muted-foreground max-w-[560px] leading-relaxed">
          A conversion and retention flywheel where every stage reinforces the next. 
          The alignment that makes this model defensible.
        </p>
      </div>

      {/* Flywheel Visual */}
      <div className="mb-16 animate-fade-up animate-delay-1">
        <FlywheelDiagram />
      </div>

      {/* Section header */}
      <div className="flex items-center gap-3 mb-8 animate-fade-up animate-delay-2">
        <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
          The five stages
        </span>
        <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
      </div>

      {/* Stages */}
      <div className="space-y-0">
        {stages.map((stage, index) => (
          <div
            key={stage.number}
            data-stage
            data-index={index}
            className={`grid md:grid-cols-[140px_1fr] gap-0 border-b border-[rgba(255,255,255,0.07)] last:border-b-0 transition-all duration-700 ${
              visibleStages.has(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: `${index * 0.1}s` }}
          >
            {/* Left column - stage meta */}
            <div className="py-8 pr-6 md:border-r border-[rgba(255,255,255,0.07)] relative">
              {/* Stage dot with glow */}
              <div className={`hidden md:block w-2.5 h-2.5 rounded-full absolute right-[-6px] top-10 ${stage.bgClass} ${stage.shadowClass} transition-all duration-500`} />
              
              <div className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase mb-2">
                Stage {stage.number}
              </div>
              <div className={`font-serif text-[22px] font-light leading-tight mb-1 ${stage.colorClass}`}>
                {stage.name}
              </div>
              <div className="font-mono text-[10px] text-muted-foreground tracking-[0.05em]">
                {stage.subtitle}
              </div>
            </div>

            {/* Right column - content */}
            <div className="py-8 md:pl-8">
              <p className="text-[13px] text-foreground leading-relaxed mb-4">
                {stage.description}
              </p>
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-sm ${stage.dimClass}`}>
                <div className={`w-1.5 h-1.5 rounded-full ${stage.bgClass}`} />
                <span className={`font-mono text-[10px] tracking-[0.1em] uppercase ${stage.colorClass}`}>
                  {stage.keyPoint}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* The Flywheel Effect */}
      <div className="mt-14 animate-fade-up animate-delay-3">
        <div className="flex items-center gap-3 mb-6">
          <span className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
            The compounding effect
          </span>
          <div className="flex-1 h-px bg-[rgba(255,255,255,0.07)]" />
        </div>
        
        <div className="p-6 rounded-lg bg-card border border-[rgba(255,255,255,0.07)]">
          <p className="text-[14px] text-foreground leading-relaxed mb-6">
            Members who see results become active in the community. Active community members validate 
            the product for new visitors. New visitors convert at higher rates because they see real 
            people at week 8 — not stock photography.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 rounded-md bg-[rgba(20,172,142,0.08)] border border-[rgba(20,172,142,0.2)]">
              <div className="font-serif text-[28px] font-light text-teal leading-none mb-2">Higher</div>
              <div className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase">
                Conversion rates from<br />social proof
              </div>
            </div>
            <div className="p-4 rounded-md bg-[rgba(201,136,58,0.08)] border border-[rgba(201,136,58,0.2)]">
              <div className="font-serif text-[28px] font-light text-amber leading-none mb-2">Better</div>
              <div className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase">
                AI context from<br />more data
              </div>
            </div>
            <div className="p-4 rounded-md bg-[rgba(155,127,212,0.08)] border border-[rgba(155,127,212,0.2)]">
              <div className="font-serif text-[28px] font-light text-purple leading-none mb-2">Deeper</div>
              <div className="font-mono text-[10px] tracking-[0.1em] text-muted-foreground uppercase">
                Member engagement<br />over time
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core alignment callout */}
      <div className="mt-8 p-5 rounded-md bg-[rgba(20,172,142,0.12)] border-l-2 border-teal animate-fade-up animate-delay-4">
        <p className="text-[14px] leading-relaxed">
          <strong className="text-teal">The core alignment:</strong>{" "}
          <span className="text-foreground">
            Higher conversion funds better product and better AI context. Better AI context drives 
            better outcomes. Better outcomes produce more engaged members. The business profits when 
            customers improve. That&apos;s the alignment that makes the flywheel defensible.
          </span>
        </p>
      </div>

      <SiteFooter />
      <ElevenLabsWidget />
    </main>
  )
}
