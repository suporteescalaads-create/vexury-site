import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, ShieldCheck, Check } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check for previous consent
    const consent = localStorage.getItem('vexury-consent');
    if (!consent) {
      // Requirements: Show after 1 second
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('vexury-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('vexury-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ 
            duration: 0.7, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="fixed bottom-6 right-6 z-[99999] w-[calc(100%-48px)] max-w-sm pointer-events-auto"
        >
          {/* Card Container Premium Vexury Style */}
          <div className="relative overflow-hidden bg-[#050208]/95 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-7 shadow-[0_40px_100px_rgba(0,0,0,0.9),0_0_30px_rgba(168,85,247,0.1)]">
            
            {/* Glossy Top Shine */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.1] to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              {/* Header Info */}
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent border border-accent/20 shadow-[0_0_20px_rgba(168,85,247,0.3)] shrink-0">
                  <Cookie size={24} className="animate-pulse-slow" />
                </div>
                <div>
                  <h4 className="text-white font-black text-xs uppercase tracking-[0.2em]">Privacy Protocol</h4>
                  <div className="flex items-center gap-1.5 text-[9px] text-accent-light uppercase tracking-[0.2em] font-black opacity-70">
                    <ShieldCheck size={12} strokeWidth={3} />
                    Secured by Vexury
                  </div>
                </div>
              </div>

              {/* Message */}
              <p className="text-gray-400 text-xs leading-relaxed mb-8 font-light tracking-wide">
                We use cookies to refine your journey and ensure the <span className="text-white font-bold">Vexury</span> excellence you deserve. 
                By clicking "Accept All", you authorize our digital interaction protocol.
              </p>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleDecline}
                  className="flex-1 py-4 px-4 rounded-2xl border border-white/5 bg-white/5 text-gray-500 text-[10px] font-black uppercase tracking-[0.2em] hover:text-white hover:bg-white/10 transition-all duration-300 active:scale-95"
                >
                  Essential
                </button>
                <button
                  onClick={handleAccept}
                  className="flex-[1.8] py-4 px-4 rounded-2xl bg-white text-black text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_10px_30px_rgba(255,255,255,0.15)] hover:bg-accent hover:text-white transition-all duration-500 flex items-center justify-center gap-2 group/btn relative overflow-hidden active:scale-95"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Accept All <Check size={16} strokeWidth={3} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 translate-x-[-150%] group-hover/btn:animate-shimmer" />
                </button>
              </div>
            </div>

            {/* Bottom Accent Decor */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};