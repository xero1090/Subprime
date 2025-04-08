import "./Careers.css";
import PageIndicator from "../components/PageIndicator/PageIndicator";
import CareerSection from "../components/CareerCards/careerSection";
import Dropdowns from "../components/Dropdown/dropdowns";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const Careers = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const currentPageRef = useRef<number>(0);
  const jobListingsRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = (e: any) => {
    const scrollTop = e.target.scrollTop;
    const newPage = Math.round(scrollTop / window.innerHeight);
    if (currentPageRef.current !== newPage) {
      currentPageRef.current = newPage;
      setCurrentPage(newPage);
    }
  };

  const scrollToJobListings = () => {
    jobListingsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className={`careers-page scrollbar-section-${currentPage}`}
      style={{
        height: "100vh",
        overflowY: "scroll",
        overflowX: "hidden",
        scrollSnapType: "y mandatory",
      }}
      onScroll={handleScroll}
    >
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="running-text-box">
            <div className="running-text">
              Innovating Finance for the Future 🚀 | Join Our Team Today! 🌟 | Empowering Careers in FinTech 💡
            </div>
          </div>

          <div className="hero-box">
            <h1 className="hero-title">Join Our Team!</h1>
            <p className="hero-subtitle">
              We're a passionate team working on creating innovative technologies to enhance products and services in the financial industry.
            </p>
            <p className="hero-subtitle">
              Explore our job openings and join us on this journey.
            </p>
            <div className="button-container">
              <button className="cta-button">Apply Now</button>
              <button className="cta-button" onClick={scrollToJobListings}>
                See Open Roles
              </button>
            </div>
          </div>
        </div>
        <Link
          to="/"
          className="home-link"
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
          Home
        </Link>
      </section>

      {/* MAKE FINTECH BETTER FOR ALL */}
      <section className="fintech-mission">
        <div className="gradient-window">
          <div className="fintech-info">
            <h2>
              <span>MAKE</span>
              <span>FINTECH</span>
              <span>BETTER</span>
              <span>FOR</span>
              <span>ALL.</span>
            </h2>
          </div>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="company-overview">
        <div className="company-info">
          <h3>What We Do</h3>
          <h2>Innovative Solutions in Fintech</h2>
          <p>
            We are dedicated to bridging the gap in financial technology, creating solutions that empower businesses and individuals alike. Our goal is to provide accessible and effective financial tools for everyone.
          </p>
          <p>
            We believe that financial technology should be accessible, transparent, and effective for everyone. Our mission is to create solutions that bridge the gap, empowering individuals and businesses globally.
          </p>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <div className="cta-upper">
          <h4>Where we hire</h4>
          <div className="cta-columns">
            <div className="cta-left">
              <h2>Empowering Fintech Innovation</h2>
            </div>
            <div className="cta-right">
              <p>
                We are driving change in the financial industry through innovative technologies and transformative solutions that enhance the fintech ecosystem.
              </p>
            </div>
          </div>
        </div>
        <div className="cta-lower">
          <h4>Who we hire</h4>
          <div className="cta-columns">
            <div className="cta-left">
              <h2>Empowering Individuals & Businesses</h2>
            </div>
            <div className="cta-right">
              <p>
                We believe in accessible, transparent, and effective financial technology that bridges gaps and empowers individuals and businesses to thrive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* JOB LISTINGS */}
      <section className="job-listings" ref={jobListingsRef}>
        <h2 className="section-title">Current Openings</h2>
        <div className="job-list">
          {/* Your job items here */}
        </div>

        <CareerSection />

        <Dropdowns />
    
      </section>

      <PageIndicator currentPage={currentPageRef.current} totalPages={5} />
    </div>
  );
};

export default Careers;
