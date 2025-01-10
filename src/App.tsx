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
    gsap.fromTo(
      headingRef.current,
      {
        text: "________", // Starting placeholder for the scrambling effect
        scrambleText: { characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%", speed: 0.5 }, // Scramble speed
      },
      {
        text: "SUBPRIME", // Target text
        scrambleText: { characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%" }, // Characters pool
        duration: 2, // Duration of the scramble effect
        repeat: -1, // Infinite repeat
        repeatDelay: 1.7, // Delay between repeats
        ease: "none", // Linear easing for smooth effect
      }
    );

    // Observer for Discover section
    const discoverObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowDiscover(true);
        } else {
          setShowDiscover(false);
        }
      },
      { threshold: 0.5 }
    );

    // Observer for Create section
    const createObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCreate(true);
        } else {
          setShowCreate(false);
        }
      },
      { threshold: 0.5 }
    );

    const innovateObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowInnovate(true);
        } else {
          setShowInnovate(false);
        }
      },
      { threshold: 0.5 }
    );

    if (discoverRef.current) {
      discoverObserver.observe(discoverRef.current);
    }

    if (createRef.current) {
      createObserver.observe(createRef.current);
    }

    if (innovateRef.current) {
      innovateObserver.observe(innovateRef.current);
    }

    return () => {
      if (discoverRef.current) {
        discoverObserver.unobserve(discoverRef.current);
      }
      if (createRef.current) {
        createObserver.unobserve(createRef.current);
      }
      if (innovateRef.current) {
        innovateObserver.unobserve(innovateRef.current);
      }
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
        <h1
          ref={headingRef}
          style={{
            fontSize: "4rem",
            color: "white",
            textAlign: "center",
            fontFamily: "sans-serif",
          }}
        >
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
