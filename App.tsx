
import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CookieBanner } from './components/CookieBanner';
import { generateEventId, trackLeadFront, sendToCAPI } from './components/FacebookService';

// Lazy loading components below the fold
const Features = lazy(() => import('./components/Features').then(m => ({ default: m.Features })));
const Stats = lazy(() => import('./components/Stats').then(m => ({ default: m.Stats })));
const Work = lazy(() => import('./components/Work').then(m => ({ default: m.Work })));
const Team = lazy(() => import('./components/Team').then(m => ({ default: m.Team })));
const Pricing = lazy(() => import('./components/Pricing').then(m => ({ default: m.Pricing })));
const Testimonials = lazy(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const FAQ = lazy(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const Contact = lazy(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Privacy = lazy(() => import('./components/Privacy').then(m => ({ default: m.Privacy })));
const Terms = lazy(() => import('./components/Terms').then(m => ({ default: m.Terms })));

// Simple loading placeholder to avoid layout shift
const SectionLoader = () => <div className="h-96 bg-background animate-pulse" />;

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    // --- FORMBRICKS INITIALIZATION ---
    if ((window as any).formbricks) {
      (window as any).formbricks.init({
        environmentId: "cmljk5g9i5i3jvt01re4wp908",
        apiHost: "https://app.formbricks.com",
      });
    }

    // --- LÓGICA DE TRACKING ESPECIALISTA ---
    const LEAD_BUTTONS = [
      'BUILD MY WEBSITE NOW',
      'START YOUR WEBSITE',
      'START MY WEBSITE',
      'START YOUR PROJECT',
      "LET'S TALK",
      'TALK TO US',
      'SEND EMAIL',
      'WHATSAPP'
    ];

    const handleGlobalClick = async (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const btn = target.closest('button, a') as HTMLElement | null;
      
      if (!btn) return;

      const btnText = btn.innerText.trim().toUpperCase();
      
      if (LEAD_BUTTONS.includes(btnText)) {
        const eventId = generateEventId();
        const contentName = btnText.charAt(0) + btnText.slice(1).toLowerCase();

        trackLeadFront(eventId, contentName);

        sendToCAPI({
          eventId,
          contentName,
          city: 'Miami', 
          zip: '33149'   
        });
      }
    };

    document.addEventListener('click', handleGlobalClick);

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
      document.removeEventListener('click', handleGlobalClick);
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
