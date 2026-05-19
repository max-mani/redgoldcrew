import { useEffect } from 'react';
import HomeNavbar from '../components/home/HomeNavbar';
import HomeHero from '../components/home/HomeHero';
import Marquee from '../components/home/Marquee';
import Mission from '../components/home/Mission';
import Products from '../components/home/Products';
import Stats from '../components/home/Stats';
import HowWeWork from '../components/home/HowWeWork';
import WhyUs from '../components/home/WhyUs';
import TechStack from '../components/home/TechStack';
import About from '../components/home/About';
import Team from '../components/home/Team';
import OpenSource from '../components/home/OpenSource';
import Values from '../components/home/Values';
import Careers from '../components/home/Careers';
import Contact from '../components/home/Contact';
import HomeFooter from '../components/home/HomeFooter';

export default function HomePage() {
  useEffect(() => {
    document.title = "RedGoldCrew — Builders Who Ship";
  }, []);

  return (
    <>
      {/* Persistent Background Effects */}
      <div className="fixed inset-0 bg-navy-darkest -z-10" />
      <div className="fixed inset-0 pointer-events-none -z-10" style={{ backgroundImage: 'linear-gradient(rgba(196, 28, 28, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(196, 28, 28, 0.06) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="fixed -top-[20%] -right-[10%] w-[55vw] h-[55vw] rounded-full bg-red-primary/14 blur-[120px] mix-blend-screen -z-10 animate-[pulse_6s_ease-in-out_infinite]" />
      <div className="fixed -bottom-[20%] -left-[10%] w-[40vw] h-[40vw] rounded-full bg-gold-primary/9 blur-[100px] mix-blend-screen -z-10 animate-[pulse_6s_ease-in-out_infinite] [animation-delay:3s]" />
      
      <HomeNavbar />
      <main className="relative z-10 w-full bg-transparent overflow-x-hidden">
        <HomeHero />
        <Marquee />
        <Mission />
        <Products />
        <Stats />
        <HowWeWork />
        <WhyUs />
        <TechStack />
        <About />
        <Team />
        <OpenSource />
        <Values />
        <Careers />
        <Contact />
      </main>
      <HomeFooter />
    </>
  );
}
