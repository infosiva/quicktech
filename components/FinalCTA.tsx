'use client'
// components/FinalCTA.tsx — bottom CTA, blue accent on white bg
import { motion } from 'framer-motion'
import { useState } from 'react'
import { siteConfig } from '@/site.config'
import { FADE_UP, BUTTON_PRESS, SPRING_CINEMATIC, useMotionVariants } from '@/lib/motion'
import Link from 'next/link'
import { Wrench } from 'lucide-react'

// ── §22 Feedback strip ────────────────────────────────────
function FeedbackStrip() {
  const [sent, setSent] = useState(false)

  async function submit(r: number) {
    setSent(true)
    await fetch('/api/feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rating: r, project: 'quicktech' }),
    }).catch(() => {})
  }

  return (
    <div style={{ textAlign: 'center', padding: '32px 24px 48px', color: 'rgba(30,41,59,0.45)' }}>
      {sent ? (
        <p style={{ fontSize: 13 }}>Thanks for your feedback!</p>
      ) : (
        <>
          <p style={{ fontSize: 13, marginBottom: 12 }}>Was this helpful?</p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: 10 }}>
            {[1, 2, 3, 4, 5].map(n => (
              <button
                key={n}
                onClick={() => submit(n)}
                style={{
                  width: 36, height: 36, borderRadius: 8,
                  border: '1px solid rgba(30,41,59,0.12)',
                  background: 'transparent', cursor: 'pointer', fontSize: 16,
                  transition: 'background 0.15s',
                }}
              >
                {['😞', '😕', '😐', '🙂', '😊'][n - 1]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default function FinalCTA() {
  const vars = useMotionVariants(FADE_UP)

  return (
    <section
      className="py-20 px-4 sm:px-6"
      style={{ borderTop: '1px solid rgba(217,119,6,0.08)' }}
    >
      <motion.div
        variants={vars as Parameters<typeof motion.div>[0]['variants']}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6"
      >
        <h2 className="text-3xl sm:text-4xl font-black text-gray-900 leading-tight">
          {siteConfig.finalCta.headline}
        </h2>
        <p className="text-gray-500 text-base">{siteConfig.finalCta.subtext}</p>

        <motion.div {...BUTTON_PRESS} transition={SPRING_CINEMATIC}>
          <Link
            href={siteConfig.finalCta.ctaHref}
            className="btn-press cta-pulse inline-flex items-center gap-2 px-10 py-4 rounded-xl text-base font-bold text-white"
            style={{ background: '#d97706', boxShadow: '0 4px 24px rgba(217,119,6,0.30)' }}
          >
            <Wrench size={16} strokeWidth={2.5} />
            {siteConfig.finalCta.ctaText}
          </Link>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3">
          {siteConfig.freeTier.pills.map(pill => (
            <span
              key={pill}
              className="text-xs font-medium px-3 py-1 rounded-full"
              style={{
                background: 'rgba(217,119,6,0.06)',
                color: '#b45309',
                border: '1px solid rgba(217,119,6,0.14)',
              }}
            >
              {pill}
            </span>
          ))}
        </div>
      </motion.div>

      {/* SaaS upgrade hook */}
      <section style={{
        background: 'rgba(217,119,6,0.06)',
        border: '1px solid rgba(217,119,6,0.15)',
        borderRadius: 16, padding: '24px 28px',
        maxWidth: 700, margin: '48px auto 0',
        display: 'flex', flexWrap: 'wrap',
        alignItems: 'center', justifyContent: 'space-between', gap: 16,
      }}>
        <div>
          <p style={{ fontWeight: 700, fontSize: 15, color: '#1e293b', margin: '0 0 4px' }}>
            Run your repair shop free for 30 days — no card required
          </p>
          <p style={{ fontSize: 12, color: 'rgba(30,41,59,0.5)', margin: 0 }}>
            30-day free trial
          </p>
        </div>
        <a href="/auth/signup" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          padding: '10px 20px', borderRadius: 10,
          background: '#d97706', color: '#fff',
          fontWeight: 700, fontSize: 13, textDecoration: 'none',
        }}>
          Sign up free →
        </a>
      </section>

      <FeedbackStrip />
    </section>
  )
}
