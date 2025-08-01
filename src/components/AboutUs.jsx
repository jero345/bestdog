// src/components/AboutUs.jsx
import aboutImg from "../assets/about-hero.png"; // usa tu imagen real aquí

const AboutUs = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
      {/* Imagen /}
      <div
        className="h-[300px] lg:h-full w-full bg-cover bg-center"
        style={{ backgroundImage: url(${aboutImg}) }}
      >
        <div className="flex items-end justify-center lg:justify-start h-full p-4 lg:p-6">
          <div className="bg-white shadow-md p-4 rounded-xl flex items-center gap-3 max-w-[90%] sm:max-w-[70%] lg:max-w-[80%]">
            <span className="text-orange-500 text-3xl lg:text-4xl"></span>
            <p className="font-bold text-sm sm:text-base lg:text-lg text-gray-800">

            </p>
          </div>
        </div>
      </div>

      {/ Texto */}
      <div className="bg-[#66B4FF] text-white flex flex-col justify-center p-6 sm:p-10 lg:p-20 relative">
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">¿Quienes somos?</h2>
          <div className="bg-[#363636] p-4 sm:p-6 rounded-xl text-base sm:text-lg leading-relaxed font-medium">
           Somos un criadero familiar que cría con amor, respeto y conciencia. Para nosotros, la ética no es una opción, es la base de todo lo que hacemos. Cuidamos cada cachorro desde el primer día, asegurando su bienestar físico y emocional, y también velamos por la salud y el descanso de sus padres, porque ellos son parte esencial de nuestra familia. Aquí todo se hace con cariño, responsabilidad y compromiso real.
            <br />
            <span className="block mt-4 text-right text-sm sm:text-base font-semibold">
              &mdash; Best Dog
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;