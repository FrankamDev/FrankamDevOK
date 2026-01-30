// import { Form, Head } from '@inertiajs/react';
// import InputError from '@/components/input-error';
// import TextLink from '@/components/text-link';
// import { Button } from '@/components/ui/button';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Spinner } from '@/components/ui/spinner';
// import AuthLayout from '@/layouts/auth-layout';
// import { register } from '@/routes';
// import { store } from '@/routes/login';
// import { request } from '@/routes/password';

// type Props = {
//     status?: string;
//     canResetPassword: boolean;
//     canRegister: boolean;
// };

// export default function Login({
//     status,
//     canResetPassword,
//     canRegister,
// }: Props) {
//     return (
//         <AuthLayout
//             title="Log in to your account"
//             description="Enter your email and password below to log in"
//         >
//             <Head title="Log in" />

//             <Form
//                 {...store.form()}
//                 resetOnSuccess={['password']}
//                 className="flex flex-col gap-6"
//             >
//                 {({ processing, errors }) => (
//                     <>
//                         <div className="grid gap-6">
//                             <div className="grid gap-2">
//                                 <Label htmlFor="email">Email address</Label>
//                                 <Input
//                                     id="email"
//                                     type="email"
//                                     name="email"
//                                     required
//                                     autoFocus
//                                     tabIndex={1}
//                                     autoComplete="email"
//                                     placeholder="email@example.com"
//                                 />
//                                 <InputError message={errors.email} />
//                             </div>

//                             <div className="grid gap-2">
//                                 <div className="flex items-center">
//                                     <Label htmlFor="password">Password</Label>
//                                     {canResetPassword && (
//                                         <TextLink
//                                             href={request()}
//                                             className="ml-auto text-sm"
//                                             tabIndex={5}
//                                         >
//                                             Forgot password?
//                                         </TextLink>
//                                     )}
//                                 </div>
//                                 <Input
//                                     id="password"
//                                     type="password"
//                                     name="password"
//                                     required
//                                     tabIndex={2}
//                                     autoComplete="current-password"
//                                     placeholder="Password"
//                                 />
//                                 <InputError message={errors.password} />
//                             </div>

//                             <div className="flex items-center space-x-3">
//                                 <Checkbox
//                                     id="remember"
//                                     name="remember"
//                                     tabIndex={3}
//                                 />
//                                 <Label htmlFor="remember">Remember me</Label>
//                             </div>

//                             <Button
//                                 type="submit"
//                                 className="mt-4 w-full"
//                                 tabIndex={4}
//                                 disabled={processing}
//                                 data-test="login-button"
//                             >
//                                 {processing && <Spinner />}
//                                 Log in
//                             </Button>
//                         </div>

//                         {canRegister && (
//                             <div className="text-center text-sm text-muted-foreground">
//                                 Don't have an account?{' '}
//                                 <TextLink href={register()} tabIndex={5}>
//                                     Sign up
//                                 </TextLink>
//                             </div>
//                         )}
//                     </>
//                 )}
//             </Form>

//             {status && (
//                 <div className="mb-4 text-center text-sm font-medium text-green-600">
//                     {status}
//                 </div>
//             )}
//         </AuthLayout>
//     );
// }



import { Head, Link, useForm } from '@inertiajs/react';
import { AnimatePresence, motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
import type { FormEvent } from 'react';
import { useState } from 'react';
import DynamicQuote from '@/components/DynamicQuote';

interface LoginProps {
  status?: string;
  canResetPassword: boolean;
  canRegister?: boolean;
}

export default function Login({
  status,
  canResetPassword,
  canRegister = true,
}: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);

  const { data, setData, post, processing, errors, reset } = useForm({
    email: '',
    password: '',
    remember: false,
  });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    post('/login', {
      // URL directe → pas de route()
      onFinish: () => reset('password'),
    });
  };

  return (
    <>
      <Head title="Connexion - FrankamDev" />

      {/* Toast pour le message de succès (ex: email vérifié) */}
      <AnimatePresence>
        {status && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-8 left-1/2 z-50 -translate-x-1/2 rounded-2xl border border-emerald-500/30 bg-emerald-500/20 px-8 py-4 font-medium text-emerald-300 shadow-2xl backdrop-blur-xl"
          >
            {status}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0E1126] via-[#020013] to-[#0E1126] p-6">
        {/* Orbes animés */}
        <motion.div
          animate={{ x: [-200, 200, -200], y: [-100, 100, -100] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [200, -200, 200], y: [100, -100, 100] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -right-40 -bottom-40 h-96 w-96 rounded-full bg-teal-600/10 blur-3xl"
        />

        <div className="grid w-full max-w-6xl gap-0 overflow-hidden rounded-3xl border border-white/5 shadow-2xl md:grid-cols-2">
          {/* GAUCHE – Logo 3D */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative hidden flex-col justify-between overflow-hidden bg-gradient-to-br from-[#0E1126]/80 to-[#020013]/90 p-16 backdrop-blur-xl md:flex"
          >
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600 shadow-lg shadow-emerald-500/20" />
              <span className="text-2xl font-bold text-white">
                FrankamDev
              </span>
            </div>

            <div className="perspective-1000 relative h-80">
              <motion.div
                animate={{ rotateY: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute inset-0 flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div
                  className="text-7xl font-black text-emerald-400"
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
                            <p className="text-sm text-zinc-400 italic">
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
            {/* Logo mobile */}
            <div className="mb-8 flex items-center gap-3 md:hidden">
              <div className="bg-gradient h-8 w-8 rounded-lg from-emerald-400 to-teal-600 shadow-lg shadow-emerald-500/20" />
              <span className="text-xl font-bold text-cyan-300">
                FrankamDev
              </span>
            </div>

            <h2 className="mb-6 flex items-center gap-2 text-sm font-medium text-emerald-400">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 opacity-70 blur-sm" />
              Connectez-vous avec :
            </h2>

            {/* OAuth (à activer plus tard) */}
            <div className="mb-8 grid grid-cols-2 gap-3">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:border-emerald-500/50"
              >
                <a

                  href="/auth/redirect/google"
                  className="flex items-center gap-2"
                >
                  {/* Logo Google */}
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 6.75c1.63 0 3.06.56 4.21 1.65l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>

                  {/* Texte */}
                  <span>Google</span>
                </a>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:border-emerald-500/50"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.26.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <a href="/auth/redirect/github">
                  GitHub
                </a>
              </motion.button>
            </div>

            <div className="relative mb-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-[#020013] px-2 text-zinc-500">
                  OU AVEC VOTRE EMAIL
                </span>
              </div>
            </div>

            <form onSubmit={submit} className="space-y-6">
              {/* Email */}
              <div>
                <label className="mb-2 block text-sm font-medium text-zinc-300">
                  Email
                </label>
                <input
                  type="email"
                  value={data.email}
                  onChange={(e) =>
                    setData('email', e.target.value)
                  }
                  required
                  autoFocus
                  className={`w-full rounded-xl border bg-white/5 px-4 py-3 text-white placeholder-zinc-500 backdrop-blur-sm transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none ${errors.email
                    ? 'border-red-500/50'
                    : 'border-white/10'
                    }`}
                  placeholder="email@example.com"
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-xs text-red-400"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Mot de passe */}
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <label className="block text-sm font-medium text-zinc-300">
                    Mot de passe
                  </label>
                  {canResetPassword && (
                    <Link
                      href="/forgot-password"
                      className="text-xs text-emerald-400 hover:text-emerald-300"
                    >
                      Oublié ?
                    </Link>

                  )}
                </div>
                <div className="relative">
                  <input
                    type={
                      showPassword ? 'text' : 'password'
                    }
                    value={data.password}
                    onChange={(e) =>
                      setData('password', e.target.value)
                    }
                    required
                    className={`w-full rounded-xl border bg-white/5 px-4 py-3 pr-12 text-white backdrop-blur-sm transition focus:border-emerald-500/50 focus:ring-2 focus:ring-emerald-500/20 focus:outline-none ${errors.password
                      ? 'border-red-500/50'
                      : 'border-white/10'
                      }`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(!showPassword)
                    }
                    className="absolute top-1/2 right-3 -translate-y-1/2 text-zinc-400 hover:text-emerald-400"
                  >
                    {showPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
                <AnimatePresence>
                  {errors.password && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-1 text-xs text-red-400"
                    >
                      {errors.password}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              {/* Se souvenir de moi */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={data.remember}
                  onChange={(e) =>
                    setData('remember', e.target.checked)
                  }
                  className="h-4 w-4 rounded border-white/20 bg-white/5 text-emerald-500 focus:ring-emerald-500/50"
                />
                <label className="cursor-pointer text-sm text-zinc-400">
                  Se souvenir de moi
                </label>
              </div>

              {/* Bouton */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={processing}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 py-4 font-bold text-white shadow-lg shadow-emerald-500/20 transition-all hover:shadow-emerald-500/30 disabled:opacity-50"
              >
                {processing ? 'Connexion...' : 'Se connecter'}
              </motion.button>
            </form>

            {canRegister && (
              <div className="mt-8 text-center text-xs text-zinc-500">
                Pas de compte ?{' '}
                <Link
                  prefetch
                  href="/register"
                  className="font-medium text-emerald-400 hover:text-emerald-300"
                >
                  Inscrivez-vous
                </Link>
              </div>
            )}

            <div className="mt-8 text-center text-xs text-zinc-600">
              © 2025 - 2026 FrankamDev.com. Tous droits réservés.
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}
