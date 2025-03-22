import React from "react";
import { projects } from "../assets/skills";
const Projects = () => {
  return (
    <>
      <section>
        <div className="projects-container" id="projects">
          <h1>Projects</h1>
          <div className="projects">
            {projects.map((project, index) => (
              <div key={index} className="project">
                <h1>{project.project_name}</h1>
                <img src={project.project_image} alt={project.project_name} />
                <a
                  href={project.status ? "#" : project.project_link}
                  target={project.status ? "_self" : "_blank"}
                  className={project.status ? "disabled-link" : ""}
                >
                  Visit Here
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
