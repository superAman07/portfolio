"use client";
import React  from 'react';
import dynamic from 'next/dynamic';

// const Hero =  dynamic(() => import('../components/hero'), { ssr: false });
const Hero = dynamic(() => import("../components/hero"), { 
  ssr: false, 
  loading: () => <div className="flex items-center justify-center h-screen">
  <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-black border-opacity-25">
  </div>
</div>
});
const Projects = dynamic(() => import('../components/projects'), { ssr: false });
const Footer =  dynamic(() => import('../components/footer'), { ssr: false });
const Dot = dynamic(() => import('../components/Dots'), { ssr: false });
const Contact = dynamic(() => import('../components/contact/contact'), { ssr: false });
const Skill =  dynamic(() => import('../components/skill'), { ssr: false });

  
export default function Home() {
  return (
    <div className="flex items-center flex-col overflow-x-hidden">
      <Hero />
      <Dot />
      <Skill />
      <Dot />
      <Projects />
      <Dot />
      <Contact />
      <Dot />
      <Footer />
    </div>
  );
}