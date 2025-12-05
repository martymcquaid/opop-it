import React from 'react'

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
        <form className="grid md:grid-cols-2 gap-6">
          <input className="bg-white/5 border border-slate-700 rounded px-3 py-2" placeholder="Your name" />
          <input className="bg-white/5 border border-slate-700 rounded px-3 py-2" placeholder="Email" />
          <textarea className="col-span-2 bg-white/5 border border-slate-700 rounded px-3 py-2" placeholder="Message" rows={6}></textarea>
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default Contact
