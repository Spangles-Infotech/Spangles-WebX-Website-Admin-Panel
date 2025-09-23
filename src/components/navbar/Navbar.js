import React, { useState } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../../img/logo.png";
import { FaArrowRight } from "react-icons/fa";
import { HashLink } from "react-router-hash-link";


export default function NavigationBar() {
  const [activeSection, setActiveSection] = useState("hero");

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <Navbar bg="light" expand="lg" className="shadow-sm navbar">
      <div className="container-fluid">
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" style={{ height: "70px", width: "auto" }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-nav" />

        <Navbar.Collapse id="navbar-nav">
          <Nav className="mx-auto">
           
            <Nav.Link
              as={HashLink}
              smooth
              to="/#hero"
              className={`nav-link-custom ${activeSection === "hero" ? "active" : ""}`}
              onClick={() => handleNavClick("hero")}
            >
              Home
            </Nav.Link>

            
            <Nav.Link
              as={HashLink}
              smooth
              to="/#about"
              className={`nav-link-custom ${activeSection === "about" ? "active" : ""}`}
              onClick={() => handleNavClick("about")}
            >
              About
            </Nav.Link>

            <Nav.Link
              as={HashLink}
              smooth
              to="/#services"
              className={`nav-link-custom ${activeSection === "services" ? "active" : ""}`}
              onClick={() => handleNavClick("services")}
            >
              Services
            </Nav.Link>


            {/* Career navigates to a new page */}
            <Nav.Link
              as={NavLink} to="/career"
              className={`nav-link-custom ${activeSection === "career" ? "active" : ""}`}
              onClick={() => handleNavClick("career")}
            >
              Career
            </Nav.Link>
            <Nav.Link
              as={HashLink}
              smooth
              to="/#contact"
              className={`nav-link-custom ${activeSection === "contact" ? "active" : ""}`}
              onClick={() => handleNavClick("contact")}
            >
              Contact
            </Nav.Link>
          </Nav>

         
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
