import React from "react";
import { Button } from "react-bootstrap";
import "./Hero.css";  // Custom CSS for background image
import heroImage from "../../img/hero img.png";  // Import the image
import { HashLink } from "react-router-hash-link";
import herovideo from "../../video/herovideo.mp4"

export default function Hero() {
  return (
    <div className="container-fluid">
      <section id="hero" className="hero-section text-center align-items-center">
        <div style={{ paddingTop: "100px" }}>
          <div ><h5 className="custom-it-solution"> Best IT Solution </h5></div>
          <div className="d-flex flex-column align-items-center">
            <h1 className="fw-bold" style={{ color: "#345261" }}>
              Empowering Businesses with <br /> Cutting-Edge Digital Solutions
            </h1>
            <p className="lead mt-3" style={{ color: "#6B6A66" }}>
              Spangles Webx Private Limited offers tailored solutions in <br />
              Web Development, UI/UX Design, Mobile Apps, and Branding <br />
              to help your business thrive in the digital world.
            </p>
            <HashLink smooth to="/#services" className="hero-explore-button mt-3">
              Explore Services
            </HashLink>
          </div>

        </div>


        <div style={{ paddingTop: "80px" }}>
          <video
            src={herovideo} // ✅ put your video inside /src/videos
            autoPlay
            loop
            muted
            playsInline
            className="img-fluid hero-video my-4"
            style={{ borderRadius: "8px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }}
          />
        </div>


      </section>
    </div>
  );
}
