'use client'
import Link from 'next/link'
import Skill from "../components/skill";
import Navbar from "../components/navbar";
import About from "../components/about";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Footer from "../components/footer"; 
// import smoothscroll from 'smoothscroll-polyfill';
// smoothscroll.polyfill();
export default function Home() {
  return (
    <div className='flex items-center flex-col'>
      {/* Navbar */}
      {/* <Navbar /> */}
      {/* Hero */}
      <Hero />
      <div className="w-full flex justify-center mb-8">
          <div className="w-26 h-26 flex items-center justify-center text-gray text-5xl font-bold ">
            ...
          </div>
      </div>
      {/* About me */}
      <About />
      {/* Skills */}
      <Skill />
      <div className="w-full flex justify-center mb-8">
          <div className="w-26 h-26 flex items-center justify-center text-gray text-5xl font-bold ">
            ...
          </div>
      </div>
      {/* Projects */}
      <Projects/>
      <div className="w-full flex justify-center mb-8">
          <div className="w-26 h-26 flex items-center justify-center text-gray text-5xl font-bold ">
            ...
          </div>
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
}
