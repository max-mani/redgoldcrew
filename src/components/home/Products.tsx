import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

export default function Products() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pipeline = [
    {
      num: "02",
      statusBadge: "🔴 IN DEVELOPMENT",
      icon: "🌐",
      name: "Web Platform",
      cat: "Web App · Full Stack",
      desc: "A web-based productivity tool currently in active development by the RedGoldCrew team. Details will be announced when we're closer to a public beta. Building quietly — shipping loudly.",
      tags: ["Web", "React", "Coming 2025"]
    },
    {
      num: "03",
      statusBadge: "🟡 PLANNING",
      icon: "📱",
      name: "Second Android App",
      cat: "Android · Kotlin",
      desc: "Our second Android application is in the planning phase. Like Aayiram, it will be privacy-first and offline-capable. Solving a problem in a completely different domain.",
      tags: ["Android", "Kotlin", "Planning"]
    },
    {
      num: "04",
      statusBadge: "⚪ IDEATION",
      icon: "🛠️",
      name: "Developer Utility",
      cat: "Open Source · CLI Tool",
      desc: "A command-line or developer-facing tool we're in early ideation for. Born from frustrations we face in our own development workflow. Will be open-sourced on GitHub when ready.",
      tags: ["Open Source", "CLI", "Ideation"]
    }
  ];

  return (
    <section id="products" className="py-24 bg-transparent border-y border-border-red relative z-10 px-6">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="w-6 h-[1px] bg-red-primary" />
            <span className="font-rajdhani text-red-primary uppercase tracking-widest font-semibold text-sm">
              — Our Products —
            </span>
            <div className="w-6 h-[1px] bg-red-primary" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-5xl md:text-6xl text-white-soft mb-6 flex flex-col items-center leading-[1]"
          >
            <span className="text-white-soft">What We've</span>
            <span className="text-gold-primary">Built So Far.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2 }}
            className="font-nunito text-gray-mid text-[1.1rem] max-w-[600px] leading-relaxed mx-auto"
          >
            Every product we ship starts with a frustration — something we or people around us deal with
            daily that no existing tool handles well. Here's what we've built and what we're building next.
          </motion.p>
        </div>

        {/* FLAGSHIP: AAYIRAM */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="max-w-[960px] mx-auto bg-navy-dark border border-gold-primary/30 hover:border-gold-primary rounded-2xl p-8 md:p-10 mb-20 transition-all duration-500 overflow-hidden relative group shadow-[0_0_20px_rgba(212,160,23,0.1)] hover:shadow-[0_0_40px_rgba(212,160,23,0.2)]"
        >
          {/* BG animated glow on hover */}
          <div className="absolute inset-x-0 -top-20 h-[100px] bg-gold-primary/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

          <div className="absolute top-2 left-6 text-white text-[8rem] sm:text-[10rem] font-bebas opacity-[0.04] leading-none pointer-events-none select-none overflow-hidden">
            01
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 relative z-10">
            {/* Left Col - App Info */}
            <div className="flex flex-col items-start justify-center pt-4">
              
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-green-500/20 border border-green-500 text-green-500 font-rajdhani font-bold px-3 py-1 text-xs uppercase tracking-wider rounded flex items-center gap-1.5 shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> LIVE
                </span>
                <span className="border border-red-primary text-red-primary font-rajdhani font-bold px-3 py-1 text-xs uppercase tracking-wider rounded">
                  📱 Android
                </span>
                <span className="border border-gold-primary text-gold-primary font-rajdhani font-bold px-3 py-1 text-xs uppercase tracking-wider rounded">
                  💰 Personal Finance
                </span>
                <span className="border border-red-primary text-gold-primary font-rajdhani font-bold px-3 py-1 text-xs uppercase tracking-wider rounded">
                  🇮🇳 India
                </span>
              </div>

              <h3 className="font-bebas text-[4.5rem] md:text-[5.5rem] leading-[1] mb-2 bg-gradient-to-r from-red-primary to-gold-primary bg-clip-text text-transparent">
                AAYIRAM
              </h3>
              
              <div className="font-rajdhani uppercase text-gold-primary font-bold text-[1rem] tracking-[0.1em] mb-4">
                Your Bank SMS. Your Financial Story.
              </div>

              <p className="font-nunito text-gray-mid text-[1rem] leading-[1.7] mb-6 max-w-lg">
                Aayiram is a smart personal finance tracker for Android that reads your bank transaction SMS
                messages and automatically builds your complete financial picture. No manual entry. No cloud
                uploads. No privacy compromise.<br/><br/>
                Most people earn money but have no idea where it actually goes. Aayiram fixes that — silently,
                automatically, and entirely on your device.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 w-full max-w-lg">
                {[
                  "SMS Auto-Detection", "Smart Ledger", "Visual Analytics", 
                  "Merchant Automation", "Multi-Account Support", "Encrypted Backup"
                ].map((ft, i) => (
                  <div key={i} className="flex items-center gap-2 font-nunito text-[0.9rem] text-white-soft">
                    <span className="text-green-500 text-sm font-bold">✓</span> {ft}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-auto">
                <Link to="/aayiram" className="shimmer-btn bg-red-primary text-white-soft px-8 py-3.5 rounded font-rajdhani uppercase font-bold tracking-wider text-sm shadow-[0_0_15px_rgba(196,28,28,0.4)] hover:shadow-[0_0_25px_rgba(196,28,28,0.6)] transition-all">
                  Visit Aayiram ↗
                </Link>
                <Link to="/aayiram" className="border border-gold-primary text-gold-primary px-8 py-3.5 rounded font-rajdhani uppercase tracking-wider font-bold text-sm hover:bg-gold-primary hover:text-navy-darkest transition-colors">
                  App Features →
                </Link>
              </div>

            </div>

            {/* Right Col - CSS Phone Mockup */}
            <div className="hidden lg:flex items-center justify-center relative">
               <div className="absolute inset-0 bg-red-primary/10 blur-[80px] rounded-full z-0" />
               <motion.div 
                 animate={{ y: [0, -12, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                 className="w-[200px] h-[380px] rounded-[2.5rem] bg-navy-dark border-2 border-white-soft/10 p-[6px] shadow-[0_20px_40px_rgba(0,0,0,0.6)] relative z-10"
               >
                 <div className="w-full h-full rounded-[2rem] bg-navy-darkest overflow-hidden relative flex flex-col">
                   {/* Top Notch Area */}
                   <div className="absolute top-0 inset-x-0 h-4 flex justify-center z-20">
                     <div className="w-16 h-full bg-navy-dark rounded-b-md" />
                   </div>
                   
                   {/* Screen Content */}
                   <div className="pt-8 px-3 flex-1 flex flex-col">
                     <div className="font-rajdhani text-white-soft text-xs mb-1 uppercase tracking-wider pl-1">Aayiram</div>
                     <div className="font-bebas text-3xl text-gold-primary tracking-wide mb-1">₹ 45,230</div>
                     <div className="font-nunito text-gray-mid text-[8px] italic mb-3 pl-0.5">Net Worth · Updated just now</div>
                     
                     <div className="w-full h-[1px] bg-red-primary mb-3" />
                     
                     {/* Mini Chart */}
                     <div className="flex items-end gap-1 h-12 mb-4 border-b border-white-soft/10 pb-1">
                       {[30, 60, 45, 80].map((h, i) => (
                         <div key={i} className={`flex-1 rounded-t-sm ${i % 2 === 0 ? 'bg-red-primary' : 'bg-green-500'}`} style={{ height: `${h}%` }} />
                       ))}
                     </div>

                     <div className="flex flex-col gap-2.5">
                       {[
                         { m: "Swiggy", a: "₹340", d: "Today", green: false },
                         { m: "Salary", a: "₹42,000", d: "Jun 1", green: true },
                         { m: "Amazon", a: "₹1,299", d: "Yesterday", green: false }
                       ].map((tx, i) => (
                         <div key={i} className="flex justify-between items-center bg-navy-mid/60 p-1.5 rounded">
                           <div className="flex flex-col">
                             <span className="font-nunito text-white-soft text-[10px] whitespace-nowrap">{tx.m}</span>
                             <span className="font-nunito text-gray-mid text-[8px]">{tx.d}</span>
                           </div>
                           <span className={`font-bebas text-sm ${tx.green ? 'text-green-500' : 'text-red-primary'}`}>
                             {tx.a}
                           </span>
                         </div>
                       ))}
                     </div>
                   </div>

                   {/* Nav Bar */}
                   <div className="h-10 border-t border-white-soft/5 flex items-center justify-between px-4 bg-navy-dark/50">
                     <div className="w-4 h-4 rounded-full border border-red-primary" />
                     <div className="w-4 h-4 rounded shadow-[0_0_0_1px_var(--color-gray-mid)]" />
                     <div className="w-4 h-4 rounded-full border border-gray-mid" />
                     <div className="w-4 h-4 rounded-[4px] border border-gray-mid" />
                   </div>
                 </div>
               </motion.div>
            </div>
          </div>
        </motion.div>

        {/* COMING NEXT PIPELINE */}
        <div className="mt-8">
          <motion.h4 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-rajdhani uppercase text-gold-primary font-bold text-center tracking-widest text-sm mb-10"
          >
            — What's Coming Next —
          </motion.h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pipeline.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-navy-dark border hover:border-solid border-dashed border-border-red rounded-xl p-7 opacity-80 hover:opacity-100 hover:border-red-primary transition-all duration-300 hover:-translate-y-1 relative group overflow-hidden"
              >
                <div className="absolute top-4 -right-8 bg-red-primary text-white-soft font-rajdhani font-bold px-8 py-1 uppercase text-[10px] tracking-widest rotate-45 z-10 shadow-lg">
                  {p.statusBadge.split(' ')[1]}
                </div>

                <div className="font-bebas text-6xl text-white opacity-[0.04] absolute top-2 left-4 pointer-events-none select-none z-0">
                  {p.num}
                </div>

                <div className="relative z-10">
                  <div className="w-11 h-11 rounded-full border border-red-primary flex items-center justify-center text-xl mb-4 bg-navy-darkest group-hover:border-gold-primary transition-colors">
                    {p.icon}
                  </div>
                  
                  <h4 className="font-rajdhani uppercase text-white-soft font-bold text-[1.2rem] mb-1">
                    {p.name}
                  </h4>
                  <div className="font-rajdhani text-gold-primary uppercase tracking-wider text-[0.8rem] mb-4">
                    {p.cat}
                  </div>
                  
                  <p className="font-nunito text-gray-mid text-[0.9rem] leading-[1.6] mb-6">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto">
                    {p.tags.map((t, idx) => (
                      <span key={idx} className="font-rajdhani uppercase text-[10px] px-2 py-1 bg-navy-mid border border-white-soft/10 rounded text-gray-mid tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
