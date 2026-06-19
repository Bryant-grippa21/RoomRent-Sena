import area1 from "../assets/images/House.jpg";
import area2 from "../assets/images/Apartment.jpg";
import area3 from "../assets/images/Room.jpeg";

const types = [
  { img: area1, label: "Casas",        delay: "400" },
  { img: area2, label: "Apartamentos", delay: "500" },
  { img: area3, label: "Habitaciones", delay: "600" },
];

const stats = [
  { value: "5K",   label: "Propiedades\ndisponibles"       },
  { value: "+1K",  label: "Arrendadores que\nconfían en nosotros" },
  { value: "+800", label: "Arrendatarios que\nencontraron su hogar" },
];

export default function PopularAreas() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark py-4">
      <section className="bg-brand-100 dark:bg-card-dark w-[95%] mx-auto rounded-2xl px-6 md:px-12 lg:px-16 py-16 flex flex-col gap-16">

        {/* Encabezado + tarjetas de tipos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="flex flex-col gap-3">
            <p data-aos="zoom-in" className="section-label">Tipos de arriendo</p>
            <h2 data-aos="zoom-in" data-aos-delay="150" className="section-title">
              Explora todos los inmuebles disponibles
            </h2>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {types.map(({ img, label, delay }) => (
              <div
                key={label}
                data-aos="zoom-in"
                data-aos-delay={delay}
                className="relative h-64 md:h-72 rounded-2xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300 cursor-pointer"
                style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute bottom-4 left-4 px-3 py-1 bg-brand-500 text-white text-sm font-semibold rounded-full">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map(({ value, label }) => (
            <div
              key={value}
              data-aos="zoom-in"
              data-aos-delay="200"
              className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left"
            >
              <span className="text-5xl font-bold text-brand-900 dark:text-white">{value}</span>
              <span className="text-sm font-medium text-gray-600 dark:text-gray-400 whitespace-pre-line leading-snug pt-1">
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
