import { FaLinkedin, FaSyncAlt } from "react-icons/fa";
import { teamMembers, colors } from "../TeamCarousel/TeamCarousel";
import "../TeamCarousel/TeamCarousel.css";
import { useState } from "react";

const ITEMS_PER_PAGE = 8;

const DesktopCarousel = () => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(teamMembers.length / ITEMS_PER_PAGE);

  const toggleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        <div
          className="team-grid-wrapper"
          style={{ transform: `translateX(-${currentPage * 100}%)` }}
        >
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <div key={pageIndex} className="team-grid">
              {teamMembers
                .slice(pageIndex * ITEMS_PER_PAGE, (pageIndex + 1) * ITEMS_PER_PAGE)
                .map((member) => {
                  const originalIndex = teamMembers.findIndex((m) => m.name === member.name); // Find original index
                  return (
                    <div
                      key={member.name}
                      className={`team-card ${flippedIndex === originalIndex ? "flipped" : ""}`}
                      onClick={() => toggleFlip(originalIndex)}
                    >
                      <div className="team-card-inner">
                        <div className="team-card-front">
                          <div className="team-header" style={{ background: colors[originalIndex % colors.length] }}>
                            <h3 className="team-name">{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                          </div>
                          <div className="flip-icon">
                            <FaSyncAlt />
                          </div>
                          <div className="team-footer">
                            <a href={member.url} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                              <FaLinkedin style={{ color: colors[originalIndex % colors.length] }} />
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
                  );
                })}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="pagination-dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentPage ? "active" : ""}`}
            onClick={() => handlePageChange(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default DesktopCarousel;
