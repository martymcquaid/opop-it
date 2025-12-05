
import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import ServicesOverview from './pages/ServicesOverview'
import ManagedIT from './pages/ManagedIT'
import Cybersecurity from './pages/Cybersecurity'
import CloudSolutions from './pages/CloudSolutions'
import VoIP from './pages/VoIP'
import Network from './pages/Network'
import Consultancy from './pages/Consultancy'
import Industries from './pages/Industries'
import Pricing from './pages/Pricing'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import BlogArticle from './pages/BlogArticle'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<ServicesOverview />} />
        <Route path="/services/managed-it" element={<ManagedIT />} />
        <Route path="/services/cybersecurity" element={<Cybersecurity />} />
        <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
        <Route path="/services/voip" element={<VoIP />} />
        <Route path="/services/network" element={<Network />} />
        <Route path="/services/consultancy" element={<Consultancy />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogArticle />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  )
}

export default App
