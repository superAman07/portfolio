'use client'
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-gray-200 rounded-3xl absolute top-6 bg-teal-500 bg-opacity-50 backdrop-blur-[2px] w-4/5 md:w-[60%] px-4">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://i.postimg.cc/tRqqkh53/Screenshot-2024-06-26-212823.png"
              className="rounded-3xl h-12"
              alt="Aman Logo"
            />
            <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
              AV
            </span>
          </div>
          <div className="block md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 6.293a1 1 0 0 1 1.414 0L10 9.586l3.293-3.293a1 1 0 1 1 1.414 1.414L11.414 11l3.293 3.293a1 1 0 0 1-1.414 1.414L10 12.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L8.586 11 5.293 7.707a1 1 0 0 1 0-1.414z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zM3 9a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1zM3 13a1 1 0 0 1 1-1h12a1 1 0 0 1 0 2H4a1 1 0 0 1-1-1z"
                  />
                </svg>
              )}
            </button>
          </div>
          <div className={`md:flex ${isMenuOpen ? "block" : "hidden"}`}>
            <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 dark:bg-gray-800">
              <li>
                <a
                  href="#about"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 dark:text-white md:dark:text-blue-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:text-white"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 md:dark:hover:text-white"
                >
                  Projects
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
