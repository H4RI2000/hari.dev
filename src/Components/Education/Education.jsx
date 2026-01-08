import BlurText from "../../Blurtext/BlurText";
import React from "react";
import "./Education.css";

const Education = () => {
  return (
    <section className="education-wrapper">

      <div className="left"  >
        <BlurText
          text="Education"
          animateBy="words"
          delay={120}
          className="title"
        />

        <BlurText
          text="This educational journey has given a strong foundation in both theory and hands-on practice..."
          animateBy="words"
          delay={40}
          className="desc"
        />
      </div>

      <div className="right" >

        <div className="edu-item" data-scroll data-scroll-speed="6" >
          <BlurText
            text="Diploma in Python Full Stack Development"
            animateBy="words"
            delay={20}
          />
          <BlurText text="IPCS Global, 2024–2025" delay={10} />
        </div>

        <div className="edu-item" data-scroll data-scroll-speed="6">
          <BlurText text="Electronics Mechanic" delay={20} />
          <BlurText text="NSQF, 2018–2020" delay={10} />
        </div>

        <div className="edu-item" data-scroll data-scroll-speed="6">
          <BlurText text="Higher Secondary School (12th) – 2018" delay={20} />
          <BlurText text="Govt. H.S.S Attingal" delay={10} />
        </div>

      </div>

    </section>
  );
};

export default Education;
