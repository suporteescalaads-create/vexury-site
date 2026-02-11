
import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Zap, Shield } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { generateEventId, trackLeadFront, sendToCAPI } from './FacebookService';

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

  const handleLeadAction = async (e: React.MouseEvent) => {
    // Gerar ID único para desduplicação
    const eventId = generateEventId();

    // 1. Disparar Pixel (Navegador)
    trackLeadFront(eventId);

    // 2. Enviar para CAPI (Servidor)
    // Nota: Em um formulário real, capturaríamos os dados de inputs. 
    // Aqui simulamos com dados de localização se disponíveis ou placeholders.
    await sendToCAPI({
      eventId,
      email: '', // Capturar de input se houver
      city: 'Miami', // Exemplo premium
      zip: '33149'  // Key Biscayne
    });

    // O link do WhatsApp abrirá normalmente pelo <a> envolvente 
    // ou podemos forçar o redirecionamento aqui se necessário.
  };

  return (
    <section 
      ref={containerRef} 
      className="hero-section relative pt-20 md:pt-32 pb-0 overflow-hidden bg-[#03000a]"
    >
      
      {/* BACKGROUND DE ALTO IMPACTO */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_#1a0b2e_0%,#03000a_90%)]" />
          
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
                        onClick={handleLeadAction}
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
                <img 
                    src="https://raw.githubusercontent.com/suporteescalaads-create/elementos/refs/heads/main/image-hero.webp" 
                    alt="Vexury Platform Preview" 
                    className="w-[120%] md:w-full h-auto object-cover md:object-contain block align-bottom m-0 p-0"
                    loading="eager"
                    fetchPriority="high"
                />
            </div>
        </motion.div>
      </div>
    </section>
  );
};
