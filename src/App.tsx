import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import beam from "./assets/beam.svg";
import "./App.css";
import PageIndicator from "./components/PageIndicator";

function App() {
  // const scrollProgress = useParallaxScroll();

  return (
    <>
      <Parallax id="parallax" pages={5}>
        <ParallaxLayer
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "black",
            color: "white",
            zIndex: -1,
          }}
          sticky={{ start: -0, end: 2 }}
        >
          <img
            src={beam}
            style={{ position: "absolute", width: "100%", height: "100%" }}
          ></img>
          <div>
            <h1>SUBPRIMED</h1>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          style={{
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
            backgroundColor: "black",
            color: "white",
          }}
          offset={2}
          speed={0.7}
          factor={2.5}
          // sticky={{ start: 1, end: 3 }}
        >
          <h1>ABOUT</h1>
        </ParallaxLayer>
        <ParallaxLayer style={{
            display: "flex",
            justifyContent: "center",
            // alignItems: "center",
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
