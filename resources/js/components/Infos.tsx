import React from 'react';
import './infos.css';
const Infos = () => {
  return (
    // <div className="author-card bg-gradient-to-r from-slate-900/80 to-slate-950/80 backdrop-blur-lg rounded-[12px] border-t-[30px] border-slate-800/60 shadow-2xl shadow-black/40 p-8 md:p-10 lg:p-12">
    //   <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10">
    //     {/* Photo */}
    //     <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-indigo-600/40 shadow-xl shrink-0">
    //       <img
    //         src="/me.png" // ← remplace par ta vraie photo
    //         alt="FrankamDev"
    //         className="w-full h-full object-cover"
    //       />
    //     </div>

    //     {/* Infos */}
    //     <div className="author-card flex-1 text-center md:text-left">
    //       <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
    //         FrankamDev
    //       </h3>
    //       <p className="text-lg md:text-xl text-indigo-300 font-medium mb-4">
    //         DevOps Engineer & Full-Stack Developer
    //       </p>

    //       <p className="text-slate-300 leading-relaxed mb-6 max-w-3xl">
    //         Passionné par l’automatisation, les infrastructures cloud-native, le développement
    //         performant et les architectures modernes. J’écris ici des tutoriels, retours
    //         d’expérience et bonnes pratiques autour de Laravel, React, Tailwind, Docker,
    //         Kubernetes, CI/CD et bien plus.
    //       </p>

    //       <div className="flex flex-wrap justify-center md:justify-start gap-4">
    //         <a
    //           href="https://github.com/FrankamDev"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-full text-white transition"
    //         >
    //           <span>GitHub</span>
    //         </a>
    //         <a
    //           href="https://twitter.com/frankamdev"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-full text-white transition"
    //         >
    //           <span>Twitter / X</span>
    //         </a>
    //         <a
    //           href="https://linkedin.com/in/frank-kamgang"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 rounded-full text-white transition"
    //         >
    //           <span>LinkedIn</span>
    //         </a>
    //       </div>
    //     </div>


    //   </div>
    // </div>

    <div className="author-card">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-0">
        {/* Photo */}
        <div className="shrink-0">
          <img
            src="/me.png"
            alt="FrankamDev"
            className="rounded-full"
          />
        </div>

        {/* Contenu */}
        <div className="text-center sm:text-left">
          <h3>FrankamDev</h3>
          <p className="job-title">DevOps Engineer & Full-Stack Developer</p>
          <p className="description">
            Passionné par l’automatisation, le cloud-native, Laravel, React, Tailwind, Docker & CI/CD.
          </p>

          <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-4 social-links">
            <a href="https://github.com/FrankamDev" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://twitter.com/frankamdev" target="_blank" rel="noopener noreferrer">
              X / Twitter
            </a>
            <a href="https://linkedin.com/in/frank-kamgang" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infos;