import { useState, useRef} from "react";
//import { useSpring, animated } from "react-spring";
import "./App.css";
import PageIndicator from "./components/PageIndicator/PageIndicator";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";
import CustomCursor from "./components/CustomCursor/CustomCursor";
import SmokeEffect from "./components/SmokeEffect/SmokeEffect";
import logo from "./assets/Black Logo Trans.png";
import BLogo from "./assets/Blitz Revised Logo-new.png";
import ULogo from "./assets/2You-new2.png";
import lendwire from "./assets/P2P-new.png"
import ReCAPTCHA from "react-google-recaptcha";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamCarousel from "./components/TeamCarousel/TeamCarousel"; 

gsap.registerPlugin(TextPlugin);

function App() {
  // State
  const [currentPage, setCurrentPage] = useState(0);
  //const [showDiscover, setShowDiscover] = useState(false);
  //const [showCreate, setShowCreate] = useState(false);
  //const [showInnovate, setShowInnovate] = useState(false);
  //const [showFooter, setShowFooter] = useState(false);

  // Refs
  const discoverRef = useRef(null);
  const createRef = useRef(null); // Reference for the Create section
  const innovateRef = useRef(null);
  const footerRef = useRef(null);
    
  /* Animation for Discover section
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
  */
  const recaptchaRef = useRef<ReCAPTCHA | null>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    // Submit form logic here (e.g., send data to a backend)
    console.log("Form submitted:", formData);

    // Reset reCAPTCHA after submission
    recaptchaRef.current?.reset();
    setRecaptchaToken(null);
  };

  // Scroll handler to update current page
  const handleScroll = (e: any) => {
    const scrollTop = e.target.scrollTop;
    const newPage = Math.round(scrollTop / window.innerHeight);
    setCurrentPage(newPage);

    /* WORKS as long as the height of the sections is 100vh, should make dynamic
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
    }*/
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
          <div 
            style={{
            fontSize: "3rem",
            color: "white",
            zIndex: 2,
            textAlign: "center", // Ensure text is centered
            marginBottom: "1rem", // Add space between text and logos
            }}
          >
            Our Stack
          </div>
          
          <div
            style={{
              display: "flex",
              gap: "2rem",
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
              href="https://lendwire.com/" target="_blank" 
            >
              <img src={lendwire} alt="Lendwire Logo"/>
            </a>
          </div>
        </div>

        {/* CREATE SECTION */}
        <div
        ref={createRef}
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#333333",
          scrollSnapAlign: "start",
          padding: "2rem 0",
        }}
      >
        <div
          style={{
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            fontSize: "3rem",
            color: "white",
            zIndex: 2,
            marginTop: "8rem",
          }}
        >
          Our Team
        </div>
        <TeamCarousel/>
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
          <div
            style={{
              fontSize: "3rem",
              color: "white",
              zIndex: 2,
              marginBottom: "1.5rem", // Space between title and input
            }}
          >
            Subscribe for Updates
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              //handleSubscribe();
            }}
            style={{
              display: "flex",
              gap: "0.5rem",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#222",
              padding: "1rem",
              borderRadius: "12px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Subtle shadow for depth
              maxWidth: "400px",
              width: "100%",
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
                backgroundColor: "#333",
                color: "#fff",
                transition: "all 0.3s ease-in-out",
              }}
              onFocus={(e) => (e.target.style.backgroundColor = "#444")}
              onBlur={(e) => (e.target.style.backgroundColor = "#333")}
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
                transition: "background 0.3s ease-in-out",
              }}
              onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
              onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
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
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#262626",
          scrollSnapAlign: "start",
          padding: "2rem",
        }}
      >
        <h2
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            color: "#fff",
            marginBottom: "1rem",
          }}
        >
          Reach Out to Us
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#ccc",
            marginBottom: "2rem",
            textAlign: "center",
            maxWidth: "500px",
          }}
        >
          Have a question? Send us a message and we'll get back to you!
        </p>

        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "1rem",
            width: "100%",
            maxWidth: "400px",
            padding: "1.5rem",
            backgroundColor: "#1e1e1e",
            borderRadius: "12px",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.3)",
          }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "0.8rem",
              fontSize: "1rem",
              borderRadius: "6px",
              border: "1px solid #444",
              backgroundColor: "#333",
              color: "#fff",
              outline: "none",
              transition: "0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#6a5acd")}
            onBlur={(e) => (e.target.style.borderColor = "#444")}
          />
          
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "0.8rem",
              fontSize: "1rem",
              borderRadius: "6px",
              border: "1px solid #444",
              backgroundColor: "#333",
              color: "#fff",
              outline: "none",
              transition: "0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#6a5acd")}
            onBlur={(e) => (e.target.style.borderColor = "#444")}
          />

          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            required
            value={formData.message}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "0.8rem",
              fontSize: "1rem",
              borderRadius: "6px",
              border: "1px solid #444",
              backgroundColor: "#333",
              color: "#fff",
              resize: "none",
              outline: "none",
              transition: "0.3s",
            }}
            onFocus={(e) => (e.target.style.borderColor = "#6a5acd")}
            onBlur={(e) => (e.target.style.borderColor = "#444")}
          />

          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="YOUR_RECAPTCHA_SITE_KEY"
            onChange={handleRecaptchaChange}
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "0.8rem",
              fontSize: "1rem",
              fontWeight: "bold",
              textTransform: "uppercase",
              border: "none",
              borderRadius: "6px",
              backgroundColor: "#007bff",
              color: "#fff",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#7b68ee")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#6a5acd")}
          >
            Send Message
          </button>
        </form>
      </div>

        {/* PAGE INDICATOR */}
        <PageIndicator currentPage={currentPage} totalPages={5} />
      </main>
    </>
  );
}

export default App;

