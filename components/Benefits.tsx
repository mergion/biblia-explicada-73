import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
        title: "Comprensión Profunda",
        desc: "Entiende la Biblia desde Génesis hasta Apocalipsis."
    },
    {
        title: "Lenguaje Accesible",
        desc: "Material escrito para que todos entiendan fácilmente."
    },
    {
        title: "Crecimiento Espiritual",
        desc: "Enriquece tu mente y espíritu con conocimiento bíblico."
    },
    {
        title: "Material Ilustrado",
        desc: "Más de 3000 páginas con imágenes inspiradoras."
    },
    {
        title: "Acceso De Por Vida",
        desc: "El material es tuyo para siempre, sin mensualidades."
    }
  ];

  return (
    <section className="bg-[#2A2A2A] py-16 px-4 border-t-4 border-[#F4B400]">
      <div className="max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl font-bold text-white text-center mb-12">
            Ventajas de usar la <span className="text-[#F4B400]">BIBLIA EXPLICADA</span>
        </h2>

        <div className="space-y-6">
            {benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white/5 p-4 rounded-lg border border-white/10 hover:border-[#F4B400]/50 transition-colors">
                    <CheckCircle2 className="text-[#25D366] flex-shrink-0 mt-1" size={28} />
                    <div>
                        <h4 className="font-bold text-white text-lg">{b.title}</h4>
                        <p className="text-gray-400 text-sm">{b.desc}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;