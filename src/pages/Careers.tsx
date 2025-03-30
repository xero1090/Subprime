import './Careers.css';
import PageIndicator from "../components/PageIndicator/PageIndicator";
import {useRef, useState} from "react";
import { Link } from 'react-router-dom';

const Careers = () => {
const [currentPage, setCurrentPage] = useState(0);
const currentPageRef = useRef<number>(0);

const handleScroll = (e: any) => {
    const scrollTop = e.target.scrollTop;
    const newPage = Math.round(scrollTop / window.innerHeight);
  
    if (currentPageRef.current !== newPage) {
      currentPageRef.current = newPage;
      setCurrentPage(newPage);
    }
  };
  return (
    <div
      className={`careers-page scrollbar-section-${currentPage}`}
      style={{
        height: '100vh',
        overflowY: 'scroll',
        overflowX: 'hidden',
        scrollSnapType: 'y mandatory',
      }}
      onScroll={handleScroll}
    >
      {/* HERO SECTION */}
      <section
        className="hero-section"
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(to bottom, #000000, #1a1a1a)', // Same background as Home
          scrollSnapAlign: 'start',
          position: 'relative',
        }}
      >
      {/* Combined Hero Container */}
      <div className="hero-container">
        {/* Running Text Box */}
        <div className="running-text-box">
          <div className="running-text">
            Innovating Finance for the Future 🚀 | Join Our Team Today! 🌟 | Empowering Careers in FinTech 💡
          </div>
        </div>

        {/* Hero Content Box */}
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
            <button className="cta-button">See Open Roles</button>
          </div>
        </div>
      </div>
    
      <Link
        to="/"
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          backgroundColor: "#50cffa",
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          fontSize: '16px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'background 0.3s ease',
        }}
      >
        Home
      </Link>
    </section>
    
    {/* WHY MAKE FINTECH BETTER FOR ALL */}
    <section
    className="fintech-mission"
    style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#232323',
        color: 'white',
        scrollSnapAlign: 'start',
        padding: '20px', // Adds space around the content
        textAlign: 'center',
    }}
    >
    <div className="gradient-window">  
      <div className="fintech-info" style={{
          maxWidth: '900px', // Prevents text from stretching too wide on larger screens
          width: '100%',
          padding: '20px',
      }}>
          <h2 style={{
          fontSize: '5rem', // Large font for the heading
          fontWeight: 'bold',
          lineHeight: '1.2',
          textTransform: 'uppercase',
          letterSpacing: '2px',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)', // Adds depth to the text
          marginBottom: '20px',
          wordBreak: 'break-word', // Prevents text from overflowing
          color: 'Black',
          marginTop: '0', // Remove unnecessary top margin
          }}>
          <span>Make</span>
          <span>Fintech</span>
          <span>Better</span>
          <span>for</span>
          <span>All.</span>
          </h2>
        </div>
      </div>
    </section>


      {/* COMPANY OVERVIEW */}
      <section
          className="company-overview"
          style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#1a1a1a',
              color: 'white',
              scrollSnapAlign: 'start',
              padding: '20px',
              textAlign: 'center',
          }}
        >
            <div className="company-info" style={{
                maxWidth: '900px',
                width: '100%',
                padding: '20px',
            }}>
                {/* Smaller "What we do" header */}
                <h3 style={{
                    fontSize: '2rem', // Smaller header size
                    fontWeight: 'bold',
                    color: '#50cffa', // Color to make it stand out
                    marginBottom: '10px', // Space between the headers    
                    textAlign: "left",
                }}>
                    What We Do
                </h3>
                
                {/* Main Fintech header */}
                <h2 style={{
                    fontSize: '3rem', // Reduced font size
                    fontWeight: 'bold',
                    lineHeight: '1.2',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
                    marginBottom: '20px',
                    wordBreak: 'break-word',
                    color: 'white',
                    marginTop: '0',
                }}>
                    Innovative Solutions in Fintech
                </h2>
                
                {/* Paragraph Text */}
                <p style={{
                    fontSize: '1.2rem', // Smaller font size
                    lineHeight: '1.8',
                    letterSpacing: '0.5px',
                    color: '#ddd', // Light color for readability
                    margin: '0',
                    maxWidth: '700px', // Prevents text from stretching too wide
                }}>
                    We are dedicated to bridging the gap in financial technology, creating solutions that empower businesses and individuals alike. Our goal is to provide accessible and effective financial tools for everyone.
                </p>
                {/* Paragraph Text */}
                <p style={{
                    fontSize: '1.2rem', // Smaller font size
                    lineHeight: '1.8',
                    letterSpacing: '0.5px',
                    color: '#ddd', // Light color for readability
                    marginTop: 'auto',
                    maxWidth: '700px', // Prevents text from stretching too wide
                }}>
                  We believe that financial technology should be accessible, transparent, and effective for everyone. Our mission is to create solutions that bridge the gap, empowering individuals and businesses globally.
                </p>
            </div>
        </section>

        {/* CALL TO ACTION */}
        <section
          className="cta-section"
          style={{
            height: '100vh', // Full viewport height
            display: 'flex',
            flexDirection: 'column', // Stacks the sections vertically
            scrollSnapAlign: 'start',
            justifyContent: 'center', // Centers content vertically
            alignItems: 'center', // Centers content horizontally
          }}
        >
          {/* Upper Half (Black Background) */}
          <div style={{
            backgroundColor: 'black',
            color: 'white',
            width: '90%', // Full width of the container
            height: '50%', // Takes up the top half of the section
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            textAlign: 'left',
            padding: '40px',
          }}>
            {/* Smaller Header Above Main Header */}
            <h3 style={{
              fontSize: '1.5rem',
              color: '#888',
              marginBottom: '10px',
            }}>
              Where we hire
            </h3>

            {/* Two Columns */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}>
              {/* Left Column (Header) */}
              <div style={{
                flex: '1', // Ensures the header takes up its own space
                paddingRight: '20px', // Space between columns
              }}>
                <h2 style={{
                  fontSize: '2.5rem',
                  marginBottom: '20px',
                }}>
                  Empowering Fintech Innovation
                </h2>
              </div>

              {/* Right Column (Text Paragraph) */}
              <div style={{
                flex: '2', // Takes up more space than the header
              }}>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  letterSpacing: '0.5px',
                }}>
                  We are driving change in the financial industry through innovative technologies and transformative solutions that enhance the fintech ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Lower Half (White Background) */}
          <div style={{
            backgroundColor: 'white',
            color: 'black',
            width: '90%', // Full width of the container
            height: '50%', // Takes up the bottom half of the section
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            textAlign: 'left',
            padding: '40px',
          }}>
            {/* Smaller Header Above Main Header */}
            <h3 style={{
              fontSize: '1.5rem',
              color: '#888',
              marginBottom: '10px',
            }}>
              Who we hire
            </h3>

            {/* Two Columns */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
            }}>
              {/* Left Column (Header) */}
              <div style={{
                flex: '1', // Ensures the header takes up its own space
                paddingRight: '20px', // Space between columns
              }}>
                <h4 style={{
                  fontSize: '2.5rem',
                  marginBottom: '20px',
                }}>
                  Empowering Individuals & Businesses
                </h4>
              </div>

              {/* Right Column (Text Paragraph) */}
              <div style={{
                flex: '2', // Takes up more space than the header
              }}>
                <p style={{
                  fontSize: '1.2rem',
                  lineHeight: '1.8',
                  letterSpacing: '0.5px',
                }}>
                  We believe in accessible, transparent, and effective financial technology that bridges gaps and empowers individuals and businesses to thrive.
                </p>
              </div>
            </div>
          </div>
        </section>



        {/* JOB LISTINGS */}
        <section
        className="job-listings"
        style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#333333',
            scrollSnapAlign: 'start',
            padding: '50px 20px',
        }}
        >
        <h2 className="section-title" style={{ color: 'white', fontSize: '2.5rem', marginBottom: '2rem' }}>Current Openings</h2>
        <div className="job-list" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
            gap: '20px',
            maxWidth: '1200px',
            margin: '0 auto',
            justifyItems: 'center',
        }}>
            <div className="job-item" style={{
            backgroundColor: '#444444',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease',
            }}>
            <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '10px' }}>Frontend Developer</h3>
            <p style={{ color: '#bbb', marginBottom: '15px' }}>Location: Remote</p>
            <button className="apply-button" style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
            }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
                Apply Now
            </button>
            </div>

            <div className="job-item" style={{
            backgroundColor: '#444444',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease',
            }}>
            <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '10px' }}>Product Manager</h3>
            <p style={{ color: '#bbb', marginBottom: '15px' }}>Location: New York, NY</p>
            <button className="apply-button" style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
            }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
                Apply Now
            </button>
            </div>

            <div className="job-item" style={{
            backgroundColor: '#444444',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease',
            }}>
            <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '10px' }}>Sales Manager</h3>
            <p style={{ color: '#bbb', marginBottom: '15px' }}>Location: Whitby, ON</p>
            <button className="apply-button" style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
            }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
                Apply Now
            </button>
            </div>

            <div className="job-item" style={{
            backgroundColor: '#444444',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease',
            }}>
            <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '10px' }}>Web Developer</h3>
            <p style={{ color: '#bbb', marginBottom: '15px' }}>Location: Whitby, ON</p>
            <button className="apply-button" style={{
                padding: '10px 20px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
            }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'}>
                Apply Now
            </button>
            </div>

            {/* Add more job items if needed */}
        </div>
        </section>
      <PageIndicator currentPage={currentPageRef.current} totalPages={5} />
    </div>
  );
};

export default Careers;
