import React from 'react'

const Cybersecurity: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-2">Cybersecurity</h1>
        <p className="text-slate-300 mb-6">
          Defend your digital assets with a modern, proactive security program.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>Threat intelligence and monitoring</li>
          <li>Zero trust architecture</li>
          <li>Incident response planning</li>
        </ul>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">What’s included</h2>
          <p className="text-slate-300">Security operations, vulnerability management, and secure-by-default configurations.</p>
        </div>
      </section>
    </div>
  )
}

export default Cybersecurity
