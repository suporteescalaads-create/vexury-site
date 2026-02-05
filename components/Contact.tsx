import React from 'react';
import { Instagram } from 'lucide-react';
import { Logo } from './Logo';

export const Contact: React.FC = () => {
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if we are on the home page (hash doesn't start with #/)
    const isHomePage = !window.location.hash.startsWith('#/');

    // If we are NOT on home page, allow default navigation to occur.
    // This will change the URL hash to #section, which App.tsx detects to switch to Home and scroll.
    if (!isHomePage) {
        return;
    }

    // If on home page, manual smooth scroll
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
    }
  };

  return (
    <footer id="contact" className="bg-[#03000a] pt-10 pb-10 relative">
      {/* Soft Neon Divider */}
      <div className="absolute top-0 left-0 w-full h-px">
          {/* Main Line */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/80 to-transparent blur-[4px] opacity-70" />
      </div>

      <div className="container mx-auto px-6">
        
        {/* CTA Banner - Glass */}
        <div className="bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-2xl rounded-3xl p-16 text-center border border-white/10 mb-10 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
             <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 blur-[100px] pointer-events-none" />
             
             <div className="relative z-10 max-w-3xl mx-auto">
                 <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Ready to elevate your workflow?</h2>
                 <p className="text-gray-400 mb-10 text-lg">Join businesses that trust Vexury to build a strong, reliable digital presence — without complexity.</p>
                 <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <input type="email" placeholder="Enter your email" className="px-8 py-4 rounded-full bg-black/30 border border-white/10 text-white focus:outline-none focus:border-accent/50 focus:shadow-[0_0_20px_rgba(168,85,247,0.2)] w-full sm:w-auto transition-all" />
                    <button className="bg-white text-black px-10 py-4 rounded-full font-bold hover:bg-gray-100 hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                        Start Your Project
                    </button>
                 </div>
             </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-16">
            <div className="col-span-2 md:col-span-1">
                 <a href="#" className="inline-block mb-6" onClick={(e) => {
                     // If on home, scroll top. If not, let default happen (go to #)
                     if (!window.location.hash.startsWith('#/')) {
                         e.preventDefault();
                         window.scrollTo({ top: 0, behavior: 'smooth' });
                     }
                 }}>
                    <Logo className="w-10 h-10" textClassName="text-lg" />
                </a>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                    High-quality website design with a focus on structure, performance, and business growth.
                </p>
            </div>
            
            <div>
                <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Product</h4>
                <ul className="space-y-4 text-gray-500 text-sm">
                    <li>
                        <a href="#services" onClick={(e) => handleNavClick(e, '#services')} className="hover:text-white transition-colors">Services</a>
                    </li>
                    <li>
                        <a href="#team" onClick={(e) => handleNavClick(e, '#team')} className="hover:text-white transition-colors">Team</a>
                    </li>
                    <li>
                        <a href="#pricing" onClick={(e) => handleNavClick(e, '#pricing')} className="hover:text-white transition-colors">Pricing</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')} className="hover:text-white transition-colors">Contact</a>
                    </li>
                </ul>
            </div>

             <div>
                <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Social</h4>
                <div className="flex gap-4">
                    <a href="https://www.instagram.com/vexuryco/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-accent hover:border-accent transition-all duration-300">
                        <Instagram size={18} />
                    </a>
                </div>
            </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
            <p>© 2026 Vexury. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#/privacy" className="hover:text-gray-400 transition-colors">Privacy</a>
                <a href="#/terms" className="hover:text-gray-400 transition-colors">Terms</a>
            </div>
        </div>
      </div>
    </footer>
  );
};