
import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ value, from = 0, suffix = "", prefix = "" }: { value: number, from?: number, suffix?: string, prefix?: string }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const [display, setDisplay] = useState(from);

    useEffect(() => {
        if (!inView) return;
        
        let start = from;
        const duration = 1500;
        const frameDuration = 32; // Reduzido para 30fps para salvar CPU e baixar o TBT
        const totalFrames = duration / frameDuration;
        const increment = (value - from) / totalFrames;
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
                setDisplay(value);
                clearInterval(timer);
            } else {
                setDisplay(Math.floor(start));
            }
        }, frameDuration);

        return () => clearInterval(timer);
    }, [inView, value, from]);

    return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

const StatCard = ({ children, delay }: { children?: React.ReactNode, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="relative h-full bg-white/[0.02] backdrop-blur-sm border border-white/5 rounded-3xl p-8 overflow-hidden hover:bg-white/[0.04] transition-colors duration-500 flex flex-col items-center justify-center text-center"
    >
        {children}
    </motion.div>
);

export const Stats: React.FC = () => {
  return (
    <section className="py-16 bg-[#08050e] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatCard delay={0}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
                    <Counter value={120} suffix="+" />
                </div>
                <p className="text-gray-400 font-medium tracking-wide uppercase text-[10px]">Websites Delivered</p>
            </StatCard>
             <StatCard delay={0.05}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
                    <Counter value={7} from={2} suffix=" Days" />
                </div>
                <p className="text-gray-400 font-medium tracking-wide uppercase text-[10px]">Average Delivery Time</p>
            </StatCard>
             <StatCard delay={0.1}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
                    <Counter value={95} suffix="+" />
                </div>
                <p className="text-gray-400 font-medium tracking-wide uppercase text-[10px]">Performance Score</p>
            </StatCard>
             <StatCard delay={0.15}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
                    <Counter value={99} suffix="%" />
                </div>
                <p className="text-gray-400 font-medium tracking-wide uppercase text-[10px]">Client Satisfaction</p>
            </StatCard>
        </div>
      </div>
    </section>
  );
};
