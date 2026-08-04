import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProjectPage from "./pages/ProjectPage";
import Contact from "./pages/Contact";
import About from "./pages/About";

import Navbar from "./components/Navbar";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/MyResume/build" element={<Home />} />
        <Route path="/MyResume/build/home" element={<Home />} />
        <Route path="/MyResume/build/project/:id" element={<ProjectPage />} />
        <Route path="/MyResume/build/about/" element={<About />} />
        <Route path="/MyResume/build/contact/" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;

