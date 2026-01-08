import { useEffect, useRef, useState } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const cursorDot = useRef(null);
  const cursorOutline = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const isTouchDevice =
      window.matchMedia("(pointer: coarse)").matches ||
      navigator.maxTouchPoints > 0;

    if (isTouchDevice) return;

    setEnabled(true);

    const dot = cursorDot.current;
    const outline = cursorOutline.current;

    let mouseX = 0;
    let mouseY = 0;
    let outlineX = 0;
    let outlineY = 0;
    const speed = 0.05;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const animate = () => {
      outlineX += (mouseX - outlineX) * speed;
      outlineY += (mouseY - outlineY) * speed;
      outline.style.transform = `translate(${outlineX}px, ${outlineY}px)`;
      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div className="cursor-dot" ref={cursorDot} />
      <div className="cursor-outline" ref={cursorOutline} />
    </>
  );
};

export default CustomCursor;
