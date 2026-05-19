import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';

const OsCard = ({ icon, title, desc, statusPillClass, statusLabel, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-navy-mid border border-border-gold rounded-xl p-6 hover:-translate-y-1 hover:border-gold-primary transition-all duration-300"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="text-2xl">{icon}</div>
          <h4 className="font-rajdhani uppercase text-white-soft text-[1.1rem] font-bold tracking-wide">
            {title}
          </h4>
        </div>
        <div className={`font-rajdhani uppercase text-[0.65rem] px-2 py-1 rounded-full border tracking-widest ${statusPillClass}`}>
          {statusLabel}
        </div>
      </div>
      <p className="font-nunito text-gray-mid text-[0.95rem] leading-[1.6]">
        {desc}
      </p>
    </motion.div>
  );
};

export default function OpenSource() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contributions = [
    {
      icon: "⭐",
      title: "Aayiram",
      desc: "Our flagship Android finance app. Core components and architecture patterns may be open-sourced in future releases.",
      statusLabel: "Private · Plan to Open",
      statusPillClass: "border-gold-primary text-gold-primary bg-gold-primary/5"
    },
    {
      icon: "🛠️",
      title: "Developer Utility (Upcoming)",
      desc: "A CLI tool born from our own development workflow frustrations. Will be fully open-sourced on GitHub when ready for public use.",
      statusLabel: "Coming Soon",
      statusPillClass: "border-red-primary text-red-primary bg-red-primary/5"
    },
    {
      icon: "🔒",
      title: "Security Research",
      desc: "Our security engineer actively participates in CTF competitions and security research. Writeups and tools shared publicly.",
      statusLabel: "Active",
      statusPillClass: "border-green-500 text-green-500 bg-green-500/5"
    }
  ];

  return (
    <section id="opensource" className="py-24 bg-transparent border-y border-border-red relative z-10 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-20 items-center">
          
          {/* Left Column */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-6 h-[2px] bg-red-primary" />
              <span className="font-rajdhani text-red-primary uppercase tracking-widest font-semibold text-sm">
                — Open Source —
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="font-bebas text-[3.5rem] md:text-[5rem] leading-[0.95] mb-6 flex flex-col"
            >
              <span className="text-white-soft">We Believe In</span>
              <span className="text-gold-primary">GIVING BACK.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="font-nunito text-gray-mid text-[1rem] leading-[1.75] mb-10 space-y-5"
            >
              <p>
                Not everything we build stays closed. We actively contribute to open source and plan
                to release developer utilities, security tools, and component libraries built from our own
                product development experience.
              </p>
              <p>
                If you've built something useful solving a real problem, we believe the wider developer community
                deserves access to it.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <a href="https://github.com/max-mani" target="_blank" rel="noopener noreferrer" className="shimmer-btn bg-red-primary text-white-soft px-8 py-3.5 rounded font-rajdhani uppercase font-bold tracking-wider text-sm shadow-[0_0_15px_rgba(196,28,28,0.4)] hover:shadow-[0_0_25px_rgba(196,28,28,0.6)] transition-all flex items-center gap-2 group">
                GitHub Profile <ArrowRight size={16} className="-rotate-45 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="https://github.com/max-mani" target="_blank" rel="noopener noreferrer" className="border border-gold-primary text-gold-primary px-8 py-3.5 rounded font-rajdhani uppercase tracking-wider font-bold text-sm hover:bg-gold-primary hover:text-navy-darkest transition-colors flex items-center gap-2 group">
                Star Our Repos <Star size={16} className="group-hover:fill-current" />
              </a>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5">
            {contributions.map((c, i) => (
              <OsCard key={i} {...c} delay={0.2 + i * 0.15} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
