import React from 'react'

const ManagedIT: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-2">Managed IT Support</h1>
        <p className="text-slate-300 mb-6">
          Comprehensive IT management for proactive and predictable infrastructure health.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>24/7 monitoring and incident response</li>
          <li>Proactive patching and maintenance</li>
          <li>Strategic IT planning and budgeting</li>
        </ul>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">What’s included</h2>
          <p className="text-slate-300">On-site and remote support, asset management, and vendor coordination.</p>
        </div>
      </section>
    </div>
  )
}

export default ManagedIT
