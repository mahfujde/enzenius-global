import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

const Logo: React.FC<LogoProps> = ({ className = "h-16 md:h-20", light = false }) => {
  const [error, setError] = useState(false);
  const logoSrc = "/images/logo.png";

  return (
    <div className={`flex items-center ${className}`}>
      {!error ? (
        <img 
          src={logoSrc} 
          alt="Enzenius Global" 
          className="h-full w-auto object-contain"
          onError={() => setError(true)}
        />
      ) : (
        <div className="flex flex-col items-start leading-none group scale-90 md:scale-100">
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-brandCTA rounded-lg rotate-12 opacity-20"></div>
              <div className="relative z-10 w-8 h-8 bg-gradient-to-br from-brandCTA to-brandGold rounded-lg flex items-center justify-center text-white font-black text-xl shadow-lg">
                E
              </div>
            </div>
            <div className="flex flex-col">
              <span className={`font-black text-xl tracking-tighter ${light ? 'text-white' : 'text-primary'} uppercase leading-none`}>
                ENZENIUS
              </span>
              <span className={`font-black text-[9px] tracking-[0.4em] ${light ? 'text-brandCTA' : 'text-brandCTA'} uppercase mt-1`}>
                GLOBAL
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;