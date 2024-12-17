import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";

function App() {
  return (
    <div style={{ width: "100%", height: "100vh", overflow: "hidden" }}>
      <Parallax pages={4} style={{ background: "#1a1a1a" }}>
        {/* Hero Section */}
        <ParallaxLayer
          offset={0}
          speed={0.2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "linear-gradient(to bottom, #000000, #333333)",
          }}
        >
          <div>
            <h1 style={{ fontSize: "4rem", color: "white", textAlign: "center" }}>
              Welcome to SUBPRIME
            </h1>
            <p
              style={{
                fontSize: "1.5rem",
                color: "lightgray",
                marginTop: "1rem",
                textAlign: "center",
              }}
            >
              A seamless parallax experience awaits.
            </p>
          </div>
        </ParallaxLayer>

        {/* Discover Section */}
        <ParallaxLayer
          offset={0.8}
          speed={0.3}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#1a1a1a",
          }}
        >
          <h2 style={{ fontSize: "3rem", color: "white", textAlign: "center" }}>
            Discover.
          </h2>
        </ParallaxLayer>

        {/* Create Section */}
        <ParallaxLayer
          offset={1.6}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#333333",
          }}
        >
          <h2 style={{ fontSize: "3rem", color: "white", textAlign: "center" }}>
            Create.
          </h2>
        </ParallaxLayer>

        {/* Innovate Section */}
        <ParallaxLayer
          offset={2.4}
          speed={0.7}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#4d4d4d",
          }}
        >
          <h2 style={{ fontSize: "3rem", color: "white", textAlign: "center" }}>
            Innovate.
          </h2>
        </ParallaxLayer>

        {/* Footer Section */}
        <ParallaxLayer
          offset={3}
          speed={0.2}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            background: "#666666",
          }}
        >
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
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
