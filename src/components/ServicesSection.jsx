// src/components/Services.jsx
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import altaCalidad from "../assets/alta-calidad.jpg";
import certificado from "../assets/certificado.png";
import crianza from "../assets/crianza.jpg";
import acompanamiento from "../assets/acompañamiento.png";
import kit from "../assets/kit.png";
import entregas from "../assets/entregas.png";

const services = [
  {
    title: "Cachorros de alta calidad",
    desc: "Nuestros cachorros cuentan con un Certificado de Salud y Pureza que garantiza revisiones veterinarias y linaje auténtico, ofreciéndote confianza y tranquilidad en tu nueva compañía.",
    img: altaCalidad,
  },
  {
    title: "Certificado de salud y pureza",
    desc: "Cada cachorro se entrega con un Certificado de Salud y Pureza que avala su excelente estado físico y la autenticidad de su linaje, garantizando confianza y tranquilidad a su nueva familia.",
    img: certificado,
  },
  {
    title: "Crianza con ética",
    desc: "En nuestro criadero priorizamos el bienestar y la felicidad de cada cachorro, criándolos con amor, responsabilidad y respeto. Nuestro compromiso es ofrecer familias peluditas sanas, equilibradas y criadas con ética.",
    img: crianza,
  },
  {
    title: "Acompañamiento y seguimiento",
    desc: "Brindamos acompañamiento y seguimiento continuo para garantizar la adaptación, cuidado y bienestar de tu cachorro, incluso después de llegar a su nuevo hogar.",
    img: acompanamiento,
  },
  {
    title: "Kit de bienvenida",
    desc: "Entregamos a cada familia un Kit de Bienvenida con elementos esenciales y útiles consejos para facilitar la adaptación de tu cachorro y asegurarle un inicio feliz en su nuevo hogar.",
    img: kit,
  },
  {
    title: "Entregas nacionales",
    desc: "Realizamos entregas seguras a nivel nacional, garantizando que tu cachorro llegue sano y en óptimas condiciones hasta la puerta de tu hogar.",
    img: entregas,
  },
];

const Services = () => {
  return (
    <div className="bg-[#66B4FF] min-h-screen">
      <section className="pt-[120px] pb-20 px-6 md:px-20 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10">
          Lo que ofrecemos<span className="text-[#363636]">.</span>
        </h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop={true}
          className="max-w-6xl"
        >
          {services.map((s) => (
            <SwiperSlide key={s.title}>
              <div className="text-center p-6 border rounded-xl shadow-md transition hover:shadow-xl hover:border-[#363636] hover:-translate-y-1 duration-300 bg-white h-full flex flex-col justify-between">
                <div className="relative w-32 h-32 mx-auto mb-6 group">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="object-cover w-full h-full rounded-full group-hover:opacity-60"
                  />
                  <div className="absolute inset-0 rounded-full bg-[#363636] opacity-0 group-hover:opacity-70 flex items-center justify-center text-white text-4xl font-bold transition duration-300">
                    +
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold mb-2 text-[#363636]">
                  {s.title}
                </h3>
                <p className="text-[#9A9A9A] text-sm mb-2">{s.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Services;
