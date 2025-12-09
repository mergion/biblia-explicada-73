import React from 'react';
import { IMAGES } from '../images';
import { ThumbsUp, MessageCircle, Share2 } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    { name: "Maria Fernanda", avatar: IMAGES.testimonials.u2, time: "2 h", text: "¡Material increíble! Finalmente logré entender la Biblia de forma completa. Las explicaciones son claras y profundas. ¡Recomiendo mucho a todos los que quieran profundizar en la Palabra!", likes: 47 },
    { name: "João Carlos", avatar: IMAGES.testimonials.u1, time: "5 h", text: "¡Soy pastor hace 15 años y este material me sorprendió! Lo uso todos los días en mis predicaciones y estudios. ¡Los bonos son excelentes, principalmente el de Salmos!", likes: 82 },
    { name: "Ana Paula Santos", avatar: IMAGES.testimonials.u6, time: "1 d", text: "¡La mejor inversión que hice! El material está muy bien organizado y me ayudó a crecer espiritualmente. ¡Vale cada centavo! Lo indiqué para toda mi familia.", likes: 36 },
    { name: "Patricia Oliveira", avatar: IMAGES.testimonials.u4, time: "3 d", text: "¡Estoy impresionada con la calidad! Cada libro explicado de forma clara y objetiva. Ya estoy en el libro de Proverbios y cada día aprendo más.", likes: 54 },
    { name: "Roberto Silva", avatar: IMAGES.testimonials.u3, time: "4 d", text: "Adquirí el plan completo con todos los bonos. ¡Fue la mejor decisión! El Devocional 40 Días cambió mi vida espiritual. ¡Súper recomiendo!", likes: 91 },
    { name: "Carla Mendes", avatar: IMAGES.testimonials.u5, time: "1 sem", text: "¡Enseño en la escuela dominical hace años y nunca había encontrado un material tan completo! Los niños y jóvenes están amando las explicaciones.", likes: 68 },
  ];

  return (
    <section className="bg-brand-cream py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl font-bold text-center text-[#3E2F28] mb-2 uppercase">
            LO QUE DICEN NUESTROS CLIENTES
        </h2>
        <p className="text-center text-gray-500 mb-10">
            Ve los comentarios reales de quien ya adquirió el material
        </p>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Fake FB Header */}
            <div className="p-4 border-b border-gray-100 flex items-center gap-2">
                <div className="bg-[#1877F2] w-10 h-10 rounded-full flex items-center justify-center text-white font-bold">B</div>
                <div>
                    <div className="font-bold text-[#1877F2] hover:underline cursor-pointer">Biblia Explicada - Material Completo</div>
                    <div className="text-xs text-gray-500">Publicado el 15 de noviembre</div>
                </div>
            </div>

            {/* Comments */}
            <div className="p-4 space-y-6">
                {testimonials.map((t, idx) => (
                    <div key={idx} className="flex gap-3">
                        <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full flex-shrink-0" />
                        <div className="flex-1">
                            <div className="bg-[#F0F2F5] p-3 rounded-2xl inline-block">
                                <div className="font-bold text-sm text-gray-900">{t.name}</div>
                                <div className="text-sm text-gray-800">{t.text}</div>
                            </div>
                            <div className="flex gap-4 mt-1 text-xs text-gray-500 pl-2 font-semibold">
                                <span className="hover:underline cursor-pointer text-[#65676B]">Me gusta</span>
                                <span className="hover:underline cursor-pointer text-[#65676B]">Responder</span>
                                <span className="text-gray-400 font-normal">{t.time}</span>
                                <div className="flex items-center gap-1 ml-auto bg-white rounded-full px-1 shadow-sm border border-gray-100">
                                     <span className="text-blue-500 text-[10px]">👍💙</span>
                                     <span className="text-[10px]">{t.likes}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Fake Actions */}
            <div className="border-t border-gray-200 p-2 flex text-gray-500 font-semibold text-sm">
                <div className="flex-1 flex justify-center items-center gap-2 py-2 hover:bg-gray-50 rounded cursor-pointer">
                    <ThumbsUp size={18} /> Me gusta
                </div>
                <div className="flex-1 flex justify-center items-center gap-2 py-2 hover:bg-gray-50 rounded cursor-pointer">
                    <MessageCircle size={18} /> Comentar
                </div>
                <div className="flex-1 flex justify-center items-center gap-2 py-2 hover:bg-gray-50 rounded cursor-pointer">
                    <Share2 size={18} /> Compartir
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;