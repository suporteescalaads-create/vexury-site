
import React from 'react';

interface LogoProps {
  className?: string; // Controls icon size
  textClassName?: string; // Controls text styles
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8", textClassName = "text-xl", showText = true }) => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      {/* Symbol: Official SVG provided by user */}
      <div className={`relative ${className} transition-transform duration-500 ease-out group-hover:scale-110`}>
        <img 
          src="https://raw.githubusercontent.com/suporteescalaads-create/vexury-site/f9919f2dbcb39b4b4d39ec34ea9363373584515b/logo_vexury.svg" 
          alt="Vexury Logo" 
          className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(168,85,247,0.4)]" 
        />
      </div>

      {/* Wordmark: Ultra-wide, Premium Sans-Serif */}
      {showText && (
        <div className="flex flex-col justify-center">
          <span className={`font-display font-bold tracking-[0.25em] uppercase text-white leading-tight pb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.1)] ${textClassName}`}>
            Vexury
          </span>
        </div>
      )}
    </div>
  );
};
