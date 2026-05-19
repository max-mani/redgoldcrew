import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Github } from 'lucide-react';

const TeamCard = ({ avatarGradient, initials, name, badgeText, badgeColorStyle, roleTitle, bio, skills, githubLink, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay, type: "spring" }}
      whileHover={{ y: -8, boxShadow: "0 20px 50px rgba(196,28,28,0.2)" }}
      className="bg-navy-dark border border-border-red rounded-[16px] p-8 text-center flex flex-col items-center transition-all duration-300 relative group"
      style={{ perspective: "800px" }}
    >
      <div 
        className="w-[90px] h-[90px] rounded-full flex items-center justify-center mb-5 relative overflow-hidden shadow-lg border-2 border-transparent group-hover:border-gold-primary transition-colors"
        style={{ background: avatarGradient }}
      >
        <span className="font-bebas text-white text-[2.2rem] mt-1 relative z-10">{initials}</span>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
      </div>

      <div className={`font-rajdhani uppercase text-[0.7rem] px-3 py-1 rounded-full mb-3 ${badgeColorStyle} font-bold tracking-widest`}>
        {badgeText}
      </div>

      <h3 className="font-rajdhani uppercase text-white-soft font-bold text-[1.4rem] mb-1">
        {name}
      </h3>
      
      <div className="font-rajdhani text-gold-primary uppercase tracking-widest text-[0.85rem] mb-4">
        {roleTitle}
      </div>

      <p className="font-nunito text-gray-mid text-[0.88rem] leading-[1.6] mb-6 flex-1">
        {bio}
      </p>

      <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6">
        {skills.map((skill: string, idx: number) => (
          <span key={idx} className="bg-navy-mid border border-red-primary px-2 py-0.5 rounded text-gray-mid text-[0.72rem] font-rajdhani uppercase tracking-wider">
            {skill}
          </span>
        ))}
      </div>

      {githubLink && (
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-gray-mid hover:text-gold-primary transition-colors flex items-center justify-center p-2 rounded-full hover:bg-gold-primary/10"
        >
          <Github size={18} />
        </a>
      )}
    </motion.div>
  );
};

export default function Team() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const crew = [
    {
      avatarGradient: "linear-gradient(135deg,#c41c1c,#6b0000)",
      initials: "MM",
      name: "ManiKandan M",
      badgeText: "FOUNDER",
      badgeColorStyle: "bg-red-primary text-white",
      roleTitle: "Full Stack Developer",
      bio: "Leads architecture, product strategy, and engineering for RedGoldCrew. Started the team with one frustration and one idea. Passionate about offline-first systems, privacy architecture, and building tools people actually open every day.",
      skills: ["Kotlin", "React", "Node.js", "Android", "Firebase", "System Design"],
      githubLink: "https://github.com/max-mani"
    },
    {
      avatarGradient: "linear-gradient(135deg,#d4a017,#7a5800)",
      initials: "SY",
      name: "Nanthitha",
      badgeText: "CO-FOUNDER",
      badgeColorStyle: "bg-gold-primary text-navy-darkest",
      roleTitle: "Product Strategist",
      bio: "Co-leads the product vision and company direction at RedGoldCrew. Brings strategic clarity to every product decision — ensuring that what gets built actually solves the problem it set out to solve, for the people it was built for.",
      skills: ["Product Strategy", "Market Research", "User Research", "Business Development", "Planning"]
    },
    {
      avatarGradient: "linear-gradient(135deg,#c41c1c,#d4a017)",
      initials: "MF",
      name: "Mohammad Faizal N",
      badgeText: "DESIGN",
      badgeColorStyle: "bg-gradient-to-r from-red-primary to-gold-primary text-white",
      roleTitle: "UI / UX Designer",
      bio: "Crafts every screen with a single relentless question: what does this user need right now? Believes that great design is invisible — the user achieves their goal without noticing the interface that made it possible. Minimal friction, maximum clarity.",
      skills: ["Figma", "UI Design", "UX Research", "Prototyping", "Design Systems", "Accessibility"]
    },
    {
      avatarGradient: "linear-gradient(135deg,#112038,#c41c1c)",
      initials: "PR",
      name: "Prithev Raj M V",
      badgeText: "SECURITY",
      badgeColorStyle: "bg-[#6b0000] text-white",
      roleTitle: "Cyber Security",
      bio: "Ensures every layer of every RedGoldCrew product is hardened, audited, and private. Oversees the security architecture, data handling design, and ethical SMS processing. The reason Aayiram users can trust that their financial data stays on their device.",
      skills: ["Penetration Testing", "Android Security", "Encryption", "OWASP", "Code Auditing", "CTF"]
    }
  ];

  return (
    <section id="team" className="py-24 bg-transparent relative z-10 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <div className="w-6 h-[2px] bg-red-primary" />
            <span className="font-rajdhani text-red-primary uppercase tracking-widest font-semibold text-sm">
              — The Crew —
            </span>
            <div className="w-6 h-[2px] bg-red-primary" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-[3.5rem] md:text-[5rem] leading-[0.95] mb-6 flex flex-col items-center"
          >
            <span className="text-white-soft">The People</span>
            <span className="text-gold-primary">BEHIND THE PRODUCTS.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="font-nunito text-gray-mid text-[1.1rem] leading-[1.8] max-w-[580px] mx-auto"
          >
            Four people. Four distinct skill sets. One shared belief: that small focused teams build better products than large bureaucratic ones. Meet the crew behind RedGoldCrew and Aayiram.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {crew.map((member, i) => (
            <TeamCard key={i} {...member} delay={0.2 + i * 0.12} />
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="font-nunito text-gray-mid text-[0.9rem] italic max-w-lg mx-auto">
            "We're a lean team by design. Every new person who joins RedGoldCrew must raise the bar — technically, creatively, and ethically."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
