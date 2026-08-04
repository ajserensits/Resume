import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Create a CSS file for styling if needed

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/MyResume/build/home" className="navbar-logo">
          MyPortfolio
        </Link>
        <button className="menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? "active" : ""}`}>
          <li>
            <Link to="/MyResume/build/home" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/MyResume/build/about" onClick={() => setIsMobileMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/MyResume/build/contact" onClick={() => setIsMobileMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

