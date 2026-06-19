import area1 from "../assets/images/House.jpg";
import area2 from "../assets/images/Apartment.jpg";
import area3 from "../assets/images/Room.jpeg";

const types = [
  { img: area1, label: "Casas",        delay: "100" },
  { img: area2, label: "Apartamentos", delay: "180" },
  { img: area3, label: "Habitaciones", delay: "260" },
];

const stats = [
  { value: "5K",   label: "Propiedades disponibles"          },
  { value: "+1K",  label: "Arrendadores que confían en nosotros" },
  { value: "+800", label: "Arrendatarios que encontraron su hogar" },
];

export default function PopularAreas() {
  return (
    <section
      id="popular"
      className="bg-slate-50 dark:bg-slate-900 w-full px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-14">

        {/* Header + tarjetas de tipos */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
          <div className="flex flex-col gap-4">
            <p data-aos="fade-up" className="section-label">Tipos de arriendo</p>
            <h2 data-aos="fade-up" data-aos-delay="100" className="section-title">
              Explora todos los inmuebles disponibles
            </h2>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {types.map(({ img, label, delay }) => (
              <div
                key={label}
                data-aos="fade-up"
                data-aos-delay={delay}
                className="relative h-60 rounded-xl overflow-hidden shadow-card
                           hover:shadow-card-hover hover:scale-[1.02]
                           transition-all duration-300 cursor-pointer"
                style={{ backgroundImage: `url(${img})`, backgroundSize: "cover", backgroundPosition: "center" }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
                <span className="absolute bottom-4 left-4 px-2.5 py-1 bg-brand-600 text-white text-xs font-semibold rounded-md">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-slate-200 dark:border-slate-700 pt-12">
          {stats.map(({ value, label }, i) => (
            <div
              key={value}
              data-aos="fade-up"
              data-aos-delay={i * 80}
              className="flex items-start gap-4"
            >
              <span className="text-5xl font-extrabold text-brand-600 dark:text-brand-400 leading-none">
                {value}
              </span>
              <span className="text-sm font-medium text-slate-600 dark:text-slate-400 leading-snug pt-1.5">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
