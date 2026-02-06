
import React, { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Stats } from './components/Stats';
import { Work } from './components/Work';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { Contact } from './components/Contact';
import { Privacy } from './components/Privacy';
import { Terms } from './components/Terms';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
      
      const hash = window.location.hash;
      if (hash && !hash.startsWith('#/')) {
        const element = document.querySelector(hash);
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        }
      } else if (hash.startsWith('#/')) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentHash === '#/privacy.html') {
    return <Privacy />;
  }

  if (currentHash === '#/terms.html') {
    return <Terms />;
  }

  return (
    <div className="bg-background text-white min-h-screen selection:bg-accent selection:text-white overflow-x-hidden font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        {/* Seções abaixo da dobra usam content-lazy para otimizar TBT */}
        <div className="content-lazy">
            <Work />
            <Team />
            <Pricing />
            <Testimonials />
            <FAQ />
            <Contact />
        </div>
      </main>
    </div>
  );
}

export default App;
