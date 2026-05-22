'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { siteConfig } from '@/site.config'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50" style={{ background: 'rgba(8,7,18,0.60)', backdropFilter: 'blur(24px)', borderBottom: '1px solid rgba(139,92,246,0.15)' }}>
      {/* Animated gradient line at top */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #7c3aed, #d946ef, #7c3aed, transparent)', animation: 'shimmer 3s linear infinite', backgroundSize: '200% 100%' }} />

      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex items-center justify-center w-8 h-8 rounded-lg font-black text-sm text-white" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}>⚡</span>
          <span className="font-black text-lg uppercase tracking-wider text-white">Quick<span className="text-violet-400">Tech</span></span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 text-sm">
          {siteConfig.nav.map(({ label, href }) => (
            <Link key={href} href={href} className="px-3 py-1 rounded-full border border-white/10 text-white/60 hover:text-white hover:border-violet-500/40 transition-all">
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-2">
          <Link href="#ask" className="px-4 py-2 rounded-full text-sm font-bold text-white transition-all hover:scale-105" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}>
            Ask Now ⚡
          </Link>
        </div>

        <button className="md:hidden p-2 text-white/60 hover:text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/[0.06] px-6 py-4 flex flex-col gap-3 text-sm">
          {siteConfig.nav.map(({ label, href }) => (
            <Link key={href} href={href} className="text-white/70 hover:text-white" onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link href="#ask" className="text-center py-2 rounded-full font-bold text-white" style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }} onClick={() => setOpen(false)}>Ask Now ⚡</Link>
        </div>
      )}
    </nav>
  )
}
