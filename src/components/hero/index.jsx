'use client';
import React, { useRef } from "react"; 
import Image from "next/image"; 
import dynamic from 'next/dynamic';  

const Navbar = dynamic(() => import("../navbar/index.jsx"), { ssr: false }); 
const BlurText = dynamic(() => import("../blurText/index.jsx"), { ssr: false });
const VariableProximity = dynamic(() => import("../hoverMe/index.jsx"), { ssr: false });
const ParticlesBackground = dynamic(()=>import("./herobg.jsx"),{ssr:false});


const Hero = () => {  
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);
  const scrollToContent = () => {
    if (typeof window !== "undefined") {  
      const bottomOfViewport = window.innerHeight;
      window.scrollTo({
        top: bottomOfViewport,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative h-[100dvh] w-full bg-gradient-to-r from-[#252426] to-[#383838] text-white flex flex-col justify-center items-center">
      <div className="absolute h-full">
        <ParticlesBackground />
      </div>
      <Navbar />
      <div className="container relative top-20 mx-auto text-center md:text-center sm:text-center z-10 px-6">
        <div>
          <div className="flex justify-center text-center  md:text-6xl font-bold text-[#D9D9D9]">
            <BlurText
            text="Hello, I&apos;m Aman"
            delay={150}
            animateBy="words"
            direction="top" 
            className="text-4xl mb-8 "        
            />
          </div>
          <div ref={containerRef1} style={{position: 'relative'}}>
            <VariableProximity
              label={'A Driven Technology Enthusiast and Engineering Graduate'}
              className={'text-2xl text-[#D9D9D9] md:text-1xl sm:text-2xl'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef1}
              radius={100}
              falloff='linear'
            />
          </div>
          <div ref={containerRef2} style={{position: 'relative'}}>
            <VariableProximity
              label='I specialize in creating engaging content, solving problems, and building efficient solutions.'
              className={'text-2xl text-[#D9D9D9] md:text-1xl sm:text-2xl'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef2}
              radius={100}
              falloff='linear'
            />
          </div>
          
        </div>

        <div className="flex justify-center mt-20 ">
          <Image
            src="/images/aman.jpg"
            width={600}
            height={600}
            alt="Aman Vishwakarma"
            className="rounded-full w-48 h-48 object-cover border-4 border-white transform hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full text-center p-2 bg-opacity-75 z-10">
        <p
          className="text-[#D9D9D9] text-sm md:text-base animate-bounce cursor-pointer"
          onClick={scrollToContent}
        >
          Scroll down to see more
        </p>
      </div>
      <style jsx>{`
        .circles {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .circle {
          position: absolute;
          list-style: none;
          background: rgba(255, 255, 255, 0.2);
          animation: animate 25s linear infinite;
          bottom: -150px;
          border-radius: 50%;
        }

        @keyframes animate {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;

 