import{c as l,j as t}from"./app-zIi57-ba.js";/* empty css            */const s={center:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",orbit1:[{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",alt:"JavaScript"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",alt:"Vue.js"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg",alt:"Photoshop"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/digitalocean/digitalocean-plain.svg",alt:"DigitalOcean"}],orbit2:[{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",alt:"HTML5"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",alt:"CSS3"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",alt:"PHP"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",alt:"WordPress"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-plain.svg",alt:"Laravel"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",alt:"Git"}],orbit3:[{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg",alt:"Illustrator"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/indesign/indesign-plain.svg",alt:"InDesign"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",alt:"Heroku"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",alt:"Jira"},{src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",alt:"GitHub"}]},c=`
@keyframes orbit1 {
  from { transform: rotate(0deg) translateX(8rem) rotate(0deg); } /* rayon plus petit */
  to { transform: rotate(360deg) translateX(8rem) rotate(-360deg); }
}

@keyframes orbit2 {
  from { transform: rotate(0deg) translateX(12rem) rotate(0deg); } /* rayon moyen */
  to { transform: rotate(360deg) translateX(12rem) rotate(-360deg); }
}

@keyframes orbit3 {
  from { transform: rotate(0deg) translateX(16rem) rotate(0deg); } /* rayon plus grand */
  to { transform: rotate(360deg) translateX(16rem) rotate(-360deg); }
}

/* Version responsive pour les petits écrans */
@media (max-width: 640px) {
  @keyframes orbit1 {
    from { transform: rotate(0deg) translateX(5rem) rotate(0deg); }
    to { transform: rotate(360deg) translateX(5rem) rotate(-360deg); }
  }
  @keyframes orbit2 {
    from { transform: rotate(0deg) translateX(8rem) rotate(0deg); }
    to { transform: rotate(360deg) translateX(8rem) rotate(-360deg); }
  }
  @keyframes orbit3 {
    from { transform: rotate(0deg) translateX(11rem) rotate(0deg); }
    to { transform: rotate(360deg) translateX(11rem) rotate(-360deg); }
  }
}
`,p=()=>{const e=l.c(5);let r;e[0]===Symbol.for("react.memo_cache_sentinel")?(r=t.jsx("style",{children:c}),e[0]=r):r=e[0];let a;e[1]===Symbol.for("react.memo_cache_sentinel")?(a=t.jsx("div",{className:"absolute inset-0 rounded-full border border-blue-600/30 opacity-70"}),e[1]=a):a=e[1];let i;e[2]===Symbol.for("react.memo_cache_sentinel")?(i=t.jsx("div",{className:"absolute inset-0 rounded-full border border-blue-600/30 opacity-70",style:{transform:"scale(0.75)"}}),e[2]=i):i=e[2];let o;e[3]===Symbol.for("react.memo_cache_sentinel")?(o=t.jsx("div",{className:"absolute inset-0 rounded-full border border-blue-600/30 opacity-70",style:{transform:"scale(0.5)"}}),e[3]=o):o=e[3];let n;return e[4]===Symbol.for("react.memo_cache_sentinel")?(n=t.jsxs("div",{className:"relative flex min-h-screen items-center justify-center overflow-hidden bg-[#030215]",children:[r,t.jsxs("div",{className:"relative flex h-80 w-80 items-center justify-center sm:h-[500px] sm:w-[500px]",children:[a,i,o,t.jsx("div",{className:"absolute z-20",children:t.jsx("img",{src:s.center,alt:"Center Logo",className:"h-10 w-10 rounded-full border border-blue-500/50 bg-gray-800 p-1 sm:h-14 sm:w-14"})}),s.orbit1.map(d),s.orbit2.map(m),s.orbit3.map(g)]})]}),e[4]=n):n=e[4],n};function d(e,r){return t.jsx("div",{className:"absolute z-20",style:{animation:"orbit1 15s linear infinite",animationDelay:`${r*(15/s.orbit1.length)}s`,left:"50%",top:"50%",marginLeft:"-1.25rem",marginTop:"-1.25rem"},children:t.jsx("img",{src:e.src,alt:e.alt,className:"h-10 w-10 rounded-full border border-blue-700/50 bg-gray-800 p-1 shadow-lg sm:h-10 sm:w-10"})},e.alt)}function m(e,r){return t.jsx("div",{className:"absolute z-20",style:{animation:"orbit2 25s linear infinite",animationDelay:`${r*(25/s.orbit2.length)}s`,left:"50%",top:"50%",marginLeft:"-1.5rem",marginTop:"-1.5rem"},children:t.jsx("img",{src:e.src,alt:e.alt,className:"h-12 w-12 rounded-full border border-blue-700/50 bg-gray-800 p-1 shadow-lg sm:h-12 sm:w-12"})},e.alt)}function g(e,r){return t.jsx("div",{className:"absolute z-20",style:{animation:"orbit3 35s linear infinite",animationDelay:`${r*(35/s.orbit3.length)}s`,left:"50%",top:"50%",marginLeft:"-1.75rem",marginTop:"-1.75rem"},children:t.jsx("img",{src:e.src,alt:e.alt,className:"h-14 w-14 rounded-full border border-blue-700/50 bg-gray-800 p-1 shadow-lg sm:h-14 sm:w-14"})},e.alt)}export{p as default};
