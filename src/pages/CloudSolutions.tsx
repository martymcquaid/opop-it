import React from 'react'

const CloudSolutions: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-2">Cloud Solutions</h1>
        <p className="text-slate-300 mb-6">
          Strategy, migration, and optimization for scalable cloud environments.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>Cloud assessment and roadmap</li>
          <li>Migration to AWS, Azure, or GCP</li>
          <li>Cost optimization and governance</li>
        </ul>
        <div className="mt-6">
          <h2 className="text-2xl font-semibold mb-2">What’s included</h2>
          <p className="text-slate-300">Architected cloud environments, security controls, and automation.
          </p>
        </div>
      </section>
    </div>
  )
}

export default CloudSolutions
