'use client'
import React, { useRef } from "react";

const Hero = () => {
  const contentRef = useRef(null);

  const scrollToContent = () => {
    // Calculate the bottom of the viewport to scroll to
    const bottomOfViewport = window.innerHeight;

    // Smooth scroll to the bottom of the viewport
    window.scrollTo({
      top: bottomOfViewport,
      behavior: "smooth"
    });
  };

  return (
    <div className="h-screen w-full bg-gray-900 text-white flex flex-col justify-center items-center">
      <div className="container mx-auto text-center mt-36">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Hello, I'm Aman Vishwakarma</h1>
        <h2 className="text-2xl md:text-3xl mb-8">A Passionate B.Tech Final Year Student</h2>
        <p className="text-lg md:text-xl mb-8 px-4">
          I specialize in creating engaging content, solving problems, and building efficient solutions.
        </p>
        <div className="flex justify-center mb-8">
          <img
            src="/path/to/your/photo.jpg"
            alt="Aman Vishwakarma"
            className="rounded-full w-48 h-48 object-cover border-4 border-white"
          />
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full text-center p-4 bg-white bg-opacity-75">
        <p className="text-gray-900 animate-bounce cursor-pointer" onClick={scrollToContent}>
          Scroll down to see more
        </p>
      </div>
    </div>
  );
};

export default Hero;
