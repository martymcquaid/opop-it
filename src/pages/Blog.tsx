import React from 'react'

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-slate-100">
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-extrabold mb-4">Blog</h1>
        <p className="text-slate-300 mb-6">Insights and best practices for IT leadership and operations.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1,2,3].map((i)=> (
            <article key={i} className="bg-white/5 p-6 rounded-xl border border-slate-700">
              <h3 className="font-semibold">Article Title {i}</h3>
              <p className="text-sm text-slate-300">A short summary of the article content and its key takeaways.</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Blog
