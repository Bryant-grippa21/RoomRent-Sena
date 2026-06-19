import { services } from "../data/services";

export default function Services() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark py-4">
      <section
        id="services"
        className="bg-brand-100 dark:bg-card-dark w-[95%] mx-auto rounded-2xl
                   px-6 md:px-12 lg:px-16 py-16 flex flex-col gap-12"
      >
        <div className="flex flex-col gap-3">
          <p data-aos="zoom-in" className="section-label">Nuestros servicios</p>
          <h2 data-aos="zoom-in" data-aos-delay="150" className="section-title">
            Los mejores servicios para ti
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay="200"
              className="group card px-8 py-10 flex flex-col gap-4
                         border-b-4 border-brand-500
                         hover:bg-brand-300 dark:hover:bg-brand-700
                         hover:border-brand-900 transition-all duration-300 cursor-pointer"
            >
              <div className="p-4 rounded-2xl bg-brand-100 dark:bg-brand-900/30 w-fit
                              group-hover:bg-white/20 transition-colors duration-300">
                <service.icon className="text-brand-900 dark:text-brand-300 size-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 group-hover:text-white/90 leading-relaxed">
                {service.desc}
              </p>
              <button className="text-sm font-semibold text-brand-600 dark:text-brand-300 group-hover:text-white
                                 border-b-2 border-brand-600 dark:border-brand-300 group-hover:border-white
                                 w-fit pb-0.5 transition-colors duration-200">
                Leer más
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
