import React from 'react';
import { MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="bg-white py-12 px-4 border-t border-gray-100">
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-block bg-[#25D366]/10 p-4 rounded-full mb-6">
            <MessageCircle size={40} className="text-[#25D366]" />
        </div>
        
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            ¿Tienes más preguntas?
        </h2>
        
        <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
            Si necesitas ayuda o tienes alguna duda específica sobre el material, ¡habla con nuestro equipo de soporte!
        </p>

        <a 
            href="https://wa.me/message/A5YNJWPO7MY7F1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebd59] text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all uppercase tracking-wide group"
        >
            <svg 
                viewBox="0 0 24 24" 
                width="24" 
                height="24" 
                fill="currentColor" 
                className="group-hover:scale-110 transition-transform"
            >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.767-.721 2.016-1.418.249-.697.249-1.294.174-1.418-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.07 0C5.537 0 .226 5.315.226 11.848a11.824 11.824 0 001.583 5.911L0 24l6.335-1.652a11.825 11.825 0 005.735 1.53h.002c6.532 0 11.847-5.317 11.847-11.848 0-3.168-1.232-6.147-3.474-8.385" />
            </svg>
            Contáctanos por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default Contact;