import { useState, useEffect } from "react";
import DesktopCarousel from "./DesktopCarousel"; // Desktop component
import MobileCarousel from "./MobileCarousel"; // Mobile component

const ResponsiveCards = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="cards">
      {isMobile ? <MobileCarousel /> : <DesktopCarousel />}
    </div>
  );
};

export default ResponsiveCards;
