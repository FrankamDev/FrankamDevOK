'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const quotes = [
  {
    text: "Le code est comme l'humour. Quand il faut l'expliquer, c'est raté.",
    author: "Cory House"
  },
  {
    text: "D'abord, résous le problème. Ensuite, écris le code.",
    author: "John Johnson"
  },
  {
    text: "Un bon développeur n'écrit pas du code. Il crée de la magie.",
    author: "FrankamDev"
  },
  {
    text: "Le meilleur code propre est un acte d'amour envers ton futur toi.",
    author: "Uncle Bob"
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler"
  },
  {
    text: "La programmation, c'est 10% d'écriture de code et 90% de compréhension de pourquoi ça ne marche pas.",
    author: "Anonyme"
  },
  {
    text: "Je ne rate jamais. Soit je réussis, soit j'apprends.",
    author: "Nelson Mandela"
  },
  {
    text: "Le futur appartient à ceux qui codent à 3h du matin.",
    author: "Un dev fatigué mais heureux"
  }
];

export default function DynamicQuote() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % quotes.length);
    }, 6000); // Change toutes les 6 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-24 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="absolute inset-0 flex flex-col"
        >
          {/* Citation */}
          <motion.p
            className="text-lg font-medium text-cyan-300 italic leading-relaxed"
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            “{quotes[index].text}”
          </motion.p>

          {/* Auteur avec effet néon qui pulse */}
          <motion.p
            className="mt-3 text-sm text-zinc-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            —{' '}
            <span className="text-cyan-400 font-medium relative">
              {quotes[index].author}
              <motion.span
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -inset-1 bg-gradient-to-r from-cyan-500 css via-teal-500 to-cyan-500 opacity-30 blur-lg -z-10"

              />
            </span>
          </motion.p>

          {/* Petits points indicateurs stylés */}
          <div className="flex gap-1.5 mt-4">
            {quotes.map((_, i) => (
              <motion.div
                key={i}
                className="h-1 w-8 rounded-full bg-white/10"
                animate={{
                  scale: i === index ? 1.4 : 1,
                  backgroundColor: i === index ? "rgba(52,211,153,0.6)" : "rgba(255,255,255,0.1)",
                }}
                transition={{ duration: 0.5 }}
              />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Effet de glow subtil en fond */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-32 w-96 bg-cyan-500/5 blur-3xl rounded-full" />
      </div>
    </div>
  );
}
