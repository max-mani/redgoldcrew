import { useEffect, useState } from 'react';

type Dot = {
  id: number;
  x: number;
  y: number;
};

export default function CustomCursor() {
  const [dots, setDots] = useState<Dot[]>([]);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    // Check if it's a touch device or small screen
    if (window.matchMedia("(pointer: coarse)").matches || window.innerWidth < 768) {
      setIsDesktop(false);
      return;
    }

    let dotIdCounter = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newDot = {
        id: dotIdCounter++,
        x: e.clientX,
        y: e.clientY,
      };

      setDots((prev) => [...prev, newDot]);

      setTimeout(() => {
        setDots((prev) => prev.filter((d) => d.id !== newDot.id));
      }, 400);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if (!isDesktop) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="absolute w-[4px] h-[4px] bg-gold-primary rounded-full"
          style={{
            left: dot.x - 2,
            top: dot.y - 2,
            animation: 'dotFade 0.4s ease-out forwards',
          }}
        />
      ))}
      <style>
        {`
          @keyframes dotFade {
            0% { opacity: 0.8; transform: scale(1); }
            100% { opacity: 0; transform: scale(0); }
          }
        `}
      </style>
    </div>
  );
}
