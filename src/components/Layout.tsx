import React from 'react'
import Navbar from './Navbar'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="bg-slate-950 text-slate-200 mt-8">
        <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <section>
            <h4 className="font-semibold mb-2">LuminaCore</h4>
            <p className="text-sm text-slate-400">Premium IT services for enterprise-grade performance.</p>
          </section>
          <section>
            <h5 className="font-semibold mb-2">Services</h5>
            <ul className="space-y-1 text-sm text-slate-400">
              <li>Managed IT</li>
              <li>Cybersecurity</li>
              <li>Cloud Solutions</li>
            </ul>
          </section>
          <section>
            <h5 className="font-semibold mb-2">Industries</h5>
            <ul className="space-y-1 text-sm text-slate-400">
              <li>Retail</li>
              <li>Healthcare</li>
              <li>Finance</li>
            </ul>
          </section>
          <section>
            <h5 className="font-semibold mb-2">Contact</h5>
            <p className="text-sm text-slate-400">Email: hello@luminatech.example</p>
            <p className="text-sm text-slate-400">Phone: +1 (555) 000-1234</p>
          </section>
        </div>
      </footer>
    </div>
  )
}

export default Layout
