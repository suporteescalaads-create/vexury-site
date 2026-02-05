import React from 'react';

export const Marquee: React.FC = () => {
  const items = ["Estratégia", "Design", "Desenvolvimento", "Motion 3D", "Branding", "Direção Criativa", "SEO"];
  
  return (
    <div className="w-full py-12 bg-white text-black overflow-hidden relative rotate-1 scale-110 z-20 border-y-4 border-black">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-16 mx-8">
            {items.map((item) => (
              <span key={item} className="text-6xl md:text-8xl font-display font-black uppercase tracking-tighter flex items-center gap-16">
                {item}
                <span className="w-4 h-4 bg-black rounded-full" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};