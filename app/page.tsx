// app/page.tsx — SERVER COMPONENT (no 'use client')
// Assembles sections in order from siteConfig.layout.sectionOrder.
// Crawlers (GPTBot, ClaudeBot, PerplexityBot) read plain HTML from every section.
import { siteConfig } from '@/site.config'
import { getSiteFlags } from '@/lib/flags'
import { Suspense } from 'react'
import HeroSection       from '@/components/HeroSection'
import MarqueeBar        from '@/components/MarqueeBar'
import HowItWorksSection from '@/components/HowItWorksSection'
import FeaturesGrid      from '@/components/FeaturesGrid'
import FAQSection        from '@/components/FAQSection'
import FinalCTA          from '@/components/FinalCTA'

// ── Setup Steps + Escalation Heatmap (static UI) ─────────────
function SetupAndHeatmap() {
  return (
    <>
      {/* 3 steps to live */}
      <section className="py-8 px-4 sm:px-6 max-w-5xl mx-auto" style={{ borderTop: '1px solid rgba(217,119,6,0.08)' }}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
          <span className="text-sm font-bold text-slate-500 mr-2">Up and running in 3 steps →</span>
          {[
            { n: '1', label: 'Add your shop' },
            { n: '2', label: 'Invite your techs' },
            { n: '3', label: 'Start taking tickets' },
          ].map((s) => (
            <div key={s.n} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm text-slate-600" style={{ border: '1px solid rgba(217,119,6,0.14)', background: 'rgba(217,119,6,0.05)' }}>
              <span className="w-5 h-5 rounded-full text-amber-700 text-xs font-bold flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(217,119,6,0.15)' }}>{s.n}</span>
              {s.label}
            </div>
          ))}
        </div>
      </section>

      {/* Repair issue heatmap teaser */}
      <section className="py-8 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="rounded-2xl p-6 bg-white shadow-sm" style={{ border: '1px solid rgba(217,119,6,0.10)' }}>
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <div>
              <h3 className="text-slate-800 font-bold text-base mb-0.5">Issue Frequency Breakdown</h3>
              <p className="text-slate-400 text-xs">Most common repair types across your shop — so you always have the right parts stocked</p>
            </div>
            <span className="text-[10px] font-bold px-3 py-1 rounded-full" style={{ border: '1px solid rgba(217,119,6,0.18)', color: '#d97706', background: 'rgba(217,119,6,0.07)' }}>Pro feature</span>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { label: 'Screen & display repairs', pct: 68, color: 'rgba(217,119,6,0.70)'  },
              { label: 'Battery replacements',     pct: 51, color: 'rgba(5,150,105,0.70)'  },
              { label: 'Charging port issues',     pct: 33, color: 'rgba(245,158,11,0.70)' },
            ].map((row) => (
              <div key={row.label}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-slate-500 text-xs">{row.label}</span>
                  <span className="text-slate-400 text-xs">{row.pct}%</span>
                </div>
                <div className="h-2 rounded-full w-full bg-slate-100">
                  <div className="h-2 rounded-full" style={{ width: `${row.pct}%`, background: row.color, transition: 'width 600ms cubic-bezier(0.23,1,0.32,1)' }} />
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-400 text-xs mt-4 text-center">Connect your ticket history to see real breakdowns</p>
        </div>
      </section>
    </>
  )
}

const SECTION_MAP: Record<string, React.ReactNode> = {
  hero:        <HeroSection />,
  marquee:     <MarqueeBar />,
  howItWorks:  <><HowItWorksSection /><SetupAndHeatmap /></>,
  features:    <Suspense fallback={<div className="h-96" />}><FeaturesGrid /></Suspense>,
  faq:         <FAQSection />,
  finalCta:    <FinalCTA />,
}

export default async function HomePage() {
  const flags = await getSiteFlags('quicktech')
  const { sectionOrder, hideSections } = siteConfig.layout

  const ecHide: string[] = []
  if (!flags.pricing) ecHide.push('pricing')
  if (flags.waitlist) ecHide.push('pricing', 'finalCta')

  const allHidden = [...new Set([...hideSections, ...ecHide])]
  const visible = sectionOrder.filter(id => !allHidden.includes(id))

  return (
    <div className="flex flex-col">
      {visible.map(id => (
        <div key={id}>
          {SECTION_MAP[id] ?? null}
        </div>
      ))}
    </div>
  )
}
