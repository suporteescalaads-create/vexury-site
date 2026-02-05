
import React from 'react';
import { Instagram, Phone, Mail, MessageSquare } from 'lucide-react';
import { Logo } from './Logo';

export const Contact: React.FC = () => {
  
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Check if we are on the home page (hash doesn't start with #/)
    const isHomePage = !window.location.hash.startsWith('#/');

    // If we are NOT on home page, allow default navigation to occur.
    if (!isHomePage) {
        return;
    }

    // If on home page, manual smooth scroll
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const headerOffset = 100; 
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
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/80 to-transparent blur-[4px] opacity-70" />
      </div>

      <div className="container mx-auto px-6">
        
        {/* CTA Banner - Enhanced size of internal components */}
        <div className="bg-gradient-to-r from-white/5 to-white/[0.02] backdrop-blur-2xl rounded-[3rem] p-12 md:p-20 text-center border border-white/10 mb-16 relative overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.6)]">
             <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/10 blur-[120px] pointer-events-none" />
             <div className="absolute bottom-0 left-0 w-[350px] h-[350px] bg-blue-500/10 blur-[100px] pointer-events-none" />
             
             <div className="relative z-10 max-w-5xl mx-auto">
                 <h2 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
                    Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-300">talk</span>.
                 </h2>
                 <p className="text-gray-300 mb-12 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
                   Connect directly with our team to start building a digital presence that truly reflects the value of your business.
                 </p>
                 
                 {/* Direct Contact Options - Significantly larger cards */}
                 <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
                        <a 
                          href="tel:+13054676317" 
                          className="flex flex-col items-center gap-4 px-6 py-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-accent/50 hover:bg-white/[0.07] hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all duration-500 group"
                        >
                            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover:scale-110 group-hover:bg-accent group-hover:text-white transition-all duration-500 shadow-inner">
                                <Phone size={24} />
                            </div>
                            <div className="text-center">
                                <span className="block text-[11px] uppercase tracking-[0.25em] text-gray-500 font-bold mb-1.5">Talk to us</span>
                                <span className="text-white text-base font-semibold tracking-tight">+1 (305) 467-6317</span>
                            </div>
                        </a>

                        <a 
                          href="mailto:hello@vexury.com" 
                          className="flex flex-col items-center gap-4 px-6 py-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-blue-400/50 hover:bg-white/[0.07] hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all duration-500 group"
                        >
                            <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 shadow-inner">
                                <Mail size={24} />
                            </div>
                            <div className="text-center">
                                <span className="block text-[11px] uppercase tracking-[0.25em] text-gray-500 font-bold mb-1.5">Send Email</span>
                                <span className="text-white text-base font-semibold tracking-tight">hello@vexury.com</span>
                            </div>
                        </a>

                        <a 
                          href="https://wa.me/13054676317" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-col items-center gap-4 px-6 py-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-green-500/50 hover:bg-white/[0.07] hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)] transition-all duration-500 group"
                        >
                            <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center text-green-400 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-white transition-all duration-500 shadow-inner">
                                <MessageSquare size={24} />
                            </div>
                            <div className="text-center">
                                <span className="block text-[11px] uppercase tracking-[0.25em] text-gray-500 font-bold mb-1.5">WhatsApp</span>
                                <span className="text-white text-base font-semibold tracking-tight">Start Chat</span>
                            </div>
                        </a>
                 </div>
             </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-16">
            <div className="col-span-2 md:col-span-1">
                 <a href="#" className="inline-block mb-6" onClick={(e) => {
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
                <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Connect</h4>
                <ul className="space-y-4 text-gray-500 text-sm mb-6">
                    <li>
                        <a href="tel:+13054676317" className="hover:text-white transition-colors font-medium">+1 (305) 467-6317</a>
                    </li>
                    <li>
                        <a href="mailto:hello@vexury.com" className="hover:text-white transition-colors font-medium">hello@vexury.com</a>
                    </li>
                </ul>
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
                <a href="privacy.html" className="hover:text-gray-400 transition-colors">Privacy</a>
                <a href="terms.html" className="hover:text-gray-400 transition-colors">Terms</a>
            </div>
        </div>
      </div>
    </footer>
  );
};
