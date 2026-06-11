import { reportToTaskFlow } from '@/lib/reportToTaskFlow'
import Groq from 'groq-sdk'
import { NextRequest, NextResponse } from 'next/server'

let _groq: Groq | null = null
function getGroq() { if (!_groq) _groq = new Groq({ apiKey: process.env.GROQ_API_KEY! }); return _groq }

export const runtime = 'nodejs'

interface Message {
  role: 'user' | 'assistant' | 'system'
  content: string
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
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

    const stream = await getGroq().chat.completions.create({
      model: 'llama-3.3-70b-versatile',
      messages: chatMessages,
      max_tokens: 600,
      temperature: 0.7,
      stream: true,
    })

    void reportToTaskFlow({ project: 'quicktech', agentName: 'ChatBot', status: 'completed', message: 'Chat message processed' })
    const readable = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder()
        try {
          for await (const chunk of stream) {
            const text = chunk.choices[0]?.delta?.content ?? ''
            if (text) controller.enqueue(encoder.encode(text))
          }
        } finally {
          controller.close()
        }
      },
    })

    return new NextResponse(readable, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (err) {
    console.error('[quicktech][/api/chat]', err)
    return NextResponse.json({ error: 'Chat failed' }, { status: 500 })
  }
}
