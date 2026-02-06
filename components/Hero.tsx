import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 0.98]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.9]);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-0 overflow-hidden md:min-h-screen flex flex-col justify-end bg-[#03000a]">
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a0b2e] via-[#03000a] to-[#000000]" />
          <motion.div
            animate={{
                x: ["-10%", "10%", "-5%", "10%"],
                y: ["-5%", "10%", "5%", "-10%"],
                opacity: [0.1, 0.2, 0.1]
            }}
            transition={{ duration: 20, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[150px] mix-blend-screen pointer-events-none opacity-20"
          />
      </div>

      <div className="container mx-auto px-0 md:px-6 text-center relative z-20 flex flex-col items-center">
        <div className="px-4 md:px-0 max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-accent-light text-sm font-medium mb-12 shadow-[0_0_30px_rgba(168,85,247,0.2)]"
            >
              <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="tracking-widest uppercase text-xs font-semibold">AVAILABLE FOR NEW PROJECTS</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-8">
              Your business deserves a website that <span className="text-shine">truly represents its value</span>.
            </h1>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-12 leading-relaxed font-light">
              Whether you’re launching your first website or upgrading an outdated one, your online presence should never be the reason a client chooses your competitor.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
              <a 
                href="https://wa.me/13054676317"
                target="_blank"
                rel="noopener noreferrer"
              >
                <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-5 bg-white text-black rounded-full font-bold transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center gap-2 group relative overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">Build My Website Now <ArrowRight size={18} /></span>
                </motion.button>
              </a>
            </div>
        </div>

        {/* --- PERFORMANCE OPTIMIZED IMAGE --- */}
        <motion.div 
          style={{ scale, opacity }}
          className="relative w-full max-w-[1200px] mx-auto z-20 flex justify-center items-end"
        >
            <div className="relative w-full flex justify-center items-end" style={{ aspectRatio: '1200/600' }}>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-accent/20 rounded-full blur-[100px] -z-10" />
                
                <picture>
                  <source 
                    srcSet="https://raw.githubusercontent.com/suporteescalaads-create/elementos/refs/heads/main/image-hero.webp" 
                    type="image/webp" 
                  />
                  <img 
                      src="https://raw.githubusercontent.com/suporteescalaads-create/elementos/refs/heads/main/image-hero.webp" 
                      alt="Vexury Dashboard Interface" 
                      width="1200"
                      height="600"
                      fetchpriority="high"
                      className="w-full h-auto object-contain block mb-[-2px] drop-shadow-[0_-20px_50px_rgba(168,85,247,0.1)]"
                      style={{ contentVisibility: 'auto' }}
                  />
                </picture>
            </div>
        </motion.div>
      </div>
    </section>
  );
};