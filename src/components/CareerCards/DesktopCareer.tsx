import { FaArrowRight } from "react-icons/fa";
import "../TeamCarousel/TeamCarousel.css";
import { useNavigate } from "react-router-dom";

const colors = [
  "linear-gradient(135deg, #B0B0B0 0%, #8C8C8C 50%, #6E6E6E 100%)", // Dark Silver variant 1
  "linear-gradient(135deg, #AFAFAF 0%, #888888 50%, #666666 100%)", // Dark Silver variant 2
  "linear-gradient(135deg, #B4B4B4 0%, #909090 50%, #707070 100%)", // Dark Silver variant 3
  "linear-gradient(135deg, #AAAAAA 0%, #888888 50%, #5C5C5C 100%)", // Dark Silver variant 4
];

const getSecondColorFromGradient = (gradient: string): string => {
  const match = gradient.match(/#([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3})/g);
  return match && match[1] ? match[1] : "#000000"; // Return second color or black if not found
};


const careers = [
  {
    name: "Engineering & Data",
    roles: [
      // "Software Engineering",
      // "Security Engineering",
      // "Business Analytics",
      // "Data Engineering",
    ],
    arrowText: "Explore Engineering & Data"
  },
  {
    name: "UX",
    roles: [],
    arrowText: "Discover UX"
  },
  {
    name: "Product",
    roles: [],
    arrowText: "View Product Careers"
  },
  {
    name: "Sales",
    roles: [],
    arrowText: "Join Sales Team"
  },
];

const DesktopCareer = () => {
  const navigate = useNavigate();
  return (
    <div className="career-grid">
      {careers.map((career, index) => {
        const gradient = colors[index % colors.length];
        const arrowColor = getSecondColorFromGradient(gradient); 
        return (
          <div key={career.name} className="team-card">
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
              <a 
                className="arrow-link" 
                onClick={() => navigate("/careers")}
              >
                <FaArrowRight style={{ color: arrowColor }} />
                <p>{career.arrowText}</p>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DesktopCareer;
