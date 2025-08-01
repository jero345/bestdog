import React from "react";
import { FaBone, FaPaw, FaUtensils, FaBabyCarriage, FaSyringe, FaHome } from "react-icons/fa";
import timeline from "../assets/timeline.png"; // Imagen de apoyo

const items = [
  {
    icon: <FaBone size={20} />,
    title: "Alimentación adecuada desde el primer día",
    desc: "Tanto los cachorros como sus padres reciben una dieta balanceada y de calidad para asegurar su salud y desarrollo.",
  },
  {
    icon: <FaPaw size={20} />,
    title: "Acompañamiento en la desparasitación",
    desc: "Se realiza un seguimiento responsable del proceso, fundamental para el crecimiento saludable del cachorro.",
  },
  {
    icon: <FaUtensils size={20} />,
    title: "Suplementación temprana con concentrado",
    desc: "Iniciamos la alimentación complementaria apoyando la nutrición materna con concentrado especial para cachorros.",
  },
  {
    icon: <FaBabyCarriage size={20} />,
    title: "Transición alimenticia guiada",
    desc: "Se lleva a cabo un proceso cuidadoso del destete hacia el concentrado que el cachorro continuará consumiendo.",
  },
  {
    icon: <FaSyringe size={20} />,
    title: "Vacunación y refuerzo de desparasitación",
    desc: "Aplicamos la primera dosis de vacuna y reforzamos la desparasitación para fortalecer su sistema inmune.",
  },
  {
    icon: <FaHome size={20} />,
    title: "Listos para un nuevo hogar",
    desc: "Luego de cumplir con cada etapa de cuidado, el cachorro está preparado para convertirse en un nuevo miembro de tu familia.",
  },
];

const Timeline = () => {
  return (
    <section className="w-full bg-[#f7f9fb] py-20 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Columna izquierda (imagen) */}
      <div className="w-full flex items-center justify-center">
        <img
          src={timeline}
          alt="Cachorros felices"
          className="rounded-lg shadow-lg object-cover w-full max-w-lg"
        />
      </div>

      {/* Columna derecha (contenido) */}
      <div className="flex items-center">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-extrabold text-[#363636] mb-10 leading-snug">
            Nuestro proceso de cuidado
            <span className="text-[#66B4FF]">.</span>
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

          {/* Botón CTA */}
          <div className="flex gap-4 mt-10">
            <a
              href="https://api.whatsapp.com/send?phone=573146582927&text=¡Hola!%20Quiero%20más%20información%20sobre%20los%20cachorros%20🐶"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#66B4FF] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#4da6ff] transition"
            >
              Contáctanos
            </a>
          </div>

          {/* Frase motivadora */}
          <p className="mt-8 text-[#363636] text-lg font-medium italic text-center">
            ✨ ¡Conoce a tu compañero ideal y empieza esta hermosa historia de amor peludo! ✨
          </p>
        </div>
      </div>
    </section>
  );
};

export default Timeline;