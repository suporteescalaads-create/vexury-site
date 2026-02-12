
import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  // Cast motion components to any to bypass environment-specific type errors
  const MDiv = motion.div as any;

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
      
      {/* BACKGROUND DE ALTO IMPACTO COM LUZES EM MOVIMENTO */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          {/* Base Gradiente Profunda */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#1a0b2e_0%,#03000a_90%)]" />
          
          {/* Luz Principal (Accent/Roxa) Orbiante */}
          <MDiv
            animate={{ 
                x: [-100, 100, -100],
                y: [-50, 150, -50],
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-20 -left-20 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[180px] mix-blend-screen"
          />

          {/* Segunda Luz (Azul) em contra-movimento */}
          <MDiv
            animate={{ 
                x: [100, -100, 100],
                y: [150, -50, 150],
                scale: [1.1, 1, 1.1],
                opacity: [0.1, 0.3, 0.1] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-40 -right-40 w-[700px] h-[700px] bg-blue-500/15 rounded-full blur-[160px] mix-blend-screen"
          />

          {/* Feixe de Luz "Scanner" Horizontal */}
          <MDiv
            animate={{ 
                x: ['-100%', '200%'],
                opacity: [0, 0.5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }}
            className="absolute top-1/3 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent blur-[10px]"
          />

          {/* Textura de Ruído (Noise) */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.08] mix-blend-overlay"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center">
        
        <div className="container mx-auto px-6 text-center mb-4 md:mb-6">
            <MDiv style={{ opacity: textOpacity, y: textY } as any} className="max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-accent-light text-sm font-medium mb-6 md:mb-10 shadow-[0_0_20px_rgba(168,85,247,0.2)] backdrop-blur-md">
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
            </MDiv>
        </div>

        <MDiv 
          style={{ y: imageY } as any}
          className="image-container relative z-20 w-full flex flex-col items-center m-0 p-0 -mt-2 md:-mt-14"
        >
            <div className="relative w-full overflow-hidden flex flex-col items-center">
                <img 
                    src="https://raw.githubusercontent.com/suporteescalaads-create/elementos/refs/heads/main/image-hero.webp" 
                    alt="Vexury Platform Preview" 
                    className="w-[120%] md:w-full h-auto object-cover md:object-contain block align-bottom m-0 p-0"
                    loading="eager"
                    fetchPriority="high"
                />
            </div>
            {/* Glow sutil sob o dispositivo */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[50%] bg-accent/5 blur-[100px] pointer-events-none -z-10" />
        </MDiv>
      </div>
    </section>
  );
};
