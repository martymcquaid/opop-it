import React from 'react'

const Testimonials: React.FC = () => {
  const items = [
    { name:'Acme Corp', text:'LuminaCore transformed our IT operations and reduced downtime by 40%.' },
    { name:'GlobalBank', text:'Exceptional security posture and responsive support.' },
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-4">Client Testimonials</h1>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((t)=> (
            <blockquote key={t.name} className="p-6 bg-white/5 rounded-xl border border-slate-700">
              <p className="text-slate-200">{t.text}</p>
              <footer className="mt-4 text-sm text-slate-400">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Testimonials
