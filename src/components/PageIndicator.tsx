import React from "react";

type PageIndicatorProps = {
  currentPage: number; // Current page index
  totalPages: number;  // Total number of pages
};

const PageIndicator: React.FC<PageIndicatorProps> = ({ currentPage, totalPages }) => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "1%",
        right: "2%",
        zIndex: 100,
        color: "white",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {Array.from({ length: totalPages }).map((_, index) => (
        <div
          key={index}
          className="indicator"
          style={{
            width: currentPage === index ? "10px" : "5px",
            height: currentPage === index ? "10px" : "5px",
            borderRadius: "50%",
            backgroundColor: currentPage === index ? "white" : "grey",
            margin: "5px 0",
          }}
        ></div>
      ))}
    </div>
  );
};

export default PageIndicator;
