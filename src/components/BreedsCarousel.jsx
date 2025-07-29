import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const breeds = [
  { name: "Bolognese", img: "https://i.ibb.co/4YJH7Kg/bolognese.jpg" },
  { name: "Bulldog", img: "https://i.ibb.co/cY4nYrP/bulldog.jpg" },
  { name: "Greyhound", img: "https://i.ibb.co/4P6pLHR/greyhound.jpg" },
  { name: "Dalmatian", img: "https://i.ibb.co/3R8Z6nJ/dalmatian.jpg" },
  { name: "Collie", img: "https://i.ibb.co/3S5Mzbc/collie.jpg" },
  { name: "Dachshund", img: "https://i.ibb.co/kXy5y5N/dachshund.jpg" },
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
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
        navigation
        pagination={{ clickable: true }}
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
