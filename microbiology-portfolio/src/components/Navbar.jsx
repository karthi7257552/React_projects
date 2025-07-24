import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-green-800 font-bold text-xl"><a href="#">Salabha D.S.</a></h1>
        <ul className="hidden md:flex gap-6 text-gray-700 text-sm font-medium">
          <li><a href="#about" className="hover:text-green-700">About</a></li>
          <li><a href="#education" className="hover:text-green-700">Education</a></li>
          <li><a href="#internships" className="hover:text-green-700">Internships</a></li>
          <li><a href="#certifications" className="hover:text-green-700">Certifications</a></li>
          <li><a href="#projects" className="hover:text-green-700">Projects</a></li>
          <li><a href="#skills" className="hover:text-green-700">Skills</a></li>
          <li><a href="#contact" className="hover:text-green-700">Contact</a></li>
        </ul>
        <div className="md:hidden">
          {/* Add mobile menu toggle logic here later */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
