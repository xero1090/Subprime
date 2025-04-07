/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useRef, useEffect } from "react";
import "../App.css";
import PageIndicator from "../components/PageIndicator/PageIndicator";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import AnimatedBackground from "../components/AnimatedBackground/AnimatedBackground";
import CustomCursor from "../components/CustomCursor/CustomCursor";
import SmokeEffect from "../components/SmokeEffect/SmokeEffect";
import logo from "../assets/Black Logo.png";
import BLogo from "../assets/blitz-logo.webp";
import ULogo from "../assets/2-you-logo.webp";
import lendwire from "../assets/lendwire-p2p-logo.webp";
import deepidv from "../assets/deep-idv-logo.webp";
import ReCAPTCHA from "react-google-recaptcha";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ResponsiveCards from "../components/ResponsiveCards/ResponsiveCards";
import { Link } from "react-router-dom";
import CareerSection from "../components/CareerCards/careerSection";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

function Home() {
  // State
  const [currentPage, setCurrentPage] = useState(0);

  // Refs
  const discoverRef = useRef(null);
  const createRef = useRef(null); // Reference for the Create section
  const innovateRef = useRef(null);
  const footerRef = useRef(null);
  const careerRef = useRef(null);
  const currentPageRef = useRef<number>(0);

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA verification.");
      return;
    }

    const response = await fetch("/api/verify-recaptcha", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: recaptchaToken }),
    });

    const result = await response.json();
    if (result.success) {
      console.log("Form submitted successfully!");
      // Proceed with form submission
    } else {
      alert("reCAPTCHA verification failed.");
    }

    // Reset reCAPTCHA
    recaptchaRef.current?.reset();
    setRecaptchaToken(null);
  };

  // Scroll handler to update current page
  const handleScroll = (e: any) => {
    const scrollTop = e.target.scrollTop;
    const newPage = Math.round(scrollTop / window.innerHeight);

    if (currentPageRef.current !== newPage) {
      currentPageRef.current = newPage;
      setCurrentPage(newPage); // Debounced update
    }
  };

  useEffect(() => {
    const headers = document.querySelectorAll(".header");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Play the animation when the header enters the viewport
            gsap.fromTo(
              entry.target,
              { opacity: 0, y: 50 },
              { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
            );
          } else {
            // Reset the animation state when the header leaves the viewport
            gsap.set(entry.target, { opacity: 0, y: 50 });
          }
        });
      },
      { threshold: 0.8, rootMargin: "0px 0px -50px 0px" } // Avoid triggering too early
    );

    headers.forEach((header) => observer.observe(header));

    return () => observer.disconnect();
  }, []);

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
          overflowX: "hidden",
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
            <img src={logo} alt="Subprime Logo" className="logo-image" />
          </div>
          {/* Button to Navigate to Careers Page */}
          <Link
            to="/careers"
            style={{
              position: "absolute",
              top: "20px",
              right: "20px",
              backgroundColor: "#50cffa",
              color: "white",
              padding: "10px 20px",
              borderRadius: "5px",
              fontSize: "16px",
              textDecoration: "none",
              fontWeight: "bold",
              transition: "background 0.3s ease",
            }}
          >
            Careers
          </Link>
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
            backgroundColor: "#0d0d0d",
            scrollSnapAlign: "start",
          }}
        >
          <div
            className="header"
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
            className="our-stack"
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <figure className="flex flex-col items-center text-center">
              <a href="">
                <img
                  src={ULogo}
                  alt="2You Logo"
                  height={140}
                  className="block mx-auto"
                />
              </a>
              <figcaption
                className="mt-2 text-white"
                style={{ color: "white" }}
              >
                Q3 2025
              </figcaption>
            </figure>
            
            <figure className="flex flex-col items-center text-center">
              <a href="">
                <img
                  src={deepidv}
                  alt="DeepIDV Logo"
                  height={140}
                  className="block mx-auto"
                />
              </a>
              <figcaption
                className="mt-2 text-white"
                style={{ color: "white" }}
              >
                Q3 2025
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center text-center">
              <a href="">
                <img
                  src={lendwire}
                  alt="Lendwire Logo"
                  height={140}
                  className="block mx-auto"
                />
              </a>
              <figcaption
                className="mt-2 text-white"
                style={{ color: "white" }}
              >
                Q3 2026
              </figcaption>
            </figure>
            <figure className="flex flex-col items-center text-center">
              <a href="">
                <img
                  src={BLogo}
                  alt="Blitz Logo"
                  height={140}
                  className="block mx-auto"
                />
              </a>
              <figcaption
                className="mt-2 text-white"
                style={{ color: "white" }}
              >
                Q3 2026
              </figcaption>
            </figure>
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
            backgroundColor: "#1a1a1a",
            scrollSnapAlign: "start",
            padding: "2rem 0",
          }}
        >
          <div
            className="header"
            style={{
              fontSize: "3rem",
              color: "white",
              zIndex: 2,
              textAlign: "center", // Ensure the header text is centered
              marginBottom: "2rem", // Space between the header and the carousel
            }}
          >
            Our Team
          </div>
          <div
            className="cards"
            style={{
              display: "flex",
              justifyContent: "center", // Center the carousel horizontally
              alignItems: "center", // Center the carousel vertically if necessary
              width: "100%", // Ensure full width
              height: "auto", // Let the carousel take its height naturally
              overflow: "hidden",
            }}
          >
            <div className="carousel-wrapper">
              <ResponsiveCards />
            </div>
          </div>
        </div>

        {/* CAREER SECTION */}
        <div
          ref={careerRef}
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#262626",
            scrollSnapAlign: "start",
            padding: "2rem 0",
          }}
        >
          <div
            style={{
              fontSize: "3rem",
              color: "white",
              zIndex: 2,
              textAlign: "center",
              // marginBottom: "2rem",
            }}
          >
            Careers
          </div>

          <CareerSection />
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
            backgroundColor: "#D72538",
            scrollSnapAlign: "start",
          }}
        >
          <div
            className="header"
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
            background:
              "linear-gradient(to right,rgb(8, 89, 177),rgb(10, 85, 165))",
            scrollSnapAlign: "start",
            padding: "2rem",
          }}
        >
          <h2
            className="header"
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
            className="header"
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
              sitekey="6LdtzwIrAAAAAMccueLhdfiWn6nwi2d2UTDq18uJ"
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
            >
              Send Message
            </button>
          </form>
        </div>

        {/* PAGE INDICATOR */}
        <PageIndicator currentPage={currentPageRef.current} totalPages={6} />
      </main>
    </>
  );
}

export default Home;
