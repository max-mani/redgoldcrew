import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../Logo';

export default function HomeNavbar() {
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
    { name: 'Home', id: '#' },
    { name: 'Products', id: '#products' },
    { name: 'Why Us', id: '#why-us' },
    { name: 'How We Work', id: '#how-we-work' },
    { name: 'About', id: '#mission' },
    { name: 'Team', id: '#team' },
    { name: 'Contact', id: '#contact' },
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
          
          {/* Logo Area */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo(0, 0)}>
            <Logo className="w-[42px] h-[42px]" glow={false} />
            <div className="text-2xl font-bold tracking-widest uppercase">
              <span className="text-white-soft">RedGold</span>
              <span className="text-gold-primary">Crew</span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.id}
                className="text-gray-mid hover:text-gold-primary transition-colors tracking-wider uppercase text-sm font-bold relative flex pb-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-primary transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href="#products" className="shimmer-btn group inline-flex items-center gap-2 border border-gold-primary text-gold-primary px-6 py-2 rounded font-rajdhani tracking-wider uppercase text-sm hover:bg-gold-primary hover:text-navy-darkest transition-all duration-300 font-bold">
              Our Products <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white-soft cursor-pointer"
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
            className="fixed top-[72px] inset-x-0 z-40 bg-navy-darkest/98 backdrop-blur-xl px-6 lg:hidden font-rajdhani border-b border-border-red overflow-hidden"
          >
            <div className="flex flex-col gap-6 py-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.id}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl text-white-soft hover:text-gold-primary uppercase tracking-wider border-b border-white-soft/10 pb-4 relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gold-primary transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
              <a href="#products" onClick={() => setMobileMenuOpen(false)} className="w-full text-center flex items-center justify-center gap-2 border border-gold-primary text-gold-primary px-6 py-4 rounded uppercase text-lg mt-2 font-bold focus:outline-none hover:bg-gold-primary hover:text-navy-darkest transition-colors">
                Our Products <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
