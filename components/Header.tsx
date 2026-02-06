import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NavItem } from '../types';
import { Logo } from './Logo';

const navItems: NavItem[] = [
  { label: 'Services', href: 'https://vexury.com/#services' },
  { label: 'Team', href: 'https://vexury.com/#team' },
  { label: 'Pricing', href: 'https://vexury.com/#pricing' },
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
      if (window.scrollY > 20) {
        if (!isScrolled) setIsScrolled(true);
      } else {
        if (isScrolled) setIsScrolled(false);
      }
    };
    
    // Using passive listeners for better scroll performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
        window.removeEventListener('hashchange', checkPath);
        window.removeEventListener('scroll', handleScroll);
    }
  }, [isScrolled]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isInternalHash = href.includes('#') && !href.includes('#/');
    
    if (isInternalHash) {
      if (isHomePage) {
        e.preventDefault();
        const targetId = href.split('#')[1];
        const element = document.getElementById(targetId);
        
        if (element) {
          const headerOffset = 100;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
          
          setIsMenuOpen(false);
        }
      } else {
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
          isScrolled ? 'bg-[#03000a]/90 backdrop-blur-xl border-white/5 py-4' : 'bg-transparent border-transparent py-8'
        }`}
        style={{ minHeight: isScrolled ? '81px' : '113px' }} // Critical: Prevent CLS
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <a 
            href="https://vexury.com/#" 
            className="flex items-center"
            onClick={(e) => {
               if(isHomePage) {
                   e.preventDefault();
                   window.scrollTo({ top: 0, behavior: 'smooth' });
                   window.location.hash = '#';
               }
            }}
            aria-label="Vexury Home"
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
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

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
          </div>
        </div>
      )}
    </>
  );
};