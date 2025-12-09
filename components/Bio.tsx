import React from 'react';
import { IMAGES } from '../images';

const Bio: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
         <div className="w-full md:w-1/2">
             <img 
                src={IMAGES.bio.chef}
                alt="Chef Isabelle Alves" 
                className="rounded-lg shadow-2xl w-full max-w-sm mx-auto md:mr-auto"
             />
         </div>
         <div className="w-full md:w-1/2 text-gray-700 space-y-4">
             <h3 className="font-serif text-3xl font-bold text-black mb-4">Chef Isabelle Alves</h3>
             <p>
                 La vida de Isabelle Alves, de 32 años, cambió radicalmente cuando descubrió que podía perder 15kg en 3 meses — comiendo postres todos los días.
             </p>
             <p>
                 Determinada a acabar con el ciclo de dietas fallidas, Isabelle se sumergió en el universo keto y descubrió el secreto: transformar la Airfryer en una fábrica de platos que derriten grasa.
             </p>
             <p>
                 Con el apoyo de su marido, Isabelle creó más de 500 recetas que parecen "trampa" — pizzas, panes, pasteles y dulces que aceleran el metabolismo. Su transformación atrajo a miles de seguidores que ya perdieron peso sin abrir mano del placer de comer.
             </p>
             <p className="font-medium italic border-l-4 border-brand-green pl-4">
                 "La historia de Isabelle prueba que no necesitas sufrir para adelgazar — solo necesitas las recetas correctas."
             </p>
             <p>
                 Hoy, la comunidad creada por Isabelle ayuda a personas como tú a descubrir que adelgazar puede ser la parte más deliciosa de tu vida.
             </p>
         </div>
      </div>
    </section>
  );
};

export default Bio;