import { usePage } from "@inertiajs/react";
import clsx from "clsx";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    name: "Frank Kamgang",
    role: "Développeur Frontend",
    image: "/avatar1.jpg",
    message:
      "FrankamDev m’a permis d’évoluer rapidement avec des projets concrets et une pédagogie claire.",
  },
  {
    name: "Soh Loic",
    role: "Développeur Backend",
    image: "/avatar2.jpg",
    message:
      "Grâce aux parcours structurés, j’ai décroché mon premier job en développement web.",
  },
  {
    name: "Designer 2.0",
    role: "UI/UX Designer",
    image: "/avatar3.jpg",
    message:
      "Les projets réels m’ont permis de bâtir un portfolio solide et décrocher un stage.",
  },
  {
    name: "Nguimfack Jean Yannick",
    role: "Developpeur FullStack",
    image: "/avatar4.jpg",
    message:
      "J’ai appris à créer des applications React Native modernes avec les meilleurs outils.",
  },
];

export default function Testimonial() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const { auth } = usePage().props;


  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-[#020013] via-[#0a001d] to-black text-white"> <div className="max-w-7xl mx-auto px-6 text-center mb-12"> <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
      Ce que disent nos apprenants </h2> <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
        Des centaines de développeurs et designers ont évolué grâce à FrankamDev. </p> </div>

      {/* Mobile → Scroll horizontal */}
      <div className="flex sm:hidden gap-6 overflow-x-auto px-6 snap-x snap-mandatory scrollbar-hide">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className="snap-center min-w-[85%] flex-shrink-0 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md transition-transform duration-500 hover:scale-105"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-md"
              />
              <div className="text-left">
                <h4 className="text-lg font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-300">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-200 italic mb-4">“{t.message}”</p>
            <div className="flex gap-1 text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop → Grid */}
      <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-6">
        {testimonials.map((t, idx) => (
          <div
            key={idx}
            className={clsx(
              "rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-md transition-all duration-500 hover:scale-105",
              hoverIndex !== null
                ? idx === hoverIndex
                  ? "z-20 scale-105 shadow-2xl"
                  : "opacity-70 scale-95"
                : "scale-100"
            )}
            onMouseEnter={() => setHoverIndex(idx)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={t.image}
                alt={t.name}
                className="h-14 w-14 rounded-full border-2 border-white object-cover shadow-md"
              />
              <div>
                <h4 className="text-lg font-semibold">{t.name}</h4>
                <p className="text-sm text-gray-300">{t.role}</p>
              </div>
            </div>
            <p className="text-gray-200 italic mb-4">“{t.message}”</p>
            <div className="flex gap-1 text-yellow-400">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <FaStar key={i} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>


  );
}
