import React, { useEffect, useRef, useState } from 'react';

const CosmicFractalUniverse = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const width = dimensions.width;
    const height = dimensions.height;
    
    canvas.width = width;
    canvas.height = height;

    const starClusters = Array.from({ length: 6 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 50 + Math.random() * 150,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: (Math.random() - 0.5) * 0.001,
      hue: Math.random() * 60 + 180,
    }));

    const particles = Array.from({ length: 200 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
      hue: Math.random() * 360,
      alpha: Math.random() * 0.4 + 0.2,
      pulsePhase: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.015 + 0.008,
    }));

    // Draw a fractal branch (recursive)
    const drawFractalBranch = (x: number, y: number, length: number, angle: number, depth: number, hue: number) => {
      if (depth === 0 || length < 2) return;

      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;

      const gradient = ctx.createLinearGradient(x, y, endX, endY);
      gradient.addColorStop(0, `hsla(${hue}, 70%, 55%, 0.25)`);
      gradient.addColorStop(1, `hsla(${hue + 30}, 80%, 65%, 0.4)`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = depth * 0.4;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      const newLength = length * 0.68;
      const angleOffset = Math.PI / 6.5;
      
      drawFractalBranch(endX, endY, newLength, angle - angleOffset, depth - 1, hue + 12);
      drawFractalBranch(endX, endY, newLength, angle + angleOffset, depth - 1, hue + 12);
    };

    // Draw spiral galaxy pattern
    const drawSpiralGalaxy = (cx: number, cy: number, size: number, rotation: number, hue: number) => {
      const arms = 4;
      const pointsPerArm = 40;
      
      for (let arm = 0; arm < arms; arm++) {
        const armAngle = (arm / arms) * Math.PI * 2 + rotation;
        
        for (let i = 0; i < pointsPerArm; i++) {
          const t = i / pointsPerArm;
          const distance = t * size;
          const angle = armAngle + t * Math.PI * 3.5;
          
          const x = cx + Math.cos(angle) * distance;
          const y = cy + Math.sin(angle) * distance;
          
          const particleSize = (1 - t) * 2.5 + 0.4;
          const alpha = (1 - t) * 0.5;
          
          ctx.fillStyle = `hsla(${hue + t * 35}, 75%, ${58 + t * 18}%, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, particleSize, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.shadowBlur = 8;
          ctx.shadowColor = `hsla(${hue}, 95%, 68%, ${alpha * 0.4})`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    };

    // Animation loop
    let frame = 0;
    let animationFrameId: number;
    
    const animate = () => {
      // Create deep space background with gradient
      const bgGradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width);
      bgGradient.addColorStop(0, '#0d0d20');
      bgGradient.addColorStop(0.5, '#080812');
      bgGradient.addColorStop(1, '#020206');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      frame++;

      for (let i = 0; i < 4; i++) {
        const x = width / 2 + Math.sin(frame * 0.0008 + i) * 280;
        const y = height / 2 + Math.cos(frame * 0.0008 + i) * 180;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 180);
        gradient.addColorStop(0, `hsla(${210 + i * 28}, 65%, 38%, 0.04)`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      starClusters.forEach((cluster, idx) => {
        cluster.rotation += cluster.rotationSpeed;
        const pulse = Math.sin(frame * 0.018 + idx) * 0.25 + 1;
        
        drawSpiralGalaxy(cluster.x, cluster.y, cluster.size * pulse, cluster.rotation, cluster.hue);

        if (idx % 2 === 0) {
          for (let i = 0; i < 5; i++) {
            const angle = (i / 5) * Math.PI * 2 + cluster.rotation;
            drawFractalBranch(cluster.x, cluster.y, 35, angle, 3, cluster.hue);
          }
        }
      });

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulsePhase += p.pulseSpeed;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const pulse = Math.sin(p.pulsePhase) * 0.4 + 0.6;
        const currentSize = p.size * pulse;
        const currentAlpha = p.alpha * pulse;

        ctx.fillStyle = `hsla(${p.hue}, 90%, 65%, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 12;
        ctx.shadowColor = `hsla(${p.hue}, 95%, 60%, ${currentAlpha * 0.6})`;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw connecting lines between nearby particles (constellation effect)
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            const alpha = (1 - distance / 100) * 0.15;
            ctx.strokeStyle = `hsla(200, 80%, 60%, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions]);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
    />
  );
};

export default CosmicFractalUniverse;
