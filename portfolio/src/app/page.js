'use client' 
import Skill from "../components/skill"; 
import Hero from "../components/hero";
import Projects from "../components/projects";
import Footer from "../components/footer"; 
import Dot from "@/components/Dots";
// import smoothscroll from 'smoothscroll-polyfill';
import Contact from "../components/contact/contact";
// smoothscroll.polyfill();
export default function Home() {
  return (
    <div className='flex items-center flex-col'>
      <Hero />
        
      <Dot/>
      <Skill />
      <Dot/>
      <Projects/>
      <Dot/>
      <Contact/>
      <Dot/>
      <Footer/>
    </div>
  );
}
