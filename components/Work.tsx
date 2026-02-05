
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, Box, Rocket, ChevronRight, CheckCircle2 } from 'lucide-react';

const steps = [
    {
        id: 0,
        stepLabel: 'STEP 01',
        title: 'Understand Your Business',
        desc: 'We start by understanding your business, your preferences, and what your clients need to see. This ensures the website reflects your brand and communicates clearly.',
        icon: Scan,
        color: '#a855f7' // Purple
    },
    {
        id: 1,
        stepLabel: 'STEP 02',
        title: 'Develop & Approve',
        desc: 'We design and build the website structure, layout, and content — and only move forward after your approval.',
        icon: Box,
        color: '#3b82f6' // Blue
    },
    {
        id: 2,
        stepLabel: 'STEP 03',
        title: 'Launch & Deliver',
        desc: 'We launch your website and make sure everything is working properly — fast, responsive, and ready to be shared.',
        icon: Rocket,
        color: '#22c55e' // Green
    }
];

// --- Visual Components for the Holographic Core ---

const RadarVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        {/* Scanning Line - Stronger Neon look */}
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-full rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(168,85,247,0.5)_360deg)] opacity-70 blur-xl"
        />
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute w-[85%] h-[85%] border-t-4 border-r-4 border-accent rounded-full shadow-[0_0_50px_#a855f7]"
        />
        
        {/* Inner Rings */}
        <div className="absolute w-[60%] h-[60%] border border-white/20 rounded-full flex items-center justify-center">
             <motion.div 
                animate={{ scale: [1, 1.4, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-6 bg-white rounded-full shadow-[0_0_30px_white]" 
             />
        </div>
        <div className="absolute w-[45%] h-[45%] border border-dashed border-accent/40 rounded-full animate-spin-slow"></div>

        {/* Floating Data Points */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }}
                className="absolute w-3 h-3 bg-accent rounded-full shadow-[0_0_15px_#a855f7]"
                style={{ transform: `rotate(${deg}deg) translate(160px)` }}
            />
        ))}
    </div>
);

const BuildVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        {/* Rotating Tech Rings */}
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute w-[340px] h-[340px] rounded-full border-2 border-blue-500/20 border-dashed"
        />
        <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] rounded-full border-2 border-blue-500/30 shadow-[0_0_30px_rgba(59,130,246,0.2)]"
            style={{ borderLeftColor: 'transparent', borderRightColor: 'transparent' }}
        />

        {/* Central Interface Assembly */}
        <div className="relative w-72 h-52">
            {/* Background Panels floating in */}
            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-blue-950/40 backdrop-blur-xl border border-blue-400/40 rounded-2xl shadow-[0_0_60px_rgba(59,130,246,0.3)]"
            />
            
            {/* Floating UI Header */}
            <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute top-0 left-0 right-0 h-10 border-b border-blue-400/30 flex items-center px-4 gap-2"
            >
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/80 shadow-[0_0_10px_red]" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 shadow-[0_0_10px_yellow]" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/80 shadow-[0_0_10px_green]" />
            </motion.div>

            {/* Content Blocks appearing */}
            <div className="absolute top-14 left-6 right-6 space-y-4">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "70%" }}
                    transition={{ delay: 0.5, duration: 0.8, repeat: Infinity, repeatDelay: 3 }}
                    className="h-5 bg-blue-400/30 rounded shadow-[0_0_15px_rgba(59,130,246,0.2)]"
                />
                <div className="flex gap-4">
                     <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                        className="w-1/3 h-24 bg-blue-400/20 rounded border border-blue-400/30 shadow-inner"
                    />
                     <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.0, duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                        className="w-2/3 h-24 bg-blue-400/20 rounded border border-blue-400/30 shadow-inner"
                    />
                </div>
            </div>

            {/* Interactive Cursor */}
            <motion.div 
                animate={{ 
                    x: [0, 140, 140, 70, 0],
                    y: [0, 0, 70, 70, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/4 w-6 h-6 z-20"
            >
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-blue-300 fill-blue-400/40 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
                    <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </motion.div>

             {/* Connection Line */}
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -right-6 top-24 w-12 h-[2px] bg-blue-400 shadow-[0_0_10px_#60a5fa]"
             />
             <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute -right-16 top-[82px] px-3 py-1.5 bg-blue-500 rounded-lg text-[10px] text-white font-bold font-mono shadow-[0_0_20px_rgba(59,130,246,0.6)]"
             >
                APPROVED
             </motion.div>
        </div>
    </div>
);

const LaunchVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        {/* Core Propulsion Glow */}
        <div className="absolute w-48 h-48 bg-green-500/10 rounded-full blur-[80px] animate-pulse" />
        
        <motion.div 
            animate={{ y: [-15, 15, -15] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
        >
            <div className="w-40 h-40 bg-green-950/40 rounded-full border-2 border-green-400/60 flex items-center justify-center backdrop-blur-2xl shadow-[0_0_70px_rgba(34,197,94,0.5)]">
                <Rocket size={64} className="text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.8)]" />
            </div>
        </motion.div>

        {/* Upward Particles - Increased brightness */}
        <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ y: 500, opacity: 0 }}
                    animate={{ y: -500, opacity: [0, 1, 0] }}
                    transition={{ 
                        duration: Math.random() * 1.5 + 0.5, 
                        repeat: Infinity, 
                        delay: Math.random() * 2,
                        ease: "linear"
                    }}
                    className="absolute bg-green-300 shadow-[0_0_10px_#86efac] rounded-full"
                    style={{ 
                        left: `${15 + Math.random() * 70}%`,
                        width: Math.random() * 3 + 1 + 'px',
                        height: Math.random() * 60 + 20 + 'px'
                    }}
                />
            ))}
        </div>

        {/* Shockwaves */}
        <motion.div 
            animate={{ scale: [1, 2.5], opacity: [0.6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute w-40 h-40 border-2 border-green-400/40 rounded-full"
        />
    </div>
);

export const Work: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="process" className="py-24 bg-[#03000a] relative overflow-hidden">
      {/* Cinematic Background - Exact match to page background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(168,85,247,0.1),transparent_80%)]" />
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-4xl mx-auto">
            <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-5xl md:text-8xl font-bold text-white mb-8 tracking-tighter uppercase"
            >
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-light to-white text-shine">Vexury</span> Method
            </motion.h2>
            <p className="text-gray-400 text-xl md:text-2xl font-light leading-relaxed">
                A simple and transparent process — so you always know how your website will be built.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            
            {/* LEFT: Steps Navigation */}
            <div className="space-y-8">
                {steps.map((step, index) => {
                    const isActive = activeStep === index;
                    return (
                        <div 
                            key={step.id}
                            onMouseEnter={() => setActiveStep(index)}
                            className={`cursor-pointer group relative pl-10 py-8 transition-all duration-500 rounded-[2rem] ${
                                isActive ? 'bg-white/[0.04] shadow-[0_0_50px_rgba(0,0,0,0.5)]' : 'hover:bg-white/[0.02]'
                            }`}
                        >
                            {/* Active Line Indicator - Strong Neon */}
                            <div className={`absolute left-0 top-4 bottom-4 w-1.5 transition-all duration-700 rounded-full ${
                                isActive ? 'bg-accent shadow-[0_0_30px_#a855f7,0_0_10px_#a855f7]' : 'bg-white/10'
                            }`} />

                            <div className="flex items-center justify-between mb-4">
                                <span className={`text-sm font-bold tracking-[0.3em] transition-colors duration-300 ${
                                    isActive ? 'text-accent' : 'text-gray-600'
                                }`}>
                                    {step.stepLabel}
                                </span>
                                {isActive && (
                                    <motion.div layoutId="activeArrow" className="text-accent">
                                        <ChevronRight size={24} className="drop-shadow-[0_0_8px_#a855f7]" />
                                    </motion.div>
                                )}
                            </div>

                            <h3 className={`text-3xl md:text-4xl font-bold mb-4 transition-colors duration-300 ${
                                isActive ? 'text-white' : 'text-gray-500'
                            }`}>
                                {step.title}
                            </h3>

                            <div className={`overflow-hidden transition-all duration-500 ${
                                isActive ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                                <p className="text-gray-400 text-lg leading-relaxed font-light">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* RIGHT: Holographic Core - INTEGRATED WITH BACKGROUND */}
            <div className="relative h-[600px] w-full flex items-center justify-center">
                
                {/* Stage Frame - Now Transparent to blend with page background #03000a */}
                <div className="absolute inset-0 border border-white/5 rounded-[4rem] bg-transparent" />
                
                {/* Internal Atmospheric Glow - Uses page color at the base */}
                <div className="absolute inset-8 rounded-[3rem] bg-gradient-to-b from-accent/5 via-[#03000a] to-[#03000a]" />
                
                {/* Grainy Texture Overlay - More subtle */}
                <div className="absolute inset-4 border border-white/[0.03] rounded-[3.5rem] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.1] pointer-events-none" />
                
                {/* The Stage */}
                <div className="relative w-full h-full flex items-center justify-center p-16 overflow-hidden">
                    {/* Centered glow to lift the content from the dark background */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/[0.03] rounded-full blur-[120px] pointer-events-none animate-pulse-slow" />
                    
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, scale: 0.7, filter: "blur(20px)", y: 20 }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)", y: 0 }}
                            exit={{ opacity: 0, scale: 1.2, filter: "blur(20px)", y: -20 }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="w-full h-full"
                        >
                            {activeStep === 0 && <RadarVisual />}
                            {activeStep === 1 && <BuildVisual />}
                            {activeStep === 2 && <LaunchVisual />}
                        </motion.div>
                    </AnimatePresence>
                </div>

            </div>

        </div>

        {/* Footer Statement */}
        <div className="mt-32 text-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex flex-col items-center gap-6 bg-white/[0.03] border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-2xl"
            >
                <div className="p-4 bg-accent/20 rounded-full border border-accent/40 shadow-[0_0_30px_rgba(168,85,247,0.3)]">
                    <CheckCircle2 size={40} className="text-white drop-shadow-[0_0_10px_white]" />
                </div>
                <div className="space-y-2">
                    <p className="text-2xl text-white font-bold tracking-tight">Clear steps. No surprises.</p>
                    <p className="text-gray-500 text-lg">Just a professional website that represents your business.</p>
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
};
