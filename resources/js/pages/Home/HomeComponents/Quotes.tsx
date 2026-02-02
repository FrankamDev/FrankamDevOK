import './quotes.css';

// import React from "react";

// const Quotes = () => {
//   return (
//     <div className="relative bg-[#0b0b1e] text-center font-bold  text-slate-200 p-8 md:p-10 rounded-xl max-w-4xl mx-auto my-10 text-lg leading-relaxed">
//       <span className="absolute -top-6 left-3 text-8xl text-purple-300">“</span>
//       <p>
//         <span className="text-blue-400 font-semibold">Tous Les apprenants</span> rencontrent des blockages{" "}
//         <span className="text-yellow-400 font-semibold">en chemin</span>. Le genre que tu as envie de jeter ton laptop par la fenetre😂.{" "}
//         <span className="text-red-400 font-semibold">Tu n'es pas seul.</span>
//       </p>
//       <span className="absolute -bottom-18 right-3 text-8xl text-purple-300">”</span>
//     </div>
//   );
// };

// export default Quotes;

// import { motion } from "framer-motion";
// import React from "react";
// const quoteVariants = {
//   hidden: { opacity: 0, y: 30 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.9, ease: "easeOut" },
//   },
// };

// const Quotes = () => {
//   return (
//     <div className="quote-container">
//       <motion.div
//         className="quote-card"
//         data-quote='" "' // ← Pour les pseudo-éléments CSS (opening et closing)
//         variants={quoteVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         whileHover={{ scale: 1.02 }} // Hover subtil
//       >
//         {/* Contenu principal */}
//         <div className="quote-content">
//           <p>
//             <span className="quote-highlight text-indigo-400">
//               Tous les apprenants
//             </span>{" "}
//             rencontrent des blocages en chemin.{"\n"}
//             <span className="quote-highlight text-amber-400">
//               Le genre de moment où tu as envie de jeter ton laptop par la fenêtre
//             </span>
//             <span className="text-slate-400"> 😂</span>
//             {"\n"}
//             <span className="quote-highlight text-rose-400">
//               Tu n'es pas seul.
//             </span>
//           </p>
//         </div>

//         {/* Signature optionnelle */}
//         <div className="quote-signature">
//           <p>On est tous passés par là… et on en est tous sortis plus forts.</p>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default Quotes;


import { motion } from 'framer-motion'
import React from 'react'

const quoteVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: 'easeOut',
    },
  },
}

const QuoteMark = ({ position }: { position: 'top-left' | 'bottom-right' }) => (
  <motion.span
    className={`
      absolute font-serif select-none pointer-events-none
      text-[8rem] sm:text-[10rem] md:text-[12rem] lg:text-[14rem]
      leading-none text-indigo-500/20 dark:text-indigo-400/15
      ${position === 'top-left'
        ? '-top-8 sm:-top-10 md:-top-14 left-2 sm:left-4 md:left-6 lg:left-8'
        : '-bottom-12 sm:-bottom-16 md:-bottom-20 right-2 sm:right-4 md:right-6 lg:right-8'}
    `}
    initial={{ opacity: 0, scale: 0.7 }}
    animate={{ opacity: 0.3, scale: 1 }}
    transition={{ duration: 1.3, ease: 'easeOut', delay: 0.2 }}
  >
    {position === 'top-left' ? '“' : '”'}
  </motion.span>
)

export default function BlockQuote() {
  return (
    <div className="relative my-12 sm:my-16 md:my-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <motion.div
        className={`
          relative overflow-hidden
          bg-gradient-to-br from-slate-900/80 via-slate-950/70 to-indigo-950/30
          backdrop-blur-sm
          border border-slate-800/60
          rounded-2xl sm:rounded-3xl
          p-8 sm:p-10 md:p-12 lg:p-16
          shadow-xl shadow-black/40
          before:absolute before:inset-0 before:bg-gradient-to-br
          before:from-indigo-500/5 before:via-transparent before:to-purple-500/5
        `}
        variants={quoteVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {/* Les deux grandes guillemets visibles */}
        <QuoteMark position="top-left" />
        <QuoteMark position="bottom-right" />

        {/* Contenu texte */}
        <div className="relative z-10">
          <p className="
            text-lg sm:text-xl md:text-2xl lg:text-[1.65rem]
            leading-relaxed md:leading-relaxed lg:leading-[1.45]
            font-medium text-slate-100 text-center
            tracking-wide
          ">
            <span className="text-indigo-300 font-semibold">
              Tous les apprenants
            </span>{' '}
            rencontrent des blocages en chemin. Le genre de moment où tu as
            <span className="text-amber-300/90 font-semibold">
              {' '}envie de jeter ton laptop par la fenêtre
            </span>
            <span className="text-slate-400"> 😂</span>
            <br className="sm:hidden" />
            <span className="text-rose-400 font-semibold">
              {' '}Tu n’es vraiment pas seul.
            </span>
          </p>

          {/* Petite touche finale */}
          <div className="mt-8 pt-6 border-t border-slate-700/40 text-center">
            <p className="text-sm sm:text-base text-slate-400 font-light italic">
              On est tous passés par là… et on en est tous sortis plus forts.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}