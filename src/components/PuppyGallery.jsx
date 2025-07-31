import React, { useState } from "react";


const categories = [ "Raza Pequeña", "Raza Mediana", "Raza Grande",];

const puppies = [
  {
    id: 1,
    title: "Pomerania",
    category: "Raza Pequeña",
    image: "https://place-puppy.com/300x200",
    description: "Consejos para entrenar cachorros de manera efectiva.",

    
  },
  {
    id: 2,
    title: "Bernés de la montaña ",
    category: "Raza Grande",
    image: "https://place-puppy.com/301x200",
    description: "Rutinas de ejercicio y salud para cachorros felices.",
  },
  {
    id: 3,
    title: "Bulldog inglés ",
    category: "Raza Mediana",
    image: "https://place-puppy.com/302x200",
    description: "Secretos de grooming para mantener el pelaje sano.",
  },
  {
    id: 4,
    title: "Teckel",
    category: "Raza Pequeña",
    image: "https://place-puppy.com/303x200",
    description: "Guía sobre la cría responsable de cachorros.",
  },
    {
    id: 5,
    title: "Jack Russel",
    category: "Raza Pequeña",
    image: "https://place-puppy.com/303x200",
    description: "Guía sobre la cría responsable de cachorros.",
  },
    {
    id: 6,
    title: "Bulldog francés",
    category: "Raza Pequeña",
    image: "https://place-puppy.com/303x200",
    description: "Guía sobre la cría responsable de cachorros.",
  },
    {
    id: 7,
    title: "Pinscher",
    category: "Raza Pequeña",
    image: "https://place-puppy.com/303x200",
    description: "Guía sobre la cría responsable de cachorros.",
  },
    {
    id: 8,
    title: "Yorkshire ",
    category: "Raza Pequeña",
    image: "https://place-puppy.com/303x200",
    description: "Guía sobre la cría responsable de cachorros.",
  },
    {
    id: 9,
    title: "cocker spaniel",
    category: "Raza Mediana",
    image: "https://place-puppy.com/302x200",
    description: "Secretos de grooming para mantener el pelaje sano.",
  },
    {
    id: 10,
    title: "pastor ganadero australiano",
    category: "Raza Mediana",
    image: "https://place-puppy.com/302x200",
    description: "Secretos de grooming para mantener el pelaje sano.",
  },
    {
    id: 11,
    title: "Border collie",
    category: "Raza Mediana",
    image: "https://place-puppy.com/302x200",
    description: "Secretos de grooming para mantener el pelaje sano.",
  },
    {
    id: 12,
    title: "Beagle",
    category: "Raza Mediana",
    image: "https://place-puppy.com/302x200",
    description: "Secretos de grooming para mantener el pelaje sano.",
  },
    {
    id: 13,
    title: "Dálmata",
    category: "Raza Mediana",
    image: "https://place-puppy.com/302x200",
    description: "Secretos de grooming para mantener el pelaje sano.",
  },
    {
    id: 14,
    title: "Husky siberiano",
    category: "Raza Grande",
    image: "https://place-puppy.com/301x200",
    description: "Rutinas de ejercicio y salud para cachorros felices.",
  },
    {
    id: 15,
    title: "Doberman",
    category: "Raza Grande",
    image: "https://place-puppy.com/301x200",
    description: "Rutinas de ejercicio y salud para cachorros felices.",
  },
    {
    id: 16,
    title: "Golden retriever",
    category: "Raza Grande",
    image: "https://place-puppy.com/301x200",
    description: "Rutinas de ejercicio y salud para cachorros felices.",
  },
    {
    id: 17,
    title: "Pastor belga malinois",
    category: "Raza Grande",
    image: "https://place-puppy.com/301x200",
    description: "Rutinas de ejercicio y salud para cachorros felices.",
  },
    {
    id: 18,
    title: "San Bernardo",
    category: "Raza Grande",
    image: "https://place-puppy.com/301x200",
    description: "Rutinas de ejercicio y salud para cachorros felices.",
  },
];

const PuppyGallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedPuppy, setSelectedPuppy] = useState(null);

  const filteredPuppies =
    activeCategory === "All"
      ? puppies
      : puppies.filter((puppy) => puppy.category === activeCategory);

  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      {/* Filtros */}
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 font-semibold rounded-full transition ${
              activeCategory === cat
                ? "bg-[#363636] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-[#363636] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Galería */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredPuppies.map((puppy) => (
          <div
            key={puppy.id}
            onClick={() => setSelectedPuppy(puppy)}
            className="cursor-pointer group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition"
          >
            <img
              src={puppy.image}
              alt={puppy.title}
              className="w-full h-48 object-cover group-hover:scale-105 transition"
            />
            <div className="p-4 bg-white">
              <h3 className="text-lg font-bold">{puppy.title}</h3>
              <p className="text-sm text-gray-500">{puppy.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal de Detalle */}
      {selectedPuppy && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelectedPuppy(null)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✖
            </button>
            <img
              src={selectedPuppy.image}
              alt={selectedPuppy.title}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedPuppy.title}</h2>
            <p className="text-gray-600 mb-4">{selectedPuppy.description}</p>
            <span className="px-3 py-1 bg-[#363636] text-white rounded-full">
              {selectedPuppy.category}
            </span>
          </div>
        </div>
      )}
    </section>
  );
};

export default PuppyGallery;
