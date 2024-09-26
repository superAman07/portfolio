'use client'
import { Suspense, lazy } from "react";
const Hero = lazy(() => import("../components/hero"));
const Projects = lazy(() => import("../components/projects"));
const Footer = lazy(() => import("../components/footer"));
const Dot = lazy(() => import("@/components/Dots"));
const Contact = lazy(() => import("../components/contact/contact"));
const Skill = lazy(() => import("../components/skill"));

export default function Home() {
  return (
    <div className='flex items-center flex-col'> 
      <Suspense fallback={<div>Loading Hero...</div>}>
        <Hero />
      </Suspense>

      <Suspense fallback={<div>Loading Dots...</div>}>
        <Dot />
      </Suspense>

      <Suspense fallback={<div>Loading Skill...</div>}>
        <Skill />
      </Suspense>

      <Suspense fallback={<div>Loading Dots...</div>}>
        <Dot />
      </Suspense>

      <Suspense fallback={<div>Loading Projects...</div>}>
        <Projects />
      </Suspense>

      <Suspense fallback={<div>Loading Dots...</div>}>
        <Dot />
      </Suspense>

      <Suspense fallback={<div>Loading Contact...</div>}>
        <Contact />
      </Suspense>

      <Suspense fallback={<div>Loading Dots...</div>}>
        <Dot />
      </Suspense>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
}
