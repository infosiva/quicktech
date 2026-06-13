'use client'

import { useEffect, useRef, useState } from 'react'

const ACCENT = '#d97706'
const ACCENT2 = '#b45309'

const features = [
  { icon: '⚡', title: 'Live Tech News Feed', desc: 'Curated AI, gadget, and dev news updated every hour. No clickbait — signal only.' },
  { icon: '🤖', title: 'AI Explains Everything', desc: 'TechBot breaks down any tech concept in plain English. Ask anything from quantum computing to CSS grid.' },
  { icon: '🎯', title: 'Gadget Recommendations', desc: 'Tell TechBot your budget and needs. Get ranked picks with real trade-offs — not sponsored junk.' },
  { icon: '📡', title: 'Short-Form Insights', desc: 'YouTube-style 30-second cards distil the biggest tech stories. Learn fast, stay ahead.' },
]

const steps = [
  { num: '01', title: 'Browse news', desc: 'AI-curated headlines across AI, coding, gadgets and digital trends.' },
  { num: '02', title: 'Ask TechBot', desc: 'Tap the chat bubble. Ask anything — TechBot answers in plain English.' },
  { num: '03', title: 'Go deep', desc: 'Click any story for full context, related links, and AI summary.' },
  { num: '04', title: 'Stay ahead', desc: 'Daily briefings keep you current without the doom-scroll.' },
]

function ParticleBg() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let raf: number
    let w = canvas.offsetWidth, h = canvas.offsetHeight
    canvas.width = w; canvas.height = h

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5,
      r: Math.random() * 1.8 + 0.5,
      opacity: Math.random() * 0.5 + 0.1,
    }))

    function draw() {
      ctx.clearRect(0, 0, w, h)
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = w; if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h; if (p.y > h) p.y = 0
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(245,158,11,${p.opacity})`
        ctx.fill()
      }
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 90) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(245,158,11,${0.07 * (1 - dist / 90)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      raf = requestAnimationFrame(draw)
    }
    draw()
    const resize = () => { w = canvas.offsetWidth; h = canvas.offsetHeight; canvas.width = w; canvas.height = h }
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.7, pointerEvents: 'none' }} />
}

export default function AnimatedHeroGuide() {
  const [visible, setVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    setVisible(true)
    const t = setInterval(() => setActiveStep(s => (s + 1) % steps.length), 3000)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      <style>{`
        @keyframes qt-fade-up { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes qt-glow { 0%,100%{opacity:0.3;} 50%{opacity:0.9;} }
        @keyframes qt-float { 0%,100%{transform:translateY(0);} 50%{transform:translateY(-8px);} }
        @keyframes qt-shimmer { 0%{background-position:200% center;} 100%{background-position:-200% center;} }
        .qt-shimmer-text {
          background: linear-gradient(90deg, #d97706, #f59e0b, #fbbf24, #d97706);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: qt-shimmer 4s linear infinite;
        }
        .qt-card { transition: transform 200ms cubic-bezier(.23,1,.32,1), box-shadow 200ms cubic-bezier(.23,1,.32,1); }
        .qt-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(245,158,11,0.15), 0 0 0 1px rgba(245,158,11,0.2); }
        @media (max-width: 640px) { .qt-grid { grid-template-columns: 1fr !important; } .qt-steps { flex-direction: column !important; } }
      `}</style>

      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(180deg, #020617 0%, #030b18 100%)', padding: '80px 24px 60px' }}>
        <ParticleBg />
        <div style={{ position: 'absolute', top: -80, left: '25%', width: 500, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,158,11,0.1) 0%, transparent 70%)', animation: 'qt-glow 7s ease-in-out infinite', pointerEvents: 'none' }} />

        <div style={{ position: 'relative', maxWidth: 720, margin: '0 auto', textAlign: 'center', opacity: visible ? 1 : 0, animation: visible ? 'qt-fade-up 0.6s ease-out' : 'none' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(245,158,11,0.1)', border: '1px solid rgba(245,158,11,0.25)', borderRadius: 99, padding: '6px 16px', marginBottom: 24 }}>
            <span style={{ fontSize: 14 }}>⚡</span>
            <span style={{ fontSize: 12, color: ACCENT, fontWeight: 600, letterSpacing: '0.05em' }}>AI TECH ASSISTANT · FREE</span>
          </div>
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.25rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: 20, color: '#f0f0f0' }}>
            Tech moves fast.<br />
            <span className="qt-shimmer-text">TechBot keeps you up.</span>
          </h1>
          <p style={{ fontSize: 17, color: 'rgba(240,240,240,0.6)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto 36px' }}>
            QuickTech AI curates the day&apos;s biggest tech stories and puts an AI expert in your pocket. Ask anything — from explaining quantum chips to picking your next laptop.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="#news" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '13px 28px', borderRadius: 12, background: `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})`, color: '#fff', fontWeight: 700, fontSize: 15, textDecoration: 'none', boxShadow: '0 4px 20px rgba(245,158,11,0.35)', transition: 'transform 150ms ease' }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1.04)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'scale(1)'}
            >Read today&apos;s tech →</a>
            <a href="#how-it-works" style={{ display: 'inline-flex', alignItems: 'center', padding: '13px 24px', borderRadius: 12, border: '1px solid rgba(245,158,11,0.25)', color: ACCENT, fontWeight: 600, fontSize: 15, textDecoration: 'none', background: 'rgba(245,158,11,0.05)' }}>How it works</a>
          </div>
        </div>
      </section>

      <section style={{ background: '#020617', padding: '60px 24px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#f0f0f0', marginBottom: 10 }}>Your AI-powered tech hub</h2>
            <p style={{ color: 'rgba(240,240,240,0.45)', fontSize: 15 }}>News + AI assistant in one place</p>
          </div>
          <div className="qt-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {features.map((f, i) => (
              <div key={i} className="qt-card" style={{ padding: '24px', background: 'rgba(245,158,11,0.04)', border: '1px solid rgba(245,158,11,0.12)', borderRadius: 16, animation: `qt-fade-up 0.5s ease-out ${i * 0.1}s both` }}>
                <div style={{ fontSize: 28, marginBottom: 12, animation: 'qt-float 4s ease-in-out infinite', display: 'inline-block' }}>{f.icon}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: '#f0f0f0', marginBottom: 6 }}>{f.title}</h3>
                <p style={{ fontSize: 13.5, color: 'rgba(240,240,240,0.5)', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" style={{ background: 'linear-gradient(180deg, #020617 0%, #030b18 100%)', padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, color: '#f0f0f0', marginBottom: 10 }}>Stay current in 4 steps</h2>
          </div>
          <div className="qt-steps" style={{ display: 'flex', gap: 0, position: 'relative' }}>
            <div style={{ position: 'absolute', top: 28, left: '12%', right: '12%', height: 1, background: 'rgba(245,158,11,0.12)', pointerEvents: 'none' }} />
            {steps.map((s, i) => (
              <div key={i} onClick={() => setActiveStep(i)} style={{ flex: 1, textAlign: 'center', padding: '0 12px', cursor: 'pointer' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: activeStep === i ? `linear-gradient(135deg, ${ACCENT}, ${ACCENT2})` : 'rgba(245,158,11,0.08)', border: `2px solid ${activeStep === i ? ACCENT : 'rgba(245,158,11,0.2)'}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', transition: 'all 300ms cubic-bezier(.23,1,.32,1)', boxShadow: activeStep === i ? '0 0 20px rgba(245,158,11,0.4)' : 'none' }}>
                  <span style={{ fontSize: 11, fontWeight: 800, color: activeStep === i ? '#fff' : ACCENT, letterSpacing: '0.05em' }}>{s.num}</span>
                </div>
                <h3 style={{ fontSize: 13, fontWeight: 700, color: activeStep === i ? ACCENT : '#f0f0f0', marginBottom: 6, transition: 'color 300ms' }}>{s.title}</h3>
                <p style={{ fontSize: 12, color: 'rgba(240,240,240,0.45)', lineHeight: 1.5, maxWidth: 160, margin: '0 auto' }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
