import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NavItem } from '../types';
import { Logo } from './Logo';

const navItems: NavItem[] = [
  { label: 'Services', href: '#services' },
  { label: 'Team', href: '#team' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  useEffect(() => {
    // Check if we are on the home page (hash is empty or just # or section anchor)
    // If hash starts with #/, we are on a subpage like #/privacy
    const checkPath = () => {
        setIsHomePage(!window.location.hash.startsWith('#/'));
    };
    
    checkPath();
    window.addEventListener('hashchange', checkPath);
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('hashchange', checkPath);
    }
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // If not on homepage, let the link behave naturally.
    // Example: clicking #services while on #/privacy will change URL to #services.
    // App.tsx detects this change, switches to Home view, and handles the scroll.
    if (!isHomePage) {
        setIsMenuOpen(false);
        return; 
    }

    // If on homepage, manual smooth scroll
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100; // Adjust for fixed header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsMenuOpen(false);
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
          {/* Premium Logo */}
          <a 
            href="#" 
            className="flex items-center"
            onClick={(e) => {
               if(isHomePage) {
                   e.preventDefault();
                   window.scrollTo({ top: 0, behavior: 'smooth' });
               }
               // If not home page, href="#" will reset hash to empty string (home)
            }}
          >
            <Logo className="w-10 h-10" textClassName="text-lg" />
          </a>

          {/* Desktop Nav - Minimalist */}
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

          {/* Mobile Menu Button */}
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
            {navItems.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-3xl font-light text-white hover:text-accent transition-colors border-b border-white/5 pb-6 tracking-wide"
              >
                {item.label}
              </a>
            ))}
            <button className="bg-white text-black w-full py-5 font-bold mt-4 rounded-full tracking-wider uppercase text-sm">
                Start Project
            </button>
          </div>
        </div>
      )}
    </>
  );
};