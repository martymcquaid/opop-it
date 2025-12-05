import React from 'react'

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-4">Careers</h1>
        <p className="text-slate-300 mb-6">Join a high-performance IT services team shaping the next generation of digital businesses.</p>
        <ul className="list-disc pl-6 text-slate-300">
          <li>Open roles in engineering, design, and operations.</li>
          <li>Growing, inclusive culture with professional development.</li>
        </ul>
        <button className="mt-6 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">View Open Roles</button>
      </section>
    </div>
  )
}

export default Careers
