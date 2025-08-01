const Banner = () => {
  const text =
    "🐶❤ Un nuevo miembro para tu familia te espera con la cola moviéndose y el corazón lleno de amor. 👨‍👩‍👧‍👦 Conoce nuestros cachorros y empieza una historia de amor incondicional desde hoy.";

  return (
    <div className="bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff] text-black h-16 mt-[90px] flex items-center justify-center shadow-lg relative z-40 overflow-hidden">
      <div className="animate-marquee flex items-center whitespace-nowrap text-sm md:text-lg font-semibold tracking-wide uppercase">
        {/* Repetimos varias veces para evitar el espacio en blanco */}
        <span className="mx-10">{text}</span>
        <span className="mx-10">{text}</span>
        <span className="mx-10">{text}</span>
        <span className="mx-10">{text}</span>
      </div>
    </div>
  );
};

export default Banner;
