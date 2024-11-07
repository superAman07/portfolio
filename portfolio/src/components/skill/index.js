'use client';
import React, { useEffect, useRef } from "react";

const Skills = () => {
  const skills = [
    { name: "C++", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", percentage: 95 },
    { name: "C", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg", percentage: 80 },
    { name: "DSA", level: "Advanced", icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/data-structure-15-983190.png?f=webp", percentage: 95 },
    { name: "React", level: "Advanced", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg", percentage: 80 },
    { name: "Node.js", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg", percentage: 70 },
    { name: "TypeScript", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg", percentage: 70 },
    { name: "JavaScript", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", percentage: 70 },
    { name: "Tailwind", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", percentage: 70 },
    { name: "Bootstrap", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg", percentage: 85 },
    { name: "Python", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg", percentage: 60 },
    { name: "HTML", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg", percentage: 90 },
    { name: "CSS", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg", percentage: 85 },
    { name: "Postman", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg", percentage: 75 },
    { name: "Express", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg", percentage: 75 },
    { name: "MongoDB", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg", percentage: 75 },
    { name: "SQL", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", percentage: 85 },
    { name: "MySQL", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg", percentage: 70 },
    { name: "PHP", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", percentage: 75 },
    { name: "GIT", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", percentage: 85 },
    { name: "GitHub", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", percentage: 85 }, 
    { name: "VS Code", level: "Expert", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", percentage: 100 },
    { name: "ChatGPT", level: "Intermediate", icon: "https://freelogopng.com/images/all_img/1681038242chatgpt-logo-png.png", percentage: 100 },
    { name: "Photoshop", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg", percentage: 70 },
    { name: "MUI", level: "Intermediate", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", percentage: 90 }
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
    <div id="skills" className="w-full min-h-screen bg-[#A6A6A6] text-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="grid grid-cols-2 gridCol5 gap-8">
          <style jsx>{`
            @media (min-width: 768px) {
              .gridCol5 {
                grid-template-columns: repeat(5, minmax(0, 1fr));
              }
            }

            .skill-item {
              background-color: #252426;
              padding: 1.5rem;
              border-radius: 1rem;
              box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.9);
              transition: transform 0.3s ease-in-out;
            }

            .skill-item:hover {
              transform: scale(1.05);
            }
          `}</style>
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item flex flex-col items-center justify-center text-center"
            >
              <div className="animate-bounce">
                <img src={skill.icon} alt={`${skill.name} icon`} className="h-16 w-16 mb-4" />
              </div>
              <h3 className="text-2xl font-semibold mt-4">{skill.name}</h3>
              <p className="text-gray-400 mb-4">{skill.level}</p>
              <div className="w-full bg-[#094A73] rounded-full h-4 overflow-hidden mb-4">
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
