import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const meteorCanvasRef = useRef<HTMLCanvasElement>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  // Scroll Physics
  const { scrollY } = useScroll();
  
  // Revised Scroll Physics for "Folding" & "Rising" Effect
  // Extended the ranges (0 to 1000) to make the effect feel "slower" relative to scroll speed
  const rotateX = useTransform(scrollY, [0, 1000], [0, 20]); 
  const scale = useTransform(scrollY, [0, 1000], [1, 0.9]);
  const opacity = useTransform(scrollY, [0, 800], [1, 0.6]);
  const blur = useTransform(scrollY, [0, 800], ["0px", "5px"]);
  
  // New Parallax Y: Moves the image UP as user scrolls DOWN
  const y = useTransform(scrollY, [0, 1000], [0, -250]);

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

  // Meteor Shower Effect
  useEffect(() => {
    const canvas = meteorCanvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    class Meteor {
        x: number;
        y: number;
        length: number;
        speed: number;
        opacity: number;
        width: number;

        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.length = Math.random() * 80 + 10;
            this.speed = Math.random() * 2 + 0.5;
            this.opacity = Math.random() * 0.2 + 0.05;
            this.width = Math.random() * 1 + 0.5;
            
            // Randomize start positions to appear naturally
            if (Math.random() > 0.5) {
                this.x = Math.random() * width;
                this.y = -100;
            } else {
                this.x = width + 100;
                this.y = Math.random() * height;
            }
        }

        reset() {
             // Respawn top or right
             if (Math.random() > 0.5) {
                 this.x = Math.random() * width * 1.5; // Spread out wider
                 this.y = -100;
             } else {
                 this.x = width + 100;
                 this.y = Math.random() * height;
             }
             
             this.length = Math.random() * 80 + 20;
             this.speed = Math.random() * 4 + 2; // Faster on reset for dynamic feel
             this.opacity = Math.random() * 0.4 + 0.1;
             this.width = Math.random() * 2 + 0.5;
        }

        update() {
            // Move diagonal (Top-Right to Bottom-Left)
            this.x -= this.speed;
            this.y += this.speed;

            // Reset if out of bounds
            if (this.x < -100 || this.y > height + 100) {
                this.reset();
            }
        }

        draw() {
            ctx.beginPath();
            // Gradient trail for "Shooting Star" look
            // Line from (x, y) backwards to (x + length, y - length)
            const tailX = this.x + this.length;
            const tailY = this.y - this.length;
            
            const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
            gradient.addColorStop(0, `rgba(255, 255, 255, ${this.opacity})`); // Head (White/Bright)
            gradient.addColorStop(0.2, `rgba(168, 85, 247, ${this.opacity * 0.8})`); // Body (Accent)
            gradient.addColorStop(1, `rgba(168, 85, 247, 0)`); // Tail (Transparent)

            ctx.strokeStyle = gradient;
            ctx.lineWidth = this.width;
            ctx.lineCap = 'round';
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(tailX, tailY);
            ctx.stroke();
        }
    }

    const meteors: Meteor[] = [];
    // Create density based on screen width
    // Reduced density: width / 160 (was 60)
    const count = Math.floor(width / 160); 

    for (let i = 0; i < count; i++) {
        meteors.push(new Meteor());
    }

    let animationFrameId: number;

    const render = () => {
        ctx.clearRect(0, 0, width, height);
        meteors.forEach(m => {
            m.update();
            m.draw();
        });
        animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        canvas.width = width;
        canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Mouse Trail Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let trailParticles: Array<{ x: number; y: number; radius: number; alpha: number }> = [];
    
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    const handleMouseMove = (e: MouseEvent) => {
        // Add trail particles
        for (let i = 0; i < 2; i++) {
             trailParticles.push({
                x: e.clientX,
                y: e.clientY,
                radius: Math.random() * 15 + 20, // Bigger trail
                alpha: 0.8 // More opaque
            });
        }
    };

    window.addEventListener('mousemove', handleMouseMove);

    const render = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw Mouse Trail
        for (let i = trailParticles.length - 1; i >= 0; i--) {
            const p = trailParticles[i];
            p.alpha -= 0.02; // Faster decay
            p.radius += 0.5; 
            
            if (p.alpha <= 0) {
                trailParticles.splice(i, 1);
                continue;
            }

            const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
            gradient.addColorStop(0, `rgba(168, 85, 247, ${p.alpha})`); 
            gradient.addColorStop(1, 'rgba(168, 85, 247, 0)');

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = gradient;
            ctx.globalCompositeOperation = 'lighter'; // Stronger blend mode
            ctx.fill();
            ctx.globalCompositeOperation = 'source-over';
        }

        animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
        window.removeEventListener('resize', resizeCanvas);
        window.removeEventListener('mousemove', handleMouseMove);
        cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section ref={containerRef} className="relative pt-32 pb-0 overflow-hidden perspective-[2000px] md:min-h-screen flex flex-col justify-end bg-[#03000a]">
      
      {/* --- Dynamic Background --- */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
          
          {/* 1. Deep Atmospheric Gradient */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#1a0b2e] via-[#03000a] to-[#000000]" />
          
          {/* 2. Wandering Light (Luz Perambulando) - Stronger Neon */}
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

           {/* 3. Secondary Wandering Light - Contrast */}
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

          {/* 4. Diagonal Beam (Moving Light) */}
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

          {/* 5. METEOR SHOWER CANVAS */}
          <canvas 
            ref={meteorCanvasRef}
            className="absolute inset-0 z-0 pointer-events-none opacity-60"
          />

          {/* 6. Canvas: Mouse Trail Only */}
          <canvas 
            ref={canvasRef}
            className="absolute inset-0 z-10 pointer-events-none"
          />

          {/* Noise Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

      </div>

      <div className="container mx-auto px-0 md:px-6 text-center relative z-20">
        
        <div className="px-4 md:px-0">
            {/* Elite Badge - UPDATED TEXT */}
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

            {/* Updated Typography with Glow */}
            <div className="mb-8 relative z-20 max-w-5xl mx-auto">
                <div className="overflow-hidden p-2">
                    <motion.h1 
                    initial={{ y: "110%", rotateZ: 1 }}
                    animate={{ y: 0, rotateZ: 0 }}
                    transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-8xl font-bold tracking-tight leading-[1.1] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]"
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

            {/* Glass Buttons with Neon Borders */}
            <div className="relative inline-block">
                {/* Strong animated glow behind buttons */}
                <motion.div 
                    animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[180%] bg-accent/30 blur-[80px] rounded-full pointer-events-none -z-10"
                />

                <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 md:mb-12 relative z-20"
                >
                <motion.button 
                    whileHover={{ scale: 1.05, boxShadow: "0 0 60px rgba(168, 85, 247, 0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    className="px-12 py-5 bg-white text-black rounded-full font-bold transition-all duration-500 shadow-[0_0_40px_rgba(168,85,247,0.4)] flex items-center gap-2 group relative overflow-hidden"
                >
                    <span className="relative z-10 flex items-center gap-2">Build My Website Now <ArrowRight size={18} /></span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-light/50 to-transparent skew-x-12 translate-x-[-100%] group-hover:animate-shimmer" />
                </motion.button>
                </motion.div>
            </div>
        </div>

        {/* 3D Interface Visual - UPDATED ANIMATION & PARALLAX */}
        <motion.div 
          style={{ rotateX, scale, opacity, filter: blur, y }}
          className="relative max-w-7xl mx-auto z-20 perspective-1000"
        >
            <motion.div
                initial={{ y: 200, rotateX: 20, opacity: 0 }} // Start lower
                animate={{ y: 0, rotateX: 0, opacity: 1 }}
                transition={{ duration: 2.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} // Slower duration
                className="relative flex justify-center items-center"
            >
                {/* Glow Behind Image - Subtle backlight */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-accent/20 rounded-full blur-[80px] -z-10 animate-pulse-slow" />
                
                {/* Pure Image without container borders */}
                <img 
                    src="https://raw.githubusercontent.com/will-siq/vexury-assets/refs/heads/main/image-hero.webp" 
                    alt="Interface" 
                    className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:scale-105 transition-transform duration-[2s]"
                />
            </motion.div>
        </motion.div>
      </div>
    </section>
  );
};