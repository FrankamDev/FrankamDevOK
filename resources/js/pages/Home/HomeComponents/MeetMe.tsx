import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 25 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

const MeetMe = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0d0c1d] to-[#0f0f25] px-5 py-16 md:px-8 lg:px-12 lg:py-24 text-white overflow-hidden">
      {/* Fond subtil */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.08),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.06),transparent_50%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Titre principal */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Salut, moi c’est <span className="text-blue-400">Frank</span> 👋
          </h2>
          <p className="mt-5 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ton compagnon de route pour apprendre à coder sans te prendre la tête, et avancer vraiment.
          </p>
        </motion.div>

        {/* Grille principale */}
        <div className="grid gap-6 sm:gap-8 lg:gap-10 md:grid-cols-12">
          {/* Colonne de gauche – Stats + photo */}
          <div className="md:col-span-5 lg:col-span-4 space-y-6 lg:space-y-8">
            {/* Carte photo principale */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeIn}
              className="rounded-2xl overflow-hidden shadow-2xl shadow-black/40 border border-white/5 relative group"
            >
              <img
                src="./img.jpg" // ← Mets ta vraie photo ici
                alt="Frank - ton formateur"
                className="w-full h-[380px] md:h-[420px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xl md:text-2xl font-bold">Frank</p>
                <p className="text-blue-300/90 text-sm md:text-base mt-1">Ton coach dev full-time</p>
              </div>
            </motion.div>

            {/* Petite carte stats */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeIn}
              className="bg-[#1a1a2e]/80 backdrop-blur-sm border border-white/5 rounded-2xl p-6 text-center"
            >
              <div className="flex justify-center gap-8 text-2xl mb-4">
                <span>❤️</span>
                <span>🚀</span>
                <span>💻</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">
                +10 développeurs accompagnés
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Des débutants devenus pros, des reconversions réussies, des jobs décrochés.
              </p>
            </motion.div>
          </div>

          {/* Colonne centrale et droite – Highlights */}
          <div className="md:col-span-7 lg:col-span-8 space-y-6 lg:space-y-8">
            {/* Highlight 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
              variants={fadeIn}
              className="bg-gradient-to-br from-[#1a1a2e] to-[#141426] border border-white/5 rounded-2xl p-7 md:p-8 flex items-start gap-5"
            >
              <div className="text-4xl md:text-5xl shrink-0">⭐</div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                  3× GitHub Star
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Parmi des milliers de développeurs, seulement une poignée reçoit cette reconnaissance. C’est un vrai moteur pour continuer à partager.
                </p>
              </div>
            </motion.div>

            {/* Highlight 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={4}
              variants={fadeIn}
              className="bg-gradient-to-br from-[#1a1a2e] to-[#141426] border border-white/5 rounded-2xl p-7 md:p-8 flex items-start gap-5"
            >
              <div className="text-4xl md:text-5xl shrink-0">🎤</div>
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">
                  Intervenant GitNation & conférences
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  J’aime partager ce que j’ai appris sur les plus grandes scènes tech. Et surtout : rendre les choses compréhensibles pour tout le monde.
                </p>
              </div>
            </motion.div>

            {/* Petite carte motivation */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={5}
              variants={fadeIn}
              className="bg-gradient-to-r from-indigo-950/40 to-purple-950/30 border border-indigo-500/20 rounded-2xl p-7 md:p-9 text-center italic text-lg md:text-xl leading-relaxed text-gray-200"
            >
              <p>
                « Je suis passé par tous les galères que tu vis aujourd’hui.<br />
                Et je sais exactement ce qui fait vraiment avancer. »
              </p>
              <p className="mt-4 text-blue-400 font-medium not-italic">
                — Frank
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetMe;