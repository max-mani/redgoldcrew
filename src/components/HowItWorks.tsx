import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const Step = ({ num, title, desc, delay }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col relative z-10"
    >
      <div className="text-4xl mb-4 grayscale opacity-80">{num === "01" ? "📨" : num === "02" ? "⚙️" : "✨"}</div>
      <div className="font-bebas text-3xl text-gold-primary mb-2">Step {num}</div>
      <h3 className="font-rajdhani uppercase font-bold text-white-soft text-xl tracking-wide mb-3">
        {title}
      </h3>
      <p className="font-nunito text-gray-mid text-[0.95rem] leading-relaxed max-w-sm">
        {desc}
      </p>
    </motion.div>
  );
};

export default function HowItWorks() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const steps = [
    { num: "01", title: "SMS Arrives", desc: "Your bank sends a transaction SMS. Aayiram detects it silently in the background." },
    { num: "02", title: "Data Extracted", desc: "Amount, merchant, date, and transaction type are parsed and shown in your SMS tab." },
    { num: "03", title: "One Tap to Save", desc: "Tap to add it to your ledger. With automation enabled, it logs itself the moment it arrives." }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-navy-dark relative z-10 px-6 overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-rajdhani text-gold-primary uppercase tracking-widest font-semibold text-sm">
              — How It Works —
            </span>
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl text-white-soft mb-4">
            Three Steps to Financial Clarity
          </h2>
          <p className="font-nunito text-gray-mid text-[1.1rem] max-w-2xl leading-relaxed">
            No tutorials. No manual entry. Just open the app and Aayiram does the rest.
          </p>
        </div>

        <div className="relative">
          {/* Animated line (Desktop) */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-navy-mid z-0 overflow-hidden">
             <motion.div 
               initial={{ x: "-100%" }}
               animate={isInView ? { x: "0%" } : { x: "-100%" }}
               transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
               className="h-full bg-gradient-to-r from-red-primary to-gold-primary"
             />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {steps.map((s, i) => (
              <Step key={i} {...s} delay={0.4 + i * 0.4} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
