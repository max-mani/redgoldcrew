import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const MissionItem = ({ icon, title, desc, delay }: { icon: string, title: string, desc: string, delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
      className="bg-navy-mid border border-border-red rounded-xl p-7 text-center group hover:-translate-y-1 transition-transform duration-300"
    >
      <div className="w-[52px] h-[52px] mx-auto rounded-full bg-navy-dark border border-red-primary flex items-center justify-center text-2xl mb-5 group-hover:border-gold-primary transition-colors">
        {icon}
      </div>
      <h3 className="font-rajdhani uppercase text-white-soft text-[1.1rem] font-bold tracking-wide mb-3">
        {title}
      </h3>
      <p className="font-nunito text-gray-mid text-[0.9rem] leading-[1.6]">
        {desc}
      </p>
    </motion.div>
  );
};

export default function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const items = [
    {
      icon: "🎯",
      title: "ONE PROBLEM. ONE SOLUTION.",
      desc: "We don't build feature factories. Each RedGoldCrew product is ruthlessly focused on solving a single problem better than anything else on the market."
    },
    {
      icon: "🔒",
      title: "PRIVACY IS NOT OPTIONAL.",
      desc: "We architect every product from day one so that user data never needs to leave the device. Privacy is not a setting — it's the foundation."
    },
    {
      icon: "⚡",
      title: "SHIPPED IS BETTER THAN PERFECT.",
      desc: "A good product in users' hands teaches us more than a perfect product in development. We ship early, learn from real usage, and improve fast."
    },
    {
      icon: "🌏",
      title: "INDIA FIRST. WORLD READY.",
      desc: "We build for the realities of Indian internet, Indian banks, and Indian workflows — then build the architecture to scale globally when the time comes."
    }
  ];

  return (
    <section id="mission" className="py-24 bg-transparent border-y border-border-red relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="max-w-[700px] mx-auto text-center mb-20" ref={ref}>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <div className="w-6 h-[1px] bg-red-primary" />
            <span className="font-rajdhani uppercase text-red-primary font-bold tracking-widest text-sm">
              — Our Mission —
            </span>
            <div className="w-6 h-[1px] bg-red-primary" />
          </motion.div>

          <motion.h2 
             initial={{ y: 20, opacity: 0 }}
             animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="font-bebas text-[3.5rem] leading-[1.1] mb-6"
          >
            <span className="text-white-soft block">We Build For The Person</span>
            <span className="text-gold-primary block">Not The Pitch Deck.</span>
          </motion.h2>

          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-nunito text-gray-mid text-[1.05rem] leading-[1.8]"
          >
            Most software is built to impress investors, win awards, or capture market share. 
            We build software to sit quietly on someone's phone and make their life measurably 
            better. That means offline-first, privacy-respecting, low-friction tools that 
            solve one problem exceptionally well.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <MissionItem key={i} {...item} delay={0.3 + (i * 0.12)} />
          ))}
        </div>

      </div>
    </section>
  );
}
