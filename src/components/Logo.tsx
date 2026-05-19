import { SVGProps } from 'react';

interface LogoProps extends SVGProps<SVGSVGElement> {
  glow?: boolean;
  className?: string;
}

export default function Logo({ glow = true, className = "", ...props }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      className={className} 
      stroke="var(--color-red-primary)" 
      strokeWidth="4" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      fill="none" 
      {...props}
    >
      {/* Outer Shell */}
      <path d="
        M 35,12 
        Q 50,7 65,12 
        Q 75,18 78,35 
        L 88,40 
        L 88,55 
        L 78,65 
        L 73,78 
        L 60,92 
        L 40,92 
        L 27,78 
        L 22,65 
        L 12,55 
        L 12,40 
        L 22,35 
        Q 25,18 35,12 
        Z
      " />
      
      {/* Forehead Detail */}
      <path d="
        M 38,25 
        L 62,25 
        L 65,35 
        L 50,40 
        L 35,35 
        Z
      " />
      
      {/* Cheek / Faceplate Lines */}
      <path d="M 22,65 L 30,83 L 45,83" />
      <path d="M 78,65 L 70,83 L 55,83" />
      
      {/* Chin / Mouth Detail */}
      <path d="M 45,83 L 55,83 L 55,92 L 45,92 Z" />

      {/* Eyes */}
      <path 
        d="M 28,52 Q 38,48 46,51 Q 40,56 28,52 Z" 
        fill="url(#gold-gradient)" 
        stroke="none"
        style={glow ? { filter: 'drop-shadow(0px 0px 8px rgba(212,160,23,0.9))' } : {}}
      />
      <path 
        d="M 72,52 Q 62,48 54,51 Q 60,56 72,52 Z" 
        fill="url(#gold-gradient)" 
        stroke="none"
        style={glow ? { filter: 'drop-shadow(0px 0px 8px rgba(212,160,23,0.9))' } : {}}
      />

      <defs>
        <linearGradient id="gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fff2cc" />
          <stop offset="50%" stopColor="var(--color-gold-primary)" />
          <stop offset="100%" stopColor="#b38712" />
        </linearGradient>
      </defs>
    </svg>
  );
}
