interface PageIndicatorProps {
  currentPage: number;
  totalPages: number;
}

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
      {Array.from({ length: totalPages }, (_, index) => (
        <div
          key={index}
          id={`page-${index + 1}`}
          className={`indicator${currentPage === index ? " active" : ""}`}
        />
      ))}

      <style>
        {`
            .indicator {
                width: 5px;
                height: 5px;
                border-radius: 50%;
                background-color: grey;
                margin: 5px 0;
            }
            .indicator.active {
                width: 10px;
                height: 10px;
                background-color: white;
            }
            `}
      </style>
    </div>
  );
};

export default PageIndicator;
