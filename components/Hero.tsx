
import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Scroll Physics - Keep subtle parallax as it is GPU accelerated and looks premium
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 0.98]);
  const opacityText = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative pt-32 pb-0 overflow-hidden md:min-h-screen flex flex-col justify-end bg-[#03000a]">
      
      {/* --- Static Background --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a0b2e] via-[#03000a] to-[#000000]" />
          
          {/* Static Glow Blobs - No animation for max performance */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[150px] mix-blend-screen opacity-20" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] mix-blend-screen opacity-15" />

          <div className="absolute inset-0 opacity-20"
            style={{
                backgroundImage: 'linear-gradient(135deg, transparent 0%, transparent 40%, rgba(168, 85, 247, 0.1) 50%, transparent 60%, transparent 100%)',
                backgroundSize: '200% 200%'
            }}
          />

          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-0 md:px-6 text-center relative z-20 flex flex-col items-center">
        
        <motion.div style={{ opacity: opacityText }} className="px-4 md:px-0 max-w-4xl">
            <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-accent-light text-sm font-medium mb-12 shadow-[0_0_20px_rgba(168,85,247,0.2)]"
            >
            <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 shadow-[0_0_10px_#22c55e]"></span>
            </span>
            <span className="tracking-widest uppercase text-xs font-semibold">AVAILABLE FOR NEW PROJECTS</span>
            </motion.div>

            <div className="mb-8 relative z-20">
                <div className="overflow-hidden p-2">
                    <motion.h1 
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white"
                    >
                    Your business deserves a website that <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-light to-accent">truly represents its value</span>.
                    </motion.h1>
                </div>
            </div>

            <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-12 leading-relaxed font-light"
            >
            Whether you’re launching your first website or upgrading an outdated one, your online presence should never be the reason a client chooses your competitor.
            </motion.p>

            <div className="relative inline-block mb-12">
                <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-20"
                >
                <a 
                    href="https://wa.me/13054676317?text=Hello%20Julio!%20I'm%20interested%20in%20building%20a%20website%20with%20Vexury."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.button 
                        whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(168, 85, 247, 0.4)" }}
                        whileTap={{ scale: 0.98 }}
                        className="px-12 py-5 bg-white text-black rounded-full font-bold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2 group relative overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">Build My Website Now <ArrowRight size={18} /></span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-light/30 to-transparent skew-x-12 translate-x-[-100%] group-hover:animate-shimmer" />
                    </motion.button>
                </a>
                </motion.div>
            </div>
        </motion.div>

        {/* HERO IMAGE - GLUED TO BOTTOM */}
        <motion.div 
          style={{ scale }}
          className="relative w-full max-w-[1200px] mx-auto z-20 flex justify-center items-end"
        >
            <motion.div
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full flex justify-center items-end"
            >
                {/* Fixed Glow behind image base */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-accent/10 rounded-full blur-[100px] -z-10" />
                
                <img 
                    src="https://raw.githubusercontent.com/suporteescalaads-create/elementos/refs/heads/main/image-hero.webp" 
                    alt="Vexury Platform Preview" 
                    className="w-full h-auto object-contain block mb-[-2px] drop-shadow-[0_-10px_40px_rgba(168,85,247,0.1)]"
                    loading="eager"
                    width="1200"
                    height="600"
                />
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
