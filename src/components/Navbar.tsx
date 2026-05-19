import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Features', id: '#features' },
    { name: 'How It Works', id: '#how-it-works' },
    { name: 'Why Aayiram', id: '#why-aayiram' },
    { name: 'Pricing', id: '#pricing' }
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border-red font-rajdhani ${
          scrolled ? 'bg-[rgba(7,13,26,0.96)] backdrop-blur-lg py-3' : 'bg-[rgba(7,13,26,0.85)] backdrop-blur-lg py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between z-10 relative">
          
          {/* Left Brand Area */}
          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 group">
              <Logo size="sm" className="opacity-70 group-hover:opacity-100 transition-opacity" glow={false} />
              <span className="text-gray-mid font-bold tracking-widest uppercase text-sm group-hover:text-white-soft transition-colors hidden sm:block">
                RedGoldCrew
              </span>
            </Link>
            <span className="text-gray-mid">/</span>
            <span className="text-gold-primary font-bold tracking-widest uppercase text-lg cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
              Aayiram
            </span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.id}
                className="text-gray-mid hover:text-gold-primary transition-colors tracking-wider uppercase text-sm font-semibold relative group flex pb-1"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a href="#download" className="shimmer-btn group inline-flex items-center gap-2 bg-red-primary text-white-soft px-6 py-2 rounded font-rajdhani tracking-wider uppercase text-sm font-bold shadow-[0_0_15px_rgba(196,28,28,0.4)] hover:shadow-[0_0_20px_rgba(196,28,28,0.6)] transition-all">
              <ArrowDown size={16} /> Download Free
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-white-soft"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed top-[72px] inset-x-0 z-40 bg-navy-darkest/98 backdrop-blur-xl px-6 md:hidden font-rajdhani border-b border-border-red overflow-hidden"
          >
            <div className="flex flex-col gap-6 py-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.id}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl text-white-soft hover:text-gold-primary uppercase tracking-wider border-b border-white-soft/10 pb-4"
                >
                  {link.name}
                </a>
              ))}
              <a href="#download" onClick={() => setMobileMenuOpen(false)} className="w-full text-center shimmer-btn bg-red-primary text-white-soft px-6 py-4 rounded font-rajdhani tracking-wider uppercase text-lg mt-2 font-bold shadow-[0_0_15px_rgba(196,28,28,0.4)]">
                Download Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
