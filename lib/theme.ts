/**
 * lib/theme.ts — derives Tailwind-compatible class strings from site config
 * QuickTech uses blue-600 (#2563eb) as theme color on light bg (#f9fafb).
 */

const c = 'blue'

export const theme = {
  gradient:        `from-${c}-600 to-${c}-500`,
  gradientHover:   `hover:from-${c}-700 hover:to-${c}-600`,
  gradientText:    `bg-gradient-to-r from-${c}-700 to-${c}-500 bg-clip-text text-transparent`,

  solid:           `bg-${c}-600`,
  solidHover:      `hover:bg-${c}-700`,
  solidLight:      `bg-${c}-600/10`,

  border:          `border-${c}-600/20`,
  ring:            `ring-${c}-600/40`,
  focusRing:       `focus:ring-${c}-500`,

  textAccent:      `text-${c}-600`,
  textAccentBold:  `text-${c}-700`,

  badge:           `bg-${c}-600/08 text-${c}-700 border border-${c}-600/15`,

  card:            'bg-white border border-blue-100 shadow-sm rounded-2xl',
  cardHover:       `hover:border-${c}-300 hover:shadow-md transition-all duration-200`,

  glow:            `shadow-lg shadow-${c}-600/15`,
  glowHover:       `hover:shadow-xl hover:shadow-${c}-600/20`,
}

export const btn = {
  primary:   `inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/25 transition-colors duration-200`,
  secondary: `inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors duration-200`,
  ghost:     `inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-blue-600 hover:bg-blue-50 transition-colors duration-200`,
}
