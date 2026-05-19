import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import type { MouseEvent } from 'react';
import { SectionHeader } from './motion/Reveal';

const FeatureCard = ({ icon, title, desc, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    e.currentTarget.style.transform = `perspective(800px) rotateX(${-y / 30}deg) rotateY(${x / 30}deg)`;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = `perspective(800px) rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 44, scale: 0.96, filter: 'blur(8px)' }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
          : { opacity: 0, y: 44, scale: 0.96, filter: 'blur(8px)' }
      }
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="bg-navy-darkest border border-border-red border-l-4 border-l-red-primary rounded-lg p-6 group transition-all duration-300 hover:shadow-[0_0_20px_rgba(196,28,28,0.2)]"
      style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease-out, box-shadow 0.3s ease-out' }}
    >
      <div className="text-3xl mb-4 transform-gpu" style={{ transform: "translateZ(30px)" }}>{icon}</div>
      <h3 className="font-rajdhani uppercase font-bold text-white-soft text-xl tracking-wide mb-2 transform-gpu" style={{ transform: "translateZ(20px)" }}>
        {title}
      </h3>
      <p className="font-nunito text-gray-mid text-[0.95rem] leading-relaxed transform-gpu" style={{ transform: "translateZ(10px)" }}>
        {desc}
      </p>
    </motion.div>
  );
};

export default function Features() {
  const features = [
    {
      icon: "📩",
      title: "SMS Detection",
      desc: "Reads your bank transaction SMS, extracts amounts, merchants, and dates — all on your device. No data ever leaves your phone."
    },
    {
      icon: "📒",
      title: "Smart Ledger",
      desc: "Daily, Monthly, and Budget views of all your income, expenses, and transfers. Add entries manually or via one tap from a detected SMS."
    },
    {
      icon: "📊",
      title: "Visual Analytics",
      desc: "Income vs expense charts, category-wise spending breakdowns, and spending trend graphs that reveal exactly where your money goes."
    },
    {
      icon: "🤖",
      title: "Smart Automation",
      desc: "Set automation rules for merchants like Swiggy or Amazon. Future transactions get categorised automatically — set once, works forever."
    },
    {
      icon: "🏦",
      title: "Account Management",
      desc: "Track multiple bank accounts, wallets, and assets. See real-time balances, liabilities, and net worth at a glance."
    },
    {
      icon: "🔒",
      title: "Privacy & Backup",
      desc: "App lock with PIN, Google Drive encrypted backup, and complete offline operation. You own every byte of your data."
    }
  ];

  return (
    <section id="features" className="py-24 bg-transparent relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          label="— Core Features —"
          title="Everything You Need to Track Your Money"
          description="Six powerful modules built to make personal finance effortless, automatic, and private."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} delay={i * 0.12} />
          ))}
        </div>
      </div>
    </section>
  );
}
