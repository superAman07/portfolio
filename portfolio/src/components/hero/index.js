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
          {[...Array(10)].map((_, index) => (
            <li
              key={index}
              className={`circle circle-${index + 1}`}
              style={{
                animationDuration: `${Math.random() * 10 + 15}s`, // Random duration between 15s and 25s
                left: `${Math.random() * 100}%`, // Random horizontal positioning
                width: `${Math.random() * 20 + 10}px`, // Random width between 10px and 30px
                height: `${Math.random() * 20 + 10}px`, // Random height between 10px and 30px
              }}
            ></li>
          ))}
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
