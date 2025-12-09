import React from 'react';
import { IMAGES } from '../images';

const Bonuses: React.FC = () => {
  const bonuses = [
    { id: 1, title: "Devocional 40 Días de Búsqueda del Señor", desc: "Fortalece tu jornada espiritual con 40 días de devocionales profundos." },
    { id: 2, title: "1000 Bosquejos de Predicación", desc: "Material completo para preparar tus predicaciones y estudios." },
    { id: 3, title: "150 Salmos Explicados Versículo por Versículo", desc: "Sumérgete en los Salmos con explicaciones detalladas." },
    { id: 4, title: "Colección Oro - 200 Versículos Más Reveladores", desc: "Descubre los versículos más impactantes de las Escrituras." },
    { id: 5, title: "31 Proverbios Explicados", desc: "Sabiduría práctica aplicable al día a día." },
    { id: 6, title: "100 Versículos del Nuevo Testamento Explicados", desc: "Comprende las enseñanzas de Jesús y de los apóstoles." },
    { id: 7, title: "100 Versículos del Antiguo Testamento Explicados", desc: "Explora la historia y las promesas de Dios." },
    { id: 8, title: "Evangelio de Mateo Explicado", desc: "Estudio completo con explicaciones de cada capítulo." },
    { id: 9, title: "Los 7 Sellos del Apocalipsis", desc: "Descifra los misterios proféticos del Apocalipsis." },
    { id: 10, title: "Biblia de Estudio - Más de 3 Mil Páginas", desc: "Biblia completa con notas y comentarios." },
  ];

  return (
    <section className="bg-[#2A2A2A] py-16 px-4 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="font-serif text-2xl md:text-3xl font-bold uppercase mb-2 text-gray-300 tracking-wide">
                RECIBIRÁS AL ADQUIRIR TU PRODUCTO
            </h2>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-[#F4B400] uppercase mb-8">
                10 BONUS EXCLUSIVOS
            </h2>
        </div>

        <div className="space-y-12">
            {bonuses.map((bonus, idx) => (
                <div key={bonus.id} className="bg-white rounded-xl overflow-hidden flex flex-col md:flex-row shadow-2xl text-gray-900 ring-1 ring-white/10">
                    {/* Image Container - Adjusted to display full image without cropping */}
                    <div className="md:w-2/5 bg-[#F9F7F2] flex items-center justify-center p-6 relative min-h-[300px] md:min-h-0">
                        <img 
                            src={IMAGES.bonuses[idx] || IMAGES.hero.mainBundle} 
                            alt={bonus.title} 
                            className="w-full h-full object-contain max-h-[320px] drop-shadow-xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                    
                    {/* Content Container */}
                    <div className="p-6 md:p-8 flex-1 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100">
                        <div className="inline-block bg-[#F5A623] text-black text-xs font-black px-4 py-1.5 rounded-full mb-4 w-max uppercase tracking-wider shadow-sm">
                            #{bonus.id} - BONUS
                        </div>
                        
                        <h3 className="font-serif font-bold text-2xl mb-3 text-gray-900 leading-tight">
                            {bonus.title}
                        </h3>
                        
                        <p className="text-gray-600 mb-6 leading-relaxed font-medium">
                            {bonus.desc}
                        </p>
                        
                        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                            <span className="text-red-400 line-through text-lg font-bold opacity-80">$ 37</span>
                            <span className="text-[#25D366] font-black text-2xl uppercase tracking-wide">GRATIS</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Bonuses;