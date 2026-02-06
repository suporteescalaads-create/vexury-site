
import React, { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 0.98]);

  return (
    <section ref={containerRef} className="hero-section relative pt-32 pb-0 overflow-hidden bg-[#03000a]">
      
      {/* Background Dinâmico - Otimizado com will-change */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#1a0b2e_0%,_#03000a_70%)]" />
          
          <motion.div
            animate={{ x: ["-2%", "2%"], opacity: [0.15, 0.2] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "linear" }}
            style={{ willChange: "transform, opacity" }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[150px] mix-blend-screen opacity-20"
          />

          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-20 flex flex-col items-center">
        
        <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-accent-light text-sm font-medium mb-10 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="tracking-widest uppercase text-xs font-semibold">AVAILABLE FOR NEW PROJECTS</span>
            </div>

            <div className="mb-8">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
                Your business deserves a website that <span className="hero-title">truly represents its value</span>.
                </h1>
            </div>

            <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-light">
            Whether you’re launching your first website or upgrading an outdated one, your online presence should never be the reason a client chooses your competitor.
            </p>

            <div className="mb-12">
                <a 
                    href="https://wa.me/13054676317?text=Hello%20Julio!%20I'm%20interested%20in%20building%20a%20website%20with%20Vexury."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                >
                    <button className="px-12 py-5 bg-white text-black rounded-full font-bold transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2 group relative overflow-hidden active:scale-95">
                        <span className="relative z-10 flex items-center gap-2">Build My Website Now <ArrowRight size={18} /></span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-light/30 to-transparent skew-x-12 translate-x-[-100%] group-hover:animate-shimmer" />
                    </button>
                </a>
            </div>
        </div>

        {/* Hero Image - Sem motion para garantir FCP/LCP instantâneo */}
        <motion.div 
          style={{ scale }}
          className="image-container relative z-20 flex justify-center items-end"
        >
            <div className="relative w-full flex justify-center items-end">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-accent/5 rounded-full blur-[100px] -z-10" />
                <img 
                    src="https://raw.githubusercontent.com/suporteescalaads-create/elementos/refs/heads/main/image-hero.webp" 
                    alt="Vexury Platform Preview" 
                    className="w-full h-auto object-contain block mb-[-1px] drop-shadow-[0_-10px_30px_rgba(168,85,247,0.1)]"
                    loading="eager"
                    fetchpriority="high"
                    width="1200"
                    height="600"
                    decoding="async"
                />
            </div>
        </motion.div>
      </div>
    </section>
  );
};
