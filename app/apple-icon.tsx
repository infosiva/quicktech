import { ImageResponse } from 'next/og'
export const size = { width: 180, height: 180 }
export const contentType = 'image/png'
export default function AppleIcon() {
  return new ImageResponse(
    (<div style={{ width: 180, height: 180, background: '#0d1117', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <svg width="110" height="110" viewBox="0 0 32 32" fill="none" stroke="#fb7185" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 5L8 18h7l-1 9 10-13h-7z"/></svg>
    </div>), size)
}
