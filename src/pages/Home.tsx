import React from "react";
import ProjectList from "../components/ProjectList";

const Home: React.FC = () => {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>My Projects</h1>
      </header>
      <ProjectList />
    </div>
  );
};

export default Home;
