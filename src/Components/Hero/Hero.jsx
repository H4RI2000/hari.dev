import React from "react";
import "./Hero.css";
import profile from "../../assets/Profile.png";
import BlurText from "../../Blurtext/BlurText";

function Hero() {
  return (
    <section className="hero container "data-scroll-container>
      <div className="row align-items-center">

        {/* LEFT IMAGE */}
        <div className="col-md-6 text-center  " >
          <img src={profile} alt="profile" className="hero-img img-fluid" />
        </div>

        {/* RIGHT TEXT */}
        <div className="col-md-6 text-white text-md-start text-center"data-scroll-section>

          <BlurText text="I AM" animateBy="words" delay={50} className="hero-tag" />

          <BlurText
            text="HARIKRISHNAN R"
            animateBy="chars"
            delay={100}
            className="hero-title fw-bold"
          />

          <BlurText
            text="BUILDING ROBUST AND SCALABLE WEB APPLICATIONS WITH DJANGO AND REACT"
            animateBy="words"
            delay={150}
            className="hero-sub"
          />
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="about container " >
        <div className="about-box p-4 p-md-5">

          <BlurText
            text="ABOUT ME"
            animateBy="chars"
            delay={100}
            className="aboutme mb-3"
          />

          <BlurText
            className="about-text"
            animateBy="words"
            delay={100}
            text={`driven Full-stack developer with hands-on experience building responsive, user-focused web applications using React, Django, REST API, and various databases. With a solid technical foundation, I am deeply interested in backend services and modern UI development...`}
          />

        </div>
      </div>

    </section>
  );
}

export default Hero;

