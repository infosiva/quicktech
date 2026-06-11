'use client'
// components/FinalCTA.tsx — bottom CTA, blue accent on white bg
import { motion } from 'framer-motion'
import { siteConfig } from '@/site.config'
import { FADE_UP, BUTTON_PRESS, SPRING_CINEMATIC, useMotionVariants } from '@/lib/motion'
import Link from 'next/link'
import { Wrench } from 'lucide-react'

export default function FinalCTA() {
  const vars = useMotionVariants(FADE_UP)

  return (
    <section
      className="py-20 px-4 sm:px-6"
      style={{ borderTop: '1px solid rgba(37,99,235,0.08)' }}
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
            style={{ background: '#2563eb', boxShadow: '0 4px 24px rgba(37,99,235,0.30)' }}
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
                background: 'rgba(37,99,235,0.06)',
                color: '#1d4ed8',
                border: '1px solid rgba(37,99,235,0.14)',
              }}
            >
              {pill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
