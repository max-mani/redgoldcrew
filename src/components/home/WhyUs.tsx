import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Check, X } from 'lucide-react';

const DiffCard = ({ icon, title, desc, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ x: 40, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: 40, opacity: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="bg-navy-mid border-l-[3px] border-l-red-primary rounded-lg p-5 hover:-translate-y-1 shadow-lg transition-transform duration-300"
    >
      <div className="text-3xl mb-3 grayscale">{icon}</div>
      <h4 className="font-rajdhani uppercase text-white-soft text-[1.05rem] font-bold tracking-wide mb-2">
        {title}
      </h4>
      <p className="font-nunito text-gray-mid text-[0.9rem] leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
};

export default function WhyUs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const rows = [
    { label: "Business Model", trad: "VC-funded", aay: "Bootstrapped" },
    { label: "Data Handling", trad: "Cloud-first", aay: "Device-first" },
    { label: "Feature Priority", trad: "Investor roadmap", aay: "User feedback" },
    { label: "Architecture", trad: "Online dependency", aay: "Offline-first" },
    { label: "Privacy Approach", trad: "Consent checkboxes", aay: "No data collected" },
    { label: "Market Focus", trad: "Global-generic", aay: "India-specific" },
    { label: "Team Size", trad: "Bloated hierarchy", aay: "Small + focused" },
    { label: "Speed to Ship", trad: "Months of planning", aay: "Weeks to launch" }
  ];

  const diffs = [
    { icon: "💡", title: "PROBLEMS OVER TRENDS", desc: "We ignore what's trending on tech Twitter. We focus on problems we can personally feel — and fix permanently with focused engineering." },
    { icon: "🏗️", title: "ARCHITECTURE OVER AESTHETICS", desc: "We invest in good offline-first architecture before we touch the UI. A beautiful app that requires internet is a broken app." },
    { icon: "👥", title: "USERS OVER METRICS", desc: "We don't optimise for DAU or MAU numbers in a dashboard. We optimise for whether a real person's day is genuinely better." },
    { icon: "🔧", title: "MAINTENANCE OVER LAUNCHES", desc: "We don't ship and abandon. Every product we build gets long-term maintenance, updates, and improvements based on real feedback." }
  ];

  return (
    <section id="why-us" className="py-24 bg-transparent border-y border-border-red relative z-10 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        
        {/* Header */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="flex items-center gap-2 mb-4"
          >
            <span className="font-rajdhani text-red-primary uppercase tracking-widest font-semibold text-sm">
              — Why RedGoldCrew —
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-[3.5rem] md:text-[5rem] leading-[0.95] mb-6"
          >
            <span className="text-white-soft block">Not Another</span>
            <span className="text-red-primary text-glow-red block">TECH TEAM.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="font-nunito text-gray-mid text-[1.1rem] leading-relaxed max-w-xl"
          >
            There are thousands of development teams. Here's what makes our approach 
            different — and why it produces better products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-start">
          
          {/* Table */}
          <div className="bg-navy-darkest rounded-xl overflow-hidden border border-border-red shadow-lg">
            <div className="grid grid-cols-[3fr_2fr_2fr] border-b border-border-red bg-red-primary/10">
              <div className="p-4 font-rajdhani uppercase text-gray-mid font-bold text-[0.8rem] tracking-widest">Approach</div>
              <div className="p-4 font-rajdhani uppercase text-gray-mid font-bold text-[0.8rem] tracking-widest">Others</div>
              <div className="p-4 font-rajdhani uppercase text-gold-primary font-bold text-[0.8rem] tracking-widest bg-gold-primary/5">RedGoldCrew ✦</div>
            </div>
            
            {rows.map((row, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`grid grid-cols-[3fr_2fr_2fr] border-b border-border-red/30 last:border-0 ${i % 2 === 0 ? 'bg-navy-darkest' : 'bg-[#0a1222]'} hover:bg-navy-mid transition-colors`}
              >
                <div className="p-4 font-nunito text-white-soft text-sm font-semibold">{row.label}</div>
                <div className="p-4 font-nunito text-gray-mid text-sm flex items-center gap-2 opacity-70">
                  <X size={14} className="text-red-primary/80 shrink-0" /> {row.trad}
                </div>
                <div className="p-4 font-nunito text-white-soft flex items-center gap-2 font-bold bg-gold-primary/5 text-sm">
                  <motion.div
                    initial={{ scale: 0, color: "#fff" }}
                    animate={isInView ? { scale: 1, color: "#22c55e" } : { scale: 0 }}
                    transition={{ type: "spring", delay: 0.4 + i * 0.08 }}
                  >
                    <Check size={14} className="shrink-0 text-gold-primary" />
                  </motion.div>
                  {row.aay}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Differentiators */}
          <div className="flex flex-col gap-5">
            {diffs.map((diff, i) => (
              <DiffCard key={i} {...diff} delay={0.2 + i * 0.15} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
