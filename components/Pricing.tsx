
import React from 'react';
import { Check, Sparkles, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pt-16 pb-20 bg-[#03000a] relative overflow-hidden">
       
       {/* Wide Intense Neon Divider */}
       <div className="absolute top-0 w-full h-px">
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-80" />
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-400 to-transparent blur-[6px] opacity-40" />
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent to-transparent blur-[12px] opacity-20" />
       </div>

       {/* Ambient Background Lights */}
       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[800px] bg-accent/5 rounded-full blur-[150px] pointer-events-none" />
       
       <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
            <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Investment</span>
            </motion.h2>
            <p className="text-gray-400 text-lg md:text-xl font-light">
                Transparent pricing. Exceptional quality. No hidden surprises.
            </p>
        </div>

        {/* Pricing Grid - Wider container at 1280px for better fit */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1280px] mx-auto items-stretch">
            
            {/* PLAN 1: PROFESSIONAL */}
            <motion.div 
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col h-full bg-white/[0.02] backdrop-blur-md p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] group"
            >
                <div className="mb-8">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors duration-500">
                        <Zap size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Professional Website</h3>
                    <p className="text-sm text-gray-400 font-light h-10">A professional one-page website designed to present your business clearly and build trust.</p>
                </div>

                <div className="mb-8 p-6 bg-white/[0.03] rounded-2xl border border-white/5">
                    <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-4xl font-bold text-white">$1,200</span>
                        <span className="text-sm text-gray-500 whitespace-nowrap">one-time</span>
                    </div>
                    <div className="text-[10px] text-accent font-medium uppercase tracking-wide">
                        $600 / year — starting year 2
                    </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                    {[
                        "One-page website",
                        "Professional structure and layout",
                        "Clear messaging and content flow",
                        "Mobile-friendly and fast loading"
                    ].map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                            <div className="mt-0.5 min-w-[18px]"><Check size={16} className="text-gray-500" /></div>
                            {feat}
                        </li>
                    ))}
                </ul>

                <a 
                    href="https://wa.me/13054676317?text=Hi%20Julio!%20I'm%20interested%20in%20the%20Professional%20Website%20plan." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block mb-8"
                >
                    <button className="w-full py-4 rounded-xl border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all duration-300">
                        Start My Website
                    </button>
                </a>

                {/* Card Footer Info */}
                <div className="pt-6 border-t border-white/10 text-[11px] text-gray-500 leading-relaxed space-y-2">
                    <p>All plans include hosting, optional free domain, direct support, and full setup.</p>
                    <p>Annual pricing · Reduced renewal after the first year.</p>
                    <p className="text-gray-400 font-medium">You don’t have to worry about anything.</p>
                </div>
            </motion.div>

            {/* PLAN 2: PREMIUM (POPULAR) */}
            <motion.div 
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.02 }} // Slightly larger on load
                viewport={{ once: true }}
                className="flex flex-col h-full bg-[#0f0518] backdrop-blur-xl p-8 rounded-[2rem] border border-accent/50 relative shadow-[0_0_60px_rgba(168,85,247,0.15)] z-10"
            >
                {/* Popular Badge */}
                <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
                    <div className="bg-accent text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-[0_0_20px_#a855f7] flex items-center gap-2">
                        <Sparkles size={12} fill="currentColor" /> Popular Choice
                    </div>
                </div>

                <div className="mb-8 mt-4">
                    <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-6 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                        <Sparkles size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Premium Website</h3>
                    <p className="text-sm text-gray-300 font-light h-10">Refined visuals, smooth animations, and visual depth for a strong first impression.</p>
                </div>

                <div className="mb-8 p-6 bg-accent/5 rounded-2xl border border-accent/20 relative overflow-hidden">
                    <div className="absolute inset-0 bg-accent/5 animate-pulse-slow"></div>
                    <div className="relative z-10">
                        <div className="flex items-baseline gap-1.5 mb-1 flex-wrap">
                            <span className="text-4xl xs:text-5xl font-bold text-white tracking-tight">$3,800</span>
                            <span className="text-xs xs:text-sm text-gray-500 whitespace-nowrap">one-time</span>
                        </div>
                        <div className="text-[10px] text-accent-light font-bold uppercase tracking-wide flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                            $1,000 / year — starting year 2
                        </div>
                    </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                    {[
                        "Multi-section website (1-10 pages)",
                        "Custom structure and layout",
                        "Refined animations and smooth transitions",
                        "Visual depth and modern interactions",
                        "Content organization and approval",
                        "Mobile-first and optimized performance",
                        "Launch-ready delivery"
                    ].map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-white">
                            <div className="mt-0.5 min-w-[18px]"><Check size={16} className="text-accent drop-shadow-[0_0_5px_#a855f7]" /></div>
                            {feat}
                        </li>
                    ))}
                </ul>

                <a 
                    href="https://wa.me/13054676317?text=Hi%20Julio!%20I'm%20interested%20in%20the%20Premium%20Website%20plan." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block mb-8"
                >
                    <button className="w-full py-5 rounded-xl bg-accent text-white font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.4)] group relative overflow-hidden">
                        <span className="relative z-10 flex items-center justify-center gap-2">Start Your Project <ArrowRight size={18} /></span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-100%] group-hover:animate-shimmer" />
                    </button>
                </a>

                {/* Card Footer Info */}
                <div className="pt-6 border-t border-white/10 text-[11px] text-gray-400 leading-relaxed space-y-2">
                    <p>All plans include hosting, optional free domain, direct support, and full setup.</p>
                    <p>Annual pricing · Reduced renewal after the first year.</p>
                    <p className="text-white font-medium">You don’t have to worry about anything.</p>
                </div>
            </motion.div>

            {/* PLAN 3: CUSTOM / ENTERPRISE */}
            <motion.div 
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col h-full bg-white/[0.02] backdrop-blur-md p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] group"
            >
                <div className="mb-8">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors duration-500">
                        <ShieldCheck size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Custom / Enterprise</h3>
                    <p className="text-sm text-gray-400 font-light h-10">Fully tailored structure, advanced functionality, or unique requirements.</p>
                </div>

                <div className="mb-8 p-6 bg-white/[0.03] rounded-2xl border border-white/5">
                    <div className="flex items-center gap-1 mb-1">
                        <span className="text-3xl font-bold text-white leading-tight">Custom Pricing</span>
                    </div>
                    <div className="text-[10px] text-gray-500 font-medium uppercase tracking-wide pt-1">
                        Tailored to your needs
                    </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                    {[
                        "Fully customized website",
                        "Tailored structure and layout",
                        "Advanced functionality",
                        "Dedicated project guidance",
                        "Scalable solutions"
                    ].map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                            <div className="mt-0.5 min-w-[18px]"><Check size={16} className="text-gray-500" /></div>
                            {feat}
                        </li>
                    ))}
                </ul>

                <a 
                    href="https://wa.me/13054676317?text=Hi%20Julio!%20I'm%20interested%20in%20a%20Custom/Enterprise%20solution." 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block mb-8"
                >
                    <button className="w-full py-4 rounded-xl border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all duration-300">
                        Let’s Talk
                    </button>
                </a>

                {/* Card Footer Info */}
                <div className="pt-6 border-t border-white/10 text-[11px] text-gray-500 leading-relaxed space-y-2">
                    <p>All plans include hosting, optional free domain, direct support, and full setup.</p>
                    <p>Annual pricing · Reduced renewal after the first year.</p>
                    <p className="text-gray-400 font-medium">You don’t have to worry about anything.</p>
                </div>
            </motion.div>

        </div>

      </div>
    </section>
  );
};
