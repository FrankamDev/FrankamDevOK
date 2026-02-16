import './lesson.css';
import { Head, Link, usePage } from '@inertiajs/react';
import { useEffect, useState, useRef } from 'react';
import {
  FiClock,
  FiEye,
  FiFileText,
  FiArrowRight,
  FiList,
  FiChevronRight,
} from 'react-icons/fi';
import LessonSkeleton from '@/components/LessonSkelleton';
import ScrollBar from '@/components/ScrollBar';

// Types restants identiques...
interface Heading { id: string; text: string; level: number; }

export default function LessonShow() {
  const { course, lesson } = usePage<any>().props;
  const [isLoading, setIsLoading] = useState(true);
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>('');
  const [processedContent, setProcessedContent] = useState<string>('');
  const contentRef = useRef<HTMLDivElement>(null);

  // Gestion propre du bouton Copier
  useEffect(() => {
    if (isLoading) return;

    const handleCopyClick = async (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest('.copy-btn');
      if (!btn) return;

      const pre = btn.closest('pre');
      const code = pre?.querySelector('code')?.innerText || pre?.innerText || '';

      await navigator.clipboard.writeText(code.trim());

      btn.classList.add('copied');
      const originalInner = btn.innerHTML;
      btn.innerHTML = `<span>Copié !</span>`;

      setTimeout(() => {
        btn.classList.remove('copied');
        btn.innerHTML = originalInner;
      }, 2000);
    };

    const currentContent = contentRef.current;
    currentContent?.addEventListener('click', handleCopyClick);

    // À l'intérieur de ton useEffect qui traite le contenu
    const blocks = currentContent?.querySelectorAll('pre');
    blocks?.forEach((block) => {
      if (block.querySelector('.copy-btn')) return;

      const button = document.createElement('button');
      button.className = 'copy-btn';
      button.setAttribute('type', 'button');

      // Structure : Icône + Texte (optionnel mais pro)
      button.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
    <span>Copier</span>
  `;

      block.appendChild(button);
    });

    return () => currentContent?.removeEventListener('click', handleCopyClick);
  }, [isLoading, processedContent]);

  useEffect(() => {
    if (!lesson.content) {
      setProcessedContent('<p class="text-gray-500 italic">Aucun contenu disponible.</p>');
      setIsLoading(false);
      return;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(lesson.content, 'text/html');
    const headingElements = doc.querySelectorAll('h1, h2, h3, h4');
    const tempHeadings: Heading[] = [];

    headingElements.forEach((el) => {
      const id = el.textContent?.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-') || Math.random().toString(36).substr(2, 9);
      el.id = id;
      tempHeadings.push({
        id,
        text: el.textContent?.trim() || '',
        level: Number(el.tagName.replace('H', '')),
      });
    });

    setProcessedContent(doc.body.innerHTML);
    setHeadings(tempHeadings);
    setIsLoading(false);
  }, [lesson.content]);

  if (isLoading) return <LessonSkeleton />;

  return (
    <>
      <Head title={`${lesson.title}`} />
      <div className="min-h-screen bg-[#030313] text-gray-100 selection:bg-indigo-500/30">

        {/* Sidebar Sommaire */}
        <aside className="hidden lg:block fixed left-0 top-0 bottom-0 w-80 bg-[#06061a] border-r border-white/5 z-40 overflow-y-auto custom-scrollbar">
          <div className="p-8">
            <div className="flex items-center gap-3 mb-8 text-indigo-400">
              <FiList className="text-xl" />
              <span className="font-bold tracking-wide uppercase text-xs">Sommaire</span>
            </div>
            <nav className="space-y-1">
              {headings.map((h) => (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  className={`block py-2 px-3 rounded-lg text-sm transition-all duration-200 ${activeId === h.id ? 'bg-indigo-600/10 text-indigo-400 border-l-2 border-indigo-500' : 'text-gray-500 hover:text-gray-300'
                    } ${h.level === 1 ? 'font-semibold' : h.level === 2 ? 'ml-4' : 'ml-8'}`}
                >
                  {h.text}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="lg:ml-80 min-h-screen flex flex-col">
          <div className="max-w-4xl mx-auto w-full px-5 sm:px-8 lg:px-12 py-12 lg:py-20">

            {/* Header Section */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6 text-sm">
                <span className="bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full font-medium border border-indigo-500/20">
                  {lesson.type || 'Leçon'}
                </span>
                <div className="flex items-center gap-2 text-gray-500">
                  <FiClock /> <span>{lesson.reading_time || 5} min</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <FiEye /> <span>{lesson.views} vues</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
                {lesson.title}
              </h1>

              {lesson.video_url && (
                <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-black shadow-2xl">
                  <iframe src={lesson.video_url} className="absolute inset-0 w-full h-full" allowFullScreen />
                </div>
              )}
            </header>

            <ScrollBar />

            {/* Core Content */}
            <article
              ref={contentRef}
              className="content rich-text-container"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />

            {/* Footer / Next Step */}
            <footer className="mt-20 pt-10 border-t border-white/5">
              {/* Ta carte "Prochaine étape" ici (inchangée mais bien encapsulée) */}
              <div className="bg-gradient-to-br from-[#0a0a20] to-[#030313] border border-white/5 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-bold mb-2">Prêt pour la suite ?</h4>
                  <p className="text-gray-400">Continuez vers le prochain chapitre pour valider vos acquis.</p>
                </div>
                <Link href={`/courses/${course.slug}`} className="bg-indigo-600 hover:bg-indigo-500 px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-2 group">
                  Continuer <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </>
  );
}