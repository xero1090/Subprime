import { useState } from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";
import PageIndicator from "./components/PageIndicator";

function App() {
  const [showLightBeam, setShowLightBeam] = useState(false);

  // Animation for fading elements
  const beamStyle = useSpring({
    opacity: showLightBeam ? 0 : 1,
    config: { duration: 500 },
  });

  // Scroll handler for triggering animations
  const handleScroll = (currentScroll) => {
    const threshold = window.innerHeight * 0.8; // Adjust trigger point
    if (currentScroll >= threshold && !showLightBeam) {
      setShowLightBeam(true);
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
      onScroll={(e) => handleScroll(e.target.scrollTop)}
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
        <div>
          <h1 style={{ fontSize: "4rem", color: "white", textAlign: "center" }}>
            SUBPRIMED
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
            ...beamStyle,
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
            ...beamStyle,
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
        <h2 style={{ fontSize: "3rem", color: "white" }}>Innovate.</h2>
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
      <PageIndicator />
    </div>
  );
}

export default App;
