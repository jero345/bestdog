import React from "react";
import { FaDog, FaPaw, FaSyringe } from "react-icons/fa";
import timeline from "../assets/timeline.png"; // Asegúrate de tener esta imagen en tu carpeta assets

const items = [
  {
    icon: <FaDog size={20} />,
    title: "Dietas veterinarias",
    desc: "Planes alimenticios diseñados por expertos para la salud óptima de tu mascota.",
  },
  {
    icon: <FaPaw size={20} />,
    title: "Clases de formación",
    desc: "Entrenamiento adaptado para mejorar el comportamiento y la convivencia.",
  },
  {
    icon: <FaSyringe size={20} />,
    title: "Cuidado y bienestar",
    desc: "Servicios de prevención y atención médica para mantenerlos felices y sanos.",
  },
];

const Timeline = () => {
  return (
    <section className="w-full bg-[#f7f9fb] py-20 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Columna izquierda (imagen) */}
      <div className="w-full flex items-center justify-center">
        <img
          src={timeline}
          alt="Perro feliz"
          className="rounded-lg shadow-lg object-cover w-full max-w-lg"
        />
      </div>

      {/* Columna derecha (contenido) */}
      <div className="flex items-center">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-extrabold text-[#363636] mb-10 leading-snug">
            Atención sanitaria para perros
            <span className="text-[#363636]">.</span>
          </h2>

          <div className="flex flex-col gap-10 relative border-l-2 border-[#363636] pl-6">
            {items.map((item, idx) => (
              <div key={idx} className="relative pl-4">
                {/* Icono circular */}
                <div className="absolute -left-[38px] top-1 w-8 h-8 rounded-full border-2 border-[#363636] bg-white flex items-center justify-center text-[#363636]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#363636] mb-1">
                  {item.title}
                </h3>
                <p className="text-[#6b7280] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Botones CTA */}
          <div className="flex gap-4 mt-10">
            <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition">
              Más información
            </button>
            <button className="bg-[#363636] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#e89e1e] transition">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
