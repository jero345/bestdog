const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff] text-black h-16 mt-[90px] flex items-center justify-center shadow-lg relative z-40">
      <div className="animate-marquee flex items-center whitespace-nowrap text-sm md:text-lg font-semibold tracking-wide uppercase">
        <span className="mx-10">✨ Más valor por tu elección</span>
        <span className="mx-10">🚚 Envíos a nivel nacional</span>
        <span className="mx-10">💚 Crianza ética</span>
        <span className="mx-10">🐶 Criadero certificado</span>
      </div>
    </div>
  );
};

export default Banner;