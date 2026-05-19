import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-mid border-t border-border-red relative z-10 font-nunito">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1 - Brand */}
          <div className="lg:pr-8">
            <div className="mb-4">
              <span className="font-bebas text-4xl text-gold-primary tracking-wide">AAYIRAM</span>
            </div>
            <div className="text-gray-mid text-sm mb-6 flex items-center gap-1.5">
              A <Link to="/" className="text-white-soft hover:text-gold-primary transition-colors hover:underline">RedGoldCrew</Link> Product
            </div>
            <div className="text-gray-mid text-[0.95rem] hover:text-white-soft transition-colors cursor-default">
              📍 Chennai, Tamil Nadu, India
            </div>
          </div>

          {/* Column 2 - App Links */}
          <div>
            <h4 className="font-rajdhani uppercase text-white-soft font-bold tracking-widest mb-6 border-b border-border-red/50 pb-2 inline-block">App</h4>
            <ul className="flex flex-col gap-3">
              {['Features', 'How It Works', 'Pricing', 'Download'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="text-gray-mid hover:text-gold-primary transition-colors uppercase font-rajdhani tracking-wider text-sm">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Legal */}
          <div>
            <h4 className="font-rajdhani uppercase text-white-soft font-bold tracking-widest mb-6 border-b border-border-red/50 pb-2 inline-block">Legal</h4>
            <ul className="flex flex-col gap-3">
              {['Privacy Policy', 'Terms of Use', 'SMS Policy', 'Support'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-mid hover:text-gold-primary transition-colors font-nunito text-[0.9rem]">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border-red/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-mid/60">
          <div>© {new Date().getFullYear()} Aayiram by RedGoldCrew.</div>
          <div className="flex items-center gap-1 border border-border-red/30 px-3 py-1 rounded-full bg-navy-darkest/30">
            Made with <span className="text-red-primary animate-pulse inline-block mx-1">♥</span> in Chennai, India
          </div>
        </div>

      </div>

      {/* Scroll to Top */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.5, y: 20 }}
            whileHover={{ scale: 1.1, backgroundColor: 'var(--color-gold-primary)', color: 'var(--color-navy-darkest)' }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-red-primary text-white-soft rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(196,28,28,0.5)] transition-colors duration-300 pointer-events-auto"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
