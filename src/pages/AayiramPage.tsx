import { useEffect } from 'react';
import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import WhyAayiram from '../components/WhyAayiram';
import Privacy from '../components/Privacy';
import Pricing from '../components/Pricing';
import BuiltByRGC from '../components/BuiltByRGC';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function AayiramPage() {
  useEffect(() => {
    document.title = "Aayiram — Smart SMS Finance by RedGoldCrew";
  }, []);

  return (
    <>
      <Navbar />
      <main className="relative z-10 w-full bg-transparent overflow-x-hidden">
        <Hero />
        <StatsBar />
        <Features />
        <HowItWorks />
        <WhyAayiram />
        <Privacy />
        <Pricing />
        <BuiltByRGC />
      </main>
      <Footer />
    </>
  );
}
