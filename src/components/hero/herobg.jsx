"use client";
import React from "react"; 
import { loadSlim } from "tsparticles-slim";
import dynamic from "next/dynamic";

const Particles = dynamic(() => import("react-tsparticles"), { ssr: false });

const ParticlesBackground = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <div className="inset-0 h-full w-full z-1">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen: { enable: false }, 
          background: {
            color: "transparent",  
          },
          particles: {
            number: {
              value: 50,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
              random: false,
            },
            size: {
              value: 3,
              random: true,
            },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
              outModes: "out",
            },
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: ["grab", "attract"],
              },
              onClick: {
                enable: true,
                mode: ["repulse", "explode"],  
              },
            },
            modes: {
              grab: {
                distance: 250,
                links: {
                  opacity: 0.8,
                },
              },
              attract: {
                distance: 200,
                duration: 0.4,
                factor: 5,
              },
              repulse: { 
                distance: 300,
                duration: 0.6,
              },
              explode: {  
                speed: 10,
                size: 6,
              },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default ParticlesBackground;
