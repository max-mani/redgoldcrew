import { motion, useInView, useScroll, useTransform } from 'motion/react';
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
  isLast,
}: {
  num: string;
  title: string;
  desc: string;
  isLast?: boolean;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, {
    once: true,
    amount: 0.55,
    margin: '0px 0px -15% 0px',
  });
  const Icon = STEP_ICONS[num] ?? Sparkles;

  return (
    <div
      ref={ref}
      className={`relative flex items-center min-h-[52vh] md:min-h-[58vh] ${isLast ? 'pb-8' : ''}`}
    >
      {/* Timeline node */}
      <motion.div
        className="absolute left-0 md:left-1 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-11 md:h-11 rounded-full bg-navy-dark border-2 border-gold-primary flex items-center justify-center font-rajdhani font-bold text-sm text-gold-primary shadow-[0_0_16px_rgba(212,160,23,0.45)]"
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 320, damping: 22, delay: 0.05 }}
      >
        {num}
      </motion.div>

      <motion.article
        initial={{ opacity: 0, y: 56, scale: 0.94, filter: 'blur(6px)' }}
        animate={
          isInView
            ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
            : { opacity: 0, y: 56, scale: 0.94, filter: 'blur(6px)' }
        }
        transition={{
          duration: 0.65,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="group relative ml-14 md:ml-20 w-full"
      >
        <div className="relative bg-navy-mid/90 border border-border-red rounded-[14px] p-7 sm:p-9 overflow-hidden backdrop-blur-sm hover:border-red-primary/45 hover:shadow-[0_20px_50px_rgba(196,28,28,0.16)] transition-shadow duration-300">
          <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-red-primary via-red-bright to-gold-primary opacity-70 group-hover:opacity-100 transition-opacity" />

          <motion.div
            className="absolute -right-1 -top-3 font-bebas text-[4.5rem] leading-none text-red-primary/[0.06] select-none pointer-events-none"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {num}
          </motion.div>

          <div className="relative flex flex-col md:flex-row md:items-start gap-6">
            <motion.div
              className="shrink-0 w-14 h-14 rounded-xl bg-navy-dark border border-red-primary/50 flex items-center justify-center shadow-[inset_0_0_24px_rgba(196,28,28,0.12)]"
              initial={{ rotate: -8, scale: 0.8 }}
              animate={isInView ? { rotate: 0, scale: 1 } : { rotate: -8, scale: 0.8 }}
              transition={{ type: 'spring', stiffness: 280, damping: 18, delay: 0.12 }}
            >
              <Icon
                size={26}
                strokeWidth={1.75}
                className="text-red-bright group-hover:text-gold-primary transition-colors"
              />
            </motion.div>

            <div>
              <motion.span
                className="inline-block font-rajdhani text-[0.7rem] uppercase tracking-[0.2em] text-gold-primary font-bold px-2.5 py-1 rounded-md border border-border-gold bg-gold-primary/5 mb-4"
                initial={{ opacity: 0, x: -12 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                transition={{ delay: 0.18, duration: 0.45 }}
              >
                Step {num}
              </motion.span>

              <motion.h3
                className="font-rajdhani uppercase font-bold text-white-soft text-2xl sm:text-[1.6rem] tracking-wide mb-3"
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ delay: 0.22, duration: 0.45 }}
              >
                {title}
              </motion.h3>

              <motion.p
                className="font-nunito text-gray-mid text-[0.95rem] sm:text-[1rem] leading-[1.75] max-w-xl"
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ delay: 0.28, duration: 0.45 }}
              >
                {desc}
              </motion.p>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

export default function HowItWorks() {
  const headerRef = useRef(null);
  const stepsContainerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  const { scrollYProgress } = useScroll({
    target: stepsContainerRef,
    offset: ['start 0.85', 'end 0.5'],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

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
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(80vw,600px)] h-[300px] bg-red-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto relative">
        <div className="mb-12 md:mb-16" ref={headerRef}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="font-rajdhani text-gold-primary uppercase tracking-widest font-semibold text-sm">
              — How It Works —
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ delay: 0.08 }}
            className="font-bebas text-5xl md:text-6xl text-white-soft mb-4"
          >
            Three Steps to{' '}
            <span className="text-gold-primary text-glow-gold">Financial Clarity</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ delay: 0.16 }}
            className="font-nunito text-gray-mid text-[1.05rem] max-w-2xl leading-relaxed"
          >
            No tutorials. No manual entry. Scroll to see how Aayiram works — one step at a time.
          </motion.p>
        </div>

        <div ref={stepsContainerRef} className="relative pl-2 md:pl-4">
          {/* Vertical progress line */}
          <motion.div
            className="absolute left-[19px] md:left-[23px] top-8 bottom-8 w-[2px] origin-top bg-gradient-to-b from-red-primary via-red-bright to-gold-primary rounded-full"
            style={{ scaleY: lineScale }}
          />
          <div className="absolute left-[19px] md:left-[23px] top-8 bottom-8 w-[2px] bg-navy-mid rounded-full" />

          {steps.map((s, i) => (
            <Step key={s.num} {...s} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
