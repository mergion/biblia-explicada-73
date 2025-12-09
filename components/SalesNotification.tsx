import React, { useState, useEffect } from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface SalesNotificationProps {
  onSale: (isComplete: boolean) => void;
}

const NAMES = [
  "Juan P.", "María G.", "Carlos R.", "Ana L.", "Luis M.", 
  "Sofía T.", "Pedro S.", "Lucía V.", "Miguel A.", "Elena D.",
  "Jorge C.", "Valentina M.", "Diego F.", "Camila R.", "Mateo B.",
  "Isabella G.", "Santiago P.", "Daniela L.", "Nicolás H.", "Gabriela S."
];

const LOCATIONS = [
  "México", "Colombia", "Argentina", "Perú", "Chile", 
  "Ecuador", "Guatemala", "Costa Rica", "Panamá", "España", "USA"
];

const SalesNotification: React.FC<SalesNotificationProps> = ({ onSale }) => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({ name: '', location: '', plan: '' });

  useEffect(() => {
    // Start the loop after a short initial delay
    const initialTimeout = setTimeout(() => {
      showNotification();
    }, 2000);

    return () => clearTimeout(initialTimeout);
  }, []);

  const showNotification = () => {
    const randomName = NAMES[Math.floor(Math.random() * NAMES.length)];
    const randomLocation = LOCATIONS[Math.floor(Math.random() * LOCATIONS.length)];
    
    // 80% chance of Plan Completo (more frequent as requested)
    const isComplete = Math.random() > 0.2; 
    const planName = isComplete ? "Plan Completo" : "Plan Básico";

    setData({
      name: randomName,
      location: randomLocation,
      plan: planName
    });

    setVisible(true);

    // Update the parent counter if it's the complete plan
    if (isComplete) {
      onSale(true);
    }

    // Cycle logic: Show for 3 seconds, then hide.
    // Wait 1 second after hiding to show the next one.
    // Total cycle time approx 4 seconds.
    setTimeout(() => {
      setVisible(false);
      setTimeout(showNotification, 1000);
    }, 3000);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 animate-slide-up flex items-center gap-3 bg-white p-4 rounded-lg shadow-2xl border-l-4 border-[#25D366] max-w-sm transition-opacity duration-500">
      <button 
        onClick={() => setVisible(false)}
        className="absolute top-1 right-1 text-gray-400 hover:text-gray-600"
      >
        <X size={14} />
      </button>
      
      <div className="bg-green-100 p-2 rounded-full flex-shrink-0">
        <CheckCircle2 size={24} className="text-[#25D366]" />
      </div>
      
      <div>
        <p className="text-sm font-bold text-gray-800">
          {data.name} <span className="text-gray-500 font-normal">de {data.location}</span>
        </p>
        <p className="text-xs text-gray-600">
          Acaba de comprar el <span className="font-bold text-[#25D366]">{data.plan}</span>
        </p>
        <p className="text-[10px] text-gray-400 mt-1">Hace unos segundos</p>
      </div>
    </div>
  );
};

export default SalesNotification;