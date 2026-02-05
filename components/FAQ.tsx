import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
    {
        q: "How long does it take to build my website?",
        a: "Most projects are delivered within 7 days, depending on complexity and feedback rounds."
    },
    {
        q: "Do I need to provide all the content and text?",
        a: "No. We guide the entire process and help structure the content. You’ll review and approve everything before launch."
    },
    {
        q: "Is hosting and support included?",
        a: "Yes. Hosting, technical setup, and direct support are included so you don’t have to worry about anything."
    },
    {
        q: "Do you provide a domain?",
        a: "Yes. If you don’t already have a domain, we provide one free of charge. If you already own a domain, we’ll use it."
    },
    {
        q: "Is the website mobile-friendly?",
        a: "Absolutely. Every website is designed mobile-first and optimized for speed and performance."
    },
    {
        q: "What happens after the first year?",
        a: "Renewal is offered at a significantly reduced rate, since the main design and structure are already completed."
    }
];

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-background relative">
      
      {/* Fine Subtle Glow Divider */}
      <div className="absolute top-0 w-full h-[1px]">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-[2px]" />
      </div>

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-center text-white mb-10"
        >
            Frequently Asked <span className="text-gray-500">Questions</span>
        </motion.h2>

        <div className="space-y-4">
            {questions.map((item, i) => (
                <motion.div 
                    key={i} 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="border border-white/5 rounded-xl bg-white/[0.02] overflow-hidden"
                >
                    <button 
                        onClick={() => setActiveIndex(activeIndex === i ? null : i)}
                        className="w-full flex justify-between items-center p-6 text-left group hover:bg-white/5 transition-colors"
                    >
                        <span className={`font-medium text-lg transition-colors ${activeIndex === i ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>
                            {item.q}
                        </span>
                        <motion.div
                            animate={{ rotate: activeIndex === i ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                        >
                             <ChevronDown className="text-gray-500" />
                        </motion.div>
                    </button>
                    
                    <AnimatePresence>
                        {activeIndex === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <p className="text-gray-400 leading-relaxed px-6 pb-6 pt-0 font-light">
                                    {item.a}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};