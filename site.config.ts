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
  themeColor: 'violet',

  heroBadge:    'quicktech · AI tech answers · instant',
  headline:     ['Tech answers,', 'in seconds.'],
  subheadline:  'Ask any tech question — hardware, software, coding, gadgets. AI answers instantly with sources.',
  ctaPrimary:   { text: '⚡ Ask a Question →', href: '#ask' },
  ctaSecondary: { text: '📰 Tech News',        href: '#news' },

  freeTier: {
    pills:             ['Free forever', 'Instant answers', 'No sign-up'],
    gateHeadline:      "You've used your free questions!",
    gateSubtext:       "Get unlimited AI answers with a free account.",
    gateCtaText:       'Continue Free →',
    gateCtaHref:       '#ask',
    gateSecondaryText: 'Ask again tomorrow',
  },

  socialProof: {
    marqueeItems: [
      '💻 MacBook', '📱 iPhone', '🖥️ GPU', '⌨️ Keyboards',
      '🎮 Gaming', '🔌 Networking', '☁️ Cloud', '🤖 AI/ML',
      '🐧 Linux', '🪟 Windows', '🔋 Battery', '🎙️ Microphones',
    ],
  },

  howItWorks: [
    { step: 1, icon: '💬', title: 'Ask any tech question',  desc: 'Type your question about hardware, software, coding, gadgets, or the latest AI tools.' },
    { step: 2, icon: '⚡', title: 'AI searches and answers', desc: 'Our AI scans trusted tech sources and synthesises a clear, accurate answer in seconds.' },
    { step: 3, icon: '🔗', title: 'Get sources + links',    desc: 'Every answer includes cited sources so you can dive deeper when you need to.' },
  ],

  features: [
    { icon: '⚡', title: 'Instant AI Answers',   desc: 'Get precise answers to any tech question in under 3 seconds — no search results to sift through.',    size: 'large'  },
    { icon: '🖥️', title: 'Hardware Advice',      desc: 'GPU comparisons, RAM upgrades, build guides. AI recommends based on your budget and use case.',         size: 'medium' },
    { icon: '🛠️', title: 'Software Help',        desc: 'Step-by-step fixes for Windows, macOS, Linux, apps, and browser issues.',                               size: 'medium' },
    { icon: '👨‍💻', title: 'Coding Questions',    desc: 'Debug errors, explain concepts, compare frameworks. Works with every language.',                        size: 'medium' },
    { icon: '📰', title: 'Tech News Digest',     desc: 'Daily digest of the most important tech stories — curated and summarised by AI, no clickbait.',          size: 'wide'   },
    { icon: '🤖', title: 'AI/ML Explained',      desc: 'Understand the latest AI models, tools, and research in plain English.',                                 size: 'medium' },
  ],

  faq: [
    { q: 'Is QuickTech AI free to use?',
      a: 'Yes — QuickTech AI is completely free. Ask questions, read news digests, and get AI answers with no account or credit card required.' },
    { q: 'How accurate are the AI answers?',
      a: 'QuickTech AI cites its sources on every answer. We use up-to-date knowledge to answer hardware, software, and coding questions accurately. For safety-critical decisions, always verify with official documentation.' },
    { q: 'What tech topics does it cover?',
      a: 'Everything: hardware (CPUs, GPUs, laptops, peripherals), software (Windows, macOS, Linux, apps), coding (all languages and frameworks), gadgets, networking, cloud services, and AI/ML tools.' },
    { q: 'Is it better than Googling for tech questions?',
      a: "For specific tech questions, yes. Instead of wading through 10 SEO-stuffed links, you get one synthesised answer with sources. Google is still better for very recent news or niche community threads." },
  ],

  finalCta: {
    headline: 'Get instant answers to any tech question.',
    subtext:  'Free forever. No account needed. Works on any device.',
    ctaText:  '⚡ Ask Now — It\'s Free →',
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
    welcomeMessage: 'Hi! What tech question can I answer for you?',
    botName:        'TechBot',
    placeholder:    'Ask any tech question…',
  },
}

export default siteConfig
