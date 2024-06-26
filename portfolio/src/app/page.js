import Link from 'next/link'
import Skill from "../components/skill";
import Navbar from "../components/navbar";
import About from "../components/about";
import Hero from "../components/hero";
import Projects from "../components/projects";
import Footer from "../components/footer";
export default function Home() {
  return (
    <div className='flex items-center flex-col'>
      {/* Navbar */}
      <Navbar />
      {/* Hero */}
      <Hero />
      {/* About me */}
      <About />
      {/* Skills */}
      <Skill />
      {/* Projects */}
      <Projects/>
      {/* Footer */}
      <Footer/>
    </div>
  );
}
