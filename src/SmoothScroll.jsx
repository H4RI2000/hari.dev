import React, { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);
  const loco = useRef(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    // --- SUPER SMOOTH SETTINGS ---
    loco.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,            // lower = smoother
      multiplier: 0.8,       // smooth speed
      touchMultiplier: 3,    // smoother on mobile
      reloadOnContextChange: true,

      smartphone: {
        smooth: false,
        lerp: 0.08,
        
      },
      tablet: {
        smooth: false,
        lerp: 0.07,
      },
    });

    // Auto refresh when fonts/images load
    const refresh = () => loco.current.update();

    window.addEventListener("resize", refresh);
    document.addEventListener("load", refresh, true);

    // Bootstrap navbar collapse fix
    document.addEventListener("shown.bs.collapse", refresh);
    document.addEventListener("hidden.bs.collapse", refresh);

    return () => {
      window.removeEventListener("resize", refresh);
      document.removeEventListener("load", refresh, true);
      document.removeEventListener("shown.bs.collapse", refresh);
      document.removeEventListener("hidden.bs.collapse", refresh);

      loco.current && loco.current.destroy();
    };
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
