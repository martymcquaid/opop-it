import React from 'react'

const Industries: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-2">Industries We Serve</h1>
        <p className="text-slate-300 mb-6">Tailored IT solutions for Retail, Healthcare, Finance, and more.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            'Retail','Healthcare','Finance','Manufacturing','Education','Media'
          ].map((i)=> (
            <div key={i} className="bg-white/5 p-6 rounded-xl border border-slate-700">
              <h4 className="font-semibold mb-2">{i}</h4>
              <p className="text-sm text-slate-300">Industry-specific IT challenges and tailored solutions.</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Industries
