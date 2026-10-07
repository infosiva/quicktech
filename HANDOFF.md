# HANDOFF — design apply (quicktech)
**Date:** 2026-10-06  **Status:** COMPLETE (files only, uncommitted)
**Goal:** Apply design system; hub can switch palette, layout archetype, bg animation at runtime.

## DESIGN LOCK
archetype: weekend-lifestyle (centered hero, masonry cards) | bg #0d1117 | accent #fb7185 (#0ea5e9 clashed with outreach-crm; #fb7185 free) | logo: bolt, 'Quick' accent | bgAnimation default: mesh

## Steps
- [x] design-lock  - [x] palette-registry  - [x] logo (icon.svg, apple-icon.tsx, components/Logo.tsx)  - [x] icon.tsx -> icon.tsx.bak
- [x] theme-loader wired in layout (loadSiteTheme, buildThemeStyleTag, buildGa4Snippet, data-layout, AnimatedBg)
- [x] globals.css -> CSS vars; remove insecure http trackers / fake data
- [x] build + 375/1280 screenshots

## AI platform pillars
Chat route only (no new AI feature): free chain Groq -> Gemini -> Cerebras, graceful fallback. Other pillars exempt (no new AI scope).


## OWASP LLM Top 10 dispositions (gate item 45, 2026-10-07; list recalled from memory, unverified)
- LLM01 prompt injection: lib/guard.ts present, NOT yet wired into routes; no output filtering or tool sandbox review done. PARTIAL.
- LLM02 sensitive info disclosure: `redact()` helper available; not applied to every log. PARTIAL.
- LLM04/10 DoS / unbounded consumption: per-IP rate limit where present; token budgets not enforced. PARTIAL.
- LLM05 improper output handling: model output rendered as text; not audited for HTML sinks. UNVERIFIED.
- LLM06 excessive agency: no tool-calling agents audited. UNVERIFIED.
- Others (supply chain, poisoning, embeddings, misinformation): not assessed.
