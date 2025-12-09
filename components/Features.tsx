import React from 'react';
import { BookOpen, Repeat, Book, Clock, Utensils, Award, CheckCircle, MessageCircle, FileText } from 'lucide-react';
import { Feature } from '../types';

const Features: React.FC = () => {
  const features: Feature[] = [
    {
      title: "500 recetas keto cuidadosamente desarrolladas para Airfryer",
      description: "Listas para importar y usar fácilmente.",
      icon: BookOpen
    },
    {
      title: "División clara",
      description: "Desayunos, almuerzos, cenas y snacks — todo a mano.",
      icon: Utensils
    },
    {
      title: 'Guía bonus "Keto con Airfryer"',
      description: "Consejos prácticos y apoyo para empezar con el pie derecho.",
      icon: Book
    },
    {
      title: "Acceso ilimitado 24h al día, 7 días por semana",
      description: "Pagas una vez y usas para siempre.",
      icon: Repeat
    },
    {
      title: "Cocinar sin estrés",
      description: "Un clic y la receta va directamente a tu día a día.",
      icon: Clock
    },
    {
      title: "Platos verdaderamente sabrosos",
      description: "Sin ingredientes complicados — solo con lo que tienes en la despensa.",
      icon: Award
    },
    {
      title: "Perfectas para el día a día y ocasiones especiales",
      description: "Desde desayunos rápidos hasta cenas impresionantes.",
      icon: CheckCircle
    },
    {
      title: "Soporte técnico y contacto rápido",
      description: "Respondemos, ayudamos, resolvemos — ¡siempre!",
      icon: MessageCircle
    },
     {
      title: "Macronutrientes listados en cada receta",
      description: "Proteínas, grasas e hidratos de carbono — todo ya calculado por ti.",
      icon: FileText
    }
  ];

  return (
    <section className="bg-brand-cream py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-800 uppercase tracking-widest mb-1">
            VEA LO QUE
            </h2>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-gray-700 uppercase tracking-widest">
            VAS A RECIBIR:
            </h2>
        </div>

        <div className="space-y-8">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-4 md:gap-6 group">
              <div className="flex-shrink-0 mt-1">
                 <feature.icon size={32} className="text-gray-600 group-hover:text-brand-green transition-colors" />
              </div>
              <div>
                <h3 className="font-bold text-lg text-gray-800 mb-1">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;