// src/components/CareerCards/careerSection.tsx

import React from "react";
import "./careerSection.css";  // Import the updated CSS
import CareerCard from "./careerCard";
import { careerData } from "../../data/careerData";

const CareerSection: React.FC = () => {
  return (
    <section className="career-section">
      <div className="career-grid">
        {careerData.map((career) => (
          <CareerCard
            key={career.title}
            title={career.title}
            description={career.description}
            roles={career.roles}
          />
        ))}
      </div>
    </section>
  );
};

export default CareerSection;
