import { FiArrowUpRight } from 'react-icons/fi';

const cours = [
  {
    titre: 'Créer un Portfolio 3D',
    description:
      'Apprenez à construire un portfolio interactif avec TailwindCSS, Three.js et React.',
    image: 'https://cdn-icons-png.flaticon.com/512/1822/1822899.png',
    lien: 'https://frankam-dev.vercel.app/',
  },
  {
    titre: 'Analyse de CV par IA',
    description:
      'Utilisez l’intelligence artificielle pour analyser et améliorer votre CV.',
    image: 'https://cdn-icons-png.flaticon.com/512/4712/4712109.png',
    lien: '#',
  },
  {
    titre: 'Application de Chat Moderne',
    description:
      'Créez une messagerie en temps réel avec Socket.io et React.',
    image: 'https://cdn-icons-png.flaticon.com/512/2462/2462719.png',
    lien: '#',
  },
  {
    titre: 'Tableau de Bord E-commerce',
    description:
      'Gérez vos données avec un tableau de bord React et Tailwind.',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
    lien: '#',
  },
  {
    titre: 'Application Météo',
    description: 'Affichez la météo en direct grâce aux APIs météo.',
    image: 'https://cdn-icons-png.flaticon.com/512/869/869869.png',
    lien: '#',
  },
  {
    titre: 'Application de Notes Mobile',
    description: 'Créez une appli mobile pour vos notes avec React Native.',
    image: 'https://cdn-icons-png.flaticon.com/512/1250/1250615.png',
    lien: '#',
  },
  {
    titre: 'Système d’authentification',
    description: 'Implémentez une auth sécurisée avec JWT et React.',
    image: 'https://cdn-icons-png.flaticon.com/512/3064/3064197.png',
    lien: '#',
  },
  {
    titre: 'Dashboard Administrateur',
    description: 'Un tableau de bord complet avec statistiques et gestion.',
    image: 'https://cdn-icons-png.flaticon.com/512/3135/3135716.png',
    lien: 'https://frankamdashboard.vercel.app/',
  },
  {
    titre: 'Application de Streaming',
    description:
      'Construisez une plateforme de streaming audio/vidéo moderne.',
    image: 'https://cdn-icons-png.flaticon.com/512/2930/2930034.png',
    lien: '#',
  },
];

const CardBuild = () => {
  return (
    <section className="px-4 py-12">
      <h2 className="mb-10 text-center font-[arial] text-3xl font-bold text-gray-300">
        Arrête de regarder. Commence à construire.
      </h2>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cours.map((cours, index) => (
          <a
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            href={cours.lien}
            className="group relative rounded-xl bg-gradient-to-b from-pink-500 via-pink-300 to-transparent p-[2px] shadow-md transition-all duration-300 hover:shadow-lg"
          >
            <div className="relative flex h-[320px] flex-col justify-between rounded-[12px] bg-[#13152D] p-8">
              <div>
                <img
                  src={cours.image}
                  alt={cours.titre}
                  className="absolute top-6 left-6 h-12 w-12"
                />
                <div className="absolute top-6 right-6 text-gray-400 transition group-hover:text-pink-500">
                  <FiArrowUpRight size={22} />
                </div>
              </div>

              <div className="mt-16">
                <h3 className="mb-3 text-xl font-bold text-white transition group-hover:text-pink-600">
                  {cours.titre}
                </h3>
                <p className="text-base text-gray-300">
                  {cours.description}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CardBuild;
