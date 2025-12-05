import React from 'react'

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-4">Pricing Plans</h1>
        <p className="text-slate-300 mb-8">Simple, transparent pricing for enterprise IT services.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {tier:'Basic', price:'$499', features:['Monitoring','Remote support','Monthly health check']},
            {tier:'Standard', price:'$999', features:['Monitoring','Priority queue','Quarterly security review']},
            {tier:'Premium', price:'$1999', features:['All Standard','On-site visits','Annual architecture review']},
            {tier:'Enterprise', price:'POA', features:['Dedicated team','24/7 onsite','Custom SLA']},
          ].map((p)=> (
            <div key={p.tier} className="bg-white/5 p-6 rounded-xl border border-slate-700">
              <h3 className="font-semibold mb-1">{p.tier}</h3>
              <div className="text-2xl font-bold mb-2">{p.price}</div>
              <ul className="text-sm text-slate-300 list-disc pl-6 mb-4">
                {p.features.map((f)=> (<li key={f}>{f}</li>))}
              </ul>
              <button className="w-full bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">Choose</button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Pricing
