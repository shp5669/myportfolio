import React from "react";
import ProjectCard from "../components/ProjectCard";
import "./Projects.css"; // Add this line to import CSS specific to Projects

const projects = [
  // Add your project details here
  {
    title: "Project One",
    description: "Description of project one.",
    image: "/path/to/image.jpg",
    link: "http://example.com",
  },
  {
    title: "Project One",
    description: "Description of project one.",
    image: "/path/to/image.jpg",
    link: "http://example.com",
  },
  {
    title: "Project One",
    description: "Description of project one.",
    image: "/path/to/image.jpg",
    link: "http://example.com",
  },
];

const Projects = () => {
  return (
    <main>
      <h1>Projects</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </main>
  );
};

export default Projects;
