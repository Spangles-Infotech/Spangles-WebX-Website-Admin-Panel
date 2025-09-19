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
            {/* Home scrolls to hero */}
            {/* <Nav.Link
              as={NavLink} to="/#hero"
              className={`nav-link-custom ${activeSection === "hero" ? "active" : ""}`}
              onClick={() => handleNavClick("hero")}
            >
              Home
            </Nav.Link> */}
            <Nav.Link
              as={HashLink}
              smooth
              to="/#hero"
              className={`nav-link-custom ${activeSection === "hero" ? "active" : ""}`}
              onClick={() => handleNavClick("hero")}
            >
              Home
            </Nav.Link>

            {/* <Nav.Link
              as={NavLink} to="/#about"
              className={`nav-link-custom ${activeSection === "about" ? "active" : ""}`}
              onClick={() => handleNavClick("about")}
            >
              About
            </Nav.Link> */}
            <Nav.Link
              as={HashLink}
              smooth
              to="/#about"
              className={`nav-link-custom ${activeSection === "about" ? "active" : ""}`}
              onClick={() => handleNavClick("about")}
            >
              About
            </Nav.Link>

            {/* <Nav.Link
              as={NavLink} to="/#services"
              className={`nav-link-custom ${activeSection === "services" ? "active" : ""}`}
              onClick={() => handleNavClick("services")}
            >
              Services
            </Nav.Link> */}
            <Nav.Link
              as={HashLink}
              smooth
              to="/#services"
              className={`nav-link-custom ${activeSection === "services" ? "active" : ""}`}
              onClick={() => handleNavClick("services")}
            >
              Services
            </Nav.Link>

            {/* <Nav.Link
              as={NavLink} to="/#featuredworks"
              className={`nav-link-custom ${activeSection === "featuredworks" ? "active" : ""}`}
              onClick={() => handleNavClick("featuredworks")}
            >
              Portfolio
            </Nav.Link> */}
            <Nav.Link
              as={HashLink}
              smooth
              to="/#featuredworks"
              className={`nav-link-custom ${activeSection === "featuredworks" ? "active" : ""}`}
              onClick={() => handleNavClick("featuredworks")}
            >
              Portfolio
            </Nav.Link>

            {/* Career navigates to a new page */}
            <Nav.Link
              as={NavLink} to="/career"
              className={`nav-link-custom ${activeSection === "career" ? "active" : ""}`}
              onClick={() => handleNavClick("career")}
            >
              Career
            </Nav.Link>
          </Nav>

          {/* Contact Us Button */}
          <Button className="custom-contact-btn">
            Contact Us <FaArrowRight style={{ marginLeft: "8px" }} />
          </Button>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}
