import { useState, useRef } from "react";
import { FaLinkedin, FaSyncAlt } from "react-icons/fa";
import Slider from "react-slick";
import { teamMembers, colors } from "../TeamCarousel/TeamCarousel"; // Import data
import "../TeamCarousel/TeamCarousel.css";


const MobileCarousel = () => {
    const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
    const gridRef = useRef<HTMLDivElement>(null);
  
    const toggleFlip = (index: number) => {
      setFlippedIndex(flippedIndex === index ? null : index);
    };
  
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,  // Add arrows if you need
    };
  
    return (
      <div className="team-grid" ref={gridRef}>
        <Slider {...settings}>
          {teamMembers.map((member, index) => (
            <div 
              key={member.name} 
              className={`team-card ${flippedIndex === index ? "flipped" : ""}`} 
              onClick={() => toggleFlip(index)}
              data-hover
            >
              <div className="team-card-inner">
                <div className="team-card-front">
                  <div
                    className="team-header"
                    style={{ background: colors[index % colors.length] }}
                  >
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                  </div>
                  <div className="flip-icon">
                    <FaSyncAlt />
                  </div>
                  <div className="team-footer">
                    <a href={member.url} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                      <FaLinkedin 
                      style={{ color: colors[index % colors.length] }}
                      />
                    </a>
                  </div>
                </div>
                <div className="team-card-back">
                  <div className="flip-icon">
                      <FaSyncAlt />
                  </div>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  };
  
  export default MobileCarousel;
  