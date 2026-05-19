import { motion } from 'motion/react';
import { ArrowDown, ArrowRight, Star } from 'lucide-react';
import Logo from '../Logo';

export default function HomeHero() {
  const words1 = "We Build Products".split(" ");
  const words2 = "PEOPLE ACTUALLY".split(" ");
  const words3 = "USE EVERY DAY.".split(" ");
  
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.18 } }
  };
  
  const wordAnim = {
    hidden: { opacity: 0, y: 60, filter: "blur(8px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const scaleIn = {
    hidden: { scale: 0.9, opacity: 0 },
    show: { scale: 1, opacity: 1, transition: { duration: 0.5, type: "spring", delay: 0 } }
  };
  
  const fadeUp = (delay: number) => ({
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay } }
  });

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden px-6 lg:px-12">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-8 items-center z-10 relative">
        
        {/* LEFT COLUMN */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={container}
          className="flex flex-col items-start"
        >
          {/* Eyebrow badge */}
          <motion.div variants={scaleIn} className="inline-flex items-center gap-2 border border-gold-primary/50 bg-navy-dark rounded-full px-4 py-1.5 mb-6">
            <span className="font-rajdhani uppercase text-gold-primary font-bold text-xs tracking-widest">
              ✦ Product-Focused · Privacy-First · Chennai, India
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="font-bebas text-[clamp(3rem,6vw,6rem)] leading-[0.92] flex flex-col items-start mb-6">
            <div className="flex flex-wrap text-white-soft">
              {words1.map((word, i) => (
                <motion.span key={`w1-${i}`} variants={wordAnim} className="mr-3 mb-1">{word}</motion.span>
              ))}
            </div>
            <div className="flex flex-wrap text-red-bright text-glow-red mt-1">
              {words2.map((word, i) => (
                <motion.span key={`w2-${i}`} variants={wordAnim} className="mr-3 mb-1" style={{ textShadow: '0 0 40px rgba(224,32,32,0.5)' }}>{word}</motion.span>
              ))}
            </div>
            <div className="flex flex-wrap text-gold-primary text-glow-gold mt-1">
              {words3.map((word, i) => (
                <motion.span key={`w3-${i}`} variants={wordAnim} className="mr-3 mb-1" style={{ textShadow: '0 0 40px rgba(212,160,23,0.4)' }}>{word}</motion.span>
              ))}
            </div>
          </h1>

          {/* Subtitle */}
          <motion.p variants={fadeUp(0.5)} initial="hidden" animate="show" className="font-nunito text-gray-mid text-[1.1rem] max-w-[540px] leading-[1.8] mb-8">
            RedGoldCrew is a small, focused team of engineers and designers based in Chennai, India.
            We don't build products for investors or trend reports — we build tools that real people open
            every single day because they actually help.
          </motion.p>
          
          {/* Value Pills */}
          <motion.div variants={fadeUp(0.7)} initial="hidden" animate="show" className="flex flex-wrap gap-3 mb-10">
            <span className="font-rajdhani uppercase text-[0.8rem] text-red-primary border border-red-primary px-4 py-1.5 rounded-full bg-navy-mid font-bold tracking-wider">
              🔒 Privacy-First
            </span>
            <span className="font-rajdhani uppercase text-[0.8rem] text-gold-primary border border-gold-primary px-4 py-1.5 rounded-full bg-navy-mid font-bold tracking-wider">
              📱 Android Native
            </span>
            <span className="font-rajdhani uppercase text-[0.8rem] text-gold-primary border border-red-primary px-4 py-1.5 rounded-full bg-navy-mid font-bold tracking-wider">
              🇮🇳 India-Built
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={fadeUp(0.85)} initial="hidden" animate="show" className="flex flex-wrap items-center gap-4 mb-8">
            <a href="#products" className="shimmer-btn bg-red-primary text-white-soft px-8 py-3.5 rounded font-rajdhani uppercase font-bold tracking-wider text-sm shadow-[0_0_15px_rgba(196,28,28,0.4)] hover:shadow-[0_0_25px_rgba(196,28,28,0.6)] transition-all flex items-center gap-2 group">
              See Our Products <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>
            
            <a href="#mission" className="border border-gold-primary text-gold-primary px-8 py-3.5 rounded font-rajdhani uppercase tracking-wider font-bold text-sm hover:bg-gold-primary hover:text-navy-darkest transition-colors flex items-center gap-2 group">
              Who We Are <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Social Proof */}
          <motion.div variants={fadeUp(1.0)} initial="hidden" animate="show" className="flex flex-col gap-2">
            <div className="text-gray-mid text-[0.75rem] font-nunito uppercase tracking-widest">
              Trusted by early users across India
            </div>
            <div className="flex items-center gap-1 text-gold-primary">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill="currentColor" />
              ))}
            </div>
          </motion.div>

        </motion.div>

        {/* RIGHT COLUMN */}
        <div className="hidden lg:flex items-center justify-center relative">
          {/* Blurred Gold Circle behind logo */}
          <div className="absolute w-[30vw] h-[30vw] bg-gold-primary rounded-full blur-[100px] opacity-10 z-0" />
          
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="relative z-10 w-full max-w-[440px] w-[36vw] flex items-center justify-center"
          >
            <Logo
              className="w-full max-w-[380px] h-auto rounded-2xl"
              glow={true}
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}
