import React from "react";
import { Link } from "react-router-dom";
import { Project } from "../types/types";
import "../App.css"; // Create a CSS file for styling if needed

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="project-card">
      <img src={project.thumbnail} alt={project.title} />
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <Link to={`/MyResume/build/project/${project.id}`}>View Details</Link>
    </div>
  );
};

export default ProjectCard;

