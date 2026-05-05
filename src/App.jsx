import { useEffect } from 'react';
import Lenis from 'lenis';
import Header from './components/layout/Header';
import CustomCursor from './components/layout/CustomCursor';
import Hero from './components/sections/Hero';
import FragmentationScroll from './components/sections/FragmentationScroll';
import BentoGrid from './components/sections/BentoGrid';
import MetricsReveal from './components/sections/MetricsReveal';
import EvolutionPath from './components/sections/EvolutionPath';
import CTAForm from './components/sections/CTAForm';
import Footer from './components/layout/Footer';

export default function App() {
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

  return (
    <div className="min-h-screen bg-white text-black overflow-x-hidden">
      <CustomCursor />
      <Header />
      
      <main className="relative">
        <Hero />
        <FragmentationScroll />
        <BentoGrid />
        <MetricsReveal />
        <EvolutionPath />
        <CTAForm />
      </main>

      <Footer />
    </div>
  );
}
