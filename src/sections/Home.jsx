import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
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
    <div className="bg-surface-light dark:bg-surface-dark">

      {/* Hero */}
      <section
        id="home"
        className="w-[95%] mx-auto h-[580px] md:h-[640px] bg-cover bg-center rounded-2xl mt-4
                   flex flex-col justify-center items-start px-8 md:px-20 lg:px-28 gap-6"
        style={{ backgroundImage: `url(${cityimg})` }}
      >
        <div className="max-w-xl">
          <h1
            data-aos="zoom-in"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Encuentra tu próximo hogar en Bogotá
          </h1>
          <p data-aos="zoom-in" data-aos-delay="150" className="text-white/90 text-lg mt-4">
            Cada rincón de Bogotá guarda un nuevo comienzo. Encuentra el tuyo hoy.
          </p>
        </div>
      </section>

      {/* Buscador */}
      <div className="relative z-10">
        <div
          data-aos="zoom-in"
          className="card w-[95%] md:w-[80%] lg:w-[70%] mx-auto
                     grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 -mt-12 shadow-lg"
        >
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1.5">
              Localidad
            </label>
            <select
              value={locationFilter}
              onChange={(e) => setLocationFilter(e.target.value)}
              className="select-base"
            >
              <option value="">Selecciona localidad</option>
              {localidades.map((loc) => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1.5">
              Tipo
            </label>
            <select value={type} onChange={(e) => setType(e.target.value)} className="select-base">
              <option value="">Selecciona tipo</option>
              <option value="Casa">Casa</option>
              <option value="Apartamento">Apartamento</option>
              <option value="Habitación">Habitación</option>
              <option value="Roomie">Roomie</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-400 mb-1.5">
              Precio
            </label>
            <select value={price} onChange={(e) => setPrice(e.target.value)} className="select-base">
              <option value="">Selecciona precio</option>
              <option value="0-500000">Menos de $500.000</option>
              <option value="500000-1000000">$500.000 – $1.000.000</option>
              <option value="1000000-1500000">$1.000.000 – $1.500.000</option>
              <option value="1500000+">Más de $1.500.000</option>
            </select>
          </div>

          <div className="flex items-end">
            <button onClick={handleSearch} className="btn-primary w-full">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
