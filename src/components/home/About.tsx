import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import Logo from '../Logo';
import { Link } from 'react-router-dom';
import { Github } from 'lucide-react';

const PhilCard = ({ icon, title, desc, delay }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 40, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-navy-mid border-l-[3px] border-l-red-primary rounded-lg p-5 hover:-translate-y-1 shadow-lg transition-transform duration-300"
    >
      <h4 className="font-rajdhani uppercase text-white-soft text-[1.1rem] font-bold tracking-wide mb-2 flex items-center gap-2">
        <span>{icon}</span> {title}
      </h4>
      <p className="font-nunito text-gray-mid text-[0.95rem] leading-relaxed">
        {desc}
      </p>
    </motion.div>
  );
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const philosophies = [
    { icon: "🚀", title: "SHIP FAST → LEARN → IMPROVE", desc: "We believe in launching as early as the core experience is solid. Real usage teaches more than any design review ever could." },
    { icon: "🎯", title: "UTILITY FIRST, ALWAYS", desc: "Every feature in every product must pass one test: does this genuinely make the user's experience better? If not, it doesn't ship." },
    { icon: "🔒", title: "OFFLINE FIRST, PRIVACY ALWAYS", desc: "We design every product to work perfectly offline before we add connectivity. It forces better architecture and better privacy." },
    { icon: "🌏", title: "INDIA FIRST, WORLD READY", desc: "We build for the specific realities of Indian users — their banks, their internet, their workflows — with architecture designed to scale far beyond India when the time comes." }
  ];

  return (
    <section id="about" className="py-24 bg-transparent border-y border-border-red relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-16 lg:gap-20 items-start">
          
          {/* Left Column */}
          <div className="flex flex-col items-center lg:items-start lg:sticky lg:top-32">
            <div className="relative">
              {/* Blurred red radial circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] h-[320px] bg-red-primary/20 blur-3xl rounded-full z-0 pointer-events-none" />
              
              <motion.div
                whileHover={{ scale: 1.04, transition: { type: "spring", stiffness: 300 } }}
                className="relative z-10"
              >
                <Logo
                  className="w-[200px] h-[200px] lg:w-[300px] lg:h-[300px] rounded-2xl drop-shadow-[0_0_30px_rgba(196,28,28,0.35)]"
                  glow={true}
                />
              </motion.div>
            </div>

            <div className="bg-navy-mid border border-red-primary rounded-xl p-5 mt-8 w-full max-w-[300px]">
              <div className="flex items-center gap-3 mb-3 font-nunito text-gray-mid text-[0.9rem]">
                <span>📍</span> Chennai, Tamil Nadu, India
              </div>
              <div className="flex items-center gap-3 mb-3 font-nunito text-gray-mid text-[0.9rem]">
                <span>🗓️</span> Founded · 2024
              </div>
              <div className="flex items-center gap-3 font-nunito text-gray-mid text-[0.9rem]">
                <span>🔗</span> 
                <a href="https://github.com/max-mani" target="_blank" rel="noopener noreferrer" className="hover:text-gold-primary transition-colors hover:underline">
                  github.com/max-mani
                </a>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div ref={ref}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-6 h-[2px] bg-red-primary" />
              <span className="font-rajdhani text-red-primary uppercase tracking-widest font-semibold text-sm">
                — About RedGoldCrew —
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="font-bebas text-[3.5rem] md:text-[5rem] leading-[0.95] mb-8"
            >
              <span className="text-white-soft block">Builders Who</span>
              <span className="text-gold-primary text-glow-gold block">SHIP.</span>
            </motion.h2>

            <motion.div 
               initial={{ opacity: 0, y: 20 }}
               animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
               transition={{ delay: 0.2 }}
               className="space-y-6 font-nunito text-gray-mid text-[1rem] leading-[1.75] mb-12 max-w-2xl"
            >
              <p>
                RedGoldCrew is a product-focused software development organisation founded in Chennai, Tamil Nadu in 2024. We are a small, tightly-knit team of engineers, designers, and security specialists who share one obsession: building digital products that people actually rely on.
              </p>
              <p>
                The name RedGoldCrew comes from our identity — red for the relentless drive to ship, gold for the standard of quality we hold our work to, and crew because we build as a unit, not as individuals. Every product carries all three.
              </p>
              <p>
                We are bootstrapped by choice. No outside funding means no outside pressure to compromise on privacy, add unnecessary features, or rush a product to market before it's ready. We answer only to our users — and that keeps us honest.
              </p>
              <p>
                Our first product, Aayiram, is a smart SMS-based personal finance tracker for Android. It was born from a simple observation: nearly everyone we knew had no clear picture of where their money went each month. We built the simplest possible fix. More products are being built on the same principle.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {philosophies.map((p, i) => (
                <PhilCard key={i} {...p} delay={0.3 + i * 0.1} />
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
