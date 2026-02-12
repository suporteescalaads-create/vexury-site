
import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NavItem } from '../types.ts';
import { Logo } from './Logo.tsx';

const navItems: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: 'https://vexury.com/#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    const checkPath = () => {
        const hash = window.location.hash;
        setIsHomePage(!hash.startsWith('#/'));
    };
    
    checkPath();
    window.addEventListener('hashchange', checkPath);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
        window.removeEventListener('hashchange', checkPath);
        window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isInternalHash = (href.startsWith('#') && !href.startsWith('#/')) || href.includes('#contact');
    
    if (isInternalHash) {
      if (isHomePage) {
        // Deixamos o App.tsx lidar com o scroll via hashchange
        setIsMenuOpen(false);
      } else {
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled ? 'bg-[#03000a]/90 backdrop-blur-xl border-white/5 py-4' : 'bg-transparent border-transparent py-8'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a 
            href="#" 
            className="flex items-center"
            onClick={(e) => {
               if(isHomePage) {
                   e.preventDefault();
                   window.scrollTo({ top: 0, behavior: 'smooth' });
                   window.location.hash = '';
               }
            }}
          >
            <Logo className="w-10 h-10" textClassName="text-lg" />
          </a>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-xs font-medium uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="md:hidden p-2 text-white hover:text-accent transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#03000a] pt-32 px-6 md:hidden">
          <div className="flex flex-col gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-3xl font-light text-white hover:text-accent transition-colors border-b border-white/5 pb-6 tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <a 
                href="https://wa.me/13054676317?text=Hello%20Julio!%20I'm%20interested%20in%20building%20a%20website%20with%20Vexury."
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-white text-black w-full py-5 font-bold mt-4 rounded-full tracking-wider uppercase text-sm">
                    Start Project
                </button>
            </a>
          </div>
        </div>
      )}
    </>
  );
};
