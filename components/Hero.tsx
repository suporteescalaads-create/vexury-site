
import React, { useRef, useEffect, useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Meteor: React.FC<{ id: number }> = ({ id }) => {
  const delay = useMemo(() => Math.random() * 20, []);
  const duration = useMemo(() => Math.random() * 3 + 2, []);
  const left = useMemo(() => Math.random() * 100, []);
  
  return (
    <motion.div
      initial={{ top: -100, left: `${left}%`, opacity: 0 }}
      animate={{ 
        top: '120%', 
        left: `${left - 10}%`, 
        opacity: [0, 0.6, 0] 
      }}
      transition={{ 
        duration: duration, 
        repeat: Infinity, 
        delay: delay,
        ease: "linear"
      }}
      className="absolute w-[1px] h-[80px] bg-gradient-to-b from-white/40 via-accent-light/20 to-transparent z-0 pointer-events-none"
    />
  );
};

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

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
      className="hero-section relative pt-20 md:pt-32 pb-0 overflow-hidden bg-[#03000a] min-h-[95vh] flex flex-col items-center"
    >
      
      {/* ATMOSFERA DE LUZES CINEMATOGRÁFICAS (ULTRA-SUAVE) */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_40%,_#0d051a_0%,#03000a_90%)]" />
          
          <div className="absolute inset-0 z-10 opacity-40">
            {[...Array(8)].map((_, i) => <Meteor key={i} id={i} />)}
          </div>

          <MDiv
            animate={{ 
              x: [-150, 150, -150],
              y: [-100, 100, -100],
              opacity: [0.15, 0.25, 0.15],
              scale: [1, 1.3, 1]
            }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-10%] left-[-10%] w-[100vw] h-[100vw] bg-accent/20 rounded-full blur-[250px] mix-blend-screen will-change-transform"
          />

          <MDiv
            animate={{ 
              x: [100, -100, 100],
              y: [50, -50, 50],
              opacity: [0.1, 0.2, 0.1] 
            }}
            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[200px] mix-blend-screen will-change-transform"
          />

          <MDiv
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.35, 0.2] 
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent-light/10 rounded-full blur-[180px] mix-blend-overlay will-change-transform"
          />

          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center w-full">
        
        <div className="container mx-auto px-6 text-center mb-6 md:mb-10">
            <MDiv style={{ opacity: textOpacity, y: textY } as any} className="max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-accent-light text-sm font-medium mb-8 md:mb-12 shadow-[0_0_20px_rgba(168,85,247,0.15)] backdrop-blur-md">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="tracking-widest uppercase text-[10px] md:text-xs font-semibold">AVAILABLE FOR NEW PROJECTS</span>
                </div>

                <div className="mb-6 md:mb-10">
                    <h1 className="text-4xl md:text-8xl font-black tracking-tighter leading-[0.9] text-white">
                    Your business deserves a website that <span className="hero-title">truly represents its value</span>.
                    </h1>
                </div>

                <p className="max-w-3xl mx-auto text-base md:text-2xl text-gray-400 mb-10 md:mb-14 leading-relaxed font-light tracking-tight">
                Whether you’re launching your first website or upgrading an outdated one, your online presence should never be the reason a client chooses your competitor.
                </p>

                <div>
                    <a 
                        href="sms:+13054676397&body=Hello!%20I'm%20interested%20in%20building%20a%20website%20with%20Vexury."
                        className="inline-block"
                        aria-label="Build My Website Now - Contact us via iMessage"
                    >
                        <button className="px-10 md:px-14 py-5 md:py-6 bg-white text-black rounded-full font-black transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.2)] flex items-center gap-3 group relative overflow-hidden active:scale-95">
                            <span className="relative z-10 flex items-center gap-3 uppercase tracking-widest text-sm md:text-base">Build My Website Now <ArrowRight size={20} strokeWidth={3} /></span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-light/40 to-transparent skew-x-12 translate-x-[-150%] group-hover:animate-shimmer" />
                        </button>
                    </a>
                </div>
            </MDiv>
        </div>

        <MDiv 
          style={{ y: imageY } as any}
          className="image-container relative z-20 w-full flex flex-col items-center m-0 p-0 -mt-4 md:-mt-24"
        >
            <div className="relative w-full overflow-hidden flex flex-col items-center aspect-[21/9]">
                <MDiv 
                  animate={{ top: ['-10%', '110%'] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent z-30 opacity-30 pointer-events-none"
                />

                <img 
                    src="https://raw.githubusercontent.com/suporteescalaads-create/elementos/refs/heads/main/image-hero.webp" 
                    alt="Vexury Platform Preview" 
                    className="w-[115%] md:w-full h-auto object-cover md:object-contain block align-bottom m-0 p-0 drop-shadow-[0_40px_100px_rgba(0,0,0,0.6)]"
                    width="1200"
                    height="675"
                    loading="eager"
                    fetchPriority="high"
                />
                
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#03000a] via-[#03000a]/80 to-transparent z-20" />
            </div>
        </MDiv>
      </div>
    </section>
  );
};
