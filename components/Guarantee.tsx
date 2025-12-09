import React from 'react';
import { IMAGES } from '../images';

const Guarantee: React.FC = () => {
  return (
    <section className="bg-[#1C1C1C] py-16 px-4 text-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 justify-center">
         <div className="flex-shrink-0">
             <img 
                src={IMAGES.guarantee} 
                alt="Garantía de 7 días" 
                className="w-40 h-40 object-contain drop-shadow-[0_0_15px_rgba(244,180,0,0.3)] hover:scale-105 transition-transform duration-300"
             />
         </div>
         
         <div className="text-center md:text-left max-w-lg">
             <h3 className="text-[#F4B400] font-bold text-2xl uppercase mb-4">
                 GARANTÍA INCONDICIONAL DE 7 DÍAS
             </h3>
             <p className="text-gray-300 leading-relaxed">
                 Tu compra está <span className="text-[#25D366] font-bold">100% protegida</span>. Si por cualquier motivo el contenido no cumple con lo prometido, tienes hasta <strong>7 días</strong> para solicitar el reembolso completo.
             </p>
             <p className="text-gray-400 text-sm mt-4">
                 Sin preguntas, sin complicaciones. El acceso es <strong>de por vida</strong> y constantemente agregamos nuevos materiales para fortalecer tu fe.
             </p>
         </div>
      </div>
    </section>
  );
};

export default Guarantee;