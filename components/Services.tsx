import React, { useRef } from 'react';
import { ArrowUpRight, Box, Layers, Zap, Monitor, PenTool } from 'lucide-react';
import { Service } from '../types';

const services: Service[] = [
  { id: '01', title: 'Design Web', description: 'UI/UX premiado que converte visitantes passivos em crentes ativos da sua marca.', icon: 'Monitor' },
  { id: '02', title: 'Desenvolvimento', description: 'Arquiteturas robustas e escaláveis em React e Next.js construídas para velocidade.', icon: 'Layers' },
  { id: '03', title: 'Identidade Visual', description: 'Logos, tipografia e voz que dominam seu nicho de mercado.', icon: 'PenTool' },
  { id: '04', title: '3D & Motion', description: 'Experiências WebGL que desafiam os limites do navegador e retêm a atenção.', icon: 'Box' },
  { id: '05', title: 'Estratégia Digital', description: 'Roteiros baseados em dados projetados para captura agressiva de mercado.', icon: 'Zap' },
];

const ServiceCard: React.FC<{ service: Service; className?: string }> = ({ service, className }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    cardRef.current.style.setProperty('--x', `${x}px`);
    cardRef.current.style.setProperty('--y', `${y}px`);
  };

  const IconComponent = () => {
      switch(service.icon) {
          case 'Monitor': return <Monitor size={32} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />;
          case 'Layers': return <Layers size={32} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />;
          case 'PenTool': return <PenTool size={32} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />;
          case 'Box': return <Box size={32} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />;
          case 'Zap': return <Zap size={32} className="text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />;
          default: return <ArrowUpRight size={32} className="text-white" />;
      }
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative group bg-white/[0.03] border border-white/5 backdrop-blur-xl p-10 overflow-hidden hover:border-accent/30 hover:bg-white/[0.06] transition-all duration-700 ease-out ${className}`}
    >
      {/* Intense Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(800px circle at var(--x) var(--y), rgba(168, 85, 247, 0.15), transparent 40%)`
        }}
      />
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div className="flex justify-between items-start mb-8">
            <div className="p-4 bg-white/5 rounded-2xl group-hover:bg-accent/80 group-hover:shadow-[0_0_30px_#a855f7] transition-all duration-500">
                <IconComponent />
            </div>
            <span className="font-mono text-sm text-gray-600 group-hover:text-accent transition-colors">/{service.id}</span>
        </div>
        
        <div>
            <h3 className="text-3xl font-display font-bold mb-4 text-white group-hover:translate-x-2 transition-transform duration-500">
                {service.title}
            </h3>
            <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-200 transition-colors duration-500">
                {service.description}
            </p>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex items-center gap-3 text-sm font-bold uppercase tracking-wider text-accent opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            Saiba Mais <ArrowUpRight size={18} className="text-accent drop-shadow-[0_0_5px_#a855f7]" />
        </div>
      </div>
    </div>
  );
};

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#03000a] relative z-10">
      <div className="container mx-auto px-6">
        <div className="mb-24">
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-6 text-white tracking-tight">
                Nossa <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-blue-500 text-shine">Expertise</span>
            </h2>
            <div className="h-1 w-32 bg-gradient-to-r from-accent to-transparent" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
          {/* Bento Grid Layout */}
          <ServiceCard service={services[0]} className="md:col-span-2 rounded-tl-3xl" />
          <ServiceCard service={services[1]} className="rounded-tr-3xl md:rounded-tr-none" />
          <ServiceCard service={services[2]} />
          <ServiceCard service={services[3]} className="md:col-span-2" />
          <ServiceCard service={services[4]} className="md:col-span-3 rounded-b-3xl" />
        </div>
      </div>
    </section>
  );
};