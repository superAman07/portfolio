'use client'
import React from "react";
import projects from "../projectData/projects"; 
import Image from "next/image";

const Project = () => {
    return (
        <div id="projects" className="flex flex-col items-center bg-[#202426] p-8 min-h-screen">
            <h2 className="text-4xl text-[#D9D9D9] font-bold text-center mb-12">Selected Projects</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <div 
                        key={project.id} 
                        className="bg-[#252426] rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
                    >
                        <div className="relative group">
                            <Image 
                                src={project.imageUrl} 
                                alt={project.title} 
                                className="rounded-t-lg object-cover w-full h-48 sm:h-56 md:h-64 lg:h-72" 
                                width={600} 
                                height={400} 
                                loading="lazy"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <div className="flex flex-row space-x-4">
                                    <a 
                                        href={project.previewUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <button 
                                            className="bg-[#252426] text-[#D9D9D9] py-2 px-4 rounded hover:bg-[#6C733D] transition-transform duration-300 transform hover:translate-y-[-2px]"
                                        >
                                            Preview
                                        </button>
                                    </a>
                                    <a 
                                        href={project.githubUrl} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <button 
                                            className="bg-[#252426] text-[#D9D9D9] py-2 px-4 rounded hover:bg-[#6C733D] transition-transform duration-300 transform hover:translate-y-[-2px]"
                                        >
                                            GitHub
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 text-[#D9D9D9]">
                            <h3 className="text-xl font-bold mb-2 text-[#9DA65D]">{project.title}</h3>
                            <p className="text-sm text-[#A6A6A6]">{project.description}</p>
                        </div>
                        {/* Button for small devices */}
                        <div className="flex justify-center md:hidden mt-4 space-x-4">
                            <a href={project.previewUrl} target="_blank" rel="noopener noreferrer">
                                <button className="bg-[#252426] text-[#D9D9D9] py-2 px-4 rounded hover:bg-[#6C733D] transition-transform duration-300 transform hover:translate-y-[-2px]">
                                    Preview
                                </button>
                            </a>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <button className="bg-[#252426] text-[#D9D9D9] py-2 px-4 rounded hover:bg-[#6C733D] transition-transform duration-300 transform hover:translate-y-[-2px]">
                                    GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
