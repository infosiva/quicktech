import { ImageResponse } from 'next/og'
export const runtime = 'edge'
export const size = { width: 32, height: 32 }
export const contentType = 'image/png'
export default function Icon() {
  return new ImageResponse(
    <div style={{ width: 32, height: 32, borderRadius: 8, background: 'linear-gradient(135deg, #7c2d12, #ea580c)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>🔩</div>
  )
}
