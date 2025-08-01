// src/components/BreedsCarousel.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaWhatsapp } from "react-icons/fa";

// ✅ Importar imágenes locales
import golden from "../assets/golden.jpeg";
import bulldog from "../assets/Bulldog.webp";
import beagle from "../assets/beagle.jpg";
import dalmata from "../assets/dalmata.jpg";
import rottweiler from "../assets/rottweiler.jpg";
import doberman from "../assets/doberman.jpeg";
import chit from "../assets/Shit Zu.webp";
import york from "../assets/Yorkshire.webp";
import pinch from "../assets/Pinscher.webp";
import teck from "../assets/Teckel.webp";
import jack from "../assets/Jack Russell.webp";
import ou from "../assets/....webp"; // ⚠ asegúrate de reemplazar este archivo
import corgi from "../assets/Corgi.webp";
import bernes from "../assets/Bernes de la montaña.webp";
import husk from "../assets/Husky siberiano.webp";
import sanber from "../assets/San Bernardo.webp";
import samo from "../assets/Samo.webp";
import ale from "../assets/Pastor alemán.webp";
import shet from "../assets/Shetland.webp";
import chow from "../assets/Chow chow.webp";
import pas from "../assets/Pastor ovejero australiano.webp";
import pes from "../assets/Pastor ganadero australiano.webp";
import bul from "../assets/Bulldog inglés.webp";
import bor from "../assets/cão-collie-border.webp";
import pom from "../assets/Pomsky.webp";

const breeds = [
  { name: "Golden Retriever", img: golden },
  { name: "Bulldog", img: bulldog },
  { name: "Beagle", img: beagle },
  { name: "Dálmata", img: dalmata },
  { name: "Rottweiler", img: rottweiler },
  { name: "Doberman", img: doberman },
  { name: "Shih Tzu", img: chit },
  { name: "Yorkshire", img: york },
  { name: "Pinscher", img: pinch },
  { name: "Teckel", img: teck },
  { name: "Jack Russell", img: jack },
   { name: "Westy", img: ou },
  { name: "Corgi", img: corgi },
  { name: "Bernés de la montaña", img: bernes },
  { name: "Husky Siberiano", img: husk },
  { name: "San Bernardo", img: sanber },
  { name: "Samoyedo", img: samo },
  { name: "Pastor Alemán", img: ale },
  { name: "Shetland Sheepdog", img: shet },
  { name: "Chow Chow", img: chow },
  { name: "Pastor Ovejero Australiano", img: pas },
  { name: "Pastor Ganadero Australiano", img: pes },
  { name: "Bulldog Inglés", img: bul },
  { name: "Border Collie", img: bor },
  { name: "Pomsky", img: pom },
];

const BreedsCarousel = () => {
  return (
    <section className="bg-[#363636] text-white py-20 px-6 md:px-20 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Razas Que Manejamos<span className="text-[#66B4FF]">.</span>
      </h2>
      <p className="text-gray-300 max-w-2xl mx-auto mb-12 text-lg">
        Conoce la variedad de razas que criamos con amor, ética y responsabilidad.  
      </p>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={800}
        loop={true}
        className="max-w-7xl"
      >
        {breeds.map((breed, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-[#1c1c1c] rounded-xl p-6 shadow-md hover:shadow-2xl transition transform hover:scale-105">
              <div className="w-36 h-36 mx-auto mb-4">
                <img
                  src={breed.img}
                  alt={breed.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white shadow-md"
                />
              </div>
              <h3 className="text-xl font-bold">{breed.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botón de WhatsApp */}
      <div className="flex justify-center mt-10">
        <a
          href="https://api.whatsapp.com/send?phone=573146582927&text=¡Hola!%20Estoy%20interesado%20en%20un%20cachorro%20🐶"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-110 hover:from-green-600 hover:to-green-700 transition-transform duration-300"
        >
          <FaWhatsapp className="text-2xl animate-bounce" />
          Contáctanos por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default BreedsCarousel;