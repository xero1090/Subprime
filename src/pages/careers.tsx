import './Careers.css';
import SmokeEffect from '../components/SmokeEffect/SmokeEffect';  // Import the SmokeEffect component
import PageIndicator from "../components/PageIndicator/PageIndicator";
import {useRef, useState} from "react";
import { Link } from 'react-router-dom';

const Careers = () => {
const [currentPage, setCurrentPage] = useState(0);
const currentPageRef = useRef<number>(0);
// Scroll handler to update current page
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
        <SmokeEffect/>
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Join Our Team at <span style={{color: `rgba(173, 216, 230,1)`}}>SUBPRIME</span></h1>
            <p className="hero-subtitle">
              We're a passionate team working on [Your Industry]. Explore our job openings and join us on this journey.
            </p>
            <button className="cta-button">See Open Roles</button>
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
        color: 'white',
        marginTop: '0', // Remove unnecessary top margin
        }}>
        Make Fintech Better for All
        </h2>
        <p style={{
        fontSize: '1.5rem', // Larger font size for the paragraph
        lineHeight: '1.8',
        letterSpacing: '0.5px',
        color: '#ddd', // Slightly lighter color for readability
        margin: '0 auto',
        maxWidth: '700px', // Limit width for readability on large screens
        }}>
        We believe that financial technology should be accessible, transparent, and effective for everyone. Our mission is to create solutions that bridge the gap, empowering individuals and businesses globally.
        </p>
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
        padding: '20px', // Adds space around the content
        textAlign: 'center',
    }}
    >
    <div className="company-info" style={{
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
        color: 'white',
        marginTop: '0', // Remove unnecessary top margin
        }}>
        Why Work With Us?
        </h2>
        <p style={{
        fontSize: '1.5rem', // Larger font size for the paragraph
        lineHeight: '1.8',
        letterSpacing: '0.5px',
        color: '#ddd', // Slightly lighter color for readability
        margin: '0 auto',
        maxWidth: '700px', // Limit width for readability on large screens
        }}>
        At <span style={{ color: 'rgba(173, 216, 230, 1)' }}>SUBPRIME</span>, we focus on fostering a dynamic and innovative work environment where every team member thrives. [Insert your company’s mission statement and values here].
        </p>
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

        {/* CALL TO ACTION */}
        <section
        className="cta-section"
        style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'linear-gradient(to right, #007bff, #0056b3)',
            scrollSnapAlign: 'start',
            padding: '50px 20px',
            textAlign: 'center',
        }}
        >
        <div>
            <h2 className="cta-title" style={{
            fontSize: '3rem',
            color: 'white',
            marginBottom: '30px',
            }}>
            Ready to Make an Impact?
            </h2>
            <button className="cta-button" style={{
            padding: '12px 30px',
            fontSize: '1.2rem',
            color: 'white',
            backgroundColor: '#0056b3',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
            }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#003f7f'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}>
            Join Our Team
            </button>
        </div>
        </section>

        {/* FOOTER */}
        <footer
        className="footer"
        style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#262626',
            scrollSnapAlign: 'start',
            padding: '50px 20px',
            textAlign: 'center',
        }}
        >
        <p style={{ color: '#ccc', fontSize: '1.2rem', marginBottom: '20px' }}>
            Have questions? Contact us at{' '}
            <a href="mailto:careers@yourcompany.com" style={{ color: '#007bff', textDecoration: 'none' }}>
            careers@yourcompany.com
            </a>
        </p>
        <div className="social-links" style={{ display: 'flex', gap: '20px' }}>
            <a href="https://www.linkedin.com/company/yourcompany" style={{
            color: '#ccc',
            fontSize: '1.2rem',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            }} onMouseEnter={(e) => e.currentTarget.style.color = '#007bff'} onMouseLeave={(e) => e.currentTarget.style.color = '#ccc'}>
            LinkedIn
            </a>
            <a href="https://twitter.com/yourcompany" style={{
            color: '#ccc',
            fontSize: '1.2rem',
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            }} onMouseEnter={(e) => e.currentTarget.style.color = '#007bff'} onMouseLeave={(e) => e.currentTarget.style.color = '#ccc'}>
            Twitter
            </a>
            {/* Add more social links as necessary */}
        </div>
        </footer>
      <PageIndicator currentPage={currentPageRef.current} totalPages={6} />
    </div>
  );
};

export default Careers;
