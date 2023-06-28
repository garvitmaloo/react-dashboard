import { useState, useEffect } from "react";

function useFetchViewportWidth(): number {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handlerResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener("resize", handlerResize);

    return () => {
      window.removeEventListener("resize", handlerResize);
    };
  }, []);

  return viewportWidth;
}

export default useFetchViewportWidth;
