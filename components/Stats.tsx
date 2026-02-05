
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useMotionValue } from 'framer-motion';

const Counter = ({ value, from = 0, suffix = "", prefix = "" }: { value: number, from?: number, suffix?: string, prefix?: string }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    
    // Initialize motion value with 'from' (defaults to 0 if not specified)
    const motionValue = useMotionValue(from);
    const springValue = useSpring(motionValue, { duration: 2500, bounce: 0 }); // Smooth linear-ish feel
    const [display, setDisplay] = useState(from);

    useEffect(() => {
        if (inView) {
            motionValue.set(value);
        }
    }, [inView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplay(Math.floor(latest));
        });
    }, [springValue]);

    return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

const StatCard = ({ children, delay }: { children?: React.ReactNode, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: delay, duration: 0.8, ease: "easeOut" }}
        className="relative group"
    >
        {/* Card Container */}
        <div className="h-full relative bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-3xl p-8 overflow-hidden hover:bg-white/[0.04] transition-colors duration-500">
            
            {/* Hover Glow Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* Animated Border Line */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 delay-100" />

            <div className="relative z-10 flex flex-col items-center justify-center text-center">
                {children}
            </div>
        </div>
    </motion.div>
);

export const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-[#08050e] relative overflow-hidden">
      
      {/* Top Divider: Strong Purple Neon (Mobile Enhanced) */}
      <div className="absolute top-0 left-0 w-full z-20 flex flex-col items-center">
          {/* Main Line - Brighter on all screens */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-100" />
          
          {/* Outer Glow */}
          <div className="absolute top-0 w-full h-[4px] bg-gradient-to-r from-transparent via-accent to-transparent blur-[4px] opacity-70" />
          
          {/* Mobile Specific Intense Glow Center */}
          <div className="absolute top-[-1px] w-2/3 h-[2px] bg-accent/60 blur-[6px] md:hidden" />
      </div>

      {/* Bottom Divider: Animated Moving Neon (Mobile) + Static (Desktop) */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] z-20 overflow-hidden">
           
           {/* Static Base Line */}
           <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
           
           {/* Desktop Static Glow */}
           <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-transparent via-accent/60 to-transparent blur-[6px] opacity-60" />

           {/* MOBILE MOVING EFFECT: Laser Scan */}
           <motion.div
             className="md:hidden absolute top-0 w-[50%] h-full bg-gradient-to-r from-transparent via-accent to-transparent blur-[4px]"
             animate={{ left: ["-100%", "150%"] }} 
             transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "linear"
             }}
             style={{ opacity: 1 }}
           />
           
           {/* MOBILE MOVING EFFECT: White Hot Center */}
           <motion.div
             className="md:hidden absolute top-0 w-[20%] h-full bg-gradient-to-r from-transparent via-white to-transparent"
             animate={{ left: ["-100%", "150%"] }} 
             transition={{ 
                duration: 2.5, 
                repeat: Infinity, 
                ease: "linear"
             }}
             style={{ opacity: 0.8, mixBlendMode: "overlay" }}
           />
      </div>
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-[#08050e] to-[#08050e] pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Stat Item 1 */}
            <StatCard delay={0}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                    <Counter value={120} suffix="+" />
                </div>
                <div className="h-1 w-12 bg-white/10 rounded-full mb-4 group-hover:bg-accent group-hover:shadow-[0_0_10px_#a855f7] transition-all duration-500"></div>
                <p className="text-gray-400 font-medium tracking-wide uppercase text-xs">Websites Delivered</p>
            </StatCard>

             {/* Stat Item 2 */}
             <StatCard delay={0.1}>
                {/* Added pb-2 to fix clipping */}
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-4 pb-2 tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <Counter value={7} from={45} suffix=" Days" />
                </div>
                <div className="h-1 w-12 bg-white/10 rounded-full mb-4 group-hover:bg-accent group-hover:shadow-[0_0_10px_#a855f7] transition-all duration-500"></div>
                <p className="text-gray-400 font-medium tracking-wide uppercase text-xs">Average Delivery Time</p>
            </StatCard>

             {/* Stat Item 3 */}
             <StatCard delay={0.2}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter drop-shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                    <Counter value={90} suffix="+" />
                </div>
                <div className="h-1 w-12 bg-white/10 rounded-full mb-4 group-hover:bg-accent group-hover:shadow-[0_0_10px_#a855f7] transition-all duration-500"></div>
                <p className="text-gray-400 font-medium tracking-wide uppercase text-xs">PageSpeed Performance Score</p>
            </StatCard>

             {/* Stat Item 4 */}
             <StatCard delay={0.3}>
                {/* Added pb-2 to fix clipping */}
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-4 pb-2 tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                    <Counter value={99} suffix="%" />
                </div>
                <div className="h-1 w-12 bg-white/10 rounded-full mb-4 group-hover:bg-accent group-hover:shadow-[0_0_10px_#a855f7] transition-all duration-500"></div>
                <p className="text-gray-400 font-medium tracking-wide uppercase text-xs">Client Satisfaction</p>
            </StatCard>

        </div>
      </div>
    </section>
  );
};
