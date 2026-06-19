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
      <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Columna 1 — Redes */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-base font-semibold">¡Conéctate con nosotros!</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Síguenos en redes y descubre tips, novedades y oportunidades
              de arriendo. Únete a nuestra comunidad.
            </p>
            <div className="flex gap-2 mt-1">
              {socialLinks.map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  aria-label={label}
                  className="p-2.5 rounded-lg bg-slate-800 text-slate-400
                             hover:bg-brand-600 hover:text-white
                             transition-colors duration-150"
                >
                  <Icon className="size-3.5" />
                </button>
              ))}
            </div>
            <p className="text-slate-600 text-xs mt-3">© 2025 RoomRent. Todos los derechos reservados.</p>
          </div>

          {/* Columna 2 — Equipo */}
          <div className="flex flex-col gap-4">
            <h2 className="text-white text-base font-semibold">Creado por</h2>
            <ul className="flex flex-col gap-2.5">
              {authors.map((name) => (
                <li key={name} className="flex items-center gap-2.5 text-slate-400 text-sm">
                  <FaFireFlameCurved className="size-3.5 text-brand-400 flex-shrink-0" />
                  {name}
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 — SENA */}
          <div className="flex flex-col items-start md:items-center gap-4">
            <img
              src={sena}
              alt="SENA"
              className="w-28 rounded-lg opacity-80 hover:opacity-100 transition-opacity"
            />
            <div className="md:text-center">
              <p className="text-white font-semibold text-sm">Servicio Nacional de Aprendizaje</p>
              <p className="text-slate-400 text-sm mt-0.5">Ficha: 3311941</p>
              <p className="text-slate-500 text-xs mt-0.5">Tecnólogo en ADSO</p>
            </div>
          </div>
        </div>
      </footer>

      {/* FAB — scroll to top */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link to="home" spy smooth offset={-72}>
          <button
            aria-label="Volver arriba"
            className="p-3 rounded-full bg-brand-600 hover:bg-brand-700 text-white
                       shadow-lg hover:shadow-brand-600/25
                       transition-all duration-150"
          >
            <FaArrowUp className="size-4" />
          </button>
        </Link>
      </div>
    </>
  );
}
