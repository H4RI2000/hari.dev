import React, { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const cursorDot = useRef(null);
  const cursorOutline = useRef(null);

  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    // Disable on touch devices (phones & tablets)
    const isTouchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      window.matchMedia("(pointer: coarse)").matches;

    if (isTouchDevice) {
      setEnabled(false);
      return;
    }

    const dot = cursorDot.current;
    const outline = cursorOutline.current;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;

    const speed = 0.05;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animateOutline = () => {
      outlineX += (mouseX - outlineX) * speed;
      outlineY += (mouseY - outlineY) * speed;
      outline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
      requestAnimationFrame(animateOutline);
    };

    requestAnimationFrame(animateOutline);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div className="cursor-dot" ref={cursorDot}></div>
      <div className="cursor-outline" ref={cursorOutline}></div>
    </>
  );
};

export default CustomCursor;
