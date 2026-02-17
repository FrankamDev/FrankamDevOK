import { Link } from '@inertiajs/react';
import { useState } from 'react';
import ContactModal from '../../../components/ContactModal'; // Importe le nouveau composant modal

export default function AnotherQuestion() {
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour contrôler l'ouverture de la modale

  return (
    <div className="flex flex-col items-center bg-[#020014] py-8 text-white">
      <h2 className="text-2xl font-bold text-white mb-4">
        Devenez le développeur que vous voulez devenir
      </h2>
      <div className="flex items-center justify-center">
        <button
          onClick={() => setIsModalOpen(true)} // Ouvre la modale au clic
          className="mt-4 text-[15px] rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-3 text-center font-bold text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all active:scale-95"
        >
          Poser une autre question <span className="ml-2 text-[10px] transform group-hover:translate-x-1 transition-transform">👉</span>
        </button>
      </div>

      {/* Rendu conditionnel du composant modal */}
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}