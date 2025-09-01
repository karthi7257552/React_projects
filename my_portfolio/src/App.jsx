import React from 'react'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Skills from './components/Skills'
import About from './components/About'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="py-6 text-center text-gray-500 bg-[#0f172a]">
        © {new Date().getFullYear()} Karthik CM. All Rights Reserved.
      </footer>
    </div>
  )
}

export default App