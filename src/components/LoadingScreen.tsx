import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Logo from './Logo';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [stage, setStage] = useState(0); 

  useEffect(() => {
    const t1 = setTimeout(() => setStage(1), 800);
    const t2 = setTimeout(() => setStage(2), 1100);
    const t3 = setTimeout(() => {
      setStage(3);
      setTimeout(onComplete, 500); // give time for exit animation
    }, 1600);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage < 3 && (
        <motion.div 
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[100] bg-navy-darkest flex flex-col items-center justify-center"
        >
          <motion.div 
            className="relative w-32 h-32 mb-8 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Logo size="xl" className="relative z-10" glow={true} />
            <motion.div 
               initial={{ opacity: 0, scale: 0.5 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.6, duration: 1 }}
               className="absolute inset-0 bg-red-primary/20 blur-[30px] rounded-full z-0 pointer-events-none"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: stage >= 1 ? 1 : 0, y: stage >= 1 ? 0 : 10 }}
            className="font-bebas text-5xl tracking-[0.4em] text-gold-primary mb-2 whitespace-nowrap ml-4"
          >
            REDGOLDCREW
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: stage >= 2 ? 1 : 0, y: stage >= 2 ? 0 : 10 }}
            className="font-rajdhani uppercase text-gray-mid text-sm tracking-widest"
          >
            BUILD. SHIP. REPEAT.
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
