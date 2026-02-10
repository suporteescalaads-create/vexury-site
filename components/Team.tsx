
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Users, Linkedin } from 'lucide-react';

const members = [
    {
        name: "W. R. Siqueira",
        role: "Founder & Lead Developer",
        desc: "Responsible for strategy, design execution, development, and technical decisions.",
        image: "https://raw.githubusercontent.com/suporteescalaads-create/elementos/refs/heads/main/23twre%20(1).webp",
        initials: "WS",
        icon: <Code2 size={20} />,
        accentColor: "from-accent to-purple-600"
    },
    {
        name: "J. V. Schneider",
        role: "Co-Founder & Client Relations",
        desc: "Responsible for client communication, alignment, and project coordination.",
        image: "https://raw.githubusercontent.com/suporteescalaads-create/elementos/refs/heads/main/23twre3%20(1).webp",
        initials: "JS",
        icon: <Users size={20} />,
        accentColor: "from-blue-500 to-cyan-500"
    }
];

export const Team: React.FC = () => {
  return (
    <section id="team" className="pt-12 pb-10 md:pt-20 md:pb-16 bg-[#03000a] relative overflow-hidden">
       
       {/* Unique "Pulse" Divider */}
       <div className="absolute top-0 w-full flex justify-center">
            {/* Base Line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            
            {/* Moving Pulse segment */}
            <motion.div
               animate={{ opacity: [0.2, 1, 0.2], scaleX: [0.8, 1, 0.8] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute top-0 w-3/4 h-px bg-gradient-to-r from-transparent via-accent to-transparent blur-[4px]"
            />
            {/* Bright Center Spot */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-1 bg-accent/50 blur-[10px] rounded-full" />
       </div>

       {/* Background Ambience */}
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(168,85,247,0.05),transparent_70%)]" />
       
       <div className="container mx-auto px-6 relative z-10 max-w-5xl">
        
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10 md:mb-12"
        >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                The people behind <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-400">your website</span>
            </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {members.map((member, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="group relative"
                >
                    {/* Hover Glow Effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${member.accentColor} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-700 rounded-[2rem]`} />
                    
                    <div className="relative h-full bg-white/[0.02] backdrop-blur-md border border-white/10 rounded-[2rem] p-8 md:p-10 flex flex-col items-center text-center hover:border-white/20 transition-colors duration-500 overflow-hidden">
                        
                        {/* Avatar */}
                        <div className="relative mb-6 group-hover:scale-105 transition-transform duration-500">
                            <div className={`w-28 h-28 rounded-full bg-gradient-to-br ${member.accentColor} p-[2px] shadow-[0_0_30px_rgba(0,0,0,0.5)]`}>
                                <div className="w-full h-full bg-[#0a0510] rounded-full flex items-center justify-center relative overflow-hidden">
                                    <img 
                                        src={member.image} 
                                        alt={member.name} 
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            // Fallback if image fails to load
                                            e.currentTarget.style.display = 'none';
                                            const parent = e.currentTarget.parentElement;
                                            if (parent) {
                                                const span = document.createElement('span');
                                                span.innerText = member.initials;
                                                span.className = "text-2xl font-bold text-white font-display tracking-widest absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2";
                                                parent.appendChild(span);
                                            }
                                        }}
                                    />
                                    
                                    {/* Inner Shine/Gloss Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
                                </div>
                            </div>
                            <div className="absolute -bottom-2 -right-2 bg-[#0a0510] border border-white/10 p-2 rounded-full text-white shadow-lg z-10">
                                {member.icon}
                            </div>
                        </div>

                        {/* Text Content */}
                        <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                        <p className={`text-sm font-medium bg-gradient-to-r ${member.accentColor} bg-clip-text text-transparent uppercase tracking-wider mb-6`}>
                            {member.role}
                        </p>
                        
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-6" />
                        
                        <p className="text-gray-400 leading-relaxed font-light">
                            {member.desc}
                        </p>

                        {/* Subtle decorative elements */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2" />
                    </div>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
};
