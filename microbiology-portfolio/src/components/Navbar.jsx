import React, { useState } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white/90 backdrop-blur shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3">
        <h1 className="text-green-800 font-bold text-xl">
          <a href="#">Salabha D.S.</a>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-gray-700 text-sm font-medium items-center">
          <li><a href="#about" className="hover:text-green-700">About</a></li>
          <li><a href="#education" className="hover:text-green-700">Education</a></li>
          <li><a href="#internships" className="hover:text-green-700">Internships</a></li>
          <li><a href="#certifications" className="hover:text-green-700">Certifications</a></li>
          <li><a href="#projects" className="hover:text-green-700">Projects</a></li>
          <li><a href="#skills" className="hover:text-green-700">Skills</a></li>
          <li><a href="#contact" className="hover:text-green-700">Contact</a></li>
          <li>
            <a
              href="/Salabha-Resume.pdf"
              download
              className="flex items-center gap-1 px-3 py-1.5 bg-green-700 text-white rounded-md text-sm hover:bg-green-800 transition group"
            >
              <DownloadIcon className="text-white group-hover:animate-bounce" fontSize="small" />
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle Menu">
            {isMobileOpen ? (
              <CloseIcon className="text-green-800" />
            ) : (
              <MenuIcon className="text-green-800" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur px-6 py-4 shadow transition-all">
          <ul className="space-y-4 text-gray-700 text-sm font-medium">
            <li><a href="#about" onClick={toggleMobileMenu} className="block hover:text-green-700">About</a></li>
            <li><a href="#education" onClick={toggleMobileMenu} className="block hover:text-green-700">Education</a></li>
            <li><a href="#internships" onClick={toggleMobileMenu} className="block hover:text-green-700">Internships</a></li>
            <li><a href="#certifications" onClick={toggleMobileMenu} className="block hover:text-green-700">Certifications</a></li>
            <li><a href="#projects" onClick={toggleMobileMenu} className="block hover:text-green-700">Projects</a></li>
            <li><a href="#skills" onClick={toggleMobileMenu} className="block hover:text-green-700">Skills</a></li>
            <li><a href="#contact" onClick={toggleMobileMenu} className="block hover:text-green-700">Contact</a></li>
            <li>
              <a
                href="public/Salabha_resume.docx"
                download
                className="flex items-center gap-1 px-3 py-2 bg-green-700 text-white rounded-md text-sm hover:bg-green-800 transition group"
              >
                <DownloadIcon className="text-white group-hover:animate-bounce" fontSize="small" />
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
