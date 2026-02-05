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
        {/* Scanning Line */}
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute w-full h-full rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(168,85,247,0.3)_360deg)] opacity-50 blur-xl"
        />
        <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute w-[80%] h-[80%] border-t-2 border-r-2 border-accent/60 rounded-full shadow-[0_0_30px_#a855f7]"
        />
        
        {/* Inner Rings */}
        <div className="absolute w-[60%] h-[60%] border border-white/10 rounded-full flex items-center justify-center">
             <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-4 h-4 bg-white rounded-full shadow-[0_0_20px_white]" 
             />
        </div>
        <div className="absolute w-[40%] h-[40%] border border-dashed border-white/20 rounded-full animate-spin-slow"></div>

        {/* Floating Data Points */}
        {[0, 90, 180, 270].map((deg, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, delay: i * 0.5, repeat: Infinity }}
                className="absolute w-2 h-2 bg-accent rounded-full"
                style={{ transform: `rotate(${deg}deg) translate(140px)` }}
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
            className="absolute w-[320px] h-[320px] rounded-full border border-blue-500/10 border-dashed"
        />
        <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-[280px] h-[280px] rounded-full border border-blue-500/10"
            style={{ borderLeftColor: 'transparent', borderRightColor: 'transparent' }}
        />

        {/* Central Interface Assembly */}
        <div className="relative w-64 h-48">
            {/* Background Panels floating in */}
            <motion.div 
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-blue-900/10 backdrop-blur-md border border-blue-500/20 rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.1)]"
            />
            
            {/* Floating UI Header */}
            <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="absolute top-0 left-0 right-0 h-8 border-b border-blue-500/20 flex items-center px-3 gap-2"
            >
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                <div className="w-2 h-2 rounded-full bg-green-500/50" />
            </motion.div>

            {/* Content Blocks appearing */}
            <div className="absolute top-12 left-4 right-4 space-y-3">
                <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: "60%" }}
                    transition={{ delay: 0.5, duration: 0.8, repeat: Infinity, repeatDelay: 3 }}
                    className="h-4 bg-blue-500/20 rounded"
                />
                <div className="flex gap-3">
                     <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                        className="w-1/3 h-20 bg-blue-500/10 rounded border border-blue-500/10"
                    />
                     <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 1.0, duration: 0.5, repeat: Infinity, repeatDelay: 3 }}
                        className="w-2/3 h-20 bg-blue-500/10 rounded border border-blue-500/10"
                    />
                </div>
            </div>

            {/* Interactive Cursor */}
            <motion.div 
                animate={{ 
                    x: [0, 100, 100, 50, 0],
                    y: [0, 0, 50, 50, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/2 left-1/4 w-4 h-4 z-20"
            >
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-blue-400 fill-blue-400/20">
                    <path d="M3 3L10.07 19.97L12.58 12.58L19.97 10.07L3 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </motion.div>

             {/* Connection Line */}
             <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -right-4 top-20 w-8 h-[1px] bg-blue-400"
             />
             <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute -right-12 top-[70px] px-2 py-1 bg-blue-500/20 border border-blue-500/40 rounded text-[8px] text-blue-300 font-mono"
             >
                APPROVED
             </motion.div>
        </div>

        {/* Code Particles */}
        <div className="absolute inset-0 pointer-events-none">
             {[...Array(3)].map((_, i) => (
                 <motion.div
                    key={i}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: -40, opacity: [0, 1, 0] }}
                    transition={{ duration: 2, delay: i * 0.8, repeat: Infinity }}
                    className="absolute bg-blue-500/30 px-2 py-1 rounded text-[8px] font-mono text-blue-200"
                    style={{ left: `${30 + i * 20}%`, top: '40%' }}
                 >
                    {i === 0 ? "<div />" : i === 1 ? "flex" : "grid"}
                 </motion.div>
             ))}
        </div>
    </div>
);

const LaunchVisual = () => (
    <div className="relative w-full h-full flex items-center justify-center">
        {/* Core Propulsion */}
        <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
        >
            <div className="w-32 h-32 bg-green-500/20 rounded-full border border-green-400/50 flex items-center justify-center backdrop-blur-xl shadow-[0_0_50px_rgba(34,197,94,0.4)]">
                <Rocket size={48} className="text-white drop-shadow-[0_0_10px_white]" />
            </div>
        </motion.div>

        {/* Upward Particles */}
        <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{ y: 400, opacity: 0 }}
                    animate={{ y: -400, opacity: [0, 1, 0] }}
                    transition={{ 
                        duration: Math.random() * 2 + 1, 
                        repeat: Infinity, 
                        delay: Math.random() * 2,
                        ease: "linear"
                    }}
                    className="absolute bg-green-400 rounded-full"
                    style={{ 
                        left: `${20 + Math.random() * 60}%`,
                        width: Math.random() * 2 + 1 + 'px',
                        height: Math.random() * 40 + 10 + 'px'
                    }}
                />
            ))}
        </div>

        {/* Shockwaves */}
        <motion.div 
            animate={{ scale: [1, 2], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute w-32 h-32 border border-green-500/50 rounded-full"
        />
    </div>
);

export const Work: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  // Auto-rotate if user isn't interacting (optional, good for discovery)
  useEffect(() => {
    const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000); // 6 seconds per step
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="process" className="py-20 bg-[#03000a] relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(168,85,247,0.05),transparent_70%)]" />
      <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* UPDATED: Added md:px-12 lg:px-20 and max-w-7xl for better desktop harmony */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 max-w-7xl">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
            <motion.h2 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight uppercase"
            >
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-light to-white text-shine">Vexury</span> Method
            </motion.h2>
            <p className="text-gray-400 text-xl font-light leading-relaxed">
                A simple and transparent process — so you always know how your website will be built.
            </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* LEFT: Steps Navigation */}
            <div className="space-y-6">
                {steps.map((step, index) => {
                    const isActive = activeStep === index;
                    return (
                        <div 
                            key={step.id}
                            onMouseEnter={() => setActiveStep(index)}
                            className={`cursor-pointer group relative pl-8 py-6 transition-all duration-500 rounded-2xl ${
                                isActive ? 'bg-white/[0.03]' : 'hover:bg-white/[0.01]'
                            }`}
                        >
                            {/* Active Line Indicator */}
                            <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-500 rounded-full ${
                                isActive ? 'bg-accent shadow-[0_0_20px_#a855f7]' : 'bg-white/10'
                            }`} />

                            <div className="flex items-center justify-between mb-3">
                                <span className={`text-xs font-bold tracking-[0.2em] transition-colors duration-300 ${
                                    isActive ? 'text-accent' : 'text-gray-600'
                                }`}>
                                    {step.stepLabel}
                                </span>
                                {isActive && (
                                    <motion.div layoutId="activeArrow" className="text-accent">
                                        <ChevronRight size={20} />
                                    </motion.div>
                                )}
                            </div>

                            <h3 className={`text-3xl font-bold mb-3 transition-colors duration-300 ${
                                isActive ? 'text-white' : 'text-gray-500'
                            }`}>
                                {step.title}
                            </h3>

                            <div className={`overflow-hidden transition-all duration-500 ${
                                isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                            }`}>
                                <p className="text-gray-400 leading-relaxed font-light">
                                    {step.desc}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* RIGHT: Holographic Core */}
            <div className="relative h-[500px] w-full flex items-center justify-center">
                
                {/* Background Reactor Ring */}
                <div className="absolute inset-0 border border-white/5 rounded-[3rem] bg-black/40 backdrop-blur-3xl shadow-2xl" />
                <div className="absolute inset-4 border border-white/5 rounded-[2.5rem] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                
                {/* The Stage */}
                <div className="relative w-full h-full flex items-center justify-center p-12 overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeStep}
                            initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
                            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
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
        <div className="mt-24 text-center">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex flex-col items-center gap-4 bg-white/[0.02] border border-white/10 p-8 rounded-2xl backdrop-blur-md"
            >
                <CheckCircle2 size={32} className="text-accent drop-shadow-[0_0_10px_#a855f7]" />
                <div className="space-y-1">
                    <p className="text-xl text-white font-medium">Clear steps. No surprises.</p>
                    <p className="text-gray-500">Just a professional website that represents your business.</p>
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
};