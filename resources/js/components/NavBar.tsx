// import { Link, usePage } from "@inertiajs/react";
// import { Menu, X, User, LogOut, LayoutDashboard, ChevronDown } from "lucide-react";
// import { useState, useEffect } from "react";

// type User = {
//   name: string;
//   email: string;
// };

// type Props = {
//   scrolled: boolean;
// };

// export default function Navbar({ scrolled }: Props) {
//   const { props } = usePage();
//   const user = props.auth?.user as User | null;
//   const isAuthenticated = !!user;

//   const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
//   const [profileOpen, setProfileOpen] = useState(false);

//   // Ferme les menus quand on clique ailleurs
//   useEffect(() => {
//     const handleClickOutside = (e: MouseEvent) => {
//       if (!(e.target as HTMLElement).closest(".profile-dropdown, .mobile-menu-container")) {
//         setProfileOpen(false);
//         setMobileMenuIsOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const handleCloseMenus = () => {
//     setMobileMenuIsOpen(false);
//     setProfileOpen(false);
//   };
//   const { auth } = usePage().props;


//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled
//         ? "bg-slate-950/92 backdrop-blur-xl border-b border-slate-800/70 shadow-xl shadow-black/40"
//         : "bg-slate-950/40 backdrop-blur-lg border-b border-slate-800/40"
//         }`}
//     >
//       <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16 md:h-18">
//           {/* Logo */}
//           <Link
//             href="/"
//             className="flex items-center space-x-2.5 group"
//             onClick={handleCloseMenus}
//           >
//             <span className="text-2xl md:text-3xl font-bold tracking-tight">
//               <span className="text-white">Frankam</span>
//               <span className="text-cyan-400">Dev</span>
//             </span>
//           </Link>

//           {/* Navigation DESKTOP – bien visible */}
//           <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
//             {/* Liens publics */}
//             <Link prefetch href="/">Acceuil</Link>
//             {/* <NavLink href="#pricing">Tarifs</NavLink> */}
//             {/* <NavLink href="/testimonials">Avis</NavLink> */}
//             <Link prefetch href="/blog">Blog</Link>

//             {/* Espace authentification */}
//             {isAuthenticated ? (
//               <div className="relative profile-dropdown">
//                 <button
//                   onClick={() => setProfileOpen((prev) => !prev)}
//                   className="flex items-center gap-2.5 px-4 py-2 rounded-lg hover:bg-slate-800/60 transition-colors duration-200"
//                 >
//                   <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-medium">

//                     <img
//                       src={auth.user.avatar ? `/storage/${auth.user.avatar}` : '/default-avatar.png'}
//                       alt="avatar"
//                       className="w-20 h-10 rounded-full"
//                     />
//                   </div>
//                   <span className="font-medium text-gray-200 hidden lg:inline">
//                     {user?.name?.split(" ")[0] || "Compte"}
//                   </span>
//                   <ChevronDown
//                     className={`w-4 h-4 text-gray-400 transition-transform ${profileOpen ? "rotate-180" : ""
//                       }`}
//                   />
//                 </button>

//                 {/* Menu déroulant profil */}
//                 {profileOpen && (
//                   <div className="absolute right-0 mt-3 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
//                     <DropdownLink href="/dashboard">
//                       <LayoutDashboard className="w-4 h-4 mr-3" />
//                       Tableau de bord
//                     </DropdownLink>
//                     <DropdownLink href="/profile">
//                       <User className="w-4 h-4 mr-3" />
//                       Mon profil
//                     </DropdownLink>
//                     <hr className="my-1.5 border-slate-700 mx-2" />
//                     <DropdownLink
//                       href="/logout"
//                       method="post"
//                       as="button"
//                       className="text-red-400 hover:text-red-300 hover:bg-red-950/40"
//                     >
//                       <LogOut className="w-4 h-4 mr-3" />
//                       Déconnexion
//                     </DropdownLink>
//                   </div>
//                 )}
//               </div>
//             ) : (
//               <div className="flex items-center gap-5">
//                 <Link
//                   href="/login"
//                   className="px-5 py-2 text-gray-200 font-medium hover:text-white transition-colors"
//                 >
//                   Connexion
//                 </Link>
//                 <Link
//                   href="/register"
//                   className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.03] active:scale-95"
//                 >
//                   S'inscrire
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Burger mobile */}
//           <button
//             className="md:hidden p-2.5 rounded-full hover:bg-slate-800/60 transition-all duration-200 active:scale-95"
//             onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
//             aria-label="Menu mobile"
//           >
//             {mobileMenuIsOpen ? (
//               <X className="w-7 h-7 text-cyan-300" />
//             ) : (
//               <Menu className="w-7 h-7 text-cyan-300" />
//             )}
//           </button>
//         </div>
//       </div>

//       {/* Menu mobile (overlay + panneau latéral) */}
//       {mobileMenuIsOpen && (
//         <div
//           className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-400"
//           onClick={() => setMobileMenuIsOpen(false)}
//         >
//           <div
//             className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-slate-950/98 backdrop-blur-xl border-l border-slate-800 transition-transform duration-500 ease-out ${mobileMenuIsOpen ? "translate-x-0" : "translate-x-full"
//               }`}
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex flex-col h-full">
//               <div className="flex items-center justify-between p-6 border-b border-slate-800/60">
//                 <span className="text-xl font-bold">
//                   <span className="text-white">Frankam</span>
//                   <span className="text-cyan-400">Dev</span>
//                 </span>
//                 <button onClick={() => setMobileMenuIsOpen(false)}>
//                   <X className="w-7 h-7 text-gray-300" />
//                 </button>
//               </div>

//               <div className="flex-1 overflow-y-auto py-8 px-6 space-y-2">
//                 <Link prefetch href="/">
//                   Acceuil
//                 </Link>

//                 <MobileLink href="#testimonials" onClick={handleCloseMenus}>
//                   Avis
//                 </MobileLink>
//                 <MobileLink href="/blog" onClick={handleCloseMenus}>
//                   Blog
//                 </MobileLink>

//                 <div className="pt-8 mt-4 border-t border-slate-800">
//                   {isAuthenticated ? (
//                     <>
//                       <div className="flex items-center gap-4 mb-6 p-4 bg-slate-900/50 rounded-xl">
//                         <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
//                           {user?.name?.[0]?.toUpperCase() || "?"}
//                         </div>
//                         <div>
//                           <p className="font-medium text-white">{user?.name}</p>
//                           <p className="text-sm text-gray-400">{user?.email}</p>
//                         </div>
//                       </div>

//                       <MobileLink href="/dashboard" onClick={handleCloseMenus}>
//                         Tableau de bord
//                       </MobileLink>
//                       <MobileLink href="/profile" onClick={handleCloseMenus}>
//                         Mon profil
//                       </MobileLink>
//                       <MobileLink
//                         href="/logout"
//                         method="post"
//                         className="text-red-400 hover:text-red-300"
//                         onClick={handleCloseMenus}
//                       >
//                         Déconnexion
//                       </MobileLink>
//                     </>
//                   ) : (
//                     <div className="space-y-4">
//                       <Link
//                         href="/login"
//                         className="block py-4 px-6 text-center text-lg font-medium bg-slate-800/60 rounded-xl hover:bg-slate-700/70 transition"
//                         onClick={handleCloseMenus}
//                       >
//                         Connexion
//                       </Link>
//                       <Link
//                         href="/register"
//                         className="block py-4 px-6 text-center text-lg font-medium bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg hover:brightness-110 transition"
//                         onClick={handleCloseMenus}
//                       >
//                         Créer un compte
//                       </Link>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }

// // Composants réutilisables
// function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
//   return (
//     <a
//       href={href}
//       className="text-gray-200 hover:text-white text-base font-medium transition-colors relative group"
//     >
//       {children}
//       <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
//     </a>
//   );
// }

// function MobileLink({
//   href,
//   children,
//   method = "get",
//   className = "",
//   onClick,
// }: {
//   href: string;
//   children: React.ReactNode;
//   method?: "get" | "post";
//   className?: string;
//   onClick?: () => void;
// }) {
//   const common = "block px-6 py-4 text-lg text-gray-200 hover:text-white hover:bg-slate-800/50 rounded-xl transition duration-300";

//   if (method === "post") {
//     return (
//       <Link href={href} method="post" as="button" className={`${common} ${className}`} onClick={onClick}>
//         {children}
//       </Link>
//     );
//   }

//   return (
//     <Link href={href} className={`${common} ${className}`} onClick={onClick}>
//       {children}
//     </Link>
//   );
// }

// function DropdownLink({
//   href,
//   method = "get",
//   className = "",
//   children,
// }: {
//   href: string;
//   method?: "get" | "post";
//   className?: string;
//   children: React.ReactNode;
// }) {
//   const common = "flex items-center px-5 py-3 text-gray-300 hover:bg-slate-800 hover:text-white transition duration-200";

//   if (method === "post") {
//     return (
//       <Link href={href} method="post" as="button" className={`${common} ${className}`}>
//         {children}
//       </Link>
//     );
//   }

//   return (
//     <Link href={href} className={`${common} ${className}`}>
//       {children}
//     </Link>
//   );
// }





import { Link, usePage } from "@inertiajs/react";
import { Menu, X, User, LogOut, LayoutDashboard, ChevronDown, Home, BookOpen, Star } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar({ scrolled }: { scrolled: boolean }) {
  const { props } = usePage();
  const user = props.auth?.user as any;
  const isAuthenticated = !!user;

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Gestion de la fermeture au clic extérieur
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".profile-dropdown")) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${scrolled
        ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 py-2"
        : "bg-transparent border-b border-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-14">

          {/* LOGO */}
          <Link href="/" className="relative z-[110] flex items-center group">
            <div className="text-2xl font-black tracking-tighter flex items-center">
              <span className="text-white group-hover:text-cyan-400 transition-colors">Frankam</span>
              <span className="bg-cyan-500 text-slate-950 px-1.5 py-0.5 rounded-md ml-1 transform group-hover:rotate-3 transition-transform">Dev</span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink href="/" active={usePage().component === 'Welcome'}>Accueil</NavLink>
            <NavLink href="/blog" active={usePage().url.startsWith('/blog')}>Blog</NavLink>

            <div className="h-6 w-[1px] bg-slate-800 mx-2" />

            {isAuthenticated ? (
              <div className="relative profile-dropdown">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-3 p-1 pr-3 rounded-full bg-slate-900/50 border border-white/5 hover:border-cyan-500/50 transition-all"
                >
                  <img
                    src={user.avatar ? `/storage/${user.avatar}` : '/default-avatar.png'}
                    alt="avatar"
                    className="w-8 h-8 rounded-full object-cover border border-white/10"
                  />
                  <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${profileOpen ? "rotate-180" : ""}`} />
                </button>

                {profileOpen && (
                  <div className="absolute right-0 mt-4 w-56 bg-slate-950 border border-white/10 rounded-2xl shadow-2xl py-2 z-[120] animate-in fade-in slide-in-from-top-2">
                    <div className="px-4 py-3 border-b border-white/5 mb-2">
                      <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Compte</p>
                      <p className="text-sm font-medium text-white truncate">{user.name}</p>
                    </div>
                    <DropdownLink href="/dashboard"><LayoutDashboard size={16} /> Dashboard</DropdownLink>
                    <DropdownLink href="/profile"><User size={16} /> Profil</DropdownLink>
                    <hr className="my-2 border-white/5" />
                    <DropdownLink href="/logout" method="post" as="button" className="text-red-400 hover:bg-red-500/10">
                      <LogOut size={16} /> Déconnexion
                    </DropdownLink>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <Link
                  prefetch
                  href="/login" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors">Connexion</Link>
                <Link href="/register" className="px-5 py-2.5 bg-white text-slate-950 text-sm font-bold rounded-[7px] hover:bg-cyan-400 transition-all shadow-lg shadow-white/5 active:scale-95">
                  Rejoindre
                </Link>
              </div>
            )}
          </div>

          {/* MOBILE BURGER */}
          <button
            className="md:hidden relative z-[110] p-2 text-white"
            onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
          >
            {mobileMenuIsOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`fixed inset-0 bg-slate-950 z-[100] md:hidden transition-all duration-500 ease-in-out ${mobileMenuIsOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}>
        <div className="flex flex-col h-full pt-24 px-8 space-y-6">
          <MobileLink href="/" icon={<Home size={20} />} onClick={() => setMobileMenuIsOpen(false)}>Accueil</MobileLink>
          <MobileLink href="/blog" icon={<BookOpen size={20} />} onClick={() => setMobileMenuIsOpen(false)}>Blog</MobileLink>

          <div className="pt-6 border-t border-white/5">
            {isAuthenticated ? (
              <div className="space-y-4">
                <MobileLink href="/dashboard" icon={<LayoutDashboard size={20} />} onClick={() => setMobileMenuIsOpen(false)}>Tableau de bord</MobileLink>
                <MobileLink href="/logout" method="post" icon={<LogOut size={20} />} className="text-red-400">Déconnexion</MobileLink>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                <Link href="/login" className="py-4 text-center bg-slate-900 rounded-2xl font-bold text-white">Connexion</Link>
                <Link href="/register" className="py-4 text-center bg-cyan-500 rounded-2xl font-bold text-slate-950">S'inscrire</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

// --- SOUS-COMPOSANTS ---

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active?: boolean }) {
  return (
    <Link
      href={href}
      className={`text-sm font-bold tracking-wide transition-all relative group ${active ? "text-cyan-400" : "text-gray-400 hover:text-white"}`}
    >
      {children}
      <span className={`absolute -bottom-1 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
    </Link>
  );
}

function DropdownLink({ href, method = "get", className = "", children, as = "a" }: any) {
  return (
    <Link
      prefetch
      href={href}
      method={method}
      as={as}
      className={`flex items-center gap-3 px-4 py-2.5 text-sm font-medium text-gray-400 hover:bg-white/5 hover:text-white transition-all ${className}`}
    >
      {children}
    </Link>
  );
}

function MobileLink({ href, children, icon, onClick, method = "get", className = "" }: any) {
  return (
    <Link
      href={href}
      method={method}
      onClick={onClick}
      className={`flex items-center gap-4 text-2xl font-black text-white hover:text-cyan-400 transition-colors ${className}`}
    >
      <span className="text-cyan-500">{icon}</span>
      {children}
    </Link>
  );
}