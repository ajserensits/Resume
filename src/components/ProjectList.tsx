import React from "react";
import { Link } from "react-router-dom";
import "./ProjectList.css"; // Create a CSS file for styling if needed
import "../App.css"; // Create a CSS file for styling if needed


interface Project {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AI Form Filler",
    description: "Autofills a form based on the live conversation between an agent and a customer.",
    thumbnail: "https://scriptingsolution.com/MyResumeImages/AIFormFiller/artificial-intelligence-logo.jpg",
  },
  {
    id: 2,
    title: "Digital Translation",
    description: "Allows a contact center agent to perform webchats with customers that do not speak the same language as them.",
    thumbnail: "https://scriptingsolution.com/MyResumeImages/DigitalTranslation/translation-2.webp",
  },
  {
    id: 3,
    title: "Password Application",
    description: "Allows members of a family to text into a number in order to retrieve passwords for certain services.",
    thumbnail: "https://scriptingsolution.com/MyResumeImages/PasswordApp/login.png",
  },
  {
    id: 4,
    title: "Salesforce Integrations",
    description: "Interfaces with SalesForce APIs in order to bring SalesForce data into the contact center with your own custom UI.",
    thumbnail: "https://scriptingsolution.com/MyResumeImages/Wynn/Salesforce_logo.png",
  },
  {
    id: 5,
    title: "Sentiment Analysis",
    description: "Enables contact center agents to view the current sentiment of the customer for voice and digital interactions.  Supervisors get notified when the sentiment crosses a certain threshold.",
    thumbnail: "https://scriptingsolution.com/MyResumeImages/Sentiment/sentiment_logo.png",
  },
  {
    id: 6,
    title: "Virtual Agent",
    description: "Low-code platform that allows non-developers to build conversation trees for voice or SMS.",
    thumbnail: "https://scriptingsolution.com/MyResumeImages/VirtualAgent/virtual-agent-logo.png",
  },
];

const ProjectList: React.FC = () => {
  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <img className="thumbnail-image" src={project.thumbnail} alt={project.title} />
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <Link to={`/project/${project.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;

