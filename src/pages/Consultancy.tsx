import React from 'react'

const Consultancy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-2">IT Consultancy</h1>
        <p className="text-slate-300 mb-6">Strategic IT planning aligned to business goals.</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>IT strategy development</li>
          <li>Technology roadmapping</li>
          <li>Vendor management and optimization</li>
        </ul>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">What’s included</h2>
          <p className="text-slate-300">Roadmaps, governance, and measurable IT outcomes.</p>
        </div>
      </section>
    </div>
  )
}

export default Consultancy
