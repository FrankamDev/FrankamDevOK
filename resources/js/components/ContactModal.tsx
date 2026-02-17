import { useForm } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, Send, CheckCircle, Loader2, X } from 'lucide-react';
import { useState, useEffect } from 'react';

// Props attendues par le composant modal
interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [sent, setSent] = useState(false); // État pour le message de succès

  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    message: '',
  });

  // Gère la fermeture de la modale avec la touche Échap
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Empêche le scroll du body quand la modale est ouverte
    } else {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset'; // Rétablit le scroll
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  // Réinitialise le formulaire quand la modale s'ouvre
  useEffect(() => {
    if (isOpen) {
      reset();
      setSent(false); // Cache le message de succès si la modale est rouverte
    }
  }, [isOpen, reset]);


  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/contact', {
      preserveScroll: true,
      onSuccess: () => {
        setSent(true);
        reset();

        // On laisse le temps d'apprécier le message de succès (3.5s)
        setTimeout(() => {
          onClose();
          // On attend la fin de l'animation de fermeture de la modale 
          // avant de remettre l'état 'sent' à false
          setTimeout(() => setSent(false), 500);
        }, 1500);
      },
    });
  };

  // Ne rien rendre si la modale n'est pas ouverte pour éviter les problèmes d'accessibilité
  if (!isOpen) return null;

  return (
    // <AnimatePresence>
    //   {isOpen && (
    //     <motion.div
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       exit={{ opacity: 0 }}
    //       className="fixed inset-0 z-[150] flex items-center justify-center p-4" // z-index très élevé pour être au-dessus de tout
    //     >
    //       {/* Overlay sombre semi-transparent */}
    //       <motion.div
    //         initial={{ opacity: 0 }}
    //         animate={{ opacity: 1 }}
    //         exit={{ opacity: 0 }}
    //         onClick={onClose} // Ferme la modale si on clique en dehors
    //         className="absolute inset-0 bg-black/70 backdrop-blur-sm"
    //       />

    //       {/* Contenu de la modale */}
    //       <motion.div
    //         initial={{ scale: 0.9, y: 50, opacity: 0 }}
    //         animate={{ scale: 1, y: 0, opacity: 1 }}
    //         exit={{ scale: 0.9, y: 50, opacity: 0 }}
    //         transition={{ type: "spring", damping: 20, stiffness: 300 }} // Animation printanière
    //         className="relative z-20 w-full max-w-lg bg-slate-900/95 border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
    //       >
    //         {/* Bouton de fermeture */}
    //         <button
    //           onClick={onClose}
    //           className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
    //         >
    //           <X size={24} />
    //         </button>

    //         {/* Titre de la modale */}
    //         <h3 className="text-3xl font-black text-white text-center mb-8 flex items-center justify-center gap-3">
    //           <Mail className="text-blue-400" size={32} /> Contactez-moi
    //         </h3>

    //         {/* Formulaire de contact */}
    //         <form onSubmit={submit} className="space-y-5">
    //           <div className="space-y-1.5">
    //             <label htmlFor="email" className="block text-sm font-medium text-gray-400">Votre Email</label>
    //             <input
    //               id="email"
    //               type="email"
    //               required
    //               value={data.email}
    //               onChange={e => setData('email', e.target.value)}
    //               className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition placeholder-gray-500"
    //               placeholder="frankamdev@exemple.com"
    //             />
    //             {errors.email && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-xs mt-1">{errors.email}</motion.p>}
    //           </div>

    //           <div className="space-y-1.5">
    //             <label htmlFor="message" className="block text-sm font-medium text-gray-400">Votre Message</label>
    //             <textarea
    //               id="message"
    //               required
    //               rows={5}
    //               value={data.message}
    //               onChange={e => setData('message', e.target.value)}
    //               className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition resize-none placeholder-gray-500"
    //               placeholder="Comment puis-je vous aider ?"
    //             />
    //             {errors.message && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-xs mt-1">{errors.message}</motion.p>}
    //           </div>

    //           <motion.button
    //             whileHover={{ scale: 1.01, boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)' }}
    //             whileTap={{ scale: 0.98 }}
    //             type="submit"
    //             disabled={processing}
    //             className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
    //           >
    //             {processing ? (
    //               <Loader2 className="animate-spin" size={20} />
    //             ) : (
    //               <>Envoyer le message <Send size={18} /></>
    //             )}
    //           </motion.button>
    //         </form>

    //         {/* Pop-up de succès intégré */}
    //         <AnimatePresence>
    //           {sent && (
    //             <motion.div
    //               initial={{ opacity: 0, scale: 0.9, y: 20 }}
    //               animate={{ opacity: 1, scale: 1, y: 0 }}
    //               exit={{ opacity: 0, scale: 0.9, y: 20 }}
    //               transition={{ type: "spring", damping: 20, stiffness: 300 }}
    //               className="absolute inset-0 bg-slate-900/95 rounded-3xl flex flex-col items-center justify-center text-center p-8 z-30 border border-emerald-500/50"
    //             >
    //               <motion.div
    //                 initial={{ scale: 0 }}
    //                 animate={{ scale: 1 }}
    //                 transition={{ delay: 0.2, type: "spring", damping: 15, stiffness: 400 }}
    //                 className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mb-4"
    //               >
    //                 <CheckCircle size={48} />
    //               </motion.div>
    //               <h3 className="text-3xl font-bold text-white mb-2">Message envoyé !</h3>
    //               <p className="text-gray-400 text-lg">Je vous répondrai dans les plus brefs délais.</p>
    //             </motion.div>
    //           )}
    //         </AnimatePresence>
    //       </motion.div>
    //     </motion.div>
    //   )}
    // </AnimatePresence>


    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[150] flex items-center justify-center p-4"
        >
          {/* Overlay sombre semi-transparent */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* Contenu de la modale */}
          <motion.div
            initial={{ scale: 0.9, y: 50, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="relative z-20 w-full max-w-lg bg-slate-900/95 border border-white/10 rounded-3xl p-8 shadow-2xl overflow-hidden"
          >
            {/* Bouton de fermeture */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition z-40"
            >
              <X size={24} />
            </button>

            {/* Titre de la modale */}
            <h3 className="text-3xl font-black text-white text-center mb-8 flex items-center justify-center gap-3">
              <Mail className="text-blue-400" size={32} /> Contactez-moi
            </h3>

            {/* Formulaire de contact */}
            <form onSubmit={submit} className="space-y-5">
              <div className="space-y-1.5">
                <label htmlFor="email" className="block text-sm font-medium text-gray-400">Votre Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={data.email}
                  onChange={e => setData('email', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition placeholder-gray-500"
                  placeholder="nom@exemple.com"
                />
                {errors.email && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-xs mt-1">{errors.email}</motion.p>}
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-sm font-medium text-gray-400">Votre Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={data.message}
                  onChange={e => setData('message', e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition resize-none placeholder-gray-500"
                  placeholder="Comment puis-je vous aider ?"
                />
                {errors.message && <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-400 text-xs mt-1">{errors.message}</motion.p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.01, boxShadow: '0 8px 25px rgba(59, 130, 246, 0.4)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={processing}
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {processing ? (
                  <Loader2 className="animate-spin" size={20} />
                ) : (
                  <>Envoyer le message <Send size={18} /></>
                )}
              </motion.button>
            </form>

            {/* Pop-up de succès intégré - VERSION AMÉLIORÉE */}
            <AnimatePresence>
              {sent && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-slate-900/98 rounded-3xl flex flex-col items-center justify-center text-center p-8 z-30"
                >
                  <div className="relative mb-6">
                    {/* Halo lumineux de fond */}
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-emerald-500/30 blur-3xl rounded-full"
                    />

                    {/* Icône animée */}
                    <motion.div
                      initial={{ scale: 0, rotate: -20 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.1 }}
                      className="relative bg-gradient-to-br from-emerald-400 to-teal-500 p-5 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.4)]"
                    >
                      <CheckCircle className="w-12 h-12 text-slate-950" strokeWidth={3} />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-3xl font-black text-white mb-2 tracking-tight">C'est envoyé !</h3>
                    <p className="text-emerald-400 font-medium mb-6">Message reçu avec succès.</p>

                    <div className="h-px w-12 bg-white/10 mx-auto mb-6" />

                    <p className="text-gray-400 text-sm leading-relaxed max-w-[260px] mx-auto">
                      Merci de votre confiance. Je reviens vers vous par email très rapidement.
                    </p>

                    {/* Micro-indicateur de chargement de fermeture */}
                    <div className="mt-8 flex justify-center gap-1.5">
                      {[0, 0.2, 0.4].map((delay, i) => (
                        <motion.div
                          key={i}
                          animate={{ opacity: [0.2, 1, 0.2] }}
                          transition={{ duration: 1, repeat: Infinity, delay }}
                          className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"
                        />
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}