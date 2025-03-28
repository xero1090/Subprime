import { FaArrowRight } from "react-icons/fa";
import "../TeamCarousel/TeamCarousel.css";
import { useNavigate } from "react-router-dom";

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

const colors = ["#FF5733", "#33A1FF", "#28A745", "#D72638"]; // Example colors

const DesktopCareer = () => {
const navigate = useNavigate();
  return (
    <div className="career-grid">
      {careers.map((career, index) => (
        <div key={career.name} className="team-card">
          <div className="team-header" style={{ background: colors[index % colors.length] }}>
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
            <FaArrowRight style={{ color: colors[index % colors.length] }} />
          </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesktopCareer;
