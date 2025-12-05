import React from 'react'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-filter backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center space-x-3">
          <span className="text-xl font-bold tracking-tight">LuminaCore</span>
        </div>
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/industries" className="hover:text-blue-600">Industries</Link>
          <Link to="/pricing" className="hover:text-blue-600">Pricing</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
        <div className="flex items-center space-x-2">
          <button aria-label="Toggle dark mode" className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">🌗</button>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
