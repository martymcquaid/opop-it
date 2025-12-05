import React from 'react'
import { Link } from 'react-router-dom'

const ServicesOverview: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-4">Our IT Services</h1>
        <p className="text-slate-300 mb-8">
          We deliver end-to-end IT services designed for modern enterprises. From strategy to execution, we ensure reliability, security, and scalability.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Managed IT Support', path: '/services/managed-it', desc: 'Proactive monitoring, 24/7 support, SLA-driven outcomes.' },
            { title: 'Cybersecurity', path: '/services/cybersecurity', desc: 'Zero-trust architecture, threat detection, and incident response.' },
            { title: 'Cloud Solutions', path: '/services/cloud-solutions', desc: 'Migration, optimization, and secure cloud architecture.' },
            { title: 'VoIP & Telecom', path: '/services/voip', desc: 'Reliable communications with scalable setups.' },
            { title: 'Network & Infrastructure', path: '/services/network', desc: 'High-performance networks and data centers.' },
            { title: 'IT Consultancy', path: '/services/consultancy', desc: 'Strategic IT planning aligned to business goals.' },
          ].map((s) => (
            <Link key={s.title} to={s.path} className="group block p-6 rounded-xl bg-white/5 hover:bg-white/10 border border-slate-700 transition">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-slate-300">{s.desc}</p>
              <span className="mt-4 inline-block text-sm text-blue-300 group-hover:underline">Learn more</span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}

export default ServicesOverview
