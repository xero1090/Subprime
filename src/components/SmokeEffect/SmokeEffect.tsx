import React, { useRef, useEffect } from "react";

const SmokeEffect = () => {
  const smokeRef = useRef(null);

  useEffect(() => {
    const canvas = smokeRef.current;
    const ctx = canvas.getContext("2d");
    const particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: canvas.height + Math.random() * 50,
      size: Math.random() * 20 + 10,
      opacity: Math.random(),
      velocityY: Math.random() * -1.5 - 0.5,
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
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
        p.y += p.velocityY;
        if (p.y < -50) particles[i] = createParticle();
      });
      requestAnimationFrame(renderParticles);
    };

    // Resize and initialize
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
