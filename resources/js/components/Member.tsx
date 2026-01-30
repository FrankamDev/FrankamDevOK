// import { motion } from 'framer-motion';
// import { FaBrain, FaBriefcase, FaComments, FaRoute } from 'react-icons/fa';

// const features = [
//     {
//         title: 'Apprendre pourquoi, pas juste coder',
//         icon: (
//             <FaBrain className="text-4xl text-green-400 transition-transform group-hover:scale-110" />
//         ),
//         glow: 'shadow-green-400',
//     },
//     {
//         title: 'Feuille de route structurée pour une architecture Full Stack dès le premier jour',
//         icon: (
//             <FaRoute className="text-4xl text-blue-400 transition-transform group-hover:scale-110" />
//         ),
//         glow: 'shadow-blue-400',
//     },
//     {
//         title: 'Obtenir un retour des developpeur experimentes',
//         icon: (
//             <FaComments className="text-4xl text-purple-400 transition-transform group-hover:scale-110" />
//         ),
//         glow: 'shadow-purple-400',
//     },
//     {
//         title: 'Un portfolio de projets qui vous permettra de décrocher un emploi',
//         icon: (
//             <FaBriefcase className="text-4xl text-pink-400 transition-transform group-hover:scale-110" />
//         ),
//         glow: 'shadow-pink-400',
//     },
// ];

// export default function Member() {
//     return (
//         <div className="-mx-32 grid grid-cols-1 gap-6 bg-[#0F1033] px-4 py-10 text-white sm:grid-cols-3 md:mx-0 md:px-32">
//             {/* Left column */}
//             <div className="flex flex-col gap-6">
//                 {features.slice(0, 2).map((f, i) => (
//                     <div
//                         key={i}
//                         className={`group rounded-xl border border-slate-800 bg-[#0f172a] p-6 text-center shadow-lg transition-transform hover:scale-[1.02] ${f.glow}`}
//                     >
//                         <div className="mb-4">{f.icon}</div>
//                         <h3 className="font-semibold">{f.title}</h3>
//                     </div>
//                 ))}
//             </div>

//             {/* Center card */}
//             <motion.div
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 whileInView={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-800 bg-[#0f172a] p-8 text-center shadow-2xl"
//             >
//                 <img
//                     src="./bannerr.jpg"
//                     alt="Logo"
//                     className="mb-4 w-16 rounded-full"
//                 />
//                 <h2 className="mb-2 text-xl font-bold">
//                     FrankamDev Cercle Pro
//                 </h2>
//                 <p className="text-sm text-gray-400">
//                     Accède à tous les cours, les parcours professionnels, et
//                     tout ce dont tu as besoin pour progresser.
//                 </p>
//                 <div className="absolute bottom-2 animate-bounce text-2xl text-blue-500">
//                     ↓
//                 </div>
//             </motion.div>

//             {/* Right column */}
//             <div className="flex flex-col gap-6">
//                 {features.slice(2).map((f, i) => (
//                     <div
//                         key={i}
//                         className={`group rounded-xl border border-slate-800 bg-[#0f172a] p-6 text-center shadow-lg transition-transform hover:scale-[1.02] ${f.glow}`}
//                     >
//                         <div className="mb-4">{f.icon}</div>
//                         <h3 className="font-semibold">{f.title}</h3>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }



// components/Member.tsx

import { motion, AnimatePresence } from 'framer-motion';
import { FaBrain, FaBriefcase, FaComments, FaRoute } from 'react-icons/fa';

const features = [
  {
    title: 'Apprendre pourquoi, pas juste coder',
    icon: <FaBrain className="text-4xl text-emerald-400" />,
    glow: 'shadow-emerald-400/50',
  },
  {
    title: 'Feuille de route Full Stack dès le premier jour',
    icon: <FaRoute className="text-4xl text-cyan-400" />,
    glow: 'shadow-cyan-400/50',
  },
  {
    title: 'Feedback direct de devs expérimentés',
    icon: <FaComments className="text-4xl text-purple-400" />,
    glow: 'shadow-purple-400/50',
  },
  {
    title: 'Portfolio pro qui décroche des jobs',
    icon: <FaBriefcase className="text-4xl text-pink-400" />,
    glow: 'shadow-pink-400/50',
  },
];

export default function Member() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#0a0e1a] to-[#0d1125] py-20 px-6">

      <div className="absolute inset-0 opacity-30">

        <motion.div
          animate={{
            x: [-200, 200, -200],
            y: [-100, 150, -100],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute top-10 left-10 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            x: [200, -200, 200],
            y: [100, -150, 100],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-teal-500/20 blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-gradient-conic from-emerald-600/10 via-transparent to-purple-600/10 blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-16"
        >
          Pourquoi FrankamDev change tout
        </motion.h2>

        {/* Grille responsive parfaite */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Colonne gauche */}
          <div className="flex flex-col gap-8">
            {features.slice(0, 2).map((f, i) => (
              <FeatureCard key={i} {...f} delay={i * 0.2} />
            ))}
          </div>

          {/* Carte centrale – LA STAR */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl blur-xl opacity-60 group-hover:opacity-90 transition duration-1000" />

            <div className="relative h-full rounded-3xl bg-gradient-to-br from-[#0f1429]/90 to-[#0a0e1f]/90 backdrop-blur-2xl border border-white/10 p-10 text-center shadow-2xl flex flex-col items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="mb-6"
              >
                <img
                  src="/banner.jpg"
                  alt="FrankamDev"
                  className="w-24 h-24 rounded-full border-4 border-emerald-500/50 shadow-2xl"
                />
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                FrankamDev Cercle Pro
              </h3>
              <p className="text-gray-300 text-sm md:text-base max-w-xs mx-auto leading-relaxed">
                Accès illimité à tous les cours, parcours pros, mentoring live et communauté privée.
              </p>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="mt-8 text-3xl text-emerald-400"
              >
                ⬇️
              </motion.div>
            </div>
          </motion.div>


          <div className="flex flex-col gap-8">
            {features.slice(2).map((f, i) => (
              <FeatureCard key={i + 2} {...f} delay={(i + 2) * 0.2} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function FeatureCard({ title, icon, glow, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.7 }}
      whileHover={{ scale: 1.05, y: -8 }}
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#0f1429]/80 to-[#0a0e1f]/80 backdrop-blur-xl border border-white/10 p-8 text-center shadow-xl transition-all duration-500"
    >

      <div className={`absolute inset-0 ${glow} blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-700`} />

      <div className="relative z-10">
        <motion.div
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="mb-6 inline-block"
        >
          {icon}
        </motion.div>
        <h3 className="text-lg font-bold text-white leading-snug">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}