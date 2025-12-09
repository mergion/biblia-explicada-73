import { IMAGES } from '../images';

// Production build clean
const ProductPreview = () => {
  return (
    <section className="bg-white py-16 px-4">
       <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
                <h2 className="font-serif text-3xl font-bold text-gray-800 mb-2">
                    ¿Qué incluye la <br className="md:hidden"/>
                    <span className="text-[#F4B400] italic">BIBLIA EXPLICADA?</span>
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                    Recibe un material didáctico de alta calidad, compuesto por estudios visuales, devocionales y explicaciones versículo por versículo de los principales libros de la Biblia.
                </p>
            </div>

            <div className="flex flex-col items-center text-center mb-8">
                 <div className="relative transform hover:scale-105 transition-transform duration-500">
                    <img src={IMAGES.hero.mainBundle} className="w-full max-w-lg rounded-lg shadow-xl mb-6" alt="Material Premium" />
                 </div>
                 <h3 className="font-bold text-2xl text-gray-900 mb-2">Material Premium Ilustrado</h3>
                 <p className="text-gray-600 max-w-xl mx-auto">Ideal para usar en casa, en la iglesia o estudiar en cualquier lugar de forma práctica y organizada.</p>
                 <div className="mt-4 flex items-center justify-center gap-2 text-[#F4B400] font-bold text-sm uppercase">
                    <span>🔒 Acceso De Por Vida</span>
                 </div>
            </div>

            <div className="flex justify-center">
                 <img 
                    src={IMAGES.product.insideLook} 
                    alt="Vista previa del contenido versículo por versículo" 
                    className="w-full max-w-4xl rounded-t-xl shadow-2xl border border-gray-100"
                 />
            </div>
            
            <div className="max-w-4xl mx-auto mb-12 bg-gradient-to-b from-[#EBE9E4] to-white py-4 text-center rounded-b-xl shadow-lg border-x border-b border-gray-200">
                 <p className="font-serif italic text-gray-600 text-lg tracking-wide">
                    Una visión detallada del material que recibirás
                 </p>
            </div>

            <div className="text-center">
                 <button 
                    onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                    className="bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold py-4 px-10 rounded-full uppercase text-xl shadow-lg transition-all"
                >
                    QUIERO ADQUIRIR AHORA
                </button>
            </div>
       </div>
    </section>
  );
};

export default ProductPreview;