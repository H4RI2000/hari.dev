import React, { useEffect, useRef } from "react";

import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import "./Experience.css";
import BlurText from "../../Blurtext/BlurText";



function Experience() {
  return (
    <div>
          <section className="  timeline-section  container  "  >
      
      

      {/* ITEM 1 */}
      <div
        className="row timeline-item"
        data-scroll
        data-scroll-class="in-view"
      >
        {/* YEAR */}
        <div className="col-md-3 text-md-end mb-3">
          <BlurText
            text="2020-2021"
            animateBy="chars"
            direction="left"
            delay={100}
            className="timeline-year"
          />
        </div>

        {/* DOT */}
        <div className="col-md-1 d-flex justify-content-center">
          <div className="timeline-dot"></div>
        </div>

        {/* CONTENT */}
        <div className="col-md-8">
          <BlurText
            text="TECHNICAL OPERATOR - NORATEL INDIA POWER COMPONENTS PVT LTD"
            animateBy="words"
            direction="top"
            delay={120}
            className="job-title"
          />

          <ul className="timeline-list">
            <li>Operated and maintained electronic systems ensuring efficiency and safety.</li>
            <li>Worked in a team environment and followed technical documentation.</li>
          </ul>
        </div>
      </div>

      {/* ITEM 2 */}
      <div
        className="row timeline-item"
        data-scroll
        data-scroll-class="in-view"
      >
        {/* YEAR */}
        <div className="col-md-3 text-md-end mb-3">
          <BlurText
            text="2022"
            animateBy="chars"
            direction="left"
            delay={100}
            className="timeline-year"
          />
        </div>

        {/* DOT */}
        <div className="col-md-1 d-flex justify-content-center">
          <div className="timeline-dot"></div>
        </div>

        {/* CONTENT */}
        <div className="col-md-8">
          <BlurText
            text="BUSINESS DEVELOPMENT MANAGER - VOXMED"
            animateBy="words"
            direction="left"
            delay={100}
            className="job-title"
          />

          <ul className="timeline-list">
            <li>Built strong client relationships to support sales growth.</li>
            <li>Improved leadership, communication, and problem-solving skills.</li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Experience

