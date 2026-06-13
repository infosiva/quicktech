export default function AffiliateBanner() {
  return (
    <div
      className="my-6 rounded-xl p-4 text-center text-sm"
      style={{
        border: '1px solid rgba(217,119,6,0.14)',
        background: 'rgba(217,119,6,0.04)',
      }}
    >
      <p className="mb-2 font-semibold text-gray-700">
        Host your own AI app for just $2.99/mo
      </p>
      <a
        href="https://hostinger.com?REFERRALCODE=SIVAPRAKASAM"
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="btn-press inline-block rounded-lg px-4 py-2 text-xs font-bold text-white transition-colors duration-150"
        style={{ background: '#d97706' }}
      >
        Get Hostinger →
      </a>
      <p className="mt-1 text-xs text-gray-400">Sponsored · We earn a commission</p>
    </div>
  )
}
