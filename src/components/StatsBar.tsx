import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

const StatItem = ({ num, label, value, description }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      if (value === "₹0") { setCount(0); return; } // No animation for 0 just display
      if (value === "100%") {
        let sc = 0;
        const i = setInterval(() => { sc += (100 / 30); if(sc >= 100) { sc = 100; clearInterval(i); } setCount(Math.floor(sc)); }, 30);
        return () => clearInterval(i);
      }
      if (value === "1-Tap") { setCount(1); return; }
    }
  }, [isInView, value]);

  const displayValue = value === "₹0" ? "₹0" : value === "100%" ? `${count}%` : value === "1-Tap" ? "1-Tap" : value;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: num * 0.1 }}
      className="flex flex-col items-center justify-center p-8 border-b md:border-b-0 md:border-r border-border-red last:border-b-0 last:border-r-0 group cursor-default"
    >
      <div className="font-bebas text-5xl md:text-6xl bg-gradient-to-br from-red-primary to-gold-primary bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300 pointer-events-none">
        {displayValue}
      </div>
      <div className="font-rajdhani uppercase text-gray-mid tracking-widest text-[0.85rem] text-center font-bold">
        <span className="block text-white-soft mb-0.5">{label}</span>
        {description}
      </div>
    </motion.div>
  );
};

export default function StatsBar() {
  return (
    <section className="w-full bg-navy-dark border-y border-border-red relative z-10">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-border-red">
        <StatItem num={0} value="₹0" label="Cost to Start" description="Forever Free" />
        <StatItem num={1} value="100%" label="On-Device" description="Zero Upload" />
        <StatItem num={2} value="1-Tap" label="Add Entry" description="Instantly" />
        <StatItem num={3} value="Offline" label="Offline First" description="No Internet" />
      </div>
    </section>
  );
}
