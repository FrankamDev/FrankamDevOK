// import { Menu, X } from "lucide-react";
// import { useState } from "react";

// export default function Navbar({ scrolled }) {
//   const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

//   return (
//     <nav
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
//         ? "bg-slate-950/80 backdrop-blur-lg border-b border-slate-800"
//         : "bg-slate-950/20 backdrop-blur-sm"
//         }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
//           <div className="flex items-center space-x-1 group cursor-pointer">
//             <div>
//               {/* <img
//                 src="/logo.png"
//                 alt="CodeFlow"
//                 className="w-6 h-6 sm:w-8 sm:h-8"
//               /> */}
//             </div>
//             <span className="text-lg sm:text-xl md:text-2xl font-medium">
//               <span className="text-white">Frankam</span>
//               <span className="text-blue-400">Dev</span>
//             </span>
//           </div>

//           {/* Nav Links */}
//           <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
//             <a
//               href="#features"
//               className="text-gray-300 hover:text-white text-sm lg:text-base"
//             >
//               Features
//             </a>
//             <a
//               href="#pricing"
//               className="text-gray-300 hover:text-white text-sm lg:text-base"
//             >
//               Pricing
//             </a>
//             <a
//               href="#testimonials"
//               className="text-gray-300 hover:text-white text-sm lg:text-base"
//             >
//               Testimonials
//             </a>
//           </div>

//           <button
//             className="md:hidden p-2 text-gray-300 hover:text-white"
//             onClick={() => setMobileMenuIsOpen((prev) => !prev)}
//           >
//             {mobileMenuIsOpen ? (
//               <X className="w-5 h-5 sm:w-6 sm:h-6" />
//             ) : (
//               <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
//             )}
//           </button>
//         </div>
//       </div>

//       {mobileMenuIsOpen && (
//         <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 animate-in slide-in-from-top duration-300">
//           <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
//             <a
//               href="#features"
//               onClick={() => setMobileMenuIsOpen(false)}
//               className="block text-gray-300 hover:text-white text-sm lg:text-base"
//             >
//               Features
//             </a>
//             <a
//               href="#pricing"
//               onClick={() => setMobileMenuIsOpen(false)}
//               className="block text-gray-300 hover:text-white text-sm lg:text-base"
//             >
//               Pricing
//             </a>
//             <a
//               href="#testimonials"
//               onClick={() => setMobileMenuIsOpen(false)}
//               className="block text-gray-300 hover:text-white text-sm lg:text-base"
//             >
//               Testimonials
//             </a>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }




import { Link, usePage } from "@inertiajs/react";
import type { User } from "lucide-react";
import { Menu, X, LogOut, LayoutDashboard, ChevronDown, Hand } from "lucide-react";
import { useState, useEffect } from "react";

type User = {
  name: string;
  email: string;
};

type Props = {
  scrolled: boolean;
};

export default function Navbar({ scrolled }: Props) {
  const { props } = usePage();
  const user = props.auth?.user as User | null;
  const isAuthenticated = !!user;

  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  // Ferme les menus quand on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest(".mobile-menu-container")) {
        setMobileMenuIsOpen(false);
      }
      if (!(e.target as HTMLElement).closest(".profile-dropdown")) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCloseMenus = () => {
    setMobileMenuIsOpen(false);
    setProfileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ease-in-out ${scrolled
          ? "bg-slate-950/92 backdrop-blur-xl border-b border-slate-800/70 shadow-xl shadow-black/40"
          : "bg-slate-950/30 backdrop-blur-lg border-b border-slate-800/30"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            onClick={handleCloseMenus}
          >
            <span className="text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-white">Frankam</span>
              <span className="text-cyan-400">Dev</span>
            </span>
          </Link>

          {/* Desktop (inchangé pour l'instant) */}
          <div className="hidden md:flex items-center space-x-8">
            {/* ... ton menu desktop ici ... */}
            {/* (je ne le répète pas pour raccourcir) */}
          </div>

          {/* Burger Button – avec indicateur doigt */}
          <div className="md:hidden relative flex items-center">
            {/* Petit doigt qui pointe (animation subtile) */}
            <div
              className={`absolute -top-10 right-1 transition-all duration-700 ease-out pointer-events-none ${mobileMenuIsOpen ? "opacity-0 translate-y-4" : "opacity-70 translate-y-0"
                }`}
            >
              <div className="flex flex-col items-center animate-pulse-slow">
                <Hand className="w-6 h-6 text-cyan-400 rotate-[-25deg]" />
                <span className="text-xs text-cyan-400/80 font-medium mt-0.5">clique ici</span>
              </div>
            </div>

            <button
              className={`
                relative z-50 p-2.5 rounded-full transition-all duration-300
                ${mobileMenuIsOpen ? "bg-cyan-500/20" : "hover:bg-slate-800/60"}
                focus:outline-none focus:ring-2 focus:ring-cyan-400/50
                active:scale-95
              `}
              onClick={() => setMobileMenuIsOpen((prev) => !prev)}
              aria-label="Menu mobile"
              aria-expanded={mobileMenuIsOpen}
            >
              <div className="relative w-7 h-7 flex items-center justify-center">
                <Menu
                  className={`w-7 h-7 text-cyan-300 absolute transition-all duration-500 ease-in-out ${mobileMenuIsOpen ? "opacity-0 scale-75 rotate-90" : "opacity-100 scale-100 rotate-0"
                    }`}
                />
                <X
                  className={`w-7 h-7 text-cyan-300 absolute transition-all duration-500 ease-in-out ${mobileMenuIsOpen ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90"
                    }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu – avec belles transitions */}
      <div
        className={`
          md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-500
          ${mobileMenuIsOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setMobileMenuIsOpen(false)}
      >
        <div
          className={`
            absolute top-0 right-0 bottom-0 w-4/5 max-w-sm bg-slate-950/98 backdrop-blur-xl border-l border-slate-800/70
            transition-transform duration-500 ease-out
            ${mobileMenuIsOpen ? "translate-x-0" : "translate-x-full"}
          `}
          onClick={(e) => e.stopPropagation()} // empêche la fermeture quand on clique dans le menu
        >
          <div className="flex flex-col h-full">
            {/* Header du menu mobile */}
            <div className="flex items-center justify-between p-5 border-b border-slate-800/60">
              <span className="text-xl font-bold">
                <span className="text-white">Frankam</span>
                <span className="text-cyan-400">Dev</span>
              </span>
              <button
                onClick={() => setMobileMenuIsOpen(false)}
                className="p-2 rounded-full hover:bg-slate-800/60 transition-colors"
              >
                <X className="w-6 h-6 text-gray-300" />
              </button>
            </div>

            {/* Contenu du menu */}
            <div className="flex-1 overflow-y-auto py-6 px-5 space-y-2">
              <MobileLink href="#features" onClick={handleCloseMenus}>
                Fonctionnalités
              </MobileLink>
              <MobileLink href="#pricing" onClick={handleCloseMenus}>
                Tarifs
              </MobileLink>
              <MobileLink href="#testimonials" onClick={handleCloseMenus}>
                Avis
              </MobileLink>

              <div className="pt-6 mt-4 border-t border-slate-800">
                {isAuthenticated ? (
                  <>
                    <div className="flex items-center space-x-3 mb-6 px-3 py-3 bg-slate-900/50 rounded-xl">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                        {user?.name?.[0]?.toUpperCase() || "?"}
                      </div>
                      <div>
                        <p className="font-medium text-white">{user?.name}</p>
                        <p className="text-sm text-gray-400 truncate">{user?.email}</p>
                      </div>
                    </div>

                    <MobileLink href="/dashboard" onClick={handleCloseMenus}>
                      Tableau de bord
                    </MobileLink>
                    <MobileLink href="/profile" onClick={handleCloseMenus}>
                      Mon profil
                    </MobileLink>
                    <MobileLink
                      href="/logout"
                      method="post"
                      className="text-red-400 hover:text-red-300"
                      onClick={handleCloseMenus}
                    >
                      Déconnexion
                    </MobileLink>
                  </>
                ) : (
                  <div className="space-y-4">
                    <Link
                      href="/login"
                      className="block py-4 px-5 text-center text-lg font-medium bg-slate-800/60 rounded-xl hover:bg-slate-700/70 transition"
                      onClick={handleCloseMenus}
                    >
                      Connexion
                    </Link>
                    <Link
                      href="/register"
                      className="block py-4 px-5 text-center text-lg font-medium bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg shadow-cyan-500/20 hover:brightness-110 transition"
                      onClick={handleCloseMenus}
                    >
                      Créer un compte
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

/* ------------------------------------------------------------------
   Petits composants (à garder comme avant ou à adapter)
------------------------------------------------------------------ */
function MobileLink({ href, children, method = "get", className = "", onClick }: any) {
  const common = `
    block px-5 py-4 text-gray-200 hover:text-white text-lg font-medium
    hover:bg-slate-800/50 rounded-xl transition duration-300
  `;

  if (method === "post") {
    return (
      <Link href={href} method="post" as="button" className={`${common} ${className}`} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={`${common} ${className}`} onClick={onClick}>
      {children}
    </Link>
  );
}