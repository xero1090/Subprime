import { useState } from "react";
import { FaLinkedin, FaSyncAlt } from "react-icons/fa";
import "./TeamCarousel.css";

<<<<<<< HEAD
  const teamMembers = [
    {
      name: "Shawn-Marc Melo",
      role: "Founder & CEO",
      bio: "Shawn-Marc, Founder & CEO of Subprime Financial Technology Ltd. and Lendwire Inc., is a seasoned mortgage expert with over $250 million in personally funded deals. With 15+ years of experience in door-to-door sales, cold calling, sales management, and serving as Director of Sales at a top firm, he brings unmatched expertise, leadership, and passion to the mortgage industry.",
      url: "https://www.linkedin.com/in/smarcmelo/",
      customClass: "shawn-marc-card",  // Unique class for Shawn
    },
    {
      name: "Gursahib Preet Singh",
      role: "Senior Web Developer",
      bio: "Gursahib Singh, Senior Web Developer at Subprime Financial Technology Ltd., Bright Brokers, and Blitz, is a driving force behind innovative digital solutions. With a Bachelor of Engineering from Manav Rachna and a Post-Graduate certification in Web Development from Conestoga, he thrives in fast-paced tech environments.",
      url: "https://ca.linkedin.com/in/gursahib-preet-singh-66a11a168",
      customClass: "gursahib-card",  // Unique class for Gursahib
    },
    {
      name: "Ofir David",
      role: "Full-Stack Developer",
      bio: "With a Bachelor’s in Computer Science from Sheridan College, Ofir David brings exceptional technical expertise to Subprime Financial Ltd., driving its FinTech product development. His deep curiosity about seamlessly linking client-facing products with powerful backend systems accelerates Subprime’s technological growth.",
      url: "https://www.linkedin.com/in/ofir-d/",
      customClass: "ofir-card",  // Unique class for Ofir
    },
    {
      name: "Joey Chan",
      role: "UI/UX Developer",
      bio: "Joey Chan is a graduate of the Computer Programming and Analysis Advanced Diploma program at Durham College. He specializes in designing and developing sleek, modern, and user-friendly interfaces for Lendwire's applications, focusing on enhancing user experiences.",
      url: "https://www.linkedin.com/in/joeychancpa/",
      customClass: "joey-card",  // Unique class for Joey
    },
    {
      name: "Kevin Tran",
      role: "UI/UX Developer",
      bio: "A passionate UI/UX Developer with a background in Computer Science at Sheridan College, He specializes in crafting unique, visually captivating websites that blend functionality with artistic flair. His approach is rooted in a deep appreciation for user-centered experiences.",
      url: "https://ca.linkedin.com/in/kevintran1090",
      customClass: "kevin-card",  // Unique class for Kevin
    },
    {
      name: "Archit Misra",
      role: "Senior Marketing Manager",
      bio: "A results-driven marketing professional with an MBA in Marketing, specializing in digital strategy, brand management, and social media growth. Passionate about leveraging data-driven insights to optimize campaigns and enhance customer engagement. Combines creativity and analytics to drive impactful marketing solutions, business growth, and brand success.",
      url: "https://www.linkedin.com/in/architmisra/",
      customClass: "archit-card",  // Unique class for Archit
    },
    {
      name: "Omar Tahir",
      role: "Fullstack Developer",
      bio: "Several years of experience working on large scale SAAS products — Passionate about bringing new ideas to life — Someday, he'd like to own a farm",
      url: "https://www.linkedin.com/in/omar-tahir-478488178",
      customClass: "omar-card",
    }
  ];
=======
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
>>>>>>> Corpo_cards

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
    role: "Full-stack Developer",
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
