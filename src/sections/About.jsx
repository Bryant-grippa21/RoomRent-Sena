import aboutimg from "../assets/images/sala.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white dark:bg-slate-800/40
                 w-full px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div data-aos="fade-right" className="flex justify-center">
          <img
            src={aboutimg}
            alt="Sala de una propiedad"
            className="rounded-2xl w-full max-w-sm lg:max-w-lg object-cover shadow-card-hover"
            style={{ maxHeight: "480px" }}
          />
        </div>

        <div className="flex flex-col gap-5">
          <p data-aos="fade-up" className="section-label">Quiénes somos</p>
          <h2 data-aos="fade-up" data-aos-delay="100" className="section-title">
            Tu aliado para encontrar o publicar propiedades de forma segura.
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-slate-600 dark:text-slate-400 leading-relaxed"
          >
            Somos una plataforma creada para conectar personas con espacios ideales, ofreciendo
            procesos de arriendo claros, seguros y sin complicaciones. Creemos en la transparencia,
            la confianza y la tecnología como herramientas para transformar la forma en que
            propietarios y arrendatarios se encuentran.
          </p>
          <div data-aos="fade-up" data-aos-delay="280">
            <button className="btn-primary">Ver más</button>
          </div>
        </div>
      </div>
    </section>
  );
}
