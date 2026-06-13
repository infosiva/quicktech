'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Wrench } from 'lucide-react'
import { siteConfig } from '@/site.config'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(249,250,251,0.85)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(217,119,6,0.10)',
        boxShadow: '0 1px 12px rgba(217,119,6,0.06)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <span
            className="flex items-center justify-center w-8 h-8 rounded-lg"
            style={{ background: '#d97706' }}
          >
            <Wrench size={16} color="#fff" strokeWidth={2.5} />
          </span>
          <span className="font-black text-lg tracking-tight text-gray-900">
            Quick<span style={{ color: '#d97706' }}>Tech</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 text-sm">
          {siteConfig.nav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-1.5 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-blue-50 transition-colors duration-150"
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
            style={{ background: '#d97706' }}
          >
            Get Started
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-gray-500 hover:text-gray-900 rounded-lg"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-blue-50 px-6 py-4 flex flex-col gap-3 text-sm bg-white/95">
          {siteConfig.nav.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-600 hover:text-gray-900 py-1"
              onClick={() => setOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href="#ask"
            className="btn-press mt-1 text-center py-2.5 rounded-lg font-bold text-white"
            style={{ background: '#d97706' }}
            onClick={() => setOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  )
}
