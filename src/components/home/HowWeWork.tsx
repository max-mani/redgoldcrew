import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

const ProcessStep = ({ num, title, desc, delay }: { num: string, title: string, desc: string, delay: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ x: -40, opacity: 0 }}
      animate={isInView ? { x: 0, opacity: 1 } : { x: -40, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
      className="flex relative pl-10 group"
    >
      <div className="absolute left-[-16px] top-1 bg-navy-darkest border-2 border-red-primary w-8 h-8 rounded-full flex items-center justify-center font-rajdhani font-bold text-sm text-red-primary z-10 group-hover:bg-red-primary group-hover:text-white-soft transition-colors shadow-[0_0_10px_rgba(196,28,28,0.5)]">
        {num}
      </div>
      <div className="flex flex-col">
        <div className="font-bebas text-3rem text-red-primary opacity-30 leading-none absolute -top-4 -left-12 -z-10 group-hover:opacity-50 transition-opacity">
          {num}
        </div>
        <h3 className="font-rajdhani uppercase text-white-soft text-[1.05rem] font-bold tracking-wide mb-2 pt-1">
          {title}
        </h3>
        <p className="font-nunito text-gray-mid text-[0.9rem] leading-[1.6] max-w-lg">
          {desc}
        </p>
      </div>
    </motion.div>
  );
};

export default function HowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    { num: "01", title: "FIND THE FRUSTRATION", desc: "Every product at RedGoldCrew begins with a real frustration. Not a market analysis or a trend report — a genuine daily problem that makes someone's life harder than it needs to be." },
    { num: "02", title: "VALIDATE THE PAIN", desc: "We talk to people. We watch how they currently cope with the problem — spreadsheets, paper notes, mental math, multiple apps. If the workaround is painful, the opportunity is real." },
    { num: "03", title: "DESIGN THE SIMPLEST SOLUTION", desc: "What's the minimum viable experience that makes the problem go away? We sketch, prototype, and cut until only the essential remains. No feature survives without a clear reason to exist." },
    { num: "04", title: "BUILD OFFLINE-FIRST", desc: "We write the app to work perfectly without internet before we add anything else. Connectivity is a bonus, not a requirement. This forces cleaner architecture and better privacy by default." },
    { num: "05", title: "SHIP AND LISTEN", desc: "We launch as soon as the core experience is solid. Real users reveal things no prototype ever shows. We read every review, every support message, and every GitHub issue with full attention." },
    { num: "06", title: "ITERATE RELENTLESSLY", desc: "The first version is never the best version. We iterate based on real feedback, adding only what genuinely improves the experience. Removing features is as important as adding them." }
  ];

  return (
    <section id="how-we-work" className="py-24 bg-transparent relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20 text-center" ref={ref}>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="font-rajdhani uppercase text-gold-primary tracking-widest font-bold text-sm">
              — How We Work —
            </span>
          </motion.div>
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.1 }}
            className="font-bebas text-[3.5rem] md:text-[4.5rem] leading-[1] mb-6 flex flex-col items-center"
          >
            <span className="text-white-soft">From Frustration</span>
            <span className="text-gold-primary">TO SHIPPED PRODUCT.</span>
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="font-nunito text-gray-mid text-[1.1rem] leading-[1.8] max-w-[580px] mx-auto"
          >
            We don't start with technology. We start with a problem we've personally 
            experienced — or watched someone struggle with — until we can't ignore it 
            anymore. Then we build.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          
          {/* Left - Steps */}
          <div className="relative border-l-2 border-red-primary/30 border-dotted py-4 pl-4 space-y-12">
            {steps.map((s, i) => (
              <ProcessStep key={i} {...s} delay={i * 0.15} />
            ))}
          </div>

          {/* Right - Philosophy Card */}
          <div className="lg:pl-8">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-navy-dark border border-gold-primary rounded-2xl p-8 lg:p-10 sticky top-32 shadow-[0_10px_40px_rgba(212,160,23,0.1)]"
            >
              <div className="font-bebas text-[8rem] text-gold-primary opacity-15 leading-none absolute -top-4 -left-2 select-none">
                "
              </div>
              
              <div className="relative z-10 mb-8">
                <p className="font-nunito italic text-white-soft text-[1.1rem] leading-[1.7] mb-6">
                  "The best product isn't the one with the most features. It's the one 
                  people open every day because it genuinely makes their life better. 
                  That's the only metric that matters to us."
                </p>
                <div className="font-rajdhani uppercase text-gold-primary font-bold tracking-widest text-[0.85rem]">
                  — RedGoldCrew Build Philosophy
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-border-gold">
                <div>
                  <div className="font-bebas text-4xl bg-gradient-to-r from-red-primary to-gold-primary bg-clip-text text-transparent">6</div>
                  <div className="font-nunito text-gray-mid text-[0.8rem] leading-tight mt-1">Avg. weeks from idea to ship</div>
                </div>
                <div>
                  <div className="font-bebas text-4xl bg-gradient-to-r from-red-primary to-gold-primary bg-clip-text text-transparent">0</div>
                  <div className="font-nunito text-gray-mid text-[0.8rem] leading-tight mt-1">Features added without user evidence</div>
                </div>
                <div>
                  <div className="font-bebas text-4xl bg-gradient-to-r from-red-primary to-gold-primary bg-clip-text text-transparent">100%</div>
                  <div className="font-nunito text-gray-mid text-[0.8rem] leading-tight mt-1">Products built offline-first</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
