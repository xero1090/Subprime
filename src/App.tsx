import { Parallax, ParallaxLayer } from "@react-spring/parallax";
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
    <>
      <Parallax
        id="parallax"
        pages={5}
        onScroll={(e) => handleScroll(e.currentTarget.scrollTop)}
        style={{ margin: 0, padding: 0 }}
      >
        {/* HERO SECTION */}
        <ParallaxLayer
          offset={0}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            background: "linear-gradient(to bottom, #000000, #1a1a1a)",
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
        </ParallaxLayer>

        {/* DISCOVER SECTION */}
        <ParallaxLayer
          offset={1}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#1a1a1a",
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
        </ParallaxLayer>

        {/* CREATE SECTION */}
        <ParallaxLayer
          offset={2}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#333333",
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
        </ParallaxLayer>

        {/* INNOVATE SECTION */}
        <ParallaxLayer
          offset={3}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#4d4d4d",
          }}
        >
          <h2 style={{ fontSize: "3rem", color: "white" }}>Innovate.</h2>
        </ParallaxLayer>

        {/* FOOTER SECTION */}
        <ParallaxLayer
          offset={4}
          speed={0}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#666666",
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
        </ParallaxLayer>
      </Parallax>

      {/* PAGE INDICATOR */}
      <PageIndicator />
    </>
  );
}

export default App;
