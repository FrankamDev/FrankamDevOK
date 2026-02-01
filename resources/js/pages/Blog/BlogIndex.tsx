import { usePage, Link } from "@inertiajs/react";
import NavBar from "@/components/NavBar";

interface BlogIndexProps {
  className?: string;
}

const BlogIndex: React.FC<BlogIndexProps> = ({ className = '' }) => {
  const { posts }: any = usePage().props;

  return (
    <>
      <NavBar />

      <div className="min-h-screen bg-gradient-to-br mt-24 from-slate-950 via-indigo-950/10 to-purple-950/10 pb-16 pt-6">
        {/* ==================== HEADER ==================== */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8 pt-8 pb-16 md:pb-20 text-center overflow-hidden">
            {/* Effets de fond glow subtil */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
              <div className="absolute -bottom-32 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl opacity-20 animate-pulse-slow delay-1000" />
            </div>

            {/* Ligne décorative + badge "Derniers articles" */}
            <div className="relative inline-flex items-center gap-4 mb-6 md:mb-8">
              <div className="h-[1px] w-12 md:w-16 bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />

              <div
                className="
                  relative px-5 py-1.5 text-xs md:text-sm font-semibold uppercase tracking-widest
                  text-indigo-300/90 bg-indigo-950/40 border border-indigo-500/20 rounded-full
                  backdrop-blur-sm shadow-sm
                "
              >
                <span className="relative z-10">Derniers articles</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 opacity-50" />
              </div>

              <div className="h-[1px] w-12 md:w-16 bg-gradient-to-r from-transparent via-indigo-500/60 to-transparent" />
            </div>

            {/* Titre principal avec gradient + glow */}
            <h1
              className="
                relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                font-extrabold tracking-tight leading-none
                bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent
                pb-1 md:pb-2
              "
            >
              <span className="relative inline-block">
                Blog
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                  {" "}
                  de
                </span>
                <br className="sm:hidden" />
                FrankamDev
                {/* Glow effet */}
                <span
                  className="
                    absolute -inset-1 -z-10 blur-xl bg-gradient-to-r from-indigo-500/30 via-purple-500/20 to-fuchsia-500/10
                    opacity-70 rounded-full
                  "
                />
              </span>
            </h1>

            {/* Description */}
            <p
              className="
                relative mx-auto mt-6 md:mt-8 max-w-2xl lg:max-w-3xl
                text-base md:text-lg lg:text-xl
                text-slate-300/90 leading-relaxed md:leading-relaxed
                font-light
              "
            >
              Tutoriels pointus • Bonnes pratiques • Architecture moderne •{" "}
              <span className="text-indigo-300/80 font-medium">
                Retours d’expérience réels
              </span>
              <br className="hidden sm:block" />
              Développement web, design systems, outils & technologies 2025–2026
            </p>

            {/* Petite ligne finale décorative */}
            <div className="mt-10 md:mt-12 flex justify-center">
              <div className="h-1 w-16 md:w-24 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-fuchsia-500 opacity-60" />
            </div>
          </div>
        </div>

        {/* ==================== SÉPARATION ==================== */}
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent mb-12 md:mb-16" />
        </div>

        {/* ==================== GRILLE DES ARTICLES ==================== */}
        <div
          className={`
            mx-auto max-w-7xl px-4 sm:px-6 lg:px-8
            grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8
            ${className}
          `}
        >
          {posts.map((post: any) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="
                group relative
                flex flex-col overflow-hidden rounded-2xl
                bg-slate-900/60 backdrop-blur-sm
                border border-slate-800/50
                shadow-xl shadow-black/20
                transition-all duration-300
                hover:shadow-indigo-900/20 hover:-translate-y-1
                cursor-pointer
              "
            >
              {/* Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-950">
                <img
                  src={`/storage/${post.featured_image}`}
                  alt={post.title}
                  className="
                    h-full w-full object-cover
                    transition-transform duration-500
                    group-hover:scale-[1.06]
                  "
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent/30" />

                {/* Badge temps de lecture */}
                <div className="absolute bottom-3 left-3 z-10">
                  <span
                    className="
                      inline-flex items-center rounded-full
                      bg-slate-900/80 px-3 py-1 text-xs font-medium text-slate-300
                      backdrop-blur-sm border border-slate-700/60
                    "
                  >
                    {post.reading_time || "?"} min
                  </span>
                </div>
              </div>

              {/* Contenu texte */}
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3
                  className="
                    mb-3 text-xl font-semibold leading-tight text-white
                    line-clamp-2 group-hover:text-indigo-300 transition-colors
                  "
                >
                  {post.title}
                </h3>

                <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400 line-clamp-3">
                  {post.excerpt ||
                    (post.content ? post.content.substring(0, 140) + "..." : "Article en développement...")}
                </p>

                <div className="mt-auto flex items-center gap-3 border-t border-slate-800/50 pt-4">
                  <div
                    className="
                      h-9 w-9 shrink-0 rounded-full
                      bg-gradient-to-br from-indigo-600 to-purple-600
                      flex items-center justify-center text-white font-bold text-sm shadow-md
                    "
                  >
                    FD
                  </div>

                  <div>
                    <p className="text-sm font-medium text-white">FrankamDev</p>
                    <p className="text-xs text-slate-500">Lire l'article →</p>
                  </div>
                </div>
              </div>

              {/* Overlay hover subtil */}
              <div
                className="
                  pointer-events-none absolute inset-0
                  bg-gradient-to-t from-indigo-600/5 via-transparent to-transparent
                  opacity-0 group-hover:opacity-100 transition-opacity duration-500
                "
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogIndex;

