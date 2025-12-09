import { useState, useEffect } from 'react';
import { IMAGES } from '../images';

// Production build clean
const Offer = () => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 15, seconds: 0 });
  
  useEffect(() => {
     const interval = setInterval(() => {
        setTimeLeft((prev) => {
            if (prev.seconds > 0) {
              return { ...prev, seconds: prev.seconds - 1 };
            } else if (prev.minutes > 0) {
              return { minutes: prev.minutes - 1, seconds: 59 };
            } else {
              return { minutes: 15, seconds: 0 };
            }
        });
     }, 1000);
     return () => clearInterval(interval);
  }, []);

  const handleCheckout = () => {
    console.log("🚀 Flash Offer Checkout initiated!");
    
    // Fire Meta Pixel InitiateCheckout event
    if ((window as any).fbq) {
      console.log("✅ FB Pixel 'InitiateCheckout' event fired");
      (window as any).fbq('track', 'InitiateCheckout');
    } else {
      console.warn("⚠️ FB Pixel not loaded");
    }
    window.location.href = 'https://pay.hotmart.com/T103314957G?checkoutMode=10';
  };

  const bonuses = [
    {
       num: 1,
       title: 'GUÍA KETO CON AIRFRYER',
       priceOld: '9.90$',
       img: IMAGES.offer.bonuses[0]
    },
    {
       num: 2,
       title: 'PLANEADOR KETO 14 DÍAS',
       priceOld: '9.90$',
       img: IMAGES.offer.bonuses[1]
    },
    {
       num: 3,
       title: 'LISTA DE COMPRAS KETO',
       priceOld: '9.90$',
       img: IMAGES.offer.bonuses[2]
    }
  ];

  return (
    <section className="bg-brand-cream py-16 px-4">
      <div className="max-w-5xl mx-auto text-center mb-16">
        <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-8">
            Si compras ahora, vas a recibir un Manual Exclusivo + 3 Bonus.
        </h3>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
            {bonuses.map((b) => (
                <div key={b.num} className="bg-white border-2 border-dashed border-gray-400 p-4 rounded-xl relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white px-2 text-gray-500 font-bold text-sm">
                        BONUS {b.num}
                    </div>
                    <img src={b.img} className="w-24 h-32 mx-auto object-cover shadow-md mb-4 rounded" alt="Bonus Cover" />
                    <h4 className="font-bold text-sm h-10 mb-2">{b.title}</h4>
                    <div className="text-gray-400 line-through text-sm">Valor Normal: <br/>{b.priceOld}</div>
                    <div className="text-brand-green font-bold text-lg">Valor Hoy: <br/><span className="text-xl">Gratis</span></div>
                </div>
            ))}
        </div>

        <p className="text-red-600 font-bold mb-1">ATENCIÓN: estos bonos estarán disponibles solo hoy.</p>
        <p className="font-bold text-lg mb-2">¡No pierdas esta oportunidad!</p>
        <div className="inline-block bg-yellow-300 px-4 py-1 font-bold text-lg transform -rotate-1">
            Más de 90% de descuento!
        </div>
      </div>

      {/* PRICING CARD */}
      <div className="max-w-md mx-auto bg-[#5C6B50] rounded-lg shadow-2xl overflow-hidden text-white relative border-4 border-[#7A8C6B]">
          <div className="bg-[#4A5D43] p-4 text-center border-b border-gray-500">
              <h3 className="font-bold text-xl uppercase tracking-widest">COMPRA EN PACK</h3>
              <p className="text-sm opacity-80">PACK COMPLETO</p>
          </div>
          
          <div className="p-6 md:p-8 space-y-3 text-sm">
              {[
                  "+257 Recetas Keto para Airfryer",
                  "300 Recetas Keto Extra (Volumen 2)",
                  "200 Recetas de Smoothies Keto",
                  "80 Recetas de Pan Keto",
                  "Receta de Bebida Probiótica",
                  "Guía 'Keto con Airfryer'",
                  "Planeador Keto 14 Días",
                  "Lista de Compras Keto Esencial",
                  "Bonus: Actualizaciones",
                  "Bonus: Acceso Vitalicio"
              ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                      <span className="text-green-400">✔</span>
                      <span className="opacity-90">{item}</span>
                  </div>
              ))}
              
              <div className="bg-yellow-400 text-black text-center font-bold text-[10px] py-1 mt-4 rounded">
                  PACK COMPLETO CON 981 RECETAS + GUÍA + LISTA DE COMPRAS - TODO CON 90% DE DESCUENTO.
              </div>

              <div className="text-center mt-6">
                  <div className="text-red-400 line-through text-lg font-bold">97$</div>
                  <div className="text-xs uppercase opacity-70 mb-1">POR APENAS</div>
                  <div className="text-5xl font-bold text-[#4CD964] mb-4">9.90$</div>
              </div>
          </div>

          {/* FLASH OFFER BOX */}
          <div className="bg-[#4A5D43] p-6 m-4 rounded-xl text-center shadow-inner border border-white/10 relative mt-0">
               <h4 className="text-2xl font-bold text-white mb-2 uppercase tracking-wide">OFERTA RELÁMPAGO</h4>
               <p className="text-sm text-gray-200 mb-6 px-1 leading-tight">
                   Tu lugar está reservado por MINUTOS. Caso no accedas, el descuento será cedido a la próxima persona.
               </p>
               
               {/* Limited Units Badge */}
               <div className="mb-4">
                   <div className="inline-block bg-[#FFFF00] text-black font-black text-sm md:text-lg px-2 md:px-4 py-1 uppercase transform -skew-x-6">
                        ÚLTIMAS 7 UNIDADES DISPONIBLES
                   </div>
               </div>

               {/* Progress Bar */}
               <div className="w-full bg-red-300 h-5 rounded-full mb-6 relative overflow-hidden">
                    <div className="absolute top-0 left-0 h-full bg-[#FF0000] w-[88%] flex items-center justify-end pr-2">
                        <span className="text-white text-[10px] font-bold">88%</span>
                    </div>
               </div>

               {/* Timer */}
               <div className="flex justify-center gap-4 mb-6">
                   <div className="bg-[#FF3B30] w-24 h-20 rounded-lg flex items-center justify-center text-white text-5xl font-bold shadow-lg">
                       {timeLeft.minutes.toString().padStart(2, '0')}
                   </div>
                   <div className="bg-[#FF3B30] w-24 h-20 rounded-lg flex items-center justify-center text-white text-5xl font-bold shadow-lg">
                       {timeLeft.seconds.toString().padStart(2, '0')}
                   </div>
               </div>

               {/* Dotted Divider */}
               <div className="border-t-2 border-b-2 border-dotted border-white/40 py-2 mb-6">
                   <p className="text-white text-xs font-bold uppercase tracking-wider">
                       MÁS DE 90% DE DESCUENTO POR TIEMPO LIMITADO
                   </p>
               </div>

               {/* Button */}
               <button 
                   onClick={handleCheckout}
                   className="w-full bg-[#32D74B] hover:bg-green-500 text-white font-bold text-xl md:text-2xl py-4 rounded-lg shadow-[0_4px_0_rgb(34,139,34)] active:shadow-none active:translate-y-1 transition-all uppercase flex justify-center items-center gap-2 mb-4 group">
                   <span className="text-2xl md:text-3xl group-hover:-translate-x-1 transition-transform">👉</span>
                   ¡COMPRAR AHORA!
                   <span className="text-2xl md:text-3xl group-hover:translate-x-1 transition-transform">👈</span>
               </button>
               
               {/* Warning */}
               <div className="text-left text-[11px] md:text-xs text-gray-200 leading-snug bg-black/10 p-2 rounded">
                   <span className="bg-[#FFFF00] text-black font-bold px-1 mr-1">Atención:</span>
                   Si eres una persona que realmente quiere cuidar de su salud o la de su familia, definitivamente nuestras recetas keto pueden ayudarte a partir de ahora.
               </div>
          </div>
      </div>
    </section>
  );
};

export default Offer;