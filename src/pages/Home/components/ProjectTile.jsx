import React from "react";
import { Link } from "react-router-dom";

const ProjectTile = ({project}) => {
  return (
    <div
      style={{ backgroundImage: `url(${project.image})` }}
      className="flex shadow-lg shadow-[#040c16] group container rounded-sm justify-center items-center mx-auto content-div max-w[70px]"
    >
      {/* hover effects */}
      <div className="opacity-0 group-hover:opacity-100 text-center">
        <p className="work-cover-text">
          {project.title}
        </p>

        <div className="pt-8 text-center">

          { project.detailsLink ? (<Link to={project.detailsLink}>
            <button className="project-button">Details</button>
          </Link>) : '' }

          { project.demoLink ? (<a href={project.demoLink} target="_blank" rel="noreferrer">
            <button className="project-button">Demo</button>
          </a>) : '' }

          { project.codeLink ? (<a href={project.codeLink} target="_blank" rel="noreferrer">
            <button className="project-button">Code</button>
          </a>) : ''}

        </div>
      </div>
    </div>
  );
};

export default ProjectTile;
