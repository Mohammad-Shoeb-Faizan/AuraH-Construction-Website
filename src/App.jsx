// src/App.jsx
import React from 'react'
import Navbar from './components/common/Navbar'
import Hero from './components/sections/Hero'
import CompanyOverview from './components/sections/CompanyOverview'
import CompanySnapshot from './components/sections/CompanySnapshot'
import Services from './components/sections/Services'
import Projects from './components/sections/Projects'
import OurProcess from './components/sections/OurProcess'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'
import Footer from './components/common/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#020617] selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <CompanyOverview />
        <CompanySnapshot />
        <Services />
        <Projects />
        <OurProcess />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
