import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import AayiramPage from './pages/AayiramPage';
import HomePage from './pages/HomePage';
import ParticleBackground from './components/ParticleBackground';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop />
      <LoadingScreen onComplete={() => setLoading(false)} />
      
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0 h-screen overflow-hidden' : 'opacity-100'}`}>
        <CustomCursor />
        
        {/* Global fixed noise overlay as requested */}
        <div className="fixed inset-0 pointer-events-none z-[0] bg-navy-darkest">
          <div className="absolute inset-x-0 -top-[300px] h-[600px] bg-red-primary/10 rounded-[100%] blur-[120px] mix-blend-screen opacity-50" />
          <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-gold-primary/10 rounded-full blur-[100px] mix-blend-screen opacity-30" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-red-primary/10 rounded-full blur-[100px] mix-blend-screen opacity-40" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CgkJPHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6IiBmaWxsPSJub25lIi8+CgkJPHBhdGggZD0iTTAgMGg0MHYxSDBWMHptMCAzOWg0MHYxSDBWMzl6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+CgkJPHBhdGggZD0iTTAgMmgxdjM4SDBWMnptMzkgMGgxdjM4aC0xVjJ6IiBmaWxsPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDMpIi8+Cjwvc3ZnPg==')] opacity-30 mix-blend-overlay" />
          <ParticleBackground />
          <div className="absolute inset-0 bg-noise mix-blend-overlay opacity-80" />
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aayiram" element={<AayiramPage />} />
        </Routes>
      </div>
    </Router>
  );
}
