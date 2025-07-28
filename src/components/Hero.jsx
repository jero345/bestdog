// src/components/Hero.jsx
import { useEffect, useState } from "react";

const slides = [
  {
    bg: "bg-[url('https://images.unsplash.com/photo-1560807707-8cc77767d783')] bg-cover bg-center", 
    title: "Man’s best friend!",
    desc: "Welcome to the no.1 rated dogs training & breeding center in Sydney.",
  },
  {
    bg: "bg-[url('https://images.unsplash.com/photo-1601758123927-1965b6d864a7')] bg-cover bg-center", 
    title: "Happy and Healthy Pets!",
    desc: "Our mission is to keep your pets joyful and full of life.",
  },
  {
    bg: "bg-[url('https://images.unsplash.com/photo-1537151625747-768eb6cf92b6')] bg-cover bg-center", 
    title: "Training, Grooming & More",
    desc: "Everything your pet needs in one place.",
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

  const { bg, title, desc } = slides[index];

  return (
    <section
      className={`relative h-screen w-full ${bg} transition-all duration-700 flex items-center`}
    >
      {/* Overlay oscuro para resaltar el texto */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Contenido */}
      <div className="relative z-10 max-w-4xl px-6 md:pl-20">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          {title}
        </h1>
        <p className="text-white mt-6 text-lg drop-shadow-md">{desc}</p>

        <div className="mt-8 flex gap-4">
          <button className="bg-[#fab037] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e89e1e] transition">
            Learn More
          </button>
          <button className="bg-white text-[#fab037] px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
            Purchase
          </button>
        </div>
      </div>

      {/* Flechas de navegación */}
      <button
        onClick={prev}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white/70 hover:bg-white text-black font-bold z-10 transition"
      >
        ←
      </button>
      <button
        onClick={next}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 w-10 h-10 rounded-full bg-[#fab037] hover:bg-[#e89e1e] text-white font-bold z-10 transition"
      >
        →
      </button>
    </section>
  );
};

export default Hero;
