import { useEffect, useRef } from "react";
import "./CustomCursor.css";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const trailElements: HTMLDivElement[] = [];

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (cursorRef.current) {
        const cursorSize = 20; // Width and height of the custom cursor
        const offset = cursorSize / 2; // Half of the cursor size to center it
        cursorRef.current.style.transform = `translate3d(${clientX - offset}px, ${clientY - offset}px, 0)`;
      }
      createTrail(clientX, clientY);
    };

   /* const disableRightClickCursor = (e: MouseEvent) => {
      e.preventDefault(); // Prevent default right-click menu
    };
  */

    const createTrail = (x: number, y: number) => {
      if (trailRef.current) {
        const trailElement = document.createElement("div");
        trailElement.classList.add("cursor-trail");
        trailElement.style.left = `${x}px`;
        trailElement.style.top = `${y}px`;
        document.body.appendChild(trailElement);
        trailElements.push(trailElement);

        setTimeout(() => {
          trailElement.style.opacity = "0";
          setTimeout(() => {
            document.body.removeChild(trailElement);
            trailElements.shift();
          }, 300);
        }, 50);
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

  return (
    <>
      <div ref={cursorRef} className="custom-cursor"></div>
      <div ref={trailRef}></div>
    </>
  );
};

export default CustomCursor;
