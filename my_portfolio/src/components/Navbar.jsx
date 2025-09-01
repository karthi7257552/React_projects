import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from "react-icons/fa";
import React from 'react'
const Navbar= () => {    
  return (
    <div>
        <nav className="fixed top-0 w-full bg-[#0f172a]/70 backdrop-blur-lg flex justify-between px-6 py-4 z-50 shadow-md">
      <h1 className="text-2xl font-poppins font-bold text-cyan-400">
        Karthik CM
      </h1>
      <ul className="flex gap-6">
        {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
          <li
            key={item}
            className="hover:text-cyan-400 cursor-pointer font-semibold"
          >
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
    </div>
  )
}

export default Navbar