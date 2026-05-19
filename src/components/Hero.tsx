import { motion } from 'motion/react';
import { ArrowRight, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const words1 = "Know Where".split(" ");
  const words2 = "YOUR MONEY".split(" ");
  const words3 = "ACTUALLY GOES.".split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };
  
  const wordAnim = {
    hidden: { opacity: 0, y: 30, rotateX: 60 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 100, damping: 10 } }
  };

  const featurePills = [
    "📩 SMS Auto-Read", "🔒 100% On-Device", "📊 Smart Analytics", "⚡ Zero Entry"
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden px-6 lg:px-12 object-contain">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center z-10 relative">
        
        {/* LEFT COLUMN */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={container}
          className="flex flex-col items-start"
        >
          {/* Breadcrumb */}
          <motion.div variants={wordAnim} className="mb-4">
            <Link 
              to="/"
              className="text-gray-mid font-rajdhani uppercase tracking-widest text-sm hover:text-white-soft transition-colors"
            >
              RedGoldCrew
            </Link>
            <span className="text-gray-mid/50 mx-2 text-sm font-rajdhani uppercase tracking-widest">→</span>
            <span className="text-gold-primary font-rajdhani uppercase tracking-widest text-sm">Aayiram</span>
          </motion.div>
          
          {/* Eyebrow */}
          <motion.div variants={wordAnim} className="inline-flex items-center gap-2 border border-gold-primary/30 bg-gold-primary/5 rounded-full px-4 py-1.5 mb-6">
            <span className="text-gold-primary font-rajdhani uppercase tracking-widest text-xs font-bold font-glow">
              ✦ Smart Finance · Android App · India
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="font-bebas text-[clamp(3.2rem,6vw,6.2rem)] leading-[0.9] flex flex-col items-start mb-6" style={{ perspective: 1000 }}>
            
            <div className="flex flex-wrap text-white-soft">
              {words1.map((word, i) => (
                <motion.span key={`w1-${i}`} variants={wordAnim} className="mr-3">{word}</motion.span>
              ))}
            </div>
            
            <div className="flex flex-wrap text-red-primary text-glow-red mt-1">
              {words2.map((word, i) => (
                <motion.span key={`w2-${i}`} variants={wordAnim} className="mr-3">{word}</motion.span>
              ))}
            </div>
            
            <div className="flex flex-wrap text-gold-primary text-glow-gold mt-1">
              {words3.map((word, i) => (
                <motion.span key={`w3-${i}`} variants={wordAnim} className="mr-3">{word}</motion.span>
              ))}
            </div>
            
          </h1>

          {/* Subtitle */}
          <motion.p variants={wordAnim} className="font-nunito text-gray-mid text-lg md:text-[1.1rem] max-w-lg leading-relaxed mb-8">
            Aayiram reads your bank SMS messages and turns them into a complete financial picture — 
            automatically, privately, and with zero manual entry.
          </motion.p>
          
          {/* Feature Pills */}
          <motion.div variants={wordAnim} className="flex flex-wrap gap-2 mb-10">
            {featurePills.map((pill, i) => (
              <span key={i} className="text-xs font-rajdhani border border-gray-mid/30 text-gray-mid px-3 py-1 rounded-full uppercase tracking-wide">
                {pill}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div variants={wordAnim} className="flex flex-wrap items-center gap-4 mb-4">
            <a href="#download" className="shimmer-btn bg-red-primary text-white-soft px-8 py-3 rounded font-rajdhani uppercase font-bold tracking-wider text-sm shadow-[0_0_15px_rgba(196,28,28,0.4)] hover:shadow-[0_0_25px_rgba(196,28,28,0.6)] transition-all flex items-center gap-2 group">
              <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
              Download Free
            </a>
            
            <a href="#features" className="border border-gold-primary text-gold-primary px-8 py-3 rounded font-rajdhani uppercase tracking-wider font-bold text-sm hover:bg-gold-primary hover:text-navy-darkest transition-colors flex items-center gap-2">
              Explore Features <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Built By Tiny Text */}
          <motion.div variants={wordAnim} className="text-xs font-nunito text-gray-mid/70">
            Built by <a href="https://redgoldcrew.in" target="_blank" rel="noopener noreferrer" className="text-gold-primary hover:underline">RedGoldCrew</a>
          </motion.div>

        </motion.div>

        {/* RIGHT COLUMN - Phone Mockup (CSS Drawn) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative hidden lg:flex items-center justify-center lg:justify-end"
        >
          <div className="absolute inset-x-0 inset-y-10 bg-red-primary/20 blur-[100px] z-0 rounded-full" />
          
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="w-[300px] h-[600px] bg-navy-darkest border-[8px] border-navy-mid rounded-[40px] shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_0_0_2px_rgba(255,255,255,0.1)] relative z-10 flex flex-col overflow-hidden"
          >
            {/* Phone Notch */}
            <div className="absolute top-0 inset-x-0 h-[24px] flex justify-center">
              <div className="w-[120px] h-full bg-navy-mid rounded-b-[12px]" />
            </div>

            {/* Simulated App Content */}
            <div className="flex-1 bg-navy-darkest pt-12 px-5 flex flex-col">
              <div className="font-rajdhani text-gray-mid text-xs uppercase tracking-widest pl-1 mb-1 mt-4">Total Balance</div>
              <div className="font-bebas text-5xl text-gold-primary tracking-wide mb-6">₹ 45,230</div>
              
              {/* Dummy Chart */}
              <div className="flex items-end gap-2 h-20 mb-8 border-b border-white-soft/10 pb-2">
                {[40, 70, 30, 80, 50, 90].map((h, i) => (
                  <div key={i} className={`flex-1 rounded-t-sm ${i % 2 === 0 ? 'bg-red-primary' : 'bg-green-500'}`} style={{ height: `${h}%` }} />
                ))}
              </div>

              <div className="font-rajdhani text-white-soft font-bold uppercase tracking-wider mb-4">Recent Transactions</div>
              
              {/* Dummy Transactions */}
              <div className="flex flex-col gap-4">
                {[
                  { name: "Swiggy", amount: "- ₹ 450", type: "Food" },
                  { name: "Amazon", amount: "- ₹ 1,299", type: "Shopping" },
                  { name: "Salary", amount: "+ ₹ 85,000", type: "Income", green: true },
                  { name: "Uber", amount: "- ₹ 240", type: "Travel" },
                ].map((tx, i) => (
                  <div key={i} className="flex justify-between items-center bg-navy-mid/50 p-3 rounded-lg border border-white-soft/5">
                    <div className="flex flex-col">
                      <span className="font-nunito text-white-soft text-sm font-semibold">{tx.name}</span>
                      <span className="font-rajdhani text-gray-mid text-[10px] uppercase">{tx.type} • SMS Auto</span>
                    </div>
                    <span className={`font-bebas tracking-wide text-lg ${tx.green ? 'text-green-500' : 'text-red-primary'}`}>
                      {tx.amount}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Phone Home Bar Indicator */}
            <div className="absolute bottom-2 inset-x-0 flex justify-center">
              <div className="w-1/3 h-1 bg-white-soft/30 rounded-full" />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
