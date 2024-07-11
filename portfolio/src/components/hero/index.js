'use client'
import React, { useRef } from "react";
import Navbar from "../navbar/index.js"; 
// import Typical from 'react-typical'; 

const Hero = () => {
  const contentRef = useRef(null);

  const scrollToContent = () => {
    const bottomOfViewport = window.innerHeight;
    window.scrollTo({
      top: bottomOfViewport,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative h-[100dvh]  w-full bg-[#252426] text-white flex flex-col justify-center items-center">
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

      {/* Navbar */}
      <Navbar />

      {/* Content */}
      <div className="container relative top-20 mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-2 text-[#D9D9D9]">
          Hello, I&apos;m Aman Vishwakarma
        </h1>
        <h2 className="text-2xl pt-3 md:text-3xl mb-4 text-[#D9D9D9]">
          A Passionate B.Tech Final Year Student
        </h2>
        <p className="text-lg md:text-xl mb-8 px-3 text-[#D9D9D9]">
          I specialize in creating engaging content, solving problems, and
          building efficient solutions.
        </p>
        <div className="flex justify-center mb-8 pb-5">
          <img
            src="https://media.licdn.com/dms/image/D4E03AQGKlMChKKwXaw/profile-displayphoto-shrink_400_400/0/1718311455681?e=1724889600&v=beta&t=ti6sMJJKdc6tSbY6AkxnPRgXbFmUeJJ3aT5Zg-dIP_I"
            alt="Aman Vishwakarma"
            className="rounded-full w-48 h-48 object-cover border-4 border-white"
          />
        </div>
      </div>
      {/* <div className="text-lg md:text-xl relative top-10 mb-8 px-3 text-[#D9D9D9] min-w-[250px]">
        <Typical
          steps={['Welcome to my portfolio!!!', 1500, 'Discover my projects-->', 1500, 'Learn more about me...!', 1500]}
          loop={Infinity}
          wrapper="p"
          className="font-smooth"
        />
      </div> */}


       
      <div className="absolute bottom-0 left-0 w-full text-center p-2 bg-white bg-opacity-75">
        <p
          className="text-gray-900 text-sm md:text-base animate-bounce cursor-pointer"
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

        .circle-1 {
          left: 25%;
          width: 80px;
          height: 80px;
          animation-delay: 0s;
        }

        .circle-2 {
          left: 10%;
          width: 20px;
          height: 20px;
          animation-delay: 2s;
          animation-duration: 12s;
        }

        .circle-3 {
          left: 70%;
          width: 20px;
          height: 20px;
          animation-delay: 4s;
        }

        .circle-4 {
          left: 40%;
          width: 60px;
          height: 60px;
          animation-delay: 0s;
          animation-duration: 18s;
        }

        .circle-5 {
          left: 65%;
          width: 20px;
          height: 20px;
          animation-delay: 0s;
        }

        .circle-6 {
          left: 75%;
          width: 110px;
          height: 110px;
          animation-delay: 3s;
        }

        .circle-7 {
          left: 35%;
          width: 150px;
          height: 150px;
          animation-delay: 7s;
        }

        .circle-8 {
          left: 50%;
          width: 25px;
          height: 25px;
          animation-delay: 15s;
          animation-duration: 45s;
        }

        .circle-9 {
          left: 20%;
          width: 15px;
          height: 15px;
          animation-delay: 2s;
          animation-duration: 35s;
        }

        .circle-10 {
          left: 85%;
          width: 150px;
          height: 150px;
          animation-delay: 0s;
          animation-duration: 11s;
        }

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

        /* Background Animation */
        @keyframes gradientAnimation {
          0% {
            background-color: #737373;
          }
          100% {
            background-color: #252426;
          }
        }

        .bg-animate {
          animation: gradientAnimation 10s linear infinite alternate;
        }
          // after image typing content
        .font-smooth {
          -webkit-font-smoothing: antialiased;  
        }

      `}</style>
    </div>
  );
};

export default Hero;
