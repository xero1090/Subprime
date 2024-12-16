import { useEffect, useState } from "react";
import { useParallaxScroll } from "../hooks/useParallaxScroll";

// interface props {
//   scrollProgress: number;
// }

const PageIndicator = () => {
  const [activePage, setActivePage] = useState(1);
  const totalPages = 5; // Assuming there are 5 pages
  const scrollProgress = useParallaxScroll();

  useEffect(() => {
    setActivePage(
      Math.min(
        totalPages,
        Math.max(1, Math.ceil((scrollProgress / 100) * totalPages))
      )
    );
  }, [scrollProgress]);

  return (
    <div
      style={{
        position: "absolute",
        bottom: "1%",
        right: "2%",
        zIndex: 100,
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div id="page-1" className="indicator"></div>
      <div id="page-2" className="indicator"></div>
      <div id="page-3" className="indicator"></div>
      <div id="page-4" className="indicator"></div>
      <div id="page-5" className="indicator"></div>

      <style>
        {`
            .indicator {
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background-color: grey;
                margin: 5px 0;
            }
            #page-${activePage} {
                width: 10px;
                height: 10px;
                background-color: white;
            }
            `}
      </style>
    </div>
  );
};

export default PageIndicator;
