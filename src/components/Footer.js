// src/components/Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import logo from '../img/logo.png'
import logowebx from '../img/Favi icon (1).jpg'

export default function Footer() {
  return (
    <footer className="career-footer">
                {/* floating info card */}
               

                {/* main footer area */}
                <div className="footer-main container-fluid">
                    <div className="footer-columns">
                        <div className="col left">
                            <img src={logo} alt="Spangles Webx" className="footer-main-logo" />
                            <p className="footer-desc">
                                We are the best world Information Technology Company. Providing the highest quality in hardware,
                                Software & Network solutions.
                            </p>
                        </div>

                        <div className="col center">
                            <h5 className="col-title">Quick Links</h5>
                            <div className="links-grid">
                                <a href="#">Home</a>
                                <a href="#">About Us</a>
                                <a href="#">Services</a>
                                <a href="#">Portfolio</a>
                                <a href="#">Careers</a>
                                <a href="#">Contact us</a>
                            </div>
                        </div>


                    </div>
                </div>

                {/* divider line + bottom copyright area */}
                <div className="footer-bottom container-fluid">
                    <div className="bottom-left">
                        <small>Copyright © 2021 Spangles Webx. All Rights Reserved.</small>
                    </div>
                    <div className="bottom-right">
                        <a href="#">Privacy Policy</a>
                        <span className="sep" aria-hidden="true">|</span>
                        <a href="#">Terms &amp; Conditions</a>
                    </div>
                </div>
            </footer>
  );
}
