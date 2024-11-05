'use client';
import { Suspense, lazy } from "react";

const Hero = lazy(() => import("../components/hero"));
const Projects = lazy(() => import("../components/projects"));
const Footer = lazy(() => import("../components/footer"));
const Dot = lazy(() => import("@/components/Dots"));
const Contact = lazy(() => import("../components/contact/contact"));
const Skill = lazy(() => import("../components/skill"));

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-16 bg-[transparent]">
    <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-[black] border-opacity-25"></div>
  </div>
);

export default function Home() {
  return (
    <div className='flex items-center flex-col'> 
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
        <Dot />
        <Skill />
        <Dot />
        <Projects />
        <Dot />
        <Contact />
        <Dot />
        <Footer />
      </Suspense>
    </div>
  );
}
