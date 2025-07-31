// src/components/Hero.jsx
import { useEffect, useState } from "react";
import banner11 from "../assets/banner11.jpg";
import banner22 from "../assets/banner22.jpg";

const slides = [
  {
    img: banner11,
    title: "Nuestro compromiso",
    desc: "Empieza mucho antes de que el cachorro llegue a ti",
  },
  {
    img: banner22,
    title: "Bienestar animal real",
    desc: "Más que una promesa, es nuestro compromiso",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setIndex((prev) => (prev + 1) % slides.length);

  const { img, title, desc } = slides[index];

  return (
    <section
      className="relative h-screen w-full bg-cover bg-center transition-all duration-700 flex items-center"
      style={{ backgroundImage: `url(${img})` }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl px-6 md:pl-20">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          {title}
        </h1>
        <p className="text-white mt-6 text-lg drop-shadow-md">{desc}</p>

        <div className="mt-8 flex gap-4">
          <a
            href="https://wa.me/573146582927?text=¡Hola!%20Estoy%20interesado%20en%20un%20cachorro.%20🐶"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#363636] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Contáctanos ahora
          </a>
        </div>
      </div>

      {/* Flechas */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 hover:bg-white text-black font-bold z-10 transition"
      >
        ←
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-[#363636] hover:bg-[#e89e1e] text-white font-bold z-10 transition"
      >
        →
      </button>
    </section>
  );
};

export default Hero;
