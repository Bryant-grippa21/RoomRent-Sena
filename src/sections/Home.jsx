import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import cityimg from "../assets/images/city.png";

const localidades = [
  "Antonio Nariño","Barrios Unidos","Bosa","Chapinero","Engativá",
  "Fontibón","Kennedy","Usaquén","Santa Fe","San Cristóbal","Usme",
  "Tunjuelito","Suba","Teusaquillo","Los Mártires","Puente Aranda",
  "Rafael Uribe Uribe","Ciudad Bolívar","La Candelaria",
];

export default function Home() {
  const navigate = useNavigate();
  const [locationFilter, setLocationFilter] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const handleSearch = () => {
    navigate(`/properties?location=${locationFilter}&type=${type}&price=${price}`);
  };

  return (
    <div id="home" className="bg-surface-light dark:bg-surface-dark">

      {/* Hero */}
      <section className="relative w-[95%] mx-auto h-[580px] md:h-[640px] rounded-2xl mt-4 overflow-hidden">
        {/* Imagen de fondo */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${cityimg})` }}
        />
        {/* Overlay con gradiente — garantiza legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/75 via-slate-900/50 to-slate-900/20" />

        {/* Contenido del hero */}
        <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-20">
          <div className="max-w-xl">
            <span
              data-aos="fade-up"
              className="inline-block text-xs font-bold tracking-[0.15em] uppercase text-brand-300 mb-4"
            >
              Bogotá · Arriendos y propiedades
            </span>
            <h1
              data-aos="fade-up"
              data-aos-delay="80"
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight"
            >
              Encuentra tu próximo hogar
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="180"
              className="text-slate-300 text-lg mt-5 leading-relaxed"
            >
              Cada rincón de Bogotá guarda un nuevo comienzo.
              Encuentra el tuyo hoy.
            </p>
          </div>
        </div>
      </section>

      {/* Buscador flotante */}
      <div className="relative z-10 container-page">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="card w-full md:w-[90%] lg:w-[80%] mx-auto
                     grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4
                     p-5 md:p-6 -mt-10 shadow-card-hover"
        >
          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
              Localidad
            </label>
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="select-base"
            >
              <option value="">Todas las localidades</option>
              {localidades.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
              Tipo
            </label>
            <select value={type} onChange={(e) => setType(e.target.value)} className="select-base">
              <option value="">Todos los tipos</option>
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
              <option value="Habitación">Habitación</option>
              <option value="Roomie">Roomie</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wide">
              Precio
            </label>
            <select value={price} onChange={(e) => setPrice(e.target.value)} className="select-base">
              <option value="">Cualquier precio</option>
              <option value="0-500000">Hasta $500.000</option>
              <option value="500000-1000000">$500.000 – $1.000.000</option>
              <option value="1000000-1500000">$1.000.000 – $1.500.000</option>
              <option value="1500000+">Más de $1.500.000</option>
            </select>
          </div>

          <div className="flex items-end">
            <button onClick={handleSearch} className="btn-primary w-full gap-2">
              <FaSearch className="size-3.5" />
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
