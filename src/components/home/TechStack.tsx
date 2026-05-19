import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const TechCard = ({ cat, pills, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-navy-dark border border-border-red rounded-xl p-6 hover:border-red-primary transition-colors"
    >
      <h3 className="font-rajdhani uppercase text-gold-primary font-bold text-[0.85rem] tracking-[0.1em] border-b border-border-red pb-2 mb-4">
        {cat}
      </h3>
      <div className="flex flex-wrap gap-2">
        {pills.map((pill: string, i: number) => (
          <div 
            key={i} 
            className="bg-navy-mid border border-border-red rounded-md px-2.5 py-1 font-rajdhani uppercase text-white-soft text-[0.8rem] hover:border-gold-primary hover:text-gold-primary transition-colors cursor-default"
          >
            {pill}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = [
    {
      cat: "ANDROID DEVELOPMENT",
      pills: ["Kotlin", "Jetpack Compose", "MVVM", "Room Database", "WorkManager", "Navigation Component", "Firebase Auth", "Hilt / Dagger", "Coroutines", "Flow"]
    },
    {
      cat: "WEB DEVELOPMENT",
      pills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Node.js", "Express", "PostgreSQL", "Prisma", "Vercel", "Supabase"]
    },
    {
      cat: "SECURITY & PRIVACY",
      pills: ["AES-256 Encryption", "Android Keystore", "Biometric Auth", "Certificate Pinning", "ProGuard / R8", "OWASP Guidelines", "End-to-End Encryption", "Zero-Knowledge Design"]
    },
    {
      cat: "DESIGN & TOOLING",
      pills: ["Figma", "Git / GitHub", "VS Code", "Android Studio", "Postman", "Cursor IDE", "Linear", "Notion", "Firebase Analytics", "Google Play Console"]
    }
  ];

  return (
    <section id="stack" className="py-24 bg-transparent relative z-10 px-6">
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
              — Technology —
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-[3.5rem] md:text-[4.5rem] leading-[1] mb-6 flex flex-col items-center"
          >
            <span className="text-white-soft">Tools We</span>
            <span className="text-gold-primary">ACTUALLY USE.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="font-nunito text-gray-mid text-[1.1rem] leading-[1.8] max-w-[560px] mx-auto"
          >
            We're technology-pragmatic. We use whatever gives our users the best experience — 
            not whatever is popular on Hacker News this week. Here's our current working stack.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((c, i) => (
            <TechCard key={i} {...c} delay={0.2 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
