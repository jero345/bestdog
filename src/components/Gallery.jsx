const services = [
  {
    title: "Medical Treatments",
    desc: "Execute core competencies so that as an end result, we make users into was advocates building benchmarking by with a goal to create.",
    price: "$20",
  },
  {
    title: "Cross Breeding",
    desc: "Execute core competencies so that as an end result, we make users into was advocates building benchmarking by with a goal to create.",
    price: "$20",
  },
  {
    title: "General Grooming",
    desc: "Execute core competencies so that as an end result, we make users into was advocates building benchmarking by with a goal to create.",
    price: "$20",
  },
  {
    title: "Diet & Nutrition",
    desc: "Execute core competencies so that as an end result, we make users into was advocates building benchmarking by with a goal to create.",
    price: "$20",
  },
  {
    title: "Nails Treatment",
    desc: "Execute core competencies so that as an end result, we make users into was advocates building benchmarking by with a goal to create.",
    price: "$20",
  },
  {
    title: "Ear Cleaning",
    desc: "Execute core competencies so that as an end result, we make users into was advocates building benchmarking by with a goal to create.",
    price: "$20",
  },
];

const Gallery = () => {
  return (
    <section className="py-20 px-6 md:px-20">
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#363636] text-center mb-12">
        Our Services <span className="text-[#fab037]">.</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((s, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border shadow p-6 relative overflow-hidden group hover:border-[#fab037] transition"
          >
            {/* Precio en la esquina superior derecha */}
            <div className="absolute top-4 right-4 bg-[#fab037] text-white font-bold rounded-full w-14 h-14 flex items-center justify-center shadow-lg text-sm">
              {s.price}
            </div>

            {/* Imagen (espacio reservado sin imagen real) */}
            <div className="bg-gray-100 h-48 mb-6 flex items-center justify-center rounded-lg">
              <span className="text-[#9a9a9a]">No Image</span>
            </div>

            {/* Contenido del servicio */}
            <h3 className="text-xl font-extrabold mb-2 text-[#363636]">{s.title}</h3>
            <p className="text-[#9a9a9a] text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
