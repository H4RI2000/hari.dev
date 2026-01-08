import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg px-lg-5 px-3">
      <div className="container-fluid">

        {/* LEFT LOGO */}
        <a className="navbar-brand text-white fw-bold" href="#home">
          PORTFOLIO
        </a>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU ITEMS */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav custom-menu px-4 py-2">

           <li className="nav-item">
             <a className="nav-link text-white" href="#home" data-scroll-to>HOME</a>
           </li>
           <li className="nav-item">
             <a className="nav-link text-white" href="#about" data-scroll-to>ABOUT ME</a>
           </li>
           <li className="nav-item">
             <a className="nav-link text-white" href="#projects" data-scroll-to>PROJECTS</a>
           </li>
           <li className="nav-item">
             <a className="nav-link text-white" href="#contact" data-scroll-to>CONTACT</a>
           </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}

export default NavBar;
