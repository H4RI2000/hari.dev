import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Masonry.css";

/* ---------- MEDIA QUERY ---------- */
const useMedia = (queries, values, defaultValue) => {
  const get = () =>
    values[queries.findIndex(q => matchMedia(q).matches)] ?? defaultValue;

  const [value, setValue] = useState(get);

  useEffect(() => {
    const handler = () => setValue(get);
    queries.forEach(q =>
      matchMedia(q).addEventListener("change", handler)
    );
    return () =>
      queries.forEach(q =>
        matchMedia(q).removeEventListener("change", handler)
      );
  }, [queries]);

  return value;
};

/* ---------- MEASURE ---------- */
const useMeasure = () => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (!ref.current) return;

    const ro = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width);
    });

    ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);

  return [ref, width];
};

/* ---------- MASONRY ---------- */
const Masonry = ({ items }) => {
  const columns = useMedia(
    ["(min-width:1500px)", "(min-width:1000px)", "(min-width:600px)"],
    [5, 4, 3],
    2
  );

  const [containerRef, width] = useMeasure();
  const hasAnimated = useRef(false);

  const [activeImage, setActiveImage] = useState(null);
  const modalRef = useRef(null);
  const imageRef = useRef(null);

  /* ---------- GRID ---------- */
  const { grid, height } = useMemo(() => {
    if (!width) return { grid: [], height: 0 };

    const colHeights = new Array(columns).fill(0);
    const colWidth = width / columns;

    const gridItems = items.map(item => {
      const col = colHeights.indexOf(Math.min(...colHeights));
      const x = col * colWidth;
      const y = colHeights[col];
      const h = item.height;

      colHeights[col] += h;

      return { ...item, x, y, w: colWidth, h };
    });

    return {
      grid: gridItems,
      height: Math.max(...colHeights)
    };
  }, [items, width, columns]);

  /* ---------- ENTRANCE ANIMATION ---------- */
  useLayoutEffect(() => {
    if (hasAnimated.current) return;

    grid.forEach((item, i) => {
      const el = document.querySelector(`[data-key="${item.id}"]`);
      if (!el) return;

      gsap.fromTo(
        el,
        { opacity: 0, scale: 0.96 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          delay: i * 0.05,
          ease: "power3.out"
        }
      );
    });

    hasAnimated.current = true;
  }, [grid]);

  /* ---------- POPUP OPEN ANIMATION ---------- */
  useEffect(() => {
    if (!activeImage) return;

    gsap.fromTo(
      modalRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" }
    );

    gsap.fromTo(
      imageRef.current,
      { scale: 0.85, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power3.out"
      }
    );
  }, [activeImage]);

  return (
    <>
      <div
        ref={containerRef}
        className="list"
        style={{ height }}
      >
        {grid.map(item => (
          <div
            key={item.id}
            data-key={item.id}
            className="item-wrapper"
            style={{
              width: item.w,
              height: item.h,
              transform: `translate(${item.x}px, ${item.y}px)`
            }}
            
          >
            <div
              className="item-img bw-image"
              style={{ backgroundImage: `url(${item.img})` }}
            />
          </div>
        ))}
      </div>

     
    </>
  );
};

export default Masonry;
