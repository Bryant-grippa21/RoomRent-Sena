import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const contactInfo = [
  { icon: FaEnvelope, label: "Email",    value: "contacto@roomrent.co" },
  { icon: FaPhone,    label: "Teléfono", value: "+57 300 123 4567"     },
  { icon: FaMapMarkerAlt, label: "Dirección", value: "Bogotá, Colombia" },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-slate-800/40 w-full px-4 sm:px-6 lg:px-8 py-20 pb-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* Lado izquierdo — info */}
        <div className="flex flex-col gap-6">
          <p data-aos="fade-up" className="section-label">Contáctanos</p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="section-title">
            ¿Tienes dudas o quieres saber más?
          </h2>
          <p data-aos="fade-up" data-aos-delay="180" className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Escríbenos sin miedo, estamos aquí para ayudarte. Nos encanta
            escuchar nuevas ideas, resolver tus preguntas y acompañarte en cada
            paso de tu arriendo.
          </p>

          <div className="flex flex-col gap-4 mt-2">
            {contactInfo.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-brand-50 dark:bg-brand-900/30">
                  <Icon className="size-4 text-brand-600 dark:text-brand-400" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wide">{label}</p>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Lado derecho — formulario */}
        <div data-aos="fade-up" data-aos-delay="150" className="card p-7 flex flex-col gap-4">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
            Envíanos tu mensaje
          </h3>
          <input
            type="text"
            placeholder="Nombre completo"
            className="input-base"
          />
          <input
            type="email"
            placeholder="Correo electrónico"
            className="input-base"
          />
          <input
            type="tel"
            placeholder="Número de contacto"
            className="input-base"
          />
          <textarea
            rows={4}
            placeholder="Escribe tu mensaje aquí..."
            className="input-base resize-none"
          />
          <button className="btn-primary w-full mt-1">
            Enviar mensaje
          </button>
        </div>
      </div>
    </section>
  );
}
