import React from "react"; 
import projects from "../projectData/projects";
import Image from "next/image";


const Project = ()=>{
    console.log("projects");
    return (
        <div>
            {projects.map(project=>(
                <div key={project.id}>
                    <h2><strong>{project.title}</strong></h2>
                    <Image src={project.imageUrl} alt={project.title}/>
                    <p>{project.description}</p>
                    <a href={project.previewUrl} target="_blank" rel="noopener noreferrer">
                        <button className="bg-[#252426] text-white py-2 px-4 rounded hover:bg-gray-500 transition duration-300">Preview</button>
                    </a>
                </div>
            ))} 
        </div>
    );
}

export default Project;