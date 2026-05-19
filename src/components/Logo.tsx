import type { ImgHTMLAttributes } from 'react';

const LOGO_SRC = '/logo.png';

interface LogoProps extends ImgHTMLAttributes<HTMLImageElement> {
  glow?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const sizeClasses = {
  sm: 'w-7 h-7',
  md: 'w-10 h-10',
  lg: 'w-16 h-16',
  xl: 'w-32 h-32',
  full: 'w-full h-full',
};

export default function Logo({
  glow = true,
  size,
  className = '',
  alt = 'RedGoldCrew logo',
  ...props
}: LogoProps) {
  const sizeClass = size ? sizeClasses[size] : '';
  const glowClass = glow
    ? 'drop-shadow-[0_0_14px_rgba(196,28,28,0.45)] drop-shadow-[0_0_28px_rgba(212,160,23,0.25)]'
    : '';

  return (
    <img
      src={LOGO_SRC}
      alt={alt}
      width={512}
      height={512}
      decoding="async"
      draggable={false}
      className={`object-contain select-none ${sizeClass} ${glowClass} ${className}`.trim()}
      {...props}
    />
  );
}
