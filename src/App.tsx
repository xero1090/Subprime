import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";
import PageIndicator from "./components/PageIndicator";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  // Animation style generators
  const getSectionAnimation = (index: number) => {
    return useSpring({
      opacity: currentPage === index ? 1 : 0,
      transform: currentPage === index ? "translateY(0px)" : "translateY(50px)",
      config: { duration: 500 },
    });
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const newPage = Math.round(scrollTop / window.innerHeight);
    setCurrentPage(newPage);
  };

  return (
    <div
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
      onScroll={handleScroll}
    >
      {/* HERO SECTION */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(to bottom, #000000, #1a1a1a)",
          scrollSnapAlign: "start",
        }}
      >
        <animated.div style={getSectionAnimation(0)}>
          <h1 style={{ fontSize: "4rem", color: "white", textAlign: "center" }}>
            SUBPRIME
          </h1>
          <p
            style={{
              fontSize: "1.5rem",
              color: "lightgray",
              textAlign: "center",
              marginTop: "1rem",
            }}
          >
            Experience a seamless journey.
          </p>
        </animated.div>
      </div>

      {/* DISCOVER SECTION */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#1a1a1a",
          scrollSnapAlign: "start",
        }}
      >
        <animated.h2
          style={{
            fontSize: "3rem",
            color: "white",
            ...getSectionAnimation(1),
          }}
        >
          Discover.
        </animated.h2>
      </div>

      {/* CREATE SECTION */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#333333",
          scrollSnapAlign: "start",
        }}
      >
        <animated.h2
          style={{
            fontSize: "3rem",
            color: "white",
            ...getSectionAnimation(2),
          }}
        >
          Create.
        </animated.h2>
      </div>

      {/* INNOVATE SECTION */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#4d4d4d",
          scrollSnapAlign: "start",
        }}
      >
        <animated.h2
          style={{
            fontSize: "3rem",
            color: "white",
            ...getSectionAnimation(3),
          }}
        >
          Innovate.
        </animated.h2>
      </div>

      {/* FOOTER SECTION */}
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#666666",
          scrollSnapAlign: "start",
        }}
      >
        <animated.div style={getSectionAnimation(4)}>
          <h1 style={{ fontSize: "2.5rem", color: "white", textAlign: "center" }}>
            Thank You for Visiting!
          </h1>
          <p
            style={{
              fontSize: "1.2rem",
              color: "lightgray",
              marginTop: "1rem",
              textAlign: "center",
            }}
          >
            Scroll with purpose, create with passion.
          </p>
        </animated.div>
      </div>

      {/* PAGE INDICATOR */}
      <PageIndicator currentPage={currentPage} totalPages={5} />
    </div>
  );
}

export default App;
