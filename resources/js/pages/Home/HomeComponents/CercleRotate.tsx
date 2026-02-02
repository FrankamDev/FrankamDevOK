// import { useEffect, useRef } from 'react';
// import './circle.css'
// const LOGOS = [
//   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
//   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
//   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
//   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
//   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
//   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
//   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
//   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
//   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
//   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
//   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
//   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
//   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
//   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg',
//   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
//   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
//   'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
// ];

// // Duplique les logos pour un défilement infini fluide
// const duplicatedLogos = [...LOGOS, ...LOGOS, ...LOGOS];

// export default function TechShowcase() {
//   const topRef = useRef<HTMLDivElement>(null);
//   const bottomRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const top = topRef.current;
//     const bottom = bottomRef.current;
//     if (!top || !bottom) return;

//     // Clone les enfants pour un scroll infini
//     const cloneChildren = (container: HTMLDivElement) => {
//       const children = Array.from(container.children);
//       children.forEach((child) => {
//         const clone = child.cloneNode(true) as HTMLElement;
//         container.appendChild(clone);
//       });
//     };

//     cloneChildren(top);
//     cloneChildren(bottom);
//   }, []);

//   return (
//     <div className="relative w-full h-[70vh] md:h-screen bg-gradient-to-b from-[#0a001f] to-[#0f002f] overflow-hidden flex items-center justify-center">
//       {/* Fond subtil avec glow */}
//       <div className="absolute inset-0 opacity-20 pointer-events-none">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(99,102,241,0.1),transparent_50%)]" />
//       </div>

//       {/* Carte en avant */}
//       <div className="relative z-20 max-w-md md:max-w-2xl p-8 md:p-12 bg-gradient-to-br from-slate-900/90 to-indigo-950/80 backdrop-blur-md border border-indigo-500/20 rounded-2xl shadow-2xl shadow-indigo-900/40 text-center text-white transform transition-all hover:scale-105 duration-500">
//         <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
//           Écosystème Full-Stack
//         </h2>
//         <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
//           Technologies modernes – maîtrisées et connectées pour des projets puissants et scalables.
//         </p>
//       </div>

//       {/* Bandes défilantes en arrière-plan */}
//       <div className="absolute inset-0 z-10 flex flex-col justify-center gap-16 md:gap-24 opacity-50">
//         {/* Ligne du haut – défile vers la droite */}
//         <div
//           ref={topRef}
//           className="flex whitespace-nowrap animate-scroll-right"
//           style={{ animationDuration: '60s' }} // Vitesse ajustable
//         >
//           {duplicatedLogos.map((src, i) => (
//             <img
//               key={`top-${i}`}
//               src={src}
//               alt=""
//               className="w-16 h-16 md:w-24 md:h-24 mx-6 md:mx-10 rounded-full border border-indigo-500/30 shadow-lg shadow-indigo-900/20 transform transition-transform hover:scale-110 duration-300"
//             />
//           ))}
//         </div>

//         {/* Ligne du bas – défile vers la gauche */}
//         <div
//           ref={bottomRef}
//           className="flex whitespace-nowrap animate-scroll-left"
//           style={{ animationDuration: '70s' }} // Légèrement plus lent pour variété
//         >
//           {duplicatedLogos.map((src, i) => (
//             <img
//               key={`bottom-${i}`}
//               src={src}
//               alt=""
//               className="w-16 h-16 md:w-24 md:h-24 mx-6 md:mx-10 rounded-full border border-purple-500/30 shadow-lg shadow-purple-900/20 transform transition-transform hover:scale-110 duration-300"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


import { useEffect, useRef } from 'react';

const WEB_TECH_LOGOS = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/remix/remix-original.svg',
];

// On duplique pour le scroll infini
const duplicatedLogos = [...WEB_TECH_LOGOS, ...WEB_TECH_LOGOS, ...WEB_TECH_LOGOS];

export default function TechShowcaseFire() {
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const top = topRef.current;
    const bottom = bottomRef.current;
    if (!top || !bottom) return;

    // Clone pour scroll infini
    const cloneChildren = (container: HTMLDivElement) => {
      Array.from(container.children).forEach((child) => {
        const clone = child.cloneNode(true) as HTMLElement;
        container.appendChild(clone);
      });
    };

    cloneChildren(top);
    cloneChildren(bottom);
  }, []);

  return (
    <div className="relative w-full h-[80vh] md:h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-950 via-purple-950 to-fuchsia-950">
      {/* Fond animé subtil */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.12),transparent_50%)]" />
      </div>

      {/* Carte centrale avec bordure de feu lumineuse */}
      <div className="relative z-20 max-w-lg md:max-w-3xl p-8 md:p-12 lg:p-16 rounded-3xl text-center text-white backdrop-blur-xl bg-black/40 border-2 border-transparent shadow-2xl shadow-pink-900/40 overflow-hidden group">
        {/* Effet feu lumineux autour de la carte */}
        <div className="absolute inset-[-2px] rounded-3xl pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-fire-border" />
          <div className="absolute inset-[3px] rounded-3xl bg-black/90" />
        </div>

        {/* Contenu de la carte */}
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-lg">
            Écosystème Web Moderne
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200/90 max-w-3xl mx-auto leading-relaxed">
            React • Next.js • TypeScript • Tailwind • Svelte • Node • GraphQL • Vercel • Supabase • Vite...
          </p>
        </div>
      </div>

      {/* Bandes de logos qui défilent derrière */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center gap-20 md:gap-28 lg:gap-36 opacity-60 pointer-events-none">
        {/* Ligne du haut → vers la droite */}
        <div
          ref={topRef}
          className="flex whitespace-nowrap animate-scroll-right"
          style={{ animationDuration: '65s' }}
        >
          {duplicatedLogos.map((src, i) => (
            <div
              key={`top-${i}`}
              className="mx-8 md:mx-12 lg:mx-16 flex-shrink-0"
            >
              <img
                src={src}
                alt=""
                className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl border border-white/10 shadow-xl shadow-black/40 transform transition-all duration-500 hover:scale-110 hover:rotate-6 hover:shadow-2xl hover:shadow-purple-500/40"
              />
            </div>
          ))}
        </div>

        {/* Ligne du bas → vers la gauche */}
        <div
          ref={bottomRef}
          className="flex whitespace-nowrap animate-scroll-left"
          style={{ animationDuration: '80s' }}
        >
          {duplicatedLogos.map((src, i) => (
            <div
              key={`bottom-${i}`}
              className="mx-8 md:mx-12 lg:mx-16 flex-shrink-0"
            >
              <img
                src={src}
                alt=""
                className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-2xl border border-white/10 shadow-xl shadow-black/40 transform transition-all duration-500 hover:scale-110 hover:-rotate-6 hover:shadow-2xl hover:shadow-pink-500/40"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}