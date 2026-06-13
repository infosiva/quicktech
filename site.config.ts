// site.config.ts — QuickTech AI config
// All sections, copy, FAQ, and layout are driven from here.

export type HeroVariant = 'split' | 'centered' | 'minimal'

export interface SiteConfig {
  siteName: string
  domain: string
  themeColor: string
  heroBadge: string
  headline: string[]
  subheadline: string
  ctaPrimary: { text: string; href: string }
  ctaSecondary: { text: string; href: string }
  freeTier: {
    pills: string[]
    gateHeadline: string
    gateSubtext: string
    gateCtaText: string
    gateCtaHref: string
    gateSecondaryText: string
  }
  socialProof: {
    marqueeItems: string[]
    stat?: string
  }
  howItWorks: Array<{ step: number; icon: string; title: string; desc: string }>
  features: Array<{ icon: string; title: string; desc: string; size?: 'large' | 'wide' | 'medium' }>
  faq: Array<{ q: string; a: string }>
  finalCta: { headline: string; subtext: string; ctaText: string; ctaHref: string }
  layout: { heroVariant: HeroVariant; sectionOrder: string[]; hideSections: string[] }
  seo: { title: string; description: string; ogImage: string; llmsDescription: string }
  nav: Array<{ label: string; href: string }>
  chatbot: { welcomeMessage: string; botName: string; placeholder: string }
}

export const siteConfig: SiteConfig = {
  siteName:   'QuickTech AI',
  domain:     'quicktechai.app',
  themeColor: 'amber',

  heroBadge:    'quicktech · device repair management · live in minutes',
  headline:     ['Device repair,', 'managed by AI.'],
  subheadline:  'AI-powered repair ticket routing, diagnostics, and customer updates. No spreadsheets, no missed jobs, no unhappy customers.',
  ctaPrimary:   { text: 'Open a Repair Ticket', href: '#ask' },
  ctaSecondary: { text: 'See How It Works',     href: '#how-it-works' },

  freeTier: {
    pills:             ['Free trial', 'No credit card', 'Setup in minutes'],
    gateHeadline:      "You've used your free tickets!",
    gateSubtext:       "Get unlimited tickets with a free account.",
    gateCtaText:       'Continue Free →',
    gateCtaHref:       '#ask',
    gateSecondaryText: 'Try again tomorrow',
  },

  socialProof: {
    marqueeItems: [
      '💻 Laptop Screen', '📱 Phone Glass', '🔋 Battery Replace', '⌨️ Keyboard Repair',
      '🖥️ Desktop Build', '🔌 Charging Port', '💾 Data Recovery', '📡 Network Setup',
      '🖨️ Printer Fix', '🎮 Console Repair', '🔈 Speaker Fix', '📷 Camera Module',
    ],
  },

  howItWorks: [
    { step: 1, icon: '🎫', title: 'Submit a repair ticket', desc: 'Customer describes the issue. AI triages severity, suggests likely cause, and assigns the right technician.' },
    { step: 2, icon: '🔧', title: 'Tech gets routed instantly', desc: 'AI routes the ticket to the best-matched technician with parts availability and estimated time.' },
    { step: 3, icon: '📲', title: 'Customer gets updates', desc: 'Automated SMS/email updates at every stage — no more "where is my device?" calls.' },
  ],

  features: [
    { icon: '🎫', title: 'Smart Ticket Routing',   desc: 'AI reads the issue description and routes to the right technician automatically — no manual triage needed.',    size: 'large'  },
    { icon: '🔧', title: 'Repair Diagnostics',     desc: 'Built-in AI diagnostic prompts help techs identify root causes faster and reduce repeat visits.',                size: 'medium' },
    { icon: '📲', title: 'Customer Updates',       desc: 'Automated status SMS and email at every stage. Customers always know where their device is.',                    size: 'medium' },
    { icon: '📦', title: 'Parts Tracking',         desc: 'Log parts used per ticket, track inventory levels, and get low-stock alerts before you run out.',                size: 'medium' },
    { icon: '📊', title: 'Repair Analytics',       desc: 'See average fix time, most common issues, and technician performance — all in one dashboard.',                   size: 'wide'   },
    { icon: '⚡', title: 'Quick Intake',           desc: 'Walk-in customers enter their device and issue on a tablet. Ticket created in under 60 seconds.',                size: 'medium' },
  ],

  faq: [
    { q: 'Is QuickTech free to start?',
      a: 'Yes — you can submit and manage repair tickets for free with no credit card required. Paid plans unlock advanced analytics and multi-location support.' },
    { q: 'What devices does it support?',
      a: 'Any device category: phones, laptops, tablets, desktops, consoles, printers, and networking equipment. You can add custom device types too.' },
    { q: 'How does AI triage work?',
      a: 'When a ticket is submitted, the AI reads the issue description, matches it against known fault patterns, suggests a likely cause and fix, then routes to the best available technician.' },
    { q: 'Can customers track their repair status?',
      a: 'Yes. Customers receive automated SMS/email updates at each stage: received, diagnosed, in repair, and ready for pickup. No app download required.' },
  ],

  finalCta: {
    headline: 'Your repair shop, running on AI.',
    subtext:  'Free trial. No credit card. Up and running in minutes.',
    ctaText:  'Open a Repair Ticket',
    ctaHref:  '#ask',
  },

  layout: {
    heroVariant:  'split',
    sectionOrder: ['hero', 'marquee', 'howItWorks', 'features', 'faq', 'finalCta'],
    hideSections: [],
  },

  seo: {
    title:          'QuickTech AI — Instant AI Answers to Tech Questions',
    description:    'Ask any tech question and get instant AI answers with sources. Hardware, software, coding, gadgets, AI/ML — covered in seconds.',
    ogImage:        '/og-quicktech.png',
    llmsDescription: 'QuickTech AI at quicktechai.app answers any tech question instantly using AI. Covers hardware, software, coding, gadgets, networking, cloud, and AI/ML topics. Free, no sign-up, with cited sources on every answer.',
  },

  nav: [
    { label: 'Home',       href: '/' },
    { label: 'Features',   href: '/#features' },
    { label: 'How it works', href: '/#how-it-works' },
    { label: 'FAQ',        href: '/#faq' },
  ],

  chatbot: {
    welcomeMessage: 'What tech question can I answer? Hardware, software, AI, coding — ask anything and get a cited answer in seconds.',
    botName:        'TechBot',
    placeholder:    'Hardware, software, AI, coding — ask anything',
  },
}

export default siteConfig
