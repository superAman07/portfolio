'use client'
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
        setIsScrolled(true);  
      } else {
        setIsSticky(false);
        setIsScrolled(false);  
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`w-full transition-all duration-300 px-6 py-4 fixed top-0 z-10 ${
        isScrolled || isSticky ? 'bg-[#737373] bg-opacity-80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <a href="/" className="text-2xl font-semibold text-white">
              AmanV
            </a>
          </div>
          <div className="md:hidden relative">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <div className={`w-8 h-8 flex flex-col justify-center items-center transition duration-300 ${isMenuOpen ? 'transform rotate-180' : ''}`}>
                <span className={`block w-6 h-0.5 bg-white rounded-full mb-1 transition duration-300 ${isMenuOpen ? 'rotate-45 translate-x-1 translate-y-1' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-white rounded-full mb-1 transition duration-300 ${isMenuOpen ? '-rotate-45 translate-x-1 translate-y-1' : ''}`}></span>
              </div>
            </button>
          </div>
          <div className={`md:flex ${isMenuOpen ? "block" : "hidden"} mt-4 md:mt-0`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 text-white">
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="block py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-[#d39d30] transition duration-300"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="block py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-[#d39d30] transition duration-300"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block py-2 px-3 rounded hover:bg-gray-700 md:hover:bg-transparent md:hover:text-[#d39d30] transition duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;