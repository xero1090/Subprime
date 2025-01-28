import { useState, useRef} from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";
import PageIndicator from "./components/PageIndicator/PageIndicator";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import SmokeEffect from "./components/SmokeEffect/SmokeEffect";
import logo from "./assets/Black Logo Trans.png";
import BLogo from "./assets/Blitz Revised Logo.png";
import ULogo from "./assets/2You.png";
import Contact from "./assets/Contact.png";

gsap.registerPlugin(TextPlugin);

function App() {
  // State
  const [currentPage, setCurrentPage] = useState(0);
  const [showDiscover, setShowDiscover] = useState(false);
  const [showCreate, setShowCreate] = useState(false);
  const [showInnovate, setShowInnovate] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  // Refs
  const discoverRef = useRef(null);
  const createRef = useRef(null); // Reference for the Create section
  const innovateRef = useRef(null);
  const footerRef = useRef(null);
    
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

  // Animation for Footer section
  const FooterBeamStyle = useSpring({
    opacity: showFooter ? 1 : 0,
    transform: showFooter ? "translateY(0)" : "translateY(30px)", // Optional transform for extra animation effect
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

    // Show Footer section
    if (scrollTop >= window.innerHeight * 4) {
      setShowFooter(true);
    } else {
      setShowFooter(false);
    }
  };

  return (
    <>
    <CustomCursor />
    <AnimatedBackground />    
    <main
      id="app"
      className={`scrollbar-section-${currentPage}`}
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
        <SmokeEffect />
        <div>
        <img src={logo} alt="Subprime Logo"/>
      </div>
    </div>

        {/* DISCOVER SECTION */}
        <div
          ref={discoverRef}
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column", // Stack elements vertically
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
              textAlign: "center", // Ensure text is centered
              marginBottom: "1rem", // Add space between text and logos
              ...discoverBeamStyle, // Apply animation style
            }}
          >
            Our Stack
          </animated.h2>
          
          <div
            style={{
              display: "flex",
              gap: "2rem", // Space between logos
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <a href="https://broker.myblitz.ca/" target="_blank">
              <img src={BLogo} alt="Blitz Logo" />
            </a>
            <a href="">
              <img src={ULogo} alt="2You Logo"/>
            </a>
            <a
              href="https://lendwire.com/"
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Security best practices
              style={{
                fontSize: "3rem", // Match "Our Stack"
                color: "white",
                textAlign: "center",
                textDecoration: "none", // Remove underline
                fontWeight: "bold", // Optional: make it stand out
              }}
            >
              Lendwire P2P
            </a>
          </div>
        </div>

        {/* CREATE SECTION */}
        <div
          ref={createRef}
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
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
            Our Team
          </animated.h2>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <a 
            href="https://www.linkedin.com/in/smarcmelo/"
            target="_blank" 
            style={{
              fontSize: "2rem",
              color: "white",
              textAlign: "center",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            >
              Shawn-Marc Melo (Founder / CEO)
            </a>
            <a 
            href="https://www.linkedin.com/in/ofir-d/"
            target="_blank" 
            style={{
              fontSize: "2rem",
              color: "white",
              textAlign: "center",
              textDecoration: "none",
              fontWeight: "bold",
            }}
            >
              Ofir David (Full-Stack Developer)
            </a>
            <a 
            href="https://ca.linkedin.com/in/gursahib-preet-singh-66a11a168" 
            target="_blank" 
            style={{
              fontSize: "2rem",
              color: "white",
              textAlign: "center",
              textDecoration: "none",
              fontWeight: "bold",
            }}>
              Sahib Singh (Full-Stack Developer)
            </a>
          </div>
          <div
            style={{
              display: "flex",
              gap: "2rem",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "2rem",
            }}
          >
            <a 
            href="https://ca.linkedin.com/in/kevintran1090" 
            target="_blank" 
            style={{
              fontSize: "2rem",
              color: "white",
              textAlign: "center",
              textDecoration: "none",
              fontWeight: "bold",
            }}>
              Kevin Tran (UI/UX Developer)
            </a>
            <a 
            href="https://www.linkedin.com/in/joeychancpa/" 
            target="_blank" 
            style={{
              fontSize: "2rem",
              color: "white",
              textAlign: "center",
              textDecoration: "none",
              fontWeight: "bold",
            }}>
              Joey Chan (UI/UX Developer)
            </a>
            <a 
            href="https://www.linkedin.com/in/architmisra/" 
            target="_blank" 
            style={{
              fontSize: "2rem",
              color: "white",
              textAlign: "center",
              textDecoration: "none",
              fontWeight: "bold",
            }}>
              Archit Misra (PR & Media Relations)
            </a>
          </div>
        </div>

        {/* INNOVATE SECTION */}
        <div
          ref={innovateRef}
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column", // Stack elements vertically
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
              marginBottom: "1.5rem", // Space between title and input
              ...innovateBeamStyle, // Apply animation
            }}
          >
            Subscribe for Updates
          </animated.h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              //handleSubscribe();
            }}
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#333",
              padding: "0.8rem",
              borderRadius: "10px",
            }}
          >
            <input
              type="email"
              placeholder="Enter your email"
              required
              style={{
                padding: "0.8rem",
                fontSize: "1rem",
                border: "none",
                borderRadius: "5px",
                outline: "none",
                width: "250px",
              }}
            />
            <button
              type="submit"
              style={{
                padding: "0.8rem 1.2rem",
                fontSize: "1rem",
                color: "white",
                backgroundColor: "#007bff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* FOOTER SECTION */}
        <div
          ref={footerRef}
          style={{
            height: "100vh",
            display: "flex",    
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#666666",
            scrollSnapAlign: "start",
            marginBottom: "2rem"
          }}
        >
          <animated.h2
            style={{
              fontSize: "3rem",
              color: "white",
              zIndex: 2,
              ...FooterBeamStyle, // Apply the animation style for Create
            }}
          >
            Reach Out
          </animated.h2>
          <img src={Contact} alt="Contact" />
        </div>

        {/* PAGE INDICATOR */}
        <PageIndicator currentPage={currentPage} totalPages={5} />
      </main>
    </>
  );
}

export default App;

