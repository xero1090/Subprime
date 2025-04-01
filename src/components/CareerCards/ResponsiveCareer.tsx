import { useState, useEffect } from "react";
import DesktopCareer from "./DesktopCareer"; // Desktop component
import MobileCareer from "./MobileCareer"; // Mobile component

const ResponsiveCareer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="career-section">
      {isMobile ? <MobileCareer /> : <DesktopCareer />}
    </div>
  );
};

export default ResponsiveCareer;
