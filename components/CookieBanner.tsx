
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie, ShieldCheck } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('vexury-cookie-consent');
    if (!consent) {
      // Aparece logo após o carregamento da Hero (800ms)
      const timer = setTimeout(() => setIsVisible(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('vexury-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('vexury-cookie-consent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          exit={{ y: 50, opacity: 0, scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-4 left-4 md:left-auto md:right-8 md:bottom-8 md:max-w-[380px] z-[100]"
        >
          {/* Floating Glass Card */}
          <div className="bg-[#0a0510]/95 backdrop-blur-3xl border border-white/10 p-6 md:p-8 rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.9),0_0_40px_rgba(168,85,247,0.15)] relative overflow-hidden group pointer-events-auto">
            
            {/* Ambient Background Aura */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-[60px] pointer-events-none group-hover:bg-accent/30 transition-colors duration-700" />
            
            <div className="relative z-10">
              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-accent to-purple-700 flex items-center justify-center text-white shrink-0 shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                  <Cookie size={22} />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-base tracking-tight">Cookie Consent</h4>
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck size={10} className="text-accent" />
                    <span className="text-accent-light text-[9px] uppercase tracking-[0.15em] font-black">Secure Privacy</span>
                  </div>
                </div>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="text-gray-500 hover:text-white p-2 hover:bg-white/5 rounded-full transition-all"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed mb-8 font-light">
                We use cookies to refine your experience. By choosing <span className="text-white font-medium">"Accept All"</span>, you join the Vexury elite digital standard.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col gap-2.5">
                <button
                  onClick={handleAccept}
                  className="w-full py-4 bg-accent text-white rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-500 shadow-[0_10px_20px_rgba(168,85,247,0.2)] active:scale-95 group/btn overflow-hidden relative"
                >
                  <span className="relative z-10">Accept All</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-100%] group-hover/btn:animate-shimmer" />
                </button>
                <button
                  onClick={handleReject}
                  className="w-full py-4 bg-white/5 border border-white/10 text-gray-500 rounded-2xl text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-white/10 hover:text-white transition-all duration-300 active:scale-95"
                >
                  Reject Non-Essential
                </button>
              </div>

              {/* Footer Policy Link */}
              <div className="mt-6 text-center">
                <a href="#/privacy.html" className="text-[9px] text-gray-600 hover:text-accent uppercase tracking-widest font-black transition-colors flex items-center justify-center gap-1">
                  Read Privacy Policy <X size={8} className="rotate-45" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
