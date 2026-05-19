import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { MessageSquare, ScanLine, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const STEP_ICONS: Record<string, LucideIcon> = {
  '01': MessageSquare,
  '02': ScanLine,
  '03': Sparkles,
};

const Step = ({
  num,
  title,
  desc,
  delay,
  isLast,
}: {
  num: string;
  title: string;
  desc: string;
  delay: number;
  isLast?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const Icon = STEP_ICONS[num] ?? Sparkles;

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
      className="relative group"
    >
      {/* Connector dot (desktop timeline) */}
      <motion.div
        className="hidden md:flex absolute -top-[3.25rem] left-1/2 -translate-x-1/2 z-20 w-4 h-4 rounded-full bg-navy-dark border-2 border-gold-primary shadow-[0_0_12px_rgba(212,160,23,0.5)] group-hover:scale-125 group-hover:border-red-primary transition-all duration-300"
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : { scale: 0 }}
        transition={{ delay: delay + 0.15, type: 'spring', stiffness: 260 }}
      />

      <div className="relative h-full bg-navy-mid/90 border border-border-red rounded-[14px] p-7 sm:p-8 overflow-hidden backdrop-blur-sm hover:-translate-y-1.5 hover:border-red-primary/45 hover:shadow-[0_16px_48px_rgba(196,28,28,0.14)] transition-all duration-300">
        <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-red-primary via-red-bright to-gold-primary opacity-70 group-hover:opacity-100 transition-opacity" />

        <div className="absolute -right-1 -top-3 font-bebas text-[4.5rem] leading-none text-red-primary/[0.06] group-hover:text-red-primary/[0.1] transition-colors select-none pointer-events-none">
          {num}
        </div>

        <div className="relative flex flex-col items-center text-center md:items-start md:text-left">
          <motion.div className="flex items-center gap-3 mb-5 w-full justify-center md:justify-start">
            <span className="font-rajdhani text-[0.7rem] uppercase tracking-[0.2em] text-gold-primary font-bold px-2.5 py-1 rounded-md border border-border-gold bg-gold-primary/5">
              Step {num}
            </span>
          </motion.div>

          <div className="w-14 h-14 rounded-xl bg-navy-dark border border-red-primary/50 flex items-center justify-center text-gold-primary mb-5 shadow-[inset_0_0_24px_rgba(196,28,28,0.12)] group-hover:border-gold-primary/60 group-hover:shadow-[0_0_24px_rgba(212,160,23,0.15)] transition-all duration-300">
            <Icon size={26} strokeWidth={1.75} className="text-red-bright group-hover:text-gold-primary transition-colors" />
          </div>

          <h3 className="font-rajdhani uppercase font-bold text-white-soft text-xl sm:text-[1.35rem] tracking-wide mb-3">
            {title}
          </h3>
          <p className="font-nunito text-gray-mid text-[0.92rem] sm:text-[0.95rem] leading-[1.7] max-w-sm mx-auto md:mx-0">
            {desc}
          </p>
        </div>
      </div>

      {/* Mobile vertical connector */}
      {!isLast && (
        <div className="md:hidden flex justify-center py-4">
          <motion.div
            className="w-px h-8 bg-gradient-to-b from-red-primary/60 to-gold-primary/40 origin-top"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ delay: delay + 0.2, duration: 0.4 }}
          />
        </div>
      )}
    </motion.article>
  );
};

export default function HowItWorks() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const steps = [
    {
      num: '01',
      title: 'SMS Arrives',
      desc: 'Your bank sends a transaction SMS. Aayiram detects it silently in the background.',
    },
    {
      num: '02',
      title: 'Data Extracted',
      desc: 'Amount, merchant, date, and transaction type are parsed and shown in your SMS tab.',
    },
    {
      num: '03',
      title: 'One Tap to Save',
      desc: 'Tap to add it to your ledger. With automation enabled, it logs itself the moment it arrives.',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-24 bg-navy-dark relative z-10 px-6 overflow-hidden border-y border-border-red/40"
      ref={containerRef}
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(80vw,600px)] h-[300px] bg-red-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        <div className="mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="font-rajdhani text-gold-primary uppercase tracking-widest font-semibold text-sm">
              — How It Works —
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ delay: 0.08 }}
            className="font-bebas text-5xl md:text-6xl text-white-soft mb-4"
          >
            Three Steps to{' '}
            <span className="text-gold-primary text-glow-gold">Financial Clarity</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ delay: 0.16 }}
            className="font-nunito text-gray-mid text-[1.05rem] max-w-2xl leading-relaxed"
          >
            No tutorials. No manual entry. Just open the app and Aayiram does the rest.
          </motion.p>
        </div>

        <div className="relative md:pt-14">
          {/* Desktop timeline */}
          <div className="hidden md:block absolute top-[1.35rem] left-[12%] right-[12%] h-[2px] z-0 overflow-hidden rounded-full bg-navy-mid">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
              className="h-full origin-left bg-gradient-to-r from-red-primary via-red-bright to-gold-primary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-6 lg:gap-8">
            {steps.map((s, i) => (
              <Step key={s.num} {...s} delay={0.2 + i * 0.12} isLast={i === steps.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
