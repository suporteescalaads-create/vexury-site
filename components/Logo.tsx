import React from 'react';

interface LogoProps {
  className?: string; // Controls icon size
  textClassName?: string; // Controls text styles
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8", textClassName = "text-xl", showText = true }) => {
  return (
    <div className="flex items-center gap-3 group cursor-pointer select-none">
      {/* Symbol: SVG from GitHub */}
      <div className={`relative ${className} transition-transform duration-500 ease-out group-hover:scale-105`}>
        <img 
          src="https://raw.githubusercontent.com/will-siq/vexury-assets/main/logo_vexury.svg" 
          alt="Vexury Logo" 
          className="w-full h-full object-contain" 
        />
      </div>

      {/* Wordmark: Ultra-wide, Premium Sans-Serif */}
      {showText && (
        <div className="flex flex-col justify-center">
          {/* Added pb-1 and leading-tight to prevent bottom clipping */}
          <span className={`font-display font-bold tracking-[0.25em] uppercase text-white leading-tight pb-1 ${textClassName}`}>
            Vexury
          </span>
        </div>
      )}
    </div>
  );
};