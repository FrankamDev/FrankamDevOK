// // resources/js/Pages/Lessons/LessonShow.tsx

// import { Head, Link, usePage } from '@inertiajs/react';
// import { motion } from 'framer-motion';
// import { useEffect, useState, useRef } from 'react';
// import {
//   FiArrowLeft,
//   FiClock,
//   FiEye,
//   FiFileText,
//   FiArrowRight,
//   FiList,
//   FiChevronRight,
//   FiCheckCircle,
//   FiPlayCircle,
// } from 'react-icons/fi';
// import './lesson.css';
// import Navbar from '@/components/NavBar';
// interface Course {
//   title: string;
//   slug: string;
// }

// interface Lesson {
//   id: number;
//   title: string;
//   content: string;
//   views: number;
//   video_url?: string;
//   pdf_path?: string;
//   reading_time?: number | string;
//   type: string;
// }

// interface Heading {
//   id: string;
//   text: string;
//   level: number;
// }

// interface Props {
//   course: Course;
//   lesson: Lesson;
// }

// export default function LessonShow() {
//   const { course, lesson } = usePage<Props>().props;

//   const [isLoading, setIsLoading] = useState(true);
//   const [headings, setHeadings] = useState<Heading[]>([]);
//   const [activeId, setActiveId] = useState<string>('');
//   const contentRef = useRef<HTMLDivElement>(null);
//   const observerRef = useRef<IntersectionObserver | null>(null);

//   // Chargement simulé + parsing des headings
//   useEffect(() => {
//     const timer = setTimeout(() => setIsLoading(false), 800);

//     if (!isLoading && contentRef.current) {
//       const newHeadings = extractHeadings(contentRef.current);
//       setHeadings(newHeadings);

//       // Observer les headings pour savoir lequel est visible
//       observerRef.current = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               setActiveId(entry.target.id);
//             }
//           });
//         },
//         {
//           rootMargin: '-100px 0px -60% 0px',
//           threshold: 0.1,
//         }
//       );

//       newHeadings.forEach((h) => {
//         const el = document.getElementById(h.id);
//         if (el) observerRef.current?.observe(el);
//       });
//     }

//     return () => {
//       clearTimeout(timer);
//       observerRef.current?.disconnect();
//     };
//   }, [isLoading]);

//   if (isLoading) {
//     return <LessonSkeleton />;
//   }

//   const duration = lesson.reading_time
//     ? `${lesson.reading_time} min`
//     : '—';

//   return (
//     <>
//       <Head title={`${lesson.title} - ${course.title}`} />

//       <div className="min-h-screen bg-[#030313] text-gray-100">
//         {/* Navigation fixe */}
//         <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#030313]/90 backdrop-blur-xl">
//           <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//             <div className="flex h-16 items-center justify-between">
//               <Link
//                 href={`/courses/${course.slug}`}
//                 className="group flex items-center gap-3 text-gray-300 hover:text-white transition-colors"
//               >
//                 <div className="p-2 rounded-lg bg-white/5 group-hover:bg-indigo-600/20 transition-colors">
//                   <FiArrowLeft className="h-5 w-5" />
//                 </div>
//                 <span className="font-medium hidden sm:inline">Retour au cours</span>
//               </Link>

//               <Navbar />
//             </div>
//           </div>
//         </nav>

//         <div className="flex">
//           {/* Sommaire fixe à gauche – uniquement desktop */}
//           <aside
//             className="
//               hidden lg:block fixed left-0 top-16 bottom-0 w-80 
//               bg-gradient-to-b from-[#0a0f1f] to-[#030313] 
//               border-r border-white/5 shadow-2xl shadow-black/30 
//               overflow-y-auto z-40
//             "
//           >
//             <div className="sticky top-0 p-6 bg-[#0a0f1f]/95 backdrop-blur-md border-b border-white/5">
//               <div className="flex items-center gap-3 mb-6">
//                 <div className="p-2.5 bg-indigo-600/20 rounded-lg">
//                   <FiList className="h-5 w-5 text-indigo-400" />
//                 </div>
//                 <h3 className="text-lg font-semibold text-white">Plan de la leçon</h3>
//               </div>
//             </div>

//             <nav className="px-4 pb-8 space-y-1">
//               {headings.length === 0 ? (
//                 <div className="text-center py-12 text-gray-500 italic text-sm">
//                   Aucun titre détecté dans le contenu
//                 </div>
//               ) : (
//                 headings.map((h) => (
//                   <a
//                     key={h.id}
//                     href={`#${h.id}`}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
//                     }}
//                     className={`
//                       flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200
//                       ${activeId === h.id
//                         ? 'bg-indigo-900/40 text-indigo-100 border-l-4 border-indigo-500 font-medium'
//                         : 'text-gray-400 hover:text-white hover:bg-white/5'
//                       }
//                       ${h.level === 1 ? 'pl-4' : h.level === 2 ? 'pl-9' : 'pl-14'}
//                     `}
//                   >
//                     {h.level > 1 && (
//                       <FiChevronRight
//                         className={`h-3.5 w-3.5 flex-shrink-0 ${activeId === h.id ? 'text-indigo-400' : 'text-gray-600'}`}
//                       />
//                     )}
//                     <span className="line-clamp-1">{h.text}</span>
//                   </a>
//                 ))
//               )}
//             </nav>
//           </aside>

//           {/* Contenu principal */}
//           <main className="flex-1 lg:ml-80">
//             <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-10 lg:py-16">
//               {/* En-tête */}
//               <div className="mb-12 lg:mb-16">
//                 <div className="flex flex-wrap gap-3 mb-6">
//                   <span className="px-4 py-1.5 text-xs font-semibold bg-indigo-900/40 text-indigo-300 rounded-full">
// {/* {lesson.type.toUpperCase()} */ }
//                   </span>

//                   {duration !== '—' && (
//                     <span className="flex items-center gap-2 text-sm text-gray-400 bg-[#080E1F]/60 px-4 py-1.5 rounded-full">
//                       <FiClock className="h-4 w-4" />
//                       {duration}
//                     </span>
//                   )}

//                   <span className="flex items-center gap-2 text-sm text-gray-400 bg-[#080E1F]/60 px-4 py-1.5 rounded-full">
//                     <FiEye className="h-4 w-4" />
//                     {lesson.views} vues
//                   </span>
//                 </div>

//                 <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-white mb-6">
//                   {lesson.title}
//                 </h1>

//                 {lesson.video_url && (
//                   <div className="mt-8 mb-12 rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/50">
//                     <div className="aspect-video bg-black">
//                       <iframe
//                         src={lesson.video_url}
//                         title={lesson.title}
//                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                         allowFullScreen
//                         className="w-full h-full"
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>

//               {/* Contenu riche */}
//               <div
//                 ref={contentRef}
//                 className="
//                  lesson-content

//                 "
//               >
//                 <div
//                   dangerouslySetInnerHTML={{ __html: lesson.content }}
//                 />

//               </div>

//               {/* PDF */}
//               {lesson.pdf_path && (
//                 <div className="mb-16">
//                   <a
//                     href={lesson.pdf_path}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="
//                       inline-flex items-center gap-3 px-7 py-4
//                       bg-gradient-to-r from-indigo-600/20 to-indigo-800/20
//                       hover:from-indigo-600/40 hover:to-indigo-800/40
//                       border border-indigo-600/30 hover:border-indigo-500/50
//                       rounded-xl text-indigo-200 hover:text-white
//                       transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-indigo-900/30
//                     "
//                   >
//                     <FiFileText className="h-5 w-5" />
//                     Télécharger le support PDF
//                   </a>
//                 </div>
//               )}

//               {/* Carte suivante */}
//               <div className="mt-20 mb-12">
//                 <div className="rounded-2xl border border-indigo-900/40 bg-gradient-to-br from-[#080E1F] to-[#030313] p-7 lg:p-9 shadow-xl shadow-indigo-950/20 hover:shadow-indigo-900/40 transition-all duration-500">
//                   <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
//                     <div>
//                       <div className="text-sm font-semibold text-indigo-400 mb-3 flex items-center gap-2">
//                         <FiArrowRight className="h-5 w-5" />
//                         <span>Prochaine étape</span>
//                       </div>
//                       <h3 className="text-2xl font-bold text-white mb-2">Continuer votre apprentissage</h3>
//                       <p className="text-gray-300">
//                         Passez à la leçon suivante ou terminez ce module quand vous êtes prêt.
//                       </p>
//                     </div>

//                     <Link
//                       href={`/courses/${course.slug}`}
//                       className="
//                         inline-flex items-center gap-3 px-8 py-4
//                         bg-gradient-to-r from-indigo-600 to-purple-600
//                         hover:from-indigo-500 hover:to-purple-500
//                         rounded-xl font-semibold text-white
//                         transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-700/30
//                       "
//                     >
//                       Continuer
//                       <FiArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
//                     </Link>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </main>
//         </div>
//       </div>
//     </>
//   );
// }

// /* ──────────────────────────────────────────────
//    Skeleton
// ─────────────────────────────────────────────── */
// function LessonSkeleton() {
//   return (
//     <div className="min-h-screen bg-[#030313]">
//       <div className="h-16 bg-[#030313] border-b border-white/5 animate-pulse" />

//       <div className="flex">
//         {/* Sommaire skeleton */}
//         <div className="hidden lg:block w-80 bg-gradient-to-b from-[#080E1F]/80 to-[#030313]/80 animate-pulse">
//           <div className="p-6 space-y-6">
//             <div className="h-6 bg-gray-700/60 rounded w-2/5" />
//             {Array(10).fill(0).map((_, i) => (
//               <div key={i} className="h-9 bg-gray-800/50 rounded-lg" />
//             ))}
//           </div>
//         </div>

//         {/* Contenu */}
//         <div className="flex-1 p-6 lg:p-10">
//           <div className="max-w-4xl mx-auto space-y-12 animate-pulse">
//             <div className="space-y-6">
//               <div className="flex gap-4">
//                 <div className="h-7 w-20 bg-gray-800 rounded-full" />
//                 <div className="h-7 w-24 bg-gray-800 rounded-full" />
//                 <div className="h-7 w-28 bg-gray-800 rounded-full" />
//               </div>
//               <div className="h-14 w-4/5 bg-gray-800 rounded-xl" />
//               <div className="h-8 w-3/5 bg-gray-700 rounded" />
//             </div>

//             <div className="aspect-video bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl animate-shimmer" />

//             <div className="space-y-5">
//               <div className="h-9 bg-gray-800 rounded w-3/4 animate-shimmer" />
//               <div className="h-5 bg-gray-700 rounded w-full" />
//               <div className="h-5 bg-gray-700 rounded w-5/6" />
//               <div className="h-5 bg-gray-700 rounded w-4/5" />
//               <div className="h-5 bg-gray-700 rounded w-3/4" />
//             </div>

//             <div className="h-16 w-80 bg-gray-800 rounded-xl" />

//             <div className="h-44 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl animate-shimmer" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ──────────────────────────────────────────────
//    Fonction pour extraire les headings et leur assigner un ID
// ─────────────────────────────────────────────── */
// function extractHeadings(html: string): Heading[] {
//   const parser = new DOMParser();
//   const doc = parser.parseFromString(html, 'text/html');
//   const headings: Heading[] = [];

//   doc.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach((el) => {
//     let id = el.id;
//     if (!id) {
//       const text = el.textContent?.trim() || '';
//       id = text
//         .toLowerCase()
//         .replace(/[^a-z0-9]+/g, '-')
//         .replace(/(^-|-$)/g, '');
//       el.id = id;
//     }

//     headings.push({
//       id,
//       text: el.textContent?.trim() || 'Section sans titre',
//       level: Number(el.tagName.replace('H', '')),
//     });
//   });

//   return headings;
// }



// resources/js/Pages/Lessons/LessonShow.tsx

import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState, useRef } from 'react';
import {
  FiArrowLeft,
  FiClock,
  FiEye,
  FiFileText,
  FiArrowRight,
  FiList,
  FiChevronRight,
  FiCheckCircle,
} from 'react-icons/fi';
import Navbar from '@/components/NavBar';
import './lesson.css';
import ScrollBar from '@/components/ScrollBar';
interface Course {
  title: string;
  slug: string;
}

interface Lesson {
  id: number;
  title: string;
  content: string;
  views: number;
  video_url?: string;
  pdf_path?: string;
  reading_time?: number | string;
  type: string;
}

interface Heading {
  id: string;
  text: string;
  level: number;
}

interface Props {
  course: Course;
  lesson: Lesson;
}

export default function LessonShow() {
  const { course, lesson } = usePage<Props>().props;

  const [isLoading, setIsLoading] = useState(true);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [processedContent, setProcessedContent] = useState<string>('');
  const contentRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);


  const addCopyButtons = () => {
    const blocks = document.querySelectorAll('.content pre');

    blocks.forEach((block) => {
      if (block.querySelector('.copy-btn')) return;

      block.style.position = "relative";

      const button = document.createElement('button');
      button.className = 'copy-btn';
      button.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      `;

      button.style.position = "absolute";
      button.style.top = "8px";
      button.style.right = "8px";
      button.style.background = "transparent";
      button.style.border = "none";
      button.style.cursor = "pointer";
      button.style.color = "#9ca3af";

      button.onclick = async () => {
        const code =
          block.querySelector('code')?.textContent || block.textContent || '';

        await navigator.clipboard.writeText(code.trim());

        // Icône check temporaire
        button.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;

        setTimeout(() => {
          button.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          `;
        }, 1500);
      };

      block.appendChild(button);
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      addCopyButtons();
    }, 200);

    return () => clearTimeout(timeout);
  }, []);



  useEffect(() => {
    if (!lesson.content) {
      setProcessedContent('<p class="text-gray-500 italic">Aucun contenu disponible.</p>');
      setIsLoading(false);
      return;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(lesson.content, 'text/html');

    const headingElements = doc.querySelectorAll('h1, h2, h3, h4, h5, h6');
    const tempHeadings: Heading[] = [];

    headingElements.forEach((el) => {
      let id = el.id;
      if (!id) {
        const text = el.textContent?.trim() || '';
        id = text
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '');
        el.id = id;
      }

      tempHeadings.push({
        id,
        text: el.textContent?.trim() || 'Section sans titre',
        level: Number(el.tagName.replace('H', '')),
      });
    });

    setHeadings(tempHeadings);
    setProcessedContent(doc.body.innerHTML);
    setIsLoading(false);
  }, [lesson.content]);

  // 2. Observer les headings pour highlight
  useEffect(() => {
    if (headings.length === 0 || !contentRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-120px 0px -50% 0px',
        threshold: 0.1,
      }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [headings]);

  if (isLoading) {
    return <LessonSkeleton />;
  }

  const duration = lesson.reading_time
    ? `${lesson.reading_time} min`
    : '—';



  return (
    <>
      <Head title={`${lesson.title} - ${course.title}`} />

      <div className="min-h-screen bg-[#030313] text-gray-100 flex">
        {/* Sommaire fixe à gauche – uniquement sur desktop */}
        <aside
          className="
            hidden lg:block fixed left-0 top-16 bottom-0 w-80 
            bg-gradient-to-b from-[#0a0f1f] to-[#030313] 
            border-r border-white/5 shadow-2xl shadow-black/30 
            overflow-y-auto z-40
          "
        >
          <div className="sticky top-0 p-6 bg-[#0a0f1f]/95 backdrop-blur-md border-b border-white/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 bg-indigo-600/20 rounded-lg">
                <FiList className="h-5 w-5 text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold text-white">Plan de la leçon</h3>
            </div>
          </div>

          <nav className="px-4 pb-10 space-y-1">
            {headings.length === 0 ? (
              <div className="text-center py-12 text-gray-500 italic text-sm px-4">
                Aucun titre détecté dans le contenu
              </div>
            ) : (
              headings.map((h) => (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(h.id)?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                  className={`
                    flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm transition-all duration-200
                    ${activeId === h.id
                      ? 'bg-indigo-900/40 text-indigo-100 border-l-4 border-indigo-500 font-medium shadow-sm'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }
                    ${h.level === 1 ? 'pl-4' : h.level === 2 ? 'pl-9' : 'pl-14'}
                  `}
                >
                  {h.level > 1 && (
                    <FiChevronRight
                      className={`h-3.5 w-3.5 flex-shrink-0 ${activeId === h.id ? 'text-indigo-400' : 'text-gray-600'
                        }`}
                    />
                  )}
                  <span className="line-clamp-1">{h.text}</span>
                </a>
              ))
            )}
          </nav>
        </aside>

        {/* Contenu principal */}
        <main className="flex-1 lg:ml-80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-10 lg:py-16">
            {/* En-tête */}
            <div className="mb-12 lg:mb-16">
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="px-4 py-1.5 text-xs font-semibold bg-indigo-900/40 text-indigo-300 rounded-full">
                  {/* {lesson.type.toUpperCase()} */}
                </span>

                {duration !== '—' && (
                  <span className="flex items-center gap-2 text-sm text-gray-400 bg-[#080E1F]/60 px-4 py-1.5 rounded-full">
                    <FiClock className="h-4 w-4" />
                    {duration}
                  </span>
                )}

                <span className="flex items-center gap-2 text-sm text-gray-400 bg-[#080E1F]/60 px-4 py-1.5 rounded-full">
                  <FiEye className="h-4 w-4" />
                  {lesson.views} vues
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold leading-tight text-white mb-6">
                {lesson.title}
              </h1>

              {lesson.video_url && (
                <div className="mt-8 mb-12 rounded-2xl overflow-hidden border border-white/8 shadow-2xl shadow-black/50">
                  <div className="aspect-video bg-black">
                    <iframe
                      src={lesson.video_url}
                      title={lesson.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  </div>
                </div>
              )}
            </div>


            <ScrollBar />
            <div
              ref={contentRef}
              className="
               content
              "
              dangerouslySetInnerHTML={{ __html: processedContent || lesson.content }}
            />

            {/* PDF */}
            {lesson.pdf_path && (
              <div className="mb-16">
                <a
                  href={lesson.pdf_path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-3 px-7 py-4
                    bg-gradient-to-r from-indigo-600/20 to-indigo-800/20
                    hover:from-indigo-600/40 hover:to-indigo-800/40
                    border border-indigo-600/30 hover:border-indigo-500/50
                    rounded-xl text-indigo-200 hover:text-white
                    transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-indigo-900/30
                  "
                >
                  <FiFileText className="h-5 w-5" />
                  Télécharger le support PDF
                </a>
              </div>
            )}

            {/* Carte suivante */}
            <div className="mt-20 mb-12">
              <div className="rounded-2xl border border-indigo-900/40 bg-gradient-to-br from-[#080E1F] to-[#030313] p-7 lg:p-9 shadow-xl shadow-indigo-950/20 hover:shadow-indigo-900/40 transition-all duration-500">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div>
                    <div className="text-sm font-semibold text-indigo-400 mb-3 flex items-center gap-2">
                      <FiArrowRight className="h-5 w-5" />
                      <span>Prochaine étape</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Continuer votre apprentissage</h3>
                    <p className="text-gray-300">
                      Passez à la leçon suivante ou terminez ce module quand vous êtes prêt.
                    </p>
                  </div>

                  <Link
                    href={`/courses/${course.slug}`}
                    className="
                      inline-flex items-center gap-3 px-8 py-4
                      bg-gradient-to-r from-indigo-600 to-purple-600
                      hover:from-indigo-500 hover:to-purple-500
                      rounded-xl font-semibold text-white
                      transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-indigo-700/30
                    "
                  >
                    Continuer
                    <FiArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

/* ──────────────────────────────────────────────
   Skeleton
─────────────────────────────────────────────── */
function LessonSkeleton() {
  return (
    <div className="min-h-screen bg-[#030313]">
      <div className="h-16 bg-[#030313] border-b border-white/5 animate-pulse" />

      <div className="flex">
        {/* Sommaire skeleton */}
        <div className="hidden lg:block w-80 bg-gradient-to-b from-[#080E1F]/80 to-[#030313]/80 animate-pulse">
          <div className="p-6 space-y-6">
            <div className="h-6 bg-gray-700/60 rounded w-2/5" />
            {Array(10).fill(0).map((_, i) => (
              <div key={i} className="h-9 bg-gray-800/50 rounded-lg" />
            ))}
          </div>
        </div>

        {/* Contenu */}
        <div className="flex-1 p-6 lg:p-10">
          <div className="max-w-4xl mx-auto space-y-12 animate-pulse">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-7 w-20 bg-gray-800 rounded-full" />
                <div className="h-7 w-24 bg-gray-800 rounded-full" />
                <div className="h-7 w-28 bg-gray-800 rounded-full" />
              </div>
              <div className="h-14 w-4/5 bg-gray-800 rounded-xl" />
              <div className="h-8 w-3/5 bg-gray-700 rounded" />
            </div>

            <div className="aspect-video bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl animate-shimmer" />

            <div className="space-y-5">
              <div className="h-9 bg-gray-800 rounded w-3/4 animate-shimmer" />
              <div className="h-5 bg-gray-700 rounded w-full" />
              <div className="h-5 bg-gray-700 rounded w-5/6" />
              <div className="h-5 bg-gray-700 rounded w-4/5" />
              <div className="h-5 bg-gray-700 rounded w-3/4" />
            </div>

            <div className="h-16 w-80 bg-gray-800 rounded-xl" />

            <div className="h-44 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 rounded-2xl animate-shimmer" />
          </div>
        </div>
      </div>
    </div>
  );
}