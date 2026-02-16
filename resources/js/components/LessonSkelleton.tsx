export default function LessonSkeleton() {
  return (
    <div className="min-h-screen bg-[#030313] flex overflow-hidden">
      {/* Sidebar Skeleton (Visible uniquement sur Desktop) */}
      <aside className="hidden lg:block w-80 border-r border-white/5 bg-[#06061a] p-8 space-y-8">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white/5 rounded-lg animate-pulse" />
          <div className="h-4 w-24 bg-white/5 rounded animate-pulse" />
        </div>

        <div className="space-y-4 mt-10">
          {[1, 2, 3, 4, 5, 6, 7].map((i) => (
            <div
              key={i}
              className="h-4 bg-white/5 rounded animate-pulse"
              style={{ width: `${Math.floor(Math.random() * (90 - 60 + 1) + 60)}%`, marginLeft: i % 3 === 0 ? '1rem' : '0' }}
            />
          ))}
        </div>
      </aside>

      {/* Main Content Skeleton */}
      <main className="flex-1">
        <div className="max-w-4xl mx-auto w-full px-5 sm:px-8 lg:px-12 py-12 lg:py-20">

          {/* Header Skeleton */}
          <div className="space-y-6 mb-12">
            <div className="flex gap-4">
              <div className="h-6 w-20 bg-white/5 rounded-full animate-pulse" />
              <div className="h-6 w-24 bg-white/5 rounded-full animate-pulse" />
            </div>

            <div className="space-y-3">
              <div className="h-10 lg:h-12 w-full bg-white/5 rounded-xl animate-pulse" />
              <div className="h-10 lg:h-12 w-3/4 bg-white/5 rounded-xl animate-pulse" />
            </div>
          </div>

          {/* Video Placeholder Skeleton */}
          <div className="aspect-video w-full bg-white/5 rounded-2xl mb-12 animate-pulse border border-white/5" />

          {/* Text Content Skeleton */}
          <div className="space-y-8">
            <div className="space-y-3">
              <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-[90%] bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-[40%] bg-white/5 rounded animate-pulse" />
            </div>

            <div className="h-8 w-1/3 bg-white/5 rounded-lg animate-pulse mt-12" />

            <div className="space-y-3">
              <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-[85%] bg-white/5 rounded animate-pulse" />
            </div>

            {/* Code Block Skeleton */}
            <div className="h-40 w-full bg-[#01010c] rounded-xl border border-white/5 animate-pulse" />
          </div>

          {/* Next Step Card Skeleton */}
          <div className="mt-20 p-8 rounded-3xl border border-white/5 bg-white/[0.02] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-3 w-full md:w-1/2">
              <div className="h-6 w-40 bg-white/5 rounded animate-pulse" />
              <div className="h-4 w-full bg-white/5 rounded animate-pulse" />
            </div>
            <div className="h-14 w-40 bg-white/10 rounded-xl animate-pulse flex-shrink-0" />
          </div>

        </div>
      </main>
    </div>
  );
}