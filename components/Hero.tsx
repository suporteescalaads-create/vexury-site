
import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Zap, Shield } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 1000], [0, isMobile ? 10 : 80]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textY = useTransform(scrollY, [0, 400], [0, -20]);

  return (
    <section 
      ref={containerRef} 
      className="hero-section relative pt-20 md:pt-32 pb-0 overflow-hidden bg-[#03000a]"
    >
      
      {/* BACKGROUND DE ALTO IMPACTO - OTIMIZADO PARA MOBILE */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#1a0b2e_0%,#03000a_90%)]" />
          
          {/* Orbes de Luz - Reduzidos em mobile para performance */}
          <motion.div
            animate={isMobile ? { opacity: [0.2, 0.3, 0.2] } : { 
                x: [-50, 50, -50],
                y: [-30, 80, -30],
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.4, 0.3] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-[600px] h-[600px] bg-accent/15 rounded-full blur-[150px] mix-blend-screen"
          />

          {!isMobile && (
            <motion.div
              animate={{ 
                  x: [50, -80, 50],
                  y: [80, -30, 80],
                  scale: [1.1, 1, 1.1],
                  opacity: [0.2, 0.3, 0.2] 
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 2 }}
              className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[180px] mix-blend-screen"
            />
          )}

          {/* Partículas - Reduzidas de 30 para 10 no mobile */}
          <div className="absolute inset-0">
            {[...Array(isMobile ? 10 : 25)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{ 
                        y: [0, -100],
                        opacity: [0, 0.6, 0]
                    }}
                    transition={{ 
                        duration: Math.random() * 4 + 4, 
                        repeat: Infinity, 
                        delay: Math.random() * 5 
                    }}
                    className="absolute w-1 h-1 bg-white/50 rounded-full blur-[1px]"
                    style={{ 
                        top: `${Math.random() * 100}%`, 
                        left: `${Math.random() * 100}%` 
                    }}
                />
            ))}
          </div>

          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] mix-blend-overlay"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center">
        
        <div className="container mx-auto px-6 text-center mb-4 md:mb-6">
            <motion.div style={{ opacity: textOpacity, y: textY }} className="max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-accent-light text-sm font-medium mb-6 md:mb-10 shadow-[0_0_20px_rgba(168,85,247,0.2)]">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="tracking-widest uppercase text-[10px] md:text-xs font-semibold">AVAILABLE FOR NEW PROJECTS</span>
                </div>

                <div className="mb-4 md:mb-8">
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white">
                    Your business deserves a website that <span className="hero-title">truly represents its value</span>.
                    </h1>
                </div>

                <p className="max-w-3xl mx-auto text-base md:text-xl text-gray-400 mb-6 md:mb-10 leading-relaxed font-light">
                Whether you’re launching your first website or upgrading an outdated one, your online presence should never be the reason a client chooses your competitor.
                </p>

                <div>
                    <a 
                        href="https://wa.me/13054676317?text=Hello%20Julio!%20I'm%20interested%20in%20building%20a%20website%20with%20Vexury."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <button className="px-10 md:px-12 py-4 md:py-5 bg-white text-black rounded-full font-bold transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.2)] flex items-center gap-2 group relative overflow-hidden active:scale-95">
                            <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">Build My Website Now <ArrowRight size={18} /></span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-light/30 to-transparent skew-x-12 translate-x-[-100%] group-hover:animate-shimmer" />
                        </button>
                    </a>
                </div>
            </motion.div>
        </div>

        <motion.div 
          style={{ y: imageY }}
          className="image-container relative z-20 w-full flex flex-col items-center m-0 p-0 -mt-2 md:-mt-14"
        >
            <div className="relative w-full overflow-hidden flex flex-col items-center">
                <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center">
                    <div className="relative w-[120%] md:w-full h-full">
                        <motion.div 
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute left-[5%] md:left-[15%] top-[14%] md:top-[25%] flex items-center gap-2 md:gap-3 bg-[#1a0b2e]/90 backdrop-blur-xl border border-white/10 p-2 md:p-4 rounded-xl md:rounded-2xl shadow-2xl pointer-events-auto scale-[0.65] md:scale-[0.85] origin-left"
                        >
                            <div className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-accent/20 flex items-center justify-center text-accent border border-accent/20">
                                <Zap size={isMobile ? 14 : 22} fill="currentColor" />
                            </div>
                            <div className="text-left">
                                <div className="text-[8px] md:text-[11px] text-gray-400 uppercase font-black tracking-widest">Speed</div>
                                <div className="text-white font-bold text-xs md:text-lg">100/100</div>
                            </div>
                        </motion.div>

                        <motion.div 
                            animate={{ y: [0, 5, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute right-[5%] md:right-[15%] top-[34%] md:top-[45%] flex items-center gap-2 md:gap-3 bg-[#1a0b2e]/90 backdrop-blur-xl border border-white/10 p-2 md:p-4 rounded-xl md:rounded-2xl shadow-2xl pointer-events-auto scale-[0.65] md:scale-[0.85] origin-right"
                        >
                            <div className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/20">
                                <Shield size={isMobile ? 14 : 22} fill="currentColor" />
                            </div>
                            <div className="text-left">
                                <div className="text-[8px] md:text-[11px] text-gray-400 uppercase font-black tracking-widest">Security</div>
                                <div className="text-white font-bold text-xs md:text-lg">Verified</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                <img 
                    src="https://raw.githubusercontent.com/suporteescalaads-create/elementos/refs/heads/main/image-hero.webp" 
                    alt="Vexury Platform Preview" 
                    className="w-[120%] md:w-full h-auto object-cover md:object-contain block align-bottom m-0 p-0"
                    loading="eager"
                    fetchPriority="high"
                    width="1200"
                    height="675"
                    decoding="async"
                />
            </div>
        </motion.div>
      </div>
    </section>
  );
};
