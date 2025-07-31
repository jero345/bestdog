import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaWhatsapp } from "react-icons/fa"; // Ícono de WhatsApp

// Importar imágenes locales
import golden from "../assets/golden.jpeg";
import bulldog from "../assets/Bulldog.webp";
import beagle from "../assets/beagle.jpg";
import dalmata from "../assets/dalmata.jpg";
import rottweiler from "../assets/rottweiler.jpg";
import doberman from "../assets/doberman.jpeg";

const breeds = [
  { name: "Golden Retriever", img: golden },
  { name: "Bulldog", img: bulldog },
  { name: "Beagle", img: beagle },
  { name: "Dalmata", img: dalmata },
  { name: "Rottweiler", img: rottweiler },
  { name: "Doberman", img: doberman },
];

const BreedsCarousel = () => {
  return (
    <section className="bg-[#363636] text-white py-20 px-6 md:px-20 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
        Razas Que Manejamos<span className="text-[#66B4FF]">.</span>
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-12">
        We help save lives of your beloved pets. Our expert pet trainers are
        always here to help your pet in need.
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
        className="max-w-6xl"
      >
        {breeds.map((breed, idx) => (
          <SwiperSlide key={idx}>
            <div className="bg-[#1c1c1c] rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <div className="w-32 h-32 mx-auto mb-4">
                <img
                  src={breed.img}
                  alt={breed.name}
                  className="w-full h-full object-cover rounded-full border-4 border-white"
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
          className="flex items-center gap-3 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 hover:from-green-600 hover:to-green-700 transition-transform duration-300"
        >
          <FaWhatsapp className="text-2xl" />
          Contáctanos por WhatsApp
        </a>
      </div>
    </section>
  );
};

export default BreedsCarousel;
