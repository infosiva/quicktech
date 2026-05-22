/**
 * lib/theme.ts — derives Tailwind-compatible class strings from site config
 * QuickTech uses violet as theme color.
 */

const c = 'violet'

export const theme = {
  gradient:        `from-${c}-600 to-${c}-400`,
  gradientHover:   `hover:from-${c}-700 hover:to-${c}-500`,
  gradientText:    `bg-gradient-to-r from-${c}-400 to-${c}-200 bg-clip-text text-transparent`,

  solid:           `bg-${c}-600`,
  solidHover:      `hover:bg-${c}-700`,
  solidLight:      `bg-${c}-500/10`,

  border:          `border-${c}-500/30`,
  ring:            `ring-${c}-500/40`,
  focusRing:       `focus:ring-${c}-500`,

  textAccent:      `text-${c}-400`,
  textAccentBold:  `text-${c}-300`,

  badge:           `bg-${c}-500/20 text-${c}-300 border border-${c}-500/30`,

  card:            'bg-white/[0.03] border border-white/[0.06] backdrop-blur-sm rounded-2xl',
  cardHover:       `hover:border-${c}-500/30 hover:bg-white/[0.06] transition-all duration-200`,

  glow:            `shadow-lg shadow-${c}-500/10`,
  glowHover:       `hover:shadow-xl hover:shadow-${c}-500/20`,
}

export const btn = {
  primary:   `inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${theme.gradient} ${theme.gradientHover} ${theme.glow} ${theme.glowHover} transition-all duration-200`,
  secondary: `inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white/80 bg-white/[0.06] border ${theme.border} hover:bg-white/[0.10] transition-all duration-200`,
  ghost:     `inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium ${theme.textAccent} hover:bg-white/[0.06] transition-all duration-200`,
}
