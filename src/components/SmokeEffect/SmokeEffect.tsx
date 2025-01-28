import { useRef, useEffect } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  opacity: number;
  velocityY: number;
  color: string;
}

const SmokeEffect = () => {
  const smokeRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = smokeRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const particles: Particle[] = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Create a particle with random properties
    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 50,
      size: Math.random() * 20 + 10,
      opacity: Math.random(),
      velocityY: Math.random() * -1.5 - 0.5,
      color: Math.random() < 0.15 ? `rgba(173, 216, 230,` : `rgba(255, 255, 255,`, // 15% are light blue
    });

    const initParticles = () => {
      for (let i = 0; i < 100; i++) {
        particles.push(createParticle());
      }
    };

    const renderParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.opacity})`; // Include opacity dynamically
        ctx.fill();
        p.y += p.velocityY;
        if (p.y < -50) particles[i] = createParticle(); // Recreate particle if it moves out of bounds
      });
      requestAnimationFrame(renderParticles);
    };

    // Resize canvas and initialize particles
    resizeCanvas();
    initParticles();
    renderParticles();

    window.addEventListener("resize", resizeCanvas);

    // Cleanup
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={smokeRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
};

export default SmokeEffect;
