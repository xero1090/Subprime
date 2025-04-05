// src/components/CareerCards/careerCard.tsx

import React from "react";
import { Link } from "react-router-dom";
import "./careerCard.css";

interface CareerCardProps {
  title: string;
  description: string;
  roles: string[];
}

const CareerCard: React.FC<CareerCardProps> = ({
  title,
  description,
  roles,
}) => {
  return (
    <div className="career-card">
      {/* Gradient Header */}
      <div className="career-card-header">
        <h2 className="career-card-title">{title}</h2>
      </div>

      {/* Card Body */}
      <div className="career-card-body">
        <p className="career-card-description">{description}</p>

        <h3 className="career-card-roles-title">Types of Roles:</h3>
        <div className="career-card-roles">
          {roles.map((role, index) => (
            <span key={index} className="career-card-role">
              {role}
            </span>
          ))}
        </div>

        {/* Explore Button */}
        <Link to="/careers" className="career-card-explore">
          Explore <span>&rarr;</span>
        </Link>
      </div>
    </div>
  );
};

export default CareerCard;
