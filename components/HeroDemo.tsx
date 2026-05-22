'use client'
// components/HeroDemo.tsx — animated Q&A demo for QuickTech
import { useState, useEffect } from 'react'

const QA_DEMO = {
  question: 'What\'s the best GPU under $500?',
  thinking: true,
  answer: 'For $500, the **RTX 4070** is the top pick right now. It delivers excellent 1440p gaming, strong DLSS 3 support, and runs cool. Alternatives: RX 7800 XT (better rasterization, slightly cheaper) or wait for RTX 5060 Ti if you can hold off 1-2 months.',
  sources: ['Tom\'s Hardware', 'Digital Foundry', 'Reddit r/buildapc'],
}

export default function HeroDemo() {
  const [phase, setPhase] = useState<'idle' | 'typing' | 'thinking' | 'answer'>('idle')
  const [typedQ, setTypedQ] = useState('')
  const [typedA, setTypedA] = useState('')

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('typing'), 600)
    return () => clearTimeout(t1)
  }, [])

  // Type the question
  useEffect(() => {
    if (phase !== 'typing') return
    const q = QA_DEMO.question
    let i = 0
    const iv = setInterval(() => {
      i++
      setTypedQ(q.slice(0, i))
      if (i >= q.length) {
        clearInterval(iv)
        setTimeout(() => setPhase('thinking'), 400)
      }
    }, 38)
    return () => clearInterval(iv)
  }, [phase])

  // Thinking → answer
  useEffect(() => {
    if (phase !== 'thinking') return
    const t = setTimeout(() => setPhase('answer'), 1400)
    return () => clearTimeout(t)
  }, [phase])

  // Type the answer
  useEffect(() => {
    if (phase !== 'answer') return
    const a = QA_DEMO.answer
    let i = 0
    const iv = setInterval(() => {
      i += 3
      setTypedA(a.slice(0, i))
      if (i >= a.length) clearInterval(iv)
    }, 18)
    return () => clearInterval(iv)
  }, [phase])

  // Restart loop
  useEffect(() => {
    if (phase !== 'answer') return
    const t = setTimeout(() => {
      setPhase('idle')
      setTypedQ('')
      setTypedA('')
      setTimeout(() => setPhase('typing'), 800)
    }, 6000)
    return () => clearTimeout(t)
  }, [phase])

  return (
    <div className="rounded-2xl border border-white/[0.09] bg-white/[0.02] p-5 flex flex-col gap-4 min-h-[280px]">
      {/* Header */}
      <div className="flex items-center gap-2 pb-2 border-b border-white/[0.06]">
        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
        <span className="text-xs text-white/40 font-medium">QuickTech AI</span>
        <span className="ml-auto text-xs text-white/20">Live demo</span>
      </div>

      {/* Question input */}
      <div className="rounded-xl bg-white/[0.04] border border-white/[0.07] px-4 py-3 text-sm text-white/80 font-mono min-h-[44px] flex items-center gap-2">
        <span className="text-violet-400 text-xs font-bold shrink-0">You:</span>
        <span>
          {typedQ}
          {(phase === 'typing') && <span className="inline-block w-0.5 h-4 bg-violet-400 ml-0.5 animate-pulse" />}
        </span>
      </div>

      {/* Thinking indicator */}
      {phase === 'thinking' && (
        <div className="flex items-center gap-2 text-xs text-white/40">
          <span className="text-violet-400 font-bold">AI:</span>
          <span className="typing-dot" />
          <span className="typing-dot" />
          <span className="typing-dot" />
          <span className="ml-1">Searching tech sources…</span>
        </div>
      )}

      {/* Answer */}
      {phase === 'answer' && typedA && (
        <div className="flex flex-col gap-3">
          <div className="rounded-xl bg-violet-500/[0.08] border border-violet-500/[0.15] px-4 py-3 text-sm text-white/75 leading-relaxed">
            <span className="text-violet-400 font-bold text-xs block mb-1">AI Answer:</span>
            {typedA}
            {typedA.length < QA_DEMO.answer.length && (
              <span className="inline-block w-0.5 h-4 bg-violet-400 ml-0.5 animate-pulse" />
            )}
          </div>
          {typedA.length >= QA_DEMO.answer.length && (
            <div className="flex flex-wrap gap-1.5">
              {QA_DEMO.sources.map(src => (
                <span key={src} className="text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/40">
                  🔗 {src}
                </span>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
