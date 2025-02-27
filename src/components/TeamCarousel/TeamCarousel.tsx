import { useState } from "react";
import { FaLinkedin, FaSyncAlt } from "react-icons/fa";
import "./TeamCarousel.css";

const colors = [
  "#FF6B6B", // Vibrant Red
  "#4D96FF", // Cool Blue
  "#a009ed", // Deep Purple
  "#6BCB77", // Soft Green
  "#36C5F0", // Bold Pink
  "#FF6AC1", // Cyan Blue
  "#F4A261", // Warm Orange
  "#A29BFE", // Soft Lavender
  "#2EC4B6", // Teal Green
  "#D72638", // Deep Red
];

const teamMembers = [
  {
    name: "Shawn-Marc Melo",
    role: "Founder & CEO",
    bio: "Shawn-Marc, Founder & CEO of Subprime Financial Technology Ltd. and Lendwire Inc., is a seasoned mortgage expert with over $250 million in personally funded deals.",
    url: "https://www.linkedin.com/in/smarcmelo/",
  },
  {
    name: "Gursahib Preet Singh",
    role: "Senior Web Developer",
    bio: "Gursahib Singh, Senior Web Developer at Subprime Financial Technology Ltd., Bright Brokers, and Blitz, is a driving force behind innovative digital solutions.",
    url: "https://ca.linkedin.com/in/gursahib-preet-singh-66a11a168",
  },
  {
    name: "Ofir David",
    role: "Full-Stack Developer",
    bio: "With a Bachelor’s in Computer Science from Sheridan College, Ofir David brings exceptional technical expertise to Subprime Financial Ltd., driving its FinTech product development.",
    url: "https://www.linkedin.com/in/ofir-d/",
  },
  {
    name: "Joey Chan",
    role: "UI/UX Developer",
    bio: "Joey Chan specializes in designing and developing sleek, modern, and user-friendly interfaces for Lendwire's applications.",
    url: "https://www.linkedin.com/in/joeychancpa/",
  },
  {
    name: "Kevin Tran",
    role: "UI/UX Developer",
    bio: "A passionate UI/UX Developer with a background in Computer Science, Kevin specializes in crafting unique, visually captivating websites.",
    url: "https://ca.linkedin.com/in/kevintran1090",
  },
  {
    name: "Archit Misra",
    role: "Senior Marketing Manager",
    bio: "A results-driven marketing professional with an MBA in Marketing, specializing in digital strategy, brand management, and social media growth.",
    url: "https://www.linkedin.com/in/architmisra/",
  },
  {
    name: "Omar Tahir",
    role: "Full-Stack Developer",
    bio: "Several years of experience working on large scale SAAS products — Passionate about bringing new ideas to life — Someday, he'd like to own a farm",
    url: "https://www.linkedin.com/in/omar-tahir-478488178",
    customClass: "omar-card",
  }
];

const TeamGrid = () => {
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
          onClick={() => toggleFlip(index)}
          data-hover
        >
          <div className="team-card-inner">
            {/* Front of the card */}
            <div className="team-card-front">
              <div
                className="team-header"
                style={{ background: colors[index % colors.length] }} // Assign unique colors
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


            {/* Back of the card */}
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

export default TeamGrid;
