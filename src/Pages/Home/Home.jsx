import React, { useEffect, useState } from 'react';

import NavBar  from '../../Components/NavBar/NavBar'
import Hero from '../../Components/Hero/Hero'
import Experience from '../../Components/Experience/Experience'
import Education from '../../Components/Education/Education'

import Certificates from '../../Components/Certificate/Certificate'
import Skills from '../../Components/Skills/Skills'
import ProjectsSection from '../../Components/Projects/Project'
import Gallery from '../../Components/Gallery/Gallery'
import Contact from '../../Components/Contact/Contact'
import Footer from '../../Components/Footer/Footer'



function Home() {
  return (
    <>
      <div data-scroll-section>
        {/* The NavBar stays at the top */}
        <NavBar />

        {/* Give each section an ID that matches your Nav Links */}
        <div id="home">
          <Hero />
        </div>
        
        <div id="about">
          <Experience />
          <Education />
        </div>

        <Certificates />
        <Skills />

        <div id="projects">
          <ProjectsSection />
        </div>

        <div>
          <Gallery />
        </div>

        <div id="contact">
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
