import React from 'react';

const PainPoints: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4">
      <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-gray-800 mb-4">
                ¿Alguna vez te has sentido <span className="text-[#F4B400]">perdido</span> al leer la Biblia?
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
                Muchos cristianos luchan con la falta de disciplina y claridad. Intentan leer la Biblia pero se frustran por no saber cómo entenderla o aplicarla. La <strong>Biblia Explicada</strong> es la guía visual que te toma de la mano y te acompaña a través de cada etapa del conocimiento bíblico.
            </p>
      </div>
    </section>
  );
};

export default PainPoints;