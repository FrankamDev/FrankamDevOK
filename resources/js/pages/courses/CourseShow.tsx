import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { FiArrowLeft, FiBookOpen, FiClock, FiStar, FiTrendingUp, FiCheckCircle, FiAlertTriangle, FiPlayCircle } from 'react-icons/fi';
import Navbar from '@/components/NavBar';

interface Lesson {
  id: number;
  title: string;
  slug: string;
  duration: string;
  is_completed?: boolean;
  order: number;
}

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  level: string;
  duration: string;
  lessons_count: number;
  popularity?: number;
  objectives: string[];
  prerequisites: string[];
  lessons: Lesson[];
  rating?: number;
  enrollments?: number;
}

const SkeletonCard = ({ className = '' }: { className?: string }) => (
  <div className={`animate-pulse rounded-xl bg-[#080E1F]/50 border border-gray-800/50 ${className}`}>
    <div className="h-32 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-t-xl" />
    <div className="p-4 space-y-3">
      <div className="h-5 bg-gray-800/70 rounded w-4/5" />
      <div className="h-4 bg-gray-800/50 rounded w-3/5" />
      <div className="h-10 bg-gray-800/40 rounded-lg w-full" />
    </div>
  </div>
);

export default function CourseShow() {
  const { course: rawCourse } = usePage().props as any;
  const [isLoading, setIsLoading] = useState(true);
  const [course, setCourse] = useState<Course | null>(null);

  useEffect(() => {
    if (rawCourse) {
      setCourse({
        ...rawCourse,
        objectives: rawCourse.objectives || [],
        prerequisites: rawCourse.prerequisites || [],
        lessons: rawCourse.lessons || [],
      });
      setTimeout(() => setIsLoading(false), 800); // Optimistic UI
    }
  }, [rawCourse]);

  if (isLoading || !course) {
    return (
      <>
        <Head title="Chargement..." />
        <div className="min-h-screen bg-[#030313]">

          <main className="mx-auto max-w-6xl px-4 py-8 sm:py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
              <div className="lg:col-span-2 space-y-6">
                <SkeletonCard />
                <div className="space-y-4">
                  <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                    {Array(5).fill(0).map((_, i) => (
                      <div key={i} className="h-16 rounded-lg bg-[#080E1F]/40" />
                    ))}
                  </div>
                  <SkeletonCard className="h-64" />
                </div>
              </div>
              <div className="space-y-6">
                <SkeletonCard className="h-80" />
                <SkeletonCard className="h-48" />
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }

  return (
    <>
      <Head title={`${course.title} - JS Mastery`} />

      <div className="min-h-screen bg-[#030313] text-gray-100">
        {/* Nav compacte */}
        <nav className="sticky top-0 z-50 border-b border-gray-800/30 bg-[#030313]/95 backdrop-blur-xl">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-14 items-center justify-between">
              <Link href="/courses" className="flex items-center gap-2 text-gray-400 hover:text-white transition-all p-2 -m-2 rounded-lg hover:bg-[#080E1F]/50">
                <FiArrowLeft className="h-4 w-4" />
                <span className="text-sm font-medium hidden sm:inline">Retour</span>
              </Link>

            </div>
          </div>
        </nav>

        <main className="mx-auto max-w-6xl px-4 py-6 sm:py-10 lg:py-14">
          {/* Header compact */}
          <div className="mb-8 lg:mb-12 flex flex-col lg:flex-row items-start lg:items-center gap-4 lg:gap-6">
            <div className="relative h-20 w-20 lg:h-24 lg:w-24 shrink-0 rounded-xl overflow-hidden border-2 border-indigo-900/50 shadow-xl">
              <img src={course.image || '/images/course-placeholder.jpg'} alt={course.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#030313]/90 to-transparent/20" />
            </div>
            <div className="min-w-0 flex-1">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight truncate">{course.title}</h1>
              <p className="mt-1 text-sm lg:text-base text-gray-500 flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-indigo-900/40 rounded-full text-indigo-300">{course.level}</span>
                <span>{course.duration}</span>
                <span>{course.lessons_count} leçons</span>
                {course.rating && <span className="flex items-center gap-1 text-amber-400"><FiStar />{course.rating}</span>}
              </p>
            </div>
          </div>

          {/* Layout principal 2-1 ultra-compact */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {/* Contenu principal (66%) */}
            <div className="lg:col-span-2 space-y-6 lg:space-y-8">

              {/* Lecteur principal (plus petit + sticky) */}
              <section className="sticky top-24 lg:top-32 z-10 rounded-xl border border-gray-800/40 bg-[#080E1F]/50 backdrop-blur-md p-5 lg:p-7 shadow-xl">
                <div className="flex items-center gap-2 mb-5 text-sm font-semibold text-indigo-300">
                  <FiPlayCircle className="h-5 w-5" />
                  Aperçu du cours
                </div>
                <div className="prose prose-invert max-w-none text-sm lg:text-base leading-relaxed">
                  {/* Ton TiptapReader ici */}
                  <div className="text-gray-300">
                    <p>Contenu de la première leçon ou aperçu interactif...</p>
                  </div>
                </div>
              </section>

              {/* Stats ultra-compactes (toujours visibles) */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 lg:gap-4 p-4 rounded-xl bg-[#080E1F]/30 border border-gray-800/40">
                {[
                  { icon: FiClock, label: 'Durée', value: course.duration, color: 'indigo' },
                  { icon: FiBookOpen, label: 'Leçons', value: course.lessons_count, color: 'blue' },
                  { icon: FiStar, label: 'Note', value: course.popularity ? `${course.popularity}/5` : 'N/A', color: 'amber' },
                  { icon: FiTrendingUp, label: 'Inscrits', value: course.enrollments || 0, color: 'emerald' },
                  { icon: FiCheckCircle, label: 'Progression', value: '0%', color: 'green' },
                ].map((stat, i) => (
                  <div key={i} className="group p-3 rounded-lg bg-[#080E1F]/50 border border-gray-800/50 hover:border-[color-var(--color)] hover:bg-[color-var(--color)]/10 transition-all text-center" style={{ '--color': `${stat.color}-400` } as any}>
                    <stat.icon className="mx-auto h-4 w-4 text-gray-400 group-hover:text-[color-var(--color)] mb-1.5" style={{ '--color': `${stat.color}-400` } as any} />
                    <div className="text-sm font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Objectifs compacts */}
              <section className="rounded-xl border border-gray-800/40 bg-[#080E1F]/40 p-5 lg:p-6 backdrop-blur-sm">
                <h3 className="mb-4 text-lg font-semibold flex items-center gap-2 text-emerald-300">
                  <FiCheckCircle className="h-5 w-5" />
                  Vous allez maîtriser
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(course.objectives || []).length > 0 ? (
                    (course.objectives || []).slice(0, 6).map((obj, i) => (
                      <div key={i}>{obj}</div>
                    ))
                  ) : (
                    <p>Aucun objectif défini</p>
                  )}
                  {(course.objectives || []).length > 6 && (
                    <div className="col-span-full text-center py-3 text-sm text-gray-500 border-t border-gray-800/50 mt-2">+{(course.objectives || []).length - 6} objectifs</div>
                  )}
                </div>
              </section>

              {/* Description courte */}
              <section className="rounded-xl border border-gray-800/40 bg-[#080E1F]/30 p-5 lg:p-6">
                <h3 className="mb-4 text-lg font-semibold text-gray-200">À propos</h3>
                <p className="text-sm text-gray-400 leading-relaxed max-h-32 overflow-hidden">{course.description}</p>
              </section>
            </div>

            {/* Sidebar sticky ultra-compacte */}
            <div className="space-y-5 lg:space-y-6">

              {/* Bouton principal (gros + sticky) */}
              <div className="sticky top-24 lg:top-32 z-20">
                <button className="w-full group rounded-xl bg-gradient-to-r from-indigo-600/90 to-purple-600/90 p-5 shadow-2xl shadow-indigo-950/40 border border-indigo-800/50 hover:from-indigo-500 hover:to-purple-500 hover:shadow-purple-900/40 hover:-translate-y-0.5 transition-all duration-300 text-white font-semibold text-base">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <FiPlayCircle className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                    Commencer gratuitement
                  </div>
                  <div className="text-xs text-indigo-200 opacity-90 text-center">Accès illimité • 7 jours</div>
                </button>
              </div>

              {/* Infos rapides */}
              <div className="rounded-xl border border-indigo-900/40 bg-gradient-to-b from-[#080E1F]/80 to-[#030313]/80 p-5 shadow-xl backdrop-blur-md">
                <h4 className="text-lg font-bold mb-4 bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent">Détails</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Niveau</span>
                    <span className="font-medium text-indigo-300">{course.level}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Total</span>
                    <span className="font-medium">{course.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Leçons</span>
                    <span className="font-medium">{course.lessons_count}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t border-gray-800/50">
                    <span className="text-gray-500">Langue</span>
                    <span className="font-medium text-emerald-400">🇫🇷 Français</span>
                  </div>
                </div>
              </div>

              {/* Pré-requis compacts */}
              <div className="rounded-xl border border-amber-900/30 bg-[#080E1F]/50 p-5 backdrop-blur-sm">
                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2 text-amber-300">
                  <FiAlertTriangle className="h-4 w-4" />
                  Pré-requis
                </h4>
                <div className="space-y-2 text-xs">
                  {course.prerequisites.length ? (
                    (course.prerequisites || []).map((pre, i) => (
                      <div key={i} className="flex items-center gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                        {pre}
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-xs">Aucun pré-requis ! 🚀</p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Liste leçons ultra-compacte (en bas) */}
          <section>
            <h2 className="text-xl lg:text-2xl font-bold mb-6 flex items-center gap-3 text-indigo-300">
              <FiBookOpen className="h-6 w-6" />
              {course.lessons_count ?? 0} leçons
            </h2>
            <div className="max-h-[500px] overflow-y-auto rounded-2xl border border-gray-800/40 bg-[#080E1F]/40 backdrop-blur-md">
              <div className="divide-y divide-gray-800/50">
                {(course.lessons || []).map((lesson) => (
                  <Link
                    key={lesson.id}
                    href={`/courses/${course.slug}/lessons/${lesson.slug}`}
                    className="group flex items-center gap-4 p-4 hover:bg-[#080E1F]/70 border-l-4 border-transparent hover:border-indigo-500/70 transition-all"
                  >
                    <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-900/60 to-purple-900/60 flex items-center justify-center text-indigo-300 font-bold text-sm shrink-0 group-hover:scale-105 transition-transform">
                      {lesson.order}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-medium text-sm group-hover:text-indigo-300 transition-colors line-clamp-1">{lesson.title}</h4>
                      <p className="text-xs text-gray-500 mt-0.5">{lesson.duration}</p>
                    </div>
                    {lesson.is_completed ? (
                      <FiCheckCircle className="h-5 w-5 text-emerald-500 ml-auto" />
                    ) : (
                      <div className="w-5 h-5 ml-auto rounded-full border-2 border-gray-600 group-hover:border-indigo-500/70 transition-colors" />
                    )}
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}



