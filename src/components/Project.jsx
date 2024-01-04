import React from "react";
import { DVDRentalStore, Portfolio, RentalComicSystem, SPConnect } from "../assets";

const projects = [
  {
    name: "DVD Rental Store",
    repo: "https://github.com/JavierChia/BED-Assignment-2",
    image: DVDRentalStore,
    tags: ["HTML", "CSS", "MySQL"] // Example tags
  },
  {
    name: "Personal Portfolio Website",
    repo: "https://javierchia.netlify.app/",
    image: Portfolio,
    tags: ["React", "TailwindCSS"]
  },
  {
    name: "Comic Rental System",
    repo: "https://github.com/JavierChia/JAVA-RentalComicSystem",
    image: RentalComicSystem,
    tags: ["Java"]
  },
  {
    name: "SP Connect [In Progress]",
    repo: "https://github.com/ST0507-ades/assignment-ay2324s2-ay2324s2-class-2b03-team-1",
    image: SPConnect,
    tags: ["React", "TailwindCSS", "MySQL"]
  },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative w-auto h-72 bg-white rounded-3xl border border-gray-200 shadow-md overflow-hidden">
      <img
        src={project.image}
        alt={`${project.name} cover`}
        className="absolute inset-0 w-full h-full object-cover group-hover:blur-sm transition duration-300 ease-in-out"
      />
      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
        <h5 className="text-xl font-poppins font-semibold text-white mb-4">{project.name}</h5>
        <div className="flex space-x-2">
          {project.tags.map((tag, index) => (
            <span key={index} className="bg-white text-black text-sm font-semibold px-2 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <a
        href={project.repo}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0"
      >
        <span className="sr-only">View {project.name}</span>
      </a>
    </div>
  );
};



const Project = () => {
  return (
    <div id="projects">
      <div className="ml-10 pt-6 font-poppins text-[50px] font-semibold text-black flex items-center">
        <div className="flex-grow">
          <span className="mr-2">
            02.<span style={{ letterSpacing: "0.1em" }}>&nbsp;</span>
          </span>
          <span>PROJECTS</span>
        </div>
        <hr className="border border-black border-solid border-width-1.5 rounded-full w-full ml-8 mr-10" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Project;
