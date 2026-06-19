export default function Contact() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark py-4 pb-20">
      <section
        id="contact"
        className="bg-brand-100 dark:bg-card-dark w-[95%] mx-auto rounded-2xl
                   px-6 md:px-12 lg:px-20 py-16
                   grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Formulario */}
        <div className="card p-8 flex flex-col gap-4">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">
            Envíanos tu mensaje
          </h2>
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
          <button className="btn-primary w-full">
            Enviar mensaje
          </button>
        </div>

        {/* Texto informativo */}
        <div className="flex flex-col gap-6 lg:px-6">
          <p data-aos="zoom-in" className="section-label">Contáctanos</p>
          <h2
            data-aos="zoom-in"
            data-aos-delay="200"
            className="section-title"
          >
            ¿Tienes dudas o quieres saber más?
          </h2>
          <p
            data-aos="zoom-in"
            data-aos-delay="350"
            className="text-gray-600 dark:text-gray-400 leading-relaxed"
          >
            Escríbenos sin miedo, estamos aquí para ayudarte. Nos encanta
            escuchar nuevas ideas, resolver tus preguntas y acompañarte en cada
            paso de tu arriendo. ¡Tu mensaje es el inicio de una buena
            conversación!
          </p>
        </div>
      </section>
    </div>
  );
}
