'use client' 
import Skill from "../components/skill"; 
import Hero from "../components/hero";
import Projects from "../components/projects";
import Footer from "../components/footer"; 
// import smoothscroll from 'smoothscroll-polyfill';
import Contact from "../components/contact/contact";
// smoothscroll.polyfill();
export default function Home() {
  return (
    <div className='flex items-center flex-col'>
      <Hero />
      <div className="w-full flex justify-center mb-8">
          <div className="w-26 h-26 flex items-center justify-center text-gray text-5xl font-bold ">
            ...
          </div>
      </div> 
      <Skill />
      <div className="w-full flex justify-center mb-8">
          <div className="w-26 h-26 flex items-center justify-center text-gray text-5xl font-bold ">
            ...
          </div>
      </div> 
      <Projects/>
      <div className="w-full flex justify-center mb-8">
          <div className="w-26 h-26 flex items-center justify-center text-gray text-5xl font-bold ">
            ...
          </div>
      </div>
      <Contact/>
      <div className="w-full flex justify-center mb-8">
          <div className="w-26 h-26 flex items-center justify-center text-gray text-5xl font-bold ">
            ...
          </div>
      </div>
      <Footer/>
    </div>
  );
}
