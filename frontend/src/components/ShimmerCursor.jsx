import { useEffect, useRef } from "react";

const ShimmerCursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const moveCursor = (e) => {
      const { clientX, clientY } = e;

      cursorRef.current.style.transform =
        `translate3d(${clientX}px, ${clientY}px, 0)`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[9999]"
    >
      <div className="shimmer-cursor" />
    </div>
  );
};

export default ShimmerCursor;