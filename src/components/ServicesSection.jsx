
// src/components/ServicesSection.jsx
const services = [
  {
    title: "Grooming",
    desc: "There was leg rub face on everything give hence attitude was nap all day for under best service.",
    img: "https://i.ibb.co/JpN78m6/grooming.jpg",
  },
  {
    title: "Training",
    desc: "There was leg rub face on everything give hence attitude was nap all day for under best service.",
    img: "https://i.ibb.co/Zh0vPvD/training.jpg",
  },
  {
    title: "Cleaning",
    desc: "There was leg rub face on everything give hence attitude was nap all day for under best service.",
    img: "https://i.ibb.co/N6WLx3n/cleaning.jpg",
  },
  {
    title: "Breeding",
    desc: "There was leg rub face on everything give hence attitude was nap all day for under best service.",
    img: "https://i.ibb.co/dKq6p9T/breeding.jpg",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 px-6 md:px-20 text-center">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
        What we do<span className="text-orange-500">.</span>
      </h2>
      <p className="text-gray-500 text-lg max-w-3xl mx-auto mt-4">
        We help save lives of your beloved pets. Our expert pet trainers are
        always here to help your pet in need.
      </p>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {services.map((s) => (
          <div
            key={s.title}
            className="text-center p-6 border rounded-xl shadow-md transition hover:shadow-xl hover:border-orange-500 hover:-translate-y-1 duration-300"
          >
            <div className="relative w-40 h-40 mx-auto mb-6">
              <img
                src={s.img}
                alt={s.title}
                className="object-cover w-full h-full rounded-full group-hover:opacity-60"
              />
              <div className="absolute inset-0 rounded-full bg-orange-500 opacity-0 group-hover:opacity-70 flex items-center justify-center text-white text-4xl font-bold transition duration-300">
                +
              </div>
            </div>
            <h3 className="text-2xl font-extrabold mb-2 text-gray-800">
              {s.title}
            </h3>
            <p className="text-gray-500 text-sm mb-2">{s.desc}</p>
            <span className="text-orange-500 font-semibold text-sm">read more</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;