// components/MarqueeBar.tsx — server component, CSS-only animation (zero JS)
import { siteConfig } from '@/site.config'

export default function MarqueeBar() {
  // Duplicate items so CSS loop is seamless
  const items = [...siteConfig.socialProof.marqueeItems, ...siteConfig.socialProof.marqueeItems]

  return (
    <section
      aria-label="Device types covered"
      className="py-5 overflow-hidden"
      style={{ borderTop: '1px solid rgba(217,119,6,0.08)', borderBottom: '1px solid rgba(217,119,6,0.08)', background: 'rgba(217,119,6,0.03)' }}
    >
      <div className="marquee-wrapper">
        <div className="marquee-track gap-8">
          {items.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-2 text-sm font-medium whitespace-nowrap select-none px-3"
              style={{ color: 'rgba(17,24,39,0.45)' }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
