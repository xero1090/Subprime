import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Shawn-Marc Melo",
    role: "Founder & CEO",
    bio: "Shawn-Marc, Founder & CEO of Subprime Financial Technology Ltd. and Lendwire Inc., is a seasoned mortgage expert with over $250 million in personally funded deals. With 15+ years of experience in door-to-door sales, cold calling, sales management, and serving as Director of Sales at a top firm, he brings unmatched expertise, leadership, and passion to the mortgage industry.",
    url: "https://www.linkedin.com/in/smarcmelo/",
  },
  {
    name: "Gursahib Preet Singh",
    role: "Senior Web Developer",
    bio: "Gursahib Singh, Senior Web Developer at Subprime Financial Technology Ltd., Bright Brokers, and Blitz, is a driving force behind innovative digital solutions. With a Bachelor of Engineering from Manav Rachna and a Post-Graduate certification in Web Development from Conestoga, he thrives in fast-paced tech environments.",
    url: "https://ca.linkedin.com/in/gursahib-preet-singh-66a11a168",
  },
  {
    name: "Ofir David",
    role: "Full-Stack Developer",
    bio: "With a Bachelor’s in Computer Science from Sheridan College, Ofir David brings exceptional technical expertise to Subprime Financial Ltd., driving its FinTech product development. His deep curiosity about seamlessly linking client-facing products with powerful backend systems accelerates Subprime’s technological growth.",
    url: "https://www.linkedin.com/in/ofir-d/",
  },
  {
    name: "Joey Chan",
    role: "UI/UX Developer",
    bio: "Joey Chan is a graduate of the Computer Programming and Analysis Advanced Diploma program at Durham College. He specializes in designing and developing sleek, modern, and user-friendly interfaces for Lendwire's applications, focusing on enhancing user experiences.",
    url: "https://www.linkedin.com/in/joeychancpa/",
  },
  {
    name: "Kevin Tran",
    role: "UI/UX Developer",
    bio: "A passionate UI/UX Developer with a background in Mobile Computing at Sheridan College, He specializes in crafting unique, visually captivating websites that blend functionality with artistic flair. His approach is rooted in a deep appreciation for user-centered experiences.",
    url: "https://ca.linkedin.com/in/kevintran1090",
  },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3, // Show 3 cards at a time
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 2 } },
    { breakpoint: 768, settings: { slidesToShow: 1 } },
  ],
};

const TeamCarousel = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div style={{ width: "80%", margin: "auto", padding: "3rem 0" }}>
      <h2 style={{ textAlign: "center", fontSize: "2.5rem", color: "white", marginBottom: "2rem" }}>
        Our Team
      </h2>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={member.name} style={{ padding: "1rem" }}>
            <div
              onClick={() => toggleExpand(index)}
              style={{
                backgroundColor: expandedIndex === index ? "#222" : "#333",
                color: "white",
                padding: "1.5rem",
                borderRadius: "10px",
                boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                cursor: "pointer",
                textAlign: "center",
                transition: "all 0.3s ease",
                minHeight: expandedIndex === index ? "250px" : "150px",
                overflow: "hidden",
              }}
            >
              <h3 style={{ marginBottom: "0.5rem" }}>{member.name}</h3>
              <p style={{ fontStyle: "italic", color: "#ddd", marginBottom: "1rem" }}>{member.role}</p>
              
              {expandedIndex === index && (
                <p style={{ fontSize: "0.9rem", lineHeight: "1.4", color: "#bbb" }}>
                  {member.bio}
                </p>
              )}

              <a
                href={member.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  marginTop: "1rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "2rem",
                  color: "#0A66C2",
                  textDecoration: "none",
                  fontWeight: "bold",
                  padding: "0.25rem ",
                  backgroundColor: "white",
                  borderRadius: "5px",
                }}
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamCarousel;
