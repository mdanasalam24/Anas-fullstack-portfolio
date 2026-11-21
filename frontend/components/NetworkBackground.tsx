
"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    let animationId = 0;
    let particles: Particle[] = [];

    let width = 0;
    let height = 0;
    let connectionDistance = 145;
    let isMobile = false;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const createParticles = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      isMobile = width < 768;
      connectionDistance = isMobile ? 105 : 145;

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        1.5
      );

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.min(
        Math.floor(
          (width * height) / (isMobile ? 14000 : 10000)
        ),
        isMobile ? 45 : 100
      );

      particles = Array.from({ length: count }, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = 0.25 + Math.random() * 0.45;

        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          radius: 1 + Math.random() * 1.2,
        };
      });
    };

    const draw = () => {
      context.clearRect(0, 0, width, height);

      // Draw and move particles
      particles.forEach((particle) => {
        if (!reducedMotion) {
          particle.x += particle.vx;
          particle.y += particle.vy;

          if (
            particle.x <= 0 ||
            particle.x >= width
          ) {
            particle.vx *= -1;
          }

          if (
            particle.y <= 0 ||
            particle.y >= height
          ) {
            particle.vy *= -1;
          }
        }

        // Particle glow
        context.beginPath();

        context.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        context.fillStyle = "rgba(34, 211, 238, 0.8)";
        context.shadowBlur = 8;
        context.shadowColor = "rgba(34, 211, 238, 0.45)";

        context.fill();
        context.shadowBlur = 0;
      });

      // Draw network connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;

          const distance = Math.hypot(dx, dy);

          if (distance < connectionDistance) {
            const opacity =
              (1 - distance / connectionDistance) * 0.22;

            context.beginPath();

            context.moveTo(p1.x, p1.y);
            context.lineTo(p2.x, p2.y);

            context.strokeStyle =
              `rgba(34, 211, 238, ${opacity})`;

            context.lineWidth = 0.8;
            context.stroke();
          }
        }
      }

      if (!reducedMotion) {
        animationId = requestAnimationFrame(draw);
      }
    };

    const handleResize = () => {
      createParticles();

      if (reducedMotion) {
        draw();
      }
    };

    createParticles();
    draw();

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="
        pointer-events-none
        fixed inset-0
        z-0
        h-full w-full
      "
      style={{
        opacity: 0.75,
      }}
    />
  );
}
