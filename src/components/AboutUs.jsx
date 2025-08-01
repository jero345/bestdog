import pun from "../assets/ofk.jpg"; // Imagen importada

const AboutUs = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[400px] bg-[#66B4FF]">
      {/* Imagen */}
      <div className="relative flex items-center justify-center p-4">
        <div className="bg-[#66B4FF] w-full h-full flex justify-center items-center rounded-lg">
          <img
            src={pun}
            alt="Quiénes somos"
            className="max-w-full max-h-[400px] object-contain rounded-lg shadow-lg"
          />
        </div>
        <div className="absolute bottom-4 left-1/2 lg:left-6 transform -translate-x-1/2 lg:translate-x-0 bg-white shadow-md p-2 sm:p-3 rounded-xl flex items-center gap-2 sm:gap-3 max-w-[90%] sm:max-w-[70%] lg:max-w-[60%]">
          <span className="text-purple-700 text-lg sm:text-xl lg:text-2xl">🐾</span>
          <p className="font-bold text-xs sm:text-sm lg:text-base text-gray-800">
            Amamos lo que hacemos
          </p>
        </div>
      </div>

      {/* Texto */}
      <div className="text-white flex flex-col justify-center p-5 sm:p-10 lg:p-16">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-5">
          ¿Quiénes somos?
        </h2>
        <div className="bg-[#363636] p-4 sm:p-6 rounded-xl text-sm sm:text-base lg:text-lg leading-relaxed font-medium">
          Somos un criadero familiar con experiencia de 5 años en el mercado
          que cría con amor, respeto y conciencia. Para nosotros, la ética no
          es una opción, es la base de todo lo que hacemos. Cuidamos cada
          cachorro desde el primer día, asegurando su bienestar físico y
          emocional, velamos por su salud y el descanso de sus padres, porque
          ellos son parte esencial de nuestra familia. Aquí todo se hace con
          cariño, responsabilidad y compromiso real. 🐶🦴🐾
          <span className="block mt-4 text-right text-xs sm:text-sm lg:text-base font-semibold">
            &mdash; Best Dog
          </span>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
