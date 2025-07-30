const Banner = () => {
  return (
    <div className="bg-white text-black h-16 mt-20 flex items-center justify-center ">
      <div className="animate-marquee flex items-center whitespace-nowrap text-sm md:text-base font-medium tracking-wide">
        <span className="mx-6">🔒 Pagos seguros por Mercado Pago</span>
        <span className="mx-6">🚚 Envíos gratuitos en compras mayores a $100</span>
        <span className="mx-6">📞 Atención personalizada 24/7</span>
        <span className="mx-6">🐶 Criadero certificado - Calidad garantizada</span>
      </div>
    </div>
  );
};

export default Banner;
