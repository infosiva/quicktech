'use client'
// components/HeroDemo.tsx — animated repair ticket panel
import { useState, useEffect } from 'react'
import { Wrench, Battery, Monitor, Wifi, CheckCircle2, Clock, AlertCircle } from 'lucide-react'

type TicketStatus = 'open' | 'in-progress' | 'done'

interface Ticket {
  id: string
  icon: React.ReactNode
  title: string
  category: string
  status: TicketStatus
  time: string
  tech: string
}

const ALL_TICKETS: Ticket[] = [
  {
    id: 'T-4821',
    icon: <Monitor size={15} />,
    title: 'Screen Repair',
    category: 'Hardware',
    status: 'in-progress',
    time: '14 min',
    tech: 'Alex R.',
  },
  {
    id: 'T-4820',
    icon: <Battery size={15} />,
    title: 'Battery Replace',
    category: 'Hardware',
    status: 'done',
    time: '32 min',
    tech: 'Maya T.',
  },
  {
    id: 'T-4819',
    icon: <Wifi size={15} />,
    title: 'Network Config',
    category: 'Software',
    status: 'done',
    time: '8 min',
    tech: 'Dev S.',
  },
  {
    id: 'T-4822',
    icon: <Wrench size={15} />,
    title: 'Keyboard Fix',
    category: 'Hardware',
    status: 'open',
    time: 'Queued',
    tech: 'Unassigned',
  },
]

const STATUS_CONFIG: Record<TicketStatus, { label: string; color: string; bg: string; icon: React.ReactNode }> = {
  'open': {
    label: 'Open',
    color: '#d97706',
    bg: 'rgba(245,158,11,0.10)',
    icon: <AlertCircle size={11} />,
  },
  'in-progress': {
    label: 'In Progress',
    color: '#2563eb',
    bg: 'rgba(37,99,235,0.10)',
    icon: <Clock size={11} />,
  },
  'done': {
    label: 'Done',
    color: '#059669',
    bg: 'rgba(5,150,105,0.10)',
    icon: <CheckCircle2 size={11} />,
  },
}

export default function HeroDemo() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [visible, setVisible] = useState([0, 1, 2])

  // Cycle the highlighted ticket every 2.5 seconds
  useEffect(() => {
    const iv = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % ALL_TICKETS.length)
    }, 2500)
    return () => clearInterval(iv)
  }, [])

  // Rotate which 3 tickets are visible when activeIdx cycles
  useEffect(() => {
    const start = activeIdx % ALL_TICKETS.length
    setVisible([
      start % ALL_TICKETS.length,
      (start + 1) % ALL_TICKETS.length,
      (start + 2) % ALL_TICKETS.length,
    ])
  }, [activeIdx])

  const doneCount = ALL_TICKETS.filter(t => t.status === 'done').length
  const inProgressCount = ALL_TICKETS.filter(t => t.status === 'in-progress').length

  return (
    <div
      className="rounded-2xl border bg-white shadow-lg p-5 flex flex-col gap-4"
      style={{ borderColor: 'rgba(37,99,235,0.12)', minHeight: 300 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center"
            style={{ background: '#2563eb' }}
          >
            <Wrench size={14} color="#fff" strokeWidth={2.5} />
          </div>
          <div>
            <div className="text-xs font-bold text-gray-800">Repair Queue</div>
            <div className="text-[10px] text-gray-400">Live dashboard</div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 text-[10px] text-gray-500">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse inline-block" />
          Live
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-3 gap-2">
        {[
          { label: 'Open', val: ALL_TICKETS.filter(t => t.status === 'open').length, color: '#d97706' },
          { label: 'In Progress', val: inProgressCount, color: '#2563eb' },
          { label: 'Done Today', val: doneCount, color: '#059669' },
        ].map(s => (
          <div
            key={s.label}
            className="rounded-xl p-2.5 text-center"
            style={{ background: 'rgba(37,99,235,0.04)', border: '1px solid rgba(37,99,235,0.08)' }}
          >
            <div className="text-lg font-black" style={{ color: s.color }}>{s.val}</div>
            <div className="text-[9px] text-gray-400 font-medium leading-tight">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Ticket cards */}
      <div className="flex flex-col gap-2">
        {visible.map((idx, pos) => {
          const ticket = ALL_TICKETS[idx]
          const sc = STATUS_CONFIG[ticket.status]
          const isActive = idx === activeIdx
          return (
            <div
              key={ticket.id + pos}
              className="ticket-enter rounded-xl px-3.5 py-3 flex items-center gap-3 transition-all duration-300"
              style={{
                background: isActive ? 'rgba(37,99,235,0.06)' : '#fff',
                border: `1px solid ${isActive ? 'rgba(37,99,235,0.22)' : 'rgba(37,99,235,0.08)'}`,
                transform: isActive ? 'scale(1.01)' : 'scale(1)',
              }}
            >
              {/* Icon */}
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: sc.bg, color: sc.color }}
              >
                {ticket.icon}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-bold text-gray-800 truncate">{ticket.title}</span>
                  <span className="text-[9px] text-gray-400 shrink-0">{ticket.id}</span>
                </div>
                <div className="text-[10px] text-gray-400">{ticket.category} · {ticket.tech}</div>
              </div>

              {/* Status badge */}
              <div
                className="shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold"
                style={{ background: sc.bg, color: sc.color }}
              >
                {sc.icon}
                <span className="hidden sm:inline">{sc.label}</span>
              </div>

              {/* Time */}
              <div className="text-[10px] text-gray-400 shrink-0 tabular-nums">{ticket.time}</div>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="text-[10px] text-gray-400 text-center pt-1 border-t border-blue-50">
        AI triage + routing · avg resolution 18 min
      </div>
    </div>
  )
}
