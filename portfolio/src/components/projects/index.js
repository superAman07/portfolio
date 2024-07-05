import React from "react"; 
import projects from "../projectData/projects";
import Image from "next/image";

const Project = () => {
    console.log("projects");
    return (
        <div className="flex flex-col items-center bg-[#202426] p-8">
            <h2 className="text-4xl text-[#D9D9D9] font-bold text-center mb-12">Projects</h2>
            <div className="flex flex-wrap justify-center gap-8">
                {projects.map((project, index) => (
                    <div key={project.id} className="bg-[#252426] rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full md:w-[45%] lg:w-[30%] flex flex-col md:flex-row min-h-[400px]">
                        {index % 2 === 0 ? (
                            <>
                                <div className="relative group w-full md:w-1/2 h-full">
                                    <Image height={700} width={900} src={project.imageUrl} alt={project.title} className="rounded-lg object-cover h-full" />
                                    <a href={project.previewUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <button className="bg-[#252426] text-[#D9D9D9] py-2 px-4 rounded hover:bg-[#6C733D] transition-transform duration-300 transform hover:translate-y-[-2px]">
                                            Preview
                                        </button>
                                    </a>
                                </div>
                                <div className="p-6 text-[#D9D9D9] md:w-1/2 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold mb-4 text-[#9DA65D]">{project.title}</h3>
                                    <p className="text-lg text-[#A6A6A6]">{project.description}</p>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="p-6 text-[#D9D9D9] md:w-1/2 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold mb-4 text-[#9DA65D]">{project.title}</h3>
                                    <p className="text-lg text-[#A6A6A6]">{project.description}</p>
                                </div>
                                <div className="relative group w-full md:w-1/2 h-full">
                                    <Image height={400} width={600} src={project.imageUrl} alt={project.title} className="rounded-lg object-cover h-full" />
                                    <a href={project.previewUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                        <button className="bg-[#252426] text-[#D9D9D9] py-2 px-4 rounded hover:bg-[#6C733D] transition-transform duration-300 transform hover:translate-y-[-2px]">
                                            Preview
                                        </button>
                                    </a>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Project;
