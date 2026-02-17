import{c as K,r as W,j as t,L as Z}from"./app-DlZJwFWJ.js";import ee from"./bg-dar_EDUM.js";import{S as te}from"./sparkles--vodsULa.js";import{c as se}from"./createLucideIcon-Becl-UgY.js";import{C as le}from"./chevron-down-BpUDJVe9.js";import{h as ae,n as re}from"./night-owl-sM2kBaxw.js";import"./app-h7XNUXa8.js";const oe=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],ne=se("play",oe),ie={"App.tsx":`import { useState } from "react";
import { Frankamdev } from "@Frankamdev/ai";

function App() {
  const [code, setCode] = useState("");

  const handleAICompletion = async () => {
    const suggestion = await Frankamdev.complete(code);
    setCode(suggestion);
  };

  return (
    <div className="app">
      <CodeEditor 
        onChange={setCode} 
        onAI={handleAICompletion} 
      />
    </div>
  );
}`,"Acceuil.tsx":`import { useState, useEffect } from "react";
import { Frankamdev } from "@frankamdev/fullstack";

export default function Hero() {
  const [isTyping, setIsTyping] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTyping(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleAISuggestion = async () => {
    const suggestion = await Frankamdev.suggest("hero component");
    return suggestion;
  };

  return (
    <section className="hero">
      <h1 className="text-4xl font-bold">
        {isTyping ? "AI-Powered Development" : "Loading..."}
      </h1>
      <button onClick={handleAISuggestion}>
        FrankamDev
      </button>
    </section>
  );
}`,"Navbar.tsx":`import { useState } from "react";
import { Frankamdev } from "@Frankamdev/fullstack";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    const results = await Frankamdev.search(searchQuery);
    return results;
  };

  return (
    <nav className="navbar">
      <div className="nav-brand">
        <h2>Frankamdev AI</h2>
      </div>
      
      <div className="nav-search">
        <input 
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search code..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      
      <button 
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
    </nav>
  );
}`},ce={"App.tsx":{bgColor:"bg-blue-500/20",iconColor:"text-blue-400",textColor:"text-blue-200",contentColor:"text-blue-300",icon:"V/S",title:"Compilation intelligente",content:"Suggestions de code en temps réel alimentées par l'éditeur de code"},"Acceuil.tsx":{bgColor:"bg-purple-500/20",iconColor:"text-purple-400",textColor:"text-purple-200",contentColor:"text-purple-300",icon:"⚡",title:"Une expérience uniquee",content:"Apprendre facilement le code & numerique avec `FrankamDev`"},"Navbar.tsx":{bgColor:"bg-emerald-500/20",iconColor:"text-emerald-400",textColor:"text-emerald-200",contentColor:"text-emerald-300",icon:"🔍",title:"Recherche Intelligente",content:"Recherche intelligente de code dans votre projet"}};function ge(){const e=K.c(59);let f;e[0]===Symbol.for("react.memo_cache_sentinel")?(f={x:0,y:0},e[0]=f):f=e[0];const[X,J]=W.useState(f),[l,D]=W.useState("App.tsx");let g,v;e[1]===Symbol.for("react.memo_cache_sentinel")?(g=()=>{const Y=function(G){J({x:G.clientX,y:G.clientY})};return window.addEventListener("mousemove",Y),()=>window.removeEventListener("mousemove",Y)},v=[],e[1]=g,e[2]=v):(g=e[1],v=e[2]),W.useEffect(g,v);let w;e[3]!==l?(w=ce[l]||{},e[3]=l,e[4]=w):w=e[4];const s=w;let y;e[5]===Symbol.for("react.memo_cache_sentinel")?(y=["#ffffff","#60a5fa","#38bdf8","#a5b4fc"],e[5]=y):y=e[5];let j;e[6]===Symbol.for("react.memo_cache_sentinel")?(j=t.jsx("div",{className:"fixed inset-0 z-0 pointer-events-none",children:t.jsx(ee,{particleColors:y,particleCount:600,particleSpread:25,speed:.08,particleBaseSize:90,moveParticlesOnHover:!0,alphaParticles:!0,disableRotation:!1,pixelRatio:window.devicePixelRatio||1})}),e[6]=j):j=e[6];const L=`radial-gradient(600px circle at ${X.x}px ${X.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`;let a;e[7]!==L?(a=t.jsx("div",{className:"absolute inset-0 opacity-30",style:{background:L}}),e[7]=L,e[8]=a):a=e[8];let N,S;e[9]===Symbol.for("react.memo_cache_sentinel")?(N=t.jsx("div",{className:"absolute top-20 left-4 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"}),S=t.jsx("div",{className:"absolute bottom-20 right-4 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"}),e[9]=N,e[10]=S):(N=e[9],S=e[10]);let k;e[11]===Symbol.for("react.memo_cache_sentinel")?(k=t.jsxs("div",{className:"inline-flex items-center space-x-2 px-3 sm:px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700",children:[t.jsx(te,{className:"w-4 h-4 text-blue-400"}),t.jsx("span",{className:"text-xs sm:text-sm text-blue-300",children:"Apprendre à coder facilement"})]}),e[11]=k):k=e[11];let C,_;e[12]===Symbol.for("react.memo_cache_sentinel")?(C=t.jsxs("h1",{className:"text-5xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold mb-4 sm:mb-6 animate-in slide-in-from-bottom duration-700 delay-100 leading-tight",children:[t.jsxs("span",{className:"bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2",children:["Partez de ",t.jsx("span",{className:"text-green-300",children:"j'veux apprendre à"})]}),t.jsx("span",{className:"bg-gradient-to-b from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent block mb-1 sm:mb-2",children:"j'ai réalisé ça !"}),t.jsx("span",{className:"bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent block mb-1 sm:mb-2"})]}),_=t.jsx("p",{className:"text-md sm:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-in slide-in-from-bottom duration-700 delay-200 leading-relaxed",children:"Accélérez votre flux de développement grâce à la saisie semi-automatique intelligente, aux tests automatisés et au débogage intelligent. Déployez du code prêt pour la production 10 fois plus rapidement."}),e[12]=C,e[13]=_):(C=e[12],_=e[13]);let A;e[14]===Symbol.for("react.memo_cache_sentinel")?(A=t.jsx(Z,{prefetch:!0,href:"/courses",className:"group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-b from-blue-600 to-blue-400 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-102 flex items-center justify-center space-x-2",children:"Commencez à Apprendre"}),e[14]=A):A=e[14];let F;e[15]===Symbol.for("react.memo_cache_sentinel")?(F=t.jsxs("div",{children:[k,C,_,t.jsxs("div",{className:"flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8 sm:mb-12 animate-in slide-in-from-bottom duration-700 delay-300",children:[A,t.jsxs("button",{className:"group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2",children:[t.jsx("div",{className:"p-2 bg-white/10 rounded-full group-hover:bg-white/20 duration-300 transition-colors",children:t.jsx(ne,{className:"w-4 h-4 sm:w-5 sm:h-5 fill-white"})}),t.jsx("span",{children:"Ici La Demo"})]})]})]}),e[15]=F):F=e[15];let I;e[16]===Symbol.for("react.memo_cache_sentinel")?(I=t.jsxs("div",{className:"flex items-center space-x-1 sm:space-x-2",children:[t.jsx("div",{className:"w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"}),t.jsx("div",{className:"w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"}),t.jsx("div",{className:"w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"})]}),e[16]=I):I=e[16];let E;e[17]===Symbol.for("react.memo_cache_sentinel")?(E=t.jsxs("div",{className:"flex items-center justify-between px-3 sm:px-4 py-2 sm:py-3 bg-white/5 backdrop-blur-sm border-b border-white/10",children:[t.jsxs("div",{className:"flex items-center space-x-2",children:[I,t.jsxs("span",{className:"text-xs sm:text-sm text-gray-300",children:["Frankam",t.jsx("span",{className:"text-cyan-200",children:"Dev"})]})]}),t.jsx(le,{className:"w-3 h-3 sm:w-4 sm:h-4 text-gray-400"})]}),e[17]=E):E=e[17];let $;e[18]===Symbol.for("react.memo_cache_sentinel")?($=()=>D("App.tsx"),e[18]=$):$=e[18];const M=`px-3 py-2 backdrop-blur-sm tex-xs sm:text-sm rounded-t-lg border ${l==="App.tsx"?"bg-blue-500/30 text-white border-blue-400/20":"bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"}  transition-all duration-200 whitespace-nowrap`;let r;e[19]!==M?(r=t.jsx("button",{onClick:$,className:M,children:"App.tsx"}),e[19]=M,e[20]=r):r=e[20];let P;e[21]===Symbol.for("react.memo_cache_sentinel")?(P=()=>D("Acceuil.tsx"),e[21]=P):P=e[21];const O=`px-3 py-2 backdrop-blur-sm tex-xs sm:text-sm rounded-t-lg border ${l==="Acceuil.tsx"?"bg-blue-500/30 text-white border-blue-400/20":"bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"}  transition-all duration-200 whitespace-nowrap`;let o;e[22]!==O?(o=t.jsx("button",{onClick:P,className:O,children:"Acceuil.tsx"}),e[22]=O,e[23]=o):o=e[23];let z;e[24]===Symbol.for("react.memo_cache_sentinel")?(z=()=>D("Navbar.tsx"),e[24]=z):z=e[24];const Q=`px-3 py-2 backdrop-blur-sm tex-xs sm:text-sm rounded-t-lg border ${l==="Navbar.tsx"?"bg-blue-500/30 text-white border-blue-400/20":"bg-white/5 text-gray-300 border-white/10 hover:bg-white/10"}  transition-all duration-200 whitespace-nowrap`;let n;e[25]!==Q?(n=t.jsx("button",{onClick:z,className:Q,children:"Navbar.tsx"}),e[25]=Q,e[26]=n):n=e[26];let i;e[27]!==r||e[28]!==o||e[29]!==n?(i=t.jsxs("div",{className:"flex space-x-1 sm:space-x-2 mb-3 sm:mb-4 overflow-x-auto",children:[r,o,n]}),e[27]=r,e[28]=o,e[29]=n,e[30]=i):i=e[30];let R;e[31]===Symbol.for("react.memo_cache_sentinel")?(R={margin:0,borderRadius:"8px",fontSize:"12px",lineHeight:"1.4",height:"100%",border:"1px solid #3c3c3c",wordWrap:"break-word",whiteSpace:"pre-wrap",textAlign:"left"},e[31]=R):R=e[31];const H=ie[l];let c;e[32]!==H?(c=t.jsx("div",{className:"relative overflow-hidden flex-grow",children:t.jsx(ae,{language:"javascript",style:re,customStyle:R,children:H})}),e[32]=H,e[33]=c):c=e[33];let m;e[34]!==i||e[35]!==c?(m=t.jsxs("div",{className:"bg-gradient-to-br from-gray-900/20 to-gray-800/20 backdrop-blur-sm rounded-lg overflow-hidden h-[280px] sm:h-[350px] lg:h-[450px] border border-white/5",children:[E,t.jsxs("div",{className:"p-3 sm:p-4 relative h-full",children:[i,c]})]}),e[34]=i,e[35]=c,e[36]=m):m=e[36];const q=`hidden lg:block absolute bottom-4 right-4 transform translate-x-8 translate-y-8 w-72 ${s.bgColor} backdrop-blur-xl rounded-lg p-4 border border-white/20 shadow-2xl`,B=`w-6 h-6 ${s.iconColor} flex items-center justify-center text-sm font-bold`;let d;e[37]!==s.icon||e[38]!==B?(d=t.jsx("div",{className:B,children:s.icon}),e[37]=s.icon,e[38]=B,e[39]=d):d=e[39];const U=`text-sm font-medium ${s.textColor}`;let x;e[40]!==s.title||e[41]!==U?(x=t.jsx("span",{className:U,children:s.title}),e[40]=s.title,e[41]=U,e[42]=x):x=e[42];let u;e[43]!==d||e[44]!==x?(u=t.jsxs("div",{className:"flex items-center space-x-2 mb-2",children:[d,x]}),e[43]=d,e[44]=x,e[45]=u):u=e[45];const V=`text-sm text-left ${s.contentColor}`;let p;e[46]!==s.content||e[47]!==V?(p=t.jsx("div",{className:V,children:s.content}),e[46]=s.content,e[47]=V,e[48]=p):p=e[48];let b;e[49]!==q||e[50]!==u||e[51]!==p?(b=t.jsxs("div",{className:q,children:[u,p]}),e[49]=q,e[50]=u,e[51]=p,e[52]=b):b=e[52];let h;e[53]!==m||e[54]!==b?(h=t.jsx("div",{className:"max-w-7xl mx-auto text-center relative w-full",children:t.jsxs("div",{className:"max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 text-center lg:text-left gap-6 sm:gap-8 lg:gap-12 items-center relative",children:[F,t.jsx("div",{className:"relative order-2 w-full",children:t.jsxs("div",{className:"relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-2xl border border-white/10",children:[m,b]})})]})}),e[53]=m,e[54]=b,e[55]=h):h=e[55];let T;return e[56]!==h||e[57]!==a?(T=t.jsxs(t.Fragment,{children:[j,t.jsxs("section",{className:"relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8 overflow-hidden",children:[a,N,S,h]})]}),e[56]=h,e[57]=a,e[58]=T):T=e[58],T}export{ge as default};
