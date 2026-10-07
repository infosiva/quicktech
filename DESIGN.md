# DESIGN.md - QuickTech

Source of truth: `agents/design-system` (MASTER.md, `ds-source` skill). Reuse from there before building; new reusable pieces go there first.

## Identity
- Product: QuickTech (AI device repair management)
- Accent: `#fb7185` (kept from the existing design; palette checked with `design-system/scripts/check-palettes.mjs`)
- Base background: `#0d1117`
- Logo: `components/Logo.tsx` (glyph + wordmark, key word in `var(--accent)`), used in the header; favicon is `app/icon.svg` (no `icon.tsx`).
- Background: `components/AnimatedBg.tsx` mounted in `app/layout.tsx`; style from the hub (`layout.bgAnimation`, `bgSpeed`).

## Hub override
Hub (Edge Config `theme_quicktech.design`) customises dials, brief, palette, GA4 and flags with no code change; hub values win over this file. Theme is loaded via `lib/theme-loader.ts` in `app/layout.tsx`.

## AI platform (ai-core)
No ai-core yet. Exemption: AI is a scoped chatbot plus feature generation via lib/ai.ts free-tier chain; no document upload, RAG or memory. Adopt ai-core if retrieval is added.
