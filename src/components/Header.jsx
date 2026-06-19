import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { FaXmark, FaBars, FaMoon, FaSun } from "react-icons/fa6";
import logo from "../assets/images/roomrent.png";
import useDarkMode from "./useDarkMode";
import { useAuth } from "../context/AuthContext";

const navItems = [
  { label: "Inicio",       path: "home",        type: "scroll" },
  { label: "Nosotros",     path: "about",        type: "scroll" },
  { label: "Propiedades",  path: "/properties",  type: "route"  },
  { label: "Servicios",    path: "services",     type: "scroll" },
  { label: "Testimonios",  path: "testimonials", type: "scroll" },
  { label: "Contacto",     path: "contact",      type: "scroll" },
];

const linkCls =
  "text-sm font-medium px-3 py-2 rounded-md " +
  "text-slate-600 dark:text-slate-300 " +
  "hover:text-brand-600 dark:hover:text-brand-400 " +
  "hover:bg-brand-50 dark:hover:bg-slate-800 " +
  "transition-colors duration-150 cursor-pointer";

const mobileLinkCls =
  "block text-sm font-medium px-3 py-2.5 rounded-md " +
  "text-slate-200 hover:text-white hover:bg-slate-700 " +
  "transition-colors duration-150 cursor-pointer";

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  const handleLogout = () => {
    logout();
    navigate("/");
    setMenuOpen(false);
  };

  const renderItem = ({ label, path, type }, mobile = false) => {
    const cls = mobile ? mobileLinkCls : linkCls;
    const close = () => setMenuOpen(false);

    if (type === "route") {
      return <RouterLink key={label} to={path} className={cls} onClick={close}>{label}</RouterLink>;
    }
    if (!isHome) {
      return (
        <RouterLink key={label} to="/" state={{ scrollTo: path }} className={cls} onClick={close}>
          {label}
        </RouterLink>
      );
    }
    return (
      <ScrollLink key={label} to={path} smooth offset={-72} className={cls} onClick={close}>
        {label}
      </ScrollLink>
    );
  };

  return (
    <nav className="sticky top-0 z-40 bg-nav-light dark:bg-nav-dark border-b border-slate-200/80 dark:border-slate-700/60 shadow-sm backdrop-blur-sm bg-white/95 dark:bg-slate-900/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <RouterLink to="/" className="flex-shrink-0 flex items-center gap-2">
            <img src={logo} alt="RoomRent" className="h-8 w-auto dark:invert" />
          </RouterLink>

          {/* Nav desktop */}
          <ul className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => renderItem(item))}
          </ul>

          {/* Acciones desktop */}
          <div className="hidden lg:flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              aria-label="Cambiar modo"
              className="p-2 rounded-md text-slate-500 dark:text-slate-400
                         hover:text-slate-700 dark:hover:text-slate-200
                         hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? <FaSun size={17} /> : <FaMoon size={17} />}
            </button>

            {user ? (
              <div className="flex items-center gap-2 ml-1">
                <span className="text-xs text-slate-500 dark:text-slate-400 max-w-[110px] truncate">
                  {user.firstName || user.login}
                </span>
                <button onClick={handleLogout} className="btn-danger">
                  Salir
                </button>
              </div>
            ) : (
              <RouterLink to="/login" className="btn-primary ml-1">
                Iniciar sesión
              </RouterLink>
            )}
          </div>

          {/* Mobile: dark toggle + hamburger */}
          <div className="flex lg:hidden items-center gap-1">
            <button
              onClick={toggleDarkMode}
              aria-label="Cambiar modo"
              className="p-2 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {darkMode ? <FaSun size={17} /> : <FaMoon size={17} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
              className="p-2 rounded-md text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              {menuOpen ? <FaXmark size={19} /> : <FaBars size={19} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu — dark siempre para mantener coherencia */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-900 border-t border-slate-700">
          <div className="px-3 py-3 flex flex-col gap-0.5">
            {navItems.map((item) => renderItem(item, true))}
            <div className="mt-2 pt-2 border-t border-slate-700">
              {user ? (
                <div className="flex items-center justify-between gap-3 px-1">
                  <span className="text-xs text-slate-400 truncate">{user.firstName || user.login}</span>
                  <button onClick={handleLogout} className="btn-danger">Salir</button>
                </div>
              ) : (
                <RouterLink
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary w-full justify-center"
                >
                  Iniciar sesión
                </RouterLink>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
