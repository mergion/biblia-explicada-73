import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FaqItem } from '../types';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
        question: "¿Cuál es la forma de pago?",
        answer: "Aceptamos tarjeta de crédito, débito y PayPal. La compra es procesada por Hotmart, la plataforma más segura de productos digitales."
    },
    {
        question: "¿El pago es seguro?",
        answer: "Sí, 100% seguro. Tus datos son encriptados y procesados por una plataforma certificada internacionalmente."
    },
    {
        question: "¿Tiene garantía?",
        answer: "¡Sí! Tienes 7 días de garantía incondicional. Si no te gusta el material, devolvemos el 100% de tu dinero sin preguntas."
    },
    {
        question: "¿Cómo tendré acceso al material?",
        answer: "En cuanto se confirme el pago, recibirás un correo electrónico con el enlace de acceso a nuestra área de miembros exclusiva, donde podrás descargar todo el material."
    }
  ];

  return (
    <section className="bg-brand-cream py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-serif text-3xl font-bold text-center text-[#3E2F28] mb-12 uppercase">
            PREGUNTAS FRECUENTES
        </h2>

        <div className="space-y-4">
            {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                    <button 
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full text-left p-5 flex justify-between items-center font-bold text-gray-800 hover:bg-gray-50"
                    >
                        {faq.question}
                        {openIndex === idx ? <ChevronUp size={20} className="text-[#F4B400]" /> : <ChevronDown size={20} className="text-gray-400" />}
                    </button>
                    {openIndex === idx && (
                        <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100 bg-gray-50/50">
                            {faq.answer}
                        </div>
                    )}
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;