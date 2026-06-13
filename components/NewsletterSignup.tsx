'use client'
import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [done, setDone] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    console.log('Newsletter signup:', email)
    setDone(true)
  }

  return (
    <section
      className="my-10 rounded-2xl p-8 text-center"
      style={{
        border: '1px solid rgba(217,119,6,0.12)',
        background: 'rgba(217,119,6,0.04)',
      }}
    >
      <h3 className="mb-2 text-xl font-bold text-gray-900">Get weekly tech tips</h3>
      <p className="mb-6 text-sm text-gray-500">No spam. Unsubscribe anytime.</p>
      {done ? (
        <p className="font-semibold text-green-600">You are on the list!</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <input
            type="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full max-w-xs rounded-lg border border-blue-100 bg-white px-4 py-2 text-sm outline-none focus:border-blue-400 sm:w-auto"
            style={{ transition: 'border-color 150ms' }}
          />
          <button
            type="submit"
            className="btn-press rounded-lg px-6 py-2 text-sm font-bold text-white transition-colors duration-150"
            style={{ background: '#d97706' }}
          >
            Subscribe Free
          </button>
        </form>
      )}
    </section>
  )
}
