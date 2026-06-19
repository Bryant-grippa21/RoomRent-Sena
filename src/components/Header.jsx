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
  "text-sm font-medium uppercase tracking-wide px-3 py-2 rounded-lg " +
  "text-gray-800 dark:text-gray-200 " +
  "hover:bg-brand-500 hover:text-white dark:hover:bg-brand-500 " +
  "transition-colors duration-200 cursor-pointer";

const mobileLinkCls =
  "block text-sm font-medium uppercase tracking-wide px-4 py-3 rounded-lg " +
  "text-gray-200 hover:bg-brand-500 transition-colors duration-200 cursor-pointer";

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
      <ScrollLink key={label} to={path} smooth offset={-80} className={cls} onClick={close}>
        {label}
      </ScrollLink>
    );
  };

  return (
    <nav className="sticky top-0 z-40 bg-nav-light dark:bg-nav-dark border-b border-brand-100 dark:border-gray-700/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <RouterLink to="/" className="flex-shrink-0">
            <img src={logo} alt="RoomRent" className="h-10 w-auto rounded-xl dark:invert" />
          </RouterLink>

          {/* Nav desktop */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => renderItem(item))}
          </ul>

          {/* Acciones desktop */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleDarkMode}
              aria-label="Cambiar modo"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-brand-100 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>

            {user ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600 dark:text-gray-400 max-w-[120px] truncate">
                  {user.firstName || user.login}
                </span>
                <button onClick={handleLogout} className="btn-danger">
                  Cerrar sesión
                </button>
              </div>
            ) : (
              <RouterLink to="/login" className="btn-primary text-sm px-5 py-2">
                Iniciar sesión
              </RouterLink>
            )}
          </div>

          {/* Mobile: toggle + hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleDarkMode}
              aria-label="Cambiar modo"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-brand-100 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
              className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:bg-brand-100 dark:hover:bg-gray-700 transition-colors"
            >
              {menuOpen ? <FaXmark size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-700 shadow-lg">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => renderItem(item, true))}
            <div className="mt-3 pt-3 border-t border-gray-700">
              {user ? (
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-gray-400 truncate">{user.firstName || user.login}</span>
                  <button onClick={handleLogout} className="btn-danger">
                    Cerrar sesión
                  </button>
                </div>
              ) : (
                <RouterLink
                  to="/login"
                  onClick={() => setMenuOpen(false)}
                  className="btn-primary w-full justify-center text-sm"
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
