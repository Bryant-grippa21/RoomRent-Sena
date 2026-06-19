import { services } from "../data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white dark:bg-slate-800/40 w-full px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="flex flex-col gap-3 max-w-xl">
          <p data-aos="fade-up" className="section-label">Nuestros servicios</p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="section-title">
            Los mejores servicios para ti
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="group card card-hover px-7 py-8 flex flex-col gap-4
                         hover:bg-brand-600 dark:hover:bg-brand-700 cursor-pointer"
            >
              <div className="p-3 rounded-lg bg-brand-50 dark:bg-brand-900/30 w-fit
                              group-hover:bg-white/15 transition-colors duration-200">
                <service.icon className="text-brand-600 dark:text-brand-400 size-7
                                         group-hover:text-white" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white
                             group-hover:text-white">
                {service.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed
                            group-hover:text-white/85">
                {service.desc}
              </p>
              <span className="text-sm font-semibold text-brand-600 dark:text-brand-400
                               group-hover:text-white/90 w-fit mt-auto
                               border-b border-brand-200 dark:border-brand-700
                               group-hover:border-white/40 pb-0.5 transition-colors duration-200">
                Leer más
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
