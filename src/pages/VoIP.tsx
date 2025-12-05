import React from 'react'

const VoIP: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-2">VoIP & Telecom</h1>
        <p className="text-slate-300 mb-6">Reliable communications with scalable, future-ready telephony.</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>Unified communications</li>
          <li>Hosted PBX and SIP</li>
          <li>Mobility and collaboration tools</li>
        </ul>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">What’s included</h2>
          <p className="text-slate-300">End-to-end VoIP setup, monitoring, and ongoing optimization.</p>
        </div>
      </section>
    </div>
  )
}

export default VoIP
