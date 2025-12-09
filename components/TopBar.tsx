import React from 'react';

interface TopBarProps {
  count: number;
}

const TopBar: React.FC<TopBarProps> = ({ count }) => {
  const date = new Date().toLocaleDateString('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return (
    <div className="bg-[#D90404] text-white py-3 text-center text-sm md:text-base font-bold sticky top-0 z-50 tracking-wide px-4 flex flex-col md:block shadow-md">
      <span>✨ +{count} personas eligieron el plan completo</span>
      <span className="hidden md:inline mx-2">-</span>
      <span className="uppercase text-[#FFFF00] md:text-white">OFERTA VÁLIDA SOLO POR HOY {date}</span>
    </div>
  );
};

export default TopBar;