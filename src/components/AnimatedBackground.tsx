import React, { useEffect, useRef } from 'react';

/**
 * AnimatedBackground Component
 * Renderiza um canvas com animação de linhas/partículas verdes neon
 * sobre fundo preto, criando efeito de tecnologia e movimento
 */
export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Configurar tamanho do canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Cores da paleta
    const PRIMARY_GREEN = '#5DD62C';
    const DARK_GREEN = '#337418';
    const BLACK = '#0F0F0F';

    // Partículas
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Criar partículas
    const particleCount = Math.floor((canvas.width * canvas.height) / 50000);
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }

    // Linhas conectadas
    const lines: Array<{
      x1: number;
      y1: number;
      x2: number;
      y2: number;
      opacity: number;
    }> = [];

    const animate = () => {
      // Limpar canvas com fundo preto
      ctx.fillStyle = BLACK;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Atualizar e desenhar partículas
      particles.forEach((particle) => {
        // Atualizar posição
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce nas bordas
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Manter dentro dos limites
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));

        // Desenhar partícula com glow
        ctx.shadowBlur = 10;
        ctx.shadowColor = PRIMARY_GREEN;
        ctx.fillStyle = `rgba(93, 214, 44, ${particle.opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Desenhar linhas conectadas entre partículas próximas
      ctx.strokeStyle = `rgba(93, 214, 44, 0.2)`;
      ctx.lineWidth = 1;
      ctx.shadowBlur = 5;
      ctx.shadowColor = PRIMARY_GREEN;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Desenhar linhas diagonais dinâmicas (efeito tech)
      const time = Date.now() * 0.0001;
      ctx.strokeStyle = `rgba(93, 214, 44, 0.1)`;
      ctx.lineWidth = 2;

      for (let i = 0; i < 3; i++) {
        const offset = (time + i) % 2;
        ctx.beginPath();
        ctx.moveTo(-canvas.width * 0.5 + offset * canvas.width * 2, -canvas.height * 0.5);
        ctx.lineTo(canvas.width * 1.5 + offset * canvas.width * 2, canvas.height * 1.5);
        ctx.stroke();
      }

      ctx.shadowBlur = 0;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default AnimatedBackground;
