import React from "react";
import { FaDog, FaPaw, FaSyringe } from "react-icons/fa";

const items = [
  {
    icon: <FaDog size={20} />,
    title: "Dietas veterinarias",
    desc: "Los mares son su forma de movimiento, arriba estaban verdes después de que la criatura vio el medio dijo menor hizo fruto de semejanza moveth cuyos dos trajeron.",
  },
  {
    icon: <FaPaw size={20} />,
    title: "Clases de formación",
    desc: "Los mares son su forma de movimiento, arriba estaban verdes después de que la criatura vio el medio dijo menor hizo fruto de semejanza moveth cuyos dos trajeron.",
  },
  {
    icon: <FaSyringe size={20} />,
    title: "Cuidado y bienestar",
    desc: "Los mares son su forma de movimiento, arriba estaban verdes después de que la criatura vio el medio dijo menor hizo fruto de semejanza moveth cuyos dos trajeron.",
  },
];

const Timeline = () => {
  return (
    <section className="w-full bg-[#f7f9fb] py-20 px-6 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
      {/* Columna izquierda (contenido) */}
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full max-w-md">
          <h2 className="text-4xl font-extrabold text-[#363636] mb-10">
            Atención sanitaria para perros
            <span className="text-[#fab037]">.</span>
          </h2>

          <div className="flex flex-col gap-10 relative border-l-2 border-[#fab037] pl-6">
            {items.map((item, idx) => (
              <div key={idx} className="relative pl-4">
                {/* Icono circular */}
                <div className="absolute -left-[38px] top-1 w-8 h-8 rounded-full border-2 border-[#fab037] bg-white flex items-center justify-center text-[#fab037]">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#363636] mb-1">{item.title}</h3>
                <p className="text-[#9A9A9A] text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Columna derecha (vacía para diseño simétrico) */}
      <div className="hidden lg:block"></div>
    </section>
  );
};

export default Timeline;
