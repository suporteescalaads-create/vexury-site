
import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Scroll Physics
  const { scrollY } = useScroll();
  
  // Minimal movement for a premium feel
  const scale = useTransform(scrollY, [0, 500], [1, 0.98]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.9]);
  const blur = useTransform(scrollY, [0, 500], ["0px", "2px"]);

  useEffect(() => {
    setIsMounted(true);
    setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
    });

    const handleResize = () => {
        setDimensions({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-0 overflow-hidden md:min-h-screen flex flex-col justify-end bg-[#03000a]">
      
      {/* --- Dynamic Background --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a0b2e] via-[#03000a] to-[#000000]" />
          
          <motion.div
            animate={{
                x: ["-20%", "20%", "-10%", "15%"],
                y: ["-10%", "15%", "10%", "-20%"],
                scale: [1, 1.3, 0.9, 1.2],
                opacity: [0.2, 0.4, 0.2]
            }}
            transition={{
                duration: 20,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
            }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-accent rounded-full blur-[150px] mix-blend-screen pointer-events-none opacity-30"
          />

           <motion.div
            animate={{
                x: ["20%", "-20%", "10%", "-15%"],
                y: ["10%", "-15%", "-10%", "20%"],
            }}
            transition={{
                duration: 25,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut"
            }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600 rounded-full blur-[150px] mix-blend-screen pointer-events-none opacity-20"
          />

          <motion.div 
            animate={{ 
                backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
            }}
            className="absolute inset-0 opacity-30"
            style={{
                backgroundImage: 'linear-gradient(135deg, transparent 0%, transparent 40%, rgba(168, 85, 247, 0.2) 50%, transparent 60%, transparent 100%)',
                backgroundSize: '200% 200%'
            }}
          />

          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>
      </div>

      <div className="container mx-auto px-0 md:px-6 text-center relative z-20 flex flex-col items-center">
        
        <div className="px-4 md:px-0 max-w-4xl">
            <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-accent-light text-sm font-medium mb-12 shadow-[0_0_30px_rgba(168,85,247,0.3)] hover:shadow-[0_0_50px_rgba(168,85,247,0.5)] transition-shadow duration-700"
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
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                    >
                    Your business deserves a website that <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-light to-accent animate-pulse-slow">truly represents its value</span>.
                    </motion.h1>
                </div>
            </div>

            <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="max-w-3xl mx-auto text-lg md:text-xl text-gray-300 mb-12 leading-relaxed font-light drop-shadow-lg"
            >
            Whether you’re launching your first website or upgrading an outdated one, your online presence should never be the reason a client chooses your competitor.
            </motion.p>

            <div className="relative inline-block mb-12">
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[180%] bg-accent/30 blur-[80px] rounded-full pointer-events-none -z-10"
                />

                <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-20"
                >
                <a 
                    href="https://wa.me/13054676317?text=Hello%20Julio!%20I'm%20interested%20in%20building%20a%20website%20with%20Vexury."
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <motion.button 
                        whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(168, 85, 247, 0.6)" }}
                        whileTap={{ scale: 0.95 }}
                        className="px-12 py-5 bg-white text-black rounded-full font-bold transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center gap-2 group relative overflow-hidden"
                    >
                        <span className="relative z-10 flex items-center gap-2">Build My Website Now <ArrowRight size={18} /></span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-light/50 to-transparent skew-x-12 translate-x-[-100%] group-hover:animate-shimmer" />
                    </motion.button>
                </a>
                </motion.div>
            </div>
        </div>

        {/* HERO IMAGE - GLUED TO BOTTOM */}
        <motion.div 
          style={{ scale, opacity, filter: blur }}
          className="relative w-full max-w-[1200px] mx-auto z-20 flex justify-center items-end"
        >
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full flex justify-center items-end"
            >
                {/* Glow behind image base */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-[40%] bg-accent/20 rounded-full blur-[100px] -z-10 animate-pulse-slow" />
                
                <img 
                    src="https://raw.githubusercontent.com/suporteescalaads-create/elementos/refs/heads/main/image-hero.webp" 
                    alt="Interface" 
                    className="w-full h-auto object-contain block mb-[-2px] drop-shadow-[0_-20px_50px_rgba(168,85,247,0.15)]"
                />
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
