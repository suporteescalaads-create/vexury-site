
import React, { useState, useEffect } from 'react';
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        name: "Michael Thompson",
        role: "Business Owner",
        company: "Thompson & Co.",
        content: "Working with Vexury was simple and professional. The website is clean, fast, and clearly presents our services to our target audience.",
        image: "https://raw.githubusercontent.com/suporteescalaads-create/elementos/refs/heads/main/michaelthompson.webp"
    },
    {
        name: "Sarah Mitchell",
        role: "Founder",
        company: "Bloom Startups",
        content: "They delivered exactly what we needed — a professional website that works and represents our business well. Incredible ROI.",
        image: "https://raw.githubusercontent.com/suporteescalaads-create/elementos/refs/heads/main/sarahmitchell.webp"
    },
    {
        name: "Daniel Carter",
        role: "Operations Manager",
        company: "LogiTech",
        content: "Our old website didn’t reflect our company anymore. This new one feels modern, reliable, and easy to use. The team loves it.",
        image: "https://raw.githubusercontent.com/suporteescalaads-create/elementos/refs/heads/main/daniel0989.webp"
    },
    {
        name: "Emily Rodriguez",
        role: "Small Business Owner",
        company: "Rodriguez Boutique",
        content: "The communication was clear and the delivery was on time. The final result is exactly what we were looking for to scale up.",
        image: "https://raw.githubusercontent.com/suporteescalaads-create/elementos/refs/heads/main/emilyrodriguez.webp"
    },
    {
        name: "James Walker",
        role: "Service Provider",
        company: "Walker Services",
        content: "The website makes it easier for clients to understand what we do and contact us. Everything feels well organized and professional.",
        image: "https://raw.githubusercontent.com/suporteescalaads-create/elementos/refs/heads/main/jameswalker.webp"
    }
];

export const Testimonials: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
            scale: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 50 : -50,
            opacity: 0,
            scale: 0.95
        })
    };

    const swipe = (newDirection: number) => {
        setDirection(newDirection);
        if (newDirection === 1) {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        } else {
            setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        }
    };

    useEffect(() => {
        const timer = setInterval(() => {
            swipe(1);
        }, 8000); // Auto-advance every 8 seconds
        return () => clearInterval(timer);
    }, [currentIndex]);

    return (
        <section className="py-12 md:py-20 bg-[#03000a] relative overflow-hidden flex flex-col items-center justify-center">
            
            {/* Spotlight Divider Style */}
            <div className="absolute top-0 w-full flex justify-center">
                 <div className="w-[80%] h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                 <div className="absolute top-0 w-[40%] h-[1px] bg-gradient-to-r from-transparent via-accent to-transparent shadow-[0_0_15px_#a855f7]" />
            </div>

            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
            
            <div className="container mx-auto px-4 md:px-6 relative z-10 max-w-5xl">
                
                {/* Header */}
                <div className="text-center mb-8">
                     <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold text-white mb-4"
                    >
                        Results That Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">Trust</span>
                    </motion.h2>
                </div>

                {/* Main Card Container - Reduced Height to remove empty space */}
                <div className="relative h-[500px] md:h-[320px] w-full perspective-1000">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.4 },
                                scale: { duration: 0.4 }
                            }}
                            className="absolute inset-0 w-full h-full"
                        >
                            {/* Card Body */}
                            <div className="w-full h-full bg-[#130620]/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center relative overflow-hidden">
                                
                                {/* Deep Purple Gradient Background inside card */}
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-black/40 pointer-events-none" />
                                <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[80px] rounded-full pointer-events-none" />

                                {/* Left Side: Profile */}
                                <div className="flex flex-col items-center md:items-start text-center md:text-left shrink-0 relative z-10">
                                    <div className="relative mb-4 group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-accent to-purple-600 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
                                        <img 
                                            src={testimonials[currentIndex].image} 
                                            alt={testimonials[currentIndex].name} 
                                            className="relative w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-white/10 shadow-2xl"
                                        />
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-white mb-1">{testimonials[currentIndex].name}</h3>
                                    <p className="text-accent font-medium text-xs mb-1">{testimonials[currentIndex].role}</p>
                                    <p className="text-gray-500 text-[10px] uppercase tracking-wider font-bold mb-3">{testimonials[currentIndex].company}</p>
                                    
                                    <div className="flex gap-1 text-yellow-500">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={14} fill="currentColor" className="drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]" />
                                        ))}
                                    </div>
                                </div>

                                {/* Right Side: Content */}
                                <div className="flex-1 relative z-10 flex flex-col h-full justify-center">
                                    <Quote className="absolute -top-2 right-0 text-white/5 rotate-180" size={80} />
                                    
                                    <blockquote className="relative">
                                        <p className="text-lg md:text-2xl text-gray-200 font-light italic leading-relaxed">
                                            "{testimonials[currentIndex].content}"
                                        </p>
                                    </blockquote>
                                </div>

                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Controls */}
                <div className="flex items-center justify-center gap-6 mt-10">
                    <button 
                        onClick={() => swipe(-1)}
                        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-300 group"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    </button>
                    
                    <div className="flex gap-3">
                        {testimonials.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setDirection(idx > currentIndex ? 1 : -1);
                                    setCurrentIndex(idx);
                                }}
                                className={`h-2.5 rounded-full transition-all duration-300 ${
                                    idx === currentIndex ? "w-8 bg-accent shadow-[0_0_10px_#a855f7]" : "w-2.5 bg-white/20 hover:bg-white/40"
                                }`}
                            />
                        ))}
                    </div>

                    <button 
                        onClick={() => swipe(1)}
                        className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-300 group"
                    >
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

            </div>
        </section>
    );
};
