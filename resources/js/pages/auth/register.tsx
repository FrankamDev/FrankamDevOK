import { Head, Link, useForm } from '@inertiajs/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, EyeOff, Upload, X } from 'lucide-react';
import type { FormEvent } from 'react';
import { useState, useEffect } from 'react';
import DynamicQuote from '@/components/DynamicQuote';

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);

  const { data, setData, post, processing, errors, reset, setError, clearErrors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    avatar: null as File | null,
  });

  // Gérer l'aperçu de la photo (Logique déplacée dans les handlers pour éviter setState dans useEffect)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setData('avatar', file);

    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    } else {
      setPreview(null);
    }
  };

  const removePhoto = () => {
    setData('avatar', null);
    setPreview(null);
    const input = document.getElementById('avatar') as HTMLInputElement;
    if (input) input.value = '';
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    clearErrors();

    // Validation rapide côté client (optionnel, mais propre)
    if (data.password !== data.password_confirmation) {
      setError('password_confirmation', 'Les mots de passe ne correspondent pas');
      return;
    }

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('password_confirmation', data.password_confirmation);
    if (data.avatar) {
      formData.append('avatar', data.avatar);
    }

    post('/register', {
      data: formData,
      forceFormData: true,
      onFinish: () => {
        reset('password', 'password_confirmation');
        setData('avatar', null);
      },
    });
  };

  return (
    <>
      <Head title="Inscription - FrankamDev" />

      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E1126] via-[#020013] to-[#0E1126] p-6">

        {/* Orbes animés */}
        <motion.div
          animate={{ x: [-200, 200, -200], y: [-100, 100, -100] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          className="absolute rounded-full -top-40 -left-40 h-96 w-96 bg-cyan-500/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [200, -200, 200], y: [100, -100, 100] }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          className="absolute rounded-full -right-40 -bottom-40 h-96 w-96 bg-teal-600/10 blur-3xl"
        />

        <div className="grid w-full max-w-6xl gap-0 overflow-hidden border shadow-2xl rounded-3xl border-white/5 md:grid-cols-2">

          {/* GAUCHE – Logo 3D */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0E1126]/80 to-[#020013]/90 p-16 backdrop-blur-xl md:flex"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg shadow-lg bg-gradient-to-br from-cyan-400 to-teal-600 shadow-cyan-500/20" />
              <span className="text-2xl font-bold text-white">FrankamDev</span>
            </div>

            <div className="relative perspective-1000 h-80">
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className="text-5xl font-black text-cyan-400"
                  style={{
                    textShadow: `
                                            0 0 20px rgba(52,211,153,0.3),
                                            8px 8px 0 rgba(0,0,0,0.2),
                                            -8px -8px 0 rgba(255,255,255,0.1),
                                            0 20px 40px rgba(0,0,0,0.4)
                                        `,
                    filter: 'drop-shadow(0 0 30px rgba(52,211,153,0.4))',
                  }}
                >
                  FrankamDev
                </div>
              </motion.div>
            </div>

            {/* <div>
                            <p className="text-sm italic text-zinc-400">
                                “Simplicity is an acquired taste.”
                            </p>
                            <p className="mt-1 text-xs text-zinc-500">Katharine Gerould</p>
                        </div> */}

            <DynamicQuote />
          </motion.div>

          {/* DROITE – Formulaire */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center border-l border-white/5 bg-[#020013]/95 p-10 backdrop-blur-2xl md:p-16"
          >
            <div className="flex items-center gap-3 mb-8 md:hidden">
              <div className="w-8 h-8 rounded-lg shadow-lg bg-gradient-to-br from-cyan-400 to-teal-600 shadow-cyan-500/20" />
              <span className="text-5xl font-bold text-white">FrankamDev</span>
            </div>

            <h2 className="flex items-center gap-2 mb-6 text-sm font-medium text-cyan-400">
              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-teal-600 opacity-70 blur-sm" />
              Créez votre compte :
            </h2>

            {/* OAuth */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="button"
                className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white transition border rounded-xl border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 6.75c1.63 0 3.06.56 4.21 1.65l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Google
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} type="button"
                className="flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white transition border rounded-xl border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </motion.button>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-[#020013] px-2 text-zinc-500">OU INSCRIVEZ-VOUS AVEC EMAIL</span>
              </div>
            </div>

            <form onSubmit={submit} className="space-y-6">

              {/* Nom */}
              <div>
                <label className="block mb-2 text-sm font-medium text-zinc-300">Nom complet</label>
                <input
                  type="text"
                  value={data.name}
                  onChange={e => setData('name', e.target.value)}
                  required
                  autoFocus
                  className={`w-full border bg-white/5 px-4 py-3 rounded-xl text-white placeholder-zinc-500 backdrop-blur-sm transition focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none ${errors.name ? 'border-red-500/50' : 'border-white/10'}`}
                  placeholder="Frank Kamgang"
                />
                <AnimatePresence>
                  {errors.name && (
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-xs text-red-400">
                      {errors.name}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Email */}
              <div>
                <label className="block mb-2 text-sm font-medium text-zinc-300">Email</label>
                <input
                  type="email"
                  value={data.email}
                  onChange={e => setData('email', e.target.value)}
                  required
                  className={`w-full border bg-white/5 px-4 py-3 rounded-xl text-white placeholder-zinc-500 backdrop-blur-sm transition focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none ${errors.email ? 'border-red-500/50' : 'border-white/10'}`}
                  placeholder="frankamdev@gmail.com"
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-xs text-red-400">
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>


              <div>
                <label className="block mb-2 text-sm font-medium text-zinc-300">Mot de passe</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={data.password}
                    onChange={e => setData('password', e.target.value)}
                    required
                    className={`w-full border bg-white/5 px-4 py-3 pr-12 rounded-[12px] text-white backdrop-blur-sm transition focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none ${errors.password ? 'border-red-500/50' : 'border-white/10'}`}
                    placeholder="6 caractères minimum"
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    className="absolute -translate-y-1/2 top-1/2 right-3 text-zinc-400 hover:text-cyan-400">
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <AnimatePresence>
                  {errors.password && (
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-xs text-red-400">
                      {errors.password}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Confirmation */}
              <div>
                <label className="block mb-2 text-sm font-medium text-zinc-300">Confirmer le mot de passe</label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={data.password_confirmation}
                    onChange={e => setData('password_confirmation', e.target.value)}
                    required
                    className={`w-full border bg-white/5 px-4 py-3 pr-12 rounded-[12px] text-white backdrop-blur-sm transition focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 focus:outline-none ${errors.password_confirmation ? 'border-red-500/50' : 'border-white/10'}`}
                  />
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute -translate-y-1/2 top-1/2 right-3 text-zinc-400 hover:text-cyan-400">
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
                <AnimatePresence>
                  {errors.password_confirmation && (
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mt-1 text-xs text-red-400">
                      {errors.password_confirmation}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Photo de profil */}
              <div>
                <label className="block mb-2 text-sm font-medium text-zinc-300">Photo de profil (optionnel)</label>
                <input id="avatar" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                <motion.label
                  htmlFor="avatar"
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center justify-center w-full gap-2 px-4 py-3 text-sm text-white transition border cursor-pointer rounded-[12px] border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50"
                >
                  <Upload size={18} />
                  Choisir une photo
                </motion.label>
              </div>

              {/* Aperçu photo */}
              {preview && (
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-4 p-3 border rounded-[12px] border-white/10 bg-white/5">
                  <img src={preview} alt="Aperçu" className="object-cover w-20 h-20 border-2 rounded-full border-cyan-500/50" />
                  <button type="button" onClick={removePhoto}
                    className="flex items-center gap-1 px-3 py-1 text-xs text-red-400 transition rounded-lg bg-red-500/20 hover:bg-red-500/30">
                    <X size={14} /> Supprimer
                  </button>
                </motion.div>
              )}

              {/* Bouton */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={processing}
                className="flex items-center justify-center w-full gap-3 py-4 font-bold text-white transition-all shadow-lg rounded-[12px] bg-gradient-to-r from-cyan-500 to-teal-600 shadow-cyan-500/20 hover:shadow-cyan-500/30 disabled:opacity-50"
              >
                {processing ? 'Création en cours...' : 'Créer le compte'}
              </motion.button>
            </form>

            <div className="mt-8 text-xs text-center text-zinc-500">
              Déjà un compte ?{' '}
              <Link
                prefetch
                href="/login" className="font-medium text-cyan-400 hover:text-cyan-300">
                Connectez-vous
              </Link>
            </div>

            <div className="mt-8 text-xs text-center text-zinc-600">
              © 2026 frankamdev.getomiie.com. Tous droits réservés.
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}












// import { Head, Link, useForm } from '@inertiajs/react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Camera, Eye, EyeOff, Trash2, Upload, X } from 'lucide-react';
// import type { FormEvent } from 'react';
// import { useState } from 'react';
// import DynamicQuote from '@/components/DynamicQuote';

// export default function Register() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [preview, setPreview] = useState<string | null>(null);
//   const [dragActive, setDragActive] = useState(false);

//   // Pour déclencher manuellement le sélecteur de fichier
//   const triggerFileInput = () => {
//     fileInputRef.current?.click();
//   };
//   const { data, setData, post, processing, errors, reset, setError, clearErrors } = useForm({
//     name: '',
//     email: '',
//     password: '',
//     password_confirmation: '',
//     avatar: null as File | null,
//   });

//   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0] || null;
//     setData('avatar', file);

//     if (file) {
//       const url = URL.createObjectURL(file);
//       setPreview(url);
//     } else {
//       setPreview(null);
//     }
//   };

//   const removePhoto = () => {
//     setData('avatar', null);
//     setPreview(null);
//     const input = document.getElementById('avatar') as HTMLInputElement;
//     if (input) input.value = '';
//   };

//   const submit = (e: FormEvent) => {
//     e.preventDefault();
//     clearErrors();

//     if (data.password !== data.password_confirmation) {
//       setError('password_confirmation', 'Les mots de passe ne correspondent pas');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('name', data.name);
//     formData.append('email', data.email);
//     formData.append('password', data.password);
//     formData.append('password_confirmation', data.password_confirmation);
//     if (data.avatar) {
//       formData.append('avatar', data.avatar);
//     }

//     post('/register', {
//       data: formData,
//       forceFormData: true,
//       onFinish: () => {
//         reset('password', 'password_confirmation');
//         setData('avatar', null);
//       },
//     });
//   };

//   return (
//     <>
//       <Head title="Inscription - FrankamDev" />

//       <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E1126] via-[#020013] to-[#0E1126] px-4 py-8 sm:p-6">

//         {/* Orbes animés – réduits et moins intrusifs sur mobile */}
//         <motion.div
//           animate={{ x: [-100, 100, -100], y: [-50, 50, -50] }}
//           transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
//           className="absolute rounded-full -top-20 -left-20 h-64 w-64 sm:h-96 sm:w-96 bg-cyan-500/8 blur-3xl sm:blur-3xl"
//         />
//         <motion.div
//           animate={{ x: [100, -100, 100], y: [50, -50, 50] }}
//           transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
//           className="absolute rounded-full -right-20 -bottom-20 h-64 w-64 sm:h-96 sm:w-96 bg-teal-600/8 blur-3xl sm:blur-3xl"
//         />

//         {/* Conteneur principal – responsive */}
//         <div className="w-full max-w-md sm:max-w-6xl overflow-hidden rounded-2xl sm:rounded-3xl border border-white/5 shadow-2xl bg-[#020013]/80 backdrop-blur-xl">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

//             {/* Partie gauche – Logo (cachée sur mobile) */}
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="relative hidden md:flex flex-col justify-between p-10 lg:p-16 bg-gradient-to-br from-[#0E1126]/90 to-[#020013]/95 backdrop-blur-xl"
//             >
//               <div className="flex items-center gap-3">
//                 <div className="w-10 h-10 rounded-lg shadow-lg bg-gradient-to-br from-cyan-400 to-teal-600 shadow-cyan-500/20" />
//                 <span className="text-2xl font-bold text-white">FrankamDev</span>
//               </div>

//               <div className="relative h-64 lg:h-80 flex items-center justify-center">
//                 <motion.div
//                   animate={{ rotateY: 360 }}
//                   transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
//                   className="text-5xl lg:text-6xl font-black text-cyan-400"
//                   style={{
//                     textShadow: '0 0 20px rgba(52,211,153,0.3), 0 20px 40px rgba(0,0,0,0.4)',
//                     filter: 'drop-shadow(0 0 30px rgba(52,211,153,0.4))',
//                   }}
//                 >
//                   FrankamDev
//                 </motion.div>
//               </div>

//               <DynamicQuote />
//             </motion.div>

//             {/* Partie droite – Formulaire */}
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               className="flex flex-col justify-center p-6 sm:p-10 lg:p-16 bg-[#020013]/95 backdrop-blur-2xl"
//             >
//               {/* Logo mobile */}
//               <div className="flex items-center justify-center gap-3 mb-8 md:hidden">
//                 <div className="w-9 h-9 rounded-lg shadow-lg bg-gradient-to-br from-cyan-400 to-teal-600 shadow-cyan-500/20" />
//                 <span className="text-3xl sm:text-4xl font-bold text-white">FrankamDev</span>
//               </div>

//               <h2 className="flex items-center justify-center gap-2 mb-8 text-base sm:text-lg font-medium text-cyan-400">
//                 <div className="w-5 h-5 rounded-full bg-gradient-to-br from-cyan-400 to-teal-600 opacity-70 blur-sm" />
//                 Créez votre compte
//               </h2>

//               {/* OAuth buttons – 2 colonnes sur mobile */}
//               <div className="grid grid-cols-2 gap-3 mb-8">
//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   type="button"
//                   className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium text-white border rounded-xl border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/40 transition"
//                 >
//                   <svg className="w-5 h-5" viewBox="0 0 24 24">
//                     <path
//                       fill="#4285F4"
//                       d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                     />
//                     <path
//                       fill="#34A853"
//                       d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
//                     <path
//                       fill="#FBBC05"
//                       d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                     />
//                     <path
//                       fill="#EA4335"
//                       d="M12 6.75c1.63 0 3.06.56 4.21 1.65l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                     />
//                   </svg>
//                   Google
//                 </motion.button>
//                 <motion.button
//                   whileHover={{ scale: 1.03 }}
//                   whileTap={{ scale: 0.97 }}
//                   type="button"
//                   className="flex items-center justify-center gap-2 py-3 px-4 text-sm font-medium text-white border rounded-xl border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/40 transition"
//                 >



//                   <svg
//                     className="w-5 h-5"
//                     fill="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                   </svg>



//                   GitHub
//                 </motion.button>
//               </div>

//               <div className="relative mb-8">
//                 <div className="absolute inset-0 flex items-center">
//                   <div className="w-full border-t border-white/10" />
//                 </div>
//                 <div className="relative flex justify-center text-xs">
//                   <span className="bg-[#020013] px-4 text-zinc-500">OU INSCRIVEZ-VOUS AVEC EMAIL</span>
//                 </div>
//               </div>

//               <form onSubmit={submit} className="space-y-5 sm:space-y-6">
//                 {/* Nom */}
//                 <div>
//                   <label className="block mb-1.5 text-sm font-medium text-zinc-300">Nom complet</label>
//                   <input
//                     type="text"
//                     value={data.name}
//                     onChange={e => setData('name', e.target.value)}
//                     required
//                     autoFocus
//                     className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-zinc-500 backdrop-blur-sm transition focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 outline-none ${errors.name ? 'border-red-500/50' : 'border-white/10'}`}
//                     placeholder="Frank Kamgang"
//                   />
//                   {errors.name && (
//                     <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>
//                   )}
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="block mb-1.5 text-sm font-medium text-zinc-300">Email</label>
//                   <input
//                     type="email"
//                     value={data.email}
//                     onChange={e => setData('email', e.target.value)}
//                     required
//                     className={`w-full px-4 py-3 rounded-xl bg-white/5 border text-white placeholder-zinc-500 backdrop-blur-sm transition focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 outline-none ${errors.email ? 'border-red-500/50' : 'border-white/10'}`}
//                     placeholder="frankamdev@gmail.com"
//                   />
//                   {errors.email && (
//                     <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
//                   )}
//                 </div>

//                 {/* Mot de passe */}
//                 <div>
//                   <label className="block mb-1.5 text-sm font-medium text-zinc-300">Mot de passe</label>
//                   <div className="relative">
//                     <input
//                       type={showPassword ? 'text' : 'password'}
//                       value={data.password}
//                       onChange={e => setData('password', e.target.value)}
//                       required
//                       className={`w-full px-4 py-3 pr-12 rounded-xl bg-white/5 border text-white backdrop-blur-sm transition focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 outline-none ${errors.password ? 'border-red-500/50' : 'border-white/10'}`}
//                       placeholder="6 caractères minimum"
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowPassword(!showPassword)}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-cyan-400"
//                     >
//                       {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                     </button>
//                   </div>
//                   {errors.password && (
//                     <p className="mt-1.5 text-xs text-red-400">{errors.password}</p>
//                   )}
//                 </div>

//                 {/* Confirmation */}
//                 <div>
//                   <label className="block mb-1.5 text-sm font-medium text-zinc-300">Confirmer le mot de passe</label>
//                   <div className="relative">
//                     <input
//                       type={showConfirmPassword ? 'text' : 'password'}
//                       value={data.password_confirmation}
//                       onChange={e => setData('password_confirmation', e.target.value)}
//                       required
//                       className={`w-full px-4 py-3 pr-12 rounded-xl bg-white/5 border text-white backdrop-blur-sm transition focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 outline-none ${errors.password_confirmation ? 'border-red-500/50' : 'border-white/10'}`}
//                     />
//                     <button
//                       type="button"
//                       onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                       className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-cyan-400"
//                     >
//                       {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                     </button>
//                   </div>
//                   {errors.password_confirmation && (
//                     <p className="mt-1.5 text-xs text-red-400">{errors.password_confirmation}</p>
//                   )}
//                 </div>

//                 {/* Photo de profil */}
//                 <div>
//                   <label className="block mb-1.5 text-sm font-medium text-zinc-300">Photo de profil (optionnel)</label>
//                   <input
//                     id="avatar"
//                     type="file"
//                     onChange={e => setData('photo', e.target.files[0])}
//                     accept="image/*"
//                     // onChange={handleFileChange}
//                     className="hidden"
//                   />
//                   <motion.label
//                     htmlFor="avatar"
//                     whileHover={{ scale: 1.02 }}
//                     className="flex items-center justify-center gap-2 px-4 py-3 text-sm text-white border rounded-xl border-white/10 bg-white/5 backdrop-blur-sm hover:border-cyan-500/50 cursor-pointer transition"
//                   >
//                     <Upload size={18} />
//                     Choisir une photo
//                   </motion.label>
//                 </div>

//                 {/* Aperçu photo */}


//                 {/* <AnimatePresence>
//                   {preview && (
//                     <motion.div
//                       initial={{ opacity: 0, scale: 0.9 }}
//                       animate={{ opacity: 1, scale: 1 }}
//                       exit={{ opacity: 0, scale: 0.9 }}
//                       className="flex items-center gap-4 p-3 border rounded-xl border-white/10 bg-white/5"
//                     >
//                       <img
//                         src={preview}
//                         alt="Aperçu"
//                         className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-full border-2 border-cyan-500/50"
//                       />
//                       <button
//                         type="button"
//                         onClick={removePhoto}
//                         className="flex items-center gap-1 px-3 py-1.5 text-xs text-red-400 bg-red-500/20 hover:bg-red-500/30 rounded-lg transition"
//                       >
//                         <X size={14} /> Supprimer
//                       </button>
//                     </motion.div>
//                   )}
//                 </AnimatePresence> */}










//                 <AnimatePresence mode="wait">
//                   {preview ? (
//                     // === Mode : photo sélectionnée ===
//                     <motion.div
//                       key="preview"
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.25 }}
//                       className="relative flex flex-col sm:flex-row items-center gap-5 p-4 sm:p-5 border border-white/10 rounded-2xl bg-white/5 backdrop-blur-sm"
//                     >
//                       {/* Conteneur de l'image avec overlay au survol */}
//                       <div className="relative group">
//                         <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-cyan-500/60 shadow-lg shadow-cyan-900/20">
//                           <img
//                             src={preview}
//                             alt="Prévisualisation de votre photo de profil"
//                             className="w-full h-full object-cover"
//                           />
//                         </div>

//                         {/* Overlay + bouton changer au survol */}
//                         <button
//                           type="button"
//                           onClick={triggerFileInput} // fonction qui fait fileInputRef.current?.click()
//                           className="absolute inset-0 flex items-center justify-center bg-black/45 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
//                           aria-label="Changer la photo"
//                         >
//                           <div className="bg-cyan-600/90 p-3 rounded-full shadow-md">
//                             <Camera size={24} className="text-white" />
//                           </div>
//                         </button>
//                       </div>

//                       {/* Informations et actions */}
//                       <div className="flex-1 flex flex-col gap-3 sm:gap-4">
//                         <div>
//                           <p className="text-sm font-medium text-cyan-300">Photo sélectionnée</p>
//                           <p className="text-xs text-zinc-400 mt-0.5">
//                             Vous pouvez la changer ou la supprimer
//                           </p>
//                         </div>

//                         <div className="flex flex-wrap gap-3">
//                           <button
//                             type="button"
//                             onClick={triggerFileInput}
//                             className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-cyan-600/30 hover:bg-cyan-600/50 border border-cyan-500/30 rounded-lg transition-all"
//                           >
//                             <Camera size={16} />
//                             Changer la photo
//                           </button>

//                           <button
//                             type="button"
//                             onClick={removePhoto}
//                             className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-300 bg-red-900/20 hover:bg-red-900/40 border border-red-500/30 rounded-lg transition-all"
//                           >
//                             <Trash2 size={16} />
//                             Supprimer
//                           </button>
//                         </div>

//                         {errors.avatar && (
//                           <p className="text-xs text-red-400 mt-1">{errors.avatar}</p>
//                         )}
//                       </div>
//                     </motion.div>
//                   ) : (
//                     // === Mode : pas encore de photo ===
//                     <motion.div
//                       key="upload"
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       exit={{ opacity: 0, y: -10 }}
//                       transition={{ duration: 0.25 }}
//                       className="relative"
//                     >
//                       {/* Zone d'upload avec drag & drop */}
//                       <label
//                         htmlFor="avatar"
//                         className={`
//           flex flex-col items-center justify-center gap-3 p-8 sm:p-10
//           border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-200
//           ${dragActive
//                             ? 'border-cyan-500 bg-cyan-950/20'
//                             : 'border-white/15 hover:border-cyan-500/50 bg-white/3 hover:bg-white/5'
//                           }
//         `}
//                         onDragEnter={() => setDragActive(true)}
//                         onDragLeave={() => setDragActive(false)}
//                         onDragOver={(e) => e.preventDefault()}
//                         onDrop={(e) => {
//                           e.preventDefault();
//                           setDragActive(false);
//                           const file = e.dataTransfer.files?.[0];
//                           if (file && file.type.startsWith('image/')) {
//                             handleFileChange({ target: { files: [file] } } as any);
//                           }
//                         }}
//                       >
//                         <div className="p-4 bg-white/5 rounded-full">
//                           <Upload size={28} className="text-cyan-400" />
//                         </div>

//                         <div className="text-center">
//                           <p className="text-base font-medium text-zinc-200">
//                             Déposez votre photo ici ou cliquez pour parcourir
//                           </p>
//                           <p className="text-xs text-zinc-500 mt-1.5">
//                             PNG, JPG, GIF • max. 5 Mo recommandé
//                           </p>
//                         </div>
//                       </label>

//                       {/* Input file caché */}
//                       <input
//                         // ref={fileInputRef}
//                         id="avatar"
//                         type="file"
//                         accept="image/*"
//                         onChange={handleFileChange}
//                         className="hidden"
//                       />

//                       {errors.avatar && (
//                         <p className="mt-2 text-xs text-red-400 text-center">
//                           {errors.avatar}
//                         </p>
//                       )}
//                     </motion.div>
//                   )}
//                 </AnimatePresence>




//                 {/* Bouton submit */}
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   type="submit"
//                   disabled={processing}
//                   className="w-full py-4 font-bold text-white rounded-xl bg-gradient-to-r from-cyan-500 to-teal-600 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 disabled:opacity-50 transition"
//                 >
//                   {processing ? 'Création en cours...' : 'Créer le compte'}
//                 </motion.button>
//               </form>

//               <div className="mt-8 text-xs text-center text-zinc-500">
//                 Déjà un compte ?{' '}
//                 <Link href="/login" className="font-medium text-cyan-400 hover:text-cyan-300">
//                   Connectez-vous
//                 </Link>
//               </div>

//               <div className="mt-6 text-xs text-center text-zinc-600">
//                 © 2026 frankamdev.getomiie.com. Tous droits réservés.
//               </div>
//             </motion.div>
//           </div>
//         </div >
//       </div >
//     </>
//   );
// }



