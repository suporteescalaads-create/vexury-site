
import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { CookieBanner } from './components/CookieBanner.tsx';

// Lazy loading components below the fold with extensions
const Features = lazy(() => import('./components/Features.tsx').then(m => ({ default: m.Features })));
const Stats = lazy(() => import('./components/Stats.tsx').then(m => ({ default: m.Stats })));
const Work = lazy(() => import('./components/Work.tsx').then(m => ({ default: m.Work })));
const Team = lazy(() => import('./components/Team.tsx').then(m => ({ default: m.Team })));
const Pricing = lazy(() => import('./components/Pricing.tsx').then(m => ({ default: m.Pricing })));
const Testimonials = lazy(() => import('./components/Testimonials.tsx').then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import('./components/FAQ.tsx').then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import('./components/Contact.tsx').then(m => ({ default: m.Contact })));
const Privacy = lazy(() => import('./components/Privacy.tsx').then(m => ({ default: m.Privacy })));
const Terms = lazy(() => import('./components/Terms.tsx').then(m => ({ default: m.Terms })));

// Simple loading placeholder to avoid layout shift
const SectionLoader = () => <div className="h-96 bg-background animate-pulse" />;

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

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  if (currentHash === '#/privacy.html') {
    return (
      <div className="bg-background text-white min-h-screen">
        <Suspense fallback={<SectionLoader />}>
          <Privacy />
        </Suspense>
        <CookieBanner />
      </div>
    );
  }

  if (currentHash === '#/terms.html') {
    return (
      <div className="bg-background text-white min-h-screen">
        <Suspense fallback={<SectionLoader />}>
          <Terms />
        </Suspense>
        <CookieBanner />
      </div>
    );
  }

  return (
    <div className="bg-background text-white min-h-screen selection:bg-accent selection:text-white overflow-x-hidden font-sans">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<SectionLoader />}>
          <Features />
          <Stats />
          <Work />
          <Team />
          <Pricing />
          <Testimonials />
          <FAQ />
          <Contact />
        </Suspense>
      </main>
      <CookieBanner />
    </div>
  );
}

export default App;
