import { Link } from '@inertiajs/react';
import React from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiNextdotjs,
  SiGraphql,
} from 'react-icons/si';
import Navbar from '@/components/NavBar';

export default function Courses() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 text-white">
      {/* Header / Navbar simulé */}


      {/* Contenu principal */}
      <div className="pt-32 pb-20 px-6 md:pt-40 md:pb-32">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Des cours qui vous emmènent
            <br />
            de <span className="text-yellow-400">l'apprentissage</span> à{' '}
            <span className="text-emerald-400">la pratique</span>
          </h1>

          <p className="mt-6 text-xl md:text-2xl text-gray-300 font-light">
            Acquérez les compétences. Construisez votre portfolio. Obtenez le poste.
          </p>


          {/* Technologies icons */}
          <div className="mt-12 flex flex-wrap justify-center gap-5 md:gap-8">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-yellow-500/10 rounded-xl flex items-center justify-center border border-yellow-500/30 hover:scale-110 transition-transform">
              <SiJavascript size={36} className="text-yellow-400" />
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/30 hover:scale-110 transition-transform">
              <SiTypescript size={36} className="text-blue-400" />
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan-500/10 rounded-xl flex items-center justify-center border border-cyan-500/30 hover:scale-110 transition-transform">
              <SiReact size={36} className="text-cyan-400" />
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-green-600/10 rounded-xl flex items-center justify-center border border-green-500/30 hover:scale-110 transition-transform">
              <SiNodedotjs size={36} className="text-green-500" />
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-teal-500/10 rounded-xl flex items-center justify-center border border-teal-500/30 hover:scale-110 transition-transform">
              <SiTailwindcss size={36} className="text-teal-400" />
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gray-700/40 rounded-xl flex items-center justify-center border border-gray-500/40 hover:scale-110 transition-transform">
              <SiNextdotjs size={36} className="text-gray-200" />
            </div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-pink-500/10 rounded-xl flex items-center justify-center border border-pink-500/30 hover:scale-110 transition-transform">
              <SiGraphql size={36} className="text-pink-400" />
            </div>
          </div>

          <div className="mt-12 inline-flex items-center gap-3 px-6 py-3.5 bg-gray-800/60 rounded-full border border-gray-700/60 text-gray-300 text-sm md:text-base">
            <span className="text-yellow-400 text-lg">⚠️</span>
            <span>No need to filter. Every course takes you from beginner to advanced, step by step.</span>
          </div>
        </div>
      </div>

      {/* Petit footer / séparation */}
      <div className="border-t border-gray-800/50 py-8 text-center text-gray-500 text-sm">
        <p>All Courses</p>
      </div>
    </div>
  );
}