import { useEffect, useMemo, useState } from 'react';
import Lenis from 'lenis';
import Header from './components/layout/Header';
import CustomCursor from './components/layout/CustomCursor';
import Hero from './components/sections/Hero';
import Preambulo from './components/sections/Preambulo';
import ProtagonistaCard from './components/sections/ProtagonistaCard';
import FragmentationScroll from './components/sections/FragmentationScroll';
import BentoGrid from './components/sections/BentoGrid';
import PilotMetrics from './components/sections/PilotMetrics';
import EvolutionPath from './components/sections/EvolutionPath';
import Protagonista from './pages/Protagonista';

export default function App() {
  const [hash, setHash] = useState(() => window.location.hash || '#home');
  const route = useMemo(() => hash.replace('#', ''), [hash]);

  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash || '#home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    // Inicializar Lenis para smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  if (route === 'protagonista') {
    return (
      <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white overflow-x-hidden">
        <CustomCursor />
        <Header />
        <main className="relative">
          <Protagonista />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white overflow-x-hidden">
      <CustomCursor />
      <Header />
      
      <main className="relative">
        <Hero />
        <Preambulo />
        <FragmentationScroll />
        <ProtagonistaCard />
        <BentoGrid />
        <PilotMetrics />
        <EvolutionPath />
      </main>

    </div>
  );
}
