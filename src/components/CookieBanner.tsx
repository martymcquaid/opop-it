import React from 'react'

const CookieBanner: React.FC = () => {
  const [visible, setVisible] = React.useState(true)
  if (!visible) return null
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/10 border border-slate-700 rounded-lg px-4 py-3 max-w-md w-full z-50 mx-4 text-slate-100 backdrop-blur">
      <div className="flex items-center justify-between">
        <span className="text-sm">We use cookies to enhance your experience. By continuing, you agree to our policy.</span>
        <button className="ml-4 bg-blue-600 hover:bg-blue-500 text-white px-3 py-1 rounded" onClick={()=>setVisible(false)}>Got it</button>
      </div>
    </div>
  )
}

export default CookieBanner
