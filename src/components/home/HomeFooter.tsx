import { ArrowUp, Github, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

export default function HomeFooter() {
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
    <footer className="bg-navy-mid border-t border-border-red relative z-10">
      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* COL 1 - Brand */}
          <div className="lg:pr-4">
            <Link to="/" className="flex items-center gap-3 mb-5 cursor-pointer group" onClick={scrollToTop}>
              <div className="w-[38px] h-[38px] flex items-center justify-center relative rounded border border-red-primary shadow-[0_0_10px_rgba(196,28,28,0.5)] bg-navy-darkest overflow-hidden group-hover:border-gold-primary transition-colors">
                 <Logo className="w-[70%] h-[70%] opacity-90" glow={true} />
              </div>
              <div className="text-xl font-bold tracking-widest uppercase font-rajdhani">
                <span className="text-white-soft">RedGold</span>
                <span className="text-gold-primary">Crew</span>
              </div>
            </Link>
            <p className="font-nunito text-gray-mid text-[0.88rem] leading-[1.6] mb-6">
              Building privacy-first, offline-capable products that solve real everyday problems for real people. Based in Chennai, Tamil Nadu, India.
            </p>
            
            <div className="flex gap-3 mb-4">
              <a href="https://github.com/max-mani" target="_blank" rel="noopener noreferrer" className="w-[36px] h-[36px] rounded-full bg-navy-dark border border-red-primary flex items-center justify-center text-gray-mid hover:text-gold-primary hover:border-gold-primary transition-colors shadow-sm" title="GitHub">
                <Github size={16} />
              </a>
              <a href="mailto:hello@redgoldcrew.in" className="w-[36px] h-[36px] rounded-full bg-navy-dark border border-red-primary flex items-center justify-center text-gray-mid hover:text-gold-primary hover:border-gold-primary transition-colors shadow-sm" title="Email Us">
                <Mail size={16} />
              </a>
            </div>

            <div className="font-nunito text-gray-mid text-[0.82rem] flex items-center gap-2">
              <span>📍</span> Chennai, Tamil Nadu, India
            </div>
          </div>

          {/* COL 2 - Products */}
          <div>
            <h4 className="font-rajdhani uppercase text-gold-primary font-bold tracking-widest text-[0.82rem] mb-6">Products</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link to="/aayiram" className="font-nunito text-[0.9rem] text-gray-mid hover:text-white-soft transition-colors flex items-center gap-2">
                  Aayiram
                </Link>
              </li>
              <li>
                <div className="font-nunito text-[0.9rem] text-gray-mid flex items-center gap-2">
                  Web Platform <span className="border border-red-primary text-red-primary font-rajdhani uppercase text-[0.65rem] px-2 py-0.5 rounded-full font-bold">Coming Soon</span>
                </div>
              </li>
              <li>
                <div className="font-nunito text-[0.9rem] text-gray-mid flex items-center gap-2">
                  Android App 2 <span className="border border-red-primary text-red-primary font-rajdhani uppercase text-[0.65rem] px-2 py-0.5 rounded-full font-bold">Coming Soon</span>
                </div>
              </li>
              <li>
                <div className="font-nunito text-[0.9rem] text-gray-mid flex items-center gap-2">
                  Developer Tool <span className="border border-red-primary text-red-primary font-rajdhani uppercase text-[0.65rem] px-2 py-0.5 rounded-full font-bold">Coming Soon</span>
                </div>
              </li>
            </ul>
          </div>

          {/* COL 3 - Organisation */}
          <div>
            <h4 className="font-rajdhani uppercase text-gold-primary font-bold tracking-widest text-[0.82rem] mb-6">Company</h4>
            <ul className="flex flex-col gap-4">
              {['About', 'Team', 'How We Work', 'Values', 'Careers', 'Open Source', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(/ /g, '-')}`} className="font-nunito text-[0.9rem] text-gray-mid hover:text-white-soft transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COL 4 - Legal */}
          <div>
             <h4 className="font-rajdhani uppercase text-gold-primary font-bold tracking-widest text-[0.82rem] mb-6">Legal</h4>
             <ul className="flex flex-col gap-4">
              {['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Security', 'Support'].map((link) => (
                <li key={link}>
                  <a href="#" className="font-nunito text-[0.9rem] text-gray-mid hover:text-white-soft transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 mt-8 border-t border-border-red flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-nunito text-[0.85rem] text-gray-mid">© {new Date().getFullYear()} RedGoldCrew. All rights reserved.</div>
          <div className="font-nunito text-[0.85rem] text-gray-mid flex items-center gap-1.5">
            Built with <span className="text-red-bright text-lg leading-none animate-pulse">♥</span> for India 🇮🇳
          </div>
          <div className="font-nunito text-[0.85rem] text-gray-mid">Made in Chennai, Tamil Nadu</div>
        </div>
      </div>

      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            whileHover={{ scale: 1.1, backgroundColor: 'var(--color-gold-primary)', color: 'var(--color-navy-darkest)', boxShadow: '0 0 20px rgba(212,160,23,0.5)' }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 w-[44px] h-[44px] bg-red-primary text-white-soft rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(196,28,28,0.5)] transition-colors duration-300 pointer-events-auto"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
