// import { Link } from '@inertiajs/react';

// import {
//   FaEnvelope,
//   FaGithub,
//   FaInstagram,
//   FaLinkedin,
//   FaXTwitter,
//   FaYoutube,
// } from 'react-icons/fa6';

// export default function Footer() {
//   return (
//     <footer className="bottom-0 w-full bg-[#090c1d] px-6 py-6 text-white">
//       <div className=" mx-auto flex max-w-7xl flex-col items-center gap-y-6 md:flex-row md:items-center md:justify-between md:gap-4">
//         <div className="text-center text-sm text-gray-400 md:text-left">
//           © Copyright {new Date().getFullYear()} FrankamDev Pro
//         </div>

//         <div className="flex flex-wrap justify-center gap-5 text-xl text-gray-300">
//           <Link href="#" className="transition hover:text-white">
//             <FaInstagram />
//           </Link>
//           <Link
//             prefetch
//             href="#"
//             target="_blank"
//             className="transition hover:text-white"
//           >
//             <FaXTwitter />
//           </Link>
//           <Link
//             prefetch
//             href="#"
//             target="_blank"
//             className="transition hover:text-white"
//           >
//             <FaEnvelope />
//           </Link>
//           <Link
//             prefetch
//             href="#"
//             target="_blank"
//             className="transition hover:text-white"
//           >
//             <FaLinkedin />
//           </Link>
//           <Link
//             prefetch
//             href="#"
//             target="_blank"
//             className="transition hover:text-white"
//           >
//             <FaGithub />
//           </Link>
//           <Link
//             prefetch
//             href="#"
//             target="_blank"
//             className="transition hover:text-white"
//           >
//             <FaYoutube />
//           </Link>
//         </div>

//         {/* Liens */}
//         <div className="flex flex-col items-center gap-3 text-sm text-gray-400 md:flex-row md:gap-6">
//           <Link
//             prefetch
//             href="/blog"
//             target="_blank"
//             className="transition hover:text-white"
//           >
//             Blog
//           </Link>
//           <Link
//             prefetch
//             href="/terme"
//             target="_blank"
//             className="transition hover:text-white"
//           >
//             Termes du Service
//           </Link>
//           <button className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-white/20">
//             🚨 FrankamDev Evolutions
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// }



import { Link } from '@inertiajs/react';
import { motion } from 'framer-motion';
import {
  FaEnvelope,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
  FaHeart,
  FaArrowUp,
} from 'react-icons/fa6';
import NewsletterForm from './NewsletterForm';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-[#011627bc] text-gray-300">
      {/* Fond décoratif subtil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.06),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 lg:gap-16">
          {/* Colonne 1 – Brand + description */}
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold text-white mb-4">
              FrankamDev <span className="text-blue-400">Pro</span>
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Apprendre à coder efficacement, sans se perdre, avec des explications claires et une progression logique.
            </p>

            {/* Newsletter simple */}
            <div className="mt-6">
              <p className="text-sm text-gray-400 mb-3">Restez informé des nouvelles formations</p>
              {/* <form className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  placeholder="ton@email.com"
                  className="flex-1 rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition"
                />
                <button
                  type="submit"
                  className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white hover:from-blue-500 hover:to-indigo-500 transition shadow-lg shadow-blue-900/30"
                >
                  S’inscrire
                </button>
              </form> */}
              <NewsletterForm />
            </div>
          </div>

          {/* Colonne 2 – Liens rapides */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-5">Liens rapides</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/cours" className="hover:text-blue-400 transition">
                  Tous les cours
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-blue-400 transition">
                  Blog & Articles
                </Link>
              </li>
              <li>
                <Link href="/projets" className="hover:text-blue-400 transition">
                  Projets réalisés
                </Link>
              </li>
              <li>
                <Link href="/ressources" className="hover:text-blue-400 transition">
                  Ressources gratuites
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 – À propos */}
          <div className="md:col-span-2">
            <h4 className="text-lg font-semibold text-white mb-5">À propos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/a-propos" className="hover:text-blue-400 transition">
                  Qui suis-je ?
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400 transition">
                  Me contacter
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-blue-400 transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/termes" className="hover:text-blue-400 transition">
                  Conditions d’utilisation
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4 – Réseaux sociaux */}
          <div className="md:col-span-4">
            <h4 className="text-lg font-semibold text-white mb-5">Suivez-moi</h4>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: FaGithub, href: '#', color: 'hover:text-gray-100' },
                { icon: FaLinkedin, href: '#', color: 'hover:text-blue-400' },
                { icon: FaXTwitter, href: '#', color: 'hover:text-sky-400' },
                { icon: FaInstagram, href: '#', color: 'hover:text-pink-400' },
                { icon: FaYoutube, href: '#', color: 'hover:text-red-500' },
                { icon: FaEnvelope, href: 'mailto:contact@frankamdev.com', color: 'hover:text-emerald-400' },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-2xl transition-colors ${item.color}`}
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <item.icon />
                </motion.a>
              ))}

            </div>

            {/* Bouton spécial */}
            <motion.button
              className="mt-8 flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/30 px-6 py-3 text-sm font-medium text-indigo-300 hover:bg-indigo-900/40 hover:text-indigo-200 transition shadow-lg shadow-indigo-900/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>🚀 FrankamDev Evolutions</span>
            </motion.button>
          </div>
        </div>

        {/* Barre inférieure */}
        <div className="mt-4 pt-8 border-t border-white/5 flex flex-col md:flex-row md:items-center md:justify-between gap-6 text-sm text-gray-500">
          <div>
            © {currentYear} FrankamDev – Tous droits réservés.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/confidentialite" className="hover:text-gray-300 transition">
              Politique de confidentialité
            </Link>
            <span className="flex items-center gap-1.5">
              Fait avec <FaHeart className="text-red-500 text-xs" /> par FrankamDev
            </span>
          </div>

          {/* Bouton retour en haut */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition"
            whileHover={{ scale: 1.1 }}
          >
            <FaArrowUp className="text-lg" />
            <span>Haut de page</span>
          </motion.button>
        </div>
      </div>
    </footer>
  );
}