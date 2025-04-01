import { useState, useRef } from "react";
import Slider from "react-slick";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../TeamCarousel/TeamCarousel.css"; // Use existing styles

const careers = [
  {
    name: "Engineering & Data",
    roles: [
      "Software Engineering",
      "Security Engineering",
      "Business Analytics",
      "Data Engineering",
    ],
  },
  {
    name: "UX",
    roles: ["Content Design", "Industrial Design", "UX Design", "UX Management"],
  },
  {
    name: "Product",
    roles: ["Product Management", "Technical Program Management"],
  },
  {
    name: "Sales",
    roles: ["Account Executive", "Sales Operations", "Sales Acquisition"],
  },
];

const colors = [
  "linear-gradient(135deg, #3700B3 0%, #03DAC5 50%, #FFEB3B 100%)",
  "linear-gradient(135deg, #1A237E 0%, #2196F3 50%, #FFEB3B 100%)",
  "linear-gradient(135deg, #03DAC5 0%, #00E676 50%, #FF4081 100%)",
  "linear-gradient(135deg, #00BCD4 0%, #8E24AA 50%, #FF4081 100%)",
];

const getSecondColorFromGradient = (gradient: string): string => {
  const match = gradient.match(/#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})/g);
  return match && match[1] ? match[1] : "#000000"; // Extract second color or default to black
};

const CareerCarousel = () => {
  const navigate = useNavigate();
  const gridRef = useRef<HTMLDivElement>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="career-carousel" ref={gridRef}>
      <Slider {...settings}>
        {careers.map((career, index) => {
          const gradient = colors[index % colors.length];
          const arrowColor = getSecondColorFromGradient(gradient);

          return (
            <div key={career.name} className="career-card">
              <div className="team-header" style={{ background: gradient }}>
                <h3 className="career-name">{career.name}</h3>
                <div className="role-badges">
                  {career.roles.map((role, i) => (
                    <span key={i} className="badge">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
              <div className="career-footer">
                <a className="arrow-link" onClick={() => navigate("/careers")}>
                  <FaArrowRight style={{ color: arrowColor }} />
                </a>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default CareerCarousel;
