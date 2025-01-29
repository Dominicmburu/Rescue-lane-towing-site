import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/styles/Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current path

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar" id="navbar">
      <button className="navbar-toggle" onClick={toggleMenu}></button>
      <div className="navbar-header">
        <ul className={`nav-list ${isOpen ? "open" : ""}`}>
          <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === "/services" ? "active" : ""}`}>
            <Link to="/services" className="nav-link">
              Services
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === "/contact" ? "active" : ""}`}>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === "/blogs" ? "active" : ""}`}>
            <Link to="/blogs" className="nav-link">
              Blogs
            </Link>
          </li>
          <li className={`nav-item ${location.pathname === "/about" ? "active" : ""}`}>
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
