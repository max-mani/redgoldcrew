import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const RoleCard = ({ badgeText, badgeColorStyle, title, typeLabel, desc, skills, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-navy-dark border border-border-red border-l-3 border-l-transparent hover:border-l-gold-primary rounded-xl p-6 relative hover:-translate-y-1 transition-all duration-300 group"
    >
      <div className={`absolute top-5 right-5 ${badgeColorStyle} font-rajdhani uppercase text-[0.65rem] tracking-widest px-2 py-1 rounded flex items-center gap-1.5 font-bold shadow-sm`}>
        {badgeText === "OPEN" && <span className="w-1.5 h-1.5 rounded-full bg-navy-darkest animate-pulse" />}
        {badgeText}
      </div>

      <h4 className="font-rajdhani uppercase text-white-soft font-bold text-[1.1rem] mb-1 pr-16">
        {title}
      </h4>
      
      <div className="font-rajdhani text-gold-primary uppercase tracking-widest text-[0.8rem] mb-4">
        {typeLabel}
      </div>

      <p className="font-nunito text-gray-mid text-[0.95rem] leading-[1.6] mb-5">
        {desc}
      </p>

      <div className="flex flex-wrap gap-2">
        {skills.map((skill: string, idx: number) => (
          <span key={idx} className="font-rajdhani uppercase text-[0.7rem] px-2 py-1 bg-navy-mid border border-white-soft/10 rounded text-gray-mid tracking-wider group-hover:border-border-red transition-colors">
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default function Careers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const roles = [
    {
      badgeText: "OPEN",
      badgeColorStyle: "bg-green-500 text-navy-darkest",
      title: "Android Developer",
      typeLabel: "Full-time · Chennai · Equity",
      desc: "Kotlin-first Android developer who cares about clean architecture, offline-first design, and building apps people actually use daily.",
      skills: ["Kotlin", "Jetpack Compose", "Room", "MVVM"]
    },
    {
      badgeText: "OPEN",
      badgeColorStyle: "bg-green-500 text-navy-darkest",
      title: "Full Stack Developer",
      typeLabel: "Full-time · Chennai · Equity",
      desc: "React + Node.js developer with strong opinions about simplicity. Will work across web products and internal tooling.",
      skills: ["React", "TypeScript", "Node.js", "PostgreSQL"]
    },
    {
      badgeText: "FUTURE",
      badgeColorStyle: "bg-gray-mid text-white-soft opacity-70",
      title: "Product Designer",
      typeLabel: "Future Opening · Chennai",
      desc: "A designer who sweats the details and can't sleep when a flow has unnecessary friction. Figma-first, user-obsessed, privacy-aware.",
      skills: ["Figma", "UX Research", "Design Systems"]
    }
  ];

  return (
    <section id="careers" className="py-24 bg-transparent border-y border-border-red relative z-10 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-20 items-start">
          
          {/* Left Column */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-6 h-[2px] bg-red-primary" />
              <span className="font-rajdhani text-red-primary uppercase tracking-widest font-semibold text-sm">
                — Careers —
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="font-bebas text-[3.5rem] md:text-[5rem] leading-[0.95] mb-8 flex flex-col"
            >
              <span className="text-white-soft">Build Products</span>
              <span className="text-gold-primary">WITH US.</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2 }}
              className="font-nunito text-gray-mid text-[1rem] leading-[1.75] mb-8 space-y-5"
            >
              <p>
                We don't hire for titles or years of experience. We hire for genuine curiosity, the ability to ship working software, and the belief that good products come from caring deeply about the people who use them.
              </p>
              <p>
                RedGoldCrew is small by design. Every person who joins has real ownership, real responsibility, and real impact on what gets built. If you want to spend your career pushing features nobody uses, we're not the right fit.
              </p>
              <p className="text-white-soft font-bold">
                If you want to build products that people genuinely rely on — let's talk.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3 }}
              className="mb-8"
            >
               <h4 className="font-rajdhani text-white-soft uppercase font-bold tracking-widest mb-4">What we look for</h4>
               <ul className="space-y-3 font-nunito text-gray-mid text-[0.95rem]">
                 {["You've built and shipped something real", "You care more about the user than the tech", "You can work independently and own decisions", "Privacy and ethics matter to you by default", "You're based in or willing to relocate to Chennai"].map((item, i) => (
                   <li key={i} className="flex flex-start gap-3">
                     <span className="text-gold-primary pt-0.5">✓</span> {item}
                   </li>
                 ))}
               </ul>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-4"
            >
              <a href="mailto:careers@redgoldcrew.in" className="shimmer-btn bg-red-primary text-white-soft px-8 py-3.5 rounded font-rajdhani uppercase font-bold tracking-wider text-sm shadow-[0_0_15px_rgba(196,28,28,0.4)] hover:shadow-[0_0_25px_rgba(196,28,28,0.6)] transition-all flex items-center gap-2 group">
                See Open Roles <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="mailto:careers@redgoldcrew.in" className="border border-gold-primary text-gold-primary px-8 py-3.5 rounded font-rajdhani uppercase tracking-wider font-bold text-sm hover:bg-gold-primary hover:text-navy-darkest transition-colors flex items-center gap-2 group">
                Email Us Directly <ArrowRight size={16} className="-rotate-45 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-5">
            {roles.map((r, i) => (
              <RoleCard key={i} {...r} delay={0.2 + i * 0.15} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
