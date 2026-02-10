
import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Zap, Shield } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Parallax de scroll para a imagem (apenas vertical suave)
  const { scrollY } = useScroll();
  // No mobile o movimento é reduzido para evitar o gap visual durante o scroll
  const imageY = useTransform(scrollY, [0, 1000], [0, isMobile ? 30 : 100]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const textY = useTransform(scrollY, [0, 400], [0, -40]);

  return (
    <section 
      ref={containerRef} 
      className="hero-section relative pt-20 md:pt-32 pb-0 overflow-hidden bg-[#03000a]"
    >
      
      {/* BACKGROUND DE ALTO IMPACTO - MOVIMENTAÇÃO INTENSA */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#1a0b2e_0%,#03000a_90%)]" />
          
          {/* Orbes de Luz Gigantes em Movimento */}
          <motion.div
            animate={{ 
                x: [-100, 100, -100],
                y: [-50, 150, -50],
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[180px] mix-blend-screen"
          />

          <motion.div
            animate={{ 
                x: [100, -150, 100],
                y: [100, -50, 100],
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-0 right-0 w-[700px] h-[700px] bg-blue-600/10 rounded-full blur-[200px] mix-blend-screen"
          />

          {/* Feixes de Luz (Beams) */}
          <motion.div 
            animate={{ x: ['-100%', '200%'] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: 1 }}
            className="absolute top-1/3 left-0 w-[50%] h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent rotate-[35deg] blur-[2px]"
          />
          <motion.div 
            animate={{ x: ['200%', '-100%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 3 }}
            className="absolute top-1/2 left-0 w-[40%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent rotate-[-25deg] blur-[2px]"
          />

          {/* Varredura Laser */}
          <motion.div 
            animate={{ y: ['-20%', '120%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent/10 to-transparent blur-[8px]"
          />

          {/* Partículas */}
          <div className="absolute inset-0">
            {[...Array(30)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{ 
                        x: [0, Math.random() * 100 - 50],
                        y: [0, Math.random() * -100 - 50],
                        opacity: [0, 0.8, 0],
                        scale: [0, 1, 0]
                    }}
                    transition={{ 
                        duration: Math.random() * 4 + 3, 
                        repeat: Infinity, 
                        delay: Math.random() * 10 
                    }}
                    className="absolute w-1 h-1 bg-white rounded-full blur-[1px] shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                    style={{ 
                        top: `${Math.random() * 100}%`, 
                        left: `${Math.random() * 100}%` 
                    }}
                />
            ))}
          </div>

          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] mix-blend-overlay"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center">
        
        {/* Texto da Hero */}
        <div className="container mx-auto px-6 text-center mb-4 md:mb-6">
            <motion.div style={{ opacity: textOpacity, y: textY }} className="max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-accent-light text-sm font-medium mb-6 md:mb-10 shadow-[0_0_20px_rgba(168,85,247,0.3)]">
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
                        <button className="px-10 md:px-12 py-4 md:py-5 bg-white text-black rounded-full font-bold transition-all duration-300 shadow-[0_0_25px_rgba(255,255,255,0.3)] flex items-center gap-2 group relative overflow-hidden active:scale-95">
                            <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">Build My Website Now <ArrowRight size={18} /></span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-light/30 to-transparent skew-x-12 translate-x-[-100%] group-hover:animate-shimmer" />
                        </button>
                    </a>
                </div>
            </motion.div>
        </div>

        {/* Hero Image Container */}
        <motion.div 
          style={{ 
            y: imageY,
          }}
          className="image-container relative z-20 w-full flex flex-col items-center m-0 p-0 -mt-2 md:-mt-14"
        >
            {/* Imagem Principal e Badges Flutuantes */}
            <div className="relative w-full overflow-hidden flex flex-col items-center">
                
                {/* Elementos Flutuantes (Floating UI) - Versão compacta com escala ajustada */}
                <div className="absolute inset-0 pointer-events-none z-30 flex items-center justify-center">
                    <div className="relative w-[120%] md:w-full h-full">
                        {/* Speed Badge */}
                        <motion.div 
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute left-[5%] md:left-[15%] top-[14%] md:top-[25%] flex items-center gap-2 md:gap-3 bg-[#1a0b2e]/85 backdrop-blur-xl border border-white/10 p-2 md:p-4 rounded-xl md:rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] pointer-events-auto scale-[0.7] md:scale-[0.85] origin-left"
                        >
                            <div className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-accent/20 flex items-center justify-center text-accent shadow-inner border border-accent/20">
                                <Zap size={isMobile ? 14 : 22} fill="currentColor" className="opacity-80" />
                            </div>
                            <div className="text-left">
                                <div className="text-[8px] md:text-[11px] text-gray-400 uppercase font-black tracking-[0.2em]">Speed</div>
                                <div className="text-white font-bold text-xs md:text-lg tracking-tight">100/100</div>
                            </div>
                        </motion.div>

                        {/* Security Badge */}
                        <motion.div 
                            animate={{ y: [0, 8, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="absolute right-[5%] md:right-[15%] top-[34%] md:top-[45%] flex items-center gap-2 md:gap-3 bg-[#1a0b2e]/85 backdrop-blur-xl border border-white/10 p-2 md:p-4 rounded-xl md:rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] pointer-events-auto scale-[0.7] md:scale-[0.85] origin-right"
                        >
                            <div className="w-8 h-8 md:w-11 md:h-11 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 shadow-inner border border-blue-500/20">
                                <Shield size={isMobile ? 14 : 22} fill="currentColor" className="opacity-80" />
                            </div>
                            <div className="text-left">
                                <div className="text-[8px] md:text-[11px] text-gray-400 uppercase font-black tracking-[0.2em]">Security</div>
                                <div className="text-white font-bold text-xs md:text-lg tracking-tight">Verified</div>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Aura Pulsante do Notebook */}
                <motion.div 
                    animate={{ opacity: [0.1, 0.25, 0.1], scale: [1, 1.05, 1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[50%] bg-accent/20 rounded-full blur-[140px] -z-10" 
                />
                
                <img 
                    src="https://raw.githubusercontent.com/suporteescalaads-create/elementos/refs/heads/main/image-hero.webp" 
                    alt="Vexury Platform Preview" 
                    className="w-[120%] md:w-full h-auto max-w-none md:max-w-full object-cover md:object-contain block leading-none align-bottom m-0 p-0 origin-bottom"
                    loading="eager"
                    fetchpriority="high"
                    width="1920"
                    height="1080"
                    decoding="async"
                />
            </div>
        </motion.div>
      </div>
    </section>
  );
};
