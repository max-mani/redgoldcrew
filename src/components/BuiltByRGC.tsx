import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function BuiltByRGC() {
  return (
    <section className="w-full bg-navy-dark border-y border-border-red relative z-10 py-20 px-6">
      <div className="max-w-[700px] mx-auto text-center flex flex-col items-center">
        
        <motion.div whileHover={{ scale: 1.05 }} className="mb-6">
          <Logo size="lg" className="rounded-xl" glow={true} />
        </motion.div>

        <h2 className="font-bebas text-4xl md:text-[2.5rem] text-white-soft mb-4">
          Built by RedGoldCrew
        </h2>
        
        <p className="font-nunito text-gray-mid text-[1.05rem] leading-relaxed mb-8">
          Aayiram is one of many products being built by RedGoldCrew — a Chennai-based 
          team focused on privacy-first software for everyday people.
        </p>

        <Link 
          to="/" 
          className="inline-flex items-center gap-2 border border-gold-primary text-gold-primary hover:bg-gold-primary hover:text-navy-darkest transition-colors px-6 py-3 rounded font-rajdhani uppercase tracking-wider font-bold text-sm"
        >
          Visit RedGoldCrew <ArrowRight size={16} />
        </Link>

      </div>
    </section>
  );
}
