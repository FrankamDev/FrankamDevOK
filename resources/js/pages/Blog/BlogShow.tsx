

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

import { usePage, Head, Link } from "@inertiajs/react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import NavBar from "@/components/NavBar";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  content: any; // JSON TipTap
  featured_image?: string;
  reading_time?: number;
  created_at: string;
}

interface BlogShowProps {
  post: BlogPost | null;
  related_posts: BlogPost[];
}

const BlogShow = () => {
  const { post, related_posts = [] }: BlogShowProps = usePage().props;

  const [tocItems, setTocItems] = useState<{ id: string; text: string; level: number }[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  // TipTap editor (readonly)
  const editor = useEditor({
    extensions: [StarterKit],
    content: post?.content ?? "",
    editable: false,
  });

  // Générer le TOC à partir des headings
  useEffect(() => {
    if (!contentRef.current) return;

    const headings = contentRef.current.querySelectorAll("h1, h2, h3, h4");
    const items: { id: string; text: string; level: number }[] = [];

    headings.forEach((heading, index) => {
      const level = parseInt(heading.tagName.charAt(1));
      const id = `heading-${index}`;
      heading.id = id;
      items.push({
        id,
        text: heading.textContent?.trim() || "",
        level,
      });
    });

    setTocItems(items);
  }, [editor?.getHTML()]);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-white text-xl">Article introuvable ou en cours de chargement...</div>
      </div>
    );
  }

  const description = (post.excerpt ?? "") || "";
  const featuredImage = post.featured_image ? `/storage/${post.featured_image}` : "/placeholder-blog.jpg";
  const currentUrl = typeof window !== "undefined" ? window.location.href : "";

  return (
    <>
      {/* <Head>
        <title>{post.title ?? "Aucun"} — FrankamDev</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={post.title ?? "Aucun"} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={featuredImage} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
      </Head> */}

      <NavBar />

      <div className="min-h-screen bg-gradient-to-b from-slate-950 via-indigo-950/5 to-slate-950 pt-20 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero */}
          <motion.section initial="hidden" animate="visible" variants={fadeUp}>
            <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/40 mb-12">
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10" />
              <img
                src={featuredImage}
                alt={post.title ?? "Article"}
                className="w-full h-[50vh] md:h-[65vh] object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-end pb-12 px-6 md:px-12">
                <div className="max-w-4xl">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight drop-shadow-2xl">
                    {post.title}
                  </h1>
                  <div className="mt-6 flex flex-wrap gap-4 text-sm md:text-base">
                    <span className="px-4 py-1.5 bg-indigo-600/80 backdrop-blur-sm rounded-full text-white font-medium">
                      {post.reading_time ?? "—"} min de lecture
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
            </div>
          </motion.section>

          {/* Contenu principal + TOC */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-12">
            <motion.article
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="lg:col-span-8 prose prose-invert prose-lg max-w-none"
              ref={contentRef}
            >
              <EditorContent editor={editor} />
            </motion.article>

            {/* Sommaire sticky */}
            <aside className="lg:col-span-4 lg:sticky lg:top-24 lg:h-fit order-first lg:order-last">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeUp}
                className="p-6 bg-slate-900/60 backdrop-blur-md rounded-2xl border border-slate-800/50 shadow-xl"
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
                          w-full text-left transition-all duration-200
                          ${item.level === 1 ? "font-semibold text-white" : ""}
                          ${item.level === 2 ? "pl-4 text-slate-300" : ""}
                          ${item.level >= 3 ? "pl-8 text-slate-400" : ""}
                          hover:text-indigo-400
                        `}
                      >
                        {item.text}
                      </button>
                    ))}
                  </nav>
                ) : (
                  <p className="text-slate-500 text-sm italic">
                    Aucun titre détecté dans l'article.
                  </p>
                )}
              </motion.div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogShow;
