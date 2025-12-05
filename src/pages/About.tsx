import React from 'react'

const About: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-800 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-4">About LuminaCore</h1>
        <p className="text-slate-300 mb-6">
          LuminaCore IT Solutions delivers premium, enterprise-grade IT services with a focus on trust, security, and measurable outcomes.
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-300">
          <li>Global clients across industries with mission-critical IT needs</li>
          <li>Proven processes, transparent reporting, and strong governance</li>
          <li>Team of certified engineers, security professionals, and architects</li>
        </ul>
      </div>
    </section>
  )
}

export default About
