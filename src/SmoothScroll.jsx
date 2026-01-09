import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const loco = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

loco.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
      multiplier: 0.8,
      touchMultiplier: 3,
      reloadOnContextChange: true,
    
      smartphone: {
        smooth: true,
        breakpoint: 0, 
      },
      tablet: {
        smooth: true,
        breakpoint: 0,
      },
    });


  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      style={{
        willChange: "transform",
      }}
    >
      {children}
    </div>
  );
};

export default SmoothScroll;
