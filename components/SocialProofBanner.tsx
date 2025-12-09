import React from 'react';

const SocialProofBanner: React.FC = () => {
  return (
    <section className="bg-[#2C241B] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-white text-2xl md:text-4xl font-bold mb-6 leading-tight">
          Más de <span className="text-[#F4B400]">4.000 cristianos</span> ya están <br className="hidden md:block" />
          transformando su estudio bíblico <br className="hidden md:block" />
          con nosotros.
        </h2>
        <p className="text-gray-300 text-base md:text-xl font-medium">
          <span className="text-[#F4B400] font-bold">Testimonios reales</span> de personas que ya viven una nueva experiencia espiritual gracias a este material.
        </p>
      </div>
    </section>
  );
};

export default SocialProofBanner;