import React from "react";
import styles from "./PageIndicator.module.css";

type PageIndicatorProps = {
  currentPage: number; // Current page index
  totalPages: number;  // Total number of pages
};

const PageIndicator: React.FC<PageIndicatorProps> = ({ currentPage, totalPages }) => {
  return (
    <div
      className={styles.page_indicator__container}
    >
      {Array.from({ length: totalPages }).map((_, index) => (
        <div
          key={index}
          className={styles.page_indicator}
          style={{
            width: currentPage === index ? "14px" : "9px",
            height: currentPage === index ? "14px" : "9px",
            backgroundColor: currentPage === index ? "white" : "grey",
          }}
          onClick={() => {
            console.log("Scrolling to page", index);
            const scrollView = document.getElementById('app');
            if (scrollView) {
              scrollView.scrollTo({
                top: window.innerHeight * index,
                behavior: 'smooth',
              });
            }
            }}
        ></div>
      ))}
    </div>
  );
};

export default PageIndicator;
