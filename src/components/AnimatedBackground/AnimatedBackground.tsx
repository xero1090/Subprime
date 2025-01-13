import { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  dx: number;
  dy: number;
  radius: number;
}

const AnimatedBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        // GSAP Animations
        const canvas = canvasRef.current;

        // For fixing TS Errors
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;
        
        let animationFrameId: number;
        
        const points: Point[] = [];
        const maxDistance = 150;
      
        // Loop to populate points array
        const createPoints = () => {
          const width = canvas.width;
          const height = canvas.height;
          for (let i = 0; i < 100; i++) {
            points.push({
              x: Math.random() * width,
              y: Math.random() * height,
              dx: (Math.random() - 0.5) * 2,
              dy: (Math.random() - 0.5) * 2,
              radius: Math.random() * 2 + 1,
            });
          }
        };
      
        // Draw lines between points
        const drawLines = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
      
          // Draw Points
          points.forEach((point) => {
            ctx.beginPath();
            ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
            ctx.fillStyle = "rgb(117, 252, 251)"; // Neon blue-purple effect
            ctx.fill();
          });
      
          // Connect Points
          for (let i = 0; i < points.length; i++) {
            for (let j = i + 1; j < points.length; j++) {
              const dx = points[i].x - points[j].x;
              const dy = points[i].y - points[j].y;
              const distance = Math.sqrt(dx * dx + dy * dy);
      
              if (distance < maxDistance) {
                const opacity = 1 - distance / maxDistance;
                ctx.beginPath();
                ctx.moveTo(points[i].x, points[i].y);
                ctx.lineTo(points[j].x, points[j].y);
                ctx.strokeStyle = `rgba(173, 216, 230, ${opacity})`; // Neon line
                ctx.lineWidth = 0.5;
                ctx.stroke();
              }
            }
          }
        };
      
        const updatePoints = () => {
          points.forEach((point) => {
            point.x += point.dx;
            point.y += point.dy;
      
            // Bounce off edges
            if (point.x <= 0 || point.x >= canvas.width) point.dx *= -1;
            if (point.y <= 0 || point.y >= canvas.height) point.dy *= -1;
          });
        };
      
        const animate = () => {
          updatePoints();
          drawLines();
          animationFrameId = requestAnimationFrame(animate);
        };
      
        const resizeCanvas = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
        };
      
        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();
        createPoints();
        animate();
      
        return () => {
          window.removeEventListener("resize", resizeCanvas);
          cancelAnimationFrame(animationFrameId);
        };
      }, []);
    
  return (
    <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        ></canvas>
  )
}

export default AnimatedBackground