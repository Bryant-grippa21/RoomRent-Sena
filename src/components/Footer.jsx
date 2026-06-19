import {
  FaFacebookF, FaThreads, FaInstagram, FaYoutube, FaXTwitter,
  FaArrowUp, FaFireFlameCurved,
} from "react-icons/fa6";
import { Link } from "react-scroll";
import sena from "../assets/images/Sena.png";

const socialLinks = [
  { icon: FaFacebookF, label: "Facebook" },
  { icon: FaInstagram, label: "Instagram" },
  { icon: FaXTwitter,  label: "Twitter/X" },
  { icon: FaYoutube,   label: "YouTube"   },
  { icon: FaThreads,   label: "Threads"   },
];

const authors = ["Ronal Cucariano", "Briant Grippa", "Jose Bohorquez", "Santiago Basto"];

export default function Footer() {
  return (
    <>
      <footer className="bg-gray-900 dark:bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Columna 1 — Redes */}
          <div className="flex flex-col gap-5">
            <h2 className="text-white text-xl font-semibold">¡Conéctate con nosotros!</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Síguenos en redes sociales y descubre tips, novedades y oportunidades
              de arriendo. Únete a nuestra comunidad inmobiliaria.
            </p>
            <div className="flex gap-3 mt-1">
              {socialLinks.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="p-2.5 rounded-xl bg-gray-800 text-gray-400 hover:bg-brand-500 hover:text-white transition-colors duration-200"
                >
                  <Icon className="size-4" />
                </button>
              ))}
            </div>
            <p className="text-gray-600 text-xs mt-4">© 2025 RoomRent. Todos los derechos reservados.</p>
          </div>

          {/* Columna 2 — Equipo */}
          <div className="flex flex-col gap-5">
            <h2 className="text-white text-xl font-semibold">Creado por</h2>
            <ul className="flex flex-col gap-3">
              {authors.map((name) => (
                <li key={name} className="flex items-center gap-3 text-gray-400 text-sm">
                  <FaFireFlameCurved className="size-4 text-brand-300 flex-shrink-0" />
                  {name}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — SENA */}
          <div className="flex flex-col items-start md:items-center gap-5">
            <img
              src={sena}
              alt="SENA"
              className="w-32 rounded-xl opacity-90 hover:opacity-100 transition-opacity"
            />
            <div className="text-center md:text-center">
              <p className="text-white font-semibold text-sm">Servicio Nacional de Aprendizaje</p>
              <p className="text-gray-400 text-sm mt-1">Ficha: 3311941</p>
              <p className="text-gray-400 text-sm">Tecnólogo en Análisis y Desarrollo de Software</p>
            </div>
          </div>
        </div>
      </footer>

      {/* FAB — scroll to top */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <Link to="home" spy smooth offset={-80}>
          <button
            aria-label="Volver arriba"
            className="p-3 rounded-full bg-brand-500 hover:bg-brand-900 text-white shadow-lg transition-colors duration-200"
          >
            <FaArrowUp className="size-5" />
          </button>
        </Link>
      </div>
    </>
  );
}
