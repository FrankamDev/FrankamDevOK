// Les URLs des logos. Dans un projet réel, vous les importeriez comme des assets locaux.
const logos = {
  center: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', // Remplacer par votre logo L
  orbit1: [

    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      alt: 'JavaScript',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
      alt: 'Vue.js',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
      alt: 'Photoshop',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-plain.svg',
      alt: 'DigitalOcean',
    },
  ],
  orbit2: [
    // Orbite intermédiaire
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      alt: 'HTML5',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      alt: 'CSS3',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
      alt: 'PHP',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
      alt: 'WordPress',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
      alt: 'Laravel',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
      alt: 'Git',
    },
  ],
  orbit3: [
    // Orbite extérieure (plus lente)
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
      alt: 'Illustrator',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/indesign/indesign-plain.svg',
      alt: 'InDesign',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg',
      alt: 'Heroku',
    },
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
      alt: 'Jira',
    }, // Exemple d'ajout
    {
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
      alt: 'GitHub',
    }, // Exemple d'ajout
  ],
};

// =========================================================================
// STYLES CSS (Keyframes pour les animations)
// =========================================================================
// Nous allons injecter ces keyframes via un bloc style ou les mettre dans un fichier CSS global.
// Pour cet exemple, je les inclue directement pour la démonstration.
const orbitStyles = `
@keyframes orbit1 {
  from { transform: rotate(0deg) translateX(8rem) rotate(0deg); } /* rayon plus petit */
  to { transform: rotate(360deg) translateX(8rem) rotate(-360deg); }
}

@keyframes orbit2 {
  from { transform: rotate(0deg) translateX(12rem) rotate(0deg); } /* rayon moyen */
  to { transform: rotate(360deg) translateX(12rem) rotate(-360deg); }
}

@keyframes orbit3 {
  from { transform: rotate(0deg) translateX(16rem) rotate(0deg); } /* rayon plus grand */
  to { transform: rotate(360deg) translateX(16rem) rotate(-360deg); }
}

/* Version responsive pour les petits écrans */
@media (max-width: 640px) {
  @keyframes orbit1 {
    from { transform: rotate(0deg) translateX(5rem) rotate(0deg); }
    to { transform: rotate(360deg) translateX(5rem) rotate(-360deg); }
  }
  @keyframes orbit2 {
    from { transform: rotate(0deg) translateX(8rem) rotate(0deg); }
    to { transform: rotate(360deg) translateX(8rem) rotate(-360deg); }
  }
  @keyframes orbit3 {
    from { transform: rotate(0deg) translateX(11rem) rotate(0deg); }
    to { transform: rotate(360deg) translateX(11rem) rotate(-360deg); }
  }
}
`;

// =========================================================================
// COMPOSANT PRINCIPAL : OrbitingLogos
// =========================================================================
const CercleRotate = () => {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030215]">

      <style>{orbitStyles}</style>

      {/* Conteneur principal du système orbital */}
      <div className="relative flex h-80 w-80 items-center justify-center sm:h-[500px] sm:w-[500px]">
        {/* Lignes d'orbite visuelles (Cercles) */}
        <div className="absolute inset-0 rounded-full border border-blue-600/30 opacity-70" />
        <div
          className="absolute inset-0 rounded-full border border-blue-600/30 opacity-70"
          style={{ transform: 'scale(0.75)' }}
        />
        <div
          className="absolute inset-0 rounded-full border border-blue-600/30 opacity-70"
          style={{ transform: 'scale(0.5)' }}
        />

        {/* Logo Central */}
        <div className="absolute z-20">
          <img
            src={logos.center}
            alt="Center Logo"
            className="h-10 w-10 rounded-full border border-blue-500/50 bg-gray-800 p-1 sm:h-14 sm:w-14"
          />
        </div>

        {/* Orbite 1 (Intérieure) */}
        {logos.orbit1.map((logo, index) => (
          <div
            key={logo.alt}
            className="absolute z-20"
            style={{
              animation: `orbit1 15s linear infinite`,
              animationDelay: `${index * (15 / logos.orbit1.length)}s`, // Décalage pour répartir les logos
              left: '50%', // Positionnement initial
              top: '50%',
              marginLeft: '-1.25rem', // Centrer le logo par rapport à son point de rotation
              marginTop: '-1.25rem',
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-10 w-10 rounded-full border border-blue-700/50 bg-gray-800 p-1 shadow-lg sm:h-10 sm:w-10"
            />
          </div>
        ))}

        {/* Orbite 2 (Intermédiaire) */}
        {logos.orbit2.map((logo, index) => (
          <div
            key={logo.alt}
            className="absolute z-20"
            style={{
              animation: `orbit2 25s linear infinite`,
              animationDelay: `${index * (25 / logos.orbit2.length)}s`,
              left: '50%',
              top: '50%',
              marginLeft: '-1.5rem',
              marginTop: '-1.5rem',
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-12 w-12 rounded-full border border-blue-700/50 bg-gray-800 p-1 shadow-lg sm:h-12 sm:w-12"
            />
          </div>
        ))}

        {/* Orbite 3 (Extérieure) */}
        {logos.orbit3.map((logo, index) => (
          <div
            key={logo.alt}
            className="absolute z-20"
            style={{
              animation: `orbit3 35s linear infinite`,
              animationDelay: `${index * (35 / logos.orbit3.length)}s`,
              left: '50%',
              top: '50%',
              marginLeft: '-1.75rem',
              marginTop: '-1.75rem',
            }}
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-14 w-14 rounded-full border border-blue-700/50 bg-gray-800 p-1 shadow-lg sm:h-14 sm:w-14"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CercleRotate;
