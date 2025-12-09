import React from 'react';
import { ChevronRight } from 'lucide-react';

const Description: React.FC = () => {
  const reasons = [
    "Quieres comprender verdaderamente cada capítulo y versículo de la Biblia",
    "Quieres enseñar a otros de manera didáctica y espiritual",
    "Buscas una forma visual y práctica de memorizar las historias Sagradas",
    "Deseas aprender sobre la vida y enseñanzas de Jesús de forma profunda",
    "Quieres sentirte más seguro para leer y explicar la Biblia en público"
  ];

  return (
    <section className="bg-brand-cream py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        
        {/* O que é */}
        <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-gray-800 mb-6 relative inline-block">
                ¿Qué es la <span className="text-[#F4B400]">BIBLIA EXPLICADA?</span>
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#F4B400] opacity-50"></span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
                La Biblia entera explicada de forma clara, práctica y reveladora — una guía completa para entender cada libro de las Escrituras.
                <br/><br/>
                Un material didáctico con más de 3000 páginas ilustradas, organizado por período bíblico, para que estudies de manera profunda y crezcas espiritualmente como nunca antes.
            </p>
        </div>

        {/* Para você se */}
        <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-gray-100">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
                Este material es para ti si:
            </h2>
            <div className="space-y-4">
                {reasons.map((reason, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-3 hover:bg-orange-50 rounded-lg transition-colors">
                        <div className="mt-1 bg-[#F4B400]/20 p-1 rounded-full text-[#F4B400]">
                             <ChevronRight size={20} strokeWidth={3} />
                        </div>
                        <p className="text-gray-700 font-medium text-lg">{reason}</p>
                    </div>
                ))}
            </div>

            <div className="mt-10 text-center">
                <button 
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold py-3 px-8 rounded-full uppercase text-lg shadow-lg hover:shadow-xl transition-all"
                >
                    QUIERO ENTENDER LA BIBLIA
                </button>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Description;