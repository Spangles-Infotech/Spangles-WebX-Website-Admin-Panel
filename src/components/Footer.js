// src/components/Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from '../img/logo.png'
import logowebx from '../img/Favi icon (1).jpg'
import { NavLink } from "react-router-dom";
import './Footer.css'

export default function Footer() {
    return (
        <footer className="">
            {/* floating info card */}


            {/* main footer area */}
            <div className="footer-main container-fluid">
                {/* <div className="footer-columns d-flex justify-content-center align-items-center text-center" >
    <div className="col">
      <img src={logo} alt="Spangles Webx" className="footer-main-logo " />
      <p className="footer-desc">
        We are the world's best Information Technology Company providing the highest quality in
        Software solutions.
      </p>
    </div>
  </div> */}

                <div className="footer-main container-fluid">
                    <div className="footer-img-logo">
                        <img className="logo-design" src={logo} alt="" />
                        <p>We are the world's best Information Technology Company providing the highest quality in
                            Software solutions.</p>
                    </div>
                </div>
            </div>

            {/* <div className="col center">
                        <h5 className="col-title">Quick Links</h5>
                        <div className="links-grid">
                            <a href="#hero">Home</a>
                            <a href="#about">About Us</a>
                            <a href="#services">Services</a>
                            {/* <a href="#">Portfolio</a> 
                            <NavLink to="/career" className="footer-link">Careers</NavLink>
                            <a href="#contact">Contact us</a>
                        </div>
                    </div> */}

            {/* divider line + bottom copyright area */}
            <div className="footer-bottom-footer container-fluid" style={{ textAlign: "center", padding: "15px 0", borderTop:"4px solid #0a0a0a" }}>
                <div className="bottom-center" style={{ textAlign: "center" }}>
                    <small>
                        Copyright © {new Date().getFullYear()} Spangles Webx. All Rights Reserved.
                    </small>
                </div>
            </div>

        </footer>
    );
}
