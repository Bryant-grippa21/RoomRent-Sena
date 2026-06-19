import { clients } from "../data/clients";
import { FaStar } from "react-icons/fa";

export default function Clients() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark">
      <section
        id="testimonials"
        className="w-[95%] mx-auto px-6 md:px-12 py-20 flex flex-col gap-12"
      >
        <div className="flex flex-col gap-3">
          <p data-aos="zoom-in" className="section-label">Nuestros clientes</p>
          <h2 data-aos="zoom-in" data-aos-delay="150" className="section-title">
            Lo que dicen quienes nos eligieron
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay="200"
              className="group card p-8 flex flex-col gap-5
                         hover:bg-brand-300 dark:hover:bg-brand-700
                         transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-brand-300"
                />
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white group-hover:text-white">
                    {item.name}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white/80">
                    {item.text}
                  </p>
                </div>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-white/90 leading-relaxed text-justify">
                {item.feedback}
              </p>

              <div className="flex gap-1 mt-auto">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="size-4 text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
