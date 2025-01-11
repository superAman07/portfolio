'use client';
import React, { useRef } from "react"; 
import Navbar from "../navbar/index.js";  
import Image from "next/image";
import ProfilePic from "../../../public/image.png"; 
import Waves from "../wave/wave.js";
import BlurText from "../blurText/index.js"; 
import VariableProximity from "../hoverMe/index.js";


const Hero = () => { 
  const containerRef = useRef(null);
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
    <div className="h-[100dvh] w-full bg-gradient-to-r from-[#252426] to-[#383838] text-white flex flex-col justify-center items-center">
      {/* <Waves 
        waveSpeedX={0.02}
        waveSpeedY={0.01}
        waveAmpX={40}
        waveAmpY={20}
        friction={0.9}
        tension={0.01}
        maxCursorMove={120}
        xGap={12}
        yGap={36}
      /> */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <ul className="circles"> 
          <li className="circle circle-1" style={{ left: "10%", width: "15px", height: "15px", animationDuration: "25s" }}></li>
          <li className="circle circle-2" style={{ left: "20%", width: "20px", height: "20px", animationDuration: "20s" }}></li>
          <li className="circle circle-3" style={{ left: "30%", width: "25px", height: "25px", animationDuration: "30s" }}></li>
          <li className="circle circle-4" style={{ left: "40%", width: "10px", height: "10px", animationDuration: "35s" }}></li>
          <li className="circle circle-5" style={{ left: "50%", width: "18px", height: "18px", animationDuration: "40s" }}></li>
        </ul>
      </div>
      <Navbar />
      <div className="container relative top-20 mx-auto text-center md:text-center sm:text-center z-10 px-6">
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
              label={'A Passionate B.Tech Final Year Student'}
              className={'text-2xl md:text-1xl sm:text-2xl'}
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
              className={'text-2xl md:text-1xl sm:text-2xl'}
              fromFontVariationSettings="'wght' 400, 'opsz' 9"
              toFontVariationSettings="'wght' 1000, 'opsz' 40"
              containerRef={containerRef2}
              radius={100}
              falloff='linear'
            />
          </div>

        <div className="flex justify-center mt-3 mb-8 pb-5">
          <Image
            src={ProfilePic}
            alt="Aman Vishwakarma"
            className="rounded-full w-48 h-48 object-cover border-4 border-white transform hover:scale-110 transition-transform duration-500"
            priority  
          />
        </div>

        <div className="flex justify-center mb-8 mt-0">
          <button 
            className="bg-[#6C733D] text-white py-2 px-6 rounded-full text-lg hover:bg-[#9DA65D] transition duration-300"
            onClick={scrollToContent}
          >
            Explore My Work
          </button>
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


// 'use client';
// import React, { useRef, useEffect } from "react";
// import { motion } from 'framer-motion';
// import Navbar from "../navbar/index.js";  
// import Image from "next/image";
// import ProfilePic from "../../../public/image.png";

// const Hero = () => {
//   const scrollToContent = () => {
//     if (typeof window !== "undefined") {  
//       const bottomOfViewport = window.innerHeight;
//       window.scrollTo({
//         top: bottomOfViewport,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="relative h-[100dvh] w-full bg-[#252426] text-white flex flex-col justify-center items-center">
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
//         <ul className="circles"> 
//           <li className="circle circle-1" style={{ left: "10%", width: "15px", height: "15px", animationDuration: "25s" }}></li>
//           <li className="circle circle-2" style={{ left: "20%", width: "20px", height: "20px", animationDuration: "20s" }}></li>
//           <li className="circle circle-3" style={{ left: "30%", width: "25px", height: "25px", animationDuration: "30s" }}></li>
//           <li className="circle circle-4" style={{ left: "40%", width: "10px", height: "10px", animationDuration: "35s" }}></li>
//           <li className="circle circle-5" style={{ left: "50%", width: "18px", height: "18px", animationDuration: "40s" }}></li>
//         </ul>
//       </div>

//       <Navbar />
 
//       <div className="container relative top-20 mx-auto text-center z-10"> 
//         <motion.h1 
//           className="text-4xl md:text-6xl font-bold mb-2 text-[#D9D9D9]"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2 }}
//         >
//           Hello, I&apos;m Aman Vishwakarma
//         </motion.h1> 
//         <motion.h2 
//           className="text-2xl pt-3 md:text-3xl mb-4 text-[#D9D9D9]"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, delay: 0.3 }}  
//         >
//           A Passionate B.Tech Final Year Student
//         </motion.h2>
 
//         <motion.p 
//           className="text-lg md:text-xl mb-8 px-3 text-[#D9D9D9]"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, delay: 0.6 }}  
//         >
//           I specialize in creating engaging content, solving problems, and
//           building efficient solutions.
//         </motion.p> 
//         <div className="flex justify-center mb-8 pb-5">
//           <Image
//             src={ProfilePic}
//             alt="Aman Vishwakarma"
//             className="rounded-full w-48 h-48 object-cover border-4 border-white"
//             priority  
//           />
//         </div>
//       </div>
 
//       <div className="absolute bottom-0 left-0 w-full text-center p-2 bg-opacity-75 z-10">
//         <p
//           className="text-[#D9D9D9] text-sm md:text-base animate-bounce cursor-pointer"
//           onClick={scrollToContent}
//         >
//           Scroll down to see more
//         </p>
//       </div>

//       <style jsx>{`
//         .circles {
//           position: relative;
//           width: 100%;
//           height: 100%;
//         }

//         .circle {
//           position: absolute;
//           list-style: none;
//           background: rgba(255, 255, 255, 0.2);
//           animation: animate 25s linear infinite;
//           bottom: -150px;
//           border-radius: 50%;
//         }

//         @keyframes animate {
//           0% {
//             transform: translateY(0) rotate(0deg);
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(-1000px) rotate(720deg);
//             opacity: 0;
//           }
//         }
//       `}</style>

//     </div>
//   );
// };

// export default Hero;
