import { motion, useInView } from 'motion/react';
import { useRef, ReactNode } from 'react';
import { Check } from 'lucide-react';

const PlanFeature = ({ children }: { children: ReactNode }) => (
  <div className="flex items-start gap-3 mb-3">
    <div className="mt-1 shrink-0 bg-green-500/20 text-green-500 rounded-full p-0.5">
      <Check size={12} strokeWidth={4} />
    </div>
    <span className="font-nunito text-gray-mid text-[0.95rem] font-semibold">{children}</span>
  </div>
);

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-24 bg-transparent relative z-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col items-center" ref={ref}>
        
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="font-rajdhani text-gold-primary uppercase tracking-widest font-semibold text-sm">
              — Pricing —
            </span>
          </div>
          <h2 className="font-bebas text-5xl md:text-6xl text-white-soft mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="font-nunito text-gray-mid text-[1.1rem] max-w-2xl leading-relaxed">
            Start free forever. Upgrade when ready.
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-[840px]"
        >
          {/* FREE PLAN */}
          <div className="bg-navy-dark border border-border-red rounded-xl p-8 flex flex-col relative">
            <h3 className="font-bebas text-4xl text-white-soft mb-2">Free</h3>
            <div className="font-rajdhani uppercase text-red-primary font-bold tracking-widest mb-6">
              <span className="font-bebas text-5xl text-glow-red">₹0</span>
              <span className="text-gray-mid ml-2 lowercase tracking-normal text-sm font-nunito">/Forever free</span>
            </div>
            
            <div className="flex-grow mb-8 flex flex-col">
              <PlanFeature>SMS transaction detection</PlanFeature>
              <PlanFeature>Full ledger (daily & monthly)</PlanFeature>
              <PlanFeature>Income, expense & transfer tracking</PlanFeature>
              <PlanFeature>Basic charts and analytics</PlanFeature>
              <PlanFeature>Single account management</PlanFeature>
              <PlanFeature>Categories and subcategories</PlanFeature>
              <PlanFeature>Ad-supported</PlanFeature>
            </div>

            <button className="w-full py-4 rounded border border-gold-primary text-gold-primary font-rajdhani uppercase font-bold tracking-wider hover:bg-gold-primary hover:text-navy-darkest transition-colors mt-auto text-sm">
              Download Free
            </button>
          </div>

          {/* PREMIUM PLAN */}
          <div className="relative rounded-xl p-[2px] overflow-hidden group">
            {/* Animated border using conic gradient */}
            <div className="absolute inset-[-50%] animate-[spin_4s_linear_infinite] opacity-50 group-hover:opacity-100 transition-opacity" 
                 style={{ background: 'conic-gradient(from 0deg, transparent 0 340deg, var(--color-gold-primary) 360deg)' }} />
            
            <div className="bg-navy-dark border border-transparent h-full rounded-[10px] p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-5 -right-10 bg-gold-primary text-navy-darkest font-rajdhani font-bold px-10 py-1 uppercase text-[11px] tracking-widest rotate-45 shadow-lg">
                Recommended
              </div>

              <h3 className="font-bebas text-4xl text-gold-primary mb-2">Premium</h3>
              <div className="font-rajdhani uppercase text-gold-primary font-bold tracking-widest mb-6">
                <span className="font-bebas text-5xl text-glow-gold">₹99</span>
                <span className="text-gray-mid ml-2 lowercase tracking-normal text-sm font-nunito">/month, cancel anytime</span>
              </div>
              
              <div className="flex-grow mb-8 flex flex-col">
                <PlanFeature><span className="text-white-soft">Everything in Free</span></PlanFeature>
                <PlanFeature>Remove all ads</PlanFeature>
                <PlanFeature>Google Drive encrypted backup</PlanFeature>
                <PlanFeature>Advanced analytics & insights</PlanFeature>
                <PlanFeature>Multi-account management</PlanFeature>
                <PlanFeature>Smart automation rules</PlanFeature>
                <PlanFeature>Predictive spending insights</PlanFeature>
                <PlanFeature>Priority support</PlanFeature>
              </div>

              <button className="shimmer-btn w-full py-4 rounded bg-red-primary text-white-soft font-rajdhani uppercase font-bold tracking-wider mt-auto text-sm shadow-[0_0_15px_rgba(196,28,28,0.4)]">
                Go Premium
              </button>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
