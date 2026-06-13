'use client'
// components/FAQSection.tsx — Radix accordion, white bg, blue accent
import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { siteConfig } from '@/site.config'

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="py-14 px-4 sm:px-6 max-w-3xl mx-auto"
      style={{ borderTop: '1px solid rgba(217,119,6,0.08)' }}
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl font-black text-gray-900 mb-2">Frequently asked questions</h2>
        <p className="text-gray-400 text-sm">Everything you need to know</p>
      </div>

      <Accordion.Root type="single" collapsible className="flex flex-col gap-2">
        {siteConfig.faq.map((item, i) => (
          <Accordion.Item
            key={i}
            value={String(i)}
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(217,119,6,0.10)', background: '#ffffff' }}
          >
            <Accordion.Trigger
              className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors group"
            >
              {item.q}
              <ChevronDown
                size={16}
                className="shrink-0 ml-3 transition-transform duration-200 group-data-[state=open]:rotate-180"
                style={{ color: '#d97706' }}
              />
            </Accordion.Trigger>
            <Accordion.Content
              className="px-5 pb-4 text-sm text-gray-500 leading-relaxed data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
            >
              {item.a}
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  )
}
