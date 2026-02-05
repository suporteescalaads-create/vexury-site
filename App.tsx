import React, { useState, useEffect } from 'react';
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
  const [route, setRoute] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      
      // Robust checking for routes
      if (hash.includes('/privacy')) {
        setRoute('privacy');
        window.scrollTo(0, 0);
      } else if (hash.includes('/terms')) {
        setRoute('terms');
        window.scrollTo(0, 0);
      } else {
        setRoute('home');
        
        // Handle scrolling to sections (e.g., #services) when returning to Home
        if (hash && !hash.startsWith('#/') && hash !== '#') {
          setTimeout(() => {
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
          }, 100);
        } else if (!hash || hash === '#') {
            // Scroll to top if just home
            window.scrollTo(0, 0);
        }
      }
    };

    // Run on mount to check initial URL
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Simple Router Switch
  if (route === 'privacy') {
    return <Privacy />;
  }

  if (route === 'terms') {
    return <Terms />;
  }

  // Default Home Page
  return (
    <div className="bg-background text-white min-h-screen selection:bg-accent selection:text-white overflow-x-hidden font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        <Work />
        <Team />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
    </div>
  );
}

export default App;