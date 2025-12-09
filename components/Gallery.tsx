import React from 'react';
import { IMAGES } from '../images';

const Gallery: React.FC = () => {
  const foodImages = IMAGES.gallery;

  return (
    <section className="bg-brand-green py-16 px-4">
      <div className="max-w-6xl mx-auto">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {foodImages.map((src, idx) => (
                <div key={idx} className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
                    <img 
                        src={src} 
                        alt={`Receta Keto ${idx + 1}`} 
                        className="w-full h-48 sm:h-64 object-cover"
                        loading="lazy"
                    />
                </div>
            ))}
         </div>
         <p className="text-center text-brand-cream font-serif font-bold text-2xl mt-12 opacity-90">
             Las comidas más sabrosas en versión cetogénica:
         </p>
      </div>
    </section>
  );
};

export default Gallery;