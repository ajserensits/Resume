import React from "react";
import "./About.css"; // Import the external CSS file


const About: React.FC = () => {
      return (
        <div className="about-container">
          {/* Header Section */}
          <header className="about-header">
            <h1>About Me</h1>
          </header>
    
          {/* Profile Section */}
          <section className="profile-section">
            <img
              src="https://scriptingsolution.com/MyResumeImages/profile_pic.jpg"
              alt="Andrew Serensits"
              className="profile-image"
            />
            <div>
              <h2>Andrew Serensits</h2>
              <p>
                Hello! I'm a passionate <strong>software engineer</strong> with
                expertise in creating intuitive web applications. I enjoy
                translating ideas into clean, efficient code.  I have a B.S. Computer Science degree
                from Loyola University Maryland where I graduated in 2018.  Check out my <a href="https://www.linkedin.com/in/andrew-serensits-491820131/">LinkedIn</a> for 
                more information on my career journey!
              </p>
            </div>
          </section>
    
          {/* Skills Section */}
          <section className="skills-section">
            <h3>Skills</h3>
            <ul>
              <li>React, TypeScript, JavaScript, Go</li>
              <li>Node.js, Express.js</li>
              <li>HTML, CSS, Material UI</li>
              <li>OpenAI and prompt engineering</li>
              <li>Leveraging ChatGPT to expedite development process but knowing enough to spot when it is not doing something the correct way</li>
              <li><strong>Claude Code:</strong> Using Anthropic's agentic coding CLI as a daily development partner, from planning and implementing features to managing git workflows and deploying applications</li>
              <li>REST APIs</li>
              <li><strong>Google Cloud Platform (GCP):</strong> Managed Instance Groups, Cloud NAT Gateway, Load Balancer, Cloud Functions, Dialogflow</li>
              <li><strong>Amazon Web Services (AWS):</strong> FireStore, Fargate, Load Balancers</li>
              <li><strong>Communication:</strong> Experience with Twilio, Zoom, Avaya APIs</li>
              <li><strong>Testing:</strong> Selenium Web Driver and tests written in Gherkin Syntax</li>
              <li>Experience writing Java Web Services that call other Google Cloud Function</li>
              <li><strong>Oracle:</strong> OJET and Visual Builder</li>
              <li>Public speaking and talking with customers/enthusiasts about technical product knowledge</li>
              <li>Ability to read a room and talk high level when it requires it and get low level when specific questions arise</li>
            </ul>
          </section>
    
          {/* Interests Section */}
          <section className="interests-section">
            <h3>Interests</h3>
            <p>
              Outside of work, I enjoy <strong>tennis</strong> and <strong>basketball</strong>, exploring new
              technologies, experimenting with <strong>AI tools</strong>, but most importantly I love my <strong>wife</strong>, my <strong>family</strong> and <strong>dogs</strong>.
            </p>
          </section>
        </div>
      );
};

export default About;
