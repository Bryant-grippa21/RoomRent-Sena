import aboutimg from "../assets/images/sala.jpg";

export default function About() {
  return (
    <section
      id="about"
      className="bg-surface-light dark:bg-surface-dark
                 w-full px-6 md:px-16 lg:px-32 py-20
                 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
    >
      <div data-aos="zoom-in" className="flex justify-center">
        <img
          src={aboutimg}
          alt="Sala de una propiedad"
          className="rounded-2xl w-full max-w-sm lg:max-w-md object-cover shadow-md"
          style={{ maxHeight: "520px" }}
        />
      </div>

      <div className="flex flex-col gap-6">
        <p data-aos="zoom-in" className="section-label">Quiénes somos</p>
        <h2
          data-aos="zoom-in"
          data-aos-delay="150"
          className="section-title"
        >
          Tu aliado para encontrar o publicar propiedades de forma segura.
        </h2>
        <p
          data-aos="zoom-in"
          data-aos-delay="250"
          className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify"
        >
          Somos una plataforma creada para conectar personas con espacios ideales, ofreciendo
          procesos de arriendo claros, seguros y sin complicaciones. Creemos en la transparencia,
          la confianza y la tecnología como herramientas para transformar la forma en que
          propietarios y arrendatarios se encuentran.
        </p>
        <div>
          <button className="btn-primary">Ver más</button>
        </div>
      </div>
    </section>
  );
}
