
import React from 'react';
import { Check, Sparkles, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Pricing: React.FC = () => {
  // Cast motion components to any to bypass environment-specific type errors
  const MDiv = motion.div as any;
  const MH2 = motion.h2 as any;

  return (
    <section id="pricing" className="pt-10 pb-12 md:pt-16 md:pb-20 bg-[#03000a] relative overflow-hidden">
       
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
        <div className="text-center mb-10 md:mb-12 max-w-4xl mx-auto">
            <MH2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
            >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Investment</span>
            </MH2>
            <p className="text-gray-400 text-lg md:text-xl font-light">
                Transparent pricing. Exceptional quality. No hidden surprises.
            </p>
        </div>

        {/* Pricing Grid - Wider container at 1280px for better fit */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-[1280px] mx-auto items-stretch">
            
            {/* PLAN 1: PROFESSIONAL */}
            <MDiv 
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col h-full bg-white/[0.02] backdrop-blur-md p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] group"
            >
                <div className="mb-8">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors duration-500">
                        <Zap size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">Professional Website</h3>
                    <p className="text-[10px] text-accent uppercase tracking-widest font-bold mb-4">(For businesses that need a strong and professional online presence)</p>
                    <p className="text-sm text-gray-400 font-light h-14">A high-quality website (1–3 pages) designed to clearly present your business and build trust.</p>
                </div>

                <div className="mb-8 p-6 bg-white/[0.03] rounded-2xl border border-white/5">
                    <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-4xl font-bold text-white">$1,200</span>
                        <span className="text-sm text-gray-500 whitespace-nowrap">one-time</span>
                    </div>
                    <div className="text-[10px] text-accent font-medium uppercase tracking-wide">
                        $89/month — starting month 3
                    </div>
                    <div className="text-[10px] text-green-500 font-medium mt-1 leading-tight">
                        Includes 2 months of hosting, maintenance, security & support
                    </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                    {[
                        "Up to 3 pages",
                        "Strategic structure and clean layout",
                        "Clear messaging and strong call-to-action",
                        "Mobile-first and fast loading",
                        "Secure hosting & maintenance included",
                        "Ongoing technical support"
                    ].map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                            <div className="mt-0.5 min-w-[18px]"><Check size={16} className="text-accent" /></div>
                            {feat}
                        </li>
                    ))}
                </ul>

                <div className="block mb-8">
                    <a href="https://vexury.com/#contact" className="w-full">
                        <button className="w-full py-4 rounded-xl border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all duration-300">
                            Start My Website
                        </button>
                    </a>
                </div>

                {/* Card Footer Info */}
                <div className="pt-6 border-t border-white/10 text-[11px] text-gray-500 leading-relaxed space-y-2">
                    <p>Professional, reliable and built for small businesses.</p>
                    <p className="text-gray-400 font-medium">Cancel anytime.</p>
                </div>
            </MDiv>

            {/* PLAN 2: PREMIUM (POPULAR) */}
            <MDiv 
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
                    <h3 className="text-2xl font-bold text-white mb-1">Premium Website</h3>
                    <p className="text-[10px] text-accent-light uppercase tracking-widest font-bold mb-4">(For businesses ready to grow and stand out)</p>
                    <p className="text-sm text-gray-300 font-light h-14">A multi-page website (up to 10 pages) built to elevate your brand and support business growth.</p>
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
                            $99/month — starting month 3
                        </div>
                        <div className="text-[10px] text-green-400 font-medium mt-1 leading-tight ml-3.5">
                            Includes 2 months of hosting, maintenance, security & support
                        </div>
                    </div>
                </div>

                <ul className="space-y-4 mb-10 flex-grow">
                    {[
                        "Up to 10 custom pages",
                        "Tailored structure based on your goals",
                        "Refined animations and modern interactions",
                        "Enhanced branding and visual depth",
                        "Performance optimization & premium hosting",
                        "Ongoing updates and priority support"
                    ].map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-white">
                            <div className="mt-0.5 min-w-[18px]"><Check size={16} className="text-accent" /></div>
                            {feat}
                        </li>
                    ))}
                </ul>

                <div className="block mb-8">
                    <a href="https://vexury.com/#contact" className="w-full">
                        <button className="w-full py-5 rounded-xl bg-accent text-white font-bold hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_30px_rgba(168,85,247,0.4)] group relative overflow-hidden">
                            <span className="relative z-10 flex items-center justify-center gap-2">Start Your Project <ArrowRight size={18} /></span>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 translate-x-[-100%] group-hover:animate-shimmer" />
                        </button>
                    </a>
                </div>

                {/* Card Footer Info */}
                <div className="pt-6 border-t border-white/10 text-[11px] text-gray-400 leading-relaxed space-y-2">
                    <p>Built to scale and dominate your market.</p>
                    <p className="text-white font-medium">Cancel anytime.</p>
                </div>
            </MDiv>

            {/* PLAN 3: CUSTOM / ENTERPRISE */}
            <MDiv 
                whileHover={{ y: -10 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col h-full bg-white/[0.02] backdrop-blur-md p-8 rounded-[2rem] border border-white/5 hover:border-white/10 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] group"
            >
                <div className="mb-8">
                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-white group-hover:bg-white group-hover:text-black transition-colors duration-500">
                        <ShieldCheck size={24} />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">Custom / Enterprise</h3>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest font-bold mb-4">(For strategic or complex projects)</p>
                    <p className="text-sm text-gray-400 font-light h-14">Fully tailored solutions for advanced functionality, integrations or large-scale digital presence.</p>
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
                        "Fully customized architecture",
                        "Advanced features and integrations",
                        "Dedicated project strategy",
                        "Scalable infrastructure",
                        "Long-term technical partnership"
                    ].map((feat, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                            <div className="mt-0.5 min-w-[18px]"><Check size={16} className="text-gray-500" /></div>
                            {feat}
                        </li>
                    ))}
                </ul>

                <div className="block mb-8">
                    <a href="https://vexury.com/#contact" className="w-full">
                        <button className="w-full py-4 rounded-xl border border-white/20 text-white font-bold hover:bg-white hover:text-black transition-all duration-300">
                            Let’s Talk
                        </button>
                    </a>
                </div>

                {/* Card Footer Info */}
                <div className="pt-6 border-t border-white/10 text-[11px] text-gray-500 leading-relaxed space-y-2">
                    <p>Built around your business goals.</p>
                </div>
            </MDiv>

        </div>

      </div>
    </section>
  );
};
