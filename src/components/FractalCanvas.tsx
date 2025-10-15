import { useEffect, useRef } from 'react';

const FractalCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrame: number;
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    const handleResize = () => {
      resizeCanvas();
      if (!animationFrame) animate();
    };
    window.addEventListener('resize', handleResize);

    const goldenRatio = 1.618033988749;
    const particles: Particle[] = [];

    class Particle {
      angle: number;
      radius: number;
      speed: number;
      size: number;
      opacity: number;

      constructor(angle: number, radius: number, speed: number) {
        this.angle = angle;
        this.radius = radius;
        this.speed = speed;
        this.size = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.3 + 0.2;
      }

      update() {
        this.angle += this.speed;
      }

      draw(centerX: number, centerY: number, ctx: CanvasRenderingContext2D) {
        const x = centerX + Math.cos(this.angle) * this.radius;
        const y = centerY + Math.sin(this.angle) * this.radius;

        ctx.beginPath();
        ctx.arc(x, y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(23, 23, 23, ${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 40; i++) {
      const orbit = Math.floor(i / 8);
      const radius = 60 + orbit * 70;
      const angle = (i * 137.5 * Math.PI) / 180;
      const speed = 0.0008 + orbit * 0.0003;
      particles.push(new Particle(angle, radius, speed));
    }

    const drawCircleFractal = (x: number, y: number, radius: number, depth: number, maxDepth: number) => {
      if (depth > maxDepth || radius < 2) return;

      const opacity = 0.08 - depth * 0.015;
      ctx.strokeStyle = `rgba(23, 23, 23, ${opacity})`;
      ctx.lineWidth = Math.max(1, 2 - depth * 0.3);

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.stroke();

      const angleStep = (Math.PI * 2) / 6;
      const newRadius = radius / goldenRatio;

      for (let i = 0; i < 6; i++) {
        const angle = i * angleStep + time * 0.05;
        const newX = x + Math.cos(angle) * (radius - newRadius);
        const newY = y + Math.sin(angle) * (radius - newRadius);

        drawCircleFractal(newX, newY, newRadius, depth + 1, maxDepth);
      }
    };

    const drawFractalGeometry = () => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      const pulse = Math.sin(time * 0.5) * 0.15 + 0.85;
      const rotation = time * 0.08;

      drawCircleFractal(centerX, centerY, 140 * pulse, 0, 3);

      const fib = [2, 3, 5, 8, 13, 21, 34, 55, 89];
      const scale = 2.5;

      ctx.strokeStyle = `rgba(23, 23, 23, ${0.06 * pulse})`;
      ctx.lineWidth = 1.5;

      let x = centerX;
      let y = centerY;
      let direction = 0;

      ctx.beginPath();
      for (let i = 0; i < fib.length; i++) {
        const size = fib[i] * scale;

        switch (direction % 4) {
          case 0:
            ctx.arc(x, y - size, size, Math.PI / 2, Math.PI, false);
            x += size;
            break;
          case 1:
            ctx.arc(x + size, y, size, Math.PI, (3 * Math.PI) / 2, false);
            y -= size;
            break;
          case 2:
            ctx.arc(x, y + size, size, (3 * Math.PI) / 2, 2 * Math.PI, false);
            x -= size;
            break;
          case 3:
            ctx.arc(x - size, y, size, 0, Math.PI / 2, false);
            y += size;
            break;
        }
        direction++;
      }
      ctx.stroke();

      particles.forEach((particle) => {
        particle.update();
        particle.draw(centerX, centerY, ctx);
      });

      const centerPulse = Math.sin(time * 1.5) * 3 + 5;
      ctx.beginPath();
      ctx.arc(centerX, centerY, centerPulse, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(23, 23, 23, 0.25)';
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.008;
      drawFractalGeometry();
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-100"
      style={{ mixBlendMode: 'normal' }}
    />
  );
};

export default FractalCanvas;
