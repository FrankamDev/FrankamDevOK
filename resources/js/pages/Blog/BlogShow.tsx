

// import { usePage } from "@inertiajs/react"
// interface TipTapNode {
//   type: string;
//   attrs?: any;
//   content?: TipTapNode[];
//   text?: string;
//   marks?: { type: string }[];
// }

// function renderText(node: TipTapNode) {
//   if (!node.text) return null;

//   let text = node.text;

//   if (node.marks) {
//     node.marks.forEach(mark => {
//       if (mark.type === 'bold') text = <strong>{text}</strong> as any;
//       if (mark.type === 'italic') text = <em>{text}</em> as any;
//     });
//   }

//   return text;
// }

// function renderNode(node: TipTapNode, index: number) {
//   switch (node.type) {
//     case 'paragraph':
//       return (
//         <p key={index} className="mb-4 leading-relaxed">
//           {node.content?.map(renderText)}
//         </p>
//       );

//     case 'heading': {
//       const level = node.attrs?.level || 1;
//       const Tag = `h${level}` as keyof JSX.IntrinsicElements;
//       return (
//         <Tag key={index} className="mt-8 mb-4 font-bold">
//           {node.content?.map(renderText)}
//         </Tag>
//       );
//     }

//     case 'bulletList':
//       return (
//         <ul key={index} className="list-disc pl-6 mb-4">
//           {node.content?.map((item, i) => (
//             <li key={i}>
//               {item.content?.map(renderNode as any)}
//             </li>
//           ))}
//         </ul>
//       );

//     case 'orderedList':
//       return (
//         <ol key={index} className="list-decimal pl-6 mb-4">
//           {node.content?.map((item, i) => (
//             <li key={i}>
//               {item.content?.map(renderNode as any)}
//             </li>
//           ))}
//         </ol>
//       );

//     case 'blockquote':
//       return (
//         <blockquote
//           key={index}
//           className="border-l-4 border-gray-300 pl-4 italic my-6"
//         >
//           {node.content?.map(renderNode as any)}
//         </blockquote>
//       );

//     case 'image':
//       return (
//         <img
//           key={index}
//           src={node.attrs?.src}
//           alt={node.attrs?.alt || ''}
//           className="my-6 rounded-lg"
//         />
//       );

//     default:
//       return null;
//   }
// }

// function renderTipTapContent(content: any) {
//   if (!content || !content.content || !Array.isArray(content.content)) {
//     return null;
//   }

//   return content.content.map((node: TipTapNode, index: number) =>
//     renderNode(node, index)
//   );
// }

// export default function BlogShow() {
//   const { post }: any = usePage().props;

//   if (!post) return null;

//   const authorName = post.author?.name || 'admin';

//   return (
//     <div className="max-w-3xl mx-auto px-4 py-16">
//       <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

//       <p className="text-sm text-gray-500 mb-8">
//         {post.reading_time} min · {authorName}
//       </p>

//       {post.featured_image && (
//         <img
//           src={`/storage/${post.featured_image}`}
//           className="rounded-xl mb-10 w-full"
//           alt={post.title}
//         />
//       )}

//       <article className="prose prose-lg max-w-none">
//         {renderTipTapContent(post.content)}
//       </article>
//     </div>
//   );
// }




// import { usePage, Head, Link } from "@inertiajs/react";
// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import NavBar from "@/components/NavBar";

// interface BlogPost {
//   id: number;
//   title: string;
//   slug: string;
//   excerpt?: string;
//   content: string;
//   featured_image?: string;
//   reading_time?: number;
//   created_at: string;
// }

// interface BlogShowProps {
//   post: BlogPost | null;
//   related_posts: BlogPost[];
// }

// const BlogShow = () => {
//   const { post, related_posts = [] }: BlogShowProps = usePage().props;

//   const [tocItems, setTocItems] = useState<{ id: string; text: string; level: number }[]>([]);
//   const contentRef = useRef<HTMLDivElement>(null);

//   // Générer le sommaire (TOC) à partir des headings
//   useEffect(() => {
//     if (!contentRef.current || !post?.content) return;

//     const headings = contentRef.current.querySelectorAll("h1, h2, h3, h4");
//     const items: { id: string; text: string; level: number }[] = [];

//     headings.forEach((heading, index) => {
//       const level = parseInt(heading.tagName.charAt(1));
//       const id = `heading-${index}`;
//       heading.id = id;
//       items.push({
//         id,
//         text: heading.textContent?.trim() || "",
//         level,
//       });
//     });

//     setTocItems(items);
//   }, [post?.content]);

//   // Animation variants
//   const fadeUp = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//   };

//   const scrollTo = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Fallback si post n'existe pas
//   if (!post) {
//     return (
//       <div className="min-h-screen bg-slate-950 flex items-center justify-center">
//         <div className="text-white text-xl">Article introuvable ou en cours de chargement...</div>
//       </div>
//     );
//   }

//   return (
//     <>
//       <Head>
//         <title>{post?.title || 'Aucun'} — FrankamDev</title>
//         <meta
//           name="description"
//           content={(post?.excerpt || (post?.content?.slice(0, 158) ?? '')) + '...'}
//         />
//         <meta property="og:title" content={post?.title || 'Aucun'} />
//         <meta
//           property="og:description"
//           content={(post?.excerpt || (post?.content?.slice(0, 158) ?? '')) + '...'}
//         />
//         <meta
//           property="og:image"
//           content={post?.featured_image ? `/storage/${post.featured_image}` : "/og-default.jpg"}
//         />
//         <meta property="og:url" content={typeof window !== 'undefined' ? window.location.href : ''} />
//         <meta property="og:type" content="article" />
//       </Head>


//       <NavBar />

//       <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950/5 to-slate-950 pt-20 pb-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           {/* Hero : Image + Titre */}
//           <motion.section initial="hidden" animate="visible" variants={fadeUp}>
//             <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/40 mb-12">
//               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />

//               <img
//                 src={post.featured_image ? `/storage/${post.featured_image}` : "/placeholder-blog.jpg"}
//                 alt={post.title}
//                 className="w-full h-[50vh] md:h-[65vh] object-cover"
//               />

//               <div className="absolute inset-0 z-20 flex items-end pb-12 px-6 md:px-12">
//                 <div className="max-w-4xl">
//                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl">
//                     {post.title}
//                   </h1>

//                   <div className="mt-6 flex flex-wrap gap-4 text-sm md:text-base">
//                     <span className="px-4 py-1.5 bg-indigo-600/80 backdrop-blur-sm rounded-full text-white font-medium">
//                       {post.reading_time || "—"} min de lecture
//                     </span>
//                     <span className="px-4 py-1.5 bg-slate-800/70 backdrop-blur-sm rounded-full text-slate-300">
//                       {new Date(post.created_at).toLocaleDateString("fr-FR", {
//                         day: "numeric",
//                         month: "long",
//                         year: "numeric",
//                       })}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.section>

//           {/* Contenu principal + Sommaire */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12">
//             {/* Article – 8/12 sur grand écran */}
//             <motion.article
//               initial="hidden"
//               animate="visible"
//               variants={fadeUp}
//               className="lg:col-span-8 prose prose-invert prose-lg max-w-none"
//               ref={contentRef}
//             >
//               {/* Rich Text avec style personnalisé */}
//               <div
//                 className="prose-headings:scroll-mt-24 prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl
//                            prose-p:text-slate-300 prose-p:leading-relaxed prose-p:mb-6
//                            prose-strong:text-white prose-strong:font-semibold
//                            prose-a:text-indigo-400 prose-a:no-underline hover:prose-a:underline prose-a:transition
//                            prose-code:text-pink-300 prose-code:bg-slate-900/60 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
//                            prose-pre:bg-slate-900/80 prose-pre:p-6 prose-pre:rounded-xl prose-pre:overflow-x-auto
//                            prose-ul:ml-6 prose-ol:ml-6 prose-li:mb-2 prose-blockquote:border-l-4 prose-blockquote:border-indigo-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-300
//                            prose-img:rounded-xl prose-img:shadow-2xl prose-img:border prose-img:border-slate-700/50 prose-img:mx-auto"
//                 dangerouslySetInnerHTML={{ __html: post.content }}
//               />
//             </motion.article>

//             {/* Sommaire sticky – 4/12 sur grand écran */}
//             <aside className="lg:col-span-4 lg:sticky lg:top-24 lg:h-fit order-first lg:order-last">
//               <motion.div
//                 initial="hidden"
//                 animate="visible"
//                 variants={fadeUp}
//                 className="p-6 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800/50 shadow-xl"
//               >
//                 <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
//                   <span className="w-2 h-8 bg-indigo-500 rounded-full inline-block" />
//                   Sommaire
//                 </h3>

//                 {tocItems.length > 0 ? (
//                   <nav className="space-y-2.5 text-sm">
//                     {tocItems.map((item) => (
//                       <button
//                         key={item.id}
//                         onClick={() => scrollTo(item.id)}
//                         className={`
//                           w-full text-left transition-all duration-200
//                           ${item.level === 1 ? "font-semibold text-white" : ""}
//                           ${item.level === 2 ? "pl-4 text-slate-300" : ""}
//                           ${item.level >= 3 ? "pl-8 text-slate-400" : ""}
//                           hover:text-indigo-400
//                         `}
//                       >
//                         {item.text}
//                       </button>
//                     ))}
//                   </nav>
//                 ) : (
//                   <p className="text-slate-500 text-sm italic">
//                     Aucun titre détecté dans l'article.
//                   </p>
//                 )}

//                 {/* Partage */}
//                 <div className="mt-8 pt-6 border-t border-slate-800">
//                   <h4 className="text-lg font-semibold text-white mb-4">Partager</h4>
//                   <div className="flex gap-4">
//                     <a
//                       href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
//                         window.location.href
//                       )}&text=${encodeURIComponent(post.title)}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition"
//                     >
//                       𝕏
//                     </a>
//                     <a
//                       href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
//                         window.location.href
//                       )}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition"
//                     >
//                       LinkedIn
//                     </a>
//                     <a
//                       href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
//                         window.location.href
//                       )}`}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition"
//                     >
//                       FB
//                     </a>
//                   </div>
//                 </div>
//               </motion.div>
//             </aside>
//           </div>

//           {/* Articles similaires */}
//           {related_posts.length > 0 && (
//             <motion.section initial="hidden" animate="visible" variants={fadeUp} className="mt-20">
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
//                 Articles similaires
//               </h2>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//                 {related_posts.map((related) => (
//                   <Link
//                     key={related.id}
//                     href={`/blog/${related.slug}`}
//                     className="group block overflow-hidden rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-indigo-600/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-900/20"
//                   >
//                     <div className="aspect-[16/9] relative overflow-hidden">
//                       <img
//                         src={related.featured_image ? `/storage/${related.featured_image}` : "/placeholder.jpg"}
//                         alt={related.title}
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
//                     </div>
//                     <div className="p-6">
//                       <h3 className="text-xl font-semibold text-white group-hover:text-indigo-300 transition line-clamp-2">
//                         {related.title}
//                       </h3>
//                       {related.excerpt && (
//                         <p className="mt-3 text-slate-400 text-sm line-clamp-2">{related.excerpt}</p>
//                       )}
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </motion.section>
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogShow;


// import { Head, Link, usePage } from "@inertiajs/react";
// import { motion } from "framer-motion";
// import { useEffect, useRef, useState } from "react";
// import NavBar from "@/components/NavBar";
// import RichTextDisplay from "@/components/RichTextDisplay";
// import './blog.css';
// interface BlogPost {
//   id: number;
//   title: string;
//   slug: string;
//   excerpt?: string;
//   content: string;
//   featured_image?: string;
//   reading_time?: number;
//   created_at: string;
// }

// interface Props {
//   post: BlogPost | null;
//   related_posts: BlogPost[];
// }

// export default function BlogShow() {
//   const { post, related_posts = [] }: Props = usePage().props;

//   const [scrollProgress, setScrollProgress] = useState(0);
//   const [tocItems, setTocItems] = useState<{ id: string; text: string; level: number }[]>([]);
//   const contentRef = useRef<HTMLDivElement>(null);

//   // Progression de lecture
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight = document.documentElement.scrollHeight - window.innerHeight;
//       const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
//       setScrollProgress(progress);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Génération du sommaire
//   useEffect(() => {
//     if (!contentRef.current || !post?.content) return;

//     const headings = contentRef.current.querySelectorAll("h1, h2, h3, h4");
//     const items: { id: string; text: string; level: number }[] = [];

//     headings.forEach((heading, index) => {
//       const level = parseInt(heading.tagName.charAt(1));
//       const id = `heading-${index}`;
//       heading.id = id;
//       items.push({ id, text: heading.textContent?.trim() || "", level });
//     });

//     setTocItems(items);
//   }, [post?.content]);


//   useEffect(() => {
//     const blocks = document.querySelectorAll("[data-code] pre code");

//     blocks.forEach((block) => {
//       const button = document.createElement("button");
//       button.innerText = "Copier";
//       button.className =
//         "absolute top-3 right-3 text-xs px-3 py-1 rounded-md bg-slate-800 text-white";

//       button.onclick = () => {
//         navigator.clipboard.writeText(block.textContent || "");
//         button.innerText = "Copié ✓";
//         setTimeout(() => (button.innerText = "Copier"), 2000);
//       };

//       block.parentElement?.appendChild(button);
//       block.parentElement?.classList.add("relative");
//     });
//   }, []);

//   const scrollTo = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   if (!post) {
//     return (
//       <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-2xl">
//         Article non trouvé
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* <Head>
//         <title>{post.title} — FrankamDev</title>
//         <meta
//           name="description"
//           content={post.excerpt || post.content.slice(0, 158).replace(/<[^>]*>/g, "").trim() + "..."}
//         />
//         <meta property="og:title" content={post.title} />
//         <meta property="og:description" content={post.excerpt || post.content.slice(0, 158).replace(/<[^>]*>/g, "").trim() + "..."} />
//         <meta property="og:image" content={post.featured_image ? `/storage/${post.featured_image}` : "/og-default.jpg"} />
//         <meta property="og:url" content={typeof window !== "undefined" ? window.location.href : ""} />
//         <meta property="og:type" content="article" />
//       </Head> */}

//       {/* Barre de progression */}
//       <div
//         className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 z-[9999] origin-left transition-transform duration-200 ease-out shadow-lg shadow-indigo-900/40"
//         style={{ transform: `scaleX(${scrollProgress / 100})` }}
//       />

//       <NavBar />

//       <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950/5 to-slate-950 pt-20 pb-32">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           {/* Hero */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//             className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/40 mb-12"
//           >
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
//             <img
//               src={post.featured_image ? `/storage/${post.featured_image}` : "/placeholder-blog.jpg"}
//               alt={post.title}
//               className="w-full h-[50vh] md:h-[65vh] object-cover"
//             />
//             <div className="absolute inset-0 z-20 flex items-end pb-12 px-6 md:px-12">
//               <div className="max-w-4xl">
//                 <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl">
//                   {post.title}
//                 </h1>
//                 <div className="mt-6 flex flex-wrap gap-4">
//                   <span className="px-4 py-1.5 bg-indigo-600/80 backdrop-blur-sm rounded-full text-white font-medium">
//                     {post.reading_time || "—"} min
//                   </span>
//                   <span className="px-4 py-1.5 bg-slate-800/70 backdrop-blur-sm rounded-full text-slate-300">
//                     {new Date(post.created_at).toLocaleDateString("fr-FR", {
//                       day: "numeric",
//                       month: "long",
//                       year: "numeric",
//                     })}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contenu + sommaire */}
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12">
//             {/* Article */}
//             <motion.article
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.7, delay: 0.1 }}
//               className="lg:col-span-8 prose prose-invert prose-lg max-w-none"
//               ref={contentRef}
//             >
//               <div
//                 className="

//                   blog-content
//                 "
//                 dangerouslySetInnerHTML={{ __html: post.content }}
//               />
//               {/* <RichTextDisplay content={post.content} /> */}

//             </motion.article>

//             {/* Sommaire */}
//             <aside className="lg:col-span-4 lg:sticky lg:top-24 lg:h-fit order-first lg:order-last">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, delay: 0.2 }}
//                 className="p-6 bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-800/50 shadow-xl"
//               >
//                 <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
//                   <span className="w-2 h-8 bg-indigo-500 rounded-full inline-block" />
//                   Sommaire
//                 </h3>

//                 {tocItems.length > 0 ? (
//                   <nav className="space-y-2.5 text-sm">
//                     {tocItems.map((item) => (
//                       <button
//                         key={item.id}
//                         onClick={() => scrollTo(item.id)}
//                         className={`
//                           w-full text-left transition-colors duration-200
//                           ${item.level === 1 ? "font-semibold text-white" : ""}
//                           ${item.level === 2 ? "pl-4 text-slate-300" : ""}
//                           ${item.level >= 3 ? "pl-8 text-slate-400" : ""}
//                           hover:text-indigo-300
//                         `}
//                       >
//                         {item.text}
//                       </button>
//                     ))}
//                   </nav>
//                 ) : (
//                   <p className="text-slate-500 text-sm italic">Aucun sommaire disponible.</p>
//                 )}
//               </motion.div>
//             </aside>
//           </div>

//           {/* 4 cartes d'autres articles */}
//           {related_posts.length > 0 && (
//             <motion.section
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//               className="mt-20"
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
//                 Découvrez aussi ces articles
//               </h2>

//               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//                 {related_posts.slice(0, 4).map((related) => (
//                   <Link
//                     key={related.id}
//                     href={`/blog/${related.slug}`}
//                     className="
//                       group block overflow-hidden rounded-2xl
//                       bg-slate-900/70 backdrop-blur-sm
//                       border border-slate-800/50
//                       transition-all duration-300
//                       hover:border-indigo-600/60 hover:shadow-xl hover:shadow-indigo-900/20
//                       hover:-translate-y-1
//                     "
//                   >
//                     <div className="relative aspect-[16/9] overflow-hidden">
//                       <img
//                         src={related.featured_image ? `/storage/${related.featured_image}` : "/placeholder.jpg"}
//                         alt={related.title}
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
//                     </div>
//                     <div className="p-5">
//                       <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition line-clamp-2 min-h-[3rem]">
//                         {related.title}
//                       </h3>
//                       {related.excerpt && (
//                         <p className="mt-3 text-slate-400 text-sm line-clamp-2">
//                           {related.excerpt}
//                         </p>
//                       )}
//                     </div>
//                   </Link>
//                 ))}
//               </div>
//             </motion.section>
//           )}
//         </div>
//       </div>
//     </>
//   );
// }



import { Head, Link, usePage } from "@inertiajs/react";
import './blog.css';
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { SiInfosys } from "react-icons/si";
import Infos from "@/components/Infos";
import NavBar from "@/components/NavBar";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image?: string;
  reading_time?: number;
  created_at: string;
}

interface Props {
  post: BlogPost | null;
  related_posts: BlogPost[];
}

export default function BlogShow() {
  const { post, related_posts = [] }: Props = usePage().props;

  const [scrollProgress, setScrollProgress] = useState(0);
  const [tocItems, setTocItems] = useState<{ id: string; text: string; level: number }[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  // Progression de lecture
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Génération sommaire + bouton copier
  useEffect(() => {
    if (!contentRef.current || !post?.content) return;

    // Sommaire
    const headings = contentRef.current.querySelectorAll("h1, h2, h3, h4");
    const items: { id: string; text: string; level: number }[] = [];

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      const id = `heading-${index}`;
      heading.id = id;
      items.push({ id, text: heading.textContent?.trim() || "", level });
    });
    setTocItems(items);

    // Bouton copier sur les blocs de code
    const pres = contentRef.current.querySelectorAll("pre");
    pres.forEach((pre) => {
      if (pre.querySelector(".copy-btn")) return;

      const btn = document.createElement("button");
      btn.className =
        "copy-btn absolute top-3 right-3 px-3 py-1.5 text-xs bg-slate-800/90 hover:bg-slate-700 rounded-md text-slate-200 font-medium transition z-10 shadow-sm";
      btn.textContent = "Copier";

      btn.onclick = async () => {
        try {
          await navigator.clipboard.writeText(pre.textContent || "");
          btn.textContent = "Copié ✓";
          setTimeout(() => (btn.textContent = "Copier"), 2200);
        } catch {
          btn.textContent = "Erreur";
        }
      };

      pre.style.position = "relative";
      pre.appendChild(btn);
    });
  }, [post?.content]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-2xl">
        Article introuvable
      </div>
    );
  }

  return (
    <>
      {/* <Head>
        <title>{post.title} — FrankamDev</title>
        <meta
          name="description"
          content={
            post.excerpt ||
            post.content.slice(0, 158).replace(/<[^>]*>/g, "").trim() + "..."
          }
        />
        <meta property="og:title" content={post.title} />
        <meta
          property="og:description"
          content={
            post.excerpt ||
            post.content.slice(0, 158).replace(/<[^>]*>/g, "").trim() + "..."
          }
        />
        <meta
          property="og:image"
          content={post.featured_image ? `/storage/${post.featured_image}` : "/og-default.jpg"}
        />
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="article" />
      </Head> */}

      {/* Barre de progression */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-fuchsia-600 z-[9999] origin-left transition-transform duration-150 ease-out shadow-md shadow-indigo-900/30"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      <NavBar />

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950/5 to-slate-950 pt-20 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/40 mb-14"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
            <img
              src={post.featured_image ? `/storage/${post.featured_image}` : "/placeholder-blog.jpg"}
              alt={post.title}
              className="w-full h-[50vh] md:h-[65vh] object-cover"
            />
            <div className="absolute inset-0 z-20 flex items-end pb-12 px-6 md:px-12">
              <div className="max-w-4xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl">
                  {post.title}
                </h1>

                <div className="mt-6 flex flex-wrap gap-4 text-sm sm:text-base">
                  <span className="px-4 py-1.5 bg-indigo-700/80 backdrop-blur-sm rounded-full text-white font-medium">
                    {post.reading_time || "—"} min
                  </span>
                  <span className="px-4 py-1.5 bg-slate-800/70 backdrop-blur-sm rounded-full text-slate-300">
                    {new Date(post.created_at).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contenu + TOC */}
          <div className="grid overflow-x-hidden           
    break-words          
    blog-content
    
    
    prose
    prose-invert
    prose-lg
     
    prose prose-invert prose-lg max-w-none grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12">
            {/* Article */}
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="lg:col-span-8 prose prose-invert prose-lg max-w-none"
              ref={contentRef}
            >
              <div
                className="
                 blog-content
                  
                "
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </motion.article>

            {/* Sommaire */}
            <aside className="lg:col-span-4  sm:block hidden lg:sticky lg:top-24 lg:h-fit order-first lg:order-last">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="p-6 bg-slate-900/70 backdrop-blur-md rounded-2xl border border-slate-800/50 shadow-xl"
              >
                <h3 className="text-xl font-bold text-white mb-5 flex items-center gap-3">
                  <span className="w-2 h-8 bg-indigo-500 rounded-full inline-block" />
                  Sommaire
                </h3>

                {tocItems.length > 0 ? (
                  <nav className="space-y-2.5 text-sm">
                    {tocItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => scrollTo(item.id)}
                        className={`
                          w-full text-left transition-colors duration-200
                          ${item.level === 1 ? "font-semibold text-white" : ""}
                          ${item.level === 2 ? "pl-4 text-slate-300" : ""}
                          ${item.level >= 3 ? "pl-8 text-slate-400" : ""}
                          hover:text-indigo-300
                        `}
                      >
                        {item.text}
                      </button>
                    ))}
                  </nav>
                ) : (
                  <p className="text-slate-500 text-sm italic">Aucun sommaire disponible.</p>
                )}
              </motion.div>
            </aside>
          </div>

          {/* 4 cartes similaires */}
          {related_posts.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-20"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
                Articles similaires
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                {related_posts.slice(0, 4).map((related) => (
                  <Link
                    key={related.id}
                    href={`/blog/${related.slug}`}
                    className="
                      group block overflow-hidden rounded-2xl
                      bg-slate-900/70 backdrop-blur-sm
                      border border-slate-800/50
                      transition-all duration-300
                      hover:border-indigo-600/60 hover:shadow-xl hover:shadow-indigo-900/20
                      hover:-translate-y-1
                    "
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <img
                        src={related.featured_image ? `/storage/${related.featured_image}` : "/placeholder.jpg"}
                        alt={related.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-semibold text-white group-hover:text-indigo-300 transition line-clamp-2 min-h-[3rem]">
                        {related.title}
                      </h3>
                      {related.excerpt && (
                        <p className="mt-3 text-slate-400 text-sm line-clamp-2">
                          {related.excerpt}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>
          )}

          {/* === Carte horizontale pro en bas === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mt-24 mx-auto max-w-5xl"
          >
            <Infos />
          </motion.div>
        </div>
      </div>
    </>
  );
}