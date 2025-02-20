  import { useState } from "react";
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";
  import { FaLinkedin } from "react-icons/fa";
  import "./TeamCarousel.css";

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

  const settings = {
    dots: true,
    infinite: true,
    speed: 250,
    slidesToShow: 3,  // Keep only 3 visible
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    centerPadding: "0px", // Adjusted for alignment without showing extra cards
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: "50px" } },
      { breakpoint: 768, settings: { slidesToShow: 1, centerPadding: "20px" } },
    ],
  };
  

  const TeamCarousel = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleExpand = (index: number) => {
      setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
      <div style={{ width: "85%", margin: "auto", padding: "0rem 0" }}>
        <Slider {...settings} >
          {teamMembers.map((member, index) => (
            <div key={member.name}>
              <div
                data-hover
                onClick={() => toggleExpand(index)}
                className={member.customClass}
                style={{
                  //backgroundColor: expandedIndex === index ? "#4A5568" : "#2D3748",
                  color: "white",
                  padding: "2rem",
                  borderRadius: "15px",
                  boxShadow: "0px 3px 5px rgba(0,0,0,0.3)",
                  cursor: "pointer",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  minHeight: expandedIndex === index ? "300px" : "200px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  gap: "0rem",
                 }}
              >
                <div>
                  <h3
                    style={{
                      marginBottom: "0.5rem",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "#FFFFFF",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p style={{ fontStyle: "italic", color: "#CBD5E0", marginBottom: "1rem" }}>
                    {member.role}
                  </p>

                  {expandedIndex === index && (
                    <p
                      style={{
                        fontSize: "1rem",
                        lineHeight: "1.6",
                        color: "#E2E8F0",
                        marginTop: "1rem",
                      }}
                    >
                      {member.bio}
                    </p>
                  )}
                </div>

                <a
                  href={member.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.5rem",
                    color: "#0A66C2",
                    textDecoration: "none",
                    padding: "0.3rem",
                    backgroundColor: "white",
                    borderRadius: "50%",
                    boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
                    marginTop: "1rem",
                    width: "40px",
                    height: "40px",
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


