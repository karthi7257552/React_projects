import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import Internships from './components/Internships'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

const App = () => {
  return (
    <main className="font-sans bg-white text-gray-800 overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Internships />
      <Certifications />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default App