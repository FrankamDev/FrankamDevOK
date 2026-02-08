import{c as g,u as h,j as e,L as u}from"./app-BkrTc1s9.js";import{N as b}from"./NavBar-BU7_dRRT.js";import"./app-CUS06zFl.js";import"./chevron-down-BOP-aJO2.js";import"./createLucideIcon-B5OW3Pep.js";import"./log-out-CyVOJ91d.js";import"./x-ic2wmUSN.js";const D=s=>{const t=g.c(10),{className:x}=s,p=x===void 0?"":x,{posts:m}=h().props;let n;t[0]===Symbol.for("react.memo_cache_sentinel")?(n=e.jsx(b,{}),t[0]=n):n=t[0];let l;t[1]===Symbol.for("react.memo_cache_sentinel")?(l=e.jsxs("div",{className:"absolute inset-0 pointer-events-none",children:[e.jsx("div",{className:"absolute -top-32 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-indigo-600/8 rounded-full blur-3xl opacity-40 animate-pulse-slow"}),e.jsx("div",{className:"absolute -bottom-40 right-1/3 w-96 h-96 bg-purple-600/8 rounded-full blur-3xl opacity-30 animate-pulse-slow delay-1500"})]}),t[1]=l):l=t[1];let r;t[2]===Symbol.for("react.memo_cache_sentinel")?(r=e.jsxs("div",{className:"relative inline-flex items-center gap-5 mb-6 md:mb-10",children:[e.jsx("div",{className:"h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"}),e.jsx("span",{className:`
                  relative px-6 py-2 text-xs md:text-sm font-semibold uppercase tracking-wider
                  text-indigo-300 bg-indigo-950/50 border border-indigo-500/30 rounded-full
                  backdrop-blur-md shadow-sm
                `,children:"Derniers articles"}),e.jsx("div",{className:"h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"})]}),t[2]=r):r=t[2];let i;t[3]===Symbol.for("react.memo_cache_sentinel")?(i=e.jsx("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8 pt-8 pb-16 md:pb-20 text-center",children:[l,r,e.jsxs("h1",{className:`
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                font-extrabold tracking-tight
                bg-gradient-to-r from-white via-indigo-200 to-purple-200 bg-clip-text text-transparent
              `,children:["Blog",e.jsxs("span",{className:"text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400",children:[" ","FrankamDev"]})]}),e.jsx("p",{className:"mt-6 text-base md:text-lg lg:text-xl text-slate-300/90 max-w-3xl mx-auto font-light leading-relaxed",children:"Tutoriels avancés • Bonnes pratiques • Retours d’expérience concrets • Technologies modernes 2025–2026"})]})}),t[3]=i):i=t[3];let o;t[4]===Symbol.for("react.memo_cache_sentinel")?(o=e.jsx("div",{className:"h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent my-10 md:my-16"}),t[4]=o):o=t[4];const c=`
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8
              ${p}
            `;let a;t[5]!==m?(a=m.map(f),t[5]=m,t[6]=a):a=t[6];let d;return t[7]!==c||t[8]!==a?(d=e.jsxs(e.Fragment,{children:[n,e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950/5 to-purple-950/5 pb-20 pt-6 md:pt-10",children:[i,e.jsxs("div",{className:"mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",children:[o,e.jsx("div",{className:c,children:a})]})]})]}),t[7]=c,t[8]=a,t[9]=d):d=t[9],d};function f(s){return e.jsxs(u,{href:`/blog/${s.slug}`,className:`
                  group relative
                  flex flex-col overflow-hidden
                  rounded-2xl bg-slate-900/60 backdrop-blur-md
                  border border-slate-800/60
                  shadow-xl shadow-black/30
                  transition-all duration-400
                  hover:border-indigo-700/60
                  hover:shadow-indigo-900/25
                  hover:-translate-y-1.5
                  hover:scale-[1.015]
                `,children:[e.jsxs("div",{className:"relative aspect-[16/9] overflow-hidden bg-slate-950",children:[e.jsx("img",{src:`/storage/${s.featured_image}`,alt:s.title,className:`
                      h-full w-full object-cover
                      transition-transform duration-700
                      group-hover:scale-110
                    `,loading:"lazy"}),e.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent/20"}),e.jsx("div",{className:"absolute bottom-4 left-4 z-10",children:e.jsxs("span",{className:`
                        inline-flex items-center gap-1.5 px-3 py-1
                        text-xs font-medium text-slate-200
                        bg-slate-900/80 backdrop-blur-sm
                        border border-slate-700/70 rounded-full
                        shadow-sm
                      `,children:[e.jsx("svg",{className:"w-3.5 h-3.5",fill:"currentColor",viewBox:"0 0 20 20",children:e.jsx("path",{d:"M10 2a8 8 0 100 16 8 8 0 000-16zm1 11H9V9h2v4z"})}),s.reading_time||"?"," min"]})})]}),e.jsxs("div",{className:"flex flex-col flex-1 p-5 md:p-6",children:[e.jsx("h3",{className:`
                      text-xl md:text-2xl font-semibold text-white
                      leading-tight line-clamp-2
                      group-hover:text-indigo-300 transition-colors duration-300
                    `,children:s.title}),e.jsx("p",{className:"mt-3 text-sm md:text-base text-slate-400/90 line-clamp-3 leading-relaxed flex-1",children:s.excerpt||(s.content?s.content.substring(0,160)+"...":"Article en cours de rédaction...")}),e.jsxs("div",{className:"mt-6 pt-5 border-t border-slate-800/50 flex items-center justify-between text-sm",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`
                          h-9 w-9 rounded-full
                          bg-gradient-to-br from-indigo-600 to-purple-600
                          flex items-center justify-center
                          text-white font-bold text-sm shadow-md
                        `,children:"FD"}),e.jsxs("div",{children:[e.jsx("p",{className:"font-medium text-slate-200",children:"FrankamDev"}),e.jsx("p",{className:"text-xs text-slate-500",children:s.created_at?new Date(s.created_at).toLocaleDateString("fr-FR",{month:"short",year:"numeric"}):"2025"})]})]}),e.jsx("span",{className:"text-indigo-400/80 group-hover:text-indigo-300 transition-colors",children:"Lire →"})]})]}),e.jsx("div",{className:`
                    pointer-events-none absolute inset-0
                    bg-gradient-to-br from-indigo-600/5 via-transparent to-purple-600/5
                    opacity-0 group-hover:opacity-100 transition-opacity duration-700
                  `})]},s.id)}export{D as default};
