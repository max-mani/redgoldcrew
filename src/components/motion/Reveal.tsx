import { motion, useInView, type Variants } from 'motion/react';
import { useRef, type ReactNode } from 'react';

const EASE = [0.22, 1, 0.36, 1] as const;

const directionOffset = {
  up: { x: 0, y: 40 },
  down: { x: 0, y: -40 },
  left: { x: 48, y: 0 },
  right: { x: -48, y: 0 },
  scale: { x: 0, y: 24 },
} as const;

export type RevealDirection = keyof typeof directionOffset;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  amount?: number;
  once?: boolean;
};

export function Reveal({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  amount = 0.2,
  once = true,
}: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount, margin: '0px 0px -8% 0px' });
  const offset = directionOffset[direction];
  const isScale = direction === 'scale';

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        x: offset.x,
        y: offset.y,
        scale: isScale ? 0.92 : 0.97,
        filter: 'blur(8px)',
      }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, scale: 1, filter: 'blur(0px)' }
          : {
              opacity: 0,
              x: offset.x,
              y: offset.y,
              scale: isScale ? 0.92 : 0.97,
              filter: 'blur(8px)',
            }
      }
      transition={{ duration: 0.65, ease: EASE, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: EASE },
  },
};

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
};

export function RevealStagger({
  children,
  className = '',
  once = true,
  amount = 0.15,
}: RevealStaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount, margin: '0px 0px -8% 0px' });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}

type SectionHeaderProps = {
  label: string;
  title: ReactNode;
  description?: string;
  align?: 'left' | 'center';
  labelClassName?: string;
  className?: string;
};

export function SectionHeader({
  label,
  title,
  description,
  align = 'left',
  labelClassName = 'text-gold-primary',
  className = '',
}: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start';

  return (
    <Reveal className={`mb-16 flex flex-col ${alignClass} ${className}`}>
      <span
        className={`font-rajdhani uppercase tracking-widest font-semibold text-sm mb-4 ${labelClassName}`}
      >
        {label}
      </span>
      <h2 className="font-bebas text-[clamp(2.75rem,5vw,4rem)] md:text-6xl text-white-soft mb-4 leading-[0.95]">
        {title}
      </h2>
      {description && (
        <p className="font-nunito text-gray-mid text-[1.05rem] max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </Reveal>
  );
}
