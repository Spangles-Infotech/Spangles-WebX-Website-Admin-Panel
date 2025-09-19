import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import aboutImage from "../../img/About.png";  // Import the image
import "./About.css";  // Make sure to import your CSS

export default function About() {
  return (
    <section id="about" className="" >
      <Container>
        <Row className="align-items-center" style={{ paddingTop: "100px", height:"100vh" }}>
          <Col md={6}>
            <img
              src={aboutImage}
              alt="About"
              className="img-fluid rounded shadow"
            />
          </Col>
          <Col md={6}>
            <h2 className="about-title">
              Spangles Webx <br />is a tech-driven company
            </h2>
            <p className="about-text">
              Spangles Webx is a tech-driven company passionate about delivering innovative digital products. With a focus on design, usability, and performance, we help startups and enterprises scale with impactful web and mobile solutions.
            </p>
            <h4 className="about-projects">2.5K</h4>
            <p  className="about-growth">Growth, Compare to Previous Year</p>
          </Col>          
        </Row>
      </Container>
    </section>
  );
}
