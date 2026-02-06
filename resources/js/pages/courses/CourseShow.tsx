// pages/courses/[slug].tsx   ou   components/CourseShow.tsx
import { Head, Link, usePage } from '@inertiajs/react';
import { FiArrowLeft, FiBookOpen, FiClock, FiStar, FiTrendingUp, FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';
import Navbar from '@/components/NavBar';

interface Lesson {
  id: number;
  title: string;
  slug: string;
  duration: string;     // ex: "18 min"
  is_completed?: boolean;
  order: number;
}

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé' | 'Tous niveaux';
  duration: string;
  lessons_count: number;
  popularity?: number;     // ex: 4.8
  objectives: string[];
  prerequisites: string[];
  lessons: Lesson[];
}

interface Props {
  course: Course;
}

export default function CourseShow() {
  const { course } = usePage().props as any;

  return (
    <>
      <Head title={`${course.title} - JS Mastery`} />

      <div className="min-h-screen bg-[#030313] text-gray-100">
        {/* Navigation fixe en haut */}
        <nav className="sticky top-0 z-50 border-b border-gray-800/40 bg-[#030313]/80 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">

              {/* <div className="flex items-center gap-4">
                {auth?.user ? (
                  <div className="flex items-center gap-3">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-sm font-bold">
                  {auth.user.name?.[0]?.toUpperCase() || '?'}
                  </div>
                  <span className="hidden sm:inline font-medium">{auth.user.name}</span>
                  </div>
                  ) : (
                    <Link
                    href="/login"
                    className="rounded-lg bg-indigo-600/90 px-5 py-2 text-sm font-medium hover:bg-indigo-600 transition-colors"
                  >
                  Se connecter
                  </Link>
                  )}
                  </div> */}

              <Navbar />
              <Link href="/courses" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <FiArrowLeft className="h-5 w-5" />
                <span className="font-medium">Retour aux cours</span>
              </Link>
            </div>
          </div>
        </nav>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-14">
          {/* En-tête avec titre + image/logo */}
          <div className="mb-12 lg:mb-16">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-10">
              {/* Image / Logo du cours */}
              <div className="relative h-32 w-32 lg:h-40 lg:w-40 shrink-0 rounded-2xl overflow-hidden border border-gray-800/50 shadow-2xl shadow-black/40">
                <img
                  src={course.image || '/images/course-placeholder.jpg'}
                  alt={course.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030313]/70 via-transparent to-transparent/30" />
              </div>

              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {course.title}
                </h1>
                <p className="mt-3 text-lg text-gray-400">
                  {course.level} • {course.duration} • {course.lessons_count} leçons
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
            {/* Colonne principale (gauche) */}
            <div className="lg:col-span-2 space-y-10 lg:space-y-14">
              {/* Lecteur Tiptap / Contenu principal */}
              <section className="rounded-2xl border border-gray-800/50 bg-[#080E1F]/40 backdrop-blur-sm p-6 lg:p-8">
                <h2 className="mb-6 text-2xl font-semibold flex items-center gap-3">
                  <FiBookOpen className="text-indigo-400" />
                  Contenu du cours
                </h2>

                {/* Ici tu intègres ton TiptapReader / lecteur de contenu */}
                <div className="prose prose-invert max-w-none">
                  {/* Remplace par <TipTapReader content={course.content} /> ou ton composant */}
                  <p className="text-gray-300 leading-relaxed">
                    {/* Contenu dynamique du cours – première leçon ou aperçu */}
                    Bienvenue dans ce cours complet sur...
                  </p>
                  {/* ... */}
                </div>
              </section>

              {/* Description complète */}
              <section className="rounded-2xl border border-gray-800/50 bg-[#080E1F]/30 backdrop-blur-sm p-6 lg:p-8">
                <h2 className="mb-6 text-2xl font-semibold">À propos de ce cours</h2>
                <div className="text-gray-300 leading-relaxed whitespace-pre-line">
                  {course.description || 'Description détaillée du cours...'}
                </div>
              </section>

              {/* Statistiques rapides (5 cartes) */}
              <section className="grid grid-cols-2 sm:grid-cols-5 gap-4 lg:gap-6">
                {[
                  { icon: FiClock, label: 'Durée', value: course.duration },
                  { icon: FiBookOpen, label: 'Leçons', value: course.lessons_count },
                  { icon: FiStar, label: 'Niveau', value: course.level },
                  { icon: FiTrendingUp, label: 'Popularité', value: course.popularity ? `${course.popularity}/5` : 'Nouveau' },
                  { icon: FiCheckCircle, label: 'Progression', value: '0%' },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="rounded-xl bg-[#080E1F]/50 border border-gray-800/50 p-4 text-center transition-all hover:border-indigo-700/50 hover:bg-[#080E1F]/70"
                  >
                    <stat.icon className="mx-auto h-6 w-6 text-indigo-400 mb-2" />
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </section>

              {/* Objectifs du cours */}
              <section className="rounded-2xl border border-gray-800/50 bg-[#080E1F]/40 backdrop-blur-sm p-6 lg:p-8">
                <h2 className="mb-6 text-2xl font-semibold flex items-center gap-3">
                  <FiCheckCircle className="text-emerald-400" />
                  Ce que vous allez apprendre
                </h2>
                <ul className="space-y-3 text-gray-300">
                  {course.objectives?.map((obj, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FiCheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{obj}</span>
                    </li>
                  )) || (
                      <li className="text-gray-500">Objectifs à venir...</li>
                    )}
                </ul>
              </section>
            </div>

            {/* Colonne latérale droite */}
            <div className="space-y-8 lg:space-y-10">
              {/* Carte Infos du cours */}
              <div className="rounded-2xl border border-indigo-800/40 bg-gradient-to-b from-[#080E1F] to-[#030313] p-6 lg:p-8 shadow-xl shadow-indigo-950/20 sticky top-20">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">
                  Informations
                </h3>

                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-gray-500">Niveau</div>
                    <div className="text-lg font-medium">{course.level}</div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500">Durée totale</div>
                    <div className="text-lg font-medium">{course.duration}</div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500">Nombre de leçons</div>
                    <div className="text-lg font-medium">{course.lessons_count}</div>
                  </div>

                  <div>
                    <div className="text-sm text-gray-500">Langue</div>
                    <div className="text-lg font-medium">Français</div>
                  </div>

                  <div className="pt-4 border-t border-gray-800/50">
                    <button className="w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 rounded-xl font-semibold text-lg transition-all transform hover:scale-[1.02] shadow-lg shadow-indigo-900/30">
                      Commencer le cours
                    </button>
                  </div>
                </div>
              </div>

              {/* Pré-requis */}
              <div className="rounded-2xl border border-amber-900/30 bg-[#080E1F]/40 backdrop-blur-sm p-6 lg:p-8">
                <h3 className="text-xl font-semibold mb-5 flex items-center gap-3">
                  <FiAlertTriangle className="text-amber-400" />
                  Pré-requis recommandés
                </h3>
                <ul className="space-y-3 text-gray-300 text-sm">
                  {course.prerequisites?.map((pre, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-amber-400 mt-1">•</span>
                      <span>{pre}</span>
                    </li>
                  )) || (
                      <li className="text-gray-500">Aucun pré-requis obligatoire</li>
                    )}
                </ul>
              </div>
            </div>
          </div>

          {/* Liste des leçons (en bas ou à gauche selon ton souhait) */}
          <section className="mt-16 lg:mt-20">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8 flex items-center gap-4">
              <FiBookOpen className="text-indigo-400" />
              Plan du cours
            </h2>

            <div className="space-y-4">
              {course.lessons.map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/courses/${course.slug}/${lesson.slug}`}
                  className={`
                    group flex items-center justify-between
                    rounded-xl border border-gray-800/50 bg-[#080E1F]/40 backdrop-blur-sm
                    p-5 hover:border-indigo-700/60 hover:bg-[#080E1F]/70 transition-all
                  `}
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-indigo-900/40 flex items-center justify-center text-indigo-300 font-medium shrink-0">
                      {lesson.order}
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-indigo-300 transition-colors">
                        {lesson.title}
                      </h4>
                      <p className="text-sm text-gray-500">{lesson.duration}</p>
                    </div>
                  </div>

                  {lesson.is_completed && (
                    <FiCheckCircle className="h-6 w-6 text-emerald-500" />
                  )}
                </Link>
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
}