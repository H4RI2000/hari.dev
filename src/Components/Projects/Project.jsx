import React from "react";
import BlurText from "../../Blurtext/BlurText";
import { motion } from "motion/react";
import portfolio from "../../assets/portfolio web.png";
import hospital from "../../assets/hospital.png";
import netflix from "../../assets/Netflix.png";
import webstatic from "../../assets/web-static.png";
import staticweb from "../../assets/staticweb.jpg";
import imagesearch from "../../assets/imagesearch.png";
import "./project.css";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "A modern React portfolio with animations and smooth scrolling.",
      img: portfolio,
      
    },
    {
      title: " Hospital Management System (Django + React)",
      desc: `This allowing doctors to register, log in,and manage patient appointments. Implemented JWT-based authentication..`,
      img: hospital,
      live: [{ label: "Live", url: "https://frontend-miux.onrender.com/" }],
      github: "https://github.com/H4RI2000/frontend.git",
    },
    {
      title: "Netflix Clone",
      desc: "UI clone with TMDB API, React Hooks, custom player and firebase auth",
      img: netflix,
     
      github: "https://github.com/H4RI2000/netflix-clone.git",
    },
    {
      title: " Flavour Fusion Trading and  ICA Institute (Live Projects)",
      desc: " using HTML, CSS, Bootstrap 5, andJavaScript. Features include carousel, card layouts, interactive gallery, mail contact form, and social media integration",
      img: webstatic,
    live: [
      { label: "Flour Fusion", url: " https://flavourfusiontrading.com" },
      { label: "ICA", url: "https://www.icaparippally.com   " }
    ],
      
    },
    {
      title: "IMAGE SEARCH APP",
      desc: "Developed a front-end web application using HTML, CSS, and JavaScript that enables users to search for images dynamically via the Unsplash API",
      img: imagesearch,
    live: [
      { label: "Live", url: "https://searchandview.netlify.app" }
    ],
      github: "https://github.com/H4RI2000/image-search-app.git",
    },
    {
      title: "MARVEL STUDIOS CLONE & SOLAR EXPLORER  STATIC WEBSITES ",
      desc: "beginner level projects, including a non responsive Marvel Studios clone using HTML/CSS and an interactive Solar Explorer site with hover effects, animations, multimedia integration",
      img: staticweb,
    live: [
      { label: "Marvel Site", url: "https://marvelclones.netlify.app" },
      { label: "Solar Explorer", url: "https://spaceexplorer.netlify.app" }
    ],
    },
  ];

  return (
    <section className="container py-5">
      {/* Animated Title */}
      <div className="project  mb-4">
        <BlurText
          text="Projects"
          className=" "
          animateBy="words"
          delay={120}
          direction="top"
        />
      </div>

      {/* Card Grid */}
      <div className="row g-4">
        {projects.map((p, index) => (
          <div className="col-md-4" key={index}>
            <motion.div
              className="card shadow-sm"
              data-scroll
              data-scroll-speed="1"
              initial={{ opacity: 0, y: 80, filter: "blur(8px)" }}
              whileInView={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <img src={p.img} className="card-img-top" alt={p.title} />
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.desc}</p>

               <div className="d-flex gap-2 flex-wrap">
                  {p.live?.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark btn-sm"
                    >
                      🔗 {link.label}
                    </a>
                  ))}
                
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark btn-sm"
                    >
                      🗂 GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
