"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const pathname = usePathname()
  
  return (
    <header className="flex flex-col sm:flex-row justify-between items-start gap-4 mb-14 pb-8 border-b border-[rgba(255,255,255,0.07)]">
      <Link href="/" className="font-serif text-[22px] font-light tracking-[0.12em] text-foreground uppercase">
        Omni<span className="text-teal">Vital</span>
      </Link>
      <nav className="flex items-center gap-6">
        <Link 
          href="/valuation" 
          className={`font-mono text-[11px] tracking-[0.1em] uppercase transition-colors hover:text-teal ${
            pathname === '/valuation' ? 'text-teal' : 'text-muted-foreground'
          }`}
        >
          Valuation
        </Link>
        <Link 
          href="/roadmap" 
          className={`font-mono text-[11px] tracking-[0.1em] uppercase transition-colors hover:text-teal ${
            pathname === '/roadmap' ? 'text-teal' : 'text-muted-foreground'
          }`}
        >
          Roadmap
        </Link>
      </nav>
    </header>
  )
}
