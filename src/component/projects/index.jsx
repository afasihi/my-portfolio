import projectsData from "../../data/projectsData";
import ProjectItem from "./ProjectItem";

import "./projects.scss";

const Projects = () => {
  return (
    <div id="projects">
      <h3>Projects</h3>
      <div className="items">
        {projectsData.map((project, i) => (
          <ProjectItem key={i} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
