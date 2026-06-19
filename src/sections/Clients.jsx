import { clients } from "../data/clients";
import { FaStar } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa6";

export default function Clients() {
  return (
    <section
      id="testimonials"
      className="bg-slate-50 dark:bg-slate-900 w-full px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-3 max-w-xl">
          <p data-aos="fade-up" className="section-label">Nuestros clientes</p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="section-title">
            Lo que dicen quienes nos eligieron
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="card card-hover p-7 flex flex-col gap-5"
            >
              <FaQuoteLeft className="size-5 text-brand-300 dark:text-brand-600" />

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed flex-1">
                {item.feedback}
              </p>

              <div className="flex gap-0.5 mt-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} className="size-3.5 text-amber-400" />
                ))}
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-brand-100 dark:ring-brand-800"
                />
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">
                    {item.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
