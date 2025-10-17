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

    // Fractal star clusters
    const starClusters = [];
    const numClusters = 8;
    
    for (let i = 0; i < numClusters; i++) {
      starClusters.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 50 + Math.random() * 150,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.001,
        depth: Math.random(),
        hue: Math.random() * 60 + 180, // Blue to cyan range
      });
    }

    // Mandelbrot-inspired particles
    const particles = [];
    const numParticles = 300;
    
    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3 + 1,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        hue: Math.random() * 360,
        alpha: Math.random() * 0.5 + 0.3,
        pulsePhase: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      });
    }

    // Draw a fractal branch (recursive)
    const drawFractalBranch = (x: number, y: number, length: number, angle: number, depth: number, hue: number) => {
      if (depth === 0 || length < 2) return;

      const endX = x + Math.cos(angle) * length;
      const endY = y + Math.sin(angle) * length;

      const gradient = ctx.createLinearGradient(x, y, endX, endY);
      gradient.addColorStop(0, `hsla(${hue}, 80%, 60%, 0.3)`);
      gradient.addColorStop(1, `hsla(${hue + 30}, 90%, 70%, 0.6)`);

      ctx.strokeStyle = gradient;
      ctx.lineWidth = depth * 0.5;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      // Recursive branches
      const newLength = length * 0.7;
      const angleOffset = Math.PI / 6;
      
      drawFractalBranch(endX, endY, newLength, angle - angleOffset, depth - 1, hue + 10);
      drawFractalBranch(endX, endY, newLength, angle + angleOffset, depth - 1, hue + 10);
    };

    // Draw spiral galaxy pattern
    const drawSpiralGalaxy = (cx: number, cy: number, size: number, rotation: number, hue: number) => {
      const arms = 5;
      const pointsPerArm = 50;
      
      for (let arm = 0; arm < arms; arm++) {
        const armAngle = (arm / arms) * Math.PI * 2 + rotation;
        
        for (let i = 0; i < pointsPerArm; i++) {
          const t = i / pointsPerArm;
          const distance = t * size;
          const angle = armAngle + t * Math.PI * 4;
          
          const x = cx + Math.cos(angle) * distance;
          const y = cy + Math.sin(angle) * distance;
          
          const particleSize = (1 - t) * 3 + 0.5;
          const alpha = (1 - t) * 0.6;
          
          ctx.fillStyle = `hsla(${hue + t * 40}, 80%, ${60 + t * 20}%, ${alpha})`;
          ctx.beginPath();
          ctx.arc(x, y, particleSize, 0, Math.PI * 2);
          ctx.fill();
          
          // Add glow
          ctx.shadowBlur = 10;
          ctx.shadowColor = `hsla(${hue}, 100%, 70%, ${alpha * 0.5})`;
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
      bgGradient.addColorStop(0, '#0a0a1f');
      bgGradient.addColorStop(0.5, '#050510');
      bgGradient.addColorStop(1, '#000005');
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      frame++;

      // Draw cosmic nebula effect
      for (let i = 0; i < 5; i++) {
        const x = width / 2 + Math.sin(frame * 0.001 + i) * 300;
        const y = height / 2 + Math.cos(frame * 0.001 + i) * 200;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 200);
        gradient.addColorStop(0, `hsla(${200 + i * 30}, 70%, 40%, 0.05)`);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      }

      // Update and draw star clusters
      starClusters.forEach((cluster, idx) => {
        cluster.rotation += cluster.rotationSpeed;
        
        // Pulsing effect
        const pulse = Math.sin(frame * 0.02 + idx) * 0.3 + 1;
        
        drawSpiralGalaxy(
          cluster.x,
          cluster.y,
          cluster.size * pulse,
          cluster.rotation,
          cluster.hue
        );

        // Draw fractal branches from cluster center
        if (idx % 2 === 0) {
          for (let i = 0; i < 6; i++) {
            const angle = (i / 6) * Math.PI * 2 + cluster.rotation;
            drawFractalBranch(
              cluster.x,
              cluster.y,
              40,
              angle,
              4,
              cluster.hue
            );
          }
        }
      });

      // Update and draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.pulsePhase += p.pulseSpeed;

        // Wrap around screen
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Pulsing size and alpha
        const pulse = Math.sin(p.pulsePhase) * 0.5 + 0.5;
        const currentSize = p.size * (0.5 + pulse);
        const currentAlpha = p.alpha * (0.5 + pulse);

        ctx.fillStyle = `hsla(${p.hue}, 100%, 70%, ${currentAlpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, currentSize, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsla(${p.hue}, 100%, 60%, ${currentAlpha})`;
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
