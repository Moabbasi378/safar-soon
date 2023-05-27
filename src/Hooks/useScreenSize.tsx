import { useEffect, useState } from "react";

const useScreenHeight = (): number => {
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useEffect(() => {
    const updateDimension = (): void => {
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenHeight]);

  return screenHeight;
};
export default useScreenHeight;
