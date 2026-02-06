import { Link, usePage } from "@inertiajs/react";
import { Menu, X, User, LogOut, LayoutDashboard, ChevronDown } from "lucide-react";
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
      if (!(e.target as HTMLElement).closest(".profile-dropdown, .mobile-menu-container")) {
        setProfileOpen(false);
        setMobileMenuIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCloseMenus = () => {
    setMobileMenuIsOpen(false);
    setProfileOpen(false);
  };
  const { auth } = usePage().props;


  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${scrolled
        ? "bg-slate-950/92 backdrop-blur-xl border-b border-slate-800/70 shadow-xl shadow-black/40"
        : "bg-slate-950/40 backdrop-blur-lg border-b border-slate-800/40"
        }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2.5 group"
            onClick={handleCloseMenus}
          >
            <span className="text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-white">Frankam</span>
              <span className="text-cyan-400">Dev</span>
            </span>
          </Link>

          {/* Navigation DESKTOP – bien visible */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
            {/* Liens publics */}
            <NavLink href="#features">Fonctionnalités</NavLink>
            <NavLink href="#pricing">Tarifs</NavLink>
            <NavLink href="#testimonials">Avis</NavLink>
            <NavLink href="/blog">Blog</NavLink>

            {/* Espace authentification */}
            {isAuthenticated ? (
              <div className="relative profile-dropdown">
                <button
                  onClick={() => setProfileOpen((prev) => !prev)}
                  className="flex items-center gap-2.5 px-4 py-2 rounded-lg hover:bg-slate-800/60 transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-medium">

                    <img
                      src={auth.user.avatar ? `/storage/${auth.user.avatar}` : '/default-avatar.png'}
                      alt="avatar"
                      className="w-20 h-10 rounded-full"
                    />
                  </div>
                  <span className="font-medium text-gray-200 hidden lg:inline">
                    {user?.name?.split(" ")[0] || "Compte"}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-gray-400 transition-transform ${profileOpen ? "rotate-180" : ""
                      }`}
                  />
                </button>

                {/* Menu déroulant profil */}
                {profileOpen && (
                  <div className="absolute right-0 mt-3 w-64 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <DropdownLink href="/dashboard">
                      <LayoutDashboard className="w-4 h-4 mr-3" />
                      Tableau de bord
                    </DropdownLink>
                    <DropdownLink href="/profile">
                      <User className="w-4 h-4 mr-3" />
                      Mon profil
                    </DropdownLink>
                    <hr className="my-1.5 border-slate-700 mx-2" />
                    <DropdownLink
                      href="/logout"
                      method="post"
                      as="button"
                      className="text-red-400 hover:text-red-300 hover:bg-red-950/40"
                    >
                      <LogOut className="w-4 h-4 mr-3" />
                      Déconnexion
                    </DropdownLink>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex items-center gap-5">
                <Link
                  href="/login"
                  className="px-5 py-2 text-gray-200 font-medium hover:text-white transition-colors"
                >
                  Connexion
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.03] active:scale-95"
                >
                  S'inscrire
                </Link>
              </div>
            )}
          </div>

          {/* Burger mobile */}
          <button
            className="md:hidden p-2.5 rounded-full hover:bg-slate-800/60 transition-all duration-200 active:scale-95"
            onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
            aria-label="Menu mobile"
          >
            {mobileMenuIsOpen ? (
              <X className="w-7 h-7 text-cyan-300" />
            ) : (
              <Menu className="w-7 h-7 text-cyan-300" />
            )}
          </button>
        </div>
      </div>

      {/* Menu mobile (overlay + panneau latéral) */}
      {mobileMenuIsOpen && (
        <div
          className="md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-400"
          onClick={() => setMobileMenuIsOpen(false)}
        >
          <div
            className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-slate-950/98 backdrop-blur-xl border-l border-slate-800 transition-transform duration-500 ease-out ${mobileMenuIsOpen ? "translate-x-0" : "translate-x-full"
              }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-6 border-b border-slate-800/60">
                <span className="text-xl font-bold">
                  <span className="text-white">Frankam</span>
                  <span className="text-cyan-400">Dev</span>
                </span>
                <button onClick={() => setMobileMenuIsOpen(false)}>
                  <X className="w-7 h-7 text-gray-300" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6 space-y-2">
                <MobileLink href="#features" onClick={handleCloseMenus}>
                  Fonctionnalités
                </MobileLink>
                <MobileLink href="#pricing" onClick={handleCloseMenus}>
                  Tarifs
                </MobileLink>
                <MobileLink href="#testimonials" onClick={handleCloseMenus}>
                  Avis
                </MobileLink>
                <MobileLink href="#faq" onClick={handleCloseMenus}>
                  Blog
                </MobileLink>

                <div className="pt-8 mt-4 border-t border-slate-800">
                  {isAuthenticated ? (
                    <>
                      <div className="flex items-center gap-4 mb-6 p-4 bg-slate-900/50 rounded-xl">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl">
                          {user?.name?.[0]?.toUpperCase() || "?"}
                        </div>
                        <div>
                          <p className="font-medium text-white">{user?.name}</p>
                          <p className="text-sm text-gray-400">{user?.email}</p>
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
                        className="block py-4 px-6 text-center text-lg font-medium bg-slate-800/60 rounded-xl hover:bg-slate-700/70 transition"
                        onClick={handleCloseMenus}
                      >
                        Connexion
                      </Link>
                      <Link
                        href="/register"
                        className="block py-4 px-6 text-center text-lg font-medium bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl shadow-lg hover:brightness-110 transition"
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
      )}
    </nav>
  );
}

// Composants réutilisables
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-gray-200 hover:text-white text-base font-medium transition-colors relative group"
    >
      {children}
      <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
    </a>
  );
}

function MobileLink({
  href,
  children,
  method = "get",
  className = "",
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  method?: "get" | "post";
  className?: string;
  onClick?: () => void;
}) {
  const common = "block px-6 py-4 text-lg text-gray-200 hover:text-white hover:bg-slate-800/50 rounded-xl transition duration-300";

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

function DropdownLink({
  href,
  method = "get",
  className = "",
  children,
}: {
  href: string;
  method?: "get" | "post";
  className?: string;
  children: React.ReactNode;
}) {
  const common = "flex items-center px-5 py-3 text-gray-300 hover:bg-slate-800 hover:text-white transition duration-200";

  if (method === "post") {
    return (
      <Link href={href} method="post" as="button" className={`${common} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <Link href={href} className={`${common} ${className}`}>
      {children}
    </Link>
  );
}