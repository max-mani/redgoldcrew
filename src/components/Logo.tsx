import type { ImgHTMLAttributes } from 'react';

interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  glow?: boolean;
}

export default function Logo({
  glow = true,
  className = '',
  alt = 'RedGoldCrew',
  ...props
}: LogoProps) {
  const glowStyle = glow
    ? { filter: 'drop-shadow(0 0 12px rgba(212, 160, 23, 0.45)) drop-shadow(0 0 24px rgba(196, 28, 28, 0.35))' }
    : undefined;

  return (
    <img
      src="/logo.png"
      alt={alt}
      className={`object-contain ${className}`.trim()}
      style={glowStyle}
      {...props}
    />
  );
}
