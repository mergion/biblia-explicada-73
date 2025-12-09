import React from 'react';
import { IMAGES } from '../images';
import { CheckCircle2, ChevronsDown, Gift, ArrowRight, X } from 'lucide-react';

interface PricingProps {
  count?: number; 
}

const Pricing: React.FC<PricingProps> = ({ count = 1243 }) => {
  const handleCheckout = (url: string) => {
    console.log("🚀 Checkout initiated! URL:", url);

    // Fire Meta Pixel InitiateCheckout event
    if ((window as any).fbq) {
      console.log("✅ FB Pixel 'InitiateCheckout' event fired");
      (window as any).fbq('track', 'InitiateCheckout');
    } else {
      console.warn("⚠️ FB Pixel not loaded");
    }
    
    window.location.href = url;
  };

  return (
    <section id="pricing" className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="font-serif text-4xl font-bold text-center text-[#3E2F28] mb-12 uppercase">
            ELIGE LA MEJOR<br/>OPCIÓN PARA TI:
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-8 items-start pt-8"> 
            
            {/* Basic Plan */}
            <div className="rounded-2xl p-6 flex-1 max-w-sm mx-auto w-full bg-white flex flex-col relative md:mt-24 shadow-lg border border-gray-100">
                <div className="absolute top-4 right-4 bg-red-100 text-red-600 font-bold text-xs px-2 py-1 rounded-full">
                    85% OFF
                </div>
                
                {/* Title styled like reference */}
                <div className="text-center mb-6">
                    <h3 className="text-[#25D366] font-bold text-2xl uppercase tracking-wider inline-block border-b-4 border-[#25D366] pb-1">
                        PLAN BÁSICO
                    </h3>
                </div>

                {/* Image with glow */}
                <div className="flex justify-center mb-6 relative">
                    <div className="absolute inset-0 bg-yellow-400/20 blur-xl rounded-full transform scale-75"></div>
                    <img src={IMAGES.product.basicPlan} className="w-full max-w-[320px] object-contain drop-shadow-xl relative z-10" alt="Biblia Explicada" />
                </div>

                <div className="space-y-4 mb-8 flex-1">
                    <div className="flex gap-3 items-start">
                        <CheckCircle2 className="text-[#25D366] w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm font-bold leading-tight">TODOS LOS 73 LIBROS DE LA BIBLIA EXPLICADOS</span>
                    </div>
                     <div className="flex gap-3 items-start">
                        <X className="text-red-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-500 text-sm font-medium">Sin Bonos Exclusivos</span>
                    </div>
                     <div className="flex gap-3 items-start">
                        <X className="text-red-400 w-5 h-5 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-500 text-sm font-medium">Sin Soporte Prioritario</span>
                    </div>
                </div>
                <div className="text-center mt-auto">
                    <div className="text-red-400 line-through text-sm font-bold">$ 47</div>
                    <div className="text-5xl font-bold text-[#25D366] mb-4">$ 6.90</div>
                    <button 
                        onClick={() => handleCheckout('https://pay.hotmart.com/U103314944T?checkoutMode=10')}
                        className="w-full bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold py-3 rounded-lg uppercase transition-colors shadow-md hover:shadow-lg"
                    >
                        QUIERO SOLO EL BÁSICO
                    </button>
                </div>
            </div>

            {/* Complete Plan Column */}
            <div className="flex-1 max-w-sm mx-auto w-full flex flex-col">
                
                {/* Attention Text */}
                <div className="text-center mb-4">
                    <p className="text-[#D90404] font-bold text-lg md:text-xl leading-tight">
                        <span className="font-black">ATENCIÓN:</span> ¡Tenemos una oferta aún más <br/>
                        <span className="underline decoration-2 underline-offset-2">VENTAJOSA</span> para ti! Mira abajo
                    </p>
                    <div className="flex justify-center mt-2 text-[#D90404]">
                        <ChevronsDown size={32} className="animate-bounce" />
                    </div>
                </div>

                {/* Complete Plan Card */}
                <div className="rounded-2xl overflow-hidden shadow-2xl flex flex-col border-4 border-[#25D366] relative z-10">
                    
                    {/* Header */}
                    <div className="bg-[#25D366] py-4 text-center">
                        <h3 className="text-white font-black text-2xl md:text-3xl uppercase tracking-wider drop-shadow-md">
                            PLAN COMPLETO
                        </h3>
                    </div>

                    {/* Dark Body */}
                    <div className="bg-[#1C1C1C] p-6 text-white flex-1 flex flex-col relative">
                        
                        {/* Gold Badge */}
                        <div className="flex justify-center mb-4">
                             <div className="bg-gradient-to-r from-[#FFD700] to-[#F4B400] text-black font-black text-lg px-8 py-2 rounded-full uppercase shadow-[0_0_15px_rgba(244,180,0,0.6)] tracking-wide transform hover:scale-105 transition-transform">
                                MÁS VENDIDO
                             </div>
                        </div>

                        {/* Social Proof */}
                        <p className="text-center text-gray-400 text-xs mb-4 transition-all duration-500">
                            ✨ +{count} personas eligieron este plan
                        </p>

                        {/* Bonus Included Text */}
                        <div className="flex justify-center items-center gap-2 text-[#25D366] font-bold text-sm uppercase mb-6 bg-[#25D366]/10 py-2 rounded-lg border border-[#25D366]/20">
                            <Gift size={18} />
                            TODOS LOS 10 BONOS INCLUIDOS
                        </div>
                        
                        {/* Image */}
                        <div className="flex justify-center mb-8 relative group">
                            <div className="absolute inset-0 bg-[#F4B400]/20 blur-3xl rounded-full transform scale-75 group-hover:bg-[#F4B400]/30 transition-all"></div>
                            <img src={IMAGES.hero.mainBundle} className="w-full max-w-[280px] object-contain relative z-10 drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500" alt="Paquete Completo" />
                        </div>

                        {/* Features List */}
                        <div className="space-y-3 mb-8 text-sm flex-1">
                             <div className="flex gap-2 items-start">
                                <CheckCircle2 className="text-[#25D366] w-5 h-5 mt-0.5 flex-shrink-0" />
                                <span className="font-bold">TODOS LOS 73 LIBROS DE LA BIBLIA EXPLICADOS</span>
                            </div>
                            <div className="flex gap-2 items-start">
                                <CheckCircle2 className="text-[#25D366] w-5 h-5 mt-0.5 flex-shrink-0" />
                                <span>Soporte prioritario en whatsapp</span>
                            </div>
                            <div className="flex gap-2 items-start">
                                <CheckCircle2 className="text-[#25D366] w-5 h-5 mt-0.5 flex-shrink-0" />
                                <span>Actualizaciones mensuales</span>
                            </div>
                            
                            {/* Bonuses with Gift Icon */}
                            <div className="flex gap-2 items-start">
                                <span className="text-xl leading-none">🎁</span>
                                <span className="text-gray-300">Devocional 40 Días de Búsqueda del Señor</span>
                            </div>
                            <div className="flex gap-2 items-start">
                                <span className="text-xl leading-none">🎁</span>
                                <span className="text-gray-300">1000 Bosquejos de Predicación</span>
                            </div>
                            <div className="flex gap-2 items-start">
                                <span className="text-xl leading-none">🎁</span>
                                <span className="text-gray-300">150 Salmos Explicados Versículo por Versículo</span>
                            </div>
                            <div className="flex gap-2 items-start">
                                <span className="text-xl leading-none">🎁</span>
                                <span className="text-gray-300">Colección Oro - 200 Versículos Más Reveladores</span>
                            </div>
                            <div className="flex gap-2 items-start">
                                <span className="text-xl leading-none">🎁</span>
                                <span className="text-gray-300">31 Proverbios Explicados</span>
                            </div>
                             <div className="flex gap-2 items-start">
                                <span className="text-xl leading-none">🎁</span>
                                <span className="text-gray-300">100 Versículos del Nuevo Testamento Explicados</span>
                            </div>
                             <div className="flex gap-2 items-start">
                                <span className="text-xl leading-none">🎁</span>
                                <span className="text-gray-300">100 Versículos del Antiguo Testamento Explicados</span>
                            </div>
                            <div className="flex gap-2 items-start">
                                <span className="text-xl leading-none">🎁</span>
                                <span className="text-gray-300">Evangelio de Mateo Explicado</span>
                            </div>
                            <div className="flex gap-2 items-start">
                                <span className="text-xl leading-none">🎁</span>
                                <span className="text-gray-300">Los 7 Sellos del Apocalipsis</span>
                            </div>
                            <div className="flex gap-2 items-start">
                                <span className="text-xl leading-none">🎁</span>
                                <span className="text-[#F4B400] font-bold">Biblia de Estudio - Más de 3 Mil Páginas</span>
                            </div>
                        </div>

                        {/* Pricing */}
                        <div className="text-center mt-auto border-t border-gray-800 pt-6">
                            <div className="flex justify-center items-center gap-2 mb-1">
                                <span className="text-gray-500 line-through text-sm">de $ 97</span>
                                <span className="bg-[#D90404] text-white text-[10px] px-2 py-0.5 rounded font-bold">AHORRA $87</span>
                            </div>
                            <div className="text-6xl font-black text-[#25D366] mb-4 tracking-tight">$ 9.90</div>
                            
                            <button 
                                onClick={() => handleCheckout('https://pay.hotmart.com/T103314957G?checkoutMode=10')}
                                className="w-full bg-gradient-to-r from-[#F4B400] to-[#E5B80B] hover:from-[#E5B80B] hover:to-[#CCA300] text-black font-black py-4 rounded-lg uppercase shadow-[0_4px_14px_rgba(244,180,0,0.5)] transform hover:scale-[1.02] active:scale-95 transition-all text-xl flex items-center justify-center gap-2 group"
                            >
                                LO QUIERO AHORA
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <p className="text-[10px] text-gray-500 mt-3">Entrega inmediata al whatsapp y email registrado</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
