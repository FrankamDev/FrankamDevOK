import { useForm } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, X, Loader2 } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function NewsletterForm() {
  const [showPopup, setShowPopup] = useState(false);

  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    post('/newsletter/subscribe', {
      preserveScroll: true,
      onSuccess: () => {
        setShowPopup(true);
        reset();
        // Le popup disparaît automatiquement après 5 secondes
        setTimeout(() => setShowPopup(false), 5000);
      },
    });
  };

  return (
    <div className="relative w-full max-w-md">
      {/* FORMULAIRE */}
      <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3">
        <div className="flex-1 flex flex-col">
          <input
            type="email"
            value={data.email}
            onChange={(e) => setData('email', e.target.value)}
            placeholder="ton@email.com"
            required
            className={`w-full rounded-lg bg-white/5 border ${errors.email ? 'border-red-500' : 'border-white/10'
              } px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 transition`}
          />
          {errors.email && (
            <span className="text-red-400 text-xs mt-1 ml-1">{errors.email}</span>
          )}
        </div>

        <button
          type="submit"
          disabled={processing}
          className="rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-medium text-white hover:from-blue-500 hover:to-indigo-500 transition shadow-lg shadow-blue-900/30 disabled:opacity-50 flex items-center justify-center min-w-[120px]"
        >
          {processing ? <Loader2 className="w-4 h-4 animate-spin" /> : 'S’inscrire'}
        </button>
      </form>

      {/* POP-UP DE SUCCÈS (Toast) */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed bottom-10 right-1/2 translate-x-1/2 sm:right-10 sm:translate-x-0 z-[100] w-[90%] sm:w-auto"
          >
            <div className="bg-slate-900 border border-emerald-500/50 p-4 rounded-2xl shadow-2xl shadow-emerald-500/20 flex items-center gap-4">
              <div className="bg-emerald-500/20 p-2 rounded-full">
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm">Inscription réussie !</h3>
                <p className="text-gray-400 text-xs">Merci de rejoindre la newsletter.</p>
              </div>
              <button
                onClick={() => setShowPopup(false)}
                className="text-gray-500 hover:text-white transition"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}