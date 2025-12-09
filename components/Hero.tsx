import React from 'react';
import { IMAGES } from '../images';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="bg-brand-dark text-white pt-12 pb-16 px-4 relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-black/80 z-0"></div>
        <div 
            className="absolute inset-0 opacity-20 z-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${IMAGES.hero.bgTexture})` }}
        ></div>

        <div className="max-w-4xl mx-auto relative z-10 text-center">
            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-6 text-[#F4B400] leading-tight">
                Todos los 66 LIBROS DE LA BIBLIA <br className="hidden md:block"/> 
                <span className="text-white">explicados versículo por versículo</span>
            </h1>

            <div className="mb-8 transform hover:scale-105 transition-transform duration-500">
                <img 
                    src={IMAGES.hero.mainBundle} 
                    alt="Paquete Libros de la Biblia" 
                    className="w-full max-w-lg mx-auto rounded-lg shadow-2xl"
                />
            </div>

            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
                La Biblia entera explicada de forma clara, práctica y reveladora — una guía completa para entender cada libro de las Escrituras.
            </p>

            <div className="inline-block bg-[#D90404] px-4 py-1 text-white font-bold text-sm uppercase rounded mb-6 animate-pulse">
                POR SOLO $6.90
            </div>

            <div className="flex justify-center">
                <button 
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold text-xl py-4 px-10 rounded-full shadow-[0_4px_0_#158940] active:translate-y-1 active:shadow-none transition-all uppercase flex items-center gap-2 group"
                >
                    QUIERO ENTENDER LA BIBLIA
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    </section>
  );
};

export default Hero;