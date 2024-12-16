import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { useState } from "react";
import { useSpring, animated } from "react-spring";
import beam from "./assets/beam.svg";
import lightbeam from "./assets/light_beam.svg";
import "./App.css";
import PageIndicator from "./components/PageIndicator";

function App() {
  const [showLightBeam, setShowLightBeam] = useState(false);

  // Animation styles for fading between images
  const beamStyle = useSpring({
    opacity: showLightBeam ? 0 : 1,
    config: { duration: 500 },
  });

  // Function to handle scroll events
  const handleScroll = (currentScroll) => {
    const threshold = window.innerHeight; // Adjust based on when you want the transition
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
      >
        <ParallaxLayer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
            zIndex: -1,
          }}
          sticky={{ start: 0, end: 2 }}
        >
          {/* Beam Image */}
          <animated.img
            src={beam}
            style={{
              ...beamStyle,
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
            alt="Beam"
          />
          <div>
            <h1>SUBPRIMED</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "black",
            color: "white",
          }}
          offset={1} // Start the transition at the first page
          speed={0.7}
          factor={2.5}
        >
          <animated.img
            src={lightbeam}
            style={{
              ...beamStyle, // Using beamStyle for lightbeam as well
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
            alt="Light Beam"
          />
        </ParallaxLayer>

        <ParallaxLayer
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "black",
            color: "white",
          }}
          offset={2}
          speed={0.7}
          factor={2.5}
        >
          <h1>ABOUT</h1>
        </ParallaxLayer>

        <ParallaxLayer
          style={{
            display: "flex",
            justifyContent: "center",
            backgroundColor: "gray",
            color: "white",
            zIndex: -1,
          }}
          sticky={{ start: 3, end: 5 }}
        >
          <h1>FOOTER</h1>
        </ParallaxLayer>
      </Parallax>
      <PageIndicator />
    </>
  );
}

export default App;