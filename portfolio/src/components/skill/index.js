'use client';
import React, { useEffect, useRef } from "react";

const Skills = () => {
  const skills = [
    { name: "C/C++ STL", level: "Advanced", icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png", percentage: 95 },
    { name: "DSA", level: "Advanced", icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/data-structure-15-983190.png?f=webp", percentage: 90 },
    { name: "React", level: "Advanced", icon: "https://img.icons8.com/color/48/000000/react-native.png", percentage: 80 },
    { name: "Node.js", level: "Intermediate", icon: "https://img.icons8.com/color/48/000000/nodejs.png", percentage: 70 },
    { name: "JavaScript", level: "Intermediate", icon: "https://img.icons8.com/color/48/000000/javascript.png", percentage: 70 },
    { name: "Tailwind CSS", level: "Intermediate", icon: "https://img.icons8.com/color/48/000000/tailwindcss.png", percentage: 70 },
    { name: "Bootstrap", level: "Intermediate", icon: "https://img.icons8.com/color/48/000000/bootstrap.png", percentage: 85 },
    { name: "Python", level: "Intermediate", icon: "https://img.icons8.com/color/48/000000/python.png", percentage: 70 },
    { name: "HTML", level: "Expert", icon: "https://img.icons8.com/color/48/000000/html-5.png", percentage: 90 },
    { name: "CSS", level: "Expert", icon: "https://img.icons8.com/color/48/000000/css3.png", percentage: 85 },
    { name: "VS Code", level: "Expert", icon: "https://img.icons8.com/fluent/48/000000/visual-studio-code-2019.png", percentage: 100 },
    { name: "Git", level: "Expert", icon: "https://img.icons8.com/color/48/000000/git.png", percentage: 80 },
    { name: "GitHub", level: "Expert", icon: "https://img.icons8.com/fluent/48/000000/github.png", percentage: 85 }, 
    { name: "Photoshop", level: "Intermediate", icon: "https://img.icons8.com/fluent/48/000000/adobe-photoshop.png", percentage: 70 },
    { name: "ChatGPT", level: "Intermediate", icon: "https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png", percentage: 100 },
  ];

  const skillRefs = useRef([]);

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const width = `${entry.target.dataset.width}%`;
          entry.target.style.width = width;
        } else {
          entry.target.style.width = '0%';
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, {
      threshold: 0.5,
    });

    skillRefs.current.forEach(ref => {
      observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !skillRefs.current.includes(el)) {
      skillRefs.current.push(el);
    }
  };

  return (
    <div id="skills" className="w-full min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="grid grid-cols-2 gridCol5 gap-8">
          <style jsx>{`
            @media (min-width: 768px) {
              .gridCol5 {
                grid-template-columns: repeat(5, minmax(0, 1fr));
              }
            }
          `}</style>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col items-center transform transition duration-500 hover:scale-105"
            >
              <div className="animate-bounce">
                <img src={skill.icon} alt={`${skill.name} icon`} className="h-16 w-16 mb-4" />
              </div>
              <h3 className="text-2xl font-semibold mt-4">{skill.name}</h3>
              <p className="text-gray-400 mb-4">{skill.level}</p>
              <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden mb-4">
                <div
                  ref={addToRefs}
                  className="bg-blue-500 h-full rounded-full transition-width duration-1000 ease-in-out"
                  style={{ width: '0%' }}
                  data-width={skill.percentage}
                ></div>
              </div>
              <p className="text-gray-400">{skill.percentage}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
