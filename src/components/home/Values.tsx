import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const ValueCard = ({ num, title, icon, desc, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-navy-dark border border-border-red rounded-[14px] p-8 relative hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(196,28,28,0.15)] transition-all duration-300 group overflow-hidden"
    >
      {/* Top Gradient Line */}
      <div className="absolute top-0 inset-x-0 h-[3px] bg-gradient-to-r from-red-primary to-gold-primary rounded-t-[14px] opacity-70 group-hover:opacity-100 transition-opacity" />

      <div className="font-bebas text-red-primary text-[2rem] opacity-30 absolute top-4 right-6 group-hover:opacity-60 transition-opacity">
        {num}
      </div>

      <div className="text-3xl mb-5 mt-2 grayscale group-hover:grayscale-0 transition-all duration-300 drop-shadow-md">
        {icon}
      </div>

      <h3 className="font-rajdhani uppercase text-white-soft text-[1.2rem] font-bold tracking-widest mb-3 pr-8">
        {title}
      </h3>

      <p className="font-nunito text-gray-mid text-[0.95rem] leading-[1.6]">
        {desc}
      </p>
    </motion.div>
  );
};

export default function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const valuesData = [
    { num: "01", icon: "👥", title: "PEOPLE BEFORE METRICS", desc: "We don't track monthly active users to impress anyone. We track whether individual users' lives are measurably better because of what we built. A product used daily by 1,000 people who genuinely need it beats one installed by 100,000 who forget it exists." },
    { num: "02", icon: "🔐", title: "PRIVACY IS ARCHITECTURE", desc: "Privacy isn't a compliance checkbox or a setting in preferences. It's an architectural decision made before the first line of code is written. Every RedGoldCrew product is designed so that we literally cannot access your data — because we never receive it." },
    { num: "03", icon: "✂️", title: "SIMPLICITY IS HARD WORK", desc: "Adding features is easy. Removing them is discipline. Building something that does one thing perfectly — without unnecessary complexity — takes more thought, more iteration, and more restraint than building a feature factory ever does. We choose hard." },
    { num: "04", icon: "🇮🇳", title: "INDIA IS NOT AN AFTERTHOUGHT", desc: "Too many apps treat India as a secondary market — same product, smaller fonts, worse support. We build for Indian infrastructure, Indian banks, Indian internet speeds, and Indian workflows from the very first line of code." },
    { num: "05", icon: "🚀", title: "SHIP OR IT DOESN'T EXIST", desc: "A product sitting in development is not a product. It's a hypothesis. We ship as soon as the core experience is solid, then improve constantly based on what real users actually do — not what we assumed they would do." },
    { num: "06", icon: "🤝", title: "SMALL TEAM. FULL OWNERSHIP.", desc: "Every person on the RedGoldCrew team has full context on every product decision. No silos. No handoffs. No 'that's not my department.' We all own the outcome equally because we all built it together." }
  ];

  return (
    <section id="values" className="py-24 bg-transparent relative z-10 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="mb-16 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-6 h-[2px] bg-red-primary" />
             <span className="font-rajdhani text-red-primary uppercase tracking-widest font-semibold text-sm">
              — What We Believe —
            </span>
            <div className="w-6 h-[2px] bg-red-primary" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-[3.5rem] md:text-[4.5rem] leading-[1] mb-6 flex flex-col items-center"
          >
            <span className="text-white-soft">The Principles</span>
            <span className="text-gold-primary">WE BUILD ON.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="font-nunito text-gray-mid text-[1.1rem] leading-[1.8] max-w-[560px] mx-auto"
          >
            These aren't corporate values written for an investor deck. They're the actual beliefs that guide every product decision we make.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {valuesData.map((v, i) => (
            <ValueCard key={i} {...v} delay={0.2 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
