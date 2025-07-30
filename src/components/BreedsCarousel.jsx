import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

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
          delay: 3000, // ⏱️ Tiempo que se queda cada slide (3s)
          disableOnInteraction: false, // sigue después de interacción
        }}
        speed={800} // ⏩ Duración de la transición (0.8s)
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

      <div className="flex justify-center gap-6 mt-10">
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          Find Out More
        </button>
        <button className="bg-[#66B4FF] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#363636] transition">
          Purchase
        </button>
      </div>
    </section>
  );
};

export default BreedsCarousel;
