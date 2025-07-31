// src/components/AboutUs.jsx
import aboutImg from "../assets/about-hero.png"; // usa tu imagen real aquí

const AboutUs = () => {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
      {/* Imagen */}
      <div
        className="h-[300px] lg:h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${aboutImg})` }}
      >
        <div className="flex items-end justify-center lg:justify-start h-full p-4 lg:p-6">
          <div className="bg-white shadow-md p-4 rounded-xl flex items-center gap-3 max-w-[90%] sm:max-w-[70%] lg:max-w-[80%]">
            <span className="text-orange-500 text-3xl lg:text-4xl">🩺</span>
            <p className="font-bold text-sm sm:text-base lg:text-lg text-gray-800">
              Helping save precious lives since 2009.
            </p>
          </div>
        </div>
      </div>

      {/* Texto */}
      <div className="bg-[#66B4FF] text-white flex flex-col justify-center p-6 sm:p-10 lg:p-20 relative">
        <div className="relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">About us.</h2>
          <div className="bg-[#363636] p-4 sm:p-6 rounded-xl text-base sm:text-lg leading-relaxed font-medium">
            “Dogs don’t make judgments about physical appearance or abilities, 
            and they don’t care how big your house is or what you do for a living. 
            They care about the quality of your character and your capacity to love.”
            <br />
            <span className="block mt-4 text-right text-sm sm:text-base font-semibold">
              &mdash; Elizabeth
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
