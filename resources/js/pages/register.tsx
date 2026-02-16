import { Head, Link, useForm } from '@inertiajs/react';
import { motion } from 'framer-motion';
import { Camera, Trash2, Upload } from 'lucide-react';
import { FormEvent, useRef, useState } from 'react';

export default function Register() {
  const [preview, setPreview] = useState<string | null>(null);

  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    avatar: null as File | null,
  });

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Optionnel : vérifier que c'est bien une image
    if (!file.type.startsWith('image/')) {
      alert('Veuillez sélectionner une image');
      return;
    }

    setData('avatar', file);

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);
  };

  const removePhoto = () => {
    setData('avatar', null);
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('email', data.email);
    formData.append('password', data.password);
    formData.append('password_confirmation', data.password_confirmation);
    if (data.avatar) {
      formData.append('avatar', data.avatar);
    }

    post('/register', {
      forceFormData: true,
      preserveState: true,
    });
  };

  return (
    <>
      <Head title="Inscription" />

      <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4 py-12">
        <div className="w-full max-w-md bg-gray-900/60 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50">
          <h1 className="text-3xl font-bold text-white text-center mb-8">
            Créer un compte
          </h1>

          <form onSubmit={submit} className="space-y-6">
            {/* Nom */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Nom
              </label>
              <input
                type="text"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
                required
              />
            </div>

            {/* Avatar - la partie qui t'intéresse */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Photo de profil (facultatif)
              </label>

              {/* Input caché */}
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />

              {preview ? (
                <div className="flex items-center gap-4">
                  <div className="relative group">
                    <img
                      src={preview}
                      alt="Prévisualisation"
                      className="w-24 h-24 object-cover rounded-full border-2 border-cyan-600 shadow-lg"
                    />
                    <button
                      type="button"
                      onClick={openFilePicker}
                      className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition"
                    >
                      <Camera size={28} className="text-white" />
                    </button>
                  </div>

                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={openFilePicker}
                      className="px-4 py-2 bg-cyan-600/20 text-cyan-300 rounded-lg hover:bg-cyan-600/40 transition text-sm"
                    >
                      Changer
                    </button>
                    <button
                      type="button"
                      onClick={removePhoto}
                      className="px-4 py-2 bg-red-600/20 text-red-300 rounded-lg hover:bg-red-600/40 transition text-sm flex items-center gap-1"
                    >
                      <Trash2 size={16} /> Supprimer
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={openFilePicker}
                  className="w-full py-6 border-2 border-dashed border-gray-600 rounded-xl text-gray-400 hover:border-cyan-500 hover:text-cyan-400 transition flex flex-col items-center gap-2"
                >
                  <Upload size={28} />
                  <span>Choisir une photo</span>
                </button>
              )}

              {errors.avatar && (
                <p className="mt-1 text-sm text-red-400">{errors.avatar}</p>
              )}
            </div>

            {/* Bouton submit */}
            <button
              type="submit"
              disabled={processing}
              className="w-full py-3 bg-gradient-to-r from-cyan-600 to-teal-600 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-teal-500 transition disabled:opacity-50"
            >
              {processing ? 'Création en cours...' : 'Créer le compte'}
            </button>
          </form>

          <p className="mt-6 text-center text-gray-400 text-sm">
            Déjà un compte ?{' '}
            <Link href="/login" className="text-cyan-400 hover:underline">
              Se connecter
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}