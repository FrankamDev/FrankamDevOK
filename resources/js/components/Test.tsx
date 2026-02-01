// components/EnterpriseApiCardV2.tsx
import React from 'react';

interface EnterpriseApiCardProps {
  className?: string;
}

const EnterpriseApiCard: React.FC<EnterpriseApiCardProps> = ({ className = '' }) => {
  return (
    <div
      className={`
        group relative
        w-full max-w-[400px] overflow-hidden rounded-3xl
        bg-gradient-to-b from-slate-950 to-indigo-950/40
        border border-slate-800/50
        shadow-2xl shadow-black/50
        transition-all duration-400 hover:shadow-indigo-900/30 hover:scale-[1.015]
        ${className}
      `}
    >
      {/* Hero / Image section – full width top */}
      <div className="relative h-56 overflow-hidden">
        {/* Background gradient + subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/80 via-purple-900/70 to-fuchsia-900/60" />

        {/* Optional subtle grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full bg-[linear-gradient(to_right,#80808015_1px,transparent_1px),linear-gradient(to_bottom,#80808015_1px,transparent_1px)] bg-[size:32px_32px]" />
        </div>

        {/* Main visual content – centered logo + glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-[-40px] rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-fuchsia-500/30 blur-3xl opacity-70 group-hover:opacity-90 transition-opacity duration-700" />

            {/* Main icon / logo block with nice curves */}
            <div className="relative w-40 h-40 rounded-[3.5rem] bg-gradient-to-br from-indigo-600 via-purple-600 to-fuchsia-600 p-1 shadow-2xl shadow-purple-900/60">
              <div className="w-full h-full rounded-[3.25rem] bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800/90 flex items-center justify-center border border-indigo-400/30">
                <div className="flex flex-col items-center gap-1">
                  <span className="text-6xl font-black text-white tracking-tighter drop-shadow-lg">FR</span>
                  <span className="text-xl font-bold text-indigo-300 tracking-widest">press</span>
                </div>
              </div>
            </div>

            {/* Floating API badge – nice curve */}
            <div className="absolute -top-5 -right-5 w-24 h-24">
              <div className="absolute inset-0 rounded-full bg-emerald-500/30 backdrop-blur-xl border border-emerald-400/40 shadow-lg shadow-emerald-900/50 flex items-center justify-center rotate-12 group-hover:rotate-6 transition-transform duration-500">
                <span className="text-white font-black text-xl tracking-wider drop-shadow">API</span>
              </div>
            </div>

            {/* Small JS badge */}
            <div className="absolute -bottom-4 -left-6 w-16 h-16 rounded-2xl bg-sky-600/40 backdrop-blur-lg border border-sky-400/30 shadow-xl shadow-sky-900/50 flex items-center justify-center rotate-[-10deg] group-hover:rotate-[-4deg] transition-transform duration-500">
              <span className="text-white font-black text-2xl">JS</span>
            </div>
          </div>
        </div>

        {/* Curved bottom edge */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-950 to-transparent" />
      </div>

      {/* Content section */}
      <div className="relative px-7 pt-6 pb-9">
        <h3 className="text-2xl font-bold text-white tracking-tight mb-3 leading-tight">
          How To Build APIs
          <br />
          with <span className="text-indigo-400">ExpressJS</span>
        </h3>

        <p className="text-slate-400 font-medium mb-6 text-[15px] leading-relaxed">
          Build APIs with Express.js using best practices for structure, performance, security, and maintainability.
        </p>

        <div className="flex items-center gap-3 mb-6">
          <span className="inline-flex px-4 py-1.5 bg-slate-800/70 text-slate-300 text-sm font-medium rounded-full border border-slate-700/60 backdrop-blur-sm">
            20 mins read
          </span>
        </div>

        {/* Bottom part */}
        <div className="pt-5 border-t border-slate-800/50">
          <h4 className="text-lg font-semibold text-indigo-300 mb-2 leading-snug">
            How To Build Enterprise-Grade...
          </h4>
          <p className="text-slate-400 text-sm mb-4">
            Master the art of building scalable, production-ready APIs
          </p>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-fuchsia-600 flex items-center justify-center text-white font-bold text-base shadow-md">
              A
            </div>
            <div>
              <p className="text-white font-medium text-base">Adrien Js | Mastery</p>
              <p className="text-slate-500 text-sm mt-0.5">Read now →</p>
            </div>
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/10 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
    </div>
  );
};

export default EnterpriseApiCard;