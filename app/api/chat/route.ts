import { sanitizeUserInput } from '@/lib/guard'
import { reportToTaskFlow } from '@/lib/reportToTaskFlow'
import { NextRequest, NextResponse } from 'next/server'
import { AI_LIMITER } from '@/lib/rateLimit'

const FALLBACK = "I'm having trouble right now. Open a repair ticket above and we'll follow up."

// Free-first chain: Groq -> Gemini -> Cerebras. Tiers without a key are skipped; never throws.
async function askChain(msgs: { role: string; content: string }[]): Promise<string> {
  const oai = async (url: string, key: string | undefined, model: string) => {
    if (!key) return ''
    const r = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` }, body: JSON.stringify({ model, messages: msgs, max_tokens: 600, temperature: 0.7 }), signal: AbortSignal.timeout(12000) })
    if (!r.ok) return ''
    return (await r.json())?.choices?.[0]?.message?.content ?? ''
  }
  const tiers: Array<() => Promise<string>> = [
    () => oai('https://api.groq.com/openai/v1/chat/completions', process.env.GROQ_API_KEY, 'llama-3.3-70b-versatile'),
    () => oai('https://generativelanguage.googleapis.com/v1beta/openai/chat/completions', process.env.GEMINI_API_KEY, 'gemini-2.0-flash'),
    () => oai('https://api.cerebras.ai/v1/chat/completions', process.env.CEREBRAS_API_KEY, 'llama-3.3-70b'),
  ]
  for (const t of tiers) { try { const o = await t(); if (o) return o } catch {} }
  return FALLBACK
}

export const runtime = 'nodejs'

interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export async function POST(req: NextRequest) {
  const limited = AI_LIMITER.check(req); if (limited) return limited

  try {
    const body = await req.json()
    if (body && Array.isArray(body.messages)) for (const m of body.messages) if (m && typeof m.content === 'string') m.content = sanitizeUserInput(m.content).text
    if (body && typeof body.message === 'string') body.message = sanitizeUserInput(body.message).text
    const messages: Message[] = body.messages
    const systemPrompt: string = body.systemPrompt ?? `You are TechBot, the AI assistant for QuickTech — an AI-powered device repair management platform.
Help users with: submitting repair tickets, understanding repair status, device diagnostics, common repair questions (screen, battery, charging port, keyboard, etc.), and how QuickTech works.
Be friendly, concise, and practical. If asked about a specific device issue, give a brief likely cause and recommend opening a repair ticket.
Keep responses under 3 sentences unless a step-by-step fix is genuinely needed.`

    if (!messages?.length) {
      return NextResponse.json({ error: 'messages required' }, { status: 400 })
    }

    const chatMessages: Message[] = [
      { role: 'system', content: systemPrompt },
      ...messages.map((m: Message) => ({ role: m.role, content: m.content })),
    ]
    const text = await askChain(chatMessages)
    void reportToTaskFlow({ project: 'quicktech', agentName: 'ChatBot', status: 'completed', message: 'Chat message processed' })
    return new NextResponse(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'no-cache' } })
  } catch (err) {
    console.error('[quicktech][/api/chat]', err)
    return new NextResponse(FALLBACK, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } })
  }
}
