import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Check } from 'lucide-react';

export default function Privacy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const points = [
    "SMS processed entirely on your device",
    "No personal messages are accessed or read",
    "No data uploaded without your explicit action",
    "Full offline operation — no internet required",
    "PIN lock keeps your ledger private",
    "Google Drive backup is optional and encrypted"
  ];

  return (
    <section id="privacy" className="py-24 bg-gradient-to-b from-navy-dark to-navy-mid border-y border-border-red relative z-10 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" ref={ref}>
        
        {/* Left */}
        <div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="font-bebas text-[clamp(3.5rem,5vw,4.5rem)] text-gold-primary text-glow-gold mb-8 leading-[0.9]"
          >
            🔐 Your Data.<br/>Your Rules.
          </motion.h2>

          <div className="flex flex-col gap-4">
            {points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-3 group"
              >
                <div className="mt-1 shrink-0 w-5 h-5 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <Check size={12} strokeWidth={4} />
                </div>
                <span className="font-nunito text-white-soft text-[1.05rem] font-semibold">{p}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right */}
        <div className="relative flex justify-center">
          <motion.div 
             animate={{ rotate: 360, scale: [1, 1.05, 1] }} 
             transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
             className="absolute inset-[10%] bg-gold-primary/10 blur-[80px] rounded-full z-0" 
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="border border-border-gold bg-navy-darkest/80 backdrop-blur-md p-8 md:p-12 rounded-2xl relative z-10 shadow-[0_0_40px_rgba(212,160,23,0.15)]"
          >
            <div className="text-6xl font-serif text-gold-primary opacity-20 absolute top-4 left-6 leading-none">
              "
            </div>
            <p className="font-nunito text-gray-mid text-lg md:text-xl leading-relaxed italic mb-8 relative z-10 pt-4">
              Your data stays yours. Always. We process everything on your device so you can have 
              complete financial clarity without sacrificing a single byte of privacy.
            </p>
            <div className="font-rajdhani uppercase text-gold-primary font-bold tracking-widest border-t border-white-soft/10 pt-4 flex items-center gap-2">
              <span className="w-4 h-[2px] bg-gold-primary inline-block"></span>
              Aayiram Privacy Principle
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
