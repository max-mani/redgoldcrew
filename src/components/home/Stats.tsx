import { useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { Reveal } from '../motion/Reveal';

const CountUpObj = ({ end, delay = 0 }: { end: number, delay?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        let startTime: number;
        const duration = 2000;
        const start = 0;
        
        const step = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = Math.min((timestamp - startTime) / duration, 1);
          // ease-out-cubic
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(easeProgress * (end - start) + start));
          
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            setCount(end);
          }
        };
        requestAnimationFrame(step);
      }, delay);
    }
  }, [isInView, end, delay]);

  return <span ref={ref}>{count}</span>;
};

export default function Stats() {
  const stats = [
    { num: 1, suffix: "+", label: "PRODUCTS LIVE", sub: "Android app live on Play Store" },
    { num: 3, suffix: "+", label: "IN DEVELOPMENT", sub: "Across web and mobile" },
    { num: 4, suffix: "", label: "TEAM MEMBERS", sub: "Engineers, designers, security" },
    { num: 100, suffix: "%", label: "PRIVACY COMMITMENT", sub: "Zero server-side user data" },
    { num: 2024, suffix: "", label: "YEAR FOUNDED", sub: "Chennai, Tamil Nadu, India" },
    { num: 0, suffix: "", label: "OUTSIDE FUNDING", sub: "Bootstrapped and proud" }
  ];

  return (
    <section className="w-full bg-transparent border-y border-border-red relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 divide-y-0 divide-x divide-border-red/50 w-full border-b border-border-red/50 lg:border-b-0">
        {stats.map((stat, i) => (
          <Reveal
            key={i}
            delay={i * 0.07}
            direction="up"
            className="group flex flex-col items-center justify-center p-8 border-b lg:border-b-0 border-border-red/50 hover:border-gold-primary transition-colors cursor-default hover:-translate-y-[2px] bg-navy-dark relative"
          >
            <div className="font-bebas text-[3.8rem] leading-none mb-2 bg-gradient-to-br from-red-primary to-gold-primary bg-clip-text text-transparent group-hover:scale-105 transition-transform">
              <CountUpObj end={stat.num} delay={i * 100} />{stat.suffix}
            </div>
            <div className="font-rajdhani uppercase text-gray-mid tracking-widest text-[0.85rem] font-bold text-center mb-1 group-hover:text-white-soft transition-colors">
              {stat.label}
            </div>
            <div className="font-nunito text-gray-mid/70 text-[0.8rem] italic text-center leading-tight">
              {stat.sub}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
