import React from "react"; 

const Skills = () => {
  const skills = [
    { name: "C/C++ with STL", level: "Advanced", icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png", percentage: 95 },
    { name: "DSA", level: "Advanced", icon: "https://cdn.iconscout.com/icon/premium/png-256-thumb/data-structure-15-983190.png?f=webp", percentage: 90 },
    { name: "React", level: "Advanced", icon: "https://img.icons8.com/color/48/000000/react-native.png", percentage: 80 },
    { name: "Node.js", level: "Intermediate", icon: "https://img.icons8.com/color/48/000000/nodejs.png", percentage: 70 },
    { name: "JavaScript", level: "Intermediate", icon: "https://img.icons8.com/color/48/000000/javascript.png", percentage: 70 },
    { name: "Tailwind CSS", level: "Expert", icon: "https://img.icons8.com/color/48/000000/tailwindcss.png", percentage: 70 },
    { name: "Bootstrap", level: "Intermediate", icon: "https://img.icons8.com/color/48/000000/bootstrap.png", percentage: 85 }, 
  ];

  return (
    <div id="skills" className="w-full min-h-screen bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
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
                  className="bg-blue-500 h-full rounded-full transition-all duration-1000 ease-in-out"
                  style={{ width: `${skill.percentage}%` }}
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
