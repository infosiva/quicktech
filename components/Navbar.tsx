'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from '@/components/Logo'
import { siteConfig } from '@/site.config'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: 'color-mix(in oklab, var(--bg) 80%, transparent)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid color-mix(in oklab, var(--accent) 10%, transparent)',
        boxShadow: '0 1px 12px color-mix(in oklab, var(--accent) 6%, transparent)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <Logo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 text-sm">
          {siteConfig.nav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-1.5 rounded-lg text-[var(--fg-dim)] hover:text-[var(--fg)] hover:bg-blue-50 transition-colors duration-150"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="#ask"
            className="btn-press px-4 py-2 rounded-lg text-sm font-bold text-white transition-colors duration-150"
            style={{ background: 'var(--accent)' }}
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-gray-500 hover:text-[var(--fg)] rounded-lg"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-blue-50 px-6 py-4 flex flex-col gap-3 text-sm bg-[var(--surface)]/95">
          {siteConfig.nav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-[var(--fg-dim)] hover:text-[var(--fg)] py-1"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#ask"
            className="btn-press mt-1 text-center py-2.5 rounded-lg font-bold text-white"
            style={{ background: 'var(--accent)' }}
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
