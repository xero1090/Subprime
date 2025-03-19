import { FaLinkedin, FaSyncAlt } from "react-icons/fa";
import { teamMembers, colors } from "../TeamCarousel/TeamCarousel"; // Import data
import "../TeamCarousel/TeamCarousel.css";
import { useState } from "react";

const DesktopCarousel = () => {
    const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <div className="team-grid">
      {teamMembers.map((member, index) => (
        <div 
          key={member.name} 
          className={`team-card ${flippedIndex === index ? "flipped" : ""}`} 
          onClick={() => toggleFlip(index)}  // Toggle flip on click
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
    </div>
  );
};

  
  export default DesktopCarousel;
  