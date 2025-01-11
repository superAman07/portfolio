"use client" 
import dynamic from 'next/dynamic'; 
 
const Hero = dynamic(() => import('../components/hero'), {
  loading: () => <LoadingFallback />,
  ssr:false,
}); 
const Projects = dynamic(() => import('../components/projects'), {
  loading: () => <LoadingFallback />,
  ssr:false,
});
const Footer = dynamic(() => import('../components/footer'), {
  loading: () => <LoadingFallback />,
  ssr:false,
});
const Dot = dynamic(() => import('../components/Dots'), {
  loading: () => <LoadingFallback />,
  ssr:false,
});
const Contact = dynamic(() => import('../components/contact/contact'), {
  loading: () => <LoadingFallback />,
  ssr:false,
});
const Skill = dynamic(() => import('../components/skill'), {
  loading: () => <LoadingFallback />,
  ssr:false,
});
 
const LoadingFallback = () => (
  <div className="flex items-center justify-center h-16 bg-[transparent]">
    <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-[black] border-opacity-25"></div>
  </div>
);

export default function Home() {
  return (
    <div className='flex items-center flex-col'> 
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