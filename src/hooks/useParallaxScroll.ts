import { useEffect, useState } from "react";

export const useParallaxScroll = () => {
  const [scrollYProgress, setScrollYProgress] = useState(0);

  useEffect(() => {
    const handleScroll = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target) {
        const scrollTop = target.scrollTop;
        const scrollHeight = target.scrollHeight - target.clientHeight;
        const scrollProgress = Math.floor((scrollTop / scrollHeight) * 100);
        console.log(`Scroll Progress: ${scrollProgress}`);

        setScrollYProgress(scrollProgress);
      }
    };

    const parallaxElement = document.getElementById("parallax");
      if (parallaxElement) {
        parallaxElement.addEventListener("scroll", handleScroll);
      }
  
      return () => {
        if (parallaxElement) {
          parallaxElement.removeEventListener("scroll", handleScroll);
        }
      };
  }, [scrollYProgress]);

  return scrollYProgress;
};
