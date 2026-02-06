// src/components/AllCoursesSection.tsx
import { usePage } from '@inertiajs/react';
import React from 'react';
import { SiGraphql, SiJavascript, SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiTypescript } from 'react-icons/si';
import Footer from '@/components/Footer';
import Navbar from '@/components/NavBar';
import CourseCard from './components/CourseCard';



export default function AllCoursesSection() {
  const { courses } = usePage().props;
  // const courses = [1, 2, 1, 2, 1, 2, 1];
  console.log(courses);

  return (
    <>
      <section className="relative min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-gray-900 px-4 sm:px-6 md:px-8 lg:px-10 pb-24 pt-8 md:pt-16 overflow-hidden">
        <Navbar />

        {/* Hero section centrée et responsive */}
        <div className="mx-auto max-w-5xl text-center px-4 sm:px-0 mt-8 md:mt-16 lg:mt-24">
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Des cours qui vous emmènent
            <br />
            de <span className="text-yellow-400">l'apprentissage</span> à{' '}
            <span className="text-emerald-400">la pratique</span>
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 font-light max-w-3xl mx-auto">
            Acquérez les compétences. Construisez votre portfolio. Obtenez le poste.
          </p>

          {/* Icônes des technologies – wrap bien sur mobile */}
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-8">
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-yellow-500/10 rounded-xl flex items-center justify-center border border-yellow-500/30 hover:scale-110 transition-transform">
              <SiJavascript size={28} className="sm:size-36 text-yellow-400" />
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-blue-500/10 rounded-xl flex items-center justify-center border border-blue-500/30 hover:scale-110 transition-transform">
              <SiTypescript size={28} className="sm:size-36 text-blue-400" />
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-cyan-500/10 rounded-xl flex items-center justify-center border border-cyan-500/30 hover:scale-110 transition-transform">
              <SiReact size={28} className="sm:size-36 text-cyan-400" />
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-green-600/10 rounded-xl flex items-center justify-center border border-green-500/30 hover:scale-110 transition-transform">
              <SiNodedotjs size={28} className="sm:size-36 text-green-500" />
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-teal-500/10 rounded-xl flex items-center justify-center border border-teal-500/30 hover:scale-110 transition-transform">
              <SiTailwindcss size={28} className="sm:size-36 text-teal-400" />
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gray-700/40 rounded-xl flex items-center justify-center border border-gray-500/40 hover:scale-110 transition-transform">
              <SiNextdotjs size={28} className="sm:size-36 text-gray-200" />
            </div>
            <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-pink-500/10 rounded-xl flex items-center justify-center border border-pink-500/30 hover:scale-110 transition-transform">
              <SiGraphql size={28} className="sm:size-36 text-pink-400" />
            </div>
          </div>

          <div className="mt-8 sm:mt-12 inline-flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-3.5 bg-gray-800/60 rounded-full border border-gray-700/60 text-gray-300 text-xs sm:text-sm md:text-base">
            <span className="text-yellow-400 text-base sm:text-lg">⚠️</span>
            <span>Aucun besoin de filtrer. Chaque cours vous guide du débutant à l'avancé, étape par étape.</span>
          </div>
        </div>

        {/* Section des formations – bien espacée */}
        <div className="mt-16 sm:mt-24 md:mt-32 mb-8 sm:mb-12 md:mb-16 px-4 sm:px-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight text-center sm:text-left">
            Nos Formations
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto sm:mx-0">
            Des parcours complets, concrets et orientés emploi — du niveau débutant jusqu’au niveau recherché en entreprise.
          </p>
        </div>

        {/* Grille des cartes – responsive et centrée sur mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 md:gap-8 px-4 sm:px-0">
          {courses.map((course) => (
            <CourseCard key={course.id} {...course} />

          ))}
        </div>

        {/* "VOICI TOUS LES COURS" en bas à gauche – responsive pour éviter overflow */}
        <div className="absolute bottom-6 sm:bottom-8 left-4 sm:left-6 md:left-10 overflow-hidden">
          <h2 className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-gray-800/40 select-none pointer-events-none whitespace-nowrap">
            VOICI TOUS LES COURS
          </h2>
        </div>
      </section>
      <Footer />
    </>
  );
}






