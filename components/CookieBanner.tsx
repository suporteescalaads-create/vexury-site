
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já tomou uma decisão anteriormente
    const consent = localStorage.getItem('vexury-cookie-consent');
    if (!consent) {
      // Pequeno delay para não aparecer imediatamente ao carregar
      const timer = setTimeout(() => setIsVisible(true), 2000);
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
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-[100]"
        >
          <div className="bg-surface/80 backdrop-blur-2xl border border-white/10 p-6 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.5)] relative overflow-hidden group">
            {/* Efeito de luz sutil no fundo */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/10 rounded-full blur-[60px] pointer-events-none" />
            
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0 border border-accent/20">
                  <ShieldCheck size={20} />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">Cookie Consent</h4>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    We use cookies to enhance your experience, analyze site traffic, and help us improve our premium services. By clicking "Accept All", you agree to our use of cookies.
                  </p>
                </div>
                <button 
                  onClick={() => setIsVisible(false)}
                  className="text-gray-500 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAccept}
                  className="flex-1 px-6 py-3 bg-accent text-white rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-accent-light hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(168,85,247,0.3)] active:scale-95"
                >
                  Accept All
                </button>
                <button
                  onClick={handleReject}
                  className="px-6 py-3 bg-white/5 border border-white/10 text-gray-400 rounded-2xl text-xs font-bold uppercase tracking-widest hover:bg-white/10 hover:text-white transition-all duration-300 active:scale-95"
                >
                  Reject Non-Essential
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
