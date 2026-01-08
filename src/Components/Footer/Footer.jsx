import React, { useEffect, useRef } from "react";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaGlobe,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Ballpit from "../../Ballpit/Ballpit";
import "./Footer.css";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);


   

  return (
    <section className="footer-section" >
      {/* Ballpit background */}
      <div className="ballpit-layer">
        <Ballpit
          count={60}
          maxSize={0.7}
          minSize={0.25}
          gravity={0.3}
          friction={0.985}
          wallBounce={0.95}
          followCursor={false}
          colors={[
            "#6f5cff",
            "#8a7dff",
            "#b2a9ff",
            "#4c4cff",
            "#2a2a72",
          ]}
        />
      </div>

      {/* Footer content */}
      <div className="footer-wrapper">
        <div className="container footer-box glass animate">
          <div className="row text-white align-items-center">

            {/* Navigation */}
            <div className="col-lg-4 col-md-12 col-sm-12 mb-4 mb-lg-0 animate">
              <ul className="footer-links">
               {/* Wrap the text in <a> tags and use the same IDs as the NavBar */}
                <li><a href="#home" data-scroll-to className="text-white text-decoration-none">Home</a></li>
                <li><a href="#about" data-scroll-to className="text-white text-decoration-none">About me</a></li>
                <li><a href="#projects" data-scroll-to className="text-white text-decoration-none">Projects</a></li>
                <li><a href="#contact" data-scroll-to className="text-white text-decoration-none">Contact me</a></li>
              </ul>
            </div>

            {/* Social */}
            <div className="col-lg-4 col-md-12 col-sm-12 text-center mb-4  mb-lg-0 animate">
              <div className="social-icons p-2">
                <a href="https://www.instagram.com/hari_atl/" target="_blank" rel="noopener noreferrer">      
                <FaInstagram /></a>
                <a href="https://wa.me/+919895477408" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp /></a>
                <a href="mailto:hari2000atl@gmail.com" target="_blank" aria-label="Email hari">
                <FaEnvelope /></a>
                <a href="https://www.linkedin.com/in/harikrishnan-r-357520358/" target="_blank" rel="noopener noreferrer">
                <CiLinkedin /></a>
                <a href="tel:+919895477408" target="_blank" rel="noopener noreferrer">
                <FaPhoneAlt /></a>
              </div>
            </div>

            

          </div>
        </div>

        <div className="footer-bottom text-center text-white animate">
          © 2025 Inc. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default Footer;
