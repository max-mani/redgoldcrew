import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Check, X } from 'lucide-react';
import { Reveal, SectionHeader } from './motion/Reveal';

export default function WhyAayiram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const rows = [
    { label: "Data Entry", trad: "Manual input", tradIcon: <X size={16} className="text-red-primary/50" />, aay: "SMS-Automatic", aayIcon: <Check size={16} className="text-green-500" /> },
    { label: "Consistency", trad: "User-dependent", tradIcon: <X size={16} className="text-red-primary/50" />, aay: "Always-on", aayIcon: <Check size={16} className="text-green-500" /> },
    { label: "Privacy", trad: "Cloud sync", tradIcon: <X size={16} className="text-red-primary/50" />, aay: "100% on-device", aayIcon: <Check size={16} className="text-green-500" /> },
    { label: "Setup Time", trad: "Hours", tradIcon: <X size={16} className="text-red-primary/50" />, aay: "Minutes", aayIcon: <Check size={16} className="text-green-500" /> },
    { label: "Offline Mode", trad: "Limited", tradIcon: <X size={16} className="text-red-primary/50" />, aay: "Fully offline", aayIcon: <Check size={16} className="text-green-500" /> },
    { label: "Automation", trad: "None", tradIcon: <X size={16} className="text-red-primary/50" />, aay: "Merchant rules", aayIcon: <Check size={16} className="text-green-500" /> },
    { label: "Server Required", trad: "Yes", tradIcon: <X size={16} className="text-red-primary/50" />, aay: "No server", aayIcon: <Check size={16} className="text-green-500" /> }
  ];

  const diffs = [
    { icon: "⚡", text: "Instant Financial Awareness" },
    { icon: "🎯", text: "India-First Design" },
    { icon: "🛡️", text: "No Server, No Risk" },
    { icon: "📈", text: "Habit, Not Hassle" }
  ];

  return (
    <section id="why-aayiram" className="py-24 bg-transparent relative z-10 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        
        <SectionHeader
          label="— Why Aayiram —"
          title="Built Different. Built Better."
          description="Traditional expense apps rely on willpower. Aayiram relies on automation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <Reveal direction="left">
          <div className="border border-border-red rounded-xl overflow-hidden bg-navy-dark" style={{ contain: 'paint' }}>
            <div className="grid grid-cols-[3fr_2fr_2fr] border-b border-border-red bg-red-primary/10">
              <div className="p-4 font-rajdhani uppercase text-gray-mid font-bold text-sm tracking-widest">Feature</div>
              <div className="p-4 font-rajdhani uppercase text-gray-mid font-bold text-sm tracking-widest">Traditional Apps</div>
              <div className="p-4 font-rajdhani uppercase text-gold-primary font-bold text-sm tracking-widest flex items-center gap-2 bg-red-primary/10">Aayiram ✦</div>
            </div>
            
            {rows.map((row, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="grid grid-cols-[3fr_2fr_2fr] border-b border-border-red/50 last:border-0 hover:bg-navy-mid transition-colors"
              >
                <div className="p-4 font-nunito text-white-soft text-sm font-semibold">{row.label}</div>
                <div className="p-4 font-nunito text-gray-mid text-sm flex items-center gap-2 opacity-70">
                  {row.tradIcon} {row.trad}
                </div>
                <div className="p-4 font-nunito text-white-soft flex items-center gap-2 font-bold bg-gold-primary/5 text-[0.85rem]">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ type: "spring", delay: 0.5 + i * 0.1 }}
                  >
                    {row.aayIcon}
                  </motion.div>
                  {row.aay}
                </div>
              </motion.div>
            ))}
          </div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
          <div className="flex flex-col gap-4">
            {diffs.map((diff, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="bg-navy-dark border border-border-red rounded-lg p-6 flex items-center gap-4 group hover:-translate-y-1 hover:border-gold-primary/50 transition-all hover:shadow-[0_0_20px_rgba(212,160,23,0.1)]"
              >
                <div className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
                  {diff.icon}
                </div>
                <h4 className="font-rajdhani uppercase text-white-soft text-xl font-bold tracking-wide">
                  {diff.text}
                </h4>
              </motion.div>
            ))}
          </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
