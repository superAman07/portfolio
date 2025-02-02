"use client";
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import _ from 'lodash';

const Hero = React.memo(dynamic(() => import('../components/hero'), { ssr: false }));
const Projects = dynamic(() => import('../components/projects'), { ssr: false });
const Footer = React.memo(dynamic(() => import('../components/footer'), { ssr: false }));
const Dot = dynamic(() => import('../components/Dots'), { ssr: false });
const Contact = dynamic(() => import('../components/contact/contact'), { ssr: false });
const Skill = React.memo(dynamic(() => import('../components/skill'), { ssr: false }));

const LoadingFallback = () => (
  <div className="flex items-center justify-center h-16 bg-[transparent]">
    <div className="loader animate-spin rounded-full h-16 w-16 border-t-4 border-[black] border-opacity-25"></div>
  </div>
);

const handleScroll = _.debounce(() => {}, 200);

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (loading) {
    return <LoadingFallback className="flex justify-center items-center h-screen" />;
  }

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







 