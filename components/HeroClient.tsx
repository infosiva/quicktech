'use client'
// components/HeroClient.tsx — hero copy with blue accent, white bg
import { motion } from 'framer-motion'
import { STAGGER_CONTAINER, FADE_UP, SPRING_CINEMATIC, BUTTON_PRESS, useMotionVariants } from '@/lib/motion'
import { siteConfig } from '@/site.config'
import Link from 'next/link'
import { Wrench } from 'lucide-react'

export default function HeroClient() {
  const variants  = useMotionVariants(STAGGER_CONTAINER(0.06))
  const childVars = useMotionVariants(FADE_UP)

  return (
    <motion.div
      variants={variants as Parameters<typeof motion.div>[0]['variants']}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-5"
    >
      {/* Badge */}
      <motion.div variants={childVars as Parameters<typeof motion.div>[0]['variants']}>
        <span
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest"
          style={{
            background: 'rgba(217,119,6,0.08)',
            color: '#b45309',
            border: '1px solid rgba(217,119,6,0.18)',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          {siteConfig.heroBadge}
        </span>
      </motion.div>

      {/* Headline */}
      <motion.h1
        variants={childVars as Parameters<typeof motion.h1>[0]['variants']}
        className="text-5xl sm:text-6xl font-black leading-[1.05] tracking-tight text-gray-900"
      >
        {siteConfig.headline.map((line, i) => (
          <span key={i} className="block">
            {i === 1
              ? <span style={{ color: '#d97706' }}>{line}</span>
              : line
            }
          </span>
        ))}
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        variants={childVars as Parameters<typeof motion.p>[0]['variants']}
        className="text-gray-500 text-base leading-relaxed max-w-md"
      >
        {siteConfig.subheadline}
      </motion.p>

      {/* Free tier pills */}
      <motion.div
        variants={childVars as Parameters<typeof motion.div>[0]['variants']}
        className="flex flex-wrap gap-2"
      >
        {siteConfig.freeTier.pills.map(pill => (
          <span
            key={pill}
            className="text-xs font-semibold px-3 py-1.5 rounded-full"
            style={{
              background: 'rgba(217,119,6,0.06)',
              color: '#b45309',
              border: '1px solid rgba(217,119,6,0.14)',
            }}
          >
            {pill}
          </span>
        ))}
      </motion.div>

      {/* CTAs */}
      <motion.div
        variants={childVars as Parameters<typeof motion.div>[0]['variants']}
        className="flex flex-col sm:flex-row gap-3"
        id="hero-ask-btn"
      >
        <motion.div {...BUTTON_PRESS} transition={SPRING_CINEMATIC}>
          <Link
            href={siteConfig.ctaPrimary.href}
            className="btn-press inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white"
            style={{ background: '#d97706', boxShadow: '0 4px 20px rgba(217,119,6,0.30)' }}
          >
            <Wrench size={16} strokeWidth={2.5} />
            {siteConfig.ctaPrimary.text}
          </Link>
        </motion.div>
        <motion.div {...BUTTON_PRESS} transition={SPRING_CINEMATIC}>
          <Link
            href={siteConfig.ctaSecondary.href}
            className="btn-press inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-bold"
            style={{
              color: '#b45309',
              background: 'rgba(217,119,6,0.06)',
              border: '1px solid rgba(217,119,6,0.18)',
            }}
          >
            {siteConfig.ctaSecondary.text}
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
