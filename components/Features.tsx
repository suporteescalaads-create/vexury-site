import React from 'react';
import { Target, Award, Zap, ArrowUpRight, MousePointerClick, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
    {
        title: "Clear Communication That Converts",
        desc: "Your website clearly explains what you do, how your service works, and what the client should do next.",
        icon: <Target className="text-white" size={24} />,
        colSpan: "md:col-span-1",
        visual: (
            <div className="bg-black/40 rounded-xl p-4 border border-white/10 backdrop-blur-md shadow-inner relative overflow-hidden min-h-[140px] flex items-center justify-between gap-3">
                {/* Simulated Lead Notifications - Side by Side */}
                <motion.div 
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex-1 flex flex-col gap-2 bg-white/5 p-3 rounded-lg border border-white/5 relative z-10 min-w-0"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500/30 shrink-0">
                            <MousePointerClick size={12} className="text-green-400" />
                        </div>
                        <div className="text-[10px] text-white font-bold leading-tight">New client inquiry</div>
                    </div>
                    <div className="text-[9px] text-gray-400 leading-tight">Generated via your website</div>
                </motion.div>

                <motion.div 
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="flex-1 flex flex-col gap-2 bg-white/5 p-3 rounded-lg border border-white/5 opacity-60 relative z-10 min-w-0"
                >
                    <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center border border-accent/30 shrink-0">
                            <MousePointerClick size={12} className="text-accent" />
                        </div>
                         <div className="text-[10px] text-white font-bold leading-tight">Call Scheduled</div>
                    </div>
                    <div className="text-[9px] text-gray-400 leading-tight">
                        Qualified lead
                        <div className="mt-0.5">2 mins ago</div>
                    </div>
                </motion.div>
                
                {/* Background Accent */}
                <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-green-500/10 blur-[40px] rounded-full pointer-events-none" />
            </div>
        )
    },
    {
        title: "A First Impression That Builds Trust",
        desc: "In just a few seconds, your website communicates professionalism and shows your business is legit.",
        icon: <Award className="text-white" size={24} />,
        colSpan: "md:col-span-1",
        visual: (
             <div className="flex items-center justify-center min-h-[140px] bg-black/40 rounded-xl border border-white/10 backdrop-blur-md relative overflow-hidden group/viz">
                <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover/viz:opacity-100 transition-opacity duration-700"></div>
                
                {/* Authority Badge Visual */}
                <div className="relative z-10 flex flex-col items-center justify-center py-4 text-center">
                    <motion.div 
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                        className="w-12 h-12 rounded-full border-2 border-accent/50 flex items-center justify-center shadow-[0_0_30px_rgba(168,85,247,0.2)] bg-[#03000a] mb-3"
                    >
                        <CheckCircle2 size={24} className="text-white" />
                    </motion.div>
                    
                    {/* Centered Badge Text */}
                    <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shadow-[0_0_8px_#a855f7]"></div>
                        <span className="text-[9px] uppercase tracking-widest text-gray-300 font-bold whitespace-nowrap">Professional Verified</span>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: "Fast, Simple, and Built to Sell",
        desc: "Fast loading, smooth mobile experience, and navigation designed to generate leads.",
        icon: <Zap className="text-white" size={24} />,
        colSpan: "md:col-span-1",
        visual: (
            <div className="flex flex-col items-center gap-4 bg-black/40 rounded-xl p-5 border border-white/10 relative overflow-hidden backdrop-blur-md min-h-[140px] justify-between">
                
                {/* Top Part: Score & Load Time */}
                <div className="w-full space-y-3 relative z-10">
                    <div className="space-y-1.5">
                        <div className="flex justify-between text-[10px] text-gray-400 uppercase tracking-wider font-bold">
                            <span>Performance</span>
                            <span className="text-green-400">100/100</span>
                        </div>
                        <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-green-500 to-accent" 
                            />
                        </div>
                    </div>
                     <div className="flex items-center justify-between p-2 bg-white/5 rounded-lg border border-white/5">
                        <div className="flex items-center gap-1.5">
                            <Zap size={12} className="text-yellow-400" />
                            <span className="text-[10px] text-gray-200 font-medium">Load Time</span>
                        </div>
                        <span className="text-xs font-mono text-white font-bold">0.4s</span>
                     </div>
                </div>
                
                {/* Bottom Part: Bounce Rate (Horizontal layout for compactness) */}
                <div className="flex items-center justify-between w-full border-t border-white/5 pt-3">
                    <div className="text-[9px] text-gray-500 uppercase tracking-wider font-bold">Bounce Rate</div>
                     <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        className="text-sm font-bold text-white bg-white/10 px-2 py-0.5 rounded"
                     >
                        Ultra-Low
                     </motion.div>
                </div>
            </div>
        )
    }
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 1,
            ease: [0.215, 0.61, 0.355, 1.0] as [number, number, number, number]
        }
    })
};

const FeatureCard: React.FC<{ feature: any, index: number }> = ({ feature, index }) => {
    return (
        <motion.div
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className={`relative group ${feature.colSpan} h-full`}
        >
             {/* Glowing border on hover */}
             <div className="absolute -inset-[1px] bg-gradient-to-r from-accent to-blue-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm" />
             
             {/* Card Content Structure */}
             <div className="h-full bg-white/5 backdrop-blur-2xl border border-white/10 p-6 md:p-8 rounded-2xl transition-all duration-700 relative z-10 hover:bg-white/[0.07] hover:shadow-[0_0_40px_rgba(168,85,247,0.15)] flex flex-col gap-6">
                
                {/* Header Section */}
                <div>
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 mb-6 text-white group-hover:bg-accent group-hover:text-white group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-[0_0_30px_#a855f7] transition-all duration-500 ease-out">
                        {feature.icon}
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>

                {/* Visual Section - Fixed height at bottom */}
                <div className="relative z-10 w-full mt-auto">
                    {feature.visual}
                </div>
            </div>
        </motion.div>
    );
};

export const Features: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-[#03000a] relative">
       {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      {/* UPDATED: Added md:px-12 lg:px-20 and max-w-7xl for better desktop harmony */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="text-accent font-bold text-sm mb-4 tracking-widest uppercase flex items-center gap-2"
                >
                    <span className="w-8 h-[1px] bg-accent"></span>
                    Services
                </motion.div>
                
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-6xl font-bold text-white tracking-tight"
                >
                    Real Impact for <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-light to-white animate-pulse-slow">Real Businesses</span>
                </motion.h2>
            </div>
            <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-gray-400 max-w-md text-lg leading-relaxed font-light"
            >
                We don’t build websites just to look good. We build platforms that communicate clearly, load fast, and help your business be taken seriously online. From first impression to final delivery, every detail is designed to support your business goals.
            </motion.p>
        </div>

        {/* UPDATED GRID: grid-cols-1 md:grid-cols-3 (3 Columns Equal Width) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
                <FeatureCard key={idx} feature={feature} index={idx} />
            ))}

            {/* Promo Card - Spans all 3 columns now */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 1 }}
                className="md:col-span-3 rounded-3xl p-[1px] relative group overflow-hidden"
            >
                {/* Animated Neon Border */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent via-blue-500 to-accent opacity-60 blur-md group-hover:opacity-100 group-hover:blur-xl transition-all duration-1000 animate-pulse-slow" />
                
                <div className="relative h-full bg-[#03000a] rounded-[22px] p-10 md:p-14 overflow-hidden isolate">
                    
                    {/* --- BACKGROUND EFFECTS --- */}
                    
                    {/* Moving Grid Floor */}
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none" 
                         style={{ 
                             backgroundImage: 'linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)', 
                             backgroundSize: '40px 40px',
                             transform: 'perspective(500px) rotateX(60deg) translateY(-100px) scale(1.5)',
                         }} 
                    />

                    {/* Scanner Light Beam */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent translate-x-[-100%] animate-shimmer z-0 pointer-events-none" />

                    {/* Floating Particles */}
                    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                         {[...Array(5)].map((_, i) => (
                             <motion.div 
                                key={i}
                                initial={{ y: 200, opacity: 0 }}
                                animate={{ y: -200, opacity: [0, 1, 0] }}
                                transition={{ 
                                    duration: Math.random() * 5 + 5, 
                                    repeat: Infinity, 
                                    delay: Math.random() * 2,
                                    ease: "linear"
                                }}
                                className="absolute w-1 h-1 bg-white rounded-full"
                                style={{ 
                                    left: `${Math.random() * 100}%`,
                                    boxShadow: '0 0 10px white'
                                }}
                             />
                         ))}
                    </div>
                    
                    {/* --- CONTENT --- */}
                    <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="max-w-xl">
                            <motion.div 
                                whileHover={{ scale: 1.05 }}
                                className="inline-flex items-center gap-2 mb-6 px-3 py-1 bg-white/5 rounded-full border border-accent/20 backdrop-blur-sm"
                            >
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent shadow-[0_0_10px_#a855f7]"></span>
                                </span>
                                <span className="text-[10px] font-bold text-accent uppercase tracking-widest">Limited Availability</span>
                            </motion.div>

                            <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Have a Website That <br/>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-accent-light to-white animate-pulse-slow drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                                    Represents Your Business
                                </span>
                            </h3>
                            <p className="opacity-80 mb-10 text-lg text-gray-300 font-light max-w-md">
                                Don't let a poor digital presence undervalue your brand. Upgrade to a Vexury standard today.
                            </p>
                            <motion.button 
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="bg-white text-black px-12 py-5 rounded-full text-sm font-bold hover:bg-gray-200 transition-all duration-300 flex items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.3)] relative overflow-hidden group/btn"
                            >
                                <span className="relative z-10">Start Your Website</span>
                                <ArrowUpRight size={18} className="relative z-10" />
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-300/50 to-transparent skew-x-12 translate-x-[-100%] group-hover/btn:animate-shimmer" />
                            </motion.button>
                        </div>
                        
                        {/* 3D Floating Icons Container */}
                        <div className="flex gap-6 relative">
                             {/* Glow behind icons */}
                           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent/20 blur-[60px] rounded-full pointer-events-none" />

                           <motion.div 
                                animate={{ y: [-10, 10, -10] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="w-32 h-32 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center backdrop-blur-xl shadow-[0_0_30px_rgba(0,0,0,0.5)] z-10 relative"
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-50" />
                              <Target size={48} className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                           </motion.div>

                           <motion.div 
                                animate={{ y: [10, -10, 10] }}
                                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-32 h-32 bg-[#0f0518] rounded-2xl border border-accent/40 flex items-center justify-center backdrop-blur-xl shadow-[0_0_30px_rgba(168,85,247,0.2)] z-10 relative mt-12"
                            >
                              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-transparent rounded-2xl opacity-50" />
                              <Award size={48} className="text-accent drop-shadow-[0_0_20px_#a855f7]" />
                           </motion.div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};