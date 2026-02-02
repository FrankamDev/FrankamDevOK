// // Les URLs des logos. Dans un projet réel, vous les importeriez comme des assets locaux.
// const logos = {
//   center: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', // Remplacer par votre logo L
//   orbit1: [

//     {
//       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
//       alt: 'JavaScript',
//     },
//     {
//       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
//       alt: 'Vue.js',
//     },
//     {
//       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg',
//       alt: 'Photoshop',
//     },
//     {
//       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-plain.svg',
//       alt: 'DigitalOcean',
//     },
//   ],
//   orbit2: [
//     // Orbite intermédiaire
//     {
//       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
//       alt: 'HTML5',
//     },
//     {
//       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
//       alt: 'CSS3',
//     },
//     {
//       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
//       alt: 'PHP',
//     },
//     {
//       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg',
//       alt: 'WordPress',
//     },
//     {
//       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
//       alt: 'Laravel',
//     },
//     {
//       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
//       alt: 'Git',
//     },
//   ],
//   orbit3: [
//     // Orbite extérieure (plus lente)
//     {
//       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg',
//       alt: 'Illustrator',
//     },
//     {
//       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/indesign/indesign-plain.svg',
//       alt: 'InDesign',
//     },
//     {
//       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg',
//       alt: 'Heroku',
//     },
//     {
//       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
//       alt: 'Jira',
//     }, // Exemple d'ajout
//     {
//       src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
//       alt: 'GitHub',
//     }, // Exemple d'ajout
//   ],
// };

// // =========================================================================
// // STYLES CSS (Keyframes pour les animations)
// // =========================================================================
// // Nous allons injecter ces keyframes via un bloc style ou les mettre dans un fichier CSS global.
// // Pour cet exemple, je les inclue directement pour la démonstration.
// const orbitStyles = `
// @keyframes orbit1 {
//   from { transform: rotate(0deg) translateX(8rem) rotate(0deg); } /* rayon plus petit */
//   to { transform: rotate(360deg) translateX(8rem) rotate(-360deg); }
// }

// @keyframes orbit2 {
//   from { transform: rotate(0deg) translateX(12rem) rotate(0deg); } /* rayon moyen */
//   to { transform: rotate(360deg) translateX(12rem) rotate(-360deg); }
// }

// @keyframes orbit3 {
//   from { transform: rotate(0deg) translateX(16rem) rotate(0deg); } /* rayon plus grand */
//   to { transform: rotate(360deg) translateX(16rem) rotate(-360deg); }
// }

// /* Version responsive pour les petits écrans */
// @media (max-width: 640px) {
//   @keyframes orbit1 {
//     from { transform: rotate(0deg) translateX(5rem) rotate(0deg); }
//     to { transform: rotate(360deg) translateX(5rem) rotate(-360deg); }
//   }
//   @keyframes orbit2 {
//     from { transform: rotate(0deg) translateX(8rem) rotate(0deg); }
//     to { transform: rotate(360deg) translateX(8rem) rotate(-360deg); }
//   }
//   @keyframes orbit3 {
//     from { transform: rotate(0deg) translateX(11rem) rotate(0deg); }
//     to { transform: rotate(360deg) translateX(11rem) rotate(-360deg); }
//   }
// }
// `;

// // =========================================================================
// // COMPOSANT PRINCIPAL : OrbitingLogos
// // =========================================================================
// const CercleRotate = () => {
//   return (
//     <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030215]">

//       <style>{orbitStyles}</style>

//       {/* Conteneur principal du système orbital */}
//       <div className="relative flex h-80 w-80 items-center justify-center sm:h-[500px] sm:w-[500px]">
//         {/* Lignes d'orbite visuelles (Cercles) */}
//         <div className="absolute inset-0 rounded-full border border-blue-600/30 opacity-70" />
//         <div
//           className="absolute inset-0 rounded-full border border-blue-600/30 opacity-70"
//           style={{ transform: 'scale(0.75)' }}
//         />
//         <div
//           className="absolute inset-0 rounded-full border border-blue-600/30 opacity-70"
//           style={{ transform: 'scale(0.5)' }}
//         />

//         {/* Logo Central */}
//         <div className="absolute z-20">
//           <img
//             src={logos.center}
//             alt="Center Logo"
//             className="h-10 w-10 rounded-full border border-blue-500/50 bg-gray-800 p-1 sm:h-14 sm:w-14"
//           />
//         </div>

//         {/* Orbite 1 (Intérieure) */}
//         {logos.orbit1.map((logo, index) => (
//           <div
//             key={logo.alt}
//             className="absolute z-20"
//             style={{
//               animation: `orbit1 15s linear infinite`,
//               animationDelay: `${index * (15 / logos.orbit1.length)}s`, // Décalage pour répartir les logos
//               left: '50%', // Positionnement initial
//               top: '50%',
//               marginLeft: '-1.25rem', // Centrer le logo par rapport à son point de rotation
//               marginTop: '-1.25rem',
//             }}
//           >
//             <img
//               src={logo.src}
//               alt={logo.alt}
//               className="h-10 w-10 rounded-full border border-blue-700/50 bg-gray-800 p-1 shadow-lg sm:h-10 sm:w-10"
//             />
//           </div>
//         ))}

//         {/* Orbite 2 (Intermédiaire) */}
//         {logos.orbit2.map((logo, index) => (
//           <div
//             key={logo.alt}
//             className="absolute z-20"
//             style={{
//               animation: `orbit2 25s linear infinite`,
//               animationDelay: `${index * (25 / logos.orbit2.length)}s`,
//               left: '50%',
//               top: '50%',
//               marginLeft: '-1.5rem',
//               marginTop: '-1.5rem',
//             }}
//           >
//             <img
//               src={logo.src}
//               alt={logo.alt}
//               className="h-12 w-12 rounded-full border border-blue-700/50 bg-gray-800 p-1 shadow-lg sm:h-12 sm:w-12"
//             />
//           </div>
//         ))}

//         {/* Orbite 3 (Extérieure) */}
//         {logos.orbit3.map((logo, index) => (
//           <div
//             key={logo.alt}
//             className="absolute z-20"
//             style={{
//               animation: `orbit3 35s linear infinite`,
//               animationDelay: `${index * (35 / logos.orbit3.length)}s`,
//               left: '50%',
//               top: '50%',
//               marginLeft: '-1.75rem',
//               marginTop: '-1.75rem',
//             }}
//           >
//             <img
//               src={logo.src}
//               alt={logo.alt}
//               className="h-14 w-14 rounded-full border border-blue-700/50 bg-gray-800 p-1 shadow-lg sm:h-14 sm:w-14"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CercleRotate;


// 'use client';

// import { OrbitControls, Stars } from '@react-three/drei';
// import { Canvas, useFrame } from '@react-three/fiber';
// import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
// import { useEffect, useRef } from 'react';
// import * as THREE from 'three';

// // ──────────────────────────────────────────────────────────────────────────────
// // CONFIGURATION GLOBALE
// // ──────────────────────────────────────────────────────────────────────────────

// const ORBITS = {
//   inner: {
//     radius: 3.2,
//     speed: 0.9,
//     particleCount: 18,
//     logoSize: 0.9,
//   },
//   middle: {
//     radius: 5.8,
//     speed: 0.55,
//     particleCount: 28,
//     logoSize: 1.05,
//   },
//   outer: {
//     radius: 9.2,
//     speed: 0.32,
//     particleCount: 38,
//     logoSize: 1.25,
//   },
// } as const;

// const LOGOS = {
//   center: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',

//   inner: [
//     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
//   ],

//   middle: [
//     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg',
//   ],

//   outer: [
//     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aws/aws-original.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
//     'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
//   ],
// };

// // ──────────────────────────────────────────────────────────────────────────────
// // Composant 3D – Logo tournant
// // ──────────────────────────────────────────────────────────────────────────────

// type LogoProps = {
//   url: string;
//   radius: number;
//   angleOffset: number;
//   speed: number;
//   size: number;
// };

// function OrbitingLogo({ url, radius, angleOffset, speed, size }: LogoProps) {
//   const ref = useRef<THREE.Mesh>(null!);

//   useFrame((state) => {
//     const time = state.clock.getElapsedTime();
//     const angle = time * speed + angleOffset;

//     ref.current.position.x = Math.cos(angle) * radius;
//     ref.current.position.z = Math.sin(angle) * radius;
//     ref.current.rotation.y = angle + Math.PI / 2; // face la caméra
//   });

//   return (
//     <mesh ref={ref} scale={size}>
//       <planeGeometry args={[1.1, 1.1]} />
//       <meshBasicMaterial
//         map={new THREE.TextureLoader().load(url)}
//         transparent
//         side={THREE.DoubleSide}
//         toneMapped={false}
//       />
//     </mesh>
//   );
// }

// // ──────────────────────────────────────────────────────────────────────────────
// // Halo pulsant + particules d'énergie
// // ──────────────────────────────────────────────────────────────────────────────

// function EnergyHalo() {
//   const ref = useRef<THREE.Mesh>(null!);
//   const materialRef = useRef<THREE.MeshBasicMaterial>(null!);

//   useFrame((state) => {
//     const t = state.clock.getElapsedTime();
//     if (ref.current) {
//       ref.current.scale.setScalar(1 + Math.sin(t * 1.8) * 0.08);
//     }
//     if (materialRef.current) {
//       materialRef.current.opacity = 0.35 + Math.sin(t * 2.2) * 0.12;
//     }
//   });

//   return (
//     <mesh ref={ref}>
//       <ringGeometry args={[ORBITs.outer.radius * 0.98, ORBITs.outer.radius * 1.02, 128]} />
//       <meshBasicMaterial
//         ref={materialRef}
//         color="#60a5fa"
//         transparent
//         opacity={0.4}
//         blending={THREE.AdditiveBlending}
//         side={THREE.DoubleSide}
//       />
//     </mesh>
//   );
// }

// // ──────────────────────────────────────────────────────────────────────────────
// // Scène principale 3D
// // ──────────────────────────────────────────────────────────────────────────────

// function Scene() {
//   const mouseX = useMotionValue(0);
//   const mouseY = useMotionValue(0);

//   const rotationX = useSpring(useTransform(mouseY, [-1, 1], [0.12, -0.12]));
//   const rotationY = useSpring(useTransform(mouseX, [-1, 1], [-0.18, 0.18]));

//   useEffect(() => {
//     const handleMove = (e: PointerEvent) => {
//       mouseX.set((e.clientX / window.innerWidth) * 2 - 1);
//       mouseY.set(-(e.clientY / window.innerHeight) * 2 + 1);
//     };
//     window.addEventListener('pointermove', handleMove);
//     return () => window.removeEventListener('pointermove', handleMove);
//   }, [mouseX, mouseY]);

//   return (
//     <>
//       <ambientLight intensity={0.4} />
//       <pointLight position={[10, 10, 10]} intensity={1.8} color="#a5b4fc" />
//       <pointLight position={[-10, -8, -12]} intensity={0.9} color="#c084fc" />

//       <Stars radius={100} depth={50} count={4000} factor={4} saturation={0} fade speed={0.6} />

//       {/* Logo central pulsant */}
//       <mesh scale={1.8}>
//         <sphereGeometry args={[1.15, 32, 32]} />
//         <meshStandardMaterial
//           color="#1e40af"
//           emissive="#60a5fa"
//           emissiveIntensity={0.7}
//           roughness={0.4}
//           metalness={0.3}
//         />
//         <mesh scale={1.4}>
//           <sphereGeometry args={[1, 32, 32]} />
//           <meshBasicMaterial
//             map={new THREE.TextureLoader().load(LOGOS.center)}
//             transparent
//             opacity={0.9}
//             blending={THREE.AdditiveBlending}
//           />
//         </mesh>
//       </mesh>

//       {/* Orbites */}
//       {Object.entries(ORBITS).map(([key, config]) => {
//         const logos = LOGOS[key as keyof typeof LOGOS];
//         if (!Array.isArray(logos)) return null;

//         return logos.map((url, i) => {
//           const angleOffset = (i / logos.length) * Math.PI * 2;
//           return (
//             <OrbitingLogo
//               key={`${key}-${i}`}
//               url={url}
//               radius={config.radius}
//               angleOffset={angleOffset}
//               speed={config.speed}
//               size={config.logoSize}
//             />
//           );
//         });
//       })}

//       <EnergyHalo />
//     </>
//   );
// }

// // ──────────────────────────────────────────────────────────────────────────────
// // Composant principal
// // ──────────────────────────────────────────────────────────────────────────────

// export default function TechOrbitScene() {
//   return (
//     <div className="relative w-full h-screen bg-gradient-to-b from-[#0a001f] via-[#0f002f] to-[#0a001f] overflow-hidden">
//       {/* Canvas Three.js */}
//       <Canvas
//         camera={{ position: [0, 0, 18], fov: 50 }}
//         style={{ position: 'absolute', inset: 0 }}
//         gl={{ antialias: true, alpha: false }}
//       >
//         <Scene />
//         <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.4} autoRotate autoRotateSpeed={0.6} />
//       </Canvas>

//       {/* Overlay texte (optionnel) */}
//       <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-10">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.4, delay: 0.8 }}
//           className="text-center text-white px-6"
//         >
//           <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300">
//             Écosystème Full-Stack
//           </h1>
//           <p className="mt-4 text-xl md:text-2xl text-gray-300/80 max-w-2xl mx-auto">
//             Technologies modernes – maîtrisées et connectées
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// }