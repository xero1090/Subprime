import { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  //const trailRef = useRef<HTMLDivElement>(null);
  const trailElements: HTMLDivElement[] = [];
  let lastX = 0;
  let lastY = 0;

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Set custom cursor position
      if (cursorRef.current) {
        cursorRef.current.style.left = `${clientX}px`;
        cursorRef.current.style.top = `${clientY}px`;
      }

      // Calculate movement direction
      const deltaX = clientX - lastX;
      const deltaY = clientY - lastY;
      const speed = Math.sqrt(deltaX ** 2 + deltaY ** 2);

      if (speed > 5) {
        createSparks(clientX, clientY, deltaX, deltaY);
      }

      lastX = clientX;
      lastY = clientY;
    };

    const createSparks = (x: number, y: number, deltaX: number, deltaY: number) => {
      const sparkCount = 8; // Number of sparks
      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement("div");
        spark.classList.add("cursor-spark");

        // Randomize the angle with some bias in movement direction
        const angleOffset = (Math.random() - 0.5) * Math.PI / 2; // ±45 degrees
        const angle = Math.atan2(deltaY, deltaX) + angleOffset;
        const speed = Math.random() * 6 + 4; // Speed range

        // Calculate velocity based on angle
        const velocityX = Math.cos(angle) * speed;
        const velocityY = Math.sin(angle) * speed;

        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;

        document.body.appendChild(spark);

        // Animate the spark
        spark.animate(
          [
            { transform: `translate(0, 0)`, opacity: 1 },
            { transform: `translate(${velocityX * 10}px, ${velocityY * 10}px)`, opacity: 0 }
          ],
          {
            duration: 600 + Math.random() * 300, // Random duration
            easing: "ease-out",
          }
        );

        // Remove spark after animation completes
        setTimeout(() => {
          spark.remove();
        }, 1000);
      }
    };

    const handleHover = (e: Event) => {
      if (cursorRef.current) {
        cursorRef.current.classList.add("cursor-hover");
      }
    };

    const handleHoverOut = (e: Event) => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove("cursor-hover");
      }
    };

    const handleContextMenu = () => {
      if (cursorRef.current) {
        cursorRef.current.style.display = "none";
      }
    };
  
    const restoreCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.display = "block";
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("click", restoreCursor);
    //document.addEventListener("contextmenu", disableRightClickCursor);
    document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleHoverOut);
    });

    return () => {
      trailElements.forEach((el) => el.remove());
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("click", restoreCursor);
      //document.removeEventListener("contextmenu", disableRightClickCursor);
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleHoverOut);
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor"></div>;

};

export default CustomCursor;
