import React from 'react';
import { BookOpen, GraduationCap, Home, Heart } from 'lucide-react';

const TargetAudience: React.FC = () => {
  const targets = [
    {
        icon: BookOpen,
        title: "Pastores y Líderes",
        desc: "Prepara sermones y estudios bíblicos con profundidad teológica y claridad práctica."
    },
    {
        icon: GraduationCap,
        title: "Maestros de Escuela Dominical",
        desc: "Material completo para enseñar la Palabra de Dios de forma atractiva y didáctica."
    },
    {
        icon: Home,
        title: "Familias Cristianas",
        desc: "Estudien juntos la Biblia con explicaciones accesibles para todas las edades."
    },
    {
        icon: Heart,
        title: "Devotos Personales",
        desc: "Profundiza tu comunión diaria con Dios a través del entendimiento de las Escrituras."
    }
  ];

  return (
    <section className="bg-[#FAF9F6] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-serif text-3xl font-bold text-center text-gray-800 mb-12">
            ¿Quién puede usarlo?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
            {targets.map((t, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-md border-b-4 border-[#3E2F28] hover:-translate-y-1 transition-transform">
                     <div className="w-16 h-16 rounded-full bg-[#3E2F28] flex items-center justify-center mb-6 mx-auto">
                        <t.icon className="text-[#F4B400]" size={32} />
                     </div>
                     <h3 className="font-bold text-xl text-center mb-2 text-gray-900">{t.title}</h3>
                     <p className="text-center text-gray-600 leading-relaxed">{t.desc}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;