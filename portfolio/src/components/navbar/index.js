'use client'
import React, { useState } from "react"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="border-gray-200 rounded-3xl absolute top-6 bg-[#737373] bg-opacity-50 backdrop-blur-[2px] w-4/5 md:w-[60%] px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            {/* <image
              src="https://i.postimg.cc/tRqqkh53/Screenshot-2024-06-26-212823.png"
              className="rounded-3xl h-12"
              alt="Aman Logo"
            /> */}
            <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse text-2xl font-semibold whitespace-nowrap dark:text-white">
              AmanV
            </a>
          </div>
          <div className="block md:hidden relative">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <div className="relative w-8 h-8">
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition duration-300 ${isMenuOpen ? 'rotate-45' : 'rotate-0'}`}>
                  <span className="block absolute w-5 h-[2px] bg-white"></span>
                  <span className="block absolute w-5 h-[2px] bg-white transform -rotate-90"></span>
                </div>
              </div>
            </button>
          </div>
          <div className={`md:flex ${isMenuOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 dark:bg-gray-800">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block py-2 px-3 text-[#d39d30] bg-blue-700 rounded md:bg-transparent md:text-[#d39d30] dark:text-white md:dark:text-blue-500"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('skills')}
                  className="block py-2 px-3 text-[#ffff] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#d39d30] dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:text-white"
                >
                  Skills
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="block py-2 px-3 text-[#ffff] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#d39d30] dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:text-white"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('footer')}
                  className="block py-2 px-3 text-[#ffff] rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#d39d30] dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:text-white"
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
