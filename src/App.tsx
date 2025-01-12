import { useState, useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";
import PageIndicator from "./components/PageIndicator";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

function App() {
  const [currentPage, setCurrentPage] = useState(0);
  const discoverRef = useRef(null);
  const createRef = useRef(null); // Reference for the Create section
  const innovateRef = useRef(null);
  const [showDiscover, setShowDiscover] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showInnovate, setShowInnovate] = useState(false);
  const headingRef = useRef(null);
  const canvasRef = useRef(null);

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

  const innovateBeamStyle = useSpring({
    opacity: showInnovate ? 1 : 0,
    transform: showInnovate ? "translateY(0)" : "translateY(30px)", // Optional transform for extra animation effect
    config: { duration: 500 },
  });

  // Scroll handler to update current page
  const handleScroll = (e) => {
    const scrollTop = e.target.scrollTop;
    const newPage = Math.round(scrollTop / window.innerHeight);
    setCurrentPage(newPage);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    const points = [];
    const maxDistance = 150;
  
    const createPoints = () => {
      const width = canvas.width;
      const height = canvas.height;
      for (let i = 0; i < 100; i++) {
        points.push({
          x: Math.random() * width,
          y: Math.random() * height,
          dx: (Math.random() - 0.5) * 2,
          dy: (Math.random() - 0.5) * 2,
          radius: Math.random() * 2 + 1,
        });
      }
    };
  
    const drawLines = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
  
      // Draw Points
      points.forEach((point) => {
        ctx.beginPath();
        ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(117, 252, 251)"; // Neon blue-purple effect
        ctx.fill();
      });
  
      // Connect Points
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          const dx = points[i].x - points[j].x;
          const dy = points[i].y - points[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
  
          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
            ctx.lineTo(points[j].x, points[j].y);
            ctx.strokeStyle = `rgba(173, 216, 230, ${opacity})`; // Neon line
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };
  
    const updatePoints = () => {
      points.forEach((point) => {
        point.x += point.dx;
        point.y += point.dy;
  
        // Bounce off edges
        if (point.x <= 0 || point.x >= canvas.width) point.dx *= -1;
        if (point.y <= 0 || point.y >= canvas.height) point.dy *= -1;
      });
    };
  
    const animate = () => {
      updatePoints();
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };
  
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
  
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    createPoints();
    animate();
  
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      style={{
        height: "100vh",
        overflowY: "scroll",
        scrollSnapType: "y mandatory",
      }}
      onScroll={handleScroll}
    >
      {/* Canvas for Tessellation */}
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
      ></canvas>

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
  );
}

export default App;