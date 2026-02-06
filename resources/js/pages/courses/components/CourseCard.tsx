// src/components/CourseCard.tsx
import React from 'react';
import { FiClock, FiBookOpen, FiArrowRight } from 'react-icons/fi';

interface CourseCardProps {
  title: string;
  level: string;
  duration: string;
  lessons: number;
  image: string;
  tags: string[];
}

export default function CourseCard({
  title,
  level,
  duration,
  lessons,
  image,
  tags,
}: CourseCardProps) {
  return (
    <div className="group relative bg-[#011627bc] backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/20 flex flex-col h-full">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/30 to-transparent" />
      </div>

      {/* Contenu */}
      <div className="p-5 md:p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="mt-2 text-sm text-gray-400">{level}</p>

        {/* Infos + tags */}
        <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-400">
          <div className="flex items-center gap-1.5">
            <FiClock size={16} />
            <span>{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <FiBookOpen size={16} />
            <span>{lessons} leçons</span>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium bg-gray-800/70 text-gray-300 rounded-full border border-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Bouton / Call to action */}
        <div className="mt-auto pt-6">
          <button className="w-full flex items-center justify-center gap-2 py-3 px-5 bg-[#05081B] text-white font-medium rounded-xl transition-all duration-300 group-hover:scale-[1.02]">
            Voir le parcours
            <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}