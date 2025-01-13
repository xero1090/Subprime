import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";
import PageIndicator from "./components/PageIndicator/PageIndicator";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";

gsap.registerPlugin(TextPlugin);

function App() {
  // State
  const [currentPage, setCurrentPage] = useState(0);
  const [showDiscover, setShowDiscover] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showInnovate, setShowInnovate] = useState(false);

  // Refs
  const discoverRef = useRef(null);
  const createRef = useRef(null); // Reference for the Create section
  const innovateRef = useRef(null);
  const headingRef = useRef(null);


  // Animation for Discover section
  const discoverBeamStyle = useSpring({
    opacity: showDiscover ? 1 : 0,
    transform: showDiscover ? "translateY(0)" : "translateY(30px)", // Optional transform for extra animation effect
    config: { duration: 500 },
  });

  // Animation for Create section
  const createBeamStyle = useSpring({
    opacity: showCreate ? 1 : 0,
    transform: showCreate ? "translateY(0)" : "translateY(30px)", // Optional transform for extra animation effect
    config: { duration: 500 },
  });

  // Animation for Innovate section
  const innovateBeamStyle = useSpring({
    opacity: showInnovate ? 1 : 0,
    transform: showInnovate ? "translateY(0)" : "translateY(30px)", // Optional transform for extra animation effect
    config: { duration: 500 },
  });

  // Scroll handler to update current page
  const handleScroll = (e: any) => {
    const scrollTop = e.target.scrollTop;
    const newPage = Math.round(scrollTop / window.innerHeight);
    setCurrentPage(newPage);

    // WORKS as long as the height of the sections is 100vh, should make dynamic
    // Show Discover section
    if (scrollTop >= window.innerHeight) {
      setShowDiscover(true);
    } else {
      setShowDiscover(false);
    }

    // Show Create section
    if (scrollTop >= window.innerHeight * 2) {
      setShowCreate(true);
    } else {
      setShowCreate(false);
    }

    // Show Innovate section
    if (scrollTop >= window.innerHeight * 3) {
      setShowInnovate(true);
    } else {
      setShowInnovate(false);
    }
  };

  return (
    <>
    <AnimatedBackground />    
    <div
      id="app"
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
          position: "relative",
          zIndex: 1,
        }}
      >
        <div>
        <h1
          ref={headingRef}
          style={{
            fontSize: "4rem",
            color: "white",
            textAlign: "center",
            fontFamily: "sans-serif",
          }}
        >
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
      </div>
    </div>

      {/* DISCOVER SECTION */}
      <div
        ref={discoverRef}
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
            zIndex: 2,
            ...discoverBeamStyle, // Apply the animation style for Discover
          }}
        >
          Discover.
        </animated.h2>
      </div>

      {/* CREATE SECTION */}
      <div
        ref={createRef}
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
            zIndex: 2,
            ...createBeamStyle, // Apply the animation style for Create
          }}
        >
          Create.
        </animated.h2>
      </div>

      {/* INNOVATE SECTION */}
      <div
        ref={innovateRef}
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
            zIndex: 2,
            ...innovateBeamStyle, // Apply the animation style for Create
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
        <div>
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
        </div>
      </div>

      {/* PAGE INDICATOR */}
      <PageIndicator currentPage={currentPage} totalPages={5} />
    </div>
    </>
  );
}

export default App;