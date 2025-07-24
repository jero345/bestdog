// src/components/Hero.jsx
import { useEffect, useState } from "react";

const images = [
  {
    url: "-/assets/dog-hero.jpg",
    title: "Man’s best friend!",
    desc: "Welcome to the no.1 rated dogs training & breeding center in Sydney.",
  },
  {
    url: "/assets/dog-hero-2.jpg",
    title: "Happy and Healthy Pets!",
    desc: "Our mission is to keep your pets joyful and full of life.",
  },
  {
    url: "/assets/dog-hero-3.jpg",
    title: "Training, Grooming & More",
    desc: "Everything your pet needs in one place.",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  // Auto-advance every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
  const next = () => setIndex((prev) => (prev + 1) % images.length);

  const { url, title, desc } = images[index];

  return (
    <section
      className="h-screen w-full bg-cover bg-center relative flex items-center transition-all duration-700"
      style={{ backgroundImage: `url(${url})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10 max-w-4xl pl-20">
        <h1 className="text-white text-6xl font-bold leading-tight">{title}</h1>
        <p className="text-white mt-6 text-lg">{desc}</p>
      </div>

      <button
        onClick={prev}
        className="absolute left-6 bottom-1/2 translate-y-1/2 w-10 h-10 rounded-full bg-white/50 hover:bg-white/80 transition text-xl z-10"
      >
        ←
      </button>
      <button
        onClick={next}
        className="absolute right-6 bottom-1/2 translate-y-1/2 w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 transition text-white text-xl z-10"
      >
        →
      </button>
    </section>
  );
};

export default Hero;
