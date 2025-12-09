import React from 'react';

const Footer: React.FC = () => {
  return (
    <>
        <section className="bg-[#1C1C1C] text-white py-16 px-4 text-center">
             <div className="max-w-2xl mx-auto">
                 <h2 className="font-serif text-2xl font-bold mb-6">¡No pierdas esta oportunidad!</h2>
                 <p className="text-gray-400 mb-8">Comienza hoy mismo tu jornada de conocimiento bíblico profundo y transforma tu vida espiritual.</p>
                 <button 
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold py-4 px-12 rounded-lg uppercase shadow-lg transition-transform hover:scale-105"
                 >
                    QUIERO ADQUIRIR AHORA
                </button>
             </div>
        </section>

        <footer className="bg-[#111] py-12 px-4 border-t border-gray-800 text-center">
            <div className="max-w-4xl mx-auto space-y-4">
                <p className="text-xs text-gray-500">
                    Biblia Explicada - Todos los derechos reservados
                </p>
                <p className="text-[10px] text-gray-600 max-w-lg mx-auto leading-tight">
                    Este sitio no está afiliado a Facebook ni a ninguna entidad de Facebook. Después de que sales de Facebook, la responsabilidad no es de ellos sino de nuestro sitio.
                </p>
            </div>
        </footer>
    </>
  );
};

export default Footer;