'use client';
import React, { useRef } from "react";
import { motion } from 'framer-motion';
import Navbar from "../navbar/index.js";  
import Image from "next/image";
import ProfilePic from "../../../public/image.png";

const Hero = () => {
  const contentRef = useRef(null);

  const scrollToContent = () => {
    if (typeof window !== "undefined") { // Check if window is defined
      const bottomOfViewport = window.innerHeight;
      window.scrollTo({
        top: bottomOfViewport,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative h-[100dvh] w-full bg-[#252426] text-white flex flex-col justify-center items-center">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <ul className="circles">
          <li className="circle circle-1"></li>
          <li className="circle circle-2"></li>
          <li className="circle circle-3"></li>
          <li className="circle circle-4"></li>
          <li className="circle circle-5"></li>
          <li className="circle circle-6"></li>
          <li className="circle circle-7"></li>
          <li className="circle circle-8"></li>
          <li className="circle circle-9"></li>
          <li className="circle circle-10"></li>
        </ul>
      </div>
 
      <Navbar />
 
      <div className="container relative top-20 mx-auto text-center z-10"> 
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-2 text-[#D9D9D9]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Hello, I&apos;m Aman Vishwakarma
        </motion.h1> 
        <motion.h2 
          className="text-2xl pt-3 md:text-3xl mb-4 text-[#D9D9D9]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}  
        >
          A Passionate B.Tech Final Year Student
        </motion.h2>
 
        <motion.p 
          className="text-lg md:text-xl mb-8 px-3 text-[#D9D9D9]"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}  
        >
          I specialize in creating engaging content, solving problems, and
          building efficient solutions.
        </motion.p> 
        <div className="flex justify-center mb-8 pb-5">
          <Image
            src={ProfilePic}
            alt="Aman Vishwakarma"
            className="rounded-full w-48 h-48 object-cover border-4 border-white"
          />
        </div>
      </div>

      {/* Scroll Down Link */}
      <div className="absolute bottom-0 left-0 w-full text-center p-2 bg-opacity-75 z-10">
        <p
          className="text-[#D9D9D9] text-sm md:text-base animate-bounce cursor-pointer"
          onClick={scrollToContent}
        >
          Scroll down to see more
        </p>
      </div>

      <style jsx>{`
        .circle {
          position: absolute;
          display: block;
          list-style: none;
          width: 20px;
          height: 20px;
          background: rgba(255, 255, 255, 0.2);
          animation: animate 25s linear infinite;
          bottom: -150px;
        }

        /* Circle styles */
        /* Add your existing circle styles here */

        @keyframes animate {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
            border-radius: 0;
          }
          100% {
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
            border-radius: 50%;
          }
        }

        .font-smooth {
          -webkit-font-smoothing: antialiased;  
        }
        .z-10 {
          z-index: 10;
        }
      `}</style>
    </div>
  );
};

export default Hero;
