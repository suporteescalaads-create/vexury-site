
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, ShieldCheck, Check, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Cast motion components to any to bypass environment-specific type errors
  const MDiv = motion.div as any;

  useEffect(() => {
    // Check for previous consent
    const consent = localStorage.getItem('vexury-consent');
    if (!consent) {
      // Requirements: Show after 3 seconds
      const timer = setTimeout(() => setIsVisible(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('vexury-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDeclineAll = () => {
    localStorage.setItem('vexury-consent', 'rejected');
    setIsVisible(false);
  };

  const handleEssential = () => {
    localStorage.setItem('vexury-consent', 'essential');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <MDiv
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ 
            duration: 0.7, 
            ease: [0.16, 1, 0.3, 1] 
          }}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[99999] w-[calc(100%-32px)] md:w-full max-w-[340px] md:max-w-lg pointer-events-auto"
        >
          {/* Card Container Premium Vexury Style */}
          <div className="relative overflow-hidden bg-[#050208]/95 backdrop-blur-3xl border border-white/10 rounded-[1.8rem] md:rounded-[2.5rem] p-5 md:p-7 shadow-[0_40px_100px_rgba(0,0,0,0.9),0_0_30px_rgba(168,85,247,0.15)]">
            
            {/* Glossy Top Shine */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/[0.1] to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              {/* Header Info */}
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5">
                <div className="w-9 h-9 md:w-12 md:h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent border border-accent/20 shadow-[0_0_20px_rgba(168,85,247,0.3)] shrink-0">
                  <Cookie size={18} className="md:w-6 md:h-6 animate-pulse-slow" />
                </div>
                <div>
                  <h4 className="text-white font-black text-[10px] md:text-xs uppercase tracking-[0.15em] md:tracking-[0.2em]">Cookie Policy</h4>
                  <div className="flex items-center gap-1.5 text-[8px] md:text-[9px] text-accent-light uppercase tracking-[0.15em] md:tracking-[0.2em] font-black opacity-60">
                    <ShieldCheck size={10} className="md:w-3 md:h-3" strokeWidth={3} />
                    Vexury Secured
                  </div>
                </div>
              </div>

              {/* Message */}
              <p className="text-gray-400 text-[11px] md:text-xs leading-relaxed mb-6 md:mb-8 font-light tracking-wide">
                We use cookies to enhance your navigation and analyze our traffic. You can choose to <span className="text-white font-medium">Accept All</span>, keep only <span className="text-white font-medium">Essential</span> ones, or <span className="text-white font-medium">Decline All</span> non-essential trackers.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 md:gap-3">
                <div className="flex flex-[1.8] gap-2">
                  <button
                    onClick={handleEssential}
                    className="flex-1 py-3 md:py-4 px-2 md:px-3 rounded-xl md:rounded-2xl border border-white/5 bg-white/5 text-gray-500 text-[8px] md:text-[9px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] hover:text-white hover:bg-white/10 transition-all duration-300 active:scale-95 whitespace-nowrap"
                  >
                    Essential
                  </button>
                  <button
                    onClick={handleDeclineAll}
                    className="flex-[1.2] py-3 md:py-4 px-2 md:px-3 rounded-xl md:rounded-2xl border border-white/5 bg-white/5 text-gray-400/60 text-[8px] md:text-[9px] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] hover:text-red-400 hover:bg-red-500/10 transition-all duration-300 active:scale-95 flex items-center justify-center gap-1 whitespace-nowrap"
                  >
                    Decline All <X size={10} className="md:w-3 md:h-3" strokeWidth={3} />
                  </button>
                </div>
                
                <button
                  onClick={handleAccept}
                  className="w-full sm:flex-1 py-3 md:py-4 px-4 rounded-xl md:rounded-2xl bg-white text-black text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] shadow-[0_8px_20px_rgba(255,255,255,0.1)] hover:bg-accent hover:text-white transition-all duration-500 flex items-center justify-center gap-1.5 md:gap-2 group/btn relative overflow-hidden active:scale-95 whitespace-nowrap"
                >
                  <span className="relative z-10 flex items-center gap-1.5 md:gap-2">
                    Accept All <Check size={14} className="md:w-4 md:h-4" strokeWidth={3} />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 translate-x-[-150%] group-hover/btn:animate-shimmer" />
                </button>
              </div>
            </div>

            {/* Bottom Accent Decor */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-40" />
          </div>
        </MDiv>
      )}
    </AnimatePresence>
  );
};
