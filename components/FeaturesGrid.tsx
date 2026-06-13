'use client'
// components/FeaturesGrid.tsx — bento layout, white bg, blue accent
import { motion } from 'framer-motion'
import { siteConfig } from '@/site.config'
import { FADE_UP, STAGGER_CONTAINER, CARD_HOVER, SPRING_CINEMATIC, useMotionVariants } from '@/lib/motion'

export default function FeaturesGrid() {
  const containerVars = useMotionVariants(STAGGER_CONTAINER(0.1))
  const itemVars      = useMotionVariants(FADE_UP)

  return (
    <section
      id="features"
      className="py-14 px-4 sm:px-6 max-w-5xl mx-auto"
      style={{ borderTop: '1px solid rgba(217,119,6,0.08)' }}
    >
      <div className="text-center mb-10">
        <h2 className="text-2xl font-black text-gray-900 mb-2">Everything you need</h2>
        <p className="text-gray-400 text-sm">AI-powered repair management, zero spreadsheets</p>
      </div>

      <motion.div
        variants={containerVars as Parameters<typeof motion.div>[0]['variants']}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 auto-rows-auto gap-4"
      >
        {siteConfig.features.map((f) => {
          const isLarge = f.size === 'large'
          const isWide  = f.size === 'wide'
          return (
            <motion.div
              key={f.title}
              variants={itemVars as Parameters<typeof motion.div>[0]['variants']}
              {...CARD_HOVER}
              transition={SPRING_CINEMATIC}
              className={`rounded-2xl bg-white p-6 flex flex-col gap-3 cursor-default select-none
                ${isLarge ? 'md:col-span-1 md:row-span-2' : ''}
                ${isWide  ? 'sm:col-span-2 md:col-span-2' : ''}
              `}
              style={{ border: '1px solid rgba(217,119,6,0.10)', boxShadow: '0 2px 12px rgba(217,119,6,0.06)' }}
            >
              <span className={`${isLarge ? 'text-4xl' : 'text-3xl'}`}>{f.icon}</span>
              <div className={`font-bold text-gray-900 ${isLarge ? 'text-lg' : 'text-sm'}`}>{f.title}</div>
              <div className={`text-gray-500 leading-relaxed ${isLarge ? 'text-sm' : 'text-xs'}`}>{f.desc}</div>
            </motion.div>
          )
        })}
      </motion.div>
    </section>
  )
}
